export default function StatsCard({ label, value }) {
  return (
    <div className="relative p-5 rounded-2xl border border-gray-700 bg-slate-900/50 transition hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-900/15 to-slate-900/35" />
      <div className="relative">
        <div className="text-xs uppercase tracking-wider text-gray-400 font-mono">{label}</div>
        <div className="mt-2 text-2xl font-semibold text-white">{value ?? '--'}</div>
      </div>
    </div>
  )
}
