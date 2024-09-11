let classification;
let weight = 82;
let height = 1.93;
let bmi = weight / (height * height);



if (bmi < 18.5) {
  classification = 'Underweight';
} else if (bmi >= 18.5 && bmi < 25) {
  classification = 'Normal weight';
} else if (bmi >= 25 && bmi < 30) {
  classification = 'Overweight';
} else {
  classification = 'Obese';
};



console.log(`Your BMI is ${bmi.toFixed(2)} and you are classified as: ${classification}`);