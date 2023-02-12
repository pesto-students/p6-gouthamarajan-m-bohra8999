let maxSize = 0;
let availableSlot = [];
let cars = [];

let createParkingLot = async (size) => {
  try {
    maxSize = parseInt(size);
  } catch (e) {
    return 'Parameter is not a number!';
  }

  for (let i = 1; i <= maxSize; i++) {
    availableSlot.push(i);
  }
  return `Created a parking lot with ${availableSlot.length} slots`;
};

let park = async (registratonNo, color) => {
  if (maxSize === 0) {
    return `parking lot is not initiated`;
  } else if (maxSize === cars.length) {
    return `Sorry, parking lot is full`;
  } else {
    let slot = availableSlot[0];
    cars.push({
      slot: slot,
      registratonNo: registratonNo,
      color: color,
    });
    availableSlot.shift();
    return `Allocated slot number: ${slot}`;
  }
};

module.exports = {
  createParkingLot,
  park,
};
