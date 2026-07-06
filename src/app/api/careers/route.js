import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Career from "@/models/career.model";
import { careerSchema } from "@/zod/career.validation";

export async function POST(request) {
  try {
    const body = await request.json();

    const validated = careerSchema.parse(body);

    await connectDB();

    const career = await Career.create(validated);

    return NextResponse.json(
      {
        success: true,
        data: career,
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