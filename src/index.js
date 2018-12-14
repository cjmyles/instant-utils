export async function asyncForEach(arr, iteratee) {
  for (let index = 0; index < arr.length; index++) {
    await iteratee(arr[index], index, arr);
  }
}

export async function asyncMap(arr, iteratee) {
  let results = [];
  for (let index = 0; index < arr.length; index++) {
    const result = await iteratee(arr[index], index, arr);
    results.push(result);
  }
  return results;
}

export function pick(obj, keys) {
  return Object.assign({}, ...keys.map(key => ({ [key]: obj[key] })));
}

export function removeUndefineds(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') removeUndefineds(obj[key]);
    else if (obj[key] === undefined) delete obj[key];
  });
  return obj;
}
