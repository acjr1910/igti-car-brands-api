const brands = (data) => {
  const sort = () => {
    return data.sort((a, b) => b.models.length - a.models.length);
  };

  const getBrandsWith = (option = "mostModels") => {
    let modelsQty = 0;
    switch (option) {
      case "mostModels":
        modelsQty = sortedData[0].models.length;
        break;
      case "leastModels":
        modelsQty = sortedData[sortedData.length - 1].models.length;
        break;
      case "default":
        modelsQty = 0;
    }
    const getAllWithMostValues = sortedData.filter(
      (b) => b.models.length === modelsQty
    );
    const mapBrandNames = getAllWithMostValues.map((o) => o.brand);
    return mapBrandNames.length > 1 ? mapBrandNames : mapBrandNames[0];
  };

  const sortedData = sort();

  return {
    getBrandsWith,
  };
};

export default brands;
