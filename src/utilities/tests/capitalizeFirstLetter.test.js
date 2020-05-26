import { capitalizeFirstLetter } from '../capitalizeFirstLetter.js'

describe('capitalizeFirstLetter ->', () => {

  test('returns empty string if arg is empty string', () => {
    const startingString = ""
    const capitalizedString = ""

    expect(capitalizeFirstLetter(startingString)).toStrictEqual(capitalizedString)
  })

  test('returns empty string if arg is null', () => {
    const startingString = null
    const capitalizedString = ""

    expect(capitalizeFirstLetter(startingString)).toStrictEqual(capitalizedString)
  })

  test('returns empty string if arg is undefined', () => {
    const startingString = undefined
    const capitalizedString = ""

    expect(capitalizeFirstLetter(startingString)).toStrictEqual(capitalizedString)
  })

  test('returns capitalized string', () => {
    const startingString = "hello"
    const capitalizedString = "Hello"

    expect(capitalizeFirstLetter(startingString)).toStrictEqual(capitalizedString)
  })

  test('returns capitalized with already capitalized string', () => {
    const startingString = "Hello"
    const capitalizedString = "Hello"

    expect(capitalizeFirstLetter(startingString)).toStrictEqual(capitalizedString)
  })

})
