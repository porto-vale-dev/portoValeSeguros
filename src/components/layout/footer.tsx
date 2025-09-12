import Image from 'next/image'
import { Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/img/Logo_PortoSeguro_Novo_Azul.png" alt="Porto Vale Logo" width={120} height={40} />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Porto Vale. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
