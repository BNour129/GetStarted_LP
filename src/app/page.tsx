import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-24 md:space-y-32">
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
