import { NextResponse } from "next/server";
import { incrementCounter } from "@/lib/sharedCounter";

export async function POST() {
  const newCount = incrementCounter();
  return NextResponse.json({ count: newCount });
}
