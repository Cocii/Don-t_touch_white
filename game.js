// get keyboard event
$(document).keydown(function(event) {
	// "event" is the formal parameter of the keydown event,event.keyCode to get the code of keyboard
	if (startOrStop == 1) {
		switch (event.keyCode) {
			case 74: //J
				if (board[3][0] == 1) {
					if (touchOrNot == 0) {
						timeBegin();
						clearText();
						touchOrNot = 1;
					}
					movedown();
				} else {
					isGameOver();
				}
				break;
			case 75: //K
				if (board[3][1] == 1) {
					if (touchOrNot == 0) {
						timeBegin();
						clearText();
						touchOrNot = 1;
					}
					movedown();
				} else {
					isGameOver();
				}
				break;
			case 76: //L
				if (board[3][2] == 1) {
					if (touchOrNot == 0) {
						timeBegin();
						clearText();
						touchOrNot = 1;
					}
					movedown();
				} else {
					isGameOver();
				}
				break;
		}
	}
})

function movedown() {
	for (var i = 3; i >= 0; i--) {
		for (var j = 0; j < 3; j++) {
			var block = $("#block-" + i + "-" + j);
			var before = $("#block-" + [i - 1] + "-" + j);
			if (i == 0) {
				board[i][j] = 0;
				block.css("background-color", "#fff");
				continue;
			}
			if (board[i][j] == 1) {
				board[i][j] = 0;
				block.css("background-color", "#fff");
			}
			if (board[i - 1][j] == 1) {
				board[i][j] = 1;
				board[i - 1][j] = 0;
				block.css("background-color", "#000");
				before.css("background-color", "#fff");
			}
		}
	}
	// random a black block on row1
	var randy = parseInt(Math.floor(Math.random() * 3));
	var block = $("#block-0-" + randy);
	board[0][randy] = 1;
	block.css("background-color", "#000");
}

function timeBegin(){
	timebegin = new Date().getTime();
	console.log("timeBegin:",timebegin);
	timeRun();
}
function timeRun() {
	var timeinter = new Date().getTime()-timebegin;
	timerun = (timeinter*0.001).toFixed(3);
	// console.log("timeEnd:",timeend);
	// console.log("timebegin:",timebegin);
	// console.log("timeinter:",timeinter);
	// console.log(timerun.toString().substr(0, 5));
	$("span").text(timerun.toString().substr(0, 5));
	t = setTimeout("timeRun()", 1);
}

function clearText() {
	$("#block-3-0").text("");
	$("#block-3-1").text("");
	$("#block-3-2").text("");
}
// to judge game
function isGameOver() {
	// stop the time
	clearTimeout(t);
	// End of game tips
	$("#box_container").append("<div id='gameover' class='gameover'><p>Time cost</p><span>" + timerun.toString().substr(
		0, 5) + " seconds</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
	var gameover = $("#gameover");
	gameover.css("width", "300px");
	gameover.css("height", "400px");
	gameover.css("background-color", "rgba(0,0,0,0.5)");
	startOrStop = 0;
	timerun = 0;
}

function restartgame() {
	startOrStop = 1;
	$("#gameover").remove();
	$(".block").remove();
	$("#time_box").html("<span>0.000</span>" + "seconds");
	// re initialize
	init();
}
