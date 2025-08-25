export default function ActivityItem({ action, when }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
      <div className="text-sm flex-1">{action}</div>
      <div className="text-xs text-[#9CA3AF]">{when}</div>
    </div>
  )
}

