function isTimeValid(hours, minutes) {
  let time = hours * 60 + minutes;
  return time <= 1440;
}