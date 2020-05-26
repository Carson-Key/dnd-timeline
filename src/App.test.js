import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Renders App', () => {

  test('renders with no interact', () => {
    const component = renderer.create(
      <App />,
    );

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
