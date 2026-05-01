export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-orange-500/10 via-pink-500/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          New Jersey, USA
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 leading-[1.05]">
          Vocally{' '}
          <span className="gradient-text font-semibold">Yours</span>
          <br />
          <span className="text-zinc-500 text-4xl md:text-5xl lg:text-6xl font-extralight">LLC</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-4">
          A creative holding company building at the intersection of{' '}
          <span className="text-zinc-200">technology</span>,{' '}
          <span className="text-zinc-200">wellness</span>, and{' '}
          <span className="text-zinc-200">art</span>.
        </p>

        <p className="text-sm text-zinc-600 mb-12 tracking-wide">
          Founded by <span className="text-zinc-400">Haley Scheerer</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ventures"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
          >
            Explore Ventures
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}
