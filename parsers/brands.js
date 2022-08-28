const brands = (data) => {
  const sort = () => {
    return data.sort((a, b) => b.models.length - a.models.length);
  };

  const getBrandsWith = (option = "mostModels") => {
    const sortedData = sort();
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

  const getNBrandsWith = (n, option = "mostModels") => {
    const N = n > data.length ? data.length - 1 : n;
    let sortedData = [];
    switch (option) {
      case "mostModels":
        sortedData = sort();
        break;
      case "leastModels":
        sortedData = sort().reverse();
        break;
      case "default":
        sortedData = [];
    }
    let formatted = [];
    for (let i = 0; i < N; i++) {
      formatted = [...formatted, `${data[i].brand} - ${data[i].models.length}`];
    }
    return formatted;
  }

  const getModelsByBrandName = (name) => {
    if (name.length === 0) return [];
    const regex = new RegExp(name, 'i');
    const result = data.find(o => regex.test(o.brand));
    return result && result.models;
  }

  return {
    getBrandsWith,
    getNBrandsWith,
    getModelsByBrandName
  };
};

export default brands;
