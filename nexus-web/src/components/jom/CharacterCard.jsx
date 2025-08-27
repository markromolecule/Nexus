import './JomComponents.css'

export default function CharacterCard({ character }) {
  return (
    <div className="relative p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden">
      {/* PS5 Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <div className="absolute inset-0 ps5-grid-pattern"></div>
      </div>
      
      <div className="relative flex items-start gap-6">
        {/* Avatar */}
        <div className="relative group">
          <div className="w-32 h-32 rounded-lg overflow-hidden ring-2 ring-blue-400/60 shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-slate-900/80">
            <img 
              src={character.avatar} 
              alt={character.name}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          {character.top && (
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <div className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Character Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-1">{character.name}</h1>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-400 text-lg font-bold">@{character.ign}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300 text-sm font-medium">{character.team}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 rounded bg-blue-400/10 text-blue-400 text-sm font-mono font-medium border border-blue-400/30 backdrop-blur-sm tracking-wider">
              {character.role}
            </span>
            <span className="px-3 py-1 rounded bg-slate-800/60 text-gray-300 text-xs font-mono font-bold border border-gray-600/50 backdrop-blur-sm tracking-wider">
              VERIFIED
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
            {character.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
