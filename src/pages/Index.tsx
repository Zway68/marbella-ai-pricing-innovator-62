
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import MentorSection from '@/components/MentorSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <PricingSection />
      <MentorSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
