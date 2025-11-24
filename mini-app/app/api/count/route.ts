import { NextResponse } from "next/server";

export let sharedCount = 0;

export async function GET() {
  return NextResponse.json({ count: sharedCount });
}
