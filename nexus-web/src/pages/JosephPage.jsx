import CharacterCard from "../components/joseph/CharacterCard";
import StatsCard from "../components/joseph/StatsCard";
import GameCard from "../components/joseph/GameCard";
import FeaturedTournamentCard from "../components/joseph/FeaturedTournamentCard";
import ActivityItem from "../components/joseph/ActivityItem";
import AchievementBadge from "../components/joseph/AchievementBadge";
import NewsCard from "../components/joseph/NewsCard";
import Container from "../shared/Container";
import { josephData as data } from "../common/data";
import { useSound } from '../hooks/useSound'

export default function JosephPage() {
  const { click, select } = useSound()

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
      <Container className="p-10 md:p-12 bg-gradient-to-r from-[#0D0D0D] via-[#2563EB]/10 to-[#06B6D4]/10 min-h-[60vh] md:min-h-[65vh] flex items-center">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-[#D1D5DB] max-w-2xl text-base md:text-lg">
              {data.hero.subtitle}
            </p>
            <button
              onClick={handleEnterClick}
              onMouseEnter={select}
              className="mt-7 px-6 md:px-7 py-3 md:py-3.5 rounded-xl text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_0_25px_#06B6D4]/40 transition hover:brightness-110 hover:shadow-[0_0_40px_#06B6D4]/50 hover:ring-2 hover:ring-[#22D3EE]/40 active:scale-[0.98]"
            >
              {data.hero.cta}
            </button>
          </div>
          <div className="w-full md:w-[460px] h-[260px] rounded-2xl bg-[#0B1220] border border-[#1F2937] flex items-center justify-center text-[#9CA3AF]">
            Console Preview
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
      <FeaturedTournamentCard
        title="Nexus Masters: Neon Cup"
        prizePool="$25,000"
        startsAt="in 3 days"
      />

      {/* Games */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(data.games?.length ? data.games : []).map((g) => (
          <GameCard key={g.id} title={g.title} genre={g.genre} top={!!g.top} />
        ))}
        {!data.games?.length && (
          <div className="p-6 rounded-xl border border-[#1F2937] text-[#E5E7EB]">
            No games available
          </div>
        )}
      </div>
      
      {/* Activity + Achievements + News */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Container className="p-5">
          <div className="text-sm font-semibold mb-3">Recent Activity</div>
          <div>
            {(data.activity || []).map((item, idx) => (
              <ActivityItem key={idx} action={item.action} when={item.when} />
            ))}
          </div>
        </Container>
        <Container className="p-5">
          <div className="text-sm font-semibold mb-3">Achievements</div>
          <div className="flex flex-wrap gap-2">
            {(data.achievements || []).map((a) => (
              <AchievementBadge key={a} label={a} />
            ))}
          </div>
        </Container>
        <Container className="p-5">
          <div className="text-sm font-semibold mb-3">News</div>
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
