var board = new Array();
var timerun = 0.000;
var t;
var timebegin;
var touchOrNot = 0;
var startOrStop = 1;//0:stop, 1:start
$(function()
{
	// console.log("hahaha");
	init();
});

function init(){
	touchOrNot = 0;
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			board[i] = new Array();
			var grid = $("#grid-"+i+"-"+j);
			grid.css("top",getPosTop(i,j));
			grid.css("left",getPosLeft(i,j));
			// black block Layout work
			$("#box_container").append($("<div class='block' id='block-"+i+"-"+j+"'></div>"));
			var block = $("#block-"+i+"-"+j);
			block.css("top",getPosTop(i,j));
			block.css("left",getPosLeft(i,j));
			// set status of blocks
			board[i][j] = 0;
		}
	}
	console.log("before board: "+board);
	for(var i=0;i<4;i++){
		// generate blocks
		var randy = parseInt(Math.floor(Math.random()*3));
		var block = $("#block-"+i+"-"+randy);
		// console.log("i="+i);
		// console.log("randy="+randy);
		// avoiding black block on same column
		if(i>0){
			if(board[i-1][randy]==1){
				i--;
				continue;
			}
		}
		block.css("background-color","#000");
		board[i][randy] = 1;
	}
	$("#block-3-0").text("J to start");
	$("#block-3-1").text("K to start");
	$("#block-3-2").text("L to start");
	console.log("ini board: "+board);
}
function getPosTop(i,j){
	return i*100;
}
function getPosLeft(i,j){
	return j*100;
}