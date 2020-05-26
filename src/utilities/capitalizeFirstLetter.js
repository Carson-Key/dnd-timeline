export function capitalizeFirstLetter(string) {
  if (string === "" || string === null || string === undefined) {
    return ""
  } else {
    return string[0].toUpperCase() + string.slice(1)
  }
}
