import { addPossesive } from '../addPossesive.js'

describe('addPossesive ->', () => {

  test('returns empty string if passed empty string', () => {
    const startingString = ""
    const possesiveString = ""

    expect(addPossesive(startingString)).toStrictEqual(possesiveString)
  })

  test('returns empty string if passed null', () => {
    const startingString = null
    const possesiveString = ""

    expect(addPossesive(startingString)).toStrictEqual(possesiveString)
  })

  test('returns empty string if passed undefined', () => {
    const startingString = undefined
    const possesiveString = ""

    expect(addPossesive(startingString)).toStrictEqual(possesiveString)
  })

  test('returns possesive string with s', () => {
    const startingString = "cade"
    const possesiveString = "cade's"

    expect(addPossesive(startingString)).toStrictEqual(possesiveString)
  })

  test('returns possesive string with single quote', () => {
    const startingString = "cades"
    const possesiveString = "cades'"

    expect(addPossesive(startingString)).toStrictEqual(possesiveString)
  })

})
