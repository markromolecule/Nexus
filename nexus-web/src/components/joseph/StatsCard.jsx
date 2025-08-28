
export default function StatsCard({ label, value }) {
  return (
    <div className="relative p-5 rounded-2xl border border-[#1F2937] bg-[#0B1220]/50 transition hover:border-[#2563EB]/60 hover:shadow-[0_0_45px_#06B6D4]/20 overflow-hidden group">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0B1220]/15 to-[#0B1220]/35" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-[#06B6D4]/20" />
      <div className="relative">
        <div className="text-xs uppercase tracking-wider text-[#9CA3AF]">{label}</div>
        <div className="mt-2 text-2xl font-semibold text-white group-hover:tracking-wide transition-all">{value ?? '--'}</div>
      </div>
    </div>
  )
}

