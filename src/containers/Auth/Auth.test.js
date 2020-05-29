import React from "react"
import Auth from "./index.js"
import { render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Render Auth ->', () => {

  test('with no props', () => {
    const auth = render(
      <Auth />,
    )

    expect(toJson(auth)).toMatchSnapshot()
  })

})
