export function decideDateSuffix(year, lessThanYearZero, greaterThanYearZero) {
  if (year < 0) {
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
  date = date + " " + dateSuffix

  return date
}
