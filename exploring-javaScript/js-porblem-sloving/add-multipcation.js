function furnitureCalculation(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 100;
  const perTableWood = 50;
  const perBedWood = 450;

  // Calculate wood
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perBedWood;

  //   total amount
  const total = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return total;
}

const result = furnitureCalculation(1, 2, 1);
console.log(result);
