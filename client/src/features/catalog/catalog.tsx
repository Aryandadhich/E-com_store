import { Product } from "../../App/Models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

interface Props {
  darkMode: boolean;
}

 export default function Catalog( { darkMode }: Props) {
    const [products, setProducts] = useState<Product[]>([
      ]);
    
      useEffect(() => {
        fetch("http://localhost:5000/api/products")
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);
    
    return (
        <>
        <ProductList products ={products}  darkMode={darkMode} />
        </>
    )
 }