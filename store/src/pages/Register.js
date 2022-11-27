import React from 'react';
import { useState } from 'react'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import LoveInBoxWeb from "../Imagenes/LoveInBoxWeb.jpg";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
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

  const [showPwd, setShowPwd] = useState(false)

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
            <div className="register-space">
              <p className="register-link">
                <label> Al hacer clic en "Register", aceptas <br/> nuestros 
                <a href= "../TermsAndConditions" className="register-a"> Terms And Conditions </a>
                </label>
              </p>
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
            <div className="form-floating mt-3">
               <input type={showPwd ? "text" : "password"} className="register-input" placeholder="Password" id="password" required onChange={(e)=>setPassword(e.target.value)}/>
                <div onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ?
                  <div>
                  <label>Ocultar contraseña</label>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg>
                  </div> 
                  : 
                  <div>
                  <label>Mostrar contraseña</label>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                 </svg>
                 </div>}
               </div>
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