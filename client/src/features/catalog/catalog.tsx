import { Fragment } from "react/jsx-runtime";
import { Product } from "../../App/Models/product";

interface Props{
    products: Product[];
    addProduct : () => void;
}
 export default function Catalog({products, addProduct} : Props ){
    return (
        <Fragment>
            <ul>
                 {products.map(product => (
                <li key={product.id}>
                 {product.name} - {product.price}</li>
              ))}
            </ul>
       <button onClick={addProduct}>Add product</button>
        </Fragment>
    )
 }