import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../App/Models/product";
import ProductCard from "./productCard";

interface Props{
    products: Product[];
}

export default function productList({products}: Props){
      return (
        <List>
        {products.map(product => (
            <ProductCard key = {product.id} product={product}/>
        ))}
   </List>
      )
}