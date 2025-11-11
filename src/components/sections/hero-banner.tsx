"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products-data';

export default function HeroBanner({ product }: { product: Product }) {
  return (
    <section id="home" className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
      <AnimatePresence>
        <motion.div
          key={product.id}
          className="absolute inset-0 z-[-1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={product.bannerImage}
            alt={product.bannerTitle}
            fill
            quality={100}
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          key={product.id + '-text'}
          className="space-y-6 text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }}
        >
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
            Proteja o que<br/>mais importa com o Seguro Porto
          </h1>
          <h2 className="font-headline text-2xl font-bold tracking-tight text-white/90 sm:text-3xl md:text-4xl drop-shadow-lg">
            {product.bannerTitle}
          </h2>
          <p className="max-w-[600px] text-lg text-gray-200 md:text-xl drop-shadow-md">
            {product.bannerDescription}
          </p>
          <Button asChild size="lg" className="h-12 text-lg">
            <a href={product.ctaLink}>{product.ctaText}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
