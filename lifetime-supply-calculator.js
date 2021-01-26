const calculateSupply = function(age, numPerDay){
const maxAge = 100;
const totalNeeded = numPerDay * 365 *(maxAge - age);
let message = "Je hebt " + numPerDay +  " nodig om mee te gaan tot de rijpe leeftijd van " + age + " jaar";
console.log(message);
};

calculateSupply(20, 36);
calculateSupply(5, 50);
calculateSupply(100, 10);
