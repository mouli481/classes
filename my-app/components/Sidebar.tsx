'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const members = [
  { name: 'Mouli', path: '/mouli', experience: '5+' },
  { name: 'Vijay', path: '/vijay', experience: '3+' },
  { name: 'Samarm', path: '/samarm', experience: '2+' },
  { name: 'Lahari', path: '/lahari', experience: '2+' },
  { name: 'Sushanth', path: '/sushanth', experience: '1+' },
  { name: 'Raviteje', path: '/raviteje', experience: '1+' },
  { name: 'Suman', path: '/suman', experience: '1+' },
  { name: 'Lokesh', path: '/lokesh', experience: '1+' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen sticky top-0 shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Training Hub</h1>
        <p className="text-xs text-slate-400 mt-1">Team Progress Tracker</p>
      </div>
      <nav className="p-4 space-y-2">
        {members.map((member) => (
          <Link
            key={member.path}
            href={member.path}
            className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
              pathname === member.path
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-105'
                : 'hover:bg-slate-700/50'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{member.name}</span>
              <span className="text-xs bg-slate-700 px-2 py-1 rounded">{member.experience} yrs</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
