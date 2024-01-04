import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(req, res) {
  const data = user;
  const userData = data.filter((item) => item.userid == res.params.userid);
  return NextResponse.json(
    userData.length == 0
      ? { result: "User Not Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(req,res){
  let payload = await req.json();
  payload.id=res.params.userid;

  console.log(payload)
  if(!payload.id || !payload.name || !payload.age || !payload.email){
    return NextResponse.json({result:"your data is not vaild",success:false},{status:400})

  }

  return NextResponse.json({result:payload,success:true},{status:200})

}

export function DELETE(req,content){
  let id = content.params.userid;
  if(id){
    return NextResponse.json({result:"User Deleted",success:true,},{status:200})
  }else{
    return NextResponse.json({result:"Internal error",success:false},{status:400});
  }
}
