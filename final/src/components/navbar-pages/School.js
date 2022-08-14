import React from "react";
import { Link } from "react-router-dom";
import promineo from "../images/promineo.png";

const School = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <img src={promineo} alt="Promineo" className="promineo-img" />
        <h2 className="text-center" style={{ paddingTop: "5%" }}>
          In case you may want to login and check on your current process or
          course materials due for the week. Here is a link to log in to your
          account at <a href="https://learn.promineotech.com/login/" target="_blank">Promineo Tech
          </a>.
        </h2>
        <br />
        <h3>
          For more information on Promineo Tech, please visit their official
          website at <a href="https://www.promineotech.com/" target="_blank">Promineo
          </a>.
        </h3>
      </div>
      <br />
      <br />
    </>
  );
};

export default School;

/* <a
className="nav-link"
aria-current="page 2"

/> */
