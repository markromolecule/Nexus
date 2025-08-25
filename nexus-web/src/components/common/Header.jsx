import { DEVELOPERS } from '../../hooks/useNavigation'

export default function Header({ active, onSelect, scrolled = false }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_0_30px_#06B6D4]/40" />
      <div className="text-xl font-semibold tracking-wide">Nexus</div>
      <div className="ml-auto relative">
        <label className="sr-only">Select developer</label>
        <div className="group">
          <select
            value={active}
            onChange={(e) => onSelect(e.target.value)}
            className="appearance-none bg-[#0B1220]/80 border border-[#1F2937] rounded-xl pl-4 pr-10 py-2 text-sm text-[#E5E7EB] hover:border-[#2563EB]/60 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/30 transition backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            {DEVELOPERS.map((key, idx) => (
              <option key={key} value={key}>
                {key === 'Joseph' ? 'Joseph' : key === 'Jom' ? 'Jom' : `Developer ${idx + 1}`}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-hover:text-[#E5E7EB] transition">
            ▼
          </div>
        </div>
      </div>
    </div>
  )
}

