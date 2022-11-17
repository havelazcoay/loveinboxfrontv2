import React from 'react'
import { useNavigate } from "react-router-dom";
import LoveInBoxWeb from "../Imagenes/LoveInBoxWeb.jpg"
import '../hojas-de-estilo/ForgotPassword.css';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  
  return(
    <div className="forgotpassword-main">
      <div className="forgotpassword-sub-main">
        <div>
          <div className="forgotpassword-imgs">
            <div className="forgotpassword-container-image">
              <img src={LoveInBoxWeb} alt="LoveInBoxWeb" className="forgotpassword-profile"/>
            </div>
          </div>
          <div>
            <div>
              <h1>LoveInBox</h1>
            </div>
            <div>
              <input type="text" placeholder="Enter New Password" className="forgotpassword-input"></input>
            </div>
            <div className="forgotpassword-space">
              <input type="text" placeholder="Confirm New Password" className="forgotpassword-input"></input>
            </div>
            <div className="forgotpassword-space">
             <button onClick ={() => navigate("/start")} className="forgotpassword-button">Change Password</button>
            </div>
            <div className="forgotpassword-space">
              <p className="forgotpassword-link">
                <a href="../login" className="forgotpassword-a"> Login </a> or <a href= "../register" className="forgotpassword-a"> Register </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}