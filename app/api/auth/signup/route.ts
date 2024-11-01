import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { id, email, password, is_mentor, firstName, lastName, username } =
      await req.json();

    try {
      await query(
        `INSERT INTO users (id, email, password, first_name, last_name, username, is_mentor) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, email, password, firstName, lastName, username, is_mentor]
      );

      return NextResponse.json({ message: "User created successfully" });
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY") {
        if (error.message.includes("email")) {
          return NextResponse.json(
            { error: "Email already exists" },
            { status: 400 }
          );
        } else if (error.message.includes("username")) {
          return NextResponse.json(
            { error: "Username already exists" },
            { status: 400 }
          );
        }
      }
      throw error;
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
