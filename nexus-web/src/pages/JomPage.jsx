import GameCard from "../components/jom/GameCard";
import ActivityItem from "../components/jom/ActivityItem";
import AchievementBadge from "../components/jom/AchievementBadge";
import NewsCard from "../components/jom/NewsCard";
import FriendsCard from "../components/jom/FriendsCard";
import CharacterCard from "../components/jom/CharacterCard";
import SectionHeader from "../components/jom/SectionHeader";
import Hero from "../components/jom/Hero";
import Container from "../shared/Container";
import { jomData as data } from "../common/jomData";
import { useSound } from '../hooks/useSound'
import '../components/jom/JomComponents.css'

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
    <div className="pt-24 px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* PS5 Particle Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 ps5-particle-bg"></div>
      </div>
      
      {/* PS5 Ambient Light Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse ps5-ambient-light-1"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse ps5-ambient-light-2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl animate-pulse ps5-ambient-light-3"></div>
      </div>
      
      {/* PS5 Edge Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px ps5-edge-lighting-top"></div>
        <div className="absolute bottom-0 right-0 w-full h-px ps5-edge-lighting-bottom"></div>
        <div className="absolute left-0 top-0 w-px h-full ps5-edge-lighting-left"></div>
        <div className="absolute right-0 top-0 w-px h-full ps5-edge-lighting-right"></div>
      </div>
      {/* Hero - Futuristic Game Selection */}
      <Hero 
        hero={{
          backgroundImage: data.hero.backgroundImage,
          title: "Uncharted: The Lost Legacy",
          description: "Embark on an action-packed adventure through ancient ruins and dangerous landscapes as Chloe Frazer and Nadine Ross search for the legendary Tusk of Ganesh."
        }}
        games={data.games}
      />

        {/* Character Profile - PS5 Style Card */}
        <div id="character">
          <CharacterCard character={data.character} />
        </div>

      {/* Gaming Stats - Modern Dashboard */}
      <div className="space-y-6">
                      {/* Quick Stats Overview - PS5 Style */}
              <Container className="p-8 bg-gradient-to-br from-black via-slate-900 to-black border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <SectionHeader 
            title="Gaming Overview" 
            badge="Live Stats" 
            accentColor="blue" 
          />
          
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
                  <Container className="p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            <SectionHeader 
              title="Milestones" 
              badge="Progress" 
              accentColor="cyan" 
            />

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
                  <Container className="p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            <SectionHeader 
              title="Achievements" 
              badge={data.achievements?.length || 0} 
              accentColor="yellow" 
            />
            
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
                        {/* Recent Activity - PS5 Style Card */}
                <Container className="p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <SectionHeader 
            title="Recent Activity" 
            badge="Live Feed" 
            accentColor="cyan" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(data.activity || []).map((item, idx) => (
              <div key={idx} className="group p-4 rounded-xl bg-[#1E293B]/60 border border-[#334155]/40 hover:border-[#06B6D4]/50 hover:bg-[#1E293B]/80 transition-all duration-300">
                <ActivityItem action={item.action} when={item.when} />
              </div>
            ))}
          </div>
        </Container>

                              {/* Friends Section - PS5 Style */}
                <Container className="p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        <SectionHeader 
          title="Friends" 
          badge={`${data.friends?.filter(f => f.status.toLowerCase() === 'online').length || 0} Online`} 
          accentColor="green" 
        />
        
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

                      {/* News Section - PS5 Style */}
                <Container className="p-8 bg-gradient-to-br from-black via-slate-900/90 to-black border border-white/20 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        <SectionHeader 
          title="Gaming News" 
          badge="Latest" 
          accentColor="indigo" 
        />
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