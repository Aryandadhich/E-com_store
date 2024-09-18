import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../App/Models/product";

export default function ProductDetails(){
    const {id} = useParams<{ id: string; }>();
    const [product, setproduct] = useState<Product | null>(null); 
    const [loading, setloading] = useState(true);

    useEffect(() =>{
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then(response => setproduct(response.data))
        .catch(error => console.log(error))
        .finally(() => setloading(false));
    },[id])
     
    if(loading) return <h3>Loading...</h3>

    if(!product) return <h3>Product not found</h3>

    return(
    <Typography variant="h2">
       {product.name}
    </Typography>
    )
}