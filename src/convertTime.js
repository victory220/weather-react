const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function addZero(str) {
  str = str.toString();
  if (str.length === 1) {
    return `0${str}`;
  } else {
    return str;
  }
}

export default function convertTime(time) {
  time = time * 1000;
  const date = new Date(time);
  const returnDate = `${days[date.getDay()]} ${addZero(
    date.getHours()
  )}:${addZero(date.getMinutes())}`;
  return returnDate;
}
