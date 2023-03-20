import React from "react";
import "./Footer.css";
import { MDBFooter } from "mdb-react-ui-kit";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";

//Footer Belen
function Footer() {
  return (
    <>
        <MDBFooter className="text-white text-center footerBelen">
          <MDBContainer className="p-4">
            <MDBRow>
              <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
               
                <div>
                <a href="https://github.com/tu-usuario-de-github" target={"_blank"}>
                  <MDBIcon fab icon="linkedin" size="2x" href="github.com" />
                  </a>
                  <a href="https://github.com/belenz77" target={"_blank"}>
                  <MDBIcon fab icon="github" size="2x" />
                  </a>
                  <MDBIcon fab icon="instagram" size="2x" />
                  <MDBIcon fab icon="facebook" size="2x" />
                  </div>
              </MDBCol>

             
            </MDBRow>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Belén Zumalacarregui
            <a className="text-white" href="https://mdbootstrap.com/"></a>
          </div>
        </MDBFooter>
    </>
  );
}

export default Footer;