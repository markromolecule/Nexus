import CharacterCard from "../components/joseph/CharacterCard";
import StatsCard from "../components/joseph/StatsCard";
import GameCard from "../components/joseph/GameCard";
import FeaturedTournamentCard from "../components/joseph/FeaturedTournamentCard";
import ActivityItem from "../components/joseph/ActivityItem";
import AchievementBadge from "../components/joseph/AchievementBadge";
import NewsCard from "../components/joseph/NewsCard";
import FriendsCard from "../components/joseph/FriendsCard";
import Container from "../shared/Container";
import { useState } from "react";
import { josephData as data } from "../common/josephData";
import { useSound } from '../hooks/useSound'

export default function JosephPage() {
  const { click, select } = useSound()
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [hudOn, setHudOn] = useState(true)

  const handleEnterClick = () => {
    click()
    const el = document.getElementById("character");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Hero */}
      <Container className="relative overflow-hidden p-10 md:p-12 bg-gradient-to-r from-[#0D0D0D] via-[#2563EB]/10 to-[#06B6D4]/10 min-h-[60vh] md:min-h-[65vh] flex items-center" onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setParallax({ x: px, y: py });
      }}>
        {/* Futuristic ambient layers */}
        <div className="neon-orb" />
        <div className="grid-overlay" />
        <div className="glow-ring" />
        <div className="noise-layer" />
        <div className="sweep" />
        {hudOn && <div className="scanlines" />}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-8 w-full">
          <div className="flex-1" style={{ transform: `translate3d(${parallax.x * 6}px, ${parallax.y * 4}px, 0)` }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-[#D1D5DB] max-w-2xl text-base md:text-lg">
              {data.hero.subtitle}
            </p>
            <button
              onClick={handleEnterClick}
              onMouseEnter={select}
              className="group relative mt-7 px-6 md:px-7 py-3 md:py-3.5 rounded-xl text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_0_25px_#06B6D4]/40 transition hover:brightness-110 hover:shadow-[0_0_60px_#06B6D4]/60 hover:ring-2 hover:ring-[#22D3EE]/40 active:scale-[0.98]"
            >
              <span className="relative z-10">{data.hero.cta}</span>
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]" />
            </button>
            <div className="mt-3 flex items-center gap-2">
              <label className="text-xs text-[#9CA3AF]">HUD</label>
              <button onClick={() => setHudOn(v => !v)} onMouseEnter={select} className={`text-xs px-2 py-1 rounded border transition ${hudOn ? 'border-[#06B6D4]/50 text-[#06B6D4]' : 'border-[#1F2937] text-[#9CA3AF]'} hover:border-[#06B6D4]/70`}>
                {hudOn ? 'On' : 'Off'}
              </button>
            </div>
          </div>
          
          {/* Media with left fade */}
          <div className="relative w-full md:col-start-2 md:col-end-3 md:justify-self-end h-[260px] md:h-[55vh] md:w-[48vw] lg:w-[50vw] xl:w-[55vw] 2xl:w-[58vw] md:mr-0 md:pr-3 lg:pr-4 xl:pr-5 2xl:pr-6 md:pb-6" style={{ transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -8}px, 0)` }}>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0B1220]">
              {data.hero.videoUrl ? (
                (data.hero.videoType?.includes('gif') || /\.gif($|\?)/i.test(data.hero.videoUrl)) ? (
                  <img
                    src={data.hero.videoUrl}
                    alt="Hero media"
                    className="h-full w-full object-cover transform transition-transform duration-500 will-change-transform hover:scale-[1.03]"
                  />
                ) : (
                  <video
                    src={data.hero.videoUrl}
                    className="h-full w-full object-cover transform transition-transform duration-500 will-change-transform hover:scale-[1.03]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )
              ) : (
                <div className="h-full w-full flex items-center justify-center text-[#9CA3AF]">Media Preview</div>
              )}
              {/* left fade mask */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/30 to-transparent" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-[#06B6D4]/20" />
            </div>
          </div>
        </div>
      </Container>

      {/* Character + Stats horizontal layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <Container className="p-5" id="character">
          <div onMouseEnter={select} onClick={click}>
            <CharacterCard character={data.character} />
          </div>
        </Container>
        <Container className="p-5 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(data.stats?.length
              ? data.stats
              : [{ label: "No Data", value: "--" }]
            ).map((s, i) => (
              <StatsCard key={i} label={s.label} value={s.value} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {(data.statDetails || []).map((d, i) => {
              const percent = Math.min(
                100,
                Math.round((d.value / d.max) * 100)
              );
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-[#1F2937] bg-[#0B1220]/40"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9CA3AF]">{d.label}</span>
                    <span className="text-white">
                      {d.value}
                      {d.unit ? d.unit : ""}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded bg-[#111827] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Featured Tournament */}
      {data.tournament && (
        <FeaturedTournamentCard
          title={data.tournament.title}
          prizePool={data.tournament.prizePool}
          startsAt={data.tournament.startsAt}
        />
      )}

      {/* Games */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {(data.games?.length ? data.games : []).map((g) => (
          <div key={g.id} className="transform transition-transform hover:scale-[1.02]">
            <GameCard title={g.title} genre={g.genre} top={!!g.top} image={g.image} />
          </div>
        ))}
        {!data.games?.length && (
          <div className="p-6 rounded-xl border border-[#1F2937] text-[#E5E7EB]">
            No games available
          </div>
        )}
      </div>
      
      {/* Friends */}
      <FriendsCard friends={data.friends} />

      {/* Activity + Achievements + News */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Container className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-4 w-1.5 rounded bg-gradient-to-b from-[#06B6D4] to-[#2563EB]" />
            <span className="text-sm font-semibold tracking-wide">Recent Activity</span>
            <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-[#06B6D4]/30 text-[#06B6D4]">Live</span>
          </div>
          <div>
            {(data.activity || []).map((item, idx) => (
              <ActivityItem key={idx} action={item.action} when={item.when} />
            ))}
          </div>
        </Container>
        <Container className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-4 w-1.5 rounded bg-gradient-to-b from-[#06B6D4] to-[#2563EB]" />
            <span className="text-sm font-semibold tracking-wide">Achievements</span>
            <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-[#2563EB]/30 text-[#2563EB]">New</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(data.achievements || []).map((a) => (
              <AchievementBadge key={a} label={a} />
            ))}
          </div>
        </Container>
        <Container className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-4 w-1.5 rounded bg-gradient-to-b from-[#06B6D4] to-[#2563EB]" />
            <span className="text-sm font-semibold tracking-wide">News</span>
            <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-[#06B6D4]/30 text-[#06B6D4]">Updated</span>
          </div>
          <div className="space-y-3">
            {(data.news || []).map((n, idx) => (
              <NewsCard
                key={idx}
                title={n.title}
                source={n.source}
                tag={n.tag}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
