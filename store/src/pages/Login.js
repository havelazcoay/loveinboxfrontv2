import React from 'react'
import { useState } from 'react'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import LoveInBoxWeb from "../Imagenes/LoveInBoxWeb.jpg"
import '../hojas-de-estilo/Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((auth) =>{
      console.log(auth);
      if(auth){
        navigate("/")}
      }).catch(err=>alert(err.message))}

  
  return(
    <div className="login-main">
      <div className="login-sub-main">
        <div>
          <div className="login-imgs">
            <div className="login-container-image">
              <img src={LoveInBoxWeb} alt="LoveInBoxWeb" className="login-profile"/>
            </div>
          </div>
          <div>
            <div>
              <h1>LoveInBox</h1>
            </div>
            <div>
              <input type="text" placeholder="E-Mail"  className="login-input"  value={email}  onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <div className="login-space">
              <input type="text" placeholder="Password"  className="login-input"  value={password}  onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div className="login-space">
             <button onClick ={signin} className="login-button">Login</button>
            </div>
            <div className="login-space">
              <p className="login-link">
                <a href="../ForgotPassword" className="login-a"> Forgot password ? </a> or <a href= "../register" className="login-a"> Register </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}