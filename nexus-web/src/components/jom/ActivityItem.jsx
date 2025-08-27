export default function ActivityItem({ action, when }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
      <div className="text-sm flex-1 text-white">{action}</div>
      <div className="text-xs text-gray-400">{when}</div>
    </div>
  )
}
