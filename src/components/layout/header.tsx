"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Mountain, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#products", label: "Produtos" },
  { href: "#recommendations", label: "Consultor AI" },
  { href: "#calculator", label: "Calculadora" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">CreditWave</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
           <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="#contact">Comece Agora</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Alternar menu de navegação</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex h-full flex-col">
                 <div className="flex items-center justify-between border-b p-4">
                    <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsMenuOpen(false)}>
                      <Mountain className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold">CreditWave</span>
                    </Link>
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Fechar menu</span>
                      </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-1 flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="border-t p-4">
                    <Button asChild className="w-full">
                       <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Comece Agora</Link>
                    </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
