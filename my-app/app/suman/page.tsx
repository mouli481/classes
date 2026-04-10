import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'Expense Splitter',
    description: 'Group expense management app with split calculations and settlement tracking',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-emerald-400 to-green-500',
    duration: '2 months',
    completion: 100
  },
  {
    name: 'Online Code Editor',
    description: 'Browser-based code editor with syntax highlighting and live preview',
    tech: ['React', 'Monaco Editor', 'Node.js', 'Docker'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-blue-400 to-indigo-500',
    duration: '3 months',
    completion: 60
  },
  {
    name: 'Habit Tracker',
    description: 'Daily habit tracking app with streaks, reminders, and progress visualization',
    tech: ['React', 'Chart.js', 'LocalStorage', 'PWA'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-yellow-400 to-orange-500',
    duration: '1 month',
    completion: 100
  },
  {
    name: 'Virtual Classroom',
    description: 'Online classroom with video conferencing, whiteboard, and attendance tracking',
    tech: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-purple-400 to-pink-500',
    duration: '4 months',
    completion: 100
  },
  {
    name: 'Flashcard App',
    description: 'Spaced repetition flashcard app for language learning and exam prep',
    tech: ['React', 'TypeScript', 'IndexedDB', 'Tailwind'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-rose-400 to-red-500',
    duration: '2 months',
    completion: 45
  },
  {
    name: 'Markdown Editor',
    description: 'Live markdown editor with preview, export to PDF, and cloud save',
    tech: ['React', 'Marked.js', 'jsPDF', 'Firebase'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-teal-400 to-cyan-500',
    duration: '1 month',
    completion: 100
  }
];

export default function SumanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              S
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Suman</h1>
              <p className="text-slate-600">Frontend Developer • 1+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="6" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="4" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="2" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="82%" color="from-purple-500 to-purple-600" />
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
