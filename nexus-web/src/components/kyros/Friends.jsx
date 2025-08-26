import SectionHeader from './SectionHeader'

export default function KyrosFriends({ friends = [] }) {
  return (
    <section className="mt-10">
      <SectionHeader label="Friends" badge={`${friends.length || 0} online`} accent="from-[#10B981] to-[#06B6D4]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {(friends || []).map((f) => (
          <div key={f.id} className="p-4 rounded-xl border border-[#E5E7EB] bg-white/80 backdrop-blur-xl flex items-center gap-3">
            {f.avatar ? (
              <img src={f.avatar} alt={f.name} className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white text-xs font-bold flex items-center justify-center">
                {f.name?.[0] || '?'}
              </div>
            )}
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#0F172A]">{f.name}</div>
              <div className="text-xs text-[#64748B]">{f.status}</div>
            </div>
            <button className="text-xs px-3 py-1 rounded-lg border border-[#E5E7EB] hover:border-[#93C5FD]">Invite</button>
          </div>
        ))}
      </div>
    </section>
  )
}


