'use client';

import { Lender } from '@/types/lender';
import UserPayloadInput from './UserPayloadInput';
import { useMemo, useState } from 'react';

type Props = {
    lenders: Lender[];
    payload: any;
};
type SortKey = 'yearlyRate' | 'apr_effective' | 'paymentPI';
type SortDir = 'asc' | 'desc';

const pct = (n: number) => `${n.toFixed(3)}%`;
const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

export default function CompareRatesCalc({ lenders, payload }: Props) {
    const [sortKey, setSortKey] = useState<SortKey>('yearlyRate');
    const [sortDir, setSortDir] = useState<SortDir>('asc');

    const sorted = useMemo(() => {
        const arr = [...lenders];
        arr.sort((a, b) => {
            const av = a.calc[sortKey];
            const bv = b.calc[sortKey];
            const cmp = (av ?? 0) - (bv ?? 0);
            return sortDir === 'asc' ? cmp : -cmp;
        });
        return arr;
    }, [lenders, sortKey, sortDir]);
    return (
        <div className="mt-5">
            {/* summary card you already render */}
            {payload && Object.keys(payload).length !== 0 && <UserPayloadInput payload={payload} />}

            {/* sort controls */}
            {lenders && lenders.length !== 0 && (
                <div className="flex items-end gap-4 mb-4">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">SORT BY</span>
                        </div>
                        <select
                            className="select select-bordered"
                            value={sortKey}
                            onChange={(e) => setSortKey(e.target.value as SortKey)}
                        >
                            <option value="yearlyRate">Interest (yearly)</option>
                            <option value="apr_effective">APR (effective)</option>
                            <option value="paymentPI">Payment (P&I)</option>
                        </select>
                    </label>

                    <button
                        className="btn btn-outline"
                        onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
                    >
                        {sortDir === 'asc' ? 'Asc ↑' : 'Desc ↓'}
                    </button>
                </div>
            )}

            {!sorted.length && (
                <div className="text-center text-gray-500 mt-4">
                    No lender data match with your loan details.
                </div>
            )}

            <div className="space-y-4 mt-5">
                {sorted.map((l) => {
                    const c = l.calc;
                    const termYears = Math.round((c.termMonths ?? 0) / 12);
                    return (
                        <div
                            key={`${l.id}-${l.lender_id}-${l.date_quoted}`}
                            className="stats stats-vertical sm:stats-horizontal shadow w-full"
                        >
                            <div className="stat min-w-[16rem]">
                                <div className="stat-title">Lender</div>
                                <div className="stat-value text-green-700 sm:text-lg text-wrap">
                                    {l.lender_name}
                                </div>
                                <div className="stat-desc">
                                    {l.product_type} <span className="mx-1">&bull;</span>{' '}
                                    {termYears}-Year Fixed
                                </div>
                            </div>

                            <div
                                className={`stat ${sortKey === 'yearlyRate' ? 'bg-base-300' : 'bg-base-100'}`}
                            >
                                <div className="stat-title">Interest (yearly)</div>
                                <div className="stat-value text-primary text-xl sm:text-2xl">
                                    {pct(c.yearlyRate)}
                                </div>
                                <div className="stat-desc">{c.termMonths} months</div>
                            </div>

                            <div
                                className={`stat ${sortKey === 'apr_effective' ? 'bg-base-300' : 'bg-base-100'}`}
                            >
                                <div className="stat-title">APR</div>
                                <div className="stat-value text-xl sm:text-2xl">
                                    {pct(c.apr_effective)}
                                </div>
                                <div className="stat-desc">Nominal {pct(c.apr_nominal)}</div>
                            </div>

                            <div
                                className={`stat ${sortKey === 'paymentPI' ? 'bg-base-300' : 'bg-base-100'}`}
                            >
                                <div className="stat-title">Monthly Payment (P&I)</div>
                                <div className="stat-value text-xl sm:text-2xl">
                                    {money(c.paymentPI)}/mo
                                </div>
                                <div className="stat-desc">Loan {money(c.loanAmount)}</div>
                            </div>

                            <div className="stat flex items-center justify-center">
                                <button className="btn btn-error text-white">View Details →</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
