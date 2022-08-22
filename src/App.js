import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/OnClick">
        <MDBBtn className="ms-3 mt-3">On Click</MDBBtn>
      </Link>
      <Link to="/OnHover">
        <MDBBtn className="ms-3 mt-3">On Hover</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
