import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function PUT(request,contant){
    const productId=contant.params.productid;
    const filter={_id:productId}
    const payload= await request.json();
    console.log(payload);
    await mongoose.connect("mongodb://localhost:27017")
    const result= await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(request,contant){
    const productId=contant.params.productid;
    const filter={_id:productId}
    await mongoose.connect("mongodb://localhost:27017")
    const result= await Product.findById(filter)
    return NextResponse.json({result,success:true})
}