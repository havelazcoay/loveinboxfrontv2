import React from 'react';
import styled from 'styled-components';
import '../hojas-de-estilo/Footer.css';

function Footer() {
  return (

    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="containerx">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              {/* column 1 */}
              <h4> Love in Box</h4>
              <ul className="list-unstyled">
                <img src={"LoveInBoxMarketing.png"} width="100px" />

              </ul>
            </div>

            <div className="col-md-3 col-sm-6 text-center justify-content-around align-items-center">
              {/* column 2 */}
              <h4> Categories</h4>
              <ul className="list-unstyled">

                <li>Action Figures</li>
                <li>Toycars</li>
                <li>Barbie dolls</li>
                <li>Funkos</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              {/* column 3 */}
              <h4> Account</h4>
              <ul className="list-unstyled">
                <li>My account</li>
                <li>My cart</li>
                <li>My orders</li>
                <li>sing out</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              {/* column 4 */}
              <h4> Contact us</h4>
              <ul className="list-unstyled">
                <li>Love in Box co</li>
                <li>Bogota - Colombia</li>
                <li>3131112244</li>
                <li>Monday - Friday</li>
                <li>8Am - 6Pm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
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