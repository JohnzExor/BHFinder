import { getStatistics } from "@/services/BHouse.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // return NextResponse.json({ ok: true });
  const data = await getStatistics();
  if (!data) {
    return NextResponse.json({ ok: false, message: "Error" }, { status: 400 });
  }
  return NextResponse.json(
    { ok: true, message: "GET Success", data },
    { status: 200 }
  );
}
