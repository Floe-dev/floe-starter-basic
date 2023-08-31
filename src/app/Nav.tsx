import React from "react";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Nav = ({ hideBackground = false }) => (
  <header
    className={classNames(
      "fixed inset-x-0 top-0 z-50",
      hideBackground ? undefined : "backdrop-blur-2xl bg-zinc-900/80"
    )}
  >
    <nav
      className="flex items-center justify-between px-8 py-4"
      aria-label="Global"
    >
      <div className="flex items-center justify-between flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image
            priority
            src="/logo-title.svg"
            height={24}
            width={72}
            alt="Follow us on Twitter"
            className="dark:invert"
          />
        </Link>

        <div className="flex gap-4">
          <Link href="/blog" className="text-sm text-white">
            Blog
          </Link>
          <Link href="/changelog" className="text-sm text-white">
            Changelog
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Nav;
