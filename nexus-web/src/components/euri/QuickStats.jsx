import Container from "../../shared/Container"

export default function EuriQuickStats({ stats = [] }) {
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {(stats || []).map((s, index) => (
        <Container key={s.label} className={`hover:shadow-[0_10px_32px_rgba(59,130,246,0.3)] transition-all duration-300 ${index === 1 ? 'transform hover:scale-105' : ''}`}>
          <div className="p-6">
            <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)]">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-[var(--text-light)]">{s.label}</div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--electric-blue)] to-transparent opacity-60" />
          </div>
        </Container>
      ))}
    </section>
  )
}
