import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-md w-full text-center space-y-8 z-10">
        {/* Header / Intro */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-full uppercase shadow-sm">
            Glad you're here
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
