import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Events";
export function GET() {
  dbConnect();
  return NextResponse.json({
    msg: "db connection check",
  });
}

export async function POST(req: NextRequest) {
  dbConnect();
  try {
    const { title, description, img, date } = await req.json();

    if (!title) {
      return NextResponse.json({
        msg: "title is required",
      });
    }

    const newEvent = new Event({ title, description, date, img });
    await newEvent.save();

    return NextResponse.json({
      msg: `${title} ${description}`,
    });
  } catch (error) {
    console.log("Error while post", error);
    return NextResponse.json({
      msg: "Invalid body request",
    });
  }
}
