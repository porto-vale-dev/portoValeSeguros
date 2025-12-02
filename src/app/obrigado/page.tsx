
"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import React, { Suspense } from 'react';

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-4">
      <Card className="w-full max-w-lg text-center shadow-2xl">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="mt-4 text-3xl font-bold text-primary">
            Obrigado, {name || 'cliente'}!
          </CardTitle>
          <CardDescription className="text-md text-muted-foreground">
            Sua cotação foi enviada com sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Recebemos suas informações e um de nossos especialistas entrará em contato com você em breve para apresentar a melhor proposta.
          </p>
          <p className="text-sm text-gray-500">
            Enquanto isso, que tal explorar mais sobre nossos planos?
          </p>
          <Button asChild>
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </CardContent>
      </Card>
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
