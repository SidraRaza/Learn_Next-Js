import { NextResponse } from "next/server";

export  function GET(reguest: any) {
    return NextResponse.json({name:"sidra",age:22},{status:200});
}