export function decideDateSuffix(year, lessThanYearZero, greaterThanYearZero) {
  if (
    year == null ||
    year == undefined ||
    typeof year != 'number' ||
    lessThanYearZero == null ||
    lessThanYearZero == undefined ||
    greaterThanYearZero == null ||
    greaterThanYearZero == undefined ||
  ) {
    console.log(
      "decideDateSuffix was passed: " + year + ", " + lessThanYearZero + ", " + greaterThanYearZero
    )
    return "Error!"
  } else if (year < 0) {
    return dateToString(year, lessThanYearZero)
  } else if (year >= 0) {
    return dateToString(year, greaterThanYearZero)
  } else {
    console.log(
      "Error in decideDateSuffix.js: decideDateSuffix called else statment"
    )
    return "NaN"
  }
}

function dateToString(year, dateSuffix) {
  var date

  date = Math.abs(year)
  date = date.toString()
  if (dateSuffix !== "") {
    date = date + " " + dateSuffix
  }

  return date
}
