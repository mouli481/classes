export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:scale-105">
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}>
            {project.status}
          </span>
        </div>
        <p className="text-slate-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span key={t} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500">Duration: {project.duration}</span>
          <span className="text-blue-600 font-semibold">{project.completion}%</span>
        </div>
      </div>
    </div>
  );
}
