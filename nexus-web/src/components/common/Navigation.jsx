import { DEVELOPERS } from '../../hooks/useNavigation'

export default function Navigation({ active, onSelect }) {
  return (
    <nav className="flex flex-wrap gap-2">
      {DEVELOPERS.map((key, idx) => {
        const isActive = active === key
        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`px-4 py-2 rounded-lg text-sm transition border ${
              isActive
                ? 'text-white border-[#3B82F6] bg-gradient-to-r from-[#0D0D0D] via-[#2563EB]/30 to-[#06B6D4]/30 shadow-[0_0_25px_#06B6D4]/20 hover:shadow-[0_0_35px_#06B6D4]/30'
                : 'text-[#E5E7EB] border-[#1F2937] hover:border-[#2563EB]/60 hover:text-white hover:shadow-[0_0_20px_#06B6D4]/20 hover:bg-[#0B1220] active:scale-[0.98]'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {`Developer ${idx + 1}`}
          </button>
        )
      })}
    </nav>
  )
}

