import React from "react";

const BlaiseLandingRetail: React.FC = () => {
    const year = new Date().getFullYear();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // plug into your waitlist backend / API
    };

    return (
        <div className="min-h-screen bg-[#05090A] text-white">
            {/* background glow */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00FF66]/25 via-transparent to-transparent" />
                <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[#00FF66]/18 blur-3xl" />
                <div className="absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-[#00FF66]/10 blur-3xl" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                {/* HEADER */}
                <header className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/header.svg"
                            alt="Blaise"
                            className="h-6 w-6 invert"
                        />
                        <span className="text-lg font-semibold tracking-tight">blaise</span>
                    </div>

                    <nav className="hidden items-center gap-6 text-xs text-white/65 sm:flex">
                        <a href="#how" className="hover:text-white transition">
                            How it works
                        </a>
                        <a href="#what" className="hover:text-white transition">
                            What you can access
                        </a>
                        <a href="#faq" className="hover:text-white transition">
                            Questions
                        </a>
                        <a
                            href="#waitlist"
                            className="rounded-full bg-white/5 px-4 py-2 text-[11px] font-semibold hover:bg-white/10 transition"
                        >
                            Get early access
                        </a>
                        <a
                            href="/instit"
                            className="rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold hover:bg-white/10 transition"
                        >
                            Instit
                        </a>
                    </nav>
                </header>

                {/* MAIN */}
                <main className="flex flex-1 flex-col gap-16">
                    {/* HERO – more retail / Revolut-style */}
                    <section className="mt-4 grid gap-10 lg:grid-cols-2 lg:items-center">
                        {/* Left */}
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9FFFBF]">
                                STARTING FROM 30€
                            </p>

                            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                                Start investing in private deals,
                                <br />
                                <span className="text-[#7BFFB4]">without blocking your money for years.</span>
                            </h1>

                            <p className="mt-4 max-w-xl text-sm text-white/75 sm:text-[15px]">
                                With Blaise, you can access selected private opportunities from
                                30€ and keep more control over your timing. Clear information,
                                simple flows, and an experience built for everyday investors –
                                not experts only.
                            </p>

                            {/* Waitlist */}
                            <div id="waitlist" className="mt-6 max-w-xl">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex w-full items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/15">
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your email to join the waitlist"
                                            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="shrink-0 rounded-full bg-[#00FF66] px-6 py-2 text-xs font-semibold text-black hover:bg-[#34ff84] transition"
                                        >
                                            Get early access
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-white/55">
                                        No spam. Just launch updates and first access.
                                    </p>
                                </form>
                            </div>

                            {/* Small bullets */}
                            <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-white/70">
                                <span className="rounded-full bg-white/5 px-3 py-1">
                                    From 30€ per deal
                                </span>
                                <span className="rounded-full bg-white/5 px-3 py-1">
                                    Clear exit options explained
                                </span>
                                <span className="rounded-full bg-white/5 px-3 py-1">
                                    No trading noise
                                </span>
                            </div>
                        </div>

                        {/* Right – simple hero visual */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-sm rounded-3xl bg-white/[0.03] p-4 ring-1 ring-white/10">
                                <img
                                    src="/blaise-hero.png"
                                    alt="Blaise experience illustration"
                                    className="w-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* HOW IT WORKS – 3 steps, simple */}
                    <section id="how" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            How Blaise works
                        </h2>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="text-xs font-semibold text-white/70">1 · Explore</p>
                                <p className="mt-2 text-xs text-white/75">
                                    Discover private deals with plain-language explanations:
                                    what it is, minimum amount, horizon, and main risks.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="text-xs font-semibold text-white/70">2 · Invest</p>
                                <p className="mt-2 text-xs text-white/75">
                                    Start from 30€. See exactly how your money is used and how it
                                    fits in your overall picture.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="text-xs font-semibold text-white/70">3 · Follow & exit</p>
                                <p className="mt-2 text-xs text-white/75">
                                    Track your position over time and understand your options if
                                    you want to step out instead of staying locked in.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHAT YOU CAN ACCESS */}
                    <section id="what" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            What you can access with Blaise
                        </h2>
                        <p className="max-w-3xl text-sm text-white/75 sm:text-[15px]">
                            Blaise focuses on real, curated opportunities outside listed
                            markets – not day trading, not hype. The details will depend on
                            regulation and partners, but the intention is clear:
                            give everyday investors a simple entry into private deals.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3 text-xs text-white/80">
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="font-semibold">Real-world projects</p>
                                <p className="mt-1 text-white/70">
                                    Access to selected projects and businesses that do not appear
                                    on stock exchanges.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="font-semibold">Small entry tickets</p>
                                <p className="mt-1 text-white/70">
                                    Built so you can start small, test, and learn, instead of
                                    committing a large amount from day one.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="font-semibold">Clear information</p>
                                <p className="mt-1 text-white/70">
                                    No jargon walls. Key points about how it works, for how long,
                                    and what could happen in simple words.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHO IT'S FOR – more retail tone */}
                    <section className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Blaise is for people who…
                        </h2>
                        <div className="grid gap-4 md:grid-cols-3 text-xs text-white/80">
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="font-semibold">Already invest a bit</p>
                                <p className="mt-1 text-white/70">
                                    You use a broker, an investing app or have funds, and you want
                                    to go one step further.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="font-semibold">Want something beyond stocks</p>
                                <p className="mt-1 text-white/70">
                                    You’re curious about private deals but don’t want complex
                                    paperwork or high minimums.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                                <p className="font-semibold">Care about flexibility</p>
                                <p className="mt-1 text-white/70">
                                    Long term is fine – feeling stuck is not. You want to know
                                    what your options are if life changes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ – simple, retail wording */}
                    <section id="faq" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            A few questions you might have
                        </h2>

                        <div className="space-y-4 text-xs text-white/80">
                            <div>
                                <p className="font-semibold">Is Blaise available right now?</p>
                                <p className="mt-1 text-white/70">
                                    Not yet. We are preparing the first version and the right
                                    conditions for everyday investors. The waitlist gives you
                                    early news and first access when we are ready.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold">Is this advice or a guarantee?</p>
                                <p className="mt-1 text-white/70">
                                    No. Blaise is not about telling you what to do. The goal is to
                                    make private deals easier to access and understand so you can
                                    decide for yourself.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold">
                                    What does “from 30€” really mean?
                                </p>
                                <p className="mt-1 text-white/70">
                                    The idea is that each opportunity can be joined with a small
                                    amount, typically around 30€ or a similar threshold, so you
                                    can start small. Exact levels will depend on regulation and
                                    partners.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white/5 p-4 text-[11px] text-white/55 ring-1 ring-white/10">
                            <p>
                                This page does not constitute an offer or a recommendation to
                                invest. Any future access to opportunities through Blaise will
                                be subject to specific terms, conditions and regulations, shared
                                clearly before you make any decision.
                            </p>
                        </div>
                    </section>

                    {/* CTA strip */}
                    <section className="mt-2 rounded-3xl bg-white/5 px-5 py-5 ring-1 ring-white/12 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">
                                Want to be among the first to try Blaise?
                            </h3>
                            <p className="mt-1 text-xs text-white/70">
                                Join the waitlist and we’ll keep you posted as soon as the first
                                private deals are ready.
                            </p>
                        </div>
                        <a
                            href="#waitlist"
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#00FF66] px-5 py-2 text-xs font-semibold text-black hover:bg-[#34ff84] transition sm:mt-0"
                        >
                            Get early access
                        </a>
                    </section>
                </main>

                {/* FOOTER */}
                <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {year} Blaise. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4">
                            <button className="hover:text-white transition">
                                Terms &amp; privacy
                            </button>
                            <button className="hover:text-white transition">Contact</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlaiseLandingRetail;
