import Navigation from '@/components/Navigation';

export default function Page2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Hello World from Page 2</h1>
        <p className="text-lg text-green-700 mb-8">This is page 2 of your navigation demo.</p>
        <Navigation currentPage="page2" />
      </div>
    </div>
  );
}
