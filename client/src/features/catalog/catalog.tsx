import { Product } from "../../App/Models/product";
import { Button } from "@mui/material";
import ProductList from "./productList";

interface Props{
    products: Product[];
    addProduct : () => void;
}
 export default function Catalog({products, addProduct} : Props ){
    return (
        <>
        <ProductList products ={products} />
       <Button variant='contained'  onClick={addProduct}>Add product</Button>
        </>
    )
 }