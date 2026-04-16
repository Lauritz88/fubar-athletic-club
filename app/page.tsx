import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ProductGrid from "@/components/ProductGrid";
import RainRunner from "@/components/RainRunner";
import Details from "@/components/Details";
import Community from "@/components/Community";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <ProductGrid />
      <RainRunner />
      <Details />
      <Community />
      <EmailSignup />
      <Footer />
    </main>
  );
}
