import React, { useContext, useEffect } from 'react'
import './loginpop.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const loginpop = ({ setShowLogin }) => {
    const {url,token,setToken}= useContext(StoreContext)
    const [currentstate, setCurrentstate] = useState("Login")
    const [data, setdata] = useState({
        name: "",
        email: "",
        password:""
    })
    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata(data=>({...data,[name]:value}))
    }
   
    const onLogin = async (event) => {
        event.preventDefault();
        let newURL = url;
        if (currentstate === "Login") {
            newURL +="/api/user/login";
        } else {
            newURL += "/api/user/register";
        }
          
        try {
            const response = await axios.post(newURL, data);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                console.log("successfull login")
                setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error during authentication", error);
            alert("An error occurred during the authentication process. Please try again.");
        }
    };
   
  return (
    <div className='login-pop'>
          <form onSubmit={onLogin} action="" className="Login-pop-container">
              <div className="login-pop-title">
                  <h2>{currentstate}</h2>
                  <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
              </div>
              <div className="login-pop-input">
                  {currentstate==="Login"?<></>: <input name='name' onChange={onchangeHandler} value= {data.name} type="text" placeholder='Your name' required /> }
                 
                  <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                  <input name='password' onChange={onchangeHandler} value={data.password} type="password" placeholder='Password' required />
              </div>
              <button type='submit'>{currentstate === "Sign Up" ? "create account" : "Login"}</button>
              <div>
                  <div className="login-pop-condition">
                      <input type="checkbox" required />
                      <p>By continuing , I agree to the TnC</p>
                  </div>
                  {currentstate == "Login" ?
                      <p>create a new account ?<span onClick={()=>setCurrentstate("Sign Up")}>Click Here</span></p> :
                      <p>Already have an account <span onClick={()=>setCurrentstate("Login")}>Login Here</span></p>}
                 
               
              </div>
      </form>
    </div>
  )
}

export default loginpop
