import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Events";

export async function GET() {
  await dbConnect();
  try {
    const events = await Event.find();
    return NextResponse.json({
      msg: events,
    });
  } catch (error) {
    console.log("Error while fetching the data", error);
    return NextResponse.json({
      msg: "Error while fetching the data",
    });
  }
  return NextResponse.json({
    msg: "db connection check",
  });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { title, category, img, date } = await req.json();

    if (!title) {
      return NextResponse.json({
        msg: "title is required",
      });
    }

    const newEvent = new Event({ title, category, date, img });
    await newEvent.save();

    return NextResponse.json({
      msg: `${title} ${category}`,
    });
  } catch (error) {
    console.log("Error while post", error);
    return NextResponse.json({
      msg: "Invalid body request",
    });
  }
}
