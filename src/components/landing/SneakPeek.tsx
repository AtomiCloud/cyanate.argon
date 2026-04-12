import { useState } from 'react';
import Image from 'next/image';
import { Wand2, Globe, Palette, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Step = 'form' | 'loading' | 'result';

interface FormData {
  websiteUrl: string;
  referenceUrl: string;
  designStyle: string;
  layoutFocus: string;
}

interface SneakPeekResult {
  previewUrl?: string;
  message?: string;
  screenshot?: string;
}

const designStyles = [
  {
    value: 'minimalist',
    label: 'Minimalist',
    desc: 'Clean lines, lots of whitespace, simple typography',
    emoji: '🪶',
  },
  {
    value: 'bold',
    label: 'Bold & Modern',
    desc: 'Strong colors, big typography, eye-catching visuals',
    emoji: '🎯',
  },
  {
    value: 'elegant',
    label: 'Elegant',
    desc: 'Refined aesthetics, serif fonts, sophisticated layout',
    emoji: '✨',
  },
  {
    value: 'playful',
    label: 'Playful',
    desc: 'Vibrant colors, rounded shapes, fun animations',
    emoji: '🎨',
  },
  {
    value: 'corporate',
    label: 'Corporate',
    desc: 'Professional, structured, trust-building design',
    emoji: '🏢',
  },
];

const layoutOptions = [
  { value: 'content', label: 'Content-heavy', desc: 'Blog, articles, documentation' },
  { value: 'portfolio', label: 'Portfolio', desc: 'Showcase work, projects, gallery' },
  { value: 'business', label: 'Business', desc: 'Services, team, contact info' },
  { value: 'landing', label: 'Landing Page', desc: 'Single product or service focus' },
];

export default function SneakPeek() {
  const [step, setStep] = useState<Step>('form');
  const [formData, setFormData] = useState<FormData>({
    websiteUrl: '',
    referenceUrl: '',
    designStyle: '',
    layoutFocus: '',
  });
  const [result, setResult] = useState<SneakPeekResult | null>(null);
  const [error, setError] = useState('');

  const isFormValid = formData.websiteUrl.trim() !== '' && formData.designStyle !== '' && formData.layoutFocus !== '';

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setStep('loading');
    setError('');

    try {
      const res = await fetch('/api/sneak-peek', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      const data = await res.json();
      setResult(data);
      setStep('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStep('form');
    }
  };

  const handleReset = () => {
    setStep('form');
    setFormData({ websiteUrl: '', referenceUrl: '', designStyle: '', layoutFocus: '' });
    setResult(null);
    setError('');
  };

  return (
    <section id="sneak-peek" className="py-16 sm:py-20 relative overflow-hidden" data-reveal>
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-orange-500/5 via-transparent to-amber-500/5"
        aria-hidden
      />
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-300 ring-1 ring-amber-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            Coming Soon
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Sneak Peek
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See what your transformed website could look like. Enter your details and we will generate a preview for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Coming Soon overlay */}
          <div className="absolute inset-0 z-10 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-not-allowed">
            <span className="px-5 py-2.5 rounded-full bg-amber-500 text-white text-sm font-bold shadow-lg">
              Coming Soon
            </span>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 text-center max-w-xs">
              We are working hard to bring you this feature. Stay tuned!
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-xl overflow-hidden select-none">
            {/* Progress indicator */}
            <div className="flex border-b border-slate-200 dark:border-slate-800">
              {['Your Site', 'Style', 'Generate'].map((label, idx) => {
                const stepIdx = step === 'form' ? 0 : step === 'loading' ? 2 : 2;
                const isActive = idx <= stepIdx;
                return (
                  <div key={label} className="flex-1 relative">
                    <div
                      className={`h-1 transition-all duration-500 ${isActive ? 'bg-orange-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                    />
                    <p
                      className={`text-xs text-center py-2 font-medium ${isActive ? 'text-orange-600 dark:text-orange-400' : 'text-slate-400 dark:text-slate-500'}`}
                    >
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-6 sm:p-8">
              {/* Form Step */}
              {step === 'form' && (
                <div className="space-y-8">
                  {error && (
                    <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                      {error}
                    </div>
                  )}

                  {/* Website URLs */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="website-url"
                        className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-1.5"
                      >
                        <Globe className="h-4 w-4 text-orange-500" />
                        Your website URL <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="website-url"
                        type="url"
                        placeholder="https://your-current-website.com"
                        value={formData.websiteUrl}
                        onChange={e => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="reference-url"
                        className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-1.5"
                      >
                        <Palette className="h-4 w-4 text-amber-500" />
                        Reference website URL <span className="text-slate-400 text-xs font-normal">(optional)</span>
                      </label>
                      <input
                        id="reference-url"
                        type="url"
                        placeholder="https://a-website-you-love.com"
                        value={formData.referenceUrl}
                        onChange={e => setFormData(prev => ({ ...prev, referenceUrl: e.target.value }))}
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors"
                      />
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Share a website whose design you admire — we will use it as inspiration.
                      </p>
                    </div>
                  </div>

                  {/* Design Style */}
                  <div>
                    <p className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-3">
                      <Wand2 className="h-4 w-4 text-orange-500" />
                      What design style do you prefer? <span className="text-red-500">*</span>
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {designStyles.map(style => (
                        <button
                          key={style.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, designStyle: style.value }))}
                          className={`rounded-xl border-2 p-4 text-left transition-all ${
                            formData.designStyle === style.value
                              ? 'border-orange-500 bg-orange-500/5 shadow-md ring-1 ring-orange-500/20'
                              : 'border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <span className="text-xl">{style.emoji}</span>
                          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{style.label}</p>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{style.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Layout Focus */}
                  <div>
                    <p className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-3">
                      <Sparkles className="h-4 w-4 text-orange-500" />
                      What best describes your website? <span className="text-red-500">*</span>
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {layoutOptions.map(option => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, layoutFocus: option.value }))}
                          className={`rounded-xl border-2 p-4 text-left transition-all ${
                            formData.layoutFocus === option.value
                              ? 'border-orange-500 bg-orange-500/5 shadow-md ring-1 ring-orange-500/20'
                              : 'border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{option.label}</p>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <Button
                      onClick={handleSubmit}
                      disabled={!isFormValid}
                      className="w-full h-12 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Generate Sneak Peek
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Loading Step */}
              {step === 'loading' && (
                <div className="py-16 flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <Image
                      src="/images/logo-head.png"
                      alt="ForgeFoxy"
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full animate-bounce"
                    />
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center">
                      <Wand2 className="h-3.5 w-3.5 text-white animate-spin" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      Generating your sneak peek...
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                      Our AI is analyzing your website and crafting a preview with your chosen style. This may take a
                      moment.
                    </p>
                  </div>
                  <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-[shimmer_2s_ease-in-out_infinite] w-1/2" />
                  </div>
                </div>
              )}

              {/* Result Step */}
              {step === 'result' && result && (
                <div className="py-8 space-y-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300 ring-1 ring-emerald-500/30">
                      <Sparkles className="h-3.5 w-3.5" />
                      Preview ready
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Here is your sneak peek!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {result.message || 'This is a preview of what your transformed website could look like.'}
                    </p>
                  </div>

                  {result.previewUrl && (
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex gap-1.5">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-amber-400" />
                          <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <span className="flex-1 text-xs text-slate-500 dark:text-slate-400 text-center truncate">
                          {result.previewUrl}
                        </span>
                      </div>
                      {result.screenshot ? (
                        <img
                          src={result.screenshot}
                          alt="Website preview"
                          className="w-full"
                        />
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <Globe className="h-12 w-12 text-orange-500/50 mx-auto" />
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Preview available at the link above
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {result.previewUrl && (
                    <div className="text-center">
                      <a
                        href={result.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl rounded-xl transition-all"
                      >
                        View Full Preview
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Like what you see?{' '}
                      <a
                        href="mailto:hello@forgefoxy.com?subject=Website%20Transformation%20Inquiry"
                        className="text-orange-600 dark:text-orange-400 font-semibold hover:underline"
                      >
                        Get the full transformation for $500 →
                      </a>
                    </p>
                    <Button variant="outline" onClick={handleReset} className="text-sm">
                      <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                      Try another
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
