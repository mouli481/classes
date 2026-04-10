export default function StatsCard({ icon, label, value, color }: any) {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg text-white`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}
