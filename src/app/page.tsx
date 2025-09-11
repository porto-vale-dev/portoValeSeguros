import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import ProductShowcase from "@/components/sections/product-showcase";
import AboutUs from "@/components/sections/about-us";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <AboutUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
