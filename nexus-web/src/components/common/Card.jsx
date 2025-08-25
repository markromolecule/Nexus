export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-[#1F2937] bg-[#0B1220]/40 p-5 transition hover:border-[#2563EB]/60 hover:shadow-[0_0_45px_#06B6D4]/10 ${className}`}>
      {children}
    </div>
  )
}

