"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/admin/login', label: 'Admin' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={cn(
          'transition-colors font-medium',
          isActive ? 'text-accent font-semibold' : 'text-gray-500 hover:text-foreground',
          className
        )}
      >
        {label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => {
    const isActive = pathname === href;
    return (
      <SheetClose asChild>
        <Link href={href} className={cn(
          'text-lg py-2 transition-colors font-medium hover:text-primary',
          isActive ? 'text-primary' : 'text-muted-foreground',
          className
        )}>
          {label}
        </Link>
      </SheetClose>
    );
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled || !isHomePage ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent',
        isHomePage && !isScrolled ? '' : 'border-b'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Droplets className={cn(
              "h-7 w-7",
              'text-primary'
            )} />
            <span className={cn(
              "font-bold text-xl tracking-tight",
              'text-primary'
            )}>
              Rainwater Convention
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
            <Button asChild className={cn("ml-4", isHomePage && !isScrolled ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
              <Link href="/register">Get Tickets</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isHomePage && !isScrolled ? 'text-primary-foreground hover:bg-white/10 hover:text-white' : 'text-foreground')}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                     <Link href="/" className="flex items-center gap-2">
                      <Droplets className="h-7 w-7 text-primary" />
                      <span className="font-bold text-xl tracking-tight text-primary">
                        Rainwater Convention
                      </span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map(link => <MobileNavLink key={link.href} {...link} />)}
                  </nav>
                  <div className="mt-auto pb-8">
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/register">Get Tickets</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
