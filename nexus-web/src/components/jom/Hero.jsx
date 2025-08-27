import './JomComponents.css'

export default function Hero({ hero, games, onGameSelect }) {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 backdrop-blur-sm border border-gray-800/50">
      {/* Background - Selected Game */}
      <div className="absolute inset-0">
        <img 
          src={hero.backgroundImage} 
          alt="Game Background"
          className="h-full w-full object-cover object-center opacity-60"
        />
      </div>

      {/* Game Information - Left Side */}
      <div className="relative z-10 pt-8 px-6 lg:px-8">
        <div className="max-w-md">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-2xl mb-4">
            {hero.title || "Featured Game"}
          </h1>
          <p className="text-gray-300 text-base md:text-lg drop-shadow-lg leading-relaxed mb-6">
            {hero.description || "Experience the latest in gaming excellence with cutting-edge graphics and immersive gameplay."}
          </p>
        </div>
      </div>

      {/* Game Row - Bottom Section */}
      <div className="relative z-10 pb-6 px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {/* Featured Game - Selected/Active */}
            <div className="flex-shrink-0 relative">
              <div className="w-36 h-20 md:w-44 md:h-24 rounded-lg overflow-hidden border border-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-slate-900/80 backdrop-blur-sm">
                <img 
                  src={hero.backgroundImage}
                  alt={hero.title || "Featured Game"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Other Games */}
            {games?.slice(0, 5).map((game, index) => (
              <div key={game.id} className="flex-shrink-0 relative group cursor-pointer" onClick={() => onGameSelect?.(game)}>
                <div className="w-36 h-20 md:w-44 md:h-24 rounded-lg overflow-hidden border border-gray-700/60 group-hover:border-gray-500/80 transition-all duration-300 bg-slate-900/60 backdrop-blur-sm">
                  <img 
                    src={game.image}
                    alt={game.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </div>
              </div>
            ))}

            {/* More Games Indicator */}
            <div className="flex-shrink-0 relative group cursor-pointer">
              <div className="w-36 h-20 md:w-44 md:h-24 rounded-lg border border-dashed border-gray-600/60 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center group-hover:border-gray-500/80 group-hover:bg-slate-900/60 transition-all duration-300">
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center">
                  <div className="w-8 h-8 mx-auto mb-1 border border-gray-600 rounded flex items-center justify-center">
                    <span className="text-xs">+</span>
                  </div>
                  <div className="text-xs font-mono">MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
