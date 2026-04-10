import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';

const projects = [
  {
    name: 'Inventory Management System',
    description: 'Built a real-time inventory tracking system with barcode scanning and alerts',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-400 to-emerald-500',
    duration: '4 months',
    completion: 100
  },
  {
    name: 'HR Portal',
    description: 'Employee management portal with leave tracking and payroll integration',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-blue-400 to-cyan-500',
    duration: '3 months',
    completion: 100
  },
  {
    name: 'Analytics Dashboard',
    description: 'Business intelligence dashboard with real-time KPI tracking and reports',
    tech: ['React', 'Chart.js', 'REST API', 'Redux'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-yellow-400 to-orange-500',
    duration: '5 months',
    completion: 70
  },
  {
    name: 'Task Automation Tool',
    description: 'Workflow automation platform reducing manual effort by 60%',
    tech: ['Python', 'React', 'FastAPI', 'Docker'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-purple-400 to-pink-500',
    duration: '3 months',
    completion: 100
  },
  {
    name: 'Customer Support Chat',
    description: 'Live chat support system with ticket management and escalation workflows',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-indigo-400 to-blue-500',
    duration: '4 months',
    completion: 55
  },
  {
    name: 'Mobile Banking App',
    description: 'Secure mobile banking interface with transaction history and fund transfers',
    tech: ['React Native', 'TypeScript', 'GraphQL', 'AWS'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    gradient: 'from-teal-400 to-green-500',
    duration: '6 months',
    completion: 100
  }
];

export default function VijayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              V
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">Vijay</h1>
              <p className="text-slate-600">Frontend Developer • 3+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard icon="🚀" label="Total Projects" value="10" color="from-blue-500 to-blue-600" />
          <StatsCard icon="✅" label="Completed" value="7" color="from-green-500 to-green-600" />
          <StatsCard icon="⚡" label="In Progress" value="3" color="from-yellow-500 to-orange-500" />
          <StatsCard icon="🏆" label="Success Rate" value="90%" color="from-purple-500 to-purple-600" />
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
