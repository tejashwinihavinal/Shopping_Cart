import React from 'react';
import { ShoppingCart } from 'lucide-react';

type HeaderProps = {
  cartItemCount: number;
  onCartClick: () => void;
};

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">TechStore</h1>
        <button
          onClick={onCartClick}
          className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          aria-label="Shopping cart"
        >
          <ShoppingCart size={28} />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}