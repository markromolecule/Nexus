export default function KyrosQuickStats({ stats = [] }) {
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {(stats || []).map((s) => (
        <div key={s.label} className="p-6 rounded-2xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl hover:shadow-[0_10px_32px_rgba(2,132,199,0.10)] hover:border-[#BAE6FD] transition">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
            {s.value}
          </div>
          <div className="mt-1 text-sm text-[#475569]">{s.label}</div>
        </div>
      ))}
    </section>
  )
}


