import React from "react";
import '../hojas-de-estilo/navBar.css';
import{
  FaHome,
  FaUserAlt,
  FaCommentAlt,
  FaShoppingBag,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaQuestion,
  FaUserCircle,
  FaThList
}from 'react-icons/fa';


export default function NavBar1(){
  return( 
    <div className="nav">
      <a href="/" className="Site-tittle" target="_blank" rel="noreferrer">
        <img src={"LoveInBoxMarketing2.png"} width="80px" alt="logo" />
      </a>
        <ul>
          
          <li>
            <a href="/Home">Homeﾠ<FaHome/></a>
          </li>
          <li>
            <a href="/Store">Storeﾠ<FaShoppingBag/></a>
          </li>

          <li>
            <a href="/About">Aboutﾠ<FaCommentAlt/></a>
          </li>
          <li>
            <a href="/FrequentQuestions">Frequent Questionsﾠ<FaQuestion/></a>
          </li>
          <li>
            <a href="/Blog">Blogﾠ<FaThList/></a>
          </li>
          <li>
            < a href="/Account">Accountﾠ<FaUserAlt/></a>
          </li>
          <li>
            <a href="/Profile">Profileﾠ<FaUserCircle/></a>
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

/*
          <li>
            < a href="/Test"><FaThList/>ﾠTest</a>
          </li>
*/