import Link from 'next/link';
import Button from './Button';

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur bg-white/80 z-50">
      <div className="container flex items-center justify-between h-16">
        <span className="font-bold text-lg">Get started</span>
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="#">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#services">Our Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <Button className="hidden md:inline-flex" variant="primary">Contact Us</Button>
      </div>
    </header>
  );
}
