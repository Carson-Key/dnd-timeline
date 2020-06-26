import React from "react"
import Timeline from "./index.js"
import { render, shallow } from 'enzyme'
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

describe('Test Timeline ->', () => {

  test('with clicking the exit button', () => {
    const testExitTimeLine = jest.fn();

    const timeLine = shallow(
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
        exitTimeLine={testExitTimeLine}
      />,
    )

    timeLine
      .find('Button#timelineExitButton')
      .simulate('click')

    expect(testExitTimeLine).toHaveBeenCalled()
  })

})
