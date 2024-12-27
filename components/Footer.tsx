"use client";

import Link from "next/link";
import { Whatsapp } from "iconsax-react";
import { Instagram } from "iconsax-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/checkout")) {
    return <></>;
  }
  return (
    <div className="footer w-full flex py-8 px-4 justify-between">
      <div className="info flex flex-col gap-2">
        <h1 className="font-bold text-3xl">byte.</h1>
        <p className="text-balance">
          One stop store to get high quality laptops. This is just a NEXT.js app
          template you can reuse and build upon for your brand.
        </p>
        <div className="social-accounts w-full gap-8 flex">
          <span>
            <IconBrandFacebook color="#4356ff" size="32" />
          </span>

          <span>
            <Instagram color="#4356ff" size="32" />
          </span>

          <span>
            <Whatsapp color="#4356ff" size="32" />
          </span>
        </div>
      </div>

      <div className="links flex flex-col gap-2">
        <h2 className="font-bold">Quick links</h2>
        <Link href="/">Home</Link>
        <Link href="/laptops">Laptops</Link>
        <Link href="/#categories">Categries</Link>
      </div>

      <div className="contact flex flex-col gap-2">
        <Link href="tel:+265886047774">+265886047774</Link>
        <Link
          href="mailto:noeljayr01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          noeljayr01@gmail.com
        </Link>
        <Link
          href="https://noeljayr.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          noeljayr.github.io
        </Link>
        <span>Malawi, Mzuzu</span>
      </div>
    </div>
  );
}

export default Footer;
