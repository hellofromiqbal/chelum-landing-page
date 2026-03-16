import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Footer />
    </div>
  );
}
