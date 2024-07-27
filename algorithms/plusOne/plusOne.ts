function plusOne(digits: number[]): number[] {
  const res: number[] = [];
  let addNumber = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
      const newDigit = digits[i] + addNumber
      if (newDigit <= 9) {
          addNumber = 0;
          res.push(newDigit);
      } else {
          res.push(0);
      }
  }
  
  if (addNumber === 1) {
      res.push(1);
  }

  return res.reverse();
};