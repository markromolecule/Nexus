import Container from "../../shared/Container"

export default function BjHero({ hero }) {
  return (
    <section className="relative overflow-hidden">
      <Container className="bg-gradient-to-br from-[var(--bg-black)] via-[#1A1A2E] to-[var(--bg-black)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.3]" style={{
            backgroundImage:
              'linear-gradient(to right, rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.12) 1px, transparent 1px)'
            , backgroundSize: '40px 40px' }} />
          <div className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
               style={{ background:
                 'radial-gradient(closest-side, rgba(37,99,235,0.4), rgba(79,70,229,0.25), transparent 70%)' }} />
          <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-2xl opacity-35"
               style={{ background:
                 'radial-gradient(closest-side, rgba(79,70,229,0.35), rgba(37,99,235,0.2), transparent 70%)' }} />
        </div>

        <div className="relative px-6 py-12 md:px-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--royal-blue)]/40 bg-[var(--royal-blue)]/15 text-[var(--text-light)] text-xs font-semibold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--royal-blue)] to-purple-500 animate-pulse"></span>
                {hero.badge}
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text-white)]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--royal-blue)] to-purple-500">
                  {hero.title}
                </span>
              </h1>
              <p className="mt-4 text-[var(--text-light)] max-w-xl">
                {hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-6 py-3 rounded-xl text-[var(--text-white)] font-semibold bg-gradient-to-r from-[var(--royal-blue)] to-purple-600 shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:brightness-110 hover:shadow-[0_12px_40px_rgba(79,70,229,0.5)] active:scale-[0.98] transition-all">
                  {hero.primaryCta}
                </button>
                <button className="px-6 py-3 rounded-xl font-semibold text-[var(--text-light)] bg-[var(--dark-gray)] border border-[var(--royal-blue)]/40 hover:border-[var(--royal-blue)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.25)] active:scale-[0.98] transition-all">
                  {hero.secondaryCta}
                </button>
              </div>
            </div>

            <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl border border-[var(--royal-blue)]/40 bg-gradient-to-br from-[var(--dark-gray)] to-[var(--bg-black)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--royal-blue)]/15 via-transparent to-purple-500/10" />
              <div className="relative h-full w-full grid grid-cols-3 gap-3 p-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl border border-[var(--royal-blue)]/25 bg-[var(--dark-gray)]/70 backdrop-blur-md shadow-sm hover:border-[var(--royal-blue)]/50 transition-colors" />
                ))}
                <div className="col-span-3 rounded-xl border border-[var(--royal-blue)] bg-gradient-to-r from-[var(--royal-blue)]/25 to-purple-500/20 shadow-[0_10px_30px_rgba(37,99,235,0.35)]" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-black)]/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
