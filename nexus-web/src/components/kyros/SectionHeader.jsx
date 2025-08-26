export default function SectionHeader({ label, badge, accent = 'from-[#06B6D4] to-[#2563EB]' }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${accent}`}></div>
      <h2 className="text-xl md:text-2xl font-bold">{label}</h2>
      {badge && (
        <div className="ml-auto text-xs px-2 py-1 rounded-full border border-[#E5E7EB] bg-white/70 text-[#334155]">{badge}</div>
      )}
    </div>
  )
}


