import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Quote from "@/models/quote.model";

import { quoteSchema } from "@/zod/quote.validation";

export async function POST(request) {
  try {
    const body = await request.json();

    const validated = quoteSchema.parse(body);

    await connectDB();

    const quote = await Quote.create(validated);

    return NextResponse.json(
      {
        success: true,
        data: quote,
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