
"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AboutUs from "@/components/sections/about-us";
import ObrigadoBanner from "@/components/sections/obrigado-banner";
import QuoteFormSection from '@/components/sections/quote-form-section';

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main>
        <div className="container px-4 md:px-6">
          <ObrigadoBanner />
          <div className="mt-6">
            <QuoteFormSection />
          </div>
        </div>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

// Envolvemos o componente principal com Suspense para que ele possa usar `useSearchParams`
export default function ObrigadoPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ObrigadoContent />
        </Suspense>
    );
}
