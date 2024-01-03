import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(req, res) {
  const data = user;
  const userData = data.filter((item) => item.userid == res.params.userid);
  return NextResponse.json(
    userData.length == 0
      ? { result: "User Not Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}

export async function PUT(req,res){
  let payload = await req.json();
  payload.id=res.params.userid;

  console.log(payload)

  return NextResponse.json({result:payload,success:true},{status:200})

}
