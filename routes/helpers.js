export const getBrandWithMostModels = (brands) => {
  let count = 0;
  let brandWithMostModels = [];
  let quantity = {};

  const getReturnValue =
    () => {
      return quantity[count].length > 1
        ? quantity[count]
        : quantity[count][0];
    }; 

  brands.forEach((brandObj) => {
    const brandCount = brandObj.models.length;
    if (brandCount >= count) {
      count = brandCount;
      brandWithMostModels = [...brandWithMostModels, brandObj.brand];
      if (quantity[brandCount]) {
        quantity[brandCount] = [...quantity[brandCount], brandObj.brand]
      } else {
        quantity[brandCount] = [brandObj.brand];
      }
    };
  });

  return getReturnValue();
}