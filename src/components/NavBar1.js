import React from "react";
import '../hojas-de-estilo/navBar.css';
import{
  FaHome,
  FaUserAlt,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaQuestion,
  FaUserCircle
}from 'react-icons/fa';


export default function NavBar1(){
  return( 
    <div className="nav">
      <a href="/" className="Site-tittle" target="_blank" rel="noreferrer">
        <img src={"lovebox2.png"} alt="logo" />
      </a>
        <ul>
          
          <li>
            <a href="/Home"><FaHome/>Home</a>
          </li>
          <li>
            <a href="/Store"><FaShoppingBag/>Store</a>
          </li>
          <li>
            < a href="/Test"><FaThList/>Test</a>
          </li>
          <li>
            <a href="/About"><FaCommentAlt/>About</a>
          </li>
          <li>
            <a href="/FrequentQuestions"><FaQuestion/>Frequent Questions</a>
          </li>
          <li>
            < a href="/Account"><FaUserAlt/>Account</a>
          </li>
          <li>
            <a href="/Profile"><FaUserCircle/>Profile</a>
          </li>
          <li>
            <a href="https://www.facebook.com/people/Love-In-Box-Colombia/100087441864694/" rel="noreferrer" target="_blank"><FaFacebookSquare/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/love_in_box_colombia/" rel="noreferrer" target="_blank"><FaInstagramSquare/></a>
          </li>
          <li>
            <a href="https://wa.me/573012476438" rel="noreferrer" target="_blank"><FaWhatsappSquare/></a>
          </li>
      </ul>
  </div>
  );
}