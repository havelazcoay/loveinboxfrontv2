import React from 'react';
import styled from 'styled-components';
import '../hojas-de-estilo/Footer.css';

function Footer() {
  return (

    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="containerx">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              {/* column 1 */}
              <h4> lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              {/* column 2 */}
              <h4> lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              {/* column 3 */}
              <h4> lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              {/* column 4 */}
              <h4> lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
                <li>lorem impsum</li>
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