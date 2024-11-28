import { NextResponse } from "next/server";


export async function GET(reguest: any, content: any) {
 
    const studentDetails = content.params.student;
    console.log(studentDetails);
    
    return  NextResponse.json({result:studentDetails},{status:200});
   
}