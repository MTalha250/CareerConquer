import dbConnect from "@/lib/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/job";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const { title, description, state, address, phone } = await request.json();
    const job = await Job.create({
      title,
      description,
      state,
      address,
      phone,
    });
    return NextResponse.json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to create job",
    });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      jobs,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
}
