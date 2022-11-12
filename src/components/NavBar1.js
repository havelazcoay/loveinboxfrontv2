import React from "react";
import '../hojas-de-estilo/navBar.css';

export default function NavBar1(){
  return( 
    <div className="nav">
      <a href="/" className="Site-tittle" target="_blank" rel="noreferrer">
        <img src={"lovebox2.png"} alt="logo" />
      </a>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Store">Store</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            < a href="/Account">Account</a>
          </li>
          <li>
            < a href="/Test">Test</a>
          </li>
      </ul>
  </div>
  );
}