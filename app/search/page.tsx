import React from "react";

import "@/css/search.css";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";

function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <div className="product-search flex flex-col">
      <Search />
      <SearchResults query={query}/>
    </div>
  );
}

export default SearchPage;
