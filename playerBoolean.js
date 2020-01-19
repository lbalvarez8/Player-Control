var gameWidth = 960;
var gameHeight = 600;

var right = false;
var left = false;
var up = false;
var down = false;

var player = document.getElementById("player");

player.vx = gameWidth / 2; //placement of the image horizontally
player.vy = gameHeight / 2; //placement of the image vertically
player.width = 50; //width of the image
player.height = 67; //height of the image
player.speed = 5;

console.log(player.vy);

player.style.left = player.vx + "px";
player.style.top = player.vy + "px";

var moveTime = setInterval(movePlayer, 30);

function movePlayer() {

	if (right) {
		player.style.left = player.offsetLeft + player.speed + "px";
	}
	if (left) {
		player.style.left = player.offsetLeft - player.speed + "px";
	}
	if (up) {
		player.style.top = player.offsetTop - player.speed + "px";
	}
	if (down) {
		player.style.top = player.offsetTop + player.speed + "px";
	}

	if (left || right) {
		var checkSrc = player.src.split('/').pop();
		console.log(player.src);
		console.log(player.src.split('/'));
		console.log(player.src.split('/').pop());
		if (checkSrc != "boywalk.gif") {
			player.src = "boywalk.gif";
		}
	}
	if (up || down) {
		var checkSrc2 = player.src.split('/').pop();
		console.log(player.src);
		console.log(player.src.split('/'));
		console.log(player.src.split('/').pop());
		if (checkSrc2 != "boyjump.png") {
			player.src = "boyjump.png";
		}
	} else if (!left && !right && !up && !down) {
		player.src = "boystand.png";
	}

}
document.addEventListener("keydown", function (event) {
	console.log(event.keyCode);
	switch (event.keyCode) {
		case 39:
			player.className = "";
			right = true;
			break;

		case 37:
			player.className = "flip";
			left = true;
			break;

		case 38:
			up = true;
			break;

		case 40:
			down = true;
			break;
	}
});
document.addEventListener("keyup", function (event) {
	switch (event.keyCode) {
		case 39:
			right = false;
			break;

		case 37:
			left = false;
			break;

		case 38:
			up = false;
			break;

		case 40:
			down = false;
			break;

	}
});