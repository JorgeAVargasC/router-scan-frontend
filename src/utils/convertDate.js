export function convertDate(dateTZUTC, format = 'date') {
  let date = null

  if (!dateTZUTC?.includes('Z')) {
    date = new Date(`${dateTZUTC}Z`)
  } else {
    date = new Date(dateTZUTC)
  }

  const dateToStandardTime = (date) => `${date.toLocaleTimeString()}`
  const dateToStandardDate = (date) => `${date.toLocaleDateString()}`

  const dateToFormat1 = (date) =>
    `${
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0')
    }`
  const dateToFormat2 = (date) =>
    `${
      date.getDate().toString().padStart(2, '0') +
      '/' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '/' +
      date.getFullYear()
    }`

  const optionsFormat = {
    date: dateToStandardDate(date),
    time: dateToStandardTime(date),
    'date time': `${dateToStandardDate(date)} ${dateToStandardTime(date)}`,
    'YYYY-MM-DD': dateToFormat1(date),
    'DD/MM/YYYY': dateToFormat2(date),
  }

  return optionsFormat[format]
}
