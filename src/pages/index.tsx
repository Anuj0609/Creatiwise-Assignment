import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Feature/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
