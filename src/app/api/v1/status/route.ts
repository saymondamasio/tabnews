import { NextResponse } from "next/server";

async function status(req: Request) {
  return NextResponse.json({ chave: "valor" }, { status: 200 });
}

export const GET = status;
