import { getBHouses } from "@/services/BHouse.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await getBHouses();
  return NextResponse.json({ ok: true, data }, { status: 200 });
}
