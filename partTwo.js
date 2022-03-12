"use strict";

const balance = function (
  openingSum,
  interestRate,
  taxFreeLimit,
  taxRate,
  numMonths
) {
  const initialBalance = openingSum;
  const interest = interestRate / 100;
  const tax = taxRate / 100;

  const months = new Array(numMonths);
  months.fill(1);

  let taxedAmount;

  const endOfMonthBalance = months.reduce((acc, el, i) => {
    if (acc < taxFreeLimit) {
      taxedAmount = 0;
    } else if (acc > taxFreeLimit) {
      taxedAmount = (acc - taxFreeLimit) * tax;
    }

    acc *= 1 + interest;

    console.log("ACC:", acc, "TAX:", taxedAmount);

    return (acc - taxedAmount).toFixed(2);
  }, initialBalance);

  return endOfMonthBalance;
};
console.log(balance(10000, 1, 20000, 1, 2));
console.log(balance(25000, 2, 20000, 1, 2));
console.log(balance(19800, 2, 20000, 1, 2));
console.log(balance(45800, 2, 20000, 1, 2));
