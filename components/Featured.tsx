"use client";

import Link from "next/link";
import Image from "next/image";
import macbookPro from "@/public/images/laptops/productivity/mac.png";
import { useRouter } from "next/navigation";

function Featured() {
  const router = useRouter();
  const auth = () => {
    router.push("/auth");
  };

  const checkoutProduct = (id: string) => {
    router.push(`/checkout/${id}`);
  };

  return (
    <div className="featured relative flex p-8">
      <span className="tag font-semibold text-xs absolute">Best Selling</span>

      <Link
        className="ft-product"
        href="laptops/d2caabec-e22c-4b2b-89b9-ea3d2f3c7de9"
      >
        <Image src={macbookPro} height={1000} width={1000} alt="macbook pro" />
      </Link>
      <div className="product-details flex flex-col gap-2">
        <span>Apple</span>
        <Link
          className="font-extrabold text-3xl"
          href="laptops/d2caabec-e22c-4b2b-89b9-ea3d2f3c7de9"
        >
          MacBook Pro
        </Link>
        <Link className="category-text font-bold text-sm" href="productivity">
          Productivity
        </Link>
        <span className="price font-extrabold">MWK 12,000.00</span>
        <div className="cta-container grid gap-4">
          <button
            onClick={() => {
              checkoutProduct("d2caabec-e22c-4b2b-89b9-ea3d2f3c7de9");
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
    </div>
  );
}

export default Featured;
