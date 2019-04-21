function isPointInCircle(x, y) {
  return Math.sqrt(Math.pow(x-3,2) + Math.pow(y-5,2)) <= 4;
}
function isPointInQuadrangle(x, y) {
  if (x >= -0.73 && x <= 5) {
    y1 = (2 * x - 10) / 5;
    y2 = (15 - 3 * x) / 5;
    return y2 >= y && y >= y1;
  }
  if (-5.25 <= x && x <= -0.73) {
    y1 = (2 * x - 10)/5;
    y2 = (4 * x + 28) / 7;
    return y2 >= y && y >= y1;
  }
  if (-8.615 <= x && x <= -5.25) {
    y1 = (-3 * x - 24) / 2;
    y2 = (4 * x + 28) / 7;
    return y2 >= y && y >= y1;
  }
  return false;

}
