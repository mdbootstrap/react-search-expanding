import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "./on-hover.css";

export default function OnHover() {
  return (
    <MDBContainer className="py-5">
      <input
        type="text"
        className="search-hover"
        placeholder="search here..."
      />
    </MDBContainer>
  );
}
