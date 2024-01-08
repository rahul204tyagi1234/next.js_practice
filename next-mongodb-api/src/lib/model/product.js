import mongoose from "mongoose";
import { Anybody } from "next/font/google";


const productModel = new mongoose.Schema({
    name:String,
    age:String,
    gender:String,
    salary:String
 })
 export const Product= mongoose.models.userdatas || mongoose.model("userdatas",productModel)