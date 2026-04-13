import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" data-reveal>
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-orange-500/10 via-violet-500/5 to-teal-500/10"
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
              Your dream website,{' '}
              <span className="relative inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">
                live in 2 hours
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
                </svg>
              </span>
            </h1>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg text-center md:text-left">
              Stop losing customers to an outdated website.
              We transform your site with a stunning new design — so you can{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400">focus on running your business</span>.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center h-12 px-7 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-violet-600 hover:from-orange-600 hover:to-violet-700 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all"
              >
                See How It Works
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center h-12 px-7 text-base font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              >
                View Pricing
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
              Not happy? <span className="font-semibold text-emerald-600 dark:text-emerald-400">Full refund, guaranteed.</span>
            </p>
          </div>

          <div className="relative min-h-48 sm:min-h-64 md:min-h-72 hidden md:block">
            <div
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-500/20 dark:bg-violet-500/15 blur-3xl pointer-events-none -z-10 animate-blob-slow"
              aria-hidden
            />
            <div
              className="absolute -left-8 -bottom-10 h-56 w-56 rounded-full bg-teal-500/20 dark:bg-teal-500/15 blur-3xl pointer-events-none -z-10 animate-blob-slow"
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
