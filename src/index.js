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

export default { asyncForEach, asyncMap };
