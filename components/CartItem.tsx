import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/product';
import { getProductEmoji, formatPrice } from '@/utils/helpers';

type CartItemProps = {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
        {getProductEmoji(item.product.name)}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">
          {item.product.name}
        </h3>
        <p className="text-blue-600 font-medium">
          {formatPrice(item.product.price)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={18} />
        </button>
        <span className="w-8 text-center font-semibold">
          {item.quantity}
        </span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={18} />
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}