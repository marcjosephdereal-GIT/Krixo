import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <p className="text-blue-400 uppercase tracking-[5px] text-sm mb-4">
          Welcome to My Website
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          MARC JOSEPH <span className="text-blue-400">DE REAL</span>
        </h1>

        <p className="text-slate-400 mb-10">
          Explore my personal profile and contact information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/profile"
            className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            View My Profile
          </Link>

          <Link
            href="/contact"
            className="border border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-slate-950 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
