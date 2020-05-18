export function addPossesive(string) {
  if (string[string.length - 1] === 's') {
    return string + "'"
  } else {
    return string + "'s"
  }
}
