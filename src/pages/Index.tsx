import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ComparisonSection from '@/components/ComparisonSection';
import FeaturesSection from '@/components/FeaturesSection';
import BusinessImpact from '@/components/BusinessImpact';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ComparisonSection />
        <FeaturesSection />
        <BusinessImpact />
        <HowItWorks />
        <Testimonials />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
