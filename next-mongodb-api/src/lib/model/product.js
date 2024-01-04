import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name:String,
    age:Number
 })
 export const Product= mongoose.models.add-Data || mongoose.model("add-Data",productModel)