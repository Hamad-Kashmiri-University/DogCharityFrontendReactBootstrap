import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
   <FooterStyle className="footer-primary"> 
    <div className="footer-main">
      <div className="container"> 
        <div className="row">
        </div>
        <div className="footer-end">
          <p className="text-xs-center text-md-center text-lg-center">Dog Web App</p>
        </div>
      </div>
    </div>
   </FooterStyle>
  )
}

const FooterStyle = styled.footer`
//   .footer-main {
//     background: var(--mainBlack);
//     padding-top: 3rem;
// color: var(main)
    }
`;