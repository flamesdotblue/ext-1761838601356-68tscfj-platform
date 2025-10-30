function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Ready to build something modern?</h3>
              <p className="mt-2 text-white/75 text-sm max-w-xl">Start with a solid foundation and an immersive hero to capture attention from the first second.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">Preview</a>
              <a href="#" className="rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 text-sm font-medium shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition">Deploy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
