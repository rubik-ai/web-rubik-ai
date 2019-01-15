
$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > 150) {
		$(".scroll-more").css("visibility", "hidden");
	};
	
	//vertical text in sidebar
	if (height > 50) {
		$(".page-title-head").addClass("appear");
	}
	else { $(".page-title-head").removeClass("appear"); }

});



//toggle menu of click
$("#menu a").click(function () {
	var checkBoxes = $("#menuToggle input");
	checkBoxes.prop("checked", !checkBoxes.prop("checked"));
});


//
new WOW().init();