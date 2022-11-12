import React from 'react';
import { useNavigate } from "react-router-dom";
import LoveInBoxWebjpg from "../Imagenes/LoveInBoxWeb.jpg";
import LoveInBoxWebpng from "../Imagenes/LoveInBoxWeb.png";
import '../hojas-de-estilo/Start.css';

export const Account = () => {
  const navigate = useNavigate();
  
  return(
    <div className="start-main">
      <div className="start-img-left">
        <img src={LoveInBoxWebpng} alt="LoveInBoxWebpng" className="start-init"/>
      </div>
      <div className="start-form-right">
        <div className="start-sub-form-right">
          <div>
            <div className="start-imgs">
              <div className="start-container-image">
                <img src={LoveInBoxWebjpg} alt="LoveInBoxWebjpg" className="start-profile"/>
              </div>
            </div>
            <div>
              <div>
                <h1>LoveInBox</h1>
              </div>
              <div className="start-space">
                <button className="start-button" onClick ={() => navigate("/login")}>Login</button>
              </div>
              <div className="start-space">
                <button className="start-button" onClick ={() => navigate("/register")}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
