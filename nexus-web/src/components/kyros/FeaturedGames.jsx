export default function KyrosFeaturedGames({ games = [] }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#06B6D4] to-[#2563EB]"></div>
        <h2 className="text-xl md:text-2xl font-bold">Featured Games</h2>
        <div className="ml-auto text-xs px-2 py-1 rounded-full border border-[#E5E7EB] bg-white/70 text-[#334155]">Curated</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {(games || []).map((g) => (
          <div key={g.id} className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl">
            <div className="aspect-[16/9] bg-gradient-to-br from-[#F0FDFA] via-[#EFF6FF] to-white overflow-hidden">
              {g.image ? (
                <img src={g.image} alt={g.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              ) : null}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{g.title}</div>
                {g.tag && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">{g.tag}</span>
                )}
              </div>
              <div className="mt-1 text-sm text-[#64748B]">Futuristic action • Next‑gen visuals</div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[#93C5FD]/20 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  )
}


