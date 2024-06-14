import dbConnect from "@/lib/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/job";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { title, description, state, address, phone, candidates } =
    await request.json();
  await dbConnect();
  try {
    const job = await Job.findByIdAndUpdate(id, {
      title,
      description,
      state,
      address,
      phone,
      candidates,
    });
    return NextResponse.json({
      success: true,
      message: "Job updated successfully",
      job,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to update job",
    });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const { id } = params;
    await Job.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to delete job",
    });
  }
}
