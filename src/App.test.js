import React from "react"
import App from "./App.js"
import { render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Renders App', () => {

  test('renders with no interact', () => {
    const app = render(
      <App />,
    )

    expect(toJson(app)).toMatchSnapshot()
  })

})
