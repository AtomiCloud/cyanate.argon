import Image from 'next/image';
import { Zap, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" data-reveal>
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-6 sm:px-8 max-w-5xl pt-14 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <Image
              src="/images/mascot.png"
              alt="ForgeFoxy mascot"
              width={480}
              height={480}
              priority
              className="w-full max-w-[320px] h-auto mx-auto mb-6 md:hidden"
            />
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white text-center md:text-left">
              Your website deserves{' '}
              <span className="relative inline-block whitespace-nowrap">
                a glow-up
                <svg
                  className="absolute left-0 -bottom-1 w-full h-3 text-orange-500/60 animate-underline"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 4 L200 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                  />
                  <path
                    d="M25 9 L165 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="140"
                    strokeDashoffset="140"
                    className="opacity-0 animate-underline-fade"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg text-center md:text-left">
              We take your existing website, transform it with a modern design of your choice, and host it for you.
              All for a flat fee.
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg text-center md:text-left">
              Powered by AI. Delivered by professionals.
            </p>

            {/* Feature pills */}
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-200 dark:border-orange-900/40 text-xs font-medium text-orange-700 dark:text-orange-300">
                <Zap className="h-3.5 w-3.5" />
                AI-Powered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900/40 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <Shield className="h-3.5 w-3.5" />
                Hosting Available
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-200 dark:border-amber-900/40 text-xs font-medium text-amber-700 dark:text-amber-300">
                <Globe className="h-3.5 w-3.5" />
                CMS Included
              </span>
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center h-12 min-w-[220px] px-7 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all"
              >
                Get Started — $500
              </a>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
              <a
                href="#how-it-works"
                className="inline-flex items-center text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                See how it works →
              </a>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-200 dark:border-amber-900/40 text-xs font-medium text-amber-700 dark:text-amber-300 cursor-default"
              >
                <Zap className="h-3.5 w-3.5" />
                Sneak Peek — Coming Soon
              </span>
            </div>
          </div>

          <div className="relative min-h-48 sm:min-h-64 md:min-h-72 hidden md:block">
            <div
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-orange-500/20 dark:bg-orange-500/15 blur-3xl pointer-events-none -z-10 animate-blob-slow"
              aria-hidden
            />
            <div
              className="absolute -left-8 -bottom-10 h-56 w-56 rounded-full bg-amber-500/20 dark:bg-amber-500/15 blur-3xl pointer-events-none -z-10 animate-blob-slow"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/mascot.png"
                alt="ForgeFoxy mascot"
                width={960}
                height={640}
                priority
                className="h-auto w-full max-w-[520px] object-contain drop-shadow-xl animate-float-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
