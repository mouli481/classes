import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Built a scalable e-commerce solution with real-time inventory management',
    tech: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-400 to-emerald-500',
    duration: '6 months',
    completion: 100
  },
  {
    name: 'Healthcare Dashboard',
    description: 'Patient management system with appointment scheduling and analytics',
    tech: ['React', 'Material-UI', 'Chart.js', 'REST API'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-blue-400 to-cyan-500',
    duration: '4 months',
    completion: 100
  },
  {
    name: 'Financial Analytics Tool',
    description: 'Real-time stock market analysis with interactive charts and predictions',
    tech: ['Next.js', 'D3.js', 'WebSocket', 'Node.js'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-yellow-400 to-orange-500',
    duration: '5 months',
    completion: 75
  },
  {
    name: 'Social Media Platform',
    description: 'Community-driven platform with real-time messaging and content sharing',
    tech: ['React', 'Firebase', 'Socket.io', 'Styled Components'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-purple-400 to-pink-500',
    duration: '8 months',
    completion: 100
  },
  {
    name: 'Project Management Suite',
    description: 'Collaborative workspace with task tracking, time management, and reporting',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-indigo-400 to-blue-500',
    duration: '6 months',
    completion: 60
  },
  {
    name: 'Learning Management System',
    description: 'Online education platform with video streaming and progress tracking',
    tech: ['React', 'Redux', 'AWS', 'GraphQL'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-teal-400 to-green-500',
    duration: '7 months',
    completion: 100
  }
];

export default function MouliPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              M
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Mouli</h1>
              <p className="text-slate-600">Senior Frontend Developer • 5+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="12" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="8" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="4" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="95%" color="from-purple-500 to-purple-600" />
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
