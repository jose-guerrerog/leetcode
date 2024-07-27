function isUgly(n: number): boolean {
  const factors = [2, 3, 5];
  let tempN = n;

  if (tempN === 0) {
    return false;
  }

  for (let i = 0; i < factors.length; i++) {
    if (tempN === 1) {
      break;
    }
    while (tempN % factors[i] === 0) {
      tempN = tempN / factors[i];
    }
  }

  return tempN === 1;
}
