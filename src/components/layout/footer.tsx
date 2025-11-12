
import { Instagram, Facebook, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import ImageWithFallback from '@/components/image-with-fallback'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <ImageWithFallback 
              avif='https://storage.googleapis.com/consorcioportovale/imagensSitePV/Logo%20Porto%20Vale%20-%20Varia%C3%A7%C3%B5es-03.avif'
              webp='https://storage.googleapis.com/consorcioportovale/imagensSitePV/Logo%20Porto%20Vale%20-%20Varia%C3%A7%C3%B5es-03.webp'
              png='https://storage.googleapis.com/consorcioportovale/imagensSitePV/Logo%20Porto%20Vale%20-%20Varia%C3%A7%C3%B5es-03.png'
              alt="Porto Vale Seguros Logo" 
              width={150} 
              height={40} 
              className="mb-4" 
            />
            <p className="text-sm text-gray-400">
              Protegendo o que é mais importante para você.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#our-insurances" className="text-gray-300 hover:text-white">Planos</Link></li>
              <li><Link href="#about-us" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/portovaleseguro" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/portovaleseguro/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
               <Link href="https://wa.me/5512999999999" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Phone className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Porto Vale Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
