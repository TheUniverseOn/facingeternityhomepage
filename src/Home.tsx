import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBNavLink,
  MDBRow
} from "mdbreact";

const Home = () => (
  <MDBContainer fluid>
    <MDBRow className="py-0 px-0">
      <MDBView>
        <img
          // TODO: make like example at https://mdbootstrap.com/docs/react/css/background-image/
          src={require("./assets/HomeStare.JPG")}
          className="img-fluid"
          alt=""
        />
        <MDBMask className="flex-center" overlay="black-light">
          <h1 className="h1-responsive white-text text-center">
            <strong>
              "Speak up for those who cannot speak for themselves... <br />{" "}
              Defend the rights of the poor and needy"
            </strong>
            <small className="text-muted grey-text">
              <br />
              Proverbs 31:8-9
            </small>
          </h1>
        </MDBMask>
      </MDBView>
    </MDBRow>
    <MDBContainer
      className="d-flex align-items-center py-0 px-0"
      style={{ height: "10vh" }}
    ></MDBContainer>
    <MDBContainer className="d-flex align-items-center py-0 px-0">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true} //TODO: chage when we have more
        showIndicators={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBNavLink to="/blog/Sibate0419">
              <MDBView waves zoom>
                <img
                  src={require("./assets/Sibate0419/Main.JPG")}
                  className="img-fluid"
                  alt="Sibaté"
                />
                <MDBMask className="flex-center" overlay="black-light">
                  <h1 className="white-text">Sibaté</h1>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
            <MDBNavLink to="/blog/Bocagrande1018">
              <MDBView waves zoom>
                <img
                  src={require("./assets/Bocagrande1018/Main.JPG")}
                  className="img-fluid"
                  alt="Bocagrande"
                />
                <MDBMask className="flex-center" overlay="black-light">
                  <h1 className="white-text">Bocagrande</h1>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <MDBContainer
      className="d-flex align-items-center py-0 px-0"
      style={{ height: "15vh" }}
    ></MDBContainer>
  </MDBContainer>
);

export default Home;
