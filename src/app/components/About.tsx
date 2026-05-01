const stats = [
  { value: '6+', label: 'Active Ventures' },
  { value: 'NJ', label: 'Based In' },
  { value: '∞', label: 'Ideas In Progress' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Divider */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-xs text-orange-400 tracking-[0.2em] uppercase font-medium mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-snug">
            Building things that{' '}
            <span className="gradient-text font-semibold">matter</span>
          </h2>
          <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
            <p>
              Vocally Yours LLC is a New Jersey-based creative holding company operating at the
              intersection of technology, wellness, and artistic expression — building independent
              ventures that each solve a distinct problem or serve a distinct audience.
            </p>
            <p>
              From AI-powered platforms and event discovery apps to interactive fiction, wellness brands,
              and neurologically-informed music composition — every venture under this umbrella is built
              with intention, craft, and a commitment to doing things differently.
            </p>
            <p>
              We believe the best work happens when creative vision meets technical rigor. That's the
              thread running through everything we build.
            </p>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-zinc-900/60 border border-white/[0.06] p-6 gradient-border"
            >
              <div className="text-3xl font-light gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-zinc-500 tracking-wide">{s.label}</div>
            </div>
          ))}

          {/* Values card */}
          <div className="col-span-3 rounded-2xl bg-zinc-900/60 border border-white/[0.06] p-6 gradient-border">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Core Values</p>
            <div className="flex flex-wrap gap-2">
              {['Intentional', 'Creative', 'Technical', 'Independent', 'Human-first'].map((v) => (
                <span key={v} className="text-xs px-3 py-1 rounded-full border border-white/[0.08] text-zinc-400 bg-white/[0.03]">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
