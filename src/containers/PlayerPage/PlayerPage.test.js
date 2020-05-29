import React from "react"
import PlayerPage from "./index.js"
import { shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from "enzyme-to-json";

describe('Render PlayerPage ->', () => {

  test('with minimal props', () => {
    const playerPage = render(
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
    )

    expect(toJson(playerPage)).toMatchSnapshot()
  })

  test('after setting state moveOn to go, page should render Timeline', () => {
    const playerPage = shallow(
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
    )

    playerPage.setState({moveOn: "go", characterName: "cade"})

    expect(toJson(playerPage)).toMatchSnapshot();
  })

})
