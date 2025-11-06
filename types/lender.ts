export type LenderCalc = {
    loanAmount: number;
    paymentPI: number;
    apr_nominal: number;
    apr_effective: number;
    termMonths: number;
    yearlyRate: number;
    usedAprFallback: boolean;
};

export type Lender = {
    id: number;
    lender_id: number;
    lender_name: string;
    product_type: string;
    loan_term_years: number;
    loan_purpose: string;
    occupancy_type: string;
    assumed_loan_amount: number;
    down_payment_pct: number;
    credit_score_band: string;
    rate: number;
    apr: number;
    monthly_payment: number;
    points_fee: number;
    date_quoted: string;
    calc: LenderCalc;
};

export type CompareRatesResponse = {
    ok: boolean;
    count: number;
    lenders: Lender[];
    message?: string;
};
