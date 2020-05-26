import React from "react";
import { render } from "@testing-library/react";
import Timeline from "./index.js";
import renderer from 'react-test-renderer';

describe('Render Timeline ->', () => {

  test('with minimal props', () => {
    const component = renderer.create(
      <Timeline
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
        characterName="cade"
      />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
