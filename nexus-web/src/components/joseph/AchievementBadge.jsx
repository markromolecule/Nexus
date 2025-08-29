export default function AchievementBadge({ 
  label }) 
  {
    
  return (
    <div className="px-3 py-2 rounded-lg border border-[#1F2937] bg-[#0B1220]/40 text-xs text-[#E5E7EB] hover:border-[#2563EB]/60 transition">
      {label}
    </div>
  )
}

