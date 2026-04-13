import Image from 'next/image';
import { Shield } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-14" data-reveal>
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-tr from-orange-500/10 via-violet-500/5 to-teal-500/10 p-8 sm:p-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/images/logo-head.png"
              alt="ForgeFoxy"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full shrink-0"
            />
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Ready to stop fighting with your website?
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Get back to doing what you love. Let ForgeFoxy handle the rest.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="mailto:hello@forgefoxy.com?subject=Website%20Transformation%20Inquiry"
                  className="inline-flex items-center justify-center h-12 min-w-[180px] px-7 text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-violet-600 to-teal-500 hover:from-orange-600 hover:via-violet-700 hover:to-teal-600 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all"
                >
                  Try Now
                </a>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <Shield className="h-3.5 w-3.5" />
                  Money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
