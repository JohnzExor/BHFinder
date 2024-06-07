import { getBHousePostedByUser } from "@/services/BHouse.service";
import { getUserProfile } from "@/services/User.service";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Params }) {
  const { userId } = params;
  if (userId) {
    const user = await getUserProfile(userId);
    const bHouses = await getBHousePostedByUser(userId);
    return NextResponse.json(
      {
        ok: true,
        data: {
          user,
          bHouses,
        },
      },
      { status: 200 }
    );
  }
  return NextResponse.json({ ok: false }, { status: 200 });
}
