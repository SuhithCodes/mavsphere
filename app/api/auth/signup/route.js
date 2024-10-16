import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const { id, email, password, is_mentor, firstName, lastName, username } =
      await req.json();

    console.log("signup/route.js: Signup attempt:", {
      id,
      email,
      firstName,
      lastName,
      username,
      is_mentor,
    });

    const hashedPassword = await hash(password, 12);

    try {
      await query(
        `INSERT INTO users (id, email, password, first_name, last_name, username, is_mentor) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, email, hashedPassword, firstName, lastName, username, is_mentor]
      );

      console.log("signup/route.js: User created successfully:", {
        email,
        username,
      });

      return NextResponse.json({
        message: "User created successfully. Please sign in.",
      });
    } catch (error) {
      console.error(
        "signup/route.js: Database error:",
        error.code,
        error.message
      );
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
    console.error("signup/route.js: Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
