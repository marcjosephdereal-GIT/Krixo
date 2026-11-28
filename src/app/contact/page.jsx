import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#210b3a] via-[#15173d] to-[#064b50] p-6">
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-amber-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-slate-950/55 shadow-2xl backdrop-blur-xl">
        <div className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 p-10 text-center">
          <h1 className="text-3xl font-bold text-white">Get In Touch</h1>

          <p className="mt-2 text-white/85">Contact Information</p>
        </div>

        <div className="p-10 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-2xl font-bold text-transparent">
            MARC JOSEPH DE REAL
          </h2>

          <div className="mb-8 rounded-xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/15 via-blue-400/10 to-fuchsia-400/15 p-5">
            <p className="mb-2 text-sm font-semibold text-cyan-200">
              HCDC EMAIL ADDRESS
            </p>

            <p className="break-all text-slate-100">
              marcjoseph.dereal@hcdc.edu.ph
            </p>
          </div>

          <Link
            href="/"
            className="inline-block rounded-xl bg-gradient-to-r from-amber-400 to-fuchsia-500 px-10 py-3 font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
