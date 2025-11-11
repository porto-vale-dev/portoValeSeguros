
"use client";

import React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroBanner from "@/components/sections/hero-banner";
import Products from "@/components/sections/products";
import { productsData } from "@/lib/products-data";
import OurInsurances from "@/components/sections/our-insurances";
import AboutUs from "@/components/sections/about-us";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = React.useState(productsData[0]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Products selectedProduct={selectedProduct} onSelectProduct={setSelectedProduct} />
        <HeroBanner product={selectedProduct} />
        <OurInsurances />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
