/* eslint-disable react/prop-types */
import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offersCount} = props;

  return (
    <Main offersCount={offersCount} />
  );
};

export default App;