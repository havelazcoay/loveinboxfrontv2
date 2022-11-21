import React from 'react';
import { useNavigate } from "react-router-dom";
import '../hojas-de-estilo/UpdateUser.css';

export const UpdateUser = () => {

    const navigate = useNavigate()

  return(
    <div className="updateuser-main">
        <div>
            <div>
              <input type="text" placeholder="Name" className="updateuser-input"></input>
            </div>
            <div className="updateuser-space">
              <input type="text" placeholder="Surname" className="updateuser-input"></input>
            </div>
            <div className="updateuser-space">
              <input type="text" placeholder="E-Mail" className="updateuser-input"></input>
            </div>
            <div className="updateuser-space">
              <input type="text" placeholder="Password" className="updateuser-input"></input>
            </div>
            <div className="updateuser-space">
              <input type="text" placeholder="Address" className="updateuser-input"></input>
            </div>
            <div className="updateuser-space">
             <button className="updateuser-button" onClick ={() => navigate("/profile")}>Update Data</button>
            </div>
        </div>
    </div>
  );
}