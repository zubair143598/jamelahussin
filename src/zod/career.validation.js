import { z } from "zod";

export const careerSchema = z.object({
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

  position: z
    .string()
    .trim()
    .min(2, "Position is required.")
    .max(100, "Position cannot exceed 100 characters."),

  experience: z
    .string()
    .trim()
    .max(50, "Experience cannot exceed 50 characters.")
    .optional(),

  message: z
    .string()
    .trim()
    .max(2000, "Cover letter cannot exceed 2000 characters.")
    .optional(),
});