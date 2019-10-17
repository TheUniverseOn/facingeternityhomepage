import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="elegant-color-dark"
      className="page-footer font-small pt-0 "
    >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.facingeternity.org"> facingeternity.org </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
