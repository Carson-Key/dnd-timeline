import React from "react"
import Timeline from "./index.js"
import { render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Render Timeline ->', () => {

  test('with minimal props', () => {
    const timeLine = render(
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
    )

    expect(toJson(timeLine)).toMatchSnapshot()
  })

})
