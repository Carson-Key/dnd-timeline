import { validCharacters, characterVariations } from './validCharacters.js'

export function filterTimeLine(characterName, timeline) {
  if (characterVariations[characterName]) {
    characterName = characterVariations[characterName]
  }
  if (characterName.toLowerCase() === "dm") {
    return timeline
  } else if (validCharacters[characterName.toLowerCase()]) {
    return parseTimeline(characterName.toLowerCase(), timeline)
  } else {
    return "error"
  }
}

function parseTimeline(characterName, timeline) {
  const newTimeLine = {}
  const events = Object.keys(timeline)
  events.forEach((year, i) => {
    let yearEvents = []
    timeline[year].forEach((event, j) => {
      if (event.players[characterName]) {
        yearEvents.push(event)
      }
    })
    newTimeLine[year] = yearEvents
  })

  return newTimeLine
}
