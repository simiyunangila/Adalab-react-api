import React ,{useState, useEffect} from "react";
import './index.css'


const Products=()=>{
    const[products, setProducts] = useState([]);
    const [loading,setLoading] =useState(false);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })();

    },[])

    console.log({Products});
    const getProducts = async ()=>{
        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products')
            const result =await response.json()
            setProducts(result.products);
            setLoading(false);
        }catch(error){
console.log(error.message);
        }
    }
    if (loading) {
        return <h2>Loading.....</h2>
    }
    return(
        <div  className="pics" >
            <h1>All Products</h1>
            {products.map(item =>(
                <div key ={item.id}>
                <h2>{item.title}</h2>
                <img src={item.images[0]} alt={item.title}/><br></br>
                <label>Category:{item.category}</label>
                <label>Brand:{item.brand}</label>
                <p>Description:{item.description}</p>
                </div>
            ))}
        </div>
    );
       
    
};
export default Products;