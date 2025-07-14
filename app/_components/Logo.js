import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icon-dark.png";

/* eslint-disable @next/next/no-html-link-for-pages */
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        quality={100}
        height="120"
        width="80"
        alt="The Batu Hotel"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Batu Hotel
      </span>
    </Link>
  );
}

export default Logo;
