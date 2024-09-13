import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../App/Models/product";

interface Props{
    product : Product;
}
export default function productcard({product}:Props) {
    return (
        <Card>
            <CardHeader
               avatar={
                <Avatar>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
               }
                title={product.name}
               
               />
        <CardMedia
          sx={{ height: 140 }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5">
            {product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {product.brand} / {product.type}
           </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    );
}