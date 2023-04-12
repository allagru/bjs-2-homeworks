"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    const result = -b / (2 * a);
    arr.push(result);
  }
  if (discriminant > 0) {
    const resultA = (-b + Math.sqrt(discriminant)) / (2 * a);
    const resultB = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(resultA, resultB);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthRate = percent / 100 / 12;
  const amountToReturn = amount - contribution;
  const monthPayment = amountToReturn * (monthRate + (monthRate / ((Math.pow((1 + monthRate), countMonths) - 1))));
  const totalAmount = +(monthPayment * countMonths).toFixed(2);
  return Number.isNaN(totalAmount) ? false : totalAmount;
}