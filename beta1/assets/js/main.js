
$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > 150) {
		$(".scroll-more").css("visibility", "hidden");
	};
	if (height > 200) {
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
$(function(){
	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');
  
	$('.nav-tabs a').click(function (e) {
	  $(this).tab('show');
	  var scrollmem = $('body').scrollTop();
	  window.location.hash = this.hash;
	  $('html,body').scrollTop(scrollmem);
	});
  });