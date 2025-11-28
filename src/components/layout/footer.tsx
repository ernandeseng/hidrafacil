import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Especialidades' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#contato', label: 'Contato' },
];

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.imgur.com/tFzaEIt.png"
                alt="HidraFácil Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground">Sua loja especializada</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Rua Exemplo, 123, Cidade, Estado</p>
              <p>Email: contato@hidrafacil.com</p>
              <p>Telefone: (11) 98465-8469</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} passHref>
                  <Button variant="ghost" size="icon" aria-label={social.label}>
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HidraFácil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
