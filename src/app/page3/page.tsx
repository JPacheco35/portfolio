import Navigation from '@/components/Navigation';

export default function Page3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-900 mb-6">Hello World from Page 3</h1>
        <p className="text-lg text-purple-700 mb-8">This is page 3 of your navigation demo.</p>
        <Navigation currentPage="page3" />
      </div>
    </div>
  );
}
