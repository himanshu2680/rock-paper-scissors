alert("js working");
$('#bt-open').click(openNav);
$('#bt-close').click(closeNav);

function openNav() {
	$('#rules').css('height', '100%');
}

function closeNav() {
	$('#rules').css('height', '0');
}