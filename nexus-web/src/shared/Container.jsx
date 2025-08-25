export default function Container({ children, className = '' }) {
  return (
    <div className={`relative rounded-xl border border-[#1F2937] bg-[#0d0d0d]/60 backdrop-blur-sm transition hover:border-[#2563EB]/60 hover:shadow-[0_0_45px_#06B6D4]/10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0B1220]/20 to-[#0B1220]/40" />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

