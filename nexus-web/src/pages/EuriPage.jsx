import { euriData as data } from "../common/euriData"
import Container from "../shared/Container"
import { useSound } from '../hooks/useSound'

export default function EuriPage() {
  const { click, select } = useSound()
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pt-24 overflow-hidden">
      {/* Nintendo Switch Joy-Con Color Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(236, 72, 153, 0.3) 100%)',
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      {/* Joy-Con Neon Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Nintendo Switch Docked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          
          {/* Left Joy-Con - Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Nintendo Switch Profile Card */}
            <div className="relative bg-gradient-to-br from-slate-800 via-blue-900/50 to-slate-800 rounded-3xl p-8 shadow-2xl border-2 border-blue-500/40 overflow-hidden">
              {/* Joy-Con Left Styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-3xl"></div>
              
              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  {/* Nintendo Switch Avatar Frame */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden ring-3 ring-blue-400/70 shadow-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20">
                      {data.character.avatar ? (
                        <img 
                          src={data.character.avatar} 
                          alt={data.character.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-4xl">
                          {data.character.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    {/* Switch Home Button Glow */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{data.character.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-blue-400 text-lg font-bold">@{data.character.ign}</span>
                  <span className="text-purple-300">•</span>
                  <span className="text-purple-200 text-sm font-medium">{data.character.team}</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-3 mb-4 border border-blue-400/30">
                  <p className="text-blue-100 text-base font-medium">{data.character.role}</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{data.character.bio}</p>
              </div>
            </div>

            {/* Nintendo Switch Stats Dashboard */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-purple-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
              <h3 className="text-purple-400 font-bold mb-4 text-center text-lg tracking-wider">SWITCH STATS</h3>
              <div className="relative space-y-4">
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-700/60 rounded-2xl p-4 border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                    <div className="relative text-center">
                      <span className="text-3xl font-bold text-white block">{stat.value}</span>
                      <span className="text-purple-300 text-sm uppercase tracking-wide">{stat.label}</span>
                    </div>
                    {/* Joy-Con Style Progress Bar */}
                    <div className="mt-3 h-2 bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" style={{width: `${Math.min(100, (parseInt(stat.value.replace(/\D/g, '')) / 30))}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nintendo Switch Main Screen */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Switch Console Screen - Featured Game */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-10 shadow-2xl border-2 border-purple-500/40">
              {/* Switch Screen Bezels */}
              <div className="absolute inset-0 rounded-3xl border-4 border-slate-600/40"></div>
              <div className="absolute inset-3 rounded-2xl border-2 border-purple-400/30"></div>
              
              {/* Switch Home Interface */}
              <div className="relative z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl p-8 border border-purple-400/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white text-sm font-bold shadow-xl">
                      RECENTLY PLAYED
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-200"></div>
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-400"></div>
                    </div>
                  </div>
                  <div className="text-purple-400 text-lg font-mono">
                    {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-3 tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {data.featuredGames[0]?.title || 'Featured Game'}
                </h2>
                <p className="text-slate-300 text-base mb-8 max-w-md">
                  Experience the ultimate portable gaming with Nintendo Switch's hybrid design and exclusive titles.
                </p>
                

              </div>
              
              {/* Switch Screen Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
            </div>

            {/* Nintendo Switch Game Grid */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-lg">🎮</span>
                    </div>
                    SWITCH LIBRARY
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="text-purple-400 text-lg font-mono">
                      {data.featuredGames?.length || 0} GAMES
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(data.featuredGames || []).map((game) => (
                    <div key={game.id} className="group relative bg-slate-700/60 rounded-3xl overflow-hidden border-2 border-slate-600/50 hover:border-purple-400/70 transition-all duration-500 hover:scale-105">
                      {/* Nintendo Switch Game Card */}
                      <div className="relative">
                        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                          <img 
                            src={game.image} 
                            alt={game.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                          
                          {/* Switch Game Badge */}
                          <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white text-sm font-bold shadow-xl">
                            {game.tag}
                          </div>
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                              <span className="text-white text-2xl ml-1">▶</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-br from-slate-800/90 to-slate-700/90">
                          <h3 className="text-white font-bold text-lg mb-2 truncate">{game.title}</h3>
                          <div className="flex items-center justify-between">
                            <p className="text-purple-300 text-sm">Nintendo Switch</p>
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Nintendo Switch Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* Switch Activity Feed */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-sm">⚡</span>
              </div>
              ACTIVITY FEED
            </h2>
            <div className="relative space-y-4">
              {(data.activity || []).map((item, idx) => (
                <div key={idx} className="bg-slate-700/60 rounded-2xl p-4 border border-blue-500/30 hover:border-purple-400/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium leading-tight">{item.action}</p>
                      <p className="text-blue-300 text-xs font-mono mt-1">{item.when}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Switch Friends Network */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-sm">👥</span>
              </div>
              SWITCH FRIENDS
            </h2>
            <div className="relative grid grid-cols-1 gap-4">
              {(data.friends || []).map((friend) => (
                <div key={friend.id} className="bg-slate-700/60 rounded-2xl p-4 border border-purple-500/30 hover:border-pink-400/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      {friend.avatar ? (
                        <img 
                          src={friend.avatar} 
                          alt={friend.name}
                          className="w-12 h-12 rounded-xl object-cover border-2 border-purple-400/50"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                          {friend.name.charAt(0)}
                        </div>
                      )}
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${friend.status === 'Online' ? 'bg-green-400' : friend.status === 'In Match' ? 'bg-yellow-400' : 'bg-slate-400'}`}></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{friend.name}</p>
                      <p className="text-purple-300 text-xs">{friend.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nintendo Achievement Showcase */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-pink-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-yellow-500/5 rounded-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-sm">🏆</span>
              </div>
              ACHIEVEMENTS
            </h2>
            <div className="relative grid grid-cols-2 gap-4">
              {(data.achievements || []).map((achievement, idx) => (
                <div key={idx} className="bg-slate-700/60 rounded-2xl p-4 border border-pink-500/30 text-center hover:scale-105 hover:border-yellow-400/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-3 flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-lg">🏆</span>
                  </div>
                  <p className="text-white font-semibold text-xs leading-tight">{achievement}</p>
                  <div className="mt-2 flex justify-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                    <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                    <div className="w-1 h-1 rounded-full bg-pink-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}