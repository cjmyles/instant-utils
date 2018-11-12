export async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export async function asyncMap(array, callback) {
  let results = [];
  for (let index = 0; index < array.length; index++) {
    const result = await callback(array[index], index, array);
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
