export default function KyrosHero({ hero }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.6]" style={{
          backgroundImage:
            'linear-gradient(to right, rgba(3,105,161,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(3,105,161,0.06) 1px, transparent 1px)'
          , backgroundSize: '28px 28px' }} />
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
             style={{ background:
               'radial-gradient(closest-side, rgba(14,165,233,0.25), rgba(59,130,246,0.15), transparent 70%)' }} />
      </div>

      <div className="relative px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E7EB] bg-white/70 text-[#0F172A] text-xs font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#2563EB]"></span>
              {hero.badge}
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              {hero.title}
            </h1>
            <p className="mt-4 text-[#334155] max-w-xl">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#06B6D4] to-[#2563EB] shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:brightness-110 hover:shadow-[0_12px_40px_rgba(6,182,212,0.35)] active:scale-[0.98]">
                {hero.primaryCta}
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold text-[#0F172A] bg-white border border-[#E5E7EB] hover:border-[#93C5FD] hover:shadow-[0_6px_28px_rgba(2,132,199,0.12)] active:scale-[0.98]">
                {hero.secondaryCta}
              </button>
            </div>
          </div>

          <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl border border-[#E5E7EB] bg-white/70 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE] via-white to-[#DBEAFE]" />
            <div className="relative h-full w-full grid grid-cols-3 gap-3 p-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-xl border border-[#E5E7EB] bg-white/80 backdrop-blur-md shadow-sm" />
              ))}
              <div className="col-span-3 rounded-xl border border-[#93C5FD] bg-gradient-to-r from-white to-[#EFF6FF] shadow-[0_10px_30px_rgba(59,130,246,0.15)]" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}


