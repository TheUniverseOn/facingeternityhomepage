import React from "react";
import { MDBContainer, MDBMask, MDBView, MDBCol, MDBRow} from "mdbreact";

const Bocagrande1018 = () => (
<MDBContainer fluid >
    <MDBRow>
        <MDBCol>
        <MDBView>
        <img
        src={require("../assets/Bocagrande1018/MainSplash.JPG")}
        className="img-fluid"
        alt=""
        />
        <MDBMask className="flex-center">
            <h1 className="white-text">Bocagrande</h1>
        </MDBMask>
      </MDBView>
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBContainer
        className="d-flex align-items-center py-0 px-0"
        style={{ height: "5vh" }}
        />
    </MDBRow>

    <MDBRow>
        <MDBContainer>
            <MDBRow>
                <p className="white-text">
                    Due to the recent uprest in Venezuela many immigrants have migrated to Colombia in search
                    for any aid whatsoever. Facing eternity responds to this call for help by sending missionaries
                    to preach the gospel and provide with much needed food. Documented below are two instances
                    of the outreach in Bocagrande, both monthers left with their children to fend on their own.
                </p>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={require("../assets/Bocagrande1018/Family1.JPG")}
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={require("../assets/Bocagrande1018/Family2.JPG")}
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </MDBRow>
</MDBContainer>
);

export default Bocagrande1018;