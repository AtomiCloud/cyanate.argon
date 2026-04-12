import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-14" data-reveal>
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 p-8 sm:p-10 text-center md:text-left">
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
                Ready to transform your website?
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Get a modern, professional website for just $500. No hassle, no hidden fees.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:hello@forgefoxy.com?subject=Website%20Transformation%20Inquiry"
                  className="inline-flex items-center justify-center h-12 min-w-[220px] px-7 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
