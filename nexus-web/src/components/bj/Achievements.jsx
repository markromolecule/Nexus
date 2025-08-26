import Container from "../../shared/Container"
import SectionHeader from "./SectionHeader"

export default function BjAchievements({ items = [] }) {
  return (
    <section className="mt-12">
      <SectionHeader title="Achievements" />
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {(items || []).map((achievement, index) => (
          <Container key={index} className="group hover:shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300">
            <div className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-[var(--royal-blue)] to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full bg-[var(--text-white)]" />
              </div>
              <p className="text-[var(--text-white)] font-semibold text-sm">{achievement}</p>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--royal-blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Container>
        ))}
      </div>
    </section>
  )
}
