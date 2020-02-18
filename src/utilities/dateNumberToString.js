export function dateNumberToString(dateNumber, lessThanYearZero, greaterThanYearZero) {
  var date

  if (dateNumber < 0) {
    date = Math.abs(dateNumber)
    date = date.toString()
    date = date + " " + lessThanYearZero
  } else if (dateNumber >= 0) {
    date = Math.abs(dateNumber)
    date = date.toString()
    date = date + " " + greaterThanYearZero
  }

  return date
}
