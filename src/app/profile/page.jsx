import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl p-10 text-center shadow-2xl">
        <p className="text-blue-400 uppercase tracking-[4px] text-xs mb-6">
          Personal Profile
        </p>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7q0300JC7DyUIDfN1U29nMmsF65fnzxO4EoP4Nry4RQ&s=10/profile.jpg"
          alt="Marc Joseph De Real"
          className="w-44 h-44 object-cover rounded-2xl mx-auto mb-7 border-4 border-blue-500 shadow-lg"
        />

        <h1 className="text-2xl font-extrabold text-white">
          MARC JOSEPH DE REAL
        </h1>

        <p className="text-blue-400 mt-3 font-medium">BSIT Student</p>

        <p className="text-slate-400 mt-4 mb-8 leading-relaxed">
          Welcome to my personal profile page. Get to know more about me through
          this website.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-10 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
