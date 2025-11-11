
"use client";
import React from 'react';
import { productsData, Product } from '@/lib/products-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductsProps {
  onProductSelect: (product: Product) => void;
  selectedProduct: Product;
}

export default function Products({ onProductSelect, selectedProduct }: ProductsProps) {
  return (
    <section className="w-full bg-muted/40 py-12 md:py-16 lg:py-20 -mt-16 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {productsData.map((product) => (
            <Card
              key={product.id}
              className={cn(
                "flex flex-col text-center items-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2",
                selectedProduct.id === product.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white hover:bg-blue-600 hover:text-white'
              )}
              onClick={() => onProductSelect(product)}
            >
              <CardHeader className="flex flex-col items-center justify-center p-4">
                <product.icon className="h-8 w-8 mb-2" />
                <CardTitle className="text-base md:text-lg">{product.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
