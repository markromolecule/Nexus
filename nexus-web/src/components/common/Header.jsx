import { DEVELOPERS } from '../../hooks/useNavigation'

export default function Header({ active, onSelect, scrolled = false, theme = 'dark' }) {
  const isLight = theme === 'light'
  return (
    <div className="flex items-center gap-4 w-full">
      <div className={`h-10 w-10 rounded-lg ${isLight ? 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] shadow-[0_0_24px_rgba(59,130,246,0.35)]' : 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_0_30px_#06B6D4]/40'}`} />
      <div className={`text-xl font-semibold tracking-wide ${isLight ? 'text-[#0B1220]' : ''}`}>Nexus</div>
      <div className="ml-auto relative">
        <label className="sr-only">Select developer</label>
        <div className="group">
          <select
            value={active}
            onChange={(e) => onSelect(e.target.value)}
            className={`${isLight
              ? 'appearance-none bg-white/80 border border-[#E5E7EB] text-[#0F172A] hover:border-[#93C5FD]'
              : 'appearance-none bg-[#0B1220]/80 border border-[#1F2937] text-[#E5E7EB] hover:border-[#2563EB]/60'
            } rounded-xl pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 transition backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]`}
          >
            {DEVELOPERS.map((key, idx) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <div className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transition ${isLight ? 'text-[#475569] group-hover:text-[#0F172A]' : 'text-[#9CA3AF] group-hover:text-[#E5E7EB]'}`}>
            ▼
          </div>
        </div>
      </div>
    </div>
  )
}

