import { postBHouse } from "@/services/BHouse.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, imgUrl, title, description, minPrice, maxPrice, location } =
    await request.json();

  if (!title || !description || !minPrice || !maxPrice || !location) {
    return NextResponse.json(
      { ok: false, message: "Fill all the blanks" },
      { status: 200 }
    );
  }

  const post = await postBHouse({
    userId,
    imgUrl,
    title,
    description,
    minPrice,
    maxPrice,
    location,
  });

  if (!post) {
    return NextResponse.json(
      { ok: false, message: "Post error" },
      { status: 200 }
    );
  }
  return NextResponse.json({ ok: true, data: post }, { status: 200 });
}
