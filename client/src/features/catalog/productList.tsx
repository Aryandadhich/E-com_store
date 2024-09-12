import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../App/Models/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
}

export default function productList({products}: Props){
      return (
        <Grid container spacing={4}>
        {products.map(product => (
            <Grid item xs={4}>
             <ProductCard key = {product.id} product={product}/>
            </Grid>
            
        ))}
   </Grid>
      )
}