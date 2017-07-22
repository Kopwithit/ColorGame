var numberOfSquares = 6;
var colors = generatorRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	colorDisplay.textContent = pickedColor;
	setUpModeButtons();
	setUpSquares();
	setUpResetButton();
	reset
}

function reset(){
	colors = generatorRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	resetButton.textContent = "Reset";	
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatorRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function displayColor(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
}

function setUpModeButtons(){
	//add click listeners to mode buttons
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	//add click listeners to squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click", function() {
				var clickedColor = this.style.background;
				if (clickedColor === pickedColor) {
					message.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					changeColors(clickedColor);
					h1.style.background = clickedColor;
				} else {
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again!";
				}
		});		
	}	
}

function setUpResetButton() {
	resetButton.addEventListener("click", function(){
		reset();
	});	
}