// import React from "react";
// import products from "@/api/product-data";
// import Product from "./Product";

// type productProps = {
//   query: string;
// };

// async function fetchFiltered(query: string) {
//   return products.filter((filtered) => {
//     return filtered?.name.toLowerCase().includes(query.toLowerCase()) ;
//   });
// }

// async function SearchResults({ query }: productProps) {
//   const laptops = await fetchFiltered(query);
//   return (
//     <div className="products grid gap-8 mt-8 px-4">
//       {laptops.map((product) => {
//         return (
//           <>
//             <Product
//               key={product?.id}
//               id={product?.id}
//               name={product?.name}
//               price={product?.price}
//               category={product?.category}
//               image={product?.image}
//             />
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default SearchResults;
