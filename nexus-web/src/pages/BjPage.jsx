import { bjData as data } from "../common/bjData"
import Container from "../shared/Container"
import { useSound } from '../hooks/useSound'

export default function BjPage() {
  const { click, select } = useSound()
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 overflow-hidden">
      {/* PS Vita Screen Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
          backgroundSize: '100px 50px'
        }}></div>
      </div>

      {/* PS Vita OLED Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* PS Vita Handheld Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          
          {/* Left Control Panel - Profile & Stats */}
          <div className="xl:col-span-1 space-y-4">
            {/* PS Vita Style Profile Card */}
            <Container className="p-6 bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 border-emerald-500/30" id="character">
              {/* OLED Screen Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
              
              <div className="relative text-center">
                <div className="relative inline-block mb-4">
                  {/* PS Vita Avatar Frame */}
                  <div className="relative">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-emerald-400/70 shadow-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20">
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
                    {/* PS Vita Power LED */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-1 tracking-wide">{data.character.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-emerald-400 text-sm font-bold">@{data.character.ign}</span>
                  <span className="text-emerald-300">•</span>
                  <span className="text-emerald-200 text-xs font-medium">{data.character.team}</span>
                </div>
                <div className="bg-emerald-500/20 rounded-lg p-2 mb-4">
                  <p className="text-emerald-100 text-sm font-medium">{data.character.role}</p>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{data.character.bio}</p>
              </div>
            </Container>

            {/* PS Vita Stats Panel */}
            <Container className="p-4 bg-slate-800/80 border-emerald-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
              <h3 className="text-emerald-400 font-bold mb-2 text-center text-sm tracking-wider">VITA STATS</h3>
              <div className="relative space-y-3">
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-3 border border-emerald-500/20">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white block">{stat.value}</span>
                      <span className="text-emerald-300 text-xs uppercase tracking-wide">{stat.label}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-2 h-1 bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{width: `${Math.min(100, (parseInt(stat.value.replace(/\D/g, '')) / 10))}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>

          {/* PS Vita Main Screen */}
          <div className="xl:col-span-3 space-y-6">
            
            {/* PS Vita OLED Screen - Featured Game */}
            <Container className="p-6 bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 border-emerald-500/40">
              {/* OLED Screen Bezels */}
              <div className="absolute inset-0 rounded-3xl border-4 border-slate-600/30"></div>
              <div className="absolute inset-2 rounded-2xl border border-emerald-400/20"></div>
              
              {/* Screen Content */}
              <div className="relative z-10 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-2xl p-4 border border-emerald-400/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-sm font-bold shadow-lg">
                      NOW PLAYING
                    </div>
                    <div className="text-emerald-400 text-xs">●</div>
                  </div>
                  <div className="text-emerald-400 text-sm font-mono">
                    {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">
                  {data.featuredGames[0]?.title || 'Featured Game'}
                </h2>
                <p className="text-slate-300 text-sm mb-4 max-w-md">
                  Experience premium handheld gaming with stunning OLED visuals and immersive dual-analog control.
                </p>
                

              </div>
              
              {/* OLED Screen Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none"></div>
            </Container>

            {/* PS Vita Game Library */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-5 border-2 border-emerald-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 rounded-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <span className="text-white text-sm">🎮</span>
                    </div>
                    VITA LIBRARY
                  </h2>
                  <div className="text-emerald-400 text-sm font-mono">
                    {data.featuredGames?.length || 0} GAMES
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(data.featuredGames || []).map((game) => (
                    <div key={game.id} className="group relative bg-slate-700/60 rounded-2xl overflow-hidden border border-slate-600/50 hover:border-emerald-400/70 transition-all duration-300 hover:scale-102">
                      {/* Game Card Frame */}
                      <div className="relative">
                        <div className="aspect-square relative overflow-hidden bg-slate-600/30">
                          <img 
                            src={game.image} 
                            alt={game.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                          
                          {/* PS Vita Game Tag */}
                          <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-xs font-bold shadow-lg">
                            {game.tag}
                          </div>
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/90 flex items-center justify-center backdrop-blur-sm">
                              <span className="text-white text-lg">▶</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-slate-800/80">
                          <h3 className="text-white font-bold text-sm mb-1 truncate">{game.title}</h3>
                          <div className="flex items-center justify-between">
                            <p className="text-emerald-300 text-xs">PS Vita</p>
                            <div className="text-emerald-400 text-xs">●</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Control Panel - Social & Trophies */}
          <div className="xl:col-span-1 space-y-4">
            
            {/* PS Vita Activity Feed */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
              <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm tracking-wider">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                LIVE ACTIVITY
              </h3>
              <div className="relative space-y-3">
                {(data.activity || []).slice(0, 4).map((item, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-3 border border-emerald-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0 animate-pulse"></div>
                      <div className="flex-1">
                        <p className="text-white text-xs font-medium leading-tight">{item.action}</p>
                        <p className="text-emerald-300 text-xs font-mono mt-1">{item.when}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PS Vita Friends Panel */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
              <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm tracking-wider">
                <span className="text-emerald-400">👥</span>
                VITA FRIENDS
              </h3>
              <div className="relative space-y-3">
                {(data.friends || []).slice(0, 4).map((friend) => (
                  <div key={friend.id} className="bg-slate-700/50 rounded-lg p-3 border border-emerald-500/20">
                    <div className="flex items-center gap-3">
                      {friend.avatar ? (
                        <img 
                          src={friend.avatar} 
                          alt={friend.name}
                          className="w-10 h-10 rounded-xl object-cover border border-emerald-400/50"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                          {friend.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold">{friend.name}</p>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${friend.status === 'Online' ? 'bg-emerald-400' : friend.status === 'In Match' ? 'bg-yellow-400' : 'bg-slate-400'}`}></div>
                          <p className="text-emerald-300 text-xs">{friend.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PS Vita Trophy Case */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
              <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm tracking-wider">
                <span className="text-yellow-400">🏆</span>
                TROPHY CASE
              </h3>
              <div className="relative grid grid-cols-2 gap-3">
                {(data.achievements || []).slice(0, 4).map((achievement, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-3 border border-emerald-500/20 text-center hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-2 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">🏆</span>
                    </div>
                    <p className="text-white text-xs font-semibold leading-tight">{achievement}</p>
                    <div className="mt-1 h-1 bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}