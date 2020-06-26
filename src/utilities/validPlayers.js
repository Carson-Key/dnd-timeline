import { validCharactersOne, validCharactersTwo } from "./validCharacters.js"

const validPlayers = {
  "butts": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": validCharactersOne
      }
    }
  },
  "gold": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": {
          "cade": validCharactersOne["cade"],
          "hazy": validCharactersOne["hazy"],
          "dalgur": validCharactersOne["dalgur"]
        }
      }
    }
  },
  "4470": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": {
          "crainer": validCharactersOne["crainer"],
          "ikoll": validCharactersOne["ikoll"],
          "fowl": validCharactersOne["fowl"],
          "fish": validCharactersOne["fish"]
        }
      }
    }
  },
  "4848": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": {
          "naomi": validCharactersOne["naomi"],
          "viola": validCharactersOne["viola"]
        }
      }
    }
  },
  "5784": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": {
          "indominous": validCharactersOne["indominous"],
          "ator": validCharactersOne["ator"]
        }
      }
    }
  },
  "0876": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": {
          "mar": validCharactersOne["mar"],
          "olorin": validCharactersOne["olorin"]
        }
      }
    }
  },
  "5450": {
    "timelines": {
      "{PLACEHOLDER}": {
        "name": "{PLACEHOLDER}",
        "characters": validCharactersTwo
      },
      "ameria": {
        "name": "Ameria",
        "characters": {
          "storn": validCharactersOne["storn"]
        }
      }
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

export function setTimeline(playerObject, characterKey, timelineKey){
  const characterObject = playerObject.timelines[timelineKey].characters[characterKey]

  if (characterKey !== "dm") {
    characterObject.timeline = parseTimeline(characterObject.characterKey, characterObject.timeline)
  }
}

function parseTimeline(characterName, timeline) {
  const newTimeLine = {}
  newTimeLine.greaterThanYearZero = timeline.greaterThanYearZero
  newTimeLine.lessThanYearZero = timeline.lessThanYearZero
  newTimeLine.events = {}
  const events = Object.keys(timeline.events)
  events.forEach((year, i) => {
    let yearEvents = []
    timeline.events[year].forEach((event, j) => {
      if (event.players[characterName]) {
        yearEvents.push(event)
      }
    })
    newTimeLine.events[year] = yearEvents
  })

  return newTimeLine
}
