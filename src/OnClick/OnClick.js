import React from "react";
import { MDBContainer} from "mdb-react-ui-kit";
import "./on-click.css";

export default function OnClick() {
  return (
    <MDBContainer className="py-5">
       <input type="text" className="search-click" placeholder="search here..." />
    </MDBContainer>
  );
}
