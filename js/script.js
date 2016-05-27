var menuToggle = false;
$( "#menu" ).click(function() {
	menuToggle = !menuToggle;
	if(menuToggle == true){
		$('#menu').addClass('is-active');
		$(".links").fadeIn();
<<<<<<< HEAD
		$("body").css("overflow" ,"hidden")
		$(".box-shadow-menu").addClass("box-shadow-menu-x");
=======
>>>>>>> 43bb6623fb29ecd8c52cfdd9a6c4c046e16809a1
	}else{
		$('#menu').removeClass('is-active');
		$(".links").fadeOut();
<<<<<<< HEAD
		$("body").css("overflow" ,"scroll")
		$(".box-shadow-menu").removeClass("box-shadow-menu-x");
=======
>>>>>>> 43bb6623fb29ecd8c52cfdd9a6c4c046e16809a1
	}
});
