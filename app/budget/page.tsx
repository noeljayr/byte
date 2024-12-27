import React from "react";
import Product from "@/components/Product";
import productsData from "@/api/product-data";

function Budget() {
  const category = "budget";
  return (
   
      <div className="products grid gap-8 mt-8 px-4">
        {productsData.map((product) => {
          if (product?.category === category) {
            return (
              <>
                <Product
                  key={product?.id}
                  id={product?.id}
                  name={product?.name}
                  price={product?.price}
                  category={product?.category}
                  image={product?.image}
                />
              </>
            );
          }
        })}
      </div>

  );
}

export default Budget;
