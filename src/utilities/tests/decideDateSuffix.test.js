import { decideDateSuffix } from '../decideDateSuffix.js'

describe('decideDateSuffix ->', () => {

  beforeEach(() => {
    const originalError = console.error
    console.error = jest.fn()
  })

  test('returns error if year is null', () => {
    const year = null
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = "AD"
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns empty string if year is undefined', () => {
    const year = undefined
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = "AD"
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns empty string if year is not a number', () => {
    const year = "NaN"
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = "AD"
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns empty string lessThanYearZero is null', () => {
    const year = 1776
    const lessThanYearZero = null
    const greaterThanYearZero = "AD"
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns empty string lessThanYearZero is undefined', () => {
    const year = 1776
    const lessThanYearZero = undefined
    const greaterThanYearZero = "AD"
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns empty string greaterThanYearZero is null', () => {
    const year = 1776
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = null
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns empty string greaterThanYearZero is undefined', () => {
    const year = 1776
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = undefined
    const endString = "Error!"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns string date of greater value', () => {
    const year = 1776
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = "AD"
    const endString = "1776 AD"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns string date of lesser value', () => {
    const year = -1000
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = "AD"
    const endString = "1000 BCE"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns string date of greater value when year is zero', () => {
    const year = 0
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = "AD"
    const endString = "0 AD"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns no suffix is lessThanYearZero is a blank string', () => {
    const year = -1000
    const lessThanYearZero = ""
    const greaterThanYearZero = "AD"
    const endString = "1000"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

  test('returns no suffix is greaterThanYearZero is a blank string', () => {
    const year = 1776
    const lessThanYearZero = "BCE"
    const greaterThanYearZero = ""
    const endString = "1776"

    expect(decideDateSuffix(year, lessThanYearZero, greaterThanYearZero)).toStrictEqual(endString)
  })

})
