export function sortEvents(timeline) {
  return Object.keys(timeline).sort((a, b) => {
    return +parseInt(a) - +parseInt(b)
  })
}
