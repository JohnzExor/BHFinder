import { postUserData } from "@/services/User.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, email, password } = await request.json();
  if (!username || !email || !password) {
    return NextResponse.json(
      { ok: true, message: "Fill the blanks" },
      { status: 203 }
    );
  }

  const post = await postUserData({ username, email, password });

  if (post) {
    return NextResponse.json(
      { ok: true, message: "Account creation success", post },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { ok: false, message: "Error", post },
    { status: 203 }
  );
}
