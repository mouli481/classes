import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'Travel Booking App',
    description: 'Full-stack travel booking platform with flight and hotel search integration',
    tech: ['React', 'Next.js', 'Tailwind', 'REST API'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-pink-400 to-rose-500',
    duration: '4 months',
    completion: 100
  },
  {
    name: 'Blog CMS',
    description: 'Content management system with rich text editor and SEO optimization',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-purple-400 to-pink-500',
    duration: '2 months',
    completion: 100
  },
  {
    name: 'Weather Dashboard',
    description: 'Real-time weather monitoring with 7-day forecast and location search',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Redux'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-blue-400 to-sky-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Job Board Platform',
    description: 'Job listing portal with resume upload, filtering, and application tracking',
    tech: ['Next.js', 'MongoDB', 'AWS S3', 'Tailwind'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-amber-400 to-orange-500',
    duration: '4 months',
    completion: 60
  },
  {
    name: 'Recipe Sharing App',
    description: 'Community recipe platform with ratings, comments, and meal planning',
    tech: ['React', 'Firebase', 'Styled Components', 'Redux'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-400 to-emerald-500',
    duration: '2 months',
    completion: 100
  },
  {
    name: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio builder with customizable templates and export',
    tech: ['React', 'TypeScript', 'DnD Kit', 'Tailwind'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-violet-400 to-purple-500',
    duration: '3 months',
    completion: 45
  }
];

export default function LahariPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              L
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Lahari</h1>
              <p className="text-slate-600">Frontend Developer • 2+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="8" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="6" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="2" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="87%" color="from-purple-500 to-purple-600" />
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
