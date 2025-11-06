'use client';

import { useActionState, useEffect, useState } from 'react';
import { handleCompareForm } from './actions';
import formConfigJson from '@/config/compareRateFormFields.json';
import type { State } from '@/types/compareRateFormAction';
import type { FormConfig, FormField } from '@/types/compareRateForm';
import { Lender } from '@/types/lender';
import CompareRatesCalc from '@/components/compare-rate-components/CompareRatesCalc';
import UserPayloadInput from '@/components/compare-rate-components/UserPayloadInput';

const formConfig = formConfigJson as FormConfig;
const initialState: State = { ok: false, errors: {}, payload: {}, data: [] };

function Field({ field, disabled }: { field: FormField; disabled: boolean }) {
    if (field.type === 'select') {
        return (
            <select
                name={field.id}
                defaultValue={field.default !== undefined ? String(field.default) : ''}
                required={field.required}
                className="select select-accent space-x-4"
                disabled={disabled}
            >
                {(field.options ?? []).map((option) => {
                    const key = String(option);
                    return (
                        <option key={key} value={key}>
                            {field.displayMap?.[option] ?? key}
                        </option>
                    );
                })}
            </select>
        );
    }

    return (
        <input
            name={field.id}
            type={field.type}
            className="input input-accent space-x-4"
            placeholder={field.placeholder ?? ''}
            defaultValue={field.default !== undefined ? String(field.default) : ''}
            required={field.required}
            {...(field.type === 'number' ? { min: field.min ?? 0, inputMode: 'numeric' } : {})}
        />
    );
}

export default function CompareRate() {
    const [data, setData] = useState<Lender[]>([]);
    const [payload, setPayload] = useState<any | null>({});

    const [state, formAction, isPending] = useActionState<State, FormData>(
        handleCompareForm,
        initialState
    );
    const today = new Date();
    const formattedTodayDate = today
        .toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
        .replace(/^([A-Za-z]+)\s/, '$1. ');

    useEffect(() => {
        setPayload(state.payload);
        if (state.ok) {
            setData(state.data);
        } else {
            setData([]);
        }
    }, [state.ok, state.data, state.payload]);

    return (
        <main className="mx-auto p-6">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl text-green-700 font-bold">Let’s Find You a Better Deal</h1>
                <h6 className="mb-10">Compare Mortgage Rate for {formattedTodayDate}</h6>
            </div>

            <form action={formAction} className="space-y-6">
                <div className="card shadow-sm">
                    <div className="card-body">
                        {formConfig.steps.map((step) => (
                            <section key={step.id}>
                                <h2 className="text-lg font-semibold mb-3">{step.title}</h2>
                                <div className="grid sm:grid-cols-5 gap-5">
                                    {step.fields.map((f) => (
                                        <label key={f.id} className="form-control">
                                            <span className="label-text">{f.label}</span>
                                            <div className="mt-2">
                                                <Field field={f} disabled={isPending} />
                                            </div>
                                            {state.errors[f.id] && (
                                                <span className="text-error text-sm">
                                                    {state.errors[f.id]}
                                                </span>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </section>
                        ))}
                        <div className="flex card-actions justify-end">
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isPending}
                                >
                                    {isPending ? 'Submitting…' : 'View Rates'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {Object.keys(state.errors).length > 0 && (
                <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-md">
                    <h3 className="text-red-700 font-semibold mb-2">
                        Please fix the following errors:
                    </h3>
                    <ul className="list-disc list-inside text-red-600 space-y-1">
                        {Object.entries(state.errors).map(([field, message]) => (
                            <li key={field}>
                                <strong>{field}</strong>: {message}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isPending && (
                <div className="flex justify-center items-center mt-10">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            )}

            {!isPending && <CompareRatesCalc lenders={data} payload={payload} />}
        </main>
    );
}
