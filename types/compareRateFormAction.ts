import type { Lender } from '@/types/lender';

export type State = {
    ok: boolean;
    errors: Record<string, string>;
    payload: Record<string, any>;
    data: Lender[];
};

export const initialState: State = {
    ok: false,
    errors: {},
    payload: {},
    data: [],
};
