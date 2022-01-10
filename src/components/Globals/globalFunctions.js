export function callIndex(option, prop, fixed, multiplyBy) {
  const type = prop;
  const value = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map((innerArrayID) =>
      (option.callExpDateMap[entry][innerArrayID][0][type] * multiplyBy).toFixed(fixed)
    );
  })[0][1];
  return value;
}

export function putIndex(option, prop, fixed, multiplyBy) {
  const type = prop;
  const value = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map((innerArrayID) =>
      (option.putExpDateMap[entry][innerArrayID][0][type] * multiplyBy).toFixed(fixed)
    );
  })[0][0];
  return value;
}

export function callIndexUnfixed(option, prop) {
  const type = prop;
  const value = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) => option.callExpDateMap[entry][innerArrayID][0][type]
    );
  })[0][1];
  return value;
}

export function putIndexUnfixed(option, prop) {
  const type = prop;
  const value = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) => option.putExpDateMap[entry][innerArrayID][0][type]
    );
  })[0][0];
  return value;
}
