var menuToggle = false;
$( "#menu" ).click(function() {
	menuToggle = !menuToggle;
	if(menuToggle == true){
		$(".links").fadeIn();
		$("body").css("overflow" ,"hidden")
		$(".box-shadow-menu").addClass("box-shadow-menu-x");
	}else{
		$(".links").fadeOut();
		$("body").css("overflow" ,"scroll")
		$(".box-shadow-menu").removeClass("box-shadow-menu-x");
	}
});