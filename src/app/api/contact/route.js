import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Contact from "@/models/contact.model";

import { contactSchema } from "@/zod/contact.validation";

export async function POST(request) {
  try {
    const body = await request.json();

    const validated = contactSchema.parse(body);

    await connectDB();

    const contact = await Contact.create(validated);

    return NextResponse.json(
      {
        success: true,
        data: contact,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}