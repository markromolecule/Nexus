import SectionHeader from './SectionHeader'

export default function KyrosClips({ clips = [] }) {
  return (
    <section className="mt-10">
      <SectionHeader label="Recent Clips" badge="Auto-saved" accent="from-[#A78BFA] to-[#6366F1]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(clips || []).map((c) => (
          <div key={c.id} className="rounded-2xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl overflow-hidden">
            <div className="aspect-[16/9] bg-gradient-to-br from-[#EEF2FF] via-white to-[#E9D5FF]" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#0F172A]">{c.title}</div>
                <div className="text-xs text-[#64748B]">{c.duration}</div>
              </div>
              <button className="text-xs px-3 py-1 rounded-lg border border-[#E5E7EB] hover:border-[#93C5FD]">Play</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


