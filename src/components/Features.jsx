import { Rocket, Star, Smartphone, Shield, Settings } from 'lucide-react';

function Feature({ icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-md shadow-rose-500/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{children}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-rose-600/10 to-transparent blur-2xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to launch</h2>
          <p className="mt-3 text-white/70">Fast tooling, modern patterns, and beautiful defaults out of the box.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Blazing-fast stack" icon={<Rocket size={18} />}>
            Vite + React for instant feedback, Tailwind for rapid styling, and a production-ready setup.
          </Feature>
          <Feature title="Immersive visuals" icon={<Star size={18} />}>
            The red-orange slanted tiles Spline scene brings a modern, abstract, tech-forward look.
          </Feature>
          <Feature title="Responsive by default" icon={<Smartphone size={18} />}>
            Thoughtful layouts adapt seamlessly from mobile to desktop for a consistent experience.
          </Feature>
          <Feature title="Secure and accessible" icon={<Shield size={18} />}>
            Crisp contrast, motion considerations, and best practices for more inclusive experiences.
          </Feature>
          <Feature title="Customizable" icon={<Settings size={18} />}>
            Tweak colors, content, or components with ease to match your brand and goals.
          </Feature>
        </div>
      </div>
    </section>
  );
}

export default Features;
