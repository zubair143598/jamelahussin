import React from 'react'
import { Card } from '@/components/ui/card';
import { Fuel, Droplets, Truck, HardHat, Package, Clock } from "lucide-react";

const Services = ({ locale, dict }) => {
  const items = [
    { icon: Fuel, key: "fuel" }, { icon: Droplets, key: "water" },
    { icon: Truck, key: "rental" }, { icon: HardHat, key: "construction" },
    { icon: Package, key: "bulk" }, { icon: Clock, key: "emergency" },
  ] 
  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">{dict.nav.services}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-5">{dict.services.title}</h1>
          <p className="text-xl text-muted-foreground">{dict.services.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, key }) => (
            <Card key={key} className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 group shadow-card">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{dict.services[key].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{dict.services[key].desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
