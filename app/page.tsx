import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-background">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Watermark Flag */}


      {/* Navbar - MOVED TO LAYOUT */}

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-32 md:mt-32 z-10 w-full max-w-7xl mx-auto">
        <div className="max-w-5xl space-y-6 py-10">

          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-primary-300 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            ✨ Australia's #1 Custom Caravan Platform
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            DREAM IT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
              BUILD IT.
            </span><br />
            TOW IT.
          </h1>


          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/builder" className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl border-2 border-white hover:bg-primary-hover transition shadow-[0_0_30px_rgba(234,179,8,0.3)] transform hover:scale-105 duration-200">
              Start Your Build
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="bg-surface/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center md:items-start md:text-left hover:border-primary/30 transition-colors">
            <div className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">Australian</div>
            <div className="text-lg font-bold text-white">100% Australian Owned</div>
            <div className="text-sm text-muted">Proudly run by real caravan owners and travellers.</div>
          </div>

          <div className="bg-surface/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center md:items-start md:text-left hover:border-primary/30 transition-colors">
            <div className="text-4xl mb-4">🛡️</div>
            <div className="text-lg font-bold text-white">Safe & Secure</div>
            <div className="text-sm text-muted">A trusted platform connecting you directly with verified dealers and real people.</div>
          </div>

          <div className="bg-surface/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center md:items-start md:text-left hover:border-primary/30 transition-colors">
            <div className="text-4xl mb-4">⏱️</div>
            <div className="text-lg font-bold text-white">Save Time</div>
            <div className="text-sm text-muted">A time saver for the overwhelmed caravan hunter. One request, multiple quotes.</div>
          </div>
        </div>
      </main>



      <footer className="w-full py-12 px-6 border-t border-white/5 bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-left">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-white tracking-tight">
              CARAVAN<span className="text-primary">MATCH</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              The premium reverse marketplace for custom caravans in Australia. Design your dream van and let dealers compete for your business.
            </p>
            <p className="text-xs text-muted/60 leading-relaxed italic">
              100% Australian Owned & Operated 🇦🇺
            </p>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Popular Resources</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/guides/towing-weights" className="hover:text-primary transition">Towing Weight Guide ⚖️</Link></li>
              <li><Link href="/resources/towing-calculator" className="hover:text-primary transition">Free Towing Calculator 🧮</Link></li>
              <li><Link href="/guides" className="hover:text-primary transition">Expert Buying Guides 📖</Link></li>
              <li><Link href="/used-caravans" className="hover:text-primary transition">Marketplace Inventory 🚐</Link></li>
            </ul>
          </div>

          {/* Regional Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Shop by Region</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/buy-caravans-nsw" className="hover:text-primary transition">Caravans for Sale NSW 🏖️</Link></li>
              <li><Link href="/buy-caravans-qld" className="hover:text-primary transition">Caravans for Sale QLD ☀️</Link></li>
              <li><Link href="/used-caravans" className="hover:text-primary transition">Victoria Marketplace (Coming Soon)</Link></li>
              <li><Link href="/used-caravans" className="hover:text-primary transition">West Australia Marketplace (Coming Soon)</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-xs">
          <p>© 2025 Caravan Match. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/legal/disclosure" className="hover:text-white transition underline">Legal Disclosure</Link>
            <Link href="/legal/terms" className="hover:text-white transition underline">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition underline">Privacy</Link>
            <Link href="/feedback" className="hover:text-white transition underline">Feedback</Link>
            <Link href="/admin/login" className="hover:text-white transition underline opacity-20">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
