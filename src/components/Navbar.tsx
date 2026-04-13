import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

import { useState } from 'react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2.5" aria-label="ForgeFoxy home">
              <Image
                src="/images/logo-head.png"
                alt="ForgeFoxy logo"
                width={120}
                height={120}
                priority
                className="h-10 w-10 rounded-full"
              />
              <span className="font-heading text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">ForgeFoxy</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#how-it-works"
              className="text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
            >
              How It Works
            </a>
            <a
              href="#sneak-peek"
              className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
            >
              Sneak Peek
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
            >
              FAQ
            </a>
            <ThemeToggle />
            <a
              href="#pricing"
              className="inline-flex items-center justify-center h-9 px-5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-violet-600 hover:from-orange-600 hover:to-violet-700 rounded-lg transition-colors shadow-sm"
            >
              Try Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 py-4 space-y-3">
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
            >
              How It Works
            </a>
            <a
              href="#sneak-peek"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
            >
              Sneak Peek
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center h-9 px-5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-violet-600 hover:from-orange-600 hover:to-violet-700 rounded-lg transition-colors shadow-sm"
            >
              Try Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
