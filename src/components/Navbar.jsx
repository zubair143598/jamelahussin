"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({ locale, t }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/fleet`, label: t.nav.fleet },
    { href: `/${locale}/industries`, label: t.nav.industries },
    { href: `/${locale}/careers`, label: t.nav.careers },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const otherLocale = locale === "ar" ? "en" : "ar";
  const langLabel = t.common.language;

  // Build the equivalent path in the other locale
  const toggleLangHref = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container-tight flex items-center justify-between h-18 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src='/logo4.png' alt="Jameela_hussain_logo" className="object-contain" width={140} height={140} priority />
          {/* <span className="text-xl font-bold tracking-wider text-gradient-gold hidden sm:inline">SHERIKA</span> */}
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="gap-1.5">
            <Link href={toggleLangHref}>
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{langLabel}</span>
            </Link>
          </Button>
          <Button asChild variant="hero" size="sm" className="hidden md:inline-flex">
            <Link href={`/${locale}/quote`}>{t.common.getQuote}</Link>
          </Button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="container-tight py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`py-3 px-3 rounded-lg text-sm font-medium ${isActive ? "bg-secondary text-primary" : "text-foreground/80"}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Button asChild variant="hero" className="mt-2">
              <Link href={`/${locale}/quote`}>{t.common.getQuote}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
