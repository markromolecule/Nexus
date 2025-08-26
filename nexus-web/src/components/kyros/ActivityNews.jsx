export default function KyrosActivityNews({ activity = [], news = [] }) {
  return (
    <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 p-6 rounded-2xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#22D3EE] to-[#60A5FA]"></div>
          <div className="text-lg font-bold">Recent Activity</div>
          <div className="ml-auto text-xs px-2 py-1 rounded-full border border-[#E5E7EB] bg-white/70 text-[#334155]">Live</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(activity || []).map((a) => (
            <div key={a.action} className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#93C5FD] hover:shadow-[0_8px_28px_rgba(59,130,246,0.10)] transition">
              <div className="text-sm text-[#0F172A] font-medium">{a.action}</div>
              <div className="mt-1 text-xs text-[#64748B]">{a.when}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#0EA5E9] to-[#3B82F6]"></div>
          <div className="text-lg font-bold">News</div>
          <div className="ml-auto text-xs px-2 py-1 rounded-full border border-[#E5E7EB] bg-white/70 text-[#334155]">Latest</div>
        </div>
        <div className="space-y-3">
          {(news || []).map((n) => (
            <div key={n.title} className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#93C5FD] hover:shadow-[0_8px_28px_rgba(2,132,199,0.10)] transition">
              <div className="text-sm font-semibold text-[#0F172A]">{n.title}</div>
              <div className="mt-1 text-xs text-[#64748B]">{n.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


