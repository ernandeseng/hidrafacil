
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone, X } from 'lucide-react';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Especialidades' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/40 bg-background">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/tFzaEIt.png"
            alt="HidraFácil Logo"
            width={140}
            height={35}
            priority
          />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <a href="tel:+5511984658469" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                (11) 98465-8469
            </a>
            <Button asChild>
              <Link href="#contato">Falar com Especialista</Link>
            </Button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={() => setIsSheetOpen(false)}>
                  <Image
                    src="https://i.imgur.com/tFzaEIt.png"
                    alt="HidraFácil Logo"
                    width={140}
                    height={35}
                  />
                </Link>
                <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Fechar menu</span>
                    </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-5">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="border-t pt-5 space-y-4">
                    <a href="tel:+5511984658469" className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary">
                        <Phone className="h-5 w-5" />
                        (11) 98465-8469
                    </a>
                    <Button asChild size="lg" className="w-full">
                        <Link href="#contato" onClick={() => setIsSheetOpen(false)}>Falar com Especialista</Link>
                    </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
