"use client";
import React from "react";
import { useState } from "react";
import "@/css/menu.css";
import Link from "next/link";

function MobileMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className={`menu${active ? " menu-active" : ""}`}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`menu-list gap-4${active ? " menu-list-active" : ""}`}>
        <Link
          onClick={() => setActive(!active)}
          className="font-semibold"
          href="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setActive(!active)}
          className="font-semibold"
          href="/laptops"
        >
          Laptops
        </Link>
        <Link
          onClick={() => setActive(!active)}
          className="font-semibold"
          href="/#categories"
        >
          Categories
        </Link>
        <Link
          onClick={() => setActive(!active)}
          href="#search"
          className="font-semibold"
        >
          Search
        </Link>
        <Link onClick={() => setActive(!active)} href="auth" className="cta">
          Login
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
