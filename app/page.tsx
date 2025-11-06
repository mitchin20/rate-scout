'use client';

export default function Home() {
    return (
        <main className="min-h-screen bg-base-200">
            {/* HERO */}
            <section className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 py-16">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
                        alt="Modern home"
                        className="max-w-md rounded-2xl shadow-lg"
                    />
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Compare mortgage offers in minutes.
                        </h1>
                        <p className="py-6 text-base-content/70">
                            One form. Multiple lenders. Crystal-clear monthly payments and APR. No
                            spammy calls—just transparent numbers to help you decide.
                        </p>

                        {/* Quick Compare Card */}
                        <div className="card bg-base-200 shadow">
                            <div className="card-body">
                                <h3 className="card-title">Quick compare</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                    <select
                                        className="select select-bordered w-full"
                                        defaultValue="purchase"
                                    >
                                        <option value="purchase">Purchase</option>
                                        <option value="refinance">Refinance</option>
                                    </select>
                                    <input
                                        className="input input-bordered w-full"
                                        placeholder="Property price (e.g. 500,000)"
                                    />
                                    <input
                                        className="input input-bordered w-full"
                                        placeholder="Down payment % (e.g. 20)"
                                    />
                                    <select
                                        className="select select-bordered w-full"
                                        defaultValue="30"
                                    >
                                        <option value="30">30-Year</option>
                                        <option value="20">20-Year</option>
                                        <option value="15">15-Year</option>
                                        <option value="10">10-Year</option>
                                    </select>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <button className="btn btn-ghost">Advanced</button>
                                    <a href="/compare-rate" className="btn btn-primary">
                                        Compare rates →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-4 text-sm text-base-content/60">
                            Trusted by first-time buyers & investors • SOC2-ready • Bank-level
                            security
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="px-6 md:px-10">
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 w-full mt-16">
                    <div className="stat">
                        <div className="stat-title">Average time to first offer</div>
                        <div className="stat-value text-primary">3 min</div>
                        <div className="stat-desc">Form → Offers</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Lenders compared</div>
                        <div className="stat-value">25+</div>
                        <div className="stat-desc">Nationwide coverage</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Typical monthly savings</div>
                        <div className="stat-value text-success">$187</div>
                        <div className="stat-desc">vs average market quote</div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-6 md:px-10 py-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why RateScout</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h3 className="card-title">True APR, not teaser rates</h3>
                            <p className="text-base-content/70">
                                We compute monthly P&I and effective APR with points & fees so you
                                can compare apples-to-apples.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h3 className="card-title">No credit pull to compare</h3>
                            <p className="text-base-content/70">
                                Explore scenarios without impacting your credit. Connect later when
                                you’re ready.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h3 className="card-title">Investor-friendly</h3>
                            <p className="text-base-content/70">
                                Support for second homes, 2–4 units, and rent inputs for quick
                                DSCR-style checks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="px-6 md:px-10 pb-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">How it works</h2>
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li className="step step-primary">Tell us your scenario</li>
                    <li className="step step-primary">We fetch best quotes</li>
                    <li className="step">Transparent breakdown</li>
                    <li className="step">Lock & close with confidence</li>
                </ul>
            </section>

            {/* CTA STRIP */}
            <section className="px-6 md:px-10 pb-16">
                <div className="card bg-primary text-primary-content shadow">
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-2xl">Ready to see today’s best offers?</h3>
                        <p className="opacity-90">
                            It takes about 3 minutes. No credit pull. No commitment.
                        </p>
                        <div className="card-actions">
                            <a href="/compare-rate" className="btn">
                                Start comparing →
                            </a>
                            <a href="/compare-rate" className="btn btn-outline">
                                Try calculators
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer p-10 bg-base-100 text-base-content">
                <aside>
                    <span className="text-xl font-extrabold">
                        Rate<span className="text-primary">Scout</span>
                    </span>
                    <p className="text-base-content/70">Smarter mortgage shopping.</p>
                </aside>
                <div className="flex w-full justify-between">
                    <nav className="flex flex-col gap-4">
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Compare</a>
                        <a className="link link-hover">Calculators</a>
                        <a className="link link-hover">Resources</a>
                    </nav>
                    <nav className="flex flex-col gap-4">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Privacy</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className="flex flex-col gap-4">
                        <h6 className="footer-title">Get started</h6>
                        <a href="/compare-rate" className="btn btn-primary btn-sm">
                            Compare rates
                        </a>
                    </nav>
                </div>
            </footer>
        </main>
    );
}
