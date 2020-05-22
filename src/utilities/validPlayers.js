import { validCharacters } from "./validCharacters.js"

const validPlayers = {
  "butts": {
    "characters": validCharacters
  },
  "gold": {
    "characters": {
      "cade": validCharacters["cade"],
      "hazy": validCharacters["hazy"]
    }
  },
  "4470": {
    "characters": {
      "crainer": validCharacters["crainer"],
      "ikoll": validCharacters["ikoll"],
      "fowl": validCharacters["fowl"],
      "fish": validCharacters["fish"]
    }
  },
  "4848": {
    "characters": {
      "naomi": validCharacters["naomi"],
      "viola": validCharacters["viola"]
    }
  },
  "5784": {
    "characters": {
      "indominous": validCharacters["indominous"],
      "ator": validCharacters["ator"]
    }
  },
  "0876": {
    "characters": {
      "mar": validCharacters["mar"],
      "olorin": validCharacters["olorin"]
    }
  },
  "5450": {
    "characters": {
      "storn": validCharacters["storn"]
    }
  }
}

export function validatePlayer(name) {
  const playerObject = validPlayers[name.toLowerCase()]
  if (playerObject) {
    return playerObject
  } else {
    return "error"
  }
}

export function setTimeline(playerObject, characterKey){
  const characterObject = playerObject.characters[characterKey]

  if (characterKey !== "dm") {
    characterObject.timeline = parseTimeline(characterObject.characterKey, characterObject.timeline)
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
