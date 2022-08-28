export const getTopBrands = (brands, by = 'mostModels') => {
  let count = 0;
  const quantity = {};
  const isByMostModels = by === 'mostModels';
  const isByLeastModels = by === 'leastModels';

  const predicate = (modelsLength) => {
    if (isByMostModels)
      return modelsLength >= count;

    if (isByLeastModels)
      return modelsLength <= count;

    return false;
  };

  for (let i = 0; i < brands.length; i++) {
    const brandObj = brands[i]
    const modelsLength = brandObj.models.length;
    const isFirstIteration = i === 0;

    if (isByLeastModels && isFirstIteration) {
      count = modelsLength;
      continue;
    }

    if (predicate(modelsLength)) {
      count = modelsLength;
      if (quantity[modelsLength]) {
        quantity[modelsLength] = [...quantity[modelsLength], brandObj.brand];
      } else {
        quantity[modelsLength] = [brandObj.brand];
      }
    }
  }
  
  return quantity[count].length > 1 ? quantity[count] : quantity[count][0];
};
