function factorial(s) {
  if (s !== 1) {
    return s * factorial(--s);
  } else {
    return 1;
  }
}