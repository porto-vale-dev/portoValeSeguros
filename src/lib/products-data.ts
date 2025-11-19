
import { Car, Home, HeartHandshake, Building, Smartphone, Laptop, PartyPopper, Plane, Stethoscope, Tractor, Truck, Shield, FileCheck, Landmark, HandCoins } from 'lucide-react';

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
  },
  {
    id: 'celular',
    name: 'Seguro Celular',
    icon: Smartphone,
    description: 'Seu smartphone seguro contra roubos, quedas e outros imprevistos.',
    bannerImage: '/img/seguro-celular.jpeg',
    bannerTitle: 'Seguro para Celular: conecte-se sem preocupações.',
    bannerDescription: 'Proteja seu smartphone contra roubos, furtos e danos acidentais. Esteja sempre conectado com segurança.',
    ctaText: 'Proteja seu Celular',
    ctaLink: '#quote'
  },
  {
    id: 'notebook',
    name: 'Seguro Notebook',
    icon: Laptop,
    description: 'Tranquilidade para trabalhar ou estudar em qualquer lugar.',
    bannerImage: '/img/seguro-notebook.jpeg',
    bannerTitle: 'Seguro para Notebook: sua produtividade garantida.',
    bannerDescription: 'Proteja sua ferramenta de trabalho e estudos contra danos e roubos, onde quer que você esteja.',
    ctaText: 'Cote seu Seguro',
    ctaLink: '#quote'
  },
  {
    id: 'eventos',
    name: 'Seguro Eventos',
    icon: PartyPopper,
    description: 'Garanta o sucesso do seu evento, do início ao fim.',
    bannerImage: '/img/seguro-eventos.jpeg',
    bannerTitle: 'Seguro para Eventos: celebre com total segurança.',
    bannerDescription: 'Organize seu evento com a tranquilidade de ter cobertura para cancelamentos e acidentes.',
    ctaText: 'Proteja seu Evento',
    ctaLink: '#quote'
  },
  {
    id: 'viagem',
    name: 'Seguro Viagem',
    icon: Plane,
    description: 'Viaje pelo mundo com a segurança de estar sempre amparado.',
    bannerImage: '/img/seguro-viagem.jpeg',
    bannerTitle: 'Seguro Viagem: sua aventura com mais tranquilidade.',
    bannerDescription: 'Curta cada momento da sua viagem sabendo que tem assistência médica, odontológica e muito mais.',
    ctaText: 'Cote sua Viagem',
    ctaLink: '#quote'
  },
  {
    id: 'saude',
    name: 'Seguro Saúde',
    icon: Stethoscope,
    description: 'Cuidado completo com sua saúde e bem-estar.',
    bannerImage: '/img/seguro-saude.jpeg',
    bannerTitle: 'Seguro Saúde: o cuidado que você e sua família merecem.',
    bannerDescription: 'Tenha acesso a uma ampla rede de hospitais e laboratórios, com a qualidade e a segurança que você precisa.',
    ctaText: 'Encontre seu Plano',
    ctaLink: '#quote'
  },
  {
    id: 'maquinas',
    name: 'Máquinas e Equipamentos',
    icon: Tractor,
    description: 'Proteja seus equipamentos e garanta a continuidade do seu trabalho.',
    bannerImage: '/img/seguro-maquinas.jpeg',
    bannerTitle: 'Seguro para Máquinas e Equipamentos: sua operação não para.',
    bannerDescription: 'Garanta a proteção de seus equipamentos agrícolas ou industriais contra danos e roubos.',
    ctaText: 'Proteja seus Ativos',
    ctaLink: '#quote'
  },
  {
    id: 'vida-empresarial',
    name: 'Vida Empresarial',
    icon: Landmark,
    description: 'Valorize seus colaboradores com um benefício que faz a diferença.',
    bannerImage: '/img/seguro-vida-empresarial.jpeg',
    bannerTitle: 'Seguro de Vida Empresarial: proteção para seu time.',
    bannerDescription: 'Ofereça tranquilidade para seus colaboradores e suas famílias, fortalecendo o bem-estar na sua empresa.',
    ctaText: 'Fale com um Consultor',
    ctaLink: '#quote'
  },
  {
    id: 'transportes',
    name: 'Seguro Transportes',
    icon: Truck,
    description: 'Proteção para sua carga, do embarque ao destino final.',
    bannerImage: '/img/seguro-transportes.jpeg',
    bannerTitle: 'Seguro de Transportes: sua carga segura em qualquer trajeto.',
    bannerDescription: 'Garanta a integridade da sua mercadoria durante o transporte, seja por terra, água ou ar.',
    ctaText: 'Cote seu Frete',
    ctaLink: '#quote'
  },
  {
    id: 'responsabilidade-civil',
    name: 'Responsabilidade Civil',
    icon: Shield,
    description: 'Proteção contra danos a terceiros em sua atividade profissional.',
    bannerImage: '/img/seguro-rc.jpeg',
    bannerTitle: 'Seguro de Responsabilidade Civil: exerça sua profissão com segurança.',
    bannerDescription: 'Proteja seu patrimônio contra imprevistos e reclamações decorrentes da sua atuação profissional.',
    ctaText: 'Proteja sua Carreira',
    ctaLink: '#quote'
  },
  {
    id: 'fianca-locaticia',
    name: 'Fiança Locatícia',
    icon: FileCheck,
    description: 'Alugue sem fiador e com mais agilidade.',
    bannerImage: '/img/seguro-fianca.jpeg',
    bannerTitle: 'Seguro Fiança Locatícia: aluguel sem dor de cabeça.',
    bannerDescription: 'A solução ideal para inquilinos e proprietários, substituindo o fiador com agilidade e segurança.',
    ctaText: 'Alugue sem Fiador',
    ctaLink: '#quote'
  },
  {
    id: 'emprestimo-auto',
    name: 'Empréstimo com Garantia de Automóvel',
    icon: HandCoins,
    description: 'Crédito rápido utilizando seu carro como garantia.',
    bannerImage: '/img/emprestimo-auto.jpeg',
    bannerTitle: 'Empréstimo com Garantia de Automóvel: crédito na sua mão.',
    bannerDescription: 'Use seu veículo para conseguir as melhores taxas de juros e realize seus projetos.',
    ctaText: 'Simule seu Empréstimo',
    ctaLink: '#quote'
  },
  {
    id: 'emprestimo-imovel',
    name: 'Empréstimo com Garantia de Imóvel',
    icon: Landmark,
    description: 'Use seu imóvel para obter crédito com as melhores condições.',
    bannerImage: '/img/emprestimo-imovel.jpeg',
    bannerTitle: 'Empréstimo com Garantia de Imóvel: mais crédito para você.',
    bannerDescription: 'Transforme o valor do seu imóvel em crédito para investir nos seus sonhos, com prazos longos e juros baixos.',
    ctaText: 'Simule Agora',
    ctaLink: '#quote'
  }
];
