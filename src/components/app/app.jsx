import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const offerHeaderClickHandler = () => {};

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <Main
      offersCount={offersCount}
      offers={offers}
      onOfferHeaderClick={offerHeaderClickHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
