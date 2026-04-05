import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-3xl font-bold tracking-tighter text-primary-red dark:text-primary-gold">
                Suraj<span className="font-light text-foreground">Garden</span>
              </span>
            </Link>
            <p className="text-foreground/70 font-light max-w-md mb-8">
              Ujjain&apos;s most premium outdoor venue, offering unparalleled elegance and world-class services for your most cherished celebrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground/70 hover:text-primary-gold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <span className="font-bold text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground/70 hover:text-primary-gold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <span className="font-bold text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground/70 hover:text-primary-gold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Our Services</Link></li>
              <li><Link href="#gallery" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Gallery</Link></li>
              <li><Link href="#pricing" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Packages</Link></li>
              <li><Link href="#contact" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary-gold font-light transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 font-light">
          <p>&copy; {new Date().getFullYear()} Suraj Garden. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
