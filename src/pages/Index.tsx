import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Products />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
