
"use client";

import { productsData, Product } from '@/lib/products-data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface ProductsProps {
  selectedProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export default function Products({ selectedProduct, onSelectProduct }: ProductsProps) {
  return (
    <section id="products" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productsData.map((product) => {
            const Icon = product.icon;
            const isSelected = selectedProduct.id === product.id;
            return (
              <Card
                key={product.id}
                className={cn(
                  'cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
                  isSelected
                    ? 'bg-primary text-primary-foreground ring-2 ring-primary'
                    : 'bg-card text-card-foreground hover:bg-muted'
                )}
                onClick={() => onSelectProduct(product)}
              >
                <CardContent className="flex flex-col items-center justify-center p-3 text-center">
                  <Icon
                    className={cn(
                      'mb-2 h-6 w-6 transition-colors',
                      isSelected ? 'text-primary-foreground' : 'text-primary'
                    )}
                  />
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
