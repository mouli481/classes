import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'Quiz Application',
    description: 'Interactive quiz platform with timer, leaderboard, and category selection',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-cyan-400 to-blue-500',
    duration: '2 months',
    completion: 100
  },
  {
    name: 'Budget Tracker',
    description: 'Personal finance tracker with expense categorization and monthly reports',
    tech: ['React', 'Chart.js', 'LocalStorage', 'CSS Modules'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-400 to-teal-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Movie Review App',
    description: 'Movie discovery platform with ratings, reviews, and watchlist management',
    tech: ['React', 'TMDB API', 'Redux', 'Tailwind'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-yellow-400 to-orange-500',
    duration: '2 months',
    completion: 70
  },
  {
    name: 'Chat Application',
    description: 'Real-time messaging app with group chats and file sharing',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-purple-400 to-indigo-500',
    duration: '3 months',
    completion: 100
  },
  {
    name: 'Notes App',
    description: 'Markdown-supported notes app with tagging, search, and cloud sync',
    tech: ['React', 'TypeScript', 'Firebase', 'Marked.js'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-rose-400 to-pink-500',
    duration: '2 months',
    completion: 40
  },
  {
    name: 'Crypto Price Tracker',
    description: 'Live cryptocurrency price tracker with portfolio management',
    tech: ['React', 'CoinGecko API', 'Chart.js', 'Redux'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-amber-400 to-yellow-500',
    duration: '1 month',
    completion: 100
  }
];

export default function SushanthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              S
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Sushanth</h1>
              <p className="text-slate-600">Frontend Developer • 1+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="6" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="4" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="2" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="85%" color="from-purple-500 to-purple-600" />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Projects Portfolio</h2>
          <p className="text-slate-600">Showcasing expertise across various domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
