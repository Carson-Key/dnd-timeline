import { sortEvents } from './sortEvents.js'

describe('sortEvents ->', () => {

  test('sorts empty object', () => {
    const fakeEvents = {}
    const sortedEvents = sortEvents(fakeEvents)

    expect(sortedEvents).toStrictEqual([])
  })

  test('sorts single event', () => {
    const fakeEvents = {
      "1776": []
    }
    const sortedEvents = sortEvents(fakeEvents)

    expect(sortedEvents).toStrictEqual(["1776"])
  })

  test('sort multiple events', () => {
    const fakeEvents = {
      "1776": [],
      "1777": []
    }
    const sortedEvents = sortEvents(fakeEvents)

    expect(sortedEvents).toStrictEqual(["1776", "1777"])
  })

  test('sort negative values', () => {
    const fakeEvents = {
      "-1": [],
      "1776": [],
      "1777": []
    }
    const sortedEvents = sortEvents(fakeEvents)

    expect(sortedEvents).toStrictEqual(["-1", "1776", "1777"])
  })

  test('sorts with zero', () => {
    const fakeEvents = {
      "-1": [],
      "0": [],
      "1776": [],
      "1777": []
    }
    const sortedEvents = sortEvents(fakeEvents)

    expect(sortedEvents).toStrictEqual(["-1", "0", "1776", "1777"])
  })

})
