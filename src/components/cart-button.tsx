"use client";

import { useCart } from "@/context/cart-context";

export interface AddToCartButtonProps {
  productId: number;
}
export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }
  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="hover:bg-emerald-500 mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
}