"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(async () => {
      let data = await fetch("https://dummyjson.com/products");
      data =  await data.json();

      setProduct(data.products);
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      {
        product.map((item) => (
        <h3>Name:{item.title}</h3>
      ))}
    </div>
  );
}
