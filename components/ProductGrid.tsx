import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}