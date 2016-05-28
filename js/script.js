var menuToggle = false;
$( "#menu" ).click(function() {
	menuToggle = !menuToggle;
	if(menuToggle == true){
		$('#menu').addClass('is-active');
		$(".links").fadeIn();
	}else{
		$('#menu').removeClass('is-active');
		$(".links").fadeOut();
	}
});
