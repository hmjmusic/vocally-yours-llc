export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative py-16 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-sm font-semibold mb-2">
              <span className="gradient-text">Vocally Yours</span>
              <span className="text-zinc-600 ml-1 font-light">LLC</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-xs">
              A creative holding company building at the intersection of technology, wellness, and art.
            </p>
          </div>

          {/* Ventures links */}
          <div>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Ventures</p>
            <div className="space-y-2">
              {[
                { name: 'Keystir', url: 'https://keystir.com' },
                { name: 'Snapdolphin', url: 'https://snapdolphin.com' },
                { name: 'My Fate My Love', url: null },
                { name: 'Lana Cove', url: null },
                { name: 'H. M. Scheerer', url: null },
              ].map((v) =>
                v.url ? (
                  <a
                    key={v.name}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    {v.name} ↗
                  </a>
                ) : (
                  <span key={v.name} className="block text-xs text-zinc-600">{v.name}</span>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Contact</p>
            <a
              href="mailto:hmjmusic@icloud.com"
              className="text-xs text-zinc-500 hover:text-orange-400 transition-colors"
            >
              hmjmusic@icloud.com
            </a>
            <p className="text-xs text-zinc-600 mt-2">New Jersey, USA</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-zinc-700">
            © {year} Vocally Yours LLC. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-700">
            Built with <span className="text-orange-500/60">♥</span> in New Jersey
          </p>
        </div>
      </div>
    </footer>
  )
}
