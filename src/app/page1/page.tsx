import Navigation from '@/components/Navigation';

export default function Page1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Hello World from Page 1</h1>
        <p className="text-lg text-blue-700 mb-8">This is page 1 of your navigation demo.</p>
        <Navigation currentPage="page1" />
      </div>
    </div>
  );
}
