import KyrosHero from "../components/kyros/Hero"
import KyrosQuickStats from "../components/kyros/QuickStats"
import KyrosFeaturedGames from "../components/kyros/FeaturedGames"
import KyrosActivityNews from "../components/kyros/ActivityNews"
import KyrosAchievements from "../components/kyros/Achievements"
import KyrosFriends from "../components/kyros/Friends"
import KyrosClips from "../components/kyros/Clips"
import { kyrosData as data } from "../common/kyrosData"

export default function KyrosPage() {
  return (
    <div className="relative z-10">
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F7FB] text-[#0B1220]">
        <KyrosHero hero={data.hero} />
        <KyrosQuickStats stats={data.stats} />
        <KyrosFeaturedGames games={data.featuredGames} />
        <KyrosActivityNews activity={data.activity} news={data.news} />
        <KyrosAchievements items={data.achievements} />
        <KyrosFriends friends={data.friends} />
        <KyrosClips clips={data.clips} />
      </div>
    </div>
  )
}

