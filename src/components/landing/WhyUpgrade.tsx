import { X, Heart } from 'lucide-react';

export default function WhyUpgrade() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-slate-950" data-reveal>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/5 via-transparent to-teal-500/5 pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center md:text-left">
          You started a business to{' '}
          <span className="text-teal-600 dark:text-teal-400">do what you love</span>
          <br />
          Not to wrestle with websites.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-center md:text-left max-w-2xl mx-auto md:mx-0 text-slate-600 dark:text-slate-300">
          Your website is your first impression — but building one shouldn't be a{' '}
          <span className="underline decoration-red-400/50 underline-offset-4">roadblock</span>{' '}
          that stops you from growing.
        </p>

        {/* Pain points */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <div className="rounded-xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-500/5 to-transparent p-6 shadow-md">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 shrink-0 mt-0.5 text-red-500" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Agencies charge $5,000+</h3>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              And take <strong>weeks or months</strong> to deliver. You just want a great website, not a second mortgage.
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-gradient-to-br from-amber-500/5 to-transparent p-6 shadow-md">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">DIY eats your time</h3>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Learning WordPress, Wix, or Squarespace is <strong>another full-time job</strong>. Most people give up halfway.
            </p>
          </div>
          <div className="rounded-xl border border-violet-200 dark:border-violet-900/40 bg-gradient-to-br from-violet-500/5 to-transparent p-6 shadow-md">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 shrink-0 mt-0.5 text-violet-500" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Templates look generic</h3>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Cookie-cutter sites that look like <strong>everyone else</strong>. And you still lose all your content starting over.
            </p>
          </div>
        </div>

        {/* Brand story solution */}
        <div className="mt-8 rounded-xl border border-teal-200 dark:border-teal-900/40 bg-gradient-to-tr from-teal-500/10 via-transparent to-violet-500/5 p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-3">
            <Heart className="h-6 w-6 shrink-0 mt-0.5 text-teal-500" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                We believe building websites should be{' '}
                <span className="text-teal-600 dark:text-teal-400">easy</span>
              </h3>
              <p className="mt-2 text-base sm:text-lg text-slate-700 dark:text-slate-300">
                With today's technology, there's no reason you should struggle with your website.
                ForgeFoxy exists so you can{' '}
                <span className="font-semibold text-violet-600 dark:text-violet-400">
                  focus on your business
                </span>
                {' '}— not fight with code, templates, or overpriced agencies.
              </p>
              <p className="mt-3 text-base sm:text-lg text-slate-700 dark:text-slate-300">
                Just tell us what you want. We handle the rest. <strong>In 2 hours.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
