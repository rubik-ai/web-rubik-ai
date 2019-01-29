$(function () {
	$.scrollify({
		section: ".panel",
		//sectionName:false,
		scrollSpeed: 1100,
		after: function (i) {
		}
	});

	$(".scroll,.scroll-btn").click(function (e) {
		e.preventDefault();

		$.scrollify.next();
	});

});

$(function () {
	$.scrollify({
		section: ".panel",
		after: function () {
			if (window.location.hash === "#why-us") {
				document.getElementById("head-title").innerHTML = "why us";
			}
			else if (window.location.hash === "#product") {
				document.getElementById("head-title").innerHTML = "product";
			}
			else if (window.location.hash === "#career") {
				document.getElementById("head-title").innerHTML = "career";
			}
			else {
				document.getElementById("head-title").innerHTML = "";
			}
		}
	});
});

$(document).ready(function () {
	if (window.location.hash === "#why-us") {
		document.getElementById("head-title").innerHTML = "why us";
	}
	else if (window.location.hash === "#product") {
		document.getElementById("head-title").innerHTML = "product";
	}
	else if (window.location.hash === "#career") {
		document.getElementById("head-title").innerHTML = "career";
	}
	else {
		document.getElementById("head-title").innerHTML = "";
	}
});

$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > 150) {
		$(".scroll-more").css("visibility", "hidden");
	};
	
	//vertical text in sidebar
	if (height > 250) {
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