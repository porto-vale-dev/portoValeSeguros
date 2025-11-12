"use client";

import { productsData, Product } from '@/lib/products-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface OurInsurancesProps {
  selectedProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export default function OurInsurances({ selectedProduct, onSelectProduct }: OurInsurancesProps) {
  const handleProductClick = (product: Product) => {
    onSelectProduct(product);
    const heroBanner = document.getElementById('home');
    if (heroBanner) {
      const elementPosition = heroBanner.offsetTop;
      const offsetPosition = elementPosition - 50;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="our-insurances" className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Nossos Seguros</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Encontre a proteção ideal para cada momento da sua vida e para o seu patrimônio. Vamos cuidar do que é importante para você.
            </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productsData.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className={cn(
                  'cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-card text-card-foreground hover:bg-muted'
                )}
                onClick={() => handleProductClick(product)}
              >
                <CardHeader className="flex-row items-center gap-4 bg-muted/50 p-4">
                  <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground",
                  )}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}