// Funtion to calculate the BMI of a person based off of wieght in kg and height in meters.
function calculateBmi(weight, height) {
	let Bmi = Math.floor(weight / (height * height));
	console.log(Bmi);
}

calculateBmi(75, 1.8);
