import React from "react"
import PlayerEntry from "./index.js"
import { render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Render PlayerEntry ->', () => {

  test('with no props', () => {
    const playerEntry = render(
      <PlayerEntry />,
    )

    expect(toJson(playerEntry)).toMatchSnapshot()
  })

})
