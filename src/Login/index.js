import React ,{useState}from "react";
import './style.css';


const Login =()=>{
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    console.log({username});
    console.log({password});

    const handleSubmit= async(a)=>{
        a.preventDefault();
        const data ={
            username:username,
            password:password
        }
    try{
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json' ,
                },
            body: JSON.stringify(data),
          });
          const result =await response.json();
          console.log({result});
        }catch (error){
            console.log(error.message);
         }
    };
    return(
        <div>
            <form className="form"  onSubmit={handleSubmit}>
                <h1>
                    Login
                </h1>
                <input placeholder="Enter Username" type="text"
                 onChange={(a)=>{setUsername(a.target.value)}}
                />
               
                <br/>
                <br/>
                <input placeholder="Enter Password" type="text"
                onChange={(a)=>{setPassword(a.target.value)}}
                />
                <br/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login