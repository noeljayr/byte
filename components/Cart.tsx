"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "iconsax-react";

function Cart() {
  const router = useRouter();
  const auth = () => {
    router.push("/auth");
  };
  return (
    <span className="cursor-pointer z-10 cart" onClick={auth}>
      <ShoppingCart size="32" color="#101247" />
    </span>
  );
}

export default Cart;
