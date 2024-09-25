import agent from "../../App/api/agent";
import LoadingComponent from "../../App/layout/LoadingComponent";
import { Product } from "../../App/Models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

interface Props {
  darkMode: boolean;
}

 export default function Catalog( { darkMode }: Props) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setloading] = useState(true);

    
      useEffect(() => {
        agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setloading(false))
      }, []);
    
      if (loading) return <LoadingComponent message="Loading products ..." />
    return (
        <>
        <ProductList products ={products}  darkMode={darkMode} />
        </>
    )
 }