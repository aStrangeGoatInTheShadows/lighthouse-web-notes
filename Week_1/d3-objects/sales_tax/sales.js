const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = function(salesData) {
  const taxProcessedObject = {};
 
  for (let i = 0; i < salesData.length; i++) {

    //const boool = Object.prototype.hasOwnProperty(taxProcessedObject, [salesData[i].name]);

    //if (!Object.prototype.hasOwnProperty.call(taxProcessedObject, [salesData[i].name])) {
    if (!taxProcessedObject.hasOwnProperty([salesData[i].name])) {
      Object.assign(taxProcessedObject, calcTaxPerObject(salesData[i]));
    } else {
      consolidateObj(taxProcessedObject, calcTaxPerObject(salesData[i]));
    }
  }
  return taxProcessedObject;
};

const consolidateObj = function(target, source) {
  const salesKey = Object.keys(source);

  target[salesKey].totalSales += source[salesKey].totalSales;
  target[salesKey].totalTaxes += source[salesKey].totalTaxes;
  return null;
};

const calcTaxPerObject = function(salesObject) {
  const calculatedTaxObject = {};

  calculatedTaxObject.totalSales = sumArrayValues(salesObject.sales);
  calculatedTaxObject.totalTaxes = calculatedTaxObject.totalSales * salesTaxRates[salesObject.province];

  return { [salesObject.name]: calculatedTaxObject };
};

const sumArrayValues = function(amountOfSales) {
  let sum = 0;

  for (let sales of amountOfSales) {
    sum += sales;
  }
  return sum;
};

const results = calculateSalesTax(companySalesData);
console.log(results);