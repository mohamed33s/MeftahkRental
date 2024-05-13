import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="Footer text-center text-lg-left">
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} مفتاحك لتأجير السيرات{" "}
      </div>
    </MDBFooter>
  );
}
