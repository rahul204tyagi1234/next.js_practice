import { NextResponse } from "next/server";

export async function GET(request,content){
    const studentDetaials= content.params.student;
    console.log(studentDetaials);
    return NextResponse.json({result:studentDetaials},{status:200})
}