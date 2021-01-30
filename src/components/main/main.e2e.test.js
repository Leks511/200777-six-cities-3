import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const offers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should offer headers be pressed`, () => {
  const onOfferHeaderClick = jest.fn();

  const main = shallow(
      <Main
        offersCount={3}
        offers={offers}
        onOfferHeaderClick={onOfferHeaderClick}
      />
  );

  main.find(`h2.place-card__name`).forEach((node) => {
    node.props().onClick();
  });

  expect(onOfferHeaderClick.mock.calls.length).toBe(2);
});
