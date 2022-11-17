import React from 'react';
import { useState } from 'react'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import LoveInBoxWeb from "../Imagenes/LoveInBoxWeb.jpg";
import { db } from "../firebase";
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import '../hojas-de-estilo/Register.css';

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const usersCollectionsRef = collection(db, "users");
  

  const signup = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
      console.log(auth);
      if(auth){
        navigate("/")}
      }).catch(err=>alert(err.message))}
  
  const createUser = async () =>{
    await addDoc(usersCollectionsRef, {name: name, surname: surname, email: email, address: address});
    };

  const register = (e) =>{
    signup(e);
    createUser();
    };


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
              <input type="text" placeholder="Name" className="register-input"    onChange={(event) =>{setName(event.target.value);}}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Surname" className="register-input"    onChange={(e)=>setSurname(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="E-Mail" className="register-input"    onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Password" className="register-input"    onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div className="register-space">
              <input type="text" placeholder="Address" className="register-input"    onChange={(e)=>setAddress(e.target.value)}></input>
            </div>
            <div className="register-space">
             <button className="register-button" onClick ={register}>Register</button>
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