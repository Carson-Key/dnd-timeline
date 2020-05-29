import React from "react"
import CharacterEntry from "./index.js"
import { render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Render CharacterEntry ->', () => {

  test('with empty playerObject prop', () => {
    const characterEntry = render(
      <CharacterEntry
        playerObject={
          {characters: {}}
        }
      />,
    )

    expect(toJson(characterEntry)).toMatchSnapshot()
  })

  test('with one character', () => {
    const characterEntry = render(
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
    )

    expect(toJson(characterEntry)).toMatchSnapshot()
  })

  test('with multiple characters', () => {
    const characterEntry = render(
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
    )

    expect(toJson(characterEntry)).toMatchSnapshot()
  })

})
