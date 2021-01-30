import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const OFFERS_COUNT = 10;
const offers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
      offers={offers}
    />,
    document.getElementById(`root`)
);
