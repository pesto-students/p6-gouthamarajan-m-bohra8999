let maxSize = 0;
let availableSlot = [];
let cars = [];
const utilFunctions = require('./helpers/utils');

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

let leave = async (slot) => {
  slot = parseInt(slot);
  if (maxSize === 0) {
    return 'parking lot is not initiated';
  } else if (cars.length > 0) {
    if (await utilFunctions.search(slot, 'slot', cars)) {
      cars = await utilFunctions.remove(slot, 'slot', cars);
      availableSlot.push(slot);
      availableSlot.sort();
      return `Slot  numbmer ${slot} is free`;
    } else {
      return ` Slot ${slot} is already empty `;
    }
  } else {
    return `Parking lot is empty`;
  }
};

let status = async () => {
  if (maxSize === 0) {
    return 'parking lot is not initiated';
  } else if (cars.length > 0) {
    console.log('Slot No.\tRegistration No.\tColor');
    cars.forEach(function (row) {
      console.log(row.slot + '\t' + row.registratonNo + '\t' + row.color);
    });
  } else {
    return `Parking lot is empty`;
  }
};

module.exports = {
  createParkingLot,
  park,
  leave,
  status,
};
