export default function NewsCard({ title, source, tag, image }) {
  return (
    <div className="p-4 bg-slate-800/40 border border-gray-700/50 rounded-xl hover:border-indigo-400/50 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-slate-800 ring-1 ring-gray-700">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-indigo-500 to-purple-500" />
          )}
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-gray-400">{source}</div>
        </div>
        {tag && (
          <span className="text-[10px] px-2 py-1 rounded bg-indigo-400/20 text-indigo-400 border border-indigo-400/40 font-mono">{tag}</span>
        )}
      </div>
    </div>
  )
}
