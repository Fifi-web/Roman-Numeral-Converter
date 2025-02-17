const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

function convertToRoman(num) {
  let result = "";
  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

convertButton.addEventListener("click", () => {
  const num = numberInput.value;
  if (num === "") {
    outputDiv.textContent = "Please enter a valid number";
  } else if (num < 1) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
  } else {
    outputDiv.textContent = convertToRoman(num);
  }
});