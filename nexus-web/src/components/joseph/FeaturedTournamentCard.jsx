import Card from '../common/Card'

export default function FeaturedTournamentCard({ title, prizePool, startsAt }) {
  return (
    <Card className="bg-gradient-to-r from-[#0D0D0D] via-[#2563EB]/10 to-[#06B6D4]/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/25" />
      <div className="relative flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-[#1A1A1A] ring-1 ring-[#1F2937]" />
        <div className="flex-1">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-xs text-[#9CA3AF]">Starts {startsAt}</div>
        </div>
        <div className="text-sm px-3 py-1 rounded-lg bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40 shadow-[0_0_25px_#06B6D4]/20">{prizePool}</div>
      </div>
    </Card>
  )
}

