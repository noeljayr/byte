"use client";

import Link from "next/link";
import { SearchNormal1 } from "iconsax-react";
import Cart from "@/components/Cart";
import MobileMenu from "@/components/MobileMenu";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/checkout")) {
    return <></>;
  }
  return (
    <div className="navbar z-10 fixed top-0 pt-4 pb-1 left-12 flex gap-8 items-center">
      <Link className="font-black text-2xl" href="/">
        byte.
      </Link>
      <Link className="link font-semibold" href="/">
        Home
      </Link>
      <Link className="link font-semibold" href="/laptops">
        Laptops
      </Link>
      <Link className="link font-semibold" href="/#categories">
        Categories
      </Link>
      <Link href="#search" className="link ml-auto flex items-center relative">
        <SearchNormal1 size="32" color="#101247" />
      </Link>
      <Cart />
      <Link href="auth" className="cta link">
        Login
      </Link>

      <MobileMenu />
    </div>
  );
}

export default Navbar;
