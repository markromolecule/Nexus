
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
    } transition hover:shadow-[0_0_40px_#06B6D4]/10 hover:border-[#2563EB]/60`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/20" />
      <div className="relative flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-[#1A1A1A] ring-1 ring-[#1F2937] p-1">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4]" />
          )}
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm text-[#9CA3AF]">{genre}</div>
        </div>
        {top && (
          <span className="ml-auto text-[10px] px-2 py-1 rounded bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40">Most Played</span>
        )}
      </div>
    </div>
  )
}

