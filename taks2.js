function addMinutes(hours, minutes,extraMinutes) {
  let time = hours * 60 + minutes + extraMinutes;
  console.log(time);
  time = time - (Math.floor(time/1440)*1440);
  console.log(time);
  hours = `${Math.floor(time / 60)}`;
  minutes = `${time % 60}`;
  if(hours.length<2) hours = '0' + hours;
  if(minutes.length<2) minutes = '0' + minutes;
  let timeString = `${hours}:${minutes}`;
  return timeString;
}