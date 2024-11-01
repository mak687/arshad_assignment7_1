import "./App.css";
import Profile from "./component/profile";
import DateTime from "./component/datepicker";
import Image from "./component/Image";
import React from "react";
import logo from "./images/avatar.jpeg";

const App = () => {
  return (
    <div>
      <h2>Assignment 7.1 by Muhammad Arshad</h2>
      <h3>The Profile component is: </h3>
      <Profile name="Muhammad Arshad" gender="Male" />
      <br />
      <h3>The Current Date is: </h3>
      <DateTime />
      <br />
      <h3>The Image component is: </h3>
      <Image imgSrc={logo} />
    </div>
  );
};

export default App;
