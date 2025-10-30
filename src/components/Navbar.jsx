function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-500 to-rose-600" />
          <span className="font-semibold tracking-tight">ModernTech</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-white/80 hover:text-white transition">Sign in</a>
          <a href="#get-started" className="rounded-md bg-gradient-to-r from-orange-500 to-rose-600 px-3.5 py-2 text-sm font-medium shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
