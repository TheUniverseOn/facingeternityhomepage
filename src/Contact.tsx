import React from "react";
import Particles from "react-particles-js";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const Styles = {
  paticleContainer: {
    position: "fixed",
    background: "linear-gradient(120deg, rgb(203, 52, 181), rgb(68, 166, 187))"
  }
};

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#40c4ff",
        blur: 5
      }
    }
  }
};

const MDBcontact = () => {
  return (
    <MDBContainer fluid>
      <MDBRow middle center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form
                action="https://formspree.io/contact@facingeternity.org"
                method="POST"
              >
                <p className="h5 text-center mb-4">Write to us</p>
                <div className="grey-text">
                  <MDBInput
                    required
                    label="Your name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    required
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    required
                    label="Subject"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    required
                    type="textarea"
                    rows="2"
                    label="Your message"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="primary" type="submit">
                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const Contact = () => (
  <div>
    <Particles style={Styles.paticleContainer} params={particleOpt} />

    <MDBContainer
      className="d-flex align-items-center py-0 px-0"
      style={{ height: "15vh" }}
    ></MDBContainer>
    <MDBContainer fluid className="py-0 px-0">
      <MDBCol className="py-5">
        <MDBcontact />
      </MDBCol>
    </MDBContainer>
  </div>
);

export default Contact;
