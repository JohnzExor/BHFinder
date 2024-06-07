import { getBHRooms, getBHouse, postRoom } from "@/services/BHouse.service";
import { getUserProfile } from "@/services/User.service";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Params }) {
  const { id } = params;
  const bhouse = await getBHouse(id);
  const rooms = await getBHRooms(bhouse?.id);
  const user = await getUserProfile(bhouse?.userId);
  return NextResponse.json(
    { ok: true, data: { bhouse, rooms, user } },
    { status: 200 }
  );
}

export async function POST(request: Request, { params }: { params: Params }) {
  const { id } = params;
  const { listingId, roomNumber, price, isAvailable } = await request.json();
  if (!id || !listingId || !roomNumber || !price || !isAvailable) {
    return NextResponse.json(
      { ok: false, message: "Fill all the blanks!" },
      { status: 200 }
    );
  }
  const post = await postRoom({ listingId, roomNumber, price, isAvailable });
  return NextResponse.json(
    {
      ok: true,
      data: post,
    },
    { status: 200 }
  );
}
