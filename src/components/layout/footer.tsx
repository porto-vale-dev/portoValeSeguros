
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image src="/img/Logo_PortoSeguro_Novo_Azul_Branco.png" alt="Porto Vale Seguros Logo" width={150} height={40} className="mb-4" />
            <p className="text-sm text-blue-100">
              Protegendo o que é mais importante para você.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-blue-100 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="#" className="text-blue-100 hover:text-white">Política de Privacidade</Link></li>
              <li><Link href="#" className="text-blue-100 hover:text-white">Trabalhe Conosco</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/portovaleseguro" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/portovaleseguro/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
               <Link href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white">
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Porto Vale Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
