import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create(
        <Main
          offersCount={3}
          offers={offers}
          onOfferHeaderClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
