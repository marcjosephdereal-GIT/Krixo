import Link from "next/link";

export default function Profile() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b0b3b] via-[#11153c] to-[#06434b] p-6">
      <div className="pointer-events-none absolute -left-20 top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-6rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/15 bg-slate-950/55 p-10 text-center shadow-2xl backdrop-blur-xl">
        <p className="mb-6 text-xs uppercase tracking-[4px] text-cyan-300">
          Personal Profile
        </p>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7q0300JC7DyUIDfN1U29nMmsF65fnzxO4EoP4Nry4RQ&s=10/profile.jpg"
          alt="Marc Joseph De Real"
          className="mx-auto mb-7 h-44 w-44 rounded-2xl border-4 border-fuchsia-400 object-cover shadow-lg shadow-fuchsia-500/30"
        />

        <h1 className="bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-2xl font-extrabold text-transparent">
          MARC JOSEPH DE REAL
        </h1>

        <p className="mt-3 font-medium text-amber-300">BSIT Student</p>

        <p className="mb-8 mt-4 leading-relaxed text-slate-300">
          Welcome to my personal profile page. Get to know more about me through
          this website.
        </p>

        <Link
          href="/"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
