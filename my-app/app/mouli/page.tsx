'use client';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Projects', icon: '⊞' },
  { id: 'react', label: 'React', icon: '⚛' },
  { id: 'nextjs', label: 'Next.js', icon: '▲' },
  { id: 'fullstack', label: 'Full Stack', icon: '⚙' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'backend', label: 'Backend', icon: '🗄' },
];

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Scalable e-commerce with real-time inventory management',
    tech: ['React', 'Next.js', 'TypeScript', 'Redux'],
    status: 'Active',
    category: 'nextjs',
    icon: '🛒',
    duration: '6 months',
    completion: 100,
  },
  {
    name: 'Healthcare Dashboard',
    description: 'Patient management with appointment scheduling and analytics',
    tech: ['React', 'Material-UI', 'Chart.js'],
    status: 'Active',
    category: 'react',
    icon: '🏥',
    duration: '4 months',
    completion: 100,
  },
  {
    name: 'Financial Analytics Tool',
    description: 'Real-time stock market analysis with interactive charts',
    tech: ['Next.js', 'D3.js', 'WebSocket'],
    status: 'In Progress',
    category: 'nextjs',
    icon: '📈',
    duration: '5 months',
    completion: 75,
  },
  {
    name: 'Social Media Platform',
    description: 'Community platform with real-time messaging and content sharing',
    tech: ['React', 'Firebase', 'Socket.io'],
    status: 'Active',
    category: 'fullstack',
    icon: '💬',
    duration: '8 months',
    completion: 100,
  },
  {
    name: 'Project Management Suite',
    description: 'Collaborative workspace with task tracking and reporting',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    status: 'In Progress',
    category: 'fullstack',
    icon: '📋',
    duration: '6 months',
    completion: 60,
  },
  {
    name: 'Learning Management System',
    description: 'Online education platform with video streaming and progress tracking',
    tech: ['React', 'Redux', 'AWS', 'GraphQL'],
    status: 'Active',
    category: 'react',
    icon: '🎓',
    duration: '7 months',
    completion: 100,
  },
  {
    name: 'Mobile Banking App',
    description: 'Secure mobile banking with transaction history and transfers',
    tech: ['React Native', 'TypeScript', 'GraphQL'],
    status: 'Active',
    category: 'mobile',
    icon: '🏦',
    duration: '5 months',
    completion: 100,
  },
  {
    name: 'API Gateway Service',
    description: 'Microservices API gateway with rate limiting and auth',
    tech: ['Node.js', 'Express', 'Redis', 'Docker'],
    status: 'In Progress',
    category: 'backend',
    icon: '🔌',
    duration: '3 months',
    completion: 80,
  },
];

const stats = [
  { label: 'Total Projects', value: '12', icon: '🚀', trend: '+2 this month' },
  { label: 'Completed', value: '8', icon: '✅', trend: '95% success rate' },
  { label: 'In Progress', value: '4', icon: '⚡', trend: '2 due soon' },
  { label: 'Technologies', value: '18+', icon: '🛠', trend: 'across all projects' },
];

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'AWS / Cloud', level: 75 },
];

export default function MouliPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex h-screen bg-[#0d1b2e] text-white overflow-hidden">

      {/* Left Category Panel */}
      <div className="w-52 bg-[#0a1628] border-r border-[#1e3a5f] flex flex-col py-6 px-3 shrink-0">
        <p className="text-[10px] font-bold text-[#4a7fa5] uppercase tracking-widest px-3 mb-3">
          Categories
        </p>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                activeCategory === cat.id
                  ? 'bg-[#0ea5e9] text-white shadow-lg shadow-cyan-500/20'
                  : 'text-[#7aa8c7] hover:bg-[#1e3a5f] hover:text-white'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-[#1e3a5f] shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">Mouli</h1>
              <p className="text-xs text-[#4a7fa5]">Senior Frontend Developer • 5+ Years</p>
            </div>
            <span className="ml-2 px-3 py-1 bg-[#0ea5e9]/20 border border-[#0ea5e9]/40 text-[#0ea5e9] text-xs rounded-full font-medium">
              + Add Project
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-3 py-2">
              <span className="text-[#4a7fa5] text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search projects..."
                className="bg-transparent text-sm text-white placeholder-[#4a7fa5] outline-none w-36"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <p className="text-[10px] font-bold text-[#4a7fa5] uppercase tracking-widest">
              {activeCategory === 'all' ? 'All Projects' : categories.find(c => c.id === activeCategory)?.label} — {filtered.length} items
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((project) => (
              <div
                key={project.name}
                className={`bg-[#0a1628] rounded-xl p-5 border transition-all duration-200 cursor-pointer group hover:scale-[1.02] ${
                  project.status === 'Active'
                    ? 'border-[#0ea5e9]/50 shadow-md shadow-cyan-500/10'
                    : 'border-[#1e3a5f] hover:border-[#0ea5e9]/30'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center text-xl group-hover:bg-[#0ea5e9]/20 transition-colors">
                    {project.icon}
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                    project.status === 'Active'
                      ? 'bg-[#0ea5e9]/20 text-[#0ea5e9]'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 leading-tight">{project.name}</h3>
                <p className="text-[11px] text-[#4a7fa5] mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 bg-[#1e3a5f] text-[#7aa8c7] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#4a7fa5]">
                  <span>{project.duration}</span>
                  <span className={project.completion === 100 ? 'text-[#0ea5e9]' : 'text-amber-400'}>
                    {project.completion}%
                  </span>
                </div>
                <div className="mt-2 h-1 bg-[#1e3a5f] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      project.completion === 100 ? 'bg-[#0ea5e9]' : 'bg-amber-400'
                    }`}
                    style={{ width: `${project.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-64 bg-[#0a1628] border-l border-[#1e3a5f] flex flex-col py-6 px-4 shrink-0 overflow-y-auto">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-5">General Stats</p>

        {/* Stats */}
        <div className="space-y-3 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0d1b2e] border border-[#1e3a5f] rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-[#4a7fa5] font-medium">{s.label}</span>
                <span className="text-base">{s.icon}</span>
              </div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-[#0ea5e9] mt-0.5">{s.trend}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e3a5f] mb-5" />

        {/* Skill Levels */}
        <p className="text-[10px] font-bold text-[#4a7fa5] uppercase tracking-widest mb-3">
          Skill Proficiency
        </p>
        <div className="space-y-3 mb-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#7aa8c7]">{skill.name}</span>
                <span className="text-[#0ea5e9] font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-[#1e3a5f] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e3a5f] mb-5" />

        {/* Tech Domains */}
        <p className="text-[10px] font-bold text-[#4a7fa5] uppercase tracking-widest mb-3">
          Tech Domains
        </p>
        <div className="space-y-1">
          {['Frontend', 'Backend', 'Mobile', 'Cloud / DevOps', 'Databases'].map((domain) => (
            <div
              key={domain}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#1e3a5f] cursor-pointer transition-colors group"
            >
              <span className="text-[12px] text-[#7aa8c7] group-hover:text-white transition-colors">{domain}</span>
              <span className="text-[#4a7fa5] text-xs">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
