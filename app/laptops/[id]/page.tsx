"use client";
import Image from "next/image";
import productsData from "@/api/product-data";
import Link from "next/link";
import "@/css/product-details.css";
import { useRouter } from "next/navigation";
import * as React from "react";

function formartPrice(price: number) {
  const formattedNumber = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}

function Laptop({ params }: { params: Promise<{ id: string }> }) {
  const productID = React.use(params).id;
  const router = useRouter();

  const checkoutProduct = (id: string) => {
    router.push(`/checkout/${id}`);
  };

  const auth = () => {
    router.push("/auth");
  };

  return (
    <>
      {productsData.map((p) => {
        if (p?.id === productID) {
          return (
            <div
              key={p.id}
              className="grid product-details wrapper mb-8 gap-8 p-4 w-full"
            >
              <div key={p.id} className="product-info gap-4 p-4 flex flex-col">
                <div className="product-image">
                  <Image src={p.image} height={1000} width={1000} alt="" />
                </div>

                <div className="cta-container grid gap-4">
                  <button
                    onClick={() => {
                      checkoutProduct(p.id);
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

              <div className="specs p-4 flex gap-2 flex-col">
                <span className="product-name font-extrabold">{p.name}</span>
                <Link href="/gaming" className="category-text">
                  Gaming
                </Link>
                <span className="price">MWK {formartPrice(p.price)}</span>
                <ul className="flex flex-col gap-2 pl-3 list-disc">
                  {p.specs.map((s, index) => {
                    return <li key={index}>{s}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Laptop;
