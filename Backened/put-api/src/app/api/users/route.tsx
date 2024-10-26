import user from "@/utill/db";
import { NextResponse } from "next/server";



export  function GET() {
  const data=user;
  return NextResponse.json(data,{
    status:200})
}
export async  function POST(request:any) {
  let payload=await request.json();
  console.log(payload.name);
  if(!payload.name || !payload.age || !payload.email){
    return NextResponse.json({resuult:"All fields is required",success:false},{status:400})
  }
  
  return NextResponse.json({resuult:"New user created",success:true},{status:201})
}