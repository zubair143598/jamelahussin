"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

import { contactSchema } from "@/zod/contact.validation";

export default function ContactForm({ locale, dict }) {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),

    mode: "onBlur",

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const items = [
    {
      icon: MapPin,
      label: dict.contact.address,
      value: "Al Quaryyat, KSA",
    },
    {
      icon: Phone,
      label: dict.contact.phone,
      value: "+966559437759",
    },
    {
      icon: Mail,
      label: dict.contact.email,
      value: "info@jamelahussin.com",
    },
    {
      icon: Clock,
      label: dict.contact.hours,
      value: dict.contact.hoursValue,
    },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success(dict.contact.success);

      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            {dict.nav.contact}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
            {dict.contact.title}
          </h1>

          <p className="text-xl text-muted-foreground">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ icon: Icon, label, value }, index) => (
              <Card
                key={index}
                className="p-6 bg-card gold-border! flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {label}
                  </div>

                  <div className="font-semibold">{value}</div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-3 p-8 bg-card gold-border!">
            <h2 className="text-2xl font-bold mb-6">
              {dict.contact.formTitle}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label>{dict.quote.name} *</Label>

                  <Input {...register("name")} />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>{dict.quote.email} *</Label>

                  <Input type="email" {...register("email")} />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label>{dict.quote.phone}</Label>

                <Input {...register("phone")} />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label>{dict.quote.message} *</Label>

                <Textarea rows={6} {...register("message")} />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? dict.common.sending : dict.common.submit}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
