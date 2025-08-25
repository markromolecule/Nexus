
export default function StatsCard({ label, value }) {
  return (
    <div className="relative p-5 rounded-2xl border border-[#1F2937] bg-[#0B1220]/50 transition hover:border-[#2563EB]/60 hover:shadow-[0_0_35px_#06B6D4]/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0B1220]/15 to-[#0B1220]/35" />
      <div className="relative">
        <div className="text-xs uppercase tracking-wider text-[#9CA3AF]">{label}</div>
        <div className="mt-2 text-2xl font-semibold text-white">{value ?? '--'}</div>
      </div>
    </div>
  )
}

