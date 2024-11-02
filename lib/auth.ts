import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function authenticatedRoute(
  handler: (req: Request) => Promise<Response>,
  req: Request
) {
  const session = await getServerSession(authOptions as any);

  if (!session) {
    return NextResponse.json(
      { error: "You must be logged in." },
      { status: 401 }
    );
  }

  return handler(req);
}

// Usage in an API route:
export async function GET(req: Request) {
  return authenticatedRoute(async (req) => {
    // Your protected API logic here
    return NextResponse.json({ data: "Protected data" });
  }, req);
}
