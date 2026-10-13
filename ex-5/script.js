// Question 1: Find Shortest and Longest Word
function findWords() {
  var sentence = document.getElementById("sentence").value;
  var words = sentence.split(" ");
  var shortest = words[0];
  var longest = words[0];

  for (var i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) shortest = words[i];
    if (words[i].length > longest.length) longest = words[i];
  }

  document.getElementById("wordResult").innerHTML =
    "Shortest: " + shortest + "<br>Longest: " + longest;
}

// Question 2: BMI Calculator
function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var bmi = weight / (height * height);
  var bodyType;

  if (bmi < 18) bodyType = "Underweight";
  else if (bmi <= 25) bodyType = "Normal";
  else if (bmi <= 30) bodyType = "Overweight";
  else bodyType = "Obese";

  document.getElementById("score").innerHTML = bmi.toFixed(2);
  document.getElementById("type").innerHTML = bodyType;
}

// Question 3: Fruit Farm
function grow() {
  var rows = parseInt(document.getElementById("rows").value);
  var columns = parseInt(document.getElementById("columns").value);
  var fruits = ["Orange.jpg", "Apple.jpg"];
  document.getElementById("garden").innerHTML = "";

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      var number = Math.floor(Math.random() * 2);
      document.getElementById("garden").innerHTML +=
        "<img src='" + fruits[number] + "' width='100' height='100'>";
    }
    document.getElementById("garden").innerHTML += "<br>";
  }
}

// Question 4: Currency Converter
function convert() {
  var amount = parseFloat(document.getElementById("data").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var result;

  if (from == "INR" && to == "USD") result = amount * 0.015;
  else if (from == "USD" && to == "INR") result = amount * 67.12;
  else result = amount;

  document.getElementById("answer").innerHTML =
    result.toFixed(2) + " " + to;
}

// Question 5: Coin Flip
var heads = 0;
var tails = 0;

document.getElementById("flip").addEventListener("click", flipFunction);

function flipFunction() {
  var random = Math.floor(Math.random() * 2);

  if (random == 0) {
    document.getElementById("coin").src = "heads.jpg";
    heads++;
  } else {
    document.getElementById("coin").src = "tails.jpg";
    tails++;
  }

  document.getElementById("num_heads").innerHTML = heads;
  document.getElementById("num_tails").innerHTML = tails;
}

// Question 6: Birthday Cake Order
document.getElementById("submit").addEventListener("click", calculateOrder);

function calculateOrder() {
  var small = parseInt(document.getElementById("small").value);
  var medium = parseInt(document.getElementById("medium").value);
  var large = parseInt(document.getElementById("large").value);

  var cakeCost = (small * 100) + (medium * 200) + (large * 400);
  var tax = cakeCost * 0.09;
  var totalAfterTax = cakeCost + tax;

  var tipPercent = parseInt(
    document.querySelector('input[name="tip"]:checked').value
  );
  var tip = totalAfterTax * (tipPercent / 100);
  var total = totalAfterTax + tip;

  document.getElementById("price").innerHTML = total.toFixed(2);
}
