"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { quoteSchema } from "@/zod/quote.validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuoteForm({ locale, dict }) {
  const services = [
    "fuel",
    "water",
    "rental",
    "construction",
    "bulk",
    "emergency",
  ];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(quoteSchema),

    mode: "onBlur",

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service_type: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/quote", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || dict.quote.error);
      }

      toast.success(dict.quote.success);

      reset();
    } catch (error) {
      toast.error(error.message || dict.quote.error);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            {dict.nav.quote}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
            {dict.quote.title}
          </h1>

          <p className="text-xl text-muted-foreground">{dict.quote.subtitle}</p>
        </div>

        <Card className="p-8 md:p-10 bg-card gold-border">
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

              <div>
                <Label>{dict.quote.phone} *</Label>

                <Input {...register("phone")} />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label>{dict.quote.company}</Label>

                <Input {...register("company")} />

                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label>{dict.quote.service} *</Label>

              <Controller
                control={control}
                name="service_type"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={dict.quote.servicePlaceholder}
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {dict.services[service].title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.service_type && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.service_type.message}
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
  );
}
