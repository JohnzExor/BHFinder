import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

const lists = <IBHouse>[
  {
    _id: "2",
    user: "4343",
    title: "Abadiano Boarding House",
    description: "Mag ano ka na please",
    min_price: 3232,
    max_price: 3232,
    location: "yawa",
  },
];

export function GET(request: Request, { params }: { params: Params }) {
  const { id } = params;
  if (id === lists._id) {
    return NextResponse.json({ ok: true, lists });
  }
  return NextResponse.json({ ok: true, message: "not found" });
}
