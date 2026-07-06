import React from 'react'
import { Card } from "@/components/ui/card";
import { Factory, Fuel, HardHat, Building2, Droplets, MapPin } from "lucide-react";

const Industries = ({locale, dict}) => {
  const items = [
    { icon: Fuel, key: "aramco" }, { icon: Building2, key: "stations" },
    { icon: HardHat, key: "construction" }, { icon: Factory, key: "industrial" },
    { icon: Droplets, key: "municipal" }, { icon: MapPin, key: "events" },
  ];
  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">{dict.industries.title}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-5">{dict.industries.title}</h1>
          <p className="text-xl text-muted-foreground">{dict.industries.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, key }) => (
            <Card key={key} className="p-8 bg-card border-border hover:border-primary/50 transition-all flex items-center gap-5 shadow-card">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center shadow-gold shrink-0">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">{dict.industries[key]}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;