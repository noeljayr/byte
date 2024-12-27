// "use client";

// import React from "react";
// import { SearchNormal1 } from "iconsax-react";
// import { useSearchParams, usePathname, useRouter } from "next/navigation";

// function Search() {
//   const searchParams = useSearchParams();
//   const params = new URLSearchParams(searchParams);
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   function handleSearch(term: string) {
//     if (term) {
//       params.set("query", term);
//     } else {
//       params.delete("query");
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }
//   return (
//     <div className="search flex mx-4 items-center relative">
//       <SearchNormal1 size="32" color="#101247" />
//       <input
//         className="font-semibold"
//         placeholder="Asus ROG"
//         type="text"
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//         defaultValue={searchParams.get("quey")?.toString()}
//       />
//     </div>
//   );
// }

// export default Search;
