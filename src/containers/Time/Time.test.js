import React from "react"
import Time from "./index.js"
import { render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Render Time ->', () => {

  beforeEach(() => {
    const originalError = console.error
    console.error = jest.fn()
  })

  test('with blank timeline prop', () => {
    const time = render(
      <Time timeline={{}}/>,
    )

    expect(toJson(time)).toMatchSnapshot()
  })

  test('with out year suffix timeline prop', () => {
    const time = render(
      <Time timeline={{
        "1776": [
          {
            description: "America!!!",
          }
        ]
      }}/>,
    )

    expect(toJson(time)).toMatchSnapshot()
  })

  test('with events and year suffix timeline prop', () => {
    const time = render(
      <Time
        timeline={{
          "1776": [
            {
              description: "America!!!",
            }
          ]
        }}
        lessThanYearZero="BCE"
        greaterThanYearZero="AD"
      />,
    )

    expect(toJson(time)).toMatchSnapshot()
  })

  test('with multiple years', () => {
    const time = render(
      <Time
        timeline={{
          "1776": [
            {
              description: "America!!!",
            }
          ],
          "1777": [
            {
              description: "More America!!!",
            }
          ]
        }}
        lessThanYearZero="BCE"
        greaterThanYearZero="AD"
      />,
    )

    expect(toJson(time)).toMatchSnapshot()
  })

  test('with multiple events', () => {
    const time = render(
      <Time
        timeline={{
          "1776": [
            {
              description: "America!!!",
            },
            {
              description: "America 2.0!!!",
            }
          ]
        }}
        lessThanYearZero="BCE"
        greaterThanYearZero="AD"
      />,
    )

    expect(toJson(time)).toMatchSnapshot()
  })

  test('with multiple events and years', () => {
    const time = render(
      <Time
        timeline={{
          "1776": [
            {
              description: "America!!!",
            },
            {
              description: "America 2.0!!!",
            }
          ],
          "1777": [
            {
              description: "More America!!!",
            },
            {
              description: "More America 2.0!!!",
            }
          ]
        }}
        lessThanYearZero="BCE"
        greaterThanYearZero="AD"
      />,
    )

    expect(toJson(time)).toMatchSnapshot()
  })

})
