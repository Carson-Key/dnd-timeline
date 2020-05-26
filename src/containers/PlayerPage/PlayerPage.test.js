import React from "react";
import { render } from "@testing-library/react";
import PlayerPage from "./index.js";
import renderer from 'react-test-renderer';

describe('Render PlayerPage ->', () => {

  test('with minimal props', () => {
    const component = renderer.create(
      <PlayerPage
        playerObject={{
          characters: {
            "cade": {
                "name": "Cade Goodbarrel",
                "characterKey": "cade",
                "timeline": {
                  "events": {}
                }
              }
            }
          }}
       />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
