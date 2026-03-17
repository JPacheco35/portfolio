import Link from 'next/link';

interface NavigationProps {
  currentPage: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const pages = [
    { name: 'page1', href: '/page1' },
    { name: 'page2', href: '/page2' },
    { name: 'page3', href: '/page3' },
  ];

  return (
    <nav className="flex gap-4 mb-8">
      {pages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            currentPage === page.name
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
