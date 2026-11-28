import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#080b18] via-[#111126] to-[#071f2b] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-32 left-[18%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 right-[12%] h-[34rem] w-[34rem] rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-md w-full text-center space-y-8 z-10">
        {/* Header / Intro */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-full uppercase shadow-sm">
            Glad you&apos;re here
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Welcome to my digital space.
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A little space to share my profile and get in touch.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <Link
            href="/profile"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm bg-white text-slate-950 hover:bg-slate-100 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Profile
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm bg-slate-900/80 text-white border border-slate-800 hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
