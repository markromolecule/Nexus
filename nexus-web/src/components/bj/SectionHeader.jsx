export default function BjSectionHeader({ title, subtitle }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-[var(--text-white)]">{title}</h2>
        {subtitle && <p className="text-[var(--text-light)] mt-1">{subtitle}</p>}
      </div>
      <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--royal-blue)] to-purple-500" />
    </div>
  )
}
