var colors = generatorRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				message.textContent = "Correct!";
				changeColors(clickedColor);
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

fucntion generatorRandomColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		var r = Math.floor(Math.random * num + 1);
		var g = Math.floor(Math.random * num + 1);
		var b = Math.floor(Math.random * num + 1);
		arr.push("rgb" + );
	}
	return arr;
}

function randomColor() {
	var color = "rgb(";
	Math.floor(Math.random() * 256);
	for (var i = 0; i < 3;)
	return color;
}