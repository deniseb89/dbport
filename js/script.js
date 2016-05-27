var menuToggle = false;
$( "#menu" ).click(function() {
	menuToggle = !menuToggle;
	if(menuToggle == true){
		$(".links").fadeIn();
			$(".box-shadow-menu").addClass("box-shadow-menu-x");

	}else{
		$(".links").fadeOut();
			$(".box-shadow-menu").removeClass("box-shadow-menu-x");

	}
	
});