
import { Car, Home, HeartHandshake, Building } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  bannerImage: string;
  bannerTitle: string;
  bannerDescription: string;
  ctaText: string;
  ctaLink: string;
}

export const productsData: Product[] = [
  {
    id: 'auto',
    name: 'Seguro Auto',
    icon: Car,
    description: 'Proteção completa para seu carro com guincho 24h e mais.',
    bannerImage: '/img/slide1-carrossel-home.jpg',
    bannerTitle: 'Seguro Auto: seu veículo protegido em todos os momentos.',
    bannerDescription: 'Dirija com a tranquilidade de quem tem a melhor cobertura do mercado. Cotação rápida e sem complicação.',
    ctaText: 'Simule Agora',
    ctaLink: '#quote'
  },
  {
    id: 'residencial',
    name: 'Seguro Residencial',
    icon: Home,
    description: 'Sua casa protegida contra imprevistos, com assistências.',
    bannerImage: '/img/seguro-residencial.jpeg',
    bannerTitle: 'Seguro Residencial: a segurança que seu lar merece.',
    bannerDescription: 'Proteja seu patrimônio com coberturas completas contra incêndio, roubo e danos elétricos.',
    ctaText: 'Cote seu Seguro Residencial',
    ctaLink: '#quote'
  },
  {
    id: 'vida',
    name: 'Seguro de Vida',
    icon: HeartHandshake,
    description: 'Garanta a tranquilidade da sua família com coberturas especiais.',
    bannerImage: '/img/seguro-de-vida.jpeg',
    bannerTitle: 'Seguro de Vida: proteja o futuro de quem você ama.',
    bannerDescription: 'Garanta o amparo e a segurança financeira da sua família em momentos inesperados. Um ato de amor e cuidado.',
    ctaText: 'Faça uma Cotação',
    ctaLink: '#quote'
  },
  {
    id: 'empresarial',
    name: 'Seguro Empresarial',
    icon: Building,
    description: 'A proteção ideal para sua empresa não parar de crescer.',
    bannerImage: '/img/seguro-empresarial.jpeg',
    bannerTitle: 'Seguro Empresarial: a proteção que seu negócio precisa.',
    bannerDescription: 'Mantenha sua empresa segura contra imprevistos e foque no que realmente importa: o crescimento do seu negócio.',
    ctaText: 'Solicite uma Proposta',
    ctaLink: '#quote'
  }
];
