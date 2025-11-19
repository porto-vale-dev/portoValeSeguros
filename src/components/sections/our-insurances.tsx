"use client";

import { productsData, Product } from '@/lib/products-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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

  const mainProducts = productsData.slice(0, 4);
  const otherProducts = productsData.slice(4);

  const renderProductCard = (product: Product) => {
    const Icon = product.icon;
    return (
      <Card
        key={product.id}
        className={cn(
          'cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-card text-card-foreground hover:bg-muted h-full flex flex-col'
        )}
        onClick={() => handleProductClick(product)}
      >
        <CardHeader className="flex-row items-center gap-4 bg-muted/50 p-4">
          <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0",
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
  }

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
          {mainProducts.map(renderProductCard)}
        </div>

        {otherProducts.length > 0 && (
          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter text-primary">Outras Soluções</h3>
                <p className="mt-4 text-lg text-muted-foreground">Temos um portfólio completo para atender a todas as suas necessidades.</p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {otherProducts.map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      {renderProductCard(product)}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
