import Spline from '@splinetool/react-spline';

const SPLINE_URL = 'https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode';

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Immersive hero">
      {/* Background / Spline cover */}
      <div className="absolute inset-0">
        {/* Fallback gradient behind the Spline for instant paint */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black pointer-events-none" />

        {/* Spline viewer as full-bleed cover (interactive) */}
        <div className="absolute inset-0">
          <Spline scene={SPLINE_URL} style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Vignette overlay for better text contrast (doesn't block interaction) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_60%,#0a0a0a_100%)]" />

        {/* Subtle radial glow to match red-orange theme (doesn't block interaction) */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[80vh] w-[80vw] rounded-full opacity-50 blur-[120px] bg-gradient-to-r from-orange-600/30 via-rose-600/25 to-fuchsia-600/20 pointer-events-none" />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 animate-pulse" />
            Live — Interactive Spline background
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Modern experiences for a digital future
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            Immerse your audience with an interactive, abstract tech aesthetic powered by Spline. Built with React, Vite, and Tailwind — optimized for speed and delight.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 text-sm font-medium shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
