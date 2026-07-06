import { z } from "zod";

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(255, "Email cannot exceed 255 characters."),

  phone: z
    .string()
    .trim()
    .min(6, "Phone number must be at least 6 characters.")
    .max(30, "Phone number cannot exceed 30 characters."),

  company: z
    .string()
    .trim()
    .max(150, "Company name cannot exceed 150 characters.")
    .optional(),

  service_type: z
    .string()
    .trim()
    .min(1, "Please select a service.")
    .max(100),

  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters.")
    .max(2000, "Message cannot exceed 2000 characters."),
});