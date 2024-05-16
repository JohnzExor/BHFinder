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

export function GET(request: Request) {
  return NextResponse.json({ ok: true, lists }, { status: 200 });
}
