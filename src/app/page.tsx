
"use client";
import React, { useState } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroBanner from '@/components/sections/hero-banner';
import Products from '@/components/sections/products';
import AboutUs from '@/components/sections/about-us';
import QuoteForm from '@/components/sections/quote-form';
import { productsData, Product } from '@/lib/products-data';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(productsData[0]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
      <Header />
      <main className="flex-1">
        <HeroBanner product={selectedProduct} />
        <Products onProductSelect={setSelectedProduct} selectedProduct={selectedProduct} />
        <AboutUs />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
