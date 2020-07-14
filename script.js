$('#bt-open').click(openNav);
$('#bt-close').click(closeNav);
var result = "";
var userPicked = "";
var housePicked = "";
function openNav() {
	$('#rules').css('height', '100%');
}

function closeNav() {
	$('#rules').css('height', '0');
}

var namesArray =["rock", "paper", "scissors"];
for (var i = 0; i < namesArray.length; i++) {
	$("#" + namesArray[i]).click(startGame);
}
function startGame() {
	userPicked = $(this).attr("id");
	var randomNumber = Math.floor(Math.random()*3);
	housePicked = namesArray[randomNumber];
	console.log(userPicked);
	// console.log("click(r,p,s) working");
	console.log(housePicked);
	var userIndex = namesArray.indexOf(userPicked);
	var houseIndex = namesArray.indexOf(housePicked);
	if (userIndex==0 && houseIndex==2){
		result="win";
	}
	else if (userIndex==2 && houseIndex==0){
		result="lose";
	}
	else{
		if (userIndex>houseIndex){
			result="win";
		}
		else if (houseIndex>userIndex){
			result="lose";
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
	if (result==="tie") {
		$("#result").text("IT'S A " + result.toUpperCase() + "!");
	}
	else{
		$("#result").text("YOU " + result.toUpperCase() + "!");
	}
	$("#user-picked").addClass(userPicked);
	// console.log(userPicked);
	$("#house-picked").addClass(housePicked);
	// console.log(housePicked);
	$(".hide-later").css("display", "none");
	$(".hide-now").css("display", "flex");
}
	$(".play-again").click(playAgain);
function playAgain() {
	$(".hide-now").css("display", "none");
	$(".hide-later").css("display", "flex");
	$("#user-picked").removeClass(userPicked);
	$("#house-picked").removeClass(housePicked);
}
console.log("js working");