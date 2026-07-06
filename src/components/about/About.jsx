import Image from 'next/image';
import React from 'react'
import { Card } from '@/components/ui/card';
import { Target, Eye, Heart } from "lucide-react";

const About = ({locale, dict}) => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">{dict.nav.about} </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-5">{dict.about.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{dict.about.lead}</p>
        </div>

        <Image src="/fleet-aramco.jpg" alt="Jameela Hussain fleet" className="rounded-2xl shadow-elegant w-full mb-14" loading="lazy" width={1600} height={900} />

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <p className="text-muted-foreground leading-loose text-lg">{dict.about.p1}</p>
          <p className="text-muted-foreground leading-loose text-lg">{dict.about.p2}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: dict.about.mission, text: dict.about.missionText },
            { icon: Eye, title: dict.about.vision, text: dict.about.visionText },
            { icon: Heart, title: dict.about.values, text: dict.about.valuesText },
          ].map((item, i) => (
            <Card key={i} className="p-8 bg-card gold-border">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;