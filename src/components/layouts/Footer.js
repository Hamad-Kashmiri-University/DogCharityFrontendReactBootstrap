import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
   <footerStyle className="footer-primary"> 
    <div className="footer-main">
      <div className="container"> 
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h4> Footer 1</h4>
            <ul className="list-unstyled">
              <li>dummy, 1</li>
              <li>dummy, 1</li>
              <li>dummy, 2</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4> Footer 2</h4>
            <ul className="list-unstyled">
              <li>dummy, 1</li>
              <li>dummy, 1</li>
              <li>dummy, 2</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4> Footer 3</h4>
            <ul className="list-unstyled">
              <li>dummy, 1</li>
              <li>dummy, 1</li>
              <li>dummy, 2</li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          <p className="text-xs-center">Hamad Kashmiri Dog Web App</p>
        </div>
      </div>
    </div>
   </footerStyle>
  )
}

const footerStyle = styled.footer`
  .footer-main {
    background: var(--mainBlack);
    padding-top: 3rem;
color: var(main)
    }
`;