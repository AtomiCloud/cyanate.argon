import { Check, Shield, Zap, Clock } from 'lucide-react';

const valueItems = [
  { text: 'Full website content extraction', color: 'text-orange-500' },
  { text: 'Custom design based on your reference', color: 'text-violet-500' },
  { text: 'Mobile-responsive layout', color: 'text-teal-500' },
  { text: 'SEO-optimized pages', color: 'text-emerald-500' },
  { text: 'SSL certificate included', color: 'text-orange-500' },
  { text: 'Built-in CMS for easy updates', color: 'text-violet-500' },
  { text: 'Delivered in 2 hours', color: 'text-teal-500' },
  { text: 'Full refund if not satisfied', color: 'text-emerald-500' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white dark:bg-slate-950" data-reveal>
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center">
          Everything you need.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">One flat price.</span>
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          No hidden fees. No surprise invoices. Just a beautiful website.
        </p>

        <div className="mt-10 max-w-2xl mx-auto">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <Clock className="h-4 w-4 text-teal-500" /> 2-hour delivery
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <Shield className="h-4 w-4 text-emerald-500" /> Money-back guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <Zap className="h-4 w-4 text-violet-500" /> AI-powered
            </span>
          </div>

          <div className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-orange-500/5 via-violet-500/5 to-teal-500/5 p-8 shadow-xl relative overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-violet-500 to-teal-500 opacity-10 pointer-events-none" aria-hidden />

            <div className="relative text-center">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Website Transformation</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">$500</span>
                <span className="text-lg text-slate-500 dark:text-slate-400">USD</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">One-time payment. Hosting billed monthly.</p>
            </div>

            <ul className="relative mt-8 grid sm:grid-cols-2 gap-3">
              {valueItems.map(item => (
                <li key={item.text} className="flex items-start gap-2">
                  <Check className={`h-5 w-5 shrink-0 mt-0.5 ${item.color}`} />
                  <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee callout */}
            <div className="relative mt-8 rounded-lg bg-emerald-500/10 border border-emerald-200 dark:border-emerald-800/40 px-4 py-3 flex items-start gap-3">
              <Shield className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">100% Money-Back Guarantee</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                  Not happy with the result? Full refund. No questions asked.
                </p>
              </div>
            </div>

            <div className="relative mt-8 text-center">
              <a
                href="mailto:hello@forgefoxy.com?subject=Website%20Transformation%20Inquiry"
                className="inline-flex items-center justify-center w-full h-12 px-7 text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-violet-600 to-teal-500 hover:from-orange-600 hover:via-violet-700 hover:to-teal-600 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all"
              >
                Try Now
              </a>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Get your new website today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
