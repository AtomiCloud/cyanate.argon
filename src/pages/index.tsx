import Head from 'next/head';
import Hero from '@/components/landing/Hero';
import WhyUpgrade from '@/components/landing/WhyUpgrade';
import HowItWorks from '@/components/landing/HowItWorks';
import SneakPeek from '@/components/landing/SneakPeek';
import Pricing from '@/components/landing/Pricing';
import FinalCTA from '@/components/landing/FinalCTA';
import ScrollReveal from '@/lib/animations/ScrollReveal';
import FAQ from '@/components/landing/FAQ';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ForgeFoxy — Transform Your Website</title>
        <meta
          name="description"
          content="Transform your outdated website into a modern masterpiece. Pick a design you love, we rebuild and host it for you. Starting at $500."
        />
      </Head>
      <ScrollReveal />
      <Hero />
      <WhyUpgrade />
      <HowItWorks />
      <SneakPeek />
      <Pricing />
      <FinalCTA />
      <FAQ />
    </>
  );
}
