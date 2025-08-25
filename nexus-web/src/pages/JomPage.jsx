import CharacterCard from "../components/joseph/CharacterCard";
import StatsCard from "../components/joseph/StatsCard";
import GameCard from "../components/joseph/GameCard";
import FeaturedTournamentCard from "../components/joseph/FeaturedTournamentCard";
import ActivityItem from "../components/joseph/ActivityItem";
import AchievementBadge from "../components/joseph/AchievementBadge";
import NewsCard from "../components/joseph/NewsCard";
import Container from "../shared/Container";
import { jomData as data } from "../common/data";
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
    <div className="pt-24 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero - PS4 Style Game Selection */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Background - Selected Game (Lost Legacy) */}
        <div className="absolute inset-0">
          <img 
            src={data.hero.backgroundImage} 
            alt="Uncharted: The Lost Legacy Background"
            className="h-full w-full object-cover object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Game Information - Left Side */}
        <div className="relative z-10 pt-8 px-6 lg:px-8">
          <div className="max-w-md">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-2xl">
              Uncharted: The Lost Legacy
            </h1>
            <p className="mt-3 text-[#E5E7EB] text-xs md:text-sm drop-shadow-lg leading-relaxed">
              Embark on an action-packed adventure through ancient ruins and dangerous landscapes as Chloe Frazer and Nadine Ross search for the legendary Tusk of Ganesh in the Western Ghats of India.
            </p>
          </div>
        </div>

        {/* Game Row - Bottom Section (PS4 Style) */}
        <div className="relative z-10 pb-6 px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {/* Lost Legacy - Selected/Active */}
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden border-2 border-[#06B6D4] shadow-[0_0_20px_#06B6D4]/50 bg-black p-1">
                  <img 
                    src={data.hero.backgroundImage}
                    alt="Uncharted: The Lost Legacy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Other Games */}
              {data.games?.slice(0, 5).map((game, index) => (
                <div key={game.id} className="flex-shrink-0 relative group cursor-pointer">
                                  <div className="w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-[#9CA3AF] transition-all duration-300 bg-black p-1">
                  <img 
                    src={game.image}
                    alt={game.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              ))}

              {/* More Games Indicator */}
              <div className="flex-shrink-0 relative group cursor-pointer">
                <div className="w-32 h-20 md:w-40 md:h-24 rounded-lg border-2 border-dashed border-[#6B7280] bg-[#1F2937]/50 flex items-center justify-center group-hover:border-[#9CA3AF] transition-all duration-300">
                  <div className="text-[#9CA3AF] group-hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    <div className="text-xs">More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Profile - Modern Hero Card */}
      <Container className="p-0 overflow-hidden bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B]" id="character">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8B5CF6]/10 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #8B5CF6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #8B5CF6 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="relative p-8">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="relative group" onMouseEnter={select} onClick={click}>
                <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#8B5CF6]/50 shadow-[0_0_30px_#8B5CF6]/30">
                  <img 
                    src={data.character.avatar} 
                    alt={data.character.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {data.character.top && (
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Character Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{data.character.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#8B5CF6]/20 text-[#A78BFA] text-sm font-medium border border-[#8B5CF6]/30">
                    {data.character.role}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-bold">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[#E5E7EB] text-sm leading-relaxed max-w-lg">
                  {data.character.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Gaming Stats - Modern Dashboard */}
      <div className="space-y-6">
        {/* Quick Stats Overview */}
        <Container className="p-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-[#06B6D4] to-[#2563EB] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Gaming Overview</h2>
            <div className="ml-auto px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm font-medium">
              Live Stats
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(data.stats?.length ? data.stats : [{ label: "No Data", value: "--" }]).map((s, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569]/30 hover:border-[#06B6D4]/50 hover:shadow-[0_0_30px_#06B6D4]/20 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors duration-300">
                    {s.value}
                  </div>
                  <div className="text-[#94A3B8] text-sm font-medium">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Detailed Performance Metrics */}
        <Container className="p-8 bg-gradient-to-br from-[#134E4A] via-[#0F766E] to-[#134E4A]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-[#10B981] to-[#06B6D4] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Performance Metrics</h2>
            <div className="ml-auto px-3 py-1 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] text-sm font-medium">
              Real-time
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.statDetails || []).map((d, i) => {
              const percent = Math.min(100, Math.round((d.value / d.max) * 100));
              return (
                <div key={i} className="group p-6 rounded-2xl bg-[#0F766E]/40 border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 hover:bg-[#0F766E]/60 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#E5E7EB] font-medium">{d.label}</span>
                    <span className="text-[#10B981] font-bold text-lg">
                      {d.value}{d.unit || ""}
                    </span>
                  </div>
                  <div className="relative h-3 rounded-full bg-[#134E4A] overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-full transition-all duration-500 group-hover:shadow-[0_0_15px_#10B981]/50"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-[#94A3B8]">
                    {percent}% of maximum
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
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

        {/* Achievements + News - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Container className="p-8 bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-[#F59E0B] to-[#EF4444] rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Achievements</h2>
              <div className="ml-auto px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium">
                {data.achievements?.length || 0}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(data.achievements || []).map((a, idx) => (
                <div key={a} className="group">
                  <AchievementBadge label={a} />
                </div>
              ))}
            </div>
          </Container>

          <Container className="p-8 bg-gradient-to-br from-[#134E4A] via-[#0F766E] to-[#134E4A]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-[#10B981] to-[#06B6D4] rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Gaming News</h2>
              <div className="ml-auto px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm font-medium">
                Latest
              </div>
            </div>
            <div className="space-y-3">
              {(data.news || []).map((n, idx) => (
                <div key={idx} className="group p-3 rounded-lg bg-[#0F766E]/40 border border-[#14B8A6]/20 hover:border-[#14B8A6]/40 hover:bg-[#0F766E]/60 transition-all duration-300">
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
    </div>
  );
}