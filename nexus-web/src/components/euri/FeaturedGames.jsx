import Container from "../../shared/Container"
import SectionHeader from "./SectionHeader"

export default function EuriFeaturedGames({ games = [] }) {
  return (
    <section className="mt-12">
      <SectionHeader title="Featured Games" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {(games || []).map((game) => (
          <Container key={game.id} className="group cursor-pointer hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-black)]/80 via-transparent to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[var(--electric-blue)] text-[var(--text-white)]">
                  {game.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold text-[var(--text-white)]">{game.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--electric-blue)]/50 rounded-xl transition-colors duration-300" />
            </div>
          </Container>
        ))}
      </div>
    </section>
  )
}
