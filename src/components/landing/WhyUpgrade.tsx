import { X, Check } from 'lucide-react';

export default function WhyUpgrade() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-slate-950" data-reveal>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center md:text-left">
          Why upgrade your website?
        </h2>
        <p className="mt-2 text-base sm:text-lg text-center md:text-left max-w-2xl mx-auto md:mx-0 text-slate-600 dark:text-slate-300">
          Your website is your first impression. An{' '}
          <span className="underline decoration-red-400/50 underline-offset-4">outdated design</span> costs you
          customers.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <div className="rounded-xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-500/5 to-transparent p-6 shadow-md">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 shrink-0 mt-0.5 text-red-500" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Outdated design</h3>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Visitors leave in seconds</strong> if your site looks like it was built a decade ago. First
              impressions are everything.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-500/5 to-transparent p-6 shadow-md">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 shrink-0 mt-0.5 text-red-500" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">DIY rebuilds</h3>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Expensive and time-consuming.</strong> Hiring a developer or agency can cost thousands and take
              months.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 dark:border-red-900/40 bg-gradient-to-br from-red-500/5 to-transparent p-6 shadow-md">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 shrink-0 mt-0.5 text-red-500" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Template sites</h3>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Generic templates look like <strong>everyone else</strong>. You lose your content and have to start from
              scratch.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-orange-200 dark:border-orange-900/40 bg-gradient-to-tr from-orange-500/10 to-transparent p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-2">
            <Check className="h-6 w-6 shrink-0 mt-0.5 text-orange-500" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The ForgeFoxy way</h3>
              <p className="mt-2 text-base sm:text-lg text-slate-700 dark:text-slate-300">
                <span className="px-1 rounded bg-orange-400/20 dark:bg-orange-400/25">Keep your content</span> +{' '}
                <span className="px-1 rounded bg-orange-400/20 dark:bg-orange-400/25">Choose any design</span> +{' '}
                <span className="px-1 rounded bg-orange-400/20 dark:bg-orange-400/25">We handle everything</span> +{' '}
                <span className="px-1 rounded bg-orange-400/20 dark:bg-orange-400/25">Hosted for you</span> = your
                dream website.
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-orange-500 dark:text-orange-300" />
                  <span>AI-powered transformation keeps all your existing content intact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-orange-500 dark:text-orange-300" />
                  <span>Pick any reference website — we match its look and feel to your brand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-orange-500 dark:text-orange-300" />
                  <span>Flat $500 fee. No hidden costs, no monthly surprises.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
