import React from "react"
import Auth from "./index.js"
import renderer from 'react-test-renderer'

describe('Render Auth ->', () => {

  test('with no props', () => {
    const component = renderer.create(
      <Auth />,
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
