import { timeline } from "./timeline.js"

const validPlayers = {
  "5924": {
    "characters": {
      "dm": {
        "name": "DM",
        "characterKey": "dm",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  },
  "gold": {
    "characters": {
      "cade": {
        "name": "Cade Goodbarrel",
        "characterKey": "cade",
        "buttonColor": "",
        "timeline": timeline
      },
      "hazy": {
        "name": "Hazy Mist",
        "characterKey": "hazy",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  },
  "4470": {
    "characters": {
      "crainer": {
        "name": "Crainer Caracas",
        "characterKey": "crainer",
        "buttonColor": "",
        "timeline": timeline
      },
      "ikoll": {
        "name": "Dova",
        "characterKey": "ikoll",
        "buttonColor": "",
        "timeline": timeline
      },
      "fowl": {
        "name": "Fowl",
        "characterKey": "fowl",
        "buttonColor": "",
        "timeline": timeline
      },
      "fish": {
        "name": "F.I.S.H",
        "characterKey": "fish",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  },
  "4848": {
    "characters": {
      "naomi": {
        "name": "Naomi Samara",
        "characterKey": "naomi",
        "buttonColor": "",
        "timeline": timeline
      },
      "viola": {
        "name": "Viola",
        "characterKey": "viola",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  },
  "5784": {
    "characters": {
      "indominous": {
        "name": "Indominous Von Zarovich",
        "characterKey": "indominous",
        "buttonColor": "",
        "timeline": timeline
      },
      "ator": {
        "name": "Ator Htailog",
        "characterKey": "ator",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  },
  "0876": {
    "characters": {
      "mar": {
        "name": "Mar Corvus",
        "characterKey": "mar",
        "buttonColor": "",
        "timeline": timeline
      },
      "olorin": {
        "name": "Olorin Corvus",
        "characterKey": "olorin",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  },
  "5450": {
    "characters": {
      "storn": {
        "name": "Storn Helderian",
        "characterKey": "storn",
        "buttonColor": "",
        "timeline": timeline
      }
    }
  }
}

export function validatePlayer(name) {
  const playerObject = validPlayers[name]
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
