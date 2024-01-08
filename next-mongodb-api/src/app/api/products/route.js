import { Product} from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success=true

  try {
    await mongoose.connect("mongodb://localhost:27017");
    data = await Product.find();
    console.log(data);
  } catch (error) {
    data={result:"error"}
    success= false;
  }

  return NextResponse.json({ result: data, success });
}

export async function POST(request){
    const payload= await request.json();
    await mongoose.connect("mongodb://localhost:27017");
    let product= new Product(payload);
    const result=await product.save();
    return NextResponse.json({result,success:true})
}
