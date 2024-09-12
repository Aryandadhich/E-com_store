import { useState, useEffect } from "react";
import Catalog from "../../features/catalog/catalog";
import { Product } from "../Models/product";
import { Container, CssBaseline, Typography } from "@mui/material";
import Header from "./Header";
// Assuming this is where the Product interface is defined

function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 101,
      name: "product 1",
      price: 100,
      brand: "Brand A",
      description: "Description of product 1",
      pictureUrl: "http://example.com/product1.jpg",
      type: "Type A",
    },
    {
      id: 102,
      name: "product 2",
      price: 200,
      brand: "Brand B",
      description: "Description of product 2",
      pictureUrl: "http://example.com/product2.jpg",
      type: "Type B",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some brand",
        description: "some information",
        pictureUrl: "http://pucsum.photos/200",
        type: "some type",
      },
    ]);
  }

  return (
    <>
    <CssBaseline/>
      <Header/>
      <Container >
      <Catalog products={products} addProduct={addProduct} />
      </Container>
      
    </>
  );
}

export default App;
