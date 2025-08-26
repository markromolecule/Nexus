import { bjData as data } from "../common/bjData"

export default function BjPage() {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 pt-24">
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-gradient-to-b from-emerald-600 to-teal-700 rounded-xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden ring-3 ring-emerald-300/50 shadow-xl">
                    {data.character.avatar ? (
                      <img 
                        src={data.character.avatar} 
                        alt={data.character.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-3xl">
                        {data.character.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-yellow-400 rounded-full text-slate-800 text-xs font-bold">
                    PRO
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-1">{data.character.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-cyan-400 text-sm font-bold">@{data.character.ign}</span>
                  <span className="text-emerald-300">•</span>
                  <span className="text-emerald-200 text-xs font-medium">{data.character.team}</span>
                </div>
                <p className="text-emerald-100 text-sm mb-4">{data.character.role}</p>
                <p className="text-emerald-200 text-xs leading-relaxed">{data.character.bio}</p>
              </div>
            </div>

            {/* Compact Stats */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-emerald-400 font-bold mb-4 text-center">Quick Stats</h3>
              <div className="space-y-3">
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-center">
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-emerald-300 text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Featured Game Banner */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-800 to-emerald-800 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-3 py-1 bg-emerald-500 rounded text-white text-sm font-bold">
                    FEATURED
                  </div>
                  <h2 className="text-2xl font-bold text-white">{data.featuredGames[0]?.title || 'Featured Game'}</h2>
                </div>
                <p className="text-emerald-100 text-sm mb-6 max-w-md">
                  Experience premium handheld gaming with stunning visuals and immersive gameplay.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg">
                  Play Now
                </button>
              </div>
            </div>

            {/* Games Library - Card Grid */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-emerald-400">🎮</span>
                Game Collection
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {(data.featuredGames || []).map((game) => (
                  <div key={game.id} className="group relative bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600/50 hover:border-emerald-400/70 transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-emerald-500 rounded text-white text-xs font-bold">
                        {game.tag}
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="text-white font-bold text-sm mb-1">{game.title}</h3>
                      <p className="text-emerald-300 text-xs">PS Vita</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Activity, Friends, Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Recent Activity */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                  <span>⚡</span>
                  Activity
                </h3>
                <div className="space-y-3">
                  {(data.activity || []).slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white text-xs font-medium">{item.action}</p>
                        <p className="text-slate-400 text-xs">{item.when}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Friends */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                  <span>👥</span>
                  Friends
                </h3>
                <div className="space-y-3">
                  {(data.friends || []).slice(0, 3).map((friend) => (
                    <div key={friend.id} className="flex items-center gap-3">
                      {friend.avatar ? (
                        <img 
                          src={friend.avatar} 
                          alt={friend.name}
                          className="w-8 h-8 rounded-lg object-cover border border-emerald-400/50"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                          {friend.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-white text-xs font-semibold">{friend.name}</p>
                        <p className="text-slate-400 text-xs">{friend.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                  <span>🏆</span>
                  Trophies
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {(data.achievements || []).slice(0, 4).map((achievement, idx) => (
                    <div key={idx} className="text-center p-2 bg-slate-700/50 rounded-lg border border-slate-600/30">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-1 flex items-center justify-center">
                        <span className="text-white text-xs">🏆</span>
                      </div>
                      <p className="text-white text-xs font-semibold leading-tight">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}