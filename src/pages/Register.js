import React from 'react';
import { useState } from 'react'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import LoveInBoxWeb from "../Imagenes/LoveInBoxWeb.jpg";
import '../hojas-de-estilo/Register.css';

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [otherinfo, setOtherinfo] = useState("");

  const signup = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
      console.log(auth);
      if(auth){
        navigate("/")}
      }).catch(err=>alert(err.message))}


  return(
    <div className="register-main">
      <div className="register-sub-main ">
        <div>
          <div className="register-imgs">
            <div className="register-container-image">
              <img src={LoveInBoxWeb} alt="LoveInBoxWeb" className="register-profile"/>
            </div>
          </div>
          <div>
            <div>
              <h1>LoveInBox</h1>
            </div>
            <div>
              <input type="text" placeholder="Name" className="register-input"  value={name}  onChange={e=>setName(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Surname" className="register-input"  value={surname}  onChange={e=>setSurname(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="E-Mail" className="register-input"  value={email}  onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Password" className="register-input"  value={password}  onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Address" className="register-input"  value={address}  onChange={e=>setAddress(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Other info" className="register-input"  value={otherinfo}  onChange={e=>setOtherinfo(e.target.value)}></input>
            </div>
            <div className="register-space">
             <button className="register-button" onClick ={signup}>Register</button>
            </div>
            <div className="register-space">
              <p className="register-link">
                <a href= "../login" className="register-a"> Login </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}