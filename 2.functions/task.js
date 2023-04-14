function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  const avg = +(sum / arr.length).toFixed(2);
  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  sum = arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference = 0;
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let difference = 0;
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
    difference = sumEvenElement - sumOddElement;
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let average = 0;
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  average = sumEvenElement / countEvenElement;
  return average;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
