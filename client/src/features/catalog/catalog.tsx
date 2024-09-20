import agent from "../../App/api/agent";
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
        agent.Catalog.list().then(products => setProducts(products))
      }, []);
    
    return (
        <>
        <ProductList products ={products}  darkMode={darkMode} />
        </>
    )
 }