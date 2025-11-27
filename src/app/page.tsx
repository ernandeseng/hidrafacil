
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/app/sections/hero';
import Specialties from '@/app/sections/specialties';
import Partners from '@/app/sections/partners';
import WhyUs from '@/app/sections/why-us';
import Products from '@/app/sections/products';
import Contact from '@/app/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <Partners />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
