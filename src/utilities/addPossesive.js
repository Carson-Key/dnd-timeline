export function addPossesive(string) {
  if (string === "" || string === null || string === undefined) {
    return ""
  }
  else if (string[string.length - 1] === 's') {
    return string + "'"
  } else {
    return string + "'s"
  }
}
