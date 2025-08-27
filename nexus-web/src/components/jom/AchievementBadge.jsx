export default function AchievementBadge({ label }) {
  return (
    <div className="px-3 py-2 rounded-lg border border-gray-700 bg-slate-900/40 text-xs text-white hover:border-yellow-400/60 transition-all duration-300 backdrop-blur-sm">
      {label}
    </div>
  )
}
