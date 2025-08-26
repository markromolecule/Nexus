import Container from "../../shared/Container"

export default function EuriHero({ hero }) {
  return (
    <section className="relative overflow-hidden">
      <Container className="bg-gradient-to-br from-[var(--bg-black)] via-[#1A1A1A] to-[var(--bg-black)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.4]" style={{
            backgroundImage:
              'linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px)'
            , backgroundSize: '32px 32px' }} />
          <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-60"
               style={{ background:
                 'radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(6,182,212,0.25), transparent 70%)' }} />
          <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full blur-2xl opacity-40"
               style={{ background:
                 'radial-gradient(closest-side, rgba(6,182,212,0.3), rgba(59,130,246,0.2), transparent 70%)' }} />
        </div>

        <div className="relative px-6 py-12 md:px-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--electric-blue)]/30 bg-[var(--electric-blue)]/10 text-[var(--text-light)] text-xs font-semibold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)] animate-pulse"></span>
                {hero.badge}
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text-white)]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)]">
                  {hero.title}
                </span>
              </h1>
              <p className="mt-4 text-[var(--text-light)] max-w-xl">
                {hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-6 py-3 rounded-xl text-[var(--text-white)] font-semibold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)] shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:brightness-110 hover:shadow-[0_12px_40px_rgba(6,182,212,0.5)] active:scale-[0.98] transition-all">
                  {hero.primaryCta}
                </button>
                <button className="px-6 py-3 rounded-xl font-semibold text-[var(--text-light)] bg-[var(--dark-gray)] border border-[var(--electric-blue)]/30 hover:border-[var(--electric-blue)] hover:shadow-[0_6px_28px_rgba(59,130,246,0.2)] active:scale-[0.98] transition-all">
                  {hero.secondaryCta}
                </button>
              </div>
            </div>

            <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl border border-[var(--electric-blue)]/30 bg-gradient-to-br from-[var(--dark-gray)] to-[var(--bg-black)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-blue)]/10 via-transparent to-[var(--cyan-glow)]/10" />
              <div className="relative h-full w-full grid grid-cols-3 gap-3 p-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl border border-[var(--electric-blue)]/20 bg-[var(--dark-gray)]/60 backdrop-blur-md shadow-sm hover:border-[var(--electric-blue)]/40 transition-colors" />
                ))}
                <div className="col-span-3 rounded-xl border border-[var(--electric-blue)] bg-gradient-to-r from-[var(--electric-blue)]/20 to-[var(--cyan-glow)]/20 shadow-[0_10px_30px_rgba(59,130,246,0.3)]" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-black)]/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
