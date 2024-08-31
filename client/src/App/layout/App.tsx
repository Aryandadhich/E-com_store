import { useState , useEffect} from "react";

function App(){
  const [products, setProducts] = useState([
    {name: 'product1' , price:100},
    {name: 'product2' , price:200}
 ]);

 //if we dont use dependency then use effect going to 
 //run every time our component renders 
 //we are going to stuck in endless loop if we dot put dependency here in useeffect
 useEffect(() => {
    fetch('http://localhost:5000/api/products')
   .then(response => response.json())
   .then(data => setProducts(data))
 }, [])
 
 
 //...products is spread operator we are taking 2 item in this array 
 // and spreding them across
 function addProduct(){
  setProducts(prevState => [...prevState, 
    { id: prevState.length + 101,
      name: 'product'+ (prevState.length + 1),
     price : (prevState.length*100)+100,
     brand : 'some brand',
     description : 'some information',
     pictureUrl : 'http://pucsum.photos/200'
    }])

    }
  return (
      <div>
        <h1>Re-store</h1>
        <ul>
           {products.map((item,index) => (
            <li key={index}>
            {item.name} - {item.price}</li>
          ))}
        </ul>
        <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;