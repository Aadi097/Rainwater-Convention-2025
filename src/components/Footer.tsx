import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Droplets } from 'lucide-react';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1200 1227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L112.633 43.896H302.536L604.458 500.014L651.926 567.908L1099.01 1178.1H909.111L569.165 687.854V687.828Z"
      fill="currentColor"
    />
  </svg>
);

const socialLinks = [
  { icon: <Facebook />, href: '#', name: 'Facebook' },
  { icon: <XIcon />, href: '#', name: 'X' },
  { icon: <Instagram />, href: '#', name: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-muted-foreground hover:text-primary">
                <span className="sr-only">{item.name}</span>
                {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
             <Link href="/" className="flex items-center justify-center gap-2">
              <Droplets className="h-6 w-6 text-primary" />
              <p className="text-center text-base text-muted-foreground">
                &copy; 2025 Rainwater Convention. All rights reserved.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
