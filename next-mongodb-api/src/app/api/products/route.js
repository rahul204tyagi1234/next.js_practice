
import { Product } from "@/lib/connectdb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect({mongodb:"//localhost:27017"})
    const data =await Product.find();
    console.log(data);

    return NextResponse.json({result:true})
}