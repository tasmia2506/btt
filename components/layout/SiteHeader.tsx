"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ChevronDown, Phone } from "lucide-react";
import { mainNav } from "@/data/nav";
import { business } from "@/config/business";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-slag/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-edit flex items-center justify-between py-4">
        <Link href="/" className="font-oswald uppercase font-bold text-xl tracking-tight text-ice">
          Badiger
          <span className="block text-[10px] tracking-[0.25em] text-lichen font-sans font-semibold normal-case">
            Tours &amp; Travels
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-oswald uppercase text-sm font-medium tracking-wide">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="flex items-center gap-0.5">
                <Link
                  href={item.href}
                  className="text-ice hover:text-lichen transition-colors py-2"
                >
                  {item.label}
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="text-ice hover:text-lichen transition-colors p-1 outline-none"
                    aria-label={`${item.label} submenu`}
                  >
                    <ChevronDown size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="min-w-[220px] bg-slag text-ice border-ice/10 rounded-none py-2"
                  >
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild className="rounded-none">
                        <Link
                          href={child.href}
                          className="block w-full px-3 py-2.5 text-xs normal-case font-sans text-ice hover:bg-lichen hover:text-slag transition-colors focus:bg-lichen focus:text-slag"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 text-ice hover:text-lichen transition-colors py-2"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="hidden md:flex items-center gap-2 rounded-full border border-ice/30 px-4 py-2 text-sm font-semibold text-ice hover:border-ice/60 transition-colors"
          >
            <Phone size={16} /> {business.phoneDisplay}
          </a>
          <span className="hidden sm:inline-block">
            <ArrowFillButton href="/contact" btnText="Book Your Ride" size="compact" />
          </span>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Toggle navigation"
              className="lg:hidden text-ice"
            >
              <Menu size={26} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="lg:hidden bg-slag text-ice border-ice/10 w-4/5"
            >
              <SheetHeader>
                <SheetTitle className="text-ice font-oswald uppercase">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-5 font-oswald uppercase text-base font-medium">
                {mainNav.map((item) => (
                  <div key={item.href}>
                    <SheetClose asChild>
                      <Link href={item.href} className="block py-3">
                        {item.label}
                      </Link>
                    </SheetClose>
                    {item.children && (
                      <div className="pb-2 pl-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className="py-1 text-sm normal-case font-sans text-ice/80"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 flex justify-center">
                  <SheetClose asChild>
                    <ArrowFillButton href="/contact" btnText="Book Your Ride" size="compact" />
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
