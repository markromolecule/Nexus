import GameCard from "../components/joseph/GameCard";
import ActivityItem from "../components/joseph/ActivityItem";
import AchievementBadge from "../components/joseph/AchievementBadge";
import NewsCard from "../components/joseph/NewsCard";
import FriendsCard from "../components/joseph/FriendsCard";
import Container from "../shared/Container";
import { jomData as data } from "../common/jomData";
import { useSound } from '../hooks/useSound'

export default function JomPage() {
  const { click, select } = useSound()

  const handleEnterClick = () => {
    click()
    const el = document.getElementById("character");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900">
      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Animated Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Hero - Futuristic Game Selection */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 backdrop-blur-sm border border-gray-800/50">
        {/* Background - Selected Game (Lost Legacy) */}
        <div className="absolute inset-0">
          <img 
            src={data.hero.backgroundImage} 
            alt="Uncharted: The Lost Legacy Background"
            className="h-full w-full object-cover object-center opacity-60"
          />
          {/* Futuristic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-transparent to-slate-950/80" />
          {/* Scan lines effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
        </div>

        {/* Game Information - Left Side */}
        <div className="relative z-10 pt-8 px-6 lg:px-8">
          <div className="max-w-md">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white drop-shadow-2xl mb-4">
              Uncharted: The Lost Legacy
            </h1>
            <p className="text-gray-300 text-sm md:text-base drop-shadow-lg leading-relaxed mb-6">
              Embark on an action-packed adventure through ancient ruins and dangerous landscapes as Chloe Frazer and Nadine Ross search for the legendary Tusk of Ganesh.
            </p>
            <button className="text-cyan-400 hover:text-cyan-300 text-lg transition-colors duration-300 relative group">
              <span className="relative z-10">Play Now</span>
              <div className="absolute inset-0 bg-cyan-400/10 rounded border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Game Row - Bottom Section (Futuristic Style) */}
        <div className="relative z-10 pb-6 px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              {/* Lost Legacy - Selected/Active */}
              <div className="flex-shrink-0 relative">
                <div className="w-36 h-20 md:w-44 md:h-24 rounded-lg overflow-hidden border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-slate-900/80 backdrop-blur-sm">
                  <img 
                    src={data.hero.backgroundImage}
                    alt="Uncharted: The Lost Legacy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Other Games */}
              {data.games?.slice(0, 5).map((game, index) => (
                <div key={game.id} className="flex-shrink-0 relative group cursor-pointer">
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

      {/* Character Profile - Futuristic Card */}
      <Container className="p-0 overflow-hidden bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 border border-gray-800/60 backdrop-blur-sm" id="character">
        <div className="relative">
          {/* Futuristic Background Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="relative p-8">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="relative group" onMouseEnter={select} onClick={click}>
                <div className="w-32 h-32 rounded-lg overflow-hidden ring-2 ring-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.3)] bg-slate-900/80">
                  <img 
                    src={data.character.avatar} 
                    alt={data.character.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {data.character.top && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>

              {/* Character Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-1">{data.character.name}</h1>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 text-lg font-bold">@{data.character.ign}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300 text-sm font-medium">{data.character.team}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 rounded bg-cyan-400/10 text-cyan-400 text-sm font-mono font-medium border border-cyan-400/30 backdrop-blur-sm tracking-wider">
                    {data.character.role}
                  </span>
                  <span className="px-3 py-1 rounded bg-slate-800/60 text-gray-300 text-xs font-mono font-bold border border-gray-600/50 backdrop-blur-sm tracking-wider">
                    VERIFIED
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                  {data.character.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Gaming Stats - Modern Dashboard */}
      <div className="space-y-6">
        {/* Quick Stats Overview - PS5 Style */}
        <Container className="p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <h2 className="text-2xl font-bold text-white">Gaming Overview</h2>
            <div className="ml-auto px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
              Live Stats
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(data.stats?.length ? data.stats : [{ label: "No Data", value: "--" }]).map((s, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/30 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {s.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Milestones & Achievements Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Milestones */}
          <Container className="p-8 bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 border border-gray-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              <h2 className="text-2xl font-bold text-white">Milestones</h2>
              <div className="ml-auto px-3 py-1 rounded bg-cyan-400/10 text-cyan-400 text-sm font-mono border border-cyan-400/30">
                Progress
              </div>
            </div>

            <div className="space-y-4">
              {(data.statDetails || []).map((d, i) => {
                const percent = Math.min(100, Math.round((d.value / d.max) * 100));
                return (
                  <div key={i} className="group p-4 rounded-xl bg-slate-800/40 border border-gray-700/50 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-300 font-medium">{d.label}</span>
                      <span className="text-cyan-400 font-bold text-lg">
                        {d.value}{d.unit || ""}
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      {percent}% complete
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>

          {/* Achievements */}
          <Container className="p-8 bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 border border-gray-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
              <h2 className="text-2xl font-bold text-white">Achievements</h2>
              <div className="ml-auto px-3 py-1 rounded bg-yellow-400/10 text-yellow-400 text-sm font-mono border border-yellow-400/30">
                {data.achievements?.length || 0}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {(data.achievements || []).map((achievement, idx) => (
                <div key={idx} className="p-4 bg-slate-800/40 border border-gray-700/50 rounded-xl text-center hover:scale-105 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-2 flex items-center justify-center shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                    <span className="text-slate-900 font-bold text-sm">🏆</span>
                  </div>
                  <p className="text-white font-semibold text-xs leading-tight">{achievement}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Games */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Recently Played</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data.games?.length ? data.games : []).map((g) => (
            <GameCard key={g.id} title={g.title} genre={g.genre} top={!!g.top} image={g.image} />
          ))}
          {!data.games?.length && (
            <div className="p-6 rounded-xl border border-[#1F2937] text-[#E5E7EB]">
              No games available
            </div>
          )}
        </div>
      </div>
      
      {/* Activity + Achievements + News - Modern Layout */}
      <div className="space-y-8">
        {/* Recent Activity - Full Width Modern Card */}
        <Container className="p-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-[#06B6D4] to-[#2563EB] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
            <div className="ml-auto px-3 py-1 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] text-sm font-medium">
              Live Feed
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(data.activity || []).map((item, idx) => (
              <div key={idx} className="group p-4 rounded-xl bg-[#1E293B]/60 border border-[#334155]/40 hover:border-[#06B6D4]/50 hover:bg-[#1E293B]/80 transition-all duration-300">
                <ActivityItem action={item.action} when={item.when} />
              </div>
            ))}
          </div>
        </Container>

              {/* Friends Section - New Layout */}
      <Container className="p-8 bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 border border-gray-800/60 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <h2 className="text-2xl font-bold text-white">Friends</h2>
          <div className="ml-auto px-3 py-1 rounded bg-green-400/10 text-green-400 text-sm font-mono border border-green-400/30">
            {data.friends?.filter(f => f.status.toLowerCase() === 'online').length || 0} Online
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data.friends || []).map((friend) => (
            <div key={friend.id} className="flex items-center gap-4 p-4 bg-slate-800/40 border border-gray-700/50 rounded-xl hover:border-green-400/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="relative">
                {friend.avatar ? (
                  <img 
                    src={friend.avatar} 
                    alt={friend.name}
                    className="w-12 h-12 rounded-lg object-cover border border-gray-600"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    {friend.name.charAt(0)}
                  </div>
                )}
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${
                  friend.status.toLowerCase() === 'online' ? 'bg-green-400' :
                  friend.status.toLowerCase() === 'in match' ? 'bg-blue-400' : 'bg-gray-400'
                }`}></div>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{friend.name}</p>
                <p className="text-gray-400 text-xs">{friend.status}</p>
              </div>
              <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 border border-gray-600 hover:border-green-400/50 rounded text-gray-300 hover:text-green-400 text-xs font-mono transition-all">
                MSG
              </button>
            </div>
          ))}
        </div>
      </Container>

      {/* News Section */}
      <Container className="p-8 bg-gradient-to-br from-slate-950/90 via-gray-950/90 to-slate-900/90 border border-gray-800/60 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <h2 className="text-2xl font-bold text-white">Gaming News</h2>
          <div className="ml-auto px-3 py-1 rounded bg-indigo-400/10 text-indigo-400 text-sm font-mono border border-indigo-400/30">
            Latest
          </div>
        </div>
        <div className="space-y-3">
          {(data.news || []).map((n, idx) => (
            <div key={idx} className="group p-4 rounded-xl bg-slate-800/40 border border-gray-700/50 hover:border-indigo-400/50 hover:bg-slate-800/60 transition-all duration-300">
              <NewsCard
                title={n.title}
                source={n.source}
                tag={n.tag}
                image={n.image}
              />
            </div>
          ))}
        </div>
      </Container>
      </div>
    </div>
  );
}