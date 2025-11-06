'use server';

import formConfigJson from '@/config/compareRateFormFields.json';
import { createClient } from '@/lib/supabase/server';
import type { FormConfig } from '@/types/compareRateForm';
import type { State } from '@/types/compareRateFormAction';
import { CompareRatesResponse, Lender } from '@/types/lender';

const formConfig = formConfigJson as FormConfig;

function coerceFromFormData(fd: FormData, cfg: FormConfig) {
    const out: Record<string, string | number> = {};
    for (const step of cfg.steps) {
        for (const f of step.fields) {
            const raw = fd.get(f.id);
            if (raw == null) {
                out[f.id] = '';
                continue;
            }
            const s = String(raw).trim();

            const optionsAreNumbers =
                Array.isArray((f as any).options) &&
                (f as any).options.length > 0 &&
                (f as any).options.every((o: unknown) => typeof o === 'number');
            const shouldBeNumber = f.type === 'number' || optionsAreNumbers;

            out[f.id] = shouldBeNumber && s !== '' ? Number(s) : s;
        }
    }
    return out;
}

function validateRequired(payload: Record<string, unknown>, cfg: FormConfig) {
    const errors: Record<string, string> = {};
    for (const step of cfg.steps) {
        for (const f of step.fields) {
            if (f.required && (payload[f.id] === '' || payload[f.id] == null)) {
                errors[f.id] = `${f.label} is required`;
            }
        }
    }
    return errors;
}

export async function handleCompareForm(prev: State, formData: FormData): Promise<State> {
    try {
        const supabase = await createClient();

        const payload = coerceFromFormData(formData, formConfig);
        const validationErrors = validateRequired(payload, formConfig);

        if (Object.keys(validationErrors).length) {
            return {
                ok: false,
                errors: validationErrors,
                payload,
                data: [],
            };
        }

        const { data: resp, error } = await supabase.functions.invoke<CompareRatesResponse>(
            'compare-rates',
            {
                body: payload,
            }
        );

        if (error) {
            return {
                ok: false,
                errors: {
                    _server: error.message ?? 'compare-rate API error',
                },
                payload,
                data: [],
            };
        }

        if (!resp || resp.ok !== true || !Array.isArray(resp.lenders)) {
            return {
                ok: false,
                errors: {
                    _server: resp?.message ?? 'No lender offers match the given criteria.',
                },
                payload,
                data: [],
            };
        }

        return {
            ok: true,
            errors: {},
            payload,
            data: resp.lenders,
        };
    } catch (err: unknown) {
        const message = (err as { message?: string })?.message ?? 'Unknown server error';
        return {
            ok: false,
            errors: {
                _server: message,
            },
            payload: {},
            data: [],
        };
    }
}
