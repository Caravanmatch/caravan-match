import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-background">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Watermark Flag */}
      <div className="fixed bottom-[-60px] left-[-20px] z-0 opacity-30 pointer-events-none select-none grayscale-0 contrast-125 animate-in fade-in duration-1000">
        <span className="text-[250px] leading-none">🇦🇺</span>
      </div>

      {/* Navbar - MOVED TO LAYOUT */}

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-48 md:mt-24 z-10 w-full max-w-7xl mx-auto">
        <div className="max-w-5xl space-y-8 py-20">

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
            <Link href="/builder" className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary-hover transition shadow-[0_0_30px_rgba(234,179,8,0.3)] transform hover:scale-105 duration-200">
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



      {/* Footer */}
      <footer className="w-full py-8 text-center text-muted text-sm border-t border-white/5 bg-surface/50 backdrop-blur-sm flex flex-col gap-2">
        <p>© 2025 Caravan Match. 100% Australian Owned and Operated. 🇦🇺</p>
        <div className="flex justify-center gap-4">
          <Link href="/legal/disclosure" className="hover:text-white transition underline">Legal Disclosure & Risk Warning</Link>
        </div>
        <div className="flex justify-center gap-4 text-xs text-muted/60">
          <Link href="/legal/terms" className="hover:text-white transition underline">Terms of Service</Link>
          <Link href="/legal/privacy" className="hover:text-white transition underline">Privacy Policy</Link>
          <Link href="/feedback" className="hover:text-white transition underline">Feedback</Link>
          <Link href="/admin/login" className="hover:text-white transition underline opacity-20 hover:opacity-100">Admin</Link>
        </div>
      </footer>
    </div>
  );
}
