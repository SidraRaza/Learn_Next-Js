import users from "@/utill/db";
import { log } from "console";
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
export async function PUT(
  request: Request,
  content: { params: { userid: string } }
) {
  let payload = await request.json();

  payload.id = content.params.userid;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { resuult: "All fields is required", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
