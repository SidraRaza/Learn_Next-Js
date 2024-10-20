import users from "@/utill/db";
import { NextResponse } from "next/server";

export function GET(request: Request, content: { params: { userid: string } }) {
  // Extract userid from the content
  const userId = parseInt(content.params.userid, 10);

  // Filter user by ID
  const userData = users.filter((item) => item.id === userId);

  // Respond with user data if found, otherwise respond with "User Not Found"
  return NextResponse.json(
    userData.length === 0
      ? { result: "User Not Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}
