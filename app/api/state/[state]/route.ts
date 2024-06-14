import dbConnect from "@/lib/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/job";

export async function GET(
  request: NextRequest,
  { params }: { params: { state: string } }
) {
  await dbConnect();
  try {
    const { state } = params;
    const jobs = await Job.find({ state }).sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch jobs",
      error,
    });
  }
}
