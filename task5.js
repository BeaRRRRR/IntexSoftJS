function getSum(s) {
  return (s * (s + 1)) / 2;
}

function getSumWithRecursion(s) {
  if (s !== 1) {
    return s + getSumWithRecursion(--s);
  } else {
    return 1;
  }
}