import Card from '../common/Card'

export default function NewsCard({ title, source, tag }) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-lg bg-[#1A1A1A] ring-1 ring-[#1F2937]" />
        <div className="flex-1">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-[#9CA3AF]">{source}</div>
        </div>
        {tag && (
          <span className="text-[10px] px-2 py-1 rounded bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40">{tag}</span>
        )}
      </div>
    </Card>
  )}

