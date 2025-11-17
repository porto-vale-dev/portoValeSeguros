
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Poppins } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: 'Porto Vale Seguros | Cotação de Seguros',
  description: 'Soluções de Seguro Inteligentes para um Futuro Mais Seguro',
  icons: {
    icon: '/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`!scroll-smooth ${poppins.variable}`}>
      <head>
        {/*
          ===========================================================
          INSIRA SEU CÓDIGO DO GOOGLE TAG MANAGER AQUI.
          Substitua 'GTM-XXXXXXX' pelo seu ID de contêiner do GTM.
          ===========================================================
        */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          {/*
            ===========================================================
            INSIRA SEU CÓDIGO DO GOOGLE TAG MANAGER (NOSCRIPT) AQUI.
            Substitua 'GTM-XXXXXXX' pelo seu ID de contêiner do GTM.
            ===========================================================
          */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
