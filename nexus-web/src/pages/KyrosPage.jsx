import { kyrosData as data } from "../common/kyrosData"

export default function KyrosPage() {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-black via-purple-900/30 to-black pt-24">
      {/* Purple Neon Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Hero Profile Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/80 via-violet-800/80 to-purple-900/80 p-8 shadow-2xl border border-purple-500/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-purple-400/70 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                {data.character.avatar ? (
                  <img 
                    src={data.character.avatar} 
                    alt={data.character.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-4xl">
                    {data.character.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-1">{data.character.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="text-purple-400 text-lg font-bold">@{data.character.ign}</span>
                <span className="text-violet-300">•</span>
                <span className="text-violet-200 text-sm font-medium">{data.character.team}</span>
              </div>
              <p className="text-purple-100 text-lg mb-4">{data.character.role}</p>
              <p className="text-purple-200 text-sm leading-relaxed max-w-2xl">{data.character.bio}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-300 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Games */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-purple-400">⚔️</span>
            Fighting Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.featuredGames || []).map((game) => (
              <div key={game.id} className="group relative bg-purple-900/20 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-purple-500/80 rounded text-white text-xs font-bold">
                    {game.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1">{game.title}</h3>
                  <p className="text-purple-300 text-xs">{game.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity & Friends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-purple-400">⚡</span>
              Recent Activity
            </h2>
            <div className="space-y-4">
              {(data.activity || []).map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-purple-900/20 rounded-xl border border-purple-500/20">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{item.action}</p>
                    <p className="text-purple-300 text-xs">{item.when}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Friends */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-purple-400">👥</span>
              Fighter Network
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {(data.friends || []).map((friend) => (
                <div key={friend.id} className="p-4 bg-purple-900/20 rounded-xl border border-purple-500/20 text-center hover:bg-purple-900/30 transition-all">
                  <div className="relative inline-block mb-2">
                    {friend.avatar ? (
                      <img 
                        src={friend.avatar} 
                        alt={friend.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/50"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white font-bold">
                        {friend.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <p className="text-white font-semibold text-sm">{friend.name}</p>
                  <p className="text-purple-300 text-xs">{friend.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-purple-400">🏆</span>
            Tournament Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(data.achievements || []).map((achievement, idx) => (
              <div key={idx} className="p-4 bg-purple-900/20 rounded-xl border border-purple-500/30 text-center hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-2 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                  <span className="text-white font-bold text-sm">🏆</span>
                </div>
                <p className="text-white font-semibold text-xs">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}