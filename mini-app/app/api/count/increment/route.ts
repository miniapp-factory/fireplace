import { NextResponse } from "next/server";
import { sharedCounter } from "@/lib/sharedCounter";

export async function POST() {
  sharedCounter += 1;
  return NextResponse.json({ count: sharedCounter });
}
