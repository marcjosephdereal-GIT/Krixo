import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-10 text-center">
          <h1 className="text-3xl font-bold text-white">Get In Touch</h1>

          <p className="text-blue-100 mt-2">Contact Information</p>
        </div>

        <div className="p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            MARC JOSEPH DE REAL
          </h2>

          <div className="bg-blue-50 rounded-xl p-5 mb-8">
            <p className="text-sm text-blue-600 font-semibold mb-2">
              HCDC EMAIL ADDRESS
            </p>

            <p className="text-slate-700 break-all">
              marcjoseph.dereal@hcdc.edu.ph
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-slate-900 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
