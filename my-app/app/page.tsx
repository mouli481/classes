import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Training Hub
        </h1>
        <p className="text-xl text-slate-600 mb-8">Track your team's progress and projects</p>
        <Link
          href="/mouli"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          View Team Profiles
        </Link>
      </div>
    </div>
  );
}
