import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'E-Learning Platform',
    description: 'Interactive online learning platform with quizzes and progress tracking',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-orange-400 to-red-500',
    duration: '4 months',
    completion: 100
  },
  {
    name: 'Restaurant POS System',
    description: 'Point-of-sale system with order management and billing integration',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-blue-400 to-indigo-500',
    duration: '3 months',
    completion: 100
  },
  {
    name: 'Real Estate Portal',
    description: 'Property listing platform with map integration and virtual tours',
    tech: ['React', 'Google Maps API', 'Firebase', 'Redux'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-yellow-400 to-amber-500',
    duration: '5 months',
    completion: 65
  },
  {
    name: 'Fitness Tracker App',
    description: 'Personal fitness tracking with workout plans and nutrition logging',
    tech: ['React Native', 'GraphQL', 'AWS', 'TypeScript'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-400 to-teal-500',
    duration: '3 months',
    completion: 100
  },
  {
    name: 'Event Management System',
    description: 'End-to-end event planning platform with ticketing and attendee management',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-purple-400 to-violet-500',
    duration: '4 months',
    completion: 50
  },
  {
    name: 'News Aggregator',
    description: 'Personalized news feed with category filtering and bookmarking',
    tech: ['React', 'REST API', 'Redux', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-cyan-400 to-blue-500',
    duration: '2 months',
    completion: 100
  }
];

export default function SamarmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              S
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Samarm</h1>
              <p className="text-slate-600">Frontend Developer • 2+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="8" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="6" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="2" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="88%" color="from-purple-500 to-purple-600" />
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
