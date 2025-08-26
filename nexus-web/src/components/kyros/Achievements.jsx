import SectionHeader from './SectionHeader'

export default function KyrosAchievements({ items = [] }) {
  return (
    <section className="mt-10">
      <SectionHeader label="Achievements" badge={`${items.length || 0}`} accent="from-[#F59E0B] to-[#EF4444]" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(items || []).map((a) => (
          <div key={a} className="px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl text-sm font-semibold text-[#0F172A]">
            {a}
          </div>
        ))}
      </div>
    </section>
  )
}


