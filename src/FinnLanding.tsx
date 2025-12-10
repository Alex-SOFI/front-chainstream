import React, { useState } from "react";
import { submitWaitlistForm } from "./utils/formSubmit";

const FinnLanding: React.FC = () => {
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
        <div className="min-h-screen bg-[#000D0C] text-white">
            {/* Légère aura de fond */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00FF66]/18 via-transparent to-transparent" />
                <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[#00FF66]/14 blur-3xl" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                {/* HEADER */}
                <header className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/header.svg"
                            alt="Finn"
                            className="h-5 w-5 invert"
                        />
                        <span className="text-base font-semibold tracking-tight">Finn</span>
                    </div>

                    <nav className="hidden items-center gap-6 text-[11px] text-white/60 sm:flex">
                        <a href="#what" className="hover:text-white transition">
                            Overview
                        </a>
                        <a href="#fit" className="hover:text-white transition">
                            In your investing
                        </a>
                        <a href="#who" className="hover:text-white transition">
                            For whom
                        </a>
                        <a href="#next" className="hover:text-white transition">
                            Next steps
                        </a>
                        <a
                            href="#waitlist"
                            className="rounded-full border border-[#00FF66]/60 px-4 py-1.5 text-[11px] font-semibold text-[#00FF66] hover:border-[#00FF66] hover:bg-[#00FF66]/10 transition"
                        >
                            Join waitlist
                        </a>
                        <a
                            href="/"
                            className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold hover:bg-white/10 transition"
                        >
                            Retail
                        </a>
                    </nav>
                </header>

                {/* MAIN */}
                <main className="flex flex-1 flex-col gap-16">
                    {/* HERO 2 colonnes */}
                    <section className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
                        {/* Colonne gauche : texte (conservée) */}
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                                PRIVATE MARKETS · PRE-LAUNCH
                            </p>

                            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                Access to private markets,
                                <br />
                                <span className="text-[#00FF66]">without the usual lock-up.</span>
                            </h1>

                            <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-[15px]">
                                Finn is building a new way for individuals to take part in
                                selected private opportunities. The focus is simple: make access
                                clearer, and make it easier to move if your plans change —
                                instead of being tied up for years.
                            </p>

                            <div id="waitlist" className="mt-8 max-w-xl">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-3 sm:flex-row sm:items-center"
                                >
                                    <div className="flex w-full flex-1 items-center rounded-full border border-white/18 bg-white/5 px-3 py-2">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email to request early access"
                                            disabled={isSubmitting}
                                            className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/40 focus:outline-none disabled:opacity-50"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="rounded-full bg-[#00FF66] px-4 py-1.5 text-xs font-semibold text-black hover:bg-[#34ff84] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Sending..." : "Join"}
                                        </button>
                                    </div>
                                    {submitStatus === "success" && (
                                        <p className="text-[11px] text-[#00FF66]">
                                            ✓ Merci ! Vous êtes maintenant sur la liste d'attente.
                                        </p>
                                    )}
                                    {submitStatus === "error" && (
                                        <p className="text-[11px] text-red-400">
                                            ✗ Une erreur s'est produite. Veuillez réessayer.
                                        </p>
                                    )}
                                    {submitStatus === "idle" && (
                                        <p className="text-[11px] text-white/45">
                                            Occasional updates only. No marketing noise.
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Colonne droite : visuel */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                                <img
                                    src="/finn-hero.png"
                                    alt="Illustration of access, time and exit in private markets"
                                    className="w-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* REGULATORY REASSURANCE */}
                    <section className="rounded-3xl border border-[#00FF66]/20 bg-gradient-to-br from-[#00FF66]/5 to-transparent p-6">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00FF66]/10">
                                <svg className="h-4 w-4 text-[#00FF66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-white">
                                    Regulated Framework
                                </h3>
                                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                                    Finn is currently in the process of obtaining authorization as an <span className="font-medium text-white/85">Investment Firm under the DLT Pilot Regime</span> (Regulation EU 2022/858). This European regulatory framework is specifically designed for digital financial instruments and ensures robust investor protection, operational standards, and regulatory oversight.
                                </p>
                                <p className="mt-2 text-[10px] text-white/50">
                                    Authorization pending. Services will only be available once regulatory approval is granted.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHAT FINN CHANGES */}
                    <section id="what" className="space-y-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                What Finn is aiming to change
                            </h2>
                            <p className="mt-2 text-sm text-white/70 sm:text-[15px]">
                                This is not about promising higher returns. It is about making
                                the experience of entering and holding private opportunities more
                                understandable, more flexible, and more aligned with how people
                                actually live.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                    ACCESS
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Selected opportunities, clearer entry
                                </h3>
                                <p className="mt-2 text-xs text-white/70">
                                    A focused universe of opportunities, each presented with the
                                    key elements you need to understand what you are considering.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                    TIME
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Not “all or nothing” on duration
                                </h3>
                                <p className="mt-2 text-xs text-white/70">
                                    Moving away from the idea that you must commit without any
                                    realistic way to adjust if your situation or convictions
                                    change.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                    CLARITY
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Fewer layers, simpler words
                                </h3>
                                <p className="mt-2 text-xs text-white/70">
                                    Less jargon, more structure: what you hold, what could happen,
                                    and how it links to your decisions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HOW IT FITS */}
                    <section
                        id="fit"
                        className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                How Finn could fit into your investing
                            </h2>
                            <p className="mt-2 max-w-3xl text-sm text-white/70 sm:text-[15px]">
                                Finn is not designed to replace what you already do with listed
                                markets or savings. It is designed as an additional layer: a way
                                to bring selected private exposures into the picture, with more
                                nuance around time and exit.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-white/70">
                                <li className="flex gap-2 text-xs sm:text-sm">
                                    <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-[#00FF66]" />
                                    <span>
                                        As a complement to index funds, not a substitute for them.
                                    </span>
                                </li>
                                <li className="flex gap-2 text-xs sm:text-sm">
                                    <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-[#00FF66]" />
                                    <span>
                                        As a way to put part of your capital into projects that do
                                        not appear on public markets.
                                    </span>
                                </li>
                                <li className="flex gap-2 text-xs sm:text-sm">
                                    <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-[#00FF66]" />
                                    <span>
                                        As a space where the duration of your commitment is not an
                                        afterthought.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                IF THIS RESONATES
                            </p>
                            <h3 className="mt-3 text-sm font-semibold">
                                You might be the kind of person we are building for
                            </h3>
                            <ul className="mt-3 space-y-2 text-xs text-white/70">
                                <li>• You already save and invest on your own.</li>
                                <li>• You follow economic or business news with interest.</li>
                                <li>• You are curious about what sits behind traditional products.</li>
                                <li>• You care about where your capital goes, not just the number.</li>
                            </ul>
                        </div>
                    </section>

                    {/* WHO */}
                    <section id="who" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Who Finn is for
                        </h2>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium text-white/60">The explorer</p>
                                <p className="mt-2 text-xs text-white/70">
                                    Already comfortable with investing basics and looking for a
                                    clearer way into alternatives without changing everything.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium text-white/60">The allocator</p>
                                <p className="mt-2 text-xs text-white/70">
                                    Thinks in terms of percentages, not just products, and wants
                                    private exposures to be part of a considered mix.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium text-white/60">
                                    The long-term realist
                                </p>
                                <p className="mt-2 text-xs text-white/70">
                                    Comfortable with long horizons, but not with feeling trapped.
                                    Values options and clarity, even when committing.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* NEXT STEPS */}
                    <section id="next" className="space-y-5">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            What happens next
                        </h2>
                        <p className="max-w-2xl text-sm text-white/70 sm:text-[15px]">
                            Finn is not live yet. The first phase is about building the
                            right experience and sharing it with a small group of individuals
                            who care about how private investing should evolve.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                    NOW
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Join the early list
                                </h3>
                                <p className="mt-2 text-xs text-white/70">
                                    Add your name if you want a calm, structured view of what we
                                    are building and when it will be open.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                    IN THE COMING MONTHS
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Private previews
                                </h3>
                                <p className="mt-2 text-xs text-white/70">
                                    Early access members receive a first look at the experience,
                                    the type of opportunities, and how time and exit will be
                                    handled.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                                    AT LAUNCH
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    A clearer way in
                                </h3>
                                <p className="mt-2 text-xs text-white/70">
                                    When we open, the goal is simple: that you know exactly what
                                    Finn is, what it is not, and how it can play a role in your
                                    decisions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA strip */}
                    <section className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent px-5 py-5 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                                EARLY ACCESS
                            </p>
                            <h3 className="mt-2 text-sm font-semibold">
                                If private markets should be clearer and more flexible, we would
                                like to hear from you.
                            </h3>
                        </div>
                        <a
                            href="#waitlist"
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#00FF66] px-5 py-2 text-xs font-semibold text-black hover:bg-[#34ff84] transition sm:mt-0"
                        >
                            Request early access
                        </a>
                    </section>

                    {/* DISCLAIMER */}
                    <section className="space-y-2 text-[11px] text-white/45">
                        <p>
                            This page is for information only and does not constitute an offer
                            or a solicitation to invest. Any future access to opportunities via
                            Finn will be subject to specific terms, conditions and applicable
                            regulations, which will be communicated in detail before you make
                            any decision.
                        </p>
                    </section>
                </main>

                {/* FOOTER */}
                <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {year} Finn. All rights reserved.</p>
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

export default FinnLanding;
