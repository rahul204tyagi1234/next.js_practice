import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data,{status:200});
}
export async function POST(req){
  let payload = await req.json();
  console.log(payload.name);
  if(!payload.name || !payload.Age || !payload.email ){
    return NextResponse.json({result:"Require feilds not found",success:false},{status:400})

  }
  return NextResponse.json({result:"New user created",success:true},{status:200})
}