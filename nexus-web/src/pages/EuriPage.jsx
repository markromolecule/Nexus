import { euriData as data } from "../common/euriData"

export default function EuriPage() {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 pt-24">
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Hero Section - Euri's Profile */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
                {data.character.avatar ? (
                  <img 
                    src={data.character.avatar} 
                    alt={data.character.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-4xl">
                    {data.character.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-1">{data.character.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="text-pink-400 text-lg font-bold">@{data.character.ign}</span>
                <span className="text-purple-300">•</span>
                <span className="text-purple-200 text-sm font-medium">{data.character.team}</span>
              </div>
              <p className="text-purple-100 text-lg mb-4">{data.character.role}</p>
              <p className="text-purple-200 text-sm leading-relaxed max-w-2xl">{data.character.bio}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-200 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Games - Centered Grid */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-pink-400">🎮</span>
            Featured Games
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {(data.featuredGames || []).map((game) => (
                <div key={game.id} className="group">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                    <div className="aspect-square relative overflow-hidden bg-white/10">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-contain p-2"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-pink-500/80 rounded-full text-white text-xs font-bold">
                        {game.tag}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold text-base mb-2">{game.title}</h3>
                      <p className="text-purple-300 text-sm">Nintendo Switch</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity & Friends Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-indigo-400">⚡</span>
              Recent Activity
            </h2>
            <div className="space-y-4">
              {(data.activity || []).map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{item.action}</p>
                    <p className="text-purple-300 text-xs">{item.when}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Friends */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-pink-400">👥</span>
              Friends Online
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {(data.friends || []).map((friend) => (
                <div key={friend.id} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="relative inline-block mb-2">
                    {friend.avatar ? (
                      <img 
                        src={friend.avatar} 
                        alt={friend.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-pink-400/50"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
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
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-400">🏆</span>
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(data.achievements || []).map((achievement, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30 text-center hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-2 flex items-center justify-center">
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