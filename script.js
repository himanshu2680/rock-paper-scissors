var result = "";
var userPicked = "";
var housePicked = "";
var score = 0;
// var keyPressedId = "";

// document.addEventListener("keydown", keyHandler);
// $('#bt-open').click(openNav);
// $('#bt-close').click(closeNav);

function openNav() {
	$('#rules').css('height', '100%');
}

function closeNav() {
	$('#rules').css('height', '0');
}

// function keyHandler(e) {
// 	var keyPressed = e.key;
// 	console.log(keyPressed);
// 	if (keyPressed==="r") {
// 		keyPressedId = "rock";
// 	}
// }

var namesArray =["rock", "paper", "scissors"];
for (var i = 0; i < namesArray.length; i++) {
	$("#" + namesArray[i]).click(startGame);
}

function startGame() {
	// if (namesArray.includes($(this).attr("id"))) {
	//   userPicked = $(this).attr("id");
	// }
	// else {
	//   userPicked = keyPressedId;
	// }
	userPicked = $(this).attr("id");
	var randomNumber = Math.floor(Math.random()*3);
	housePicked = namesArray[randomNumber];
	console.log(userPicked);
	console.log(housePicked);
	var userIndex = namesArray.indexOf(userPicked);
	var houseIndex = namesArray.indexOf(housePicked);
	if (userIndex==0 && houseIndex==2){
		result="win";
		score++;
	}
	else if (userIndex==2 && houseIndex==0){
		result="lose";
		score--;
	}
	else{
		if (userIndex>houseIndex){
			result="win";
			score++;
		}
		else if (houseIndex>userIndex){
			result="lose";
			score--;
		}
		else if (houseIndex===userIndex){
			result="tie";
		}
		// else{
		// 	console.log("some error occured while assigning value index to user or house");
		// }
	}
	console.log(result);
	displayResult();
}

function displayResult() {
	$("#house-picked").addClass("picked");
	setTimeout(function() {
		$("#house-picked").removeClass("picked");
		$("#house-picked").addClass(housePicked);
		if (result==="tie") {
			$("#result").text("IT'S A " + result.toUpperCase() + "!");
		}

		else{
			$("#result").text("YOU " + result.toUpperCase() + "!");
		}
		$(".score-number").text(score);
	},500);

	$("#user-picked").addClass(userPicked);
	$(".hide-later").css("display", "none");
	$(".hide-now").css("display", "flex");
}

$(".play-again").click(playAgain);

function playAgain() {
	$("#result").text(" ");
	$(".hide-now").css("display", "none");
	$(".hide-later").css("display", "flex");
	$("#user-picked").removeClass(userPicked);
	$("#house-picked").removeClass(housePicked);
}
console.log("js working");
