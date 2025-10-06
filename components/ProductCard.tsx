import React from 'react';
import { Product } from '@/types/product';
import { getProductEmoji, formatPrice } from '@/utils/helpers';
import toast from 'react-hot-toast';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
};

export default function ProductCard({ product, onAddToCart, isInCart }: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="text-6xl">{getProductEmoji(product.name)}</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          {formatPrice(product.price)}
        </p>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 px-4 rounded-lg transition-colors font-medium cursor-pointer ${
            isInCart
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}