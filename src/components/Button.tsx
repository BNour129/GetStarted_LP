"use client"
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'rounded-md px-6 py-3 font-semibold text-sm transition';
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary/90'
      : 'border border-primary text-primary hover:bg-pale-gold';
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
