import React from 'react'
import { Card } from "@/components/ui/card";
import Image from 'next/image';

const Fleet = ({locale, dict}) => {
   const items = [
    { key: "mp5", img: "/hero-truck.jpg" }, { key: "mp4", img: "/fleet-aramco.jpg" },
    { key: "fuelTanker", img: "/construction.jpg" }, { key: "waterTanker", img: "/water-tanker.jpg" },
  ] 
  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">{dict.nav.fleet}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-5">{dict.fleet.title}</h1>
          <p className="text-xl text-muted-foreground">{dict.fleet.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map(({ key, img }) => (
            <Card key={key} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group shadow-card">
              <div className="aspect-16/10 overflow-hidden">
                <Image src={img} alt={dict.fleet[key].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1200} height={750} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold mb-3 text-primary">{dict.fleet[key].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{dict.fleet[key].desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;