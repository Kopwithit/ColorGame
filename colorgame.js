var numberOfSquares = 6;
var colors = generatorRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generatorRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function() {
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generatorRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}	
});

resetButton.addEventListener("click", function() {
	colors = generatorRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				message.textContent = "Correct!";
				resetButton.textContent = "Player Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatorRandomColors(num) {
	var arr = []
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function displayColor() {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
}