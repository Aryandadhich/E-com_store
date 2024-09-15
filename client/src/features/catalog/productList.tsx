import { Grid } from "@mui/material";
import { Product } from "../../App/Models/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
    darkMode: boolean;
}

export default function productList({products}: Props){
      return (
        <Grid container spacing={4}>
        {products.map(product => (
            <Grid item xs={3} key={product.id}>
             <ProductCard product={product} darkMode={false}/>
            </Grid>
            
        ))}
   </Grid>
      )
}