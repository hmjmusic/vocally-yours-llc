import VentureCard from './VentureCard'

const ventures = [
  {
    name: 'Keystir',
    tagline: 'AI Agent Platform',
    description: 'A next-generation platform for building, deploying, and managing AI-powered agents — built for teams who move fast.',
    tags: ['AI', 'SaaS', 'Productivity', 'Agents'],
    url: 'https://keystir.com',
    icon: '⚡',
    status: 'live' as const,
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    name: 'Snapdolphin',
    tagline: 'Event Discovery',
    description: 'The go-to platform for discovering local events across New Jersey. Smart search, venue discovery, and curated seasonal content.',
    tags: ['Events', 'Local', 'Discovery', 'New Jersey'],
    url: 'https://snapdolphin.com',
    icon: '🐬',
    status: 'live' as const,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'My Fate My Love',
    tagline: 'Interactive Romance Fiction',
    description: 'An immersive storytelling experience where romance meets interactivity. Character-driven narratives with an in-world phone interface.',
    tags: ['Fiction', 'Interactive', 'Romance', 'Storytelling'],
    icon: '🌊',
    status: 'active' as const,
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Lana Cove',
    tagline: 'Wellness & Lifestyle Brand',
    description: 'A coastal-inspired wellness brand offering curated lifestyle guides, meal planning resources, and daily ritual frameworks.',
    tags: ['Wellness', 'Lifestyle', 'Digital Products'],
    icon: '🌿',
    status: 'active' as const,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'H. M. Scheerer',
    tagline: 'Music Composition',
    description: 'Neurologically-informed music composition for sync licensing, streaming, and therapeutic use — spanning lo-fi, ambient, and sensory-safe series.',
    tags: ['Music', 'Sync Licensing', 'Ambient', 'Therapeutic'],
    icon: '🎵',
    status: 'building' as const,
    gradient: 'from-orange-500 to-amber-500',
  },
]

export default function Ventures() {
  return (
    <section id="ventures" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs text-orange-400 tracking-[0.2em] uppercase font-medium mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Our <span className="gradient-text font-semibold">Ventures</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm leading-relaxed">
            A collection of independent projects spanning technology, creative media, wellness, and music — each built with purpose.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ventures.map((v) => (
            <VentureCard key={v.name} {...v} />
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-10 text-[11px] text-zinc-600">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Live
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />Active
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />Building
          </div>
        </div>
      </div>
    </section>
  )
}
