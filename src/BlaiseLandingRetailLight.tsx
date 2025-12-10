import React, { useState } from "react";
import { submitWaitlistForm } from "./utils/formSubmit";

const FinnLandingRetailLight: React.FC = () => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const result = await submitWaitlistForm({
            email,
            subject: "Nouvelle inscription à la waitlist Finn",
            fromName: "Finn Waitlist",
        });

        if (result.success) {
            setSubmitStatus("success");
            setEmail("");
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } else {
            setSubmitStatus("error");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-[#F9FAF9] text-[#0A0E0C]">
            {/* light background glows */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#9CFFCE]/30 via-transparent to-transparent" />
                <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[#9CFFCE]/25 blur-3xl" />
                <div className="absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-[#9CFFCE]/15 blur-3xl" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">

                {/* HEADER */}
                <header className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/header.svg"
                            alt="Finn"
                            className="h-6 w-6"
                        />
                        <span className="text-lg font-semibold tracking-tight">Finn</span>
                    </div>

                    <nav className="hidden items-center gap-6 text-xs text-[#444] sm:flex">
                        <a href="#how" className="hover:text-[#0A0E0C] transition">How it works</a>
                        <a href="#what" className="hover:text-[#0A0E0C] transition">Opportunities</a>
                        <a href="#faq" className="hover:text-[#0A0E0C] transition">FAQ</a>
                        <a
                            href="#waitlist"
                            className="rounded-full bg-[#F1F3F0] px-4 py-2 text-[11px] font-semibold hover:bg-[#E6E8E5] transition"
                        >
                            Join waitlist
                        </a>
                    </nav>
                </header>


                {/* MAIN */}
                <main className="flex flex-1 flex-col gap-16">

                    {/* HERO */}
                    <section className="mt-4 grid gap-10 lg:grid-cols-2 lg:items-center">

                        {/* LEFT */}
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#00D26A]">
                                STARTING FROM 30€
                            </p>

                            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                                Invest in private opportunities,
                                <br />
                                <span className="text-[#00D26A]">without locking your money for years.</span>
                            </h1>

                            <p className="mt-4 max-w-xl text-sm text-[#444] sm:text-[15px]">
                                Finn makes it easy to access curated private opportunities from
                                30€, with clear information and more flexibility than traditional
                                long-term commitments. Designed for everyday investors.
                            </p>

                            {/* WAITLIST */}
                            <div id="waitlist" className="mt-6 max-w-xl">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-3 sm:flex-row sm:items-center"
                                >
                                    <div className="flex w-full flex-1 items-center rounded-full bg-white px-3 py-2 ring-1 ring-[#E6E6E6]">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            disabled={isSubmitting}
                                            className="flex-1 bg-transparent text-sm text-[#0A0E0C] placeholder:text-[#888] focus:outline-none disabled:opacity-50"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="ml-2 rounded-full bg-[#00D26A] px-5 py-1.5 text-xs font-semibold text-black hover:bg-[#1BE67F] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Sending..." : "Get access"}
                                        </button>
                                    </div>
                                    {submitStatus === "success" && (
                                        <p className="text-[11px] text-[#00D26A]">
                                            ✓ Merci ! Vous êtes maintenant sur la liste d'attente.
                                        </p>
                                    )}
                                    {submitStatus === "error" && (
                                        <p className="text-[11px] text-red-500">
                                            ✗ Une erreur s'est produite. Veuillez réessayer.
                                        </p>
                                    )}
                                    {submitStatus === "idle" && (
                                        <p className="text-[11px] text-[#666]">No spam. Just launch updates.</p>
                                    )}
                                </form>
                            </div>

                            {/* BADGES */}
                            <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-[#555]">
                                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-[#E6E6E6]">
                                    From 30€
                                </span>
                                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-[#E6E6E6]">
                                    Clear exit info
                                </span>
                                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-[#E6E6E6]">
                                    Simple to understand
                                </span>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-sm rounded-3xl bg-white p-4 ring-1 ring-[#E6E6E6] shadow-sm">
                                <img
                                    src="/finn-hero.png"
                                    alt="Finn visual"
                                    className="w-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>

                    </section>

                    {/* HOW IT WORKS */}
                    <section id="how" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="text-xs font-semibold text-[#333]">1 · Explore</p>
                                <p className="mt-2 text-xs text-[#555]">
                                    Simple explanations for each opportunity: what it is, horizon,
                                    minimum, key risks.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="text-xs font-semibold text-[#333]">2 · Invest</p>
                                <p className="mt-2 text-xs text-[#555]">
                                    Start small (from ~30€). Understand clearly how your money is
                                    used.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="text-xs font-semibold text-[#333]">3 · Follow & exit</p>
                                <p className="mt-2 text-xs text-[#555]">
                                    Track progress and see your options if you ever want to step
                                    out.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHAT YOU CAN ACCESS */}
                    <section id="what" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Opportunities you can access
                        </h2>

                        <p className="max-w-3xl text-sm text-[#555]">
                            Finn focuses on real, curated private opportunities — not
                            speculation or hype. Depending on regulation and partners, you’ll
                            be able to explore projects that normally stay out of reach.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3 text-xs text-[#555]">
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="font-semibold text-[#222]">Real projects</p>
                                <p className="mt-1">
                                    Selected opportunities that don’t appear on public markets.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="font-semibold text-[#222]">Small entry tickets</p>
                                <p className="mt-1">Start small, test, learn — no big commitments.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="font-semibold text-[#222]">Clear explanations</p>
                                <p className="mt-1">Plain-language breakdowns of how it works.</p>
                            </div>
                        </div>
                    </section>

                    {/* WHO */}
                    <section className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Finn is for people who…
                        </h2>

                        <div className="grid gap-4 md:grid-cols-3 text-xs text-[#555]">
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="font-semibold text-[#222]">Already invest a bit</p>
                                <p className="mt-1">You use an investing app and want more.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="font-semibold text-[#222]">Want alternatives</p>
                                <p className="mt-1">But without the complexity or high minimums.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-4 ring-1 ring-[#E6E6E6]">
                                <p className="font-semibold text-[#222]">Care about flexibility</p>
                                <p className="mt-1">Long term is fine — feeling stuck is not.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-2 rounded-3xl bg-white px-5 py-5 ring-1 ring-[#E6E6E6] sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-sm font-semibold text-[#0A0E0C]">
                                Want early access?
                            </h3>
                            <p className="mt-1 text-xs text-[#555]">
                                Join the waitlist and get the first opportunities when we open.
                            </p>
                        </div>
                        <a
                            href="#waitlist"
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#00D26A] px-5 py-2 text-xs font-semibold text-black hover:bg-[#1BE67F] transition sm:mt-0"
                        >
                            Join waitlist
                        </a>
                    </section>

                </main>

                {/* FOOTER */}
                <footer className="mt-10 border-t border-[#E6E6E6] pt-6 text-xs text-[#777]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {year} Finn. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4">
                            <button className="hover:text-[#333] transition">
                                Terms &amp; privacy
                            </button>
                            <button className="hover:text-[#333] transition">Contact</button>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default FinnLandingRetailLight;
