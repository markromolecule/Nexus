import Container from "../../shared/Container"
import SectionHeader from "./SectionHeader"

export default function BjClips({ clips = [] }) {
  return (
    <section className="mt-12">
      <SectionHeader title="Gaming Clips" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {(clips || []).map((clip) => (
          <Container key={clip.id} className="group hover:shadow-[0_15px_45px_rgba(37,99,235,0.3)] transition-all cursor-pointer">
            <div className="p-6">
              <div className="relative w-full h-32 mb-4 rounded-lg bg-gradient-to-br from-[var(--royal-blue)]/25 to-purple-500/20 flex items-center justify-center group-hover:from-[var(--royal-blue)]/35 group-hover:to-purple-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--text-white)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[8px] border-l-[var(--royal-blue)] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                </div>
              </div>
              <h3 className="text-[var(--text-white)] font-semibold">{clip.title}</h3>
              <p className="text-[var(--text-light)]/60 text-sm mt-1">{clip.duration}</p>
            </div>
            <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-[var(--royal-blue)]/40 rounded-xl transition-colors" />
          </Container>
        ))}
      </div>
    </section>
  )
}
