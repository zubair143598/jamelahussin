import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  Fuel,
  Droplets,
  Truck,
  HardHat,
  Package,
  Clock,
  ArrowRight,
  Shield,
  Award,
  MapPin,
} from "lucide-react";

export default function HomeSection({ locale, dict }) {
  const services = [
    { icon: Fuel, key: "fuel" },
    { icon: Droplets, key: "water" },
    { icon: Truck, key: "rental" },
    { icon: HardHat, key: "construction" },
    { icon: Package, key: "bulk" },
    { icon: Clock, key: "emergency" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-truck.jpg"
            alt="Jameela Hussain Mercedes Actros tanker on Saudi highway"
            fill
            priority
            className="object-cover"
            // width={1920}
            // height={1080}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-tight relative z-10 py-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5 gold-border rounded-full px-4 py-1.5">
              {dict.hero.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              {dict.hero.title.split(",")[0]},
              <br />
              <span className="text-gradient-gold">
                {dict.hero.title.split(",").slice(1).join(",")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link href={`/${locale}/quote`}>
                  {dict.hero.cta1}
                  <ArrowRight className="rtl:rotate-180" />
                </Link>
              </Button>

              <Button asChild variant="outlineGold" size="xl">
                <Link href={`/${locale}/services`}>{dict.hero.cta2}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card/40">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "15+", k: "fleet" },
            { v: "15+", k: "years" },
            { v: "500M+", k: "delivered" },
            { v: "100%", k: "coverage" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {s.v}
              </div>

              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                {dict.stats[s.k]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container-tight">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {dict.services.title}
            </h2>

            <p className="text-muted-foreground text-lg">
              {dict.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, key }) => (
              <Card
                key={key}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 shadow-card"
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {dict.services[key].title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {dict.services[key].desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/fleet-aramco.jpg"
              alt="Jameela Hussain fleet at Aramco terminal"
              className="rounded-2xl shadow-elegant w-full"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 665px"
              priority
            />
          </div>

          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              {dict.nav.about}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              {dict.about.title}
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {dict.about.lead}
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {dict.about.p1}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[Shield, Award, MapPin].map((Icon, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-secondary/50 gold-border"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />

                  <div className="text-xs font-semibold">
                    {[dict.about.values, "Aramco", dict.stats.coverage][i]}
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="outlineGold">
              <Link href={`/${locale}/about`}>
                {dict.common.learnMore}
                <ArrowRight className="rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-tight">
          <div className="rounded-3xl gradient-gold p-12 md:p-16 text-center shadow-gold">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              {dict.hero.cta1}
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              {dict.quote.subtitle}
            </p>

            <Button
              asChild
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href={`/${locale}/quote`}>{dict.common.getQuote}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
