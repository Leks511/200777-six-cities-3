import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          offersCount={3}
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
