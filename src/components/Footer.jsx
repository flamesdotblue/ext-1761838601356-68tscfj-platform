function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} ModernTech. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a className="hover:text-white transition" href="#">Privacy</a>
          <a className="hover:text-white transition" href="#">Terms</a>
          <a className="hover:text-white transition" href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
