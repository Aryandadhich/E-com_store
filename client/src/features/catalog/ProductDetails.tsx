import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(){
    useParams<{ id: string; }>();

    useEffect(() =>{
        axios.get(`http://localhost:5000/api/products`)
    })
    return(
    <Typography variant="h2">
        Product Detail
    </Typography>
    )
}