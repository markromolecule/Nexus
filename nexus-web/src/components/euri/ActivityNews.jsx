import Container from "../../shared/Container"
import SectionHeader from "./SectionHeader"

export default function EuriActivityNews({ activity = [], news = [] }) {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <SectionHeader title="Recent Activity" />
          <div className="mt-6 space-y-3">
            {(activity || []).map((item, index) => (
              <Container key={index} className="hover:shadow-[0_8px_25px_rgba(59,130,246,0.2)] transition-all">
                <div className="p-4 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)] animate-pulse" />
                  <div className="flex-1">
                    <p className="text-[var(--text-light)] text-sm">{item.action}</p>
                    <p className="text-[var(--text-light)]/60 text-xs mt-1">{item.when}</p>
                  </div>
                </div>
              </Container>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Gaming News" />
          <div className="mt-6 space-y-3">
            {(news || []).map((item, index) => (
              <Container key={index} className="hover:shadow-[0_8px_25px_rgba(6,182,212,0.2)] transition-all cursor-pointer">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-[var(--text-white)] font-medium">{item.title}</p>
                    <p className="text-[var(--text-light)]/60 text-xs mt-1">{item.source}</p>
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-[var(--electric-blue)] to-[var(--cyan-glow)] rounded-full" />
                </div>
              </Container>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
