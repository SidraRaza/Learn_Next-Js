import user from "@/utill/db";
import { NextResponse } from "next/server";
export  function GET(request: any,content: any) {
   
  const userData=user.filter((item)=>item.id==content.params.userid)
  return NextResponse.json(userData.length===0?{result:"User Not Found" ,sucess:false}:{result:userData,sucess:true},{
    status:200})
}