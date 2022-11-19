import React from 'react';
import styled from 'styled-components';
import '../hojas-de-estilo/Footer.css';
import {
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
} from 'react-icons/fa';

function Footer() {
  return (

    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="containerx">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              {/* column 1 */}
              <ul className="list-unstyled">
                <img src={"LoveInBoxMarketing2.png"} width="150px" />

              </ul>
            </div>

            <div className="col-md-3 col-sm-6 text-center justify-content-around align-items-center">
              {/* column 2 */}
              <h4> CATEGORIES</h4>
              <ul className="list-unstyled">

                <li>Action Figures</li>
                <li>Toycars</li>
                <li>Barbie dolls</li>
                <li>Funkos</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 text-center" >
              {/* column 3 */}
              <h4> PAGES</h4>
              <ul className="list-unstyled">
                <li >< a style={{ color: "#212529", textDecoration: "none" }} href="/Home" >Home</a></li>
                <li >< a style={{ color: "#212529", textDecoration: "none" }} href="/Store" >Store</a></li>
                <li >< a style={{ color: "#212529", textDecoration: "none" }} href="/Account" >My Account</a></li>
                <li >< a style={{ color: "#212529", textDecoration: "none" }} href="/FrequentQuestions" >Frequent Questions</a></li>

              </ul>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              {/* column 4 */}
              <h4> CONTACT - US</h4>
              <ul className="list-unstyled">
                <li>Love in Box co</li>
                <li>Bogota - Colombia</li>
                <li>3131112244</li>
                <li>Monday - Friday</li>
                <li>8Am - 6Pm</li>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", padding: "0 150px 0" }} >
                <div className="col-sm text-center"  >
                  <li>
                    <a href="https://www.facebook.com/people/Love-In-Box-Colombia/100087441864694/" rel="noreferrer" target="_blank" style={{color:"#f8f9fa"}} ><FaFacebookSquare /></a>
                  </li>
                </div>
                <div className="col-sm text-center">
                  <li>
                    <a href="https://www.instagram.com/love_in_box_colombia/" rel="noreferrer" target="_blank" style={{color:"#f8f9fa"}}><FaInstagramSquare /></a>
                  </li>
                </div>
                <div className="col-sm text-center">
                  <li>
                    <a href="https://wa.me/573012476438" rel="noreferrer" target="_blank" style={{color:"#f8f9fa"}}><FaWhatsappSquare /></a>
                  </li>
                </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
      </div >
    </FooterContainer >
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    display: center;
    justify-content: space-around;
    background: var(--mainBlue);
    padding-top: 3rem;
    color: var(--mainWhite);
}
`;


{/* Footer Bottom */ }
/*

<div className = "footer-bottom">
<p className = "text-xs-center">
  &copy;{new Date.getFullYear()love in box - all rigths reserved}</p>
</div>
*/