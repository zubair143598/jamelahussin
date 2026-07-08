"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Truck } from "lucide-react";

const Footer = ({ locale, t }) => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container-tight py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-1">
            <Image
              src="/logo4.png"
              alt="Jameela_hussain_logo"
              className="object-contain"
              width={150}
              height={100}
            />
            {/* <span className="text-[16px] font-bold text-[#E8BC4B] tracking-wider">{t.footer.title}</span> */}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.footer.tagline}
          </p>
          
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 text-primary uppercase tracking-wider">
            {t.footer.quick}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href={`/${locale}/about`}  aria-label="Learn more about Jameela Hussain Transport" className="hover:text-primary">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/fleet`} aria-label="View our fleet" className="hover:text-primary">
                {t.nav.fleet}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/industries`}
                aria-label="View our industries"
                className="hover:text-primary"
              >
                {t.nav.industries}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/careers`} aria-label="View career opportunities" className="hover:text-primary">
                {t.nav.careers}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 text-primary uppercase tracking-wider">
            {t.footer.services}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href={`/${locale}/services`} className="hover:text-primary">
                {t.services.fuel.title}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-primary">
                {t.services.water.title}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-primary">
                {t.services.rental.title}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-primary">
                {t.services.construction.title}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 text-primary uppercase tracking-wider">
            {t.footer.contact}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />{" "}
              {t.contact.address}
            </li>
            <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" /> +966559437759
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" /> info@jamelahussin.com
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-1 md:gap-4 mt-1">
            <Link
              className="text-sm text-muted-foreground leading-relaxed"
              href={`/${locale}/privacy`}
            >
              Privacy Policy
            </Link>

            <div className="hidden sm:block w-px h-4 bg-[#4766a9]" />

            <Link
              className="text-sm text-muted-foreground leading-relaxed"
              href={`/${locale}/terms`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container-tight flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>
            © {t.footer.rights}
          </span>
          <span className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-primary" /> Kingdom of Saudi
            Arabia
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
