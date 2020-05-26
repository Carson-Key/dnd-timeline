import React from "react"
import Time from "./index.js"
import renderer from 'react-test-renderer'

describe('Render Time ->', () => {

  test('with blank timeline prop', () => {
    const component = renderer.create(
      <Time timeline={{}}/>,
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with out year suffix timeline prop', () => {
    const component = renderer.create(
      <Time timeline={{
        "1776": [
          {
            description: "America!!!",
          }
        ]
      }}/>,
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with events and year suffix timeline prop', () => {
    const component = renderer.create(
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

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with multiple years', () => {
    const component = renderer.create(
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

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with multiple events', () => {
    const component = renderer.create(
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

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with multiple events and years', () => {
    const component = renderer.create(
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

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
