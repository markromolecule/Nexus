
export default function GameCard({ 
  title, 
  genre, 
  top = false,
  image
}) 
{
  return (
    <div className={`relative p-6 rounded-2xl border md:p-7 ${
      top
        ? 'border-[#3B82F6] bg-gradient-to-r from-[#0D0D0D] via-[#2563EB]/20 to-[#06B6D4]/20 shadow-[0_0_35px_#06B6D4]/20'
        : 'border-[#1F2937] bg-[#0B1220]/40'
    } transition hover:shadow-[0_0_50px_#06B6D4]/20 hover:border-[#2563EB]/60 group`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/20" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-[#06B6D4]/25" />

      {top && (
        <span className="absolute right-5 top-5 text-[10px] px-2 py-1 rounded bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40 shadow-[0_0_20px_#06B6D4]/20">Most Played</span>
      )}

      <div className="relative flex items-stretch gap-5" style={{ transform: 'translateZ(0)' }}>
        <div className="relative w-1/2 h-28 sm:h-32 md:h-36 rounded-xl overflow-hidden bg-[#0E1627]">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.06]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#06B6D4]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="flex-1 min-w-0 self-center">
          <div className="text-lg md:text-xl font-semibold group-hover:text-white transition-colors line-clamp-2">{title}</div>
          <div className="mt-1 text-sm text-[#9CA3AF]">{genre}</div>
        </div>
      </div>
    </div>
  )
}

