"use client";

import React from "react";
import Link from "next/link";
import "@/css/product.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

type productProps = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
};

function formartPrice(price: number) {
  const formattedNumber = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}

function Product({ id, name, price, category, image }: productProps) {
  const router = useRouter();
  const checkoutProduct = (id: string) => {
    router.push(`/checkout/${id}`);
  };

  const auth = () => {
    router.push("/auth");
  };
  return (
    <div className="product grid gap-2 p-4">
      <Link href={`laptops/${id}`} className="product-image w-full h-full">
        <Image src={image} alt={name} height={1000} width={1000} />
      </Link>
      <Link className="product-name font-bold" href={`laptops/${id}`}>
        {name}
      </Link>
      <Link className="category-text font-bold" href={`/${category}`}>
        {category}
      </Link>
      <span className="price">MWK {formartPrice(price)}</span>
      <div className="cta-container grid gap-4">
        <button
          onClick={() => {
            checkoutProduct(id);
          }}
          className="cta"
        >
          Buy
        </button>
        <button onClick={auth} className="cta-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
