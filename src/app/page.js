import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1b0b3b] via-[#101739] to-[#063b45] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203,213,225,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(203,213,225,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 -top-32 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-1/4 h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-amber-400/15 blur-3xl" />

      {/* Main Container */}
      <div className="max-w-md w-full text-center space-y-8 z-10">
        {/* Header / Intro */}
        <div className="space-y-3">
          <span className="inline-block rounded-full border border-fuchsia-300/30 bg-fuchsia-950/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-fuchsia-200 shadow-sm">
            Glad you&apos;re here
          </span>
          <h1 className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Welcome to my digital space.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            A little space to share my profile and get in touch.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <Link
            href="/profile"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-8 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cyan-400/40 active:translate-y-0 sm:w-auto"
          >
            Profile
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-xl border border-fuchsia-300/30 bg-gradient-to-r from-fuchsia-600 to-violet-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-fuchsia-400/40 active:translate-y-0 sm:w-auto"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
