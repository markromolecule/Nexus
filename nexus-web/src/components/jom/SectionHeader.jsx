export default function SectionHeader({ title, subtitle, accentColor = "blue", badge, children }) {
  const getAccentColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
      case "cyan":
        return "from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
      case "green":
        return "from-green-400 to-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
      case "yellow":
        return "from-yellow-400 to-orange-500 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
      case "indigo":
        return "from-indigo-400 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
      default:
        return "from-blue-500 to-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
    }
  }

  const getBadgeColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-400/10 text-blue-400 border-blue-400/30"
      case "cyan":
        return "bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
      case "green":
        return "bg-green-400/10 text-green-400 border-green-400/30"
      case "yellow":
        return "bg-yellow-400/10 text-yellow-400 border-yellow-400/30"
      case "indigo":
        return "bg-indigo-400/10 text-indigo-400 border-indigo-400/30"
      default:
        return "bg-blue-400/10 text-blue-400 border-blue-400/30"
    }
  }

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-2 h-8 bg-gradient-to-b ${getAccentColorClasses(accentColor)} rounded-full`}></div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {subtitle && (
          <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
        )}
      </div>
      {badge && (
        <div className={`px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm font-mono ${getBadgeColorClasses(accentColor)}`}>
          {badge}
        </div>
      )}
      {children}
    </div>
  )
}
