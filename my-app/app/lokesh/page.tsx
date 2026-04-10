import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'Weather App',
    description: 'Location-based weather app with hourly forecast and weather alerts',
    tech: ['React', 'OpenWeather API', 'Geolocation API', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-sky-400 to-blue-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio with animated sections, project showcase, and contact form',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'EmailJS'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-indigo-400 to-violet-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Bookstore App',
    description: 'Online bookstore with search, filters, wishlist, and order management',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-amber-400 to-orange-500',
    duration: '3 months',
    completion: 50
  },
  {
    name: 'Typing Speed Test',
    description: 'Typing speed and accuracy tester with difficulty levels and leaderboard',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-400 to-teal-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Image Gallery',
    description: 'Responsive image gallery with lazy loading, lightbox, and category filters',
    tech: ['React', 'Unsplash API', 'CSS Grid', 'Intersection Observer'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-pink-400 to-fuchsia-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Countdown Timer',
    description: 'Multi-purpose countdown timer with custom events and notification alerts',
    tech: ['React', 'TypeScript', 'Web Notifications API', 'Tailwind'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-red-400 to-rose-500',
    duration: '1 month',
    completion: 30
  }
];

export default function LokeshPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              L
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Lokesh</h1>
              <p className="text-slate-600">Frontend Developer • 1+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="6" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="4" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="2" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="80%" color="from-purple-500 to-purple-600" />
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
