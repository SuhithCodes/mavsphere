import dbConfig from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!type) {
      return NextResponse.json(
        { error: "Type parameter is required" },
        { status: 400 }
      );
    }

    const [rows] = await dbConfig.query(
      "SELECT * FROM roadmaps WHERE type = ?",
      [type]
    );

    console.log("roadmaps/route.ts : API response:", rows);
    return NextResponse.json(Array.isArray(rows) ? rows : []);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
