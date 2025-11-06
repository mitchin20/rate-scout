'use client';

type Props = {
    payload: any;
};

export default function UserPayloadInput({ payload }: Props) {
    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 my-5">
            <div className="card-body">
                <h2 className="card-title text-lg text-primary">Your Loan Details</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Purpose:</strong>
                        </span>
                        <span>{payload.loanPurpose}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Profile:</strong>
                        </span>
                        <span>{payload.borrowerProfile}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Property Price:</strong>
                        </span>
                        <span>${payload.propertyPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Property Type:</strong>
                        </span>
                        <span>{payload.propertyType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Down Payment:</strong>
                        </span>
                        <span>{payload.downPaymentPct}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Credit Score:</strong>
                        </span>
                        <span>{payload.creditScoreBand}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Term:</strong>
                        </span>
                        <span>{payload.loanTermYears} years fixed</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Type:</strong>
                        </span>
                        <span>{payload.productType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Occupancy:</strong>
                        </span>
                        <span>{payload.occupancyType.replaceAll('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>ZIP:</strong>
                        </span>
                        <span>{payload.zip}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>
                            <strong>Monthly Rent:</strong>
                        </span>
                        <span>{payload.monthlyRent}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
