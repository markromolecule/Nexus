
export default function CharacterCard({ character }) {
  if (!character) {
    return (
      <div className="p-6 rounded-xl border border-[#1F2937] text-[#E5E7EB]">No character data</div>
    )
  }
  return (
    <div className="relative p-6 rounded-2xl border border-[#1F2937] bg-[#0B1220]/50 hover:border-[#2563EB]/60 transition hover:shadow-[0_0_50px_#06B6D4]/20 overflow-hidden group">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0B1220]/20 to-[#0B1220]/40" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-[#06B6D4]/25" />
      <div className="relative flex items-center gap-4">
        <img src={character.avatar} alt={character.name} className="h-20 w-20 rounded-lg ring-2 ring-[#2563EB]/50 object-cover object-center transform transition-transform duration-300 group-hover:scale-105" />
        <div>
          <div className="text-lg font-semibold">{character.name}</div>
          <div className="text-sm text-[#9CA3AF]">{character.role}</div>
        </div>
        {character.top && (
          <span className="ml-auto text-[10px] px-2 py-1 rounded bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40 shadow-[0_0_20px_#06B6D4]/20">Top Player</span>
        )}
      </div>
      <p className="mt-4 text-sm text-[#D1D5DB]">{character.bio}</p>
    </div>
  )
}

