import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../App/Models/product";

interface Props{
    product : Product;
}
export default function productcard({product}:Props) {
    return (
        <ListItem key={product.id}>
        <ListItemAvatar>
           <Avatar src={product.pictureUrl}/> 
       </ListItemAvatar> 
       <ListItemText >{product.name} - {product.price}</ListItemText>
       </ListItem>
    )
}