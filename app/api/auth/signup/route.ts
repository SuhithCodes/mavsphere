import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function POST(req: Request) {
  try {
    const { id, email, password, is_mentor } = await req.json();

    const connection = await mysql.createConnection(dbConfig);

    try {
      await connection.execute(
        "INSERT INTO users (id, email, password, is_mentor) VALUES (?, ?, ?, ?)",
        [id, email, password, is_mentor]
      );

      return NextResponse.json({ message: "User created successfully" });
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY") {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 400 }
        );
      }
      throw error;
    } finally {
      await connection.end();
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
