import React from 'react';
import { useNavigate } from "react-router-dom";
import LoveInBoxWebjpg from "../Imagenes/LoveInBoxWeb.jpg";
import LoveInBoxWebpng from "../Imagenes/LoveInBoxWeb.png";
import '../hojas-de-estilo/Account.css';

export const Account = () => {
  const navigate = useNavigate();
  
  return(
    <div className="account-main">
      <div className="account-img-left">
        <img src={LoveInBoxWebpng} alt="LoveInBoxWebpng" className="account-init"/>
      </div>
      <div className="account-form-right">
        <div className="account-sub-form-right">
          <div>
            <div className="account-imgs">
              <div className="account-container-image">
                <img src={LoveInBoxWebjpg} alt="LoveInBoxWebjpg" className="account-profile"/>
              </div>
            </div>
            <div>
              <div>
                <h1>LoveInBox</h1>
              </div>
              <div className="account-space">
                <button className="account-button" onClick ={() => navigate("/login")}>Login</button>
              </div>
              <div className="account-space">
                <button className="account-button" onClick ={() => navigate("/register")}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
