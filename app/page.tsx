'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import CartModal from '@/components/CartModal';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const { products, isLoading, error } = useProducts();
  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    calculateTotal,
    cartItemCount,
  } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleCheckout = async () => {
    try {
      const cartData = cart.map(item => ({
        id: item.id,
        quantity: item.quantity,
      }));

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart: cartData }),
      });

      const data = await response.json();

      if (data.success) {
        setCheckoutMessage(data.message);
        clearCart();
        setTimeout(() => {
          setCheckoutMessage('');
          setIsCartOpen(false);
        }, 2000);
      }
    } catch (err) {
      console.error('Checkout failed:', err);
      setCheckoutMessage('Checkout failed. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      <ProductGrid products={products} onAddToCart={addToCart} cart={cart} />
      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        total={calculateTotal()}
        checkoutMessage={checkoutMessage}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />
      <Toaster />
    </div>
  );
}