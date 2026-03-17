import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Portfolio App</h1>
        <p className="text-lg text-slate-600 mb-8">Select a page to get started</p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/page1"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Page 1
          </Link>
          <Link
            href="/page2"
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Go to Page 2
          </Link>
          <Link
            href="/page3"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Go to Page 3
          </Link>
        </div>
      </div>
    </div>
  );
}
