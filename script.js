const decimalToBinary = (num) => {
  let binaryStr = num.toString(2);
  return binaryStr;
};

const num = prompt("Enter a decimal number:");
const binaryStr = decimalToBinary(parseInt(num));
alert(binaryStr);

module.exports = decimalToBinary;
