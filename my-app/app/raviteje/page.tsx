import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'Todo List App',
    description: 'Feature-rich todo app with drag-and-drop, priorities, and due dates',
    tech: ['React', 'TypeScript', 'DnD Kit', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-violet-400 to-purple-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'E-Commerce Store',
    description: 'Online store with product catalog, cart, and payment gateway integration',
    tech: ['React', 'Redux', 'Stripe', 'Node.js'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-blue-400 to-cyan-500',
    duration: '3 months',
    completion: 100
  },
  {
    name: 'Student Portal',
    description: 'Academic portal with grade tracking, timetable, and assignment submission',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-green-400 to-emerald-500',
    duration: '3 months',
    completion: 55
  },
  {
    name: 'Music Player',
    description: 'Web-based music player with playlist management and audio visualizer',
    tech: ['React', 'Web Audio API', 'CSS Animations', 'Firebase'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-pink-400 to-rose-500',
    duration: '2 months',
    completion: 100
  },
  {
    name: 'Polling App',
    description: 'Real-time polling application with live vote counts and result charts',
    tech: ['React', 'Socket.io', 'Chart.js', 'MongoDB'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-orange-400 to-amber-500',
    duration: '2 months',
    completion: 35
  },
  {
    name: 'URL Shortener',
    description: 'URL shortening service with click analytics and custom aliases',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-teal-400 to-cyan-500',
    duration: '1 month',
    completion: 100
  }
];

export default function RavitejePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              R
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Raviteje</h1>
              <p className="text-slate-600">Frontend Developer • 1+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="6" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="4" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="2" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="83%" color="from-purple-500 to-purple-600" />
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
