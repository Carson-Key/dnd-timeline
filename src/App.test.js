import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Renders Auth', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Timeline/i);
    expect(titleElement).toBeInTheDocument();
  });
})


// import React from 'react';
// import { render } from '@testing-library/react';
// import { unmountComponentAtNode } from "react-dom";
// import Time from './Time';
//
// beforeEach(() => {
//   const { Time } = render(<Time  />);
// });
//
// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
//
// test('Renders Time', () => {
//   describe('', () => {
//
//   })
// })
