import dbConnect from "@/lib/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/job";

export async function GET(
  request: NextRequest,
  { params }: { params: { query: string } }
) {
  await dbConnect();
  try {
    const { query } = params;
    const jobs = await Job.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { state: { $regex: query, $options: "i" } },
        { address: { $regex: query, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });
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
