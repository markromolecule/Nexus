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
        ? 'border-blue-400 bg-gradient-to-r from-slate-950 via-blue-600/20 to-cyan-400/20 shadow-[0_0_35px_rgba(59,130,246,0.3)]'
        : 'border-gray-700 bg-slate-900/40'
    } transition hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:border-blue-400/60 backdrop-blur-sm`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/20" />
      <div className="relative flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-slate-800 ring-1 ring-gray-700 p-1">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-400" />
          )}
        </div>
        <div>
          <div className="text-lg font-semibold text-white">{title}</div>
          <div className="text-sm text-gray-400">{genre}</div>
        </div>
        {top && (
          <span className="ml-auto text-[10px] px-2 py-1 rounded bg-blue-400/20 text-blue-400 border border-blue-400/40 font-mono">TOP</span>
        )}
      </div>
    </div>
  )
}
