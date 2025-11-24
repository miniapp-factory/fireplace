import { NextResponse } from "next/server";
import { sharedCounter } from "@/lib/sharedCounter";

export async function GET() {
  return NextResponse.json({ count: sharedCounter });
}
