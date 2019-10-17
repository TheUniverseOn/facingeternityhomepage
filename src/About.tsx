import React from "react";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";

const About = () => (
  <MDBContainer fluid className="py-0 px-0">
    <MDBView>
      <img src={require("./assets/Alonso.JPG")} className="img-fluid" alt="" />
      <MDBMask className="flex-center" overlay="black-light">
        <h1 className="h1-responsive white-text text-center">
          <strong>
            Born in Colombia, Alonso is acquinted with the harsh environment
            unprivillaged children go through day to day <br />
            It is the mission of Facing Eternity to change lives child by child.
          </strong>
        </h1>
      </MDBMask>
    </MDBView>
  </MDBContainer>
);

export default About;
