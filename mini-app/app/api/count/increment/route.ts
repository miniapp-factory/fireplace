import { NextResponse } from "next/server";
import { sharedCount } from "../route";

export async function POST() {
  sharedCount += 1;
  return NextResponse.json({ count: sharedCount });
}
