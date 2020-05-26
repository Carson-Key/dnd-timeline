import React from "react";
import { render } from "@testing-library/react";
import PlayerEntry from "./index.js";
import renderer from 'react-test-renderer';

describe('Render PlayerEntry ->', () => {

  test('with no props', () => {
    const component = renderer.create(
      <PlayerEntry />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
