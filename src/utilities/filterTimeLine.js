import { validPlayers, playerVariations } from './validPlayers.js'

export function filterTimeLine(playerName, timeline) {
  if (playerVariations[playerName]) {
    playerName = playerVariations[playerName]
  }
  if (playerName.toLowerCase() === "dm") {
    return timeline
  } else if (validPlayers[playerName.toLowerCase()]) {
    return parseTimeline(playerName.toLowerCase(), timeline)
  } else {
    return "error"
  }
}

function parseTimeline(playerName, timeline) {
  const newTimeLine = {}
  const events = Object.keys(timeline)
  events.forEach((year, i) => {
    let yearEvents = []
    timeline[year].forEach((event, j) => {
      if (event.players[playerName]) {
        yearEvents.push(event)
      }
    })
    newTimeLine[year] = yearEvents
  })

  return newTimeLine
}
