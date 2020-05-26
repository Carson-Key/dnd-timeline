import React from "react";
import { render } from "@testing-library/react";
import CharacterEntry from "./index.js";
import renderer from 'react-test-renderer';

describe('Render CharacterEntry ->', () => {

  test('with empty playerObject prop', () => {
    const component = renderer.create(
      <CharacterEntry
        playerObject={
          {characters: {}}
        }
      />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('with one character', () => {
    const component = renderer.create(
      <CharacterEntry
        playerObject={
          {characters: {
            "cade": {
                "name": "Cade Goodbarrel",
                "characterKey": "cade",
                "timeline": {
                  "events": {}
                }
              }
          }}
        }
      />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('with multiple characters', () => {
    const component = renderer.create(
      <CharacterEntry
        playerObject={
          {
            characters: {
              "cade": {
                "name": "Cade Goodbarrel",
                "characterKey": "cade",
                "timeline": {
                  "events": {}
                }
              },
              "cade2": {
                "name": "Cade Goodbarrel",
                "characterKey": "cade2",
                "timeline": {
                  "events": {}
                }
              }
            }
          }
        }
      />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
