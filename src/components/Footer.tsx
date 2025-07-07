import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-pale-gold/50 py-12 mt-24">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">Get Started</h3>
          <p className="max-w-sm text-sm">At Get Started, we are more than just a business incubator.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Our Services</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flex gap-4 items-start">
          <Image src="/next.svg" alt="LinkedIn" width={32} height={32} className="bg-primary rounded-full p-1" />
          <Image src="/next.svg" alt="Twitter" width={32} height={32} className="bg-primary rounded-full p-1" />
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-pale-gold pt-4">
        All rights reserved | GetStarted 2025
      </div>
    </footer>
  );
}
