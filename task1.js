function isTimeValid(hours, minutes) {
  if(!(hours>=0) || !(minutes>=0)) return false;
  if(hours===24){
    return minutes===0;
  }
  else {
    return hours<24 && minutes<60
  }
}