import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import WorkSection from "@/components/WorkSection";
import AISection from "@/components/AISection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Introduction />
      <WorkSection />
      <AISection />
      <Footer />
    </div>
  );
};

export default Index;
