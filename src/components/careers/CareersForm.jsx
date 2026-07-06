"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { careerSchema } from "@/zod/career.validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

import { toast } from "sonner";

export default function CareersForm({
  locale,
  dict,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(careerSchema),

     mode: "onBlur",

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/careers", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            dict?.quote?.error ||
            "Something went wrong."
        );
      }

      toast.success(
        dict?.careers?.success ||
          "Application submitted successfully."
      );

      reset();
    } catch (error) {
      toast.error(
        error.message ||
          dict?.quote?.error ||
          "Something went wrong."
      );
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        {/* Header */}

        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            {dict.nav.careers}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
            {dict.careers.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-3">
            {dict.careers.subtitle}
          </p>

          <p className="text-muted-foreground">
            {dict.careers.intro}
          </p>
        </div>

        {/* Form */}

        <Card className="p-8 md:p-10 bg-card  gold-border!">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              {/* Name */}

              <div>
                <Label htmlFor="name">
                  {dict.quote.name} *
                </Label>

                <Input
                  id="name"
                  {...register("name")}
                  placeholder={dict.quote.name}
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <Label htmlFor="email">
                  {dict.quote.email} *
                </Label>

                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder={dict.quote.email}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}

              <div>
                <Label htmlFor="phone">
                  {dict.quote.phone} *
                </Label>

                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder={dict.quote.phone}
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Position */}

              <div>
                <Label htmlFor="position">
                  {dict.careers.position} *
                </Label>

                <Input
                  id="position"
                  {...register("position")}
                  placeholder={dict.careers.position}
                />

                {errors.position && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.position.message}
                  </p>
                )}
              </div>
            </div>

            {/* Experience */}

            <div>
              <Label htmlFor="experience">
                {dict.careers.experience}
              </Label>

              <Input
                id="experience"
                {...register("experience")}
                placeholder={dict.careers.experience}
              />

              {errors.experience && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Cover Letter */}

            <div>
              <Label htmlFor="message">
                {dict.careers.coverLetter}
              </Label>

              <Textarea
                id="message"
                rows={6}
                {...register("message")}
                placeholder={dict.careers.coverLetter}
              />

              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}

            <Button
              type="submit"
              variant="hero"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting
                ? dict.common.sending
                : dict.common.submit}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}