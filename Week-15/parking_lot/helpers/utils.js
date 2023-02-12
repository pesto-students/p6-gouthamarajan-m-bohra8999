let search = async (slot, prop, cars) => {
  for (var i = 0; i < cars.length; i++) {
    if (cars[i][prop] === slot) {
      return cars[i];
    }
  }
  return false;
};

let remove = async (slot, prop, cars) => {
  var i = cars.length;
  while (i--) {
    if (cars[i] && cars[i].hasOwnProperty(prop) && arguments.length > 2 && cars[i][prop] === slot) {
      cars.splice(i, 1);
    }
  }
  return cars;
};

module.exports = {
  search,
  remove,
};
