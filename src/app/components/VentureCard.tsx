interface VentureCardProps {
  name: string
  tagline: string
  description: string
  tags: string[]
  url?: string
  icon: string
  status: 'live' | 'active' | 'building'
  gradient: string
}

export default function VentureCard({
  name, tagline, description, tags, url, icon, status, gradient
}: VentureCardProps) {
  const statusConfig = {
    live: { label: 'Live', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
    active: { label: 'Active', color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' },
    building: { label: 'Building', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
  }

  const s = statusConfig[status]

  const cardContent = (
    <div
      className="group relative h-full rounded-2xl bg-zinc-900/60 border border-white/[0.06] p-6 flex flex-col gap-4
                 transition-all duration-300 hover:-translate-y-1 card-glow gradient-border cursor-default overflow-hidden"
    >
      {/* Top gradient accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${gradient} opacity-60`} />

      {/* Icon + Status */}
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${gradient} bg-opacity-10`}
          style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))` }}
        >
          {icon}
        </div>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${s.color} tracking-wider uppercase`}>
          {s.label}
        </span>
      </div>

      {/* Name + Tagline */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-300">
          {name}
        </h3>
        <p className="text-sm text-zinc-400 font-medium">{tagline}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-500 leading-relaxed flex-1">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-500 border border-white/[0.05]">
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow on hover if has url */}
      {url && (
        <div className="flex items-center gap-1 text-xs text-zinc-600 group-hover:text-orange-400 transition-colors mt-auto">
          <span>Visit</span>
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      )}
    </div>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="h-full">
        {cardContent}
      </a>
    )
  }

  return <div className="h-full">{cardContent}</div>
}
