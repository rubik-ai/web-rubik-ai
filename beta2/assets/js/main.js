$(function () {
	$.scrollify({
		section: ".panel",
		//sectionName:false,
		scrollSpeed: 500,
		after: function (i) {
		}
	});

	$(".scroll-btn").click(function (e) {
		e.preventDefault();

		$.scrollify.next();
	});

});

$(function () {
	$.scrollify({
		section: ".panel",
		after: function () {
			if (window.location.hash === "#why") {
				document.getElementById("head-title").innerHTML = "why?";
			}
			else if (window.location.hash === "#product") {
				document.getElementById("head-title").innerHTML = "product";
			}
			else if (window.location.hash === "#career") {
				document.getElementById("head-title").innerHTML = "careers";
			}
			else if (window.location.hash === "#contact") {
				document.getElementById("head-title").innerHTML = "contact";
			}
			else {
				''
			}
		}
	});
});

$(document).ready(function () {
	if (window.location.hash === "#why") {
		document.getElementById("head-title").innerHTML = "why?";
	}
	else if (window.location.hash === "#product") {
		document.getElementById("head-title").innerHTML = "product";
	}
	else if (window.location.hash === "#career") {
		document.getElementById("head-title").innerHTML = "careers";
	}
	else if (window.location.hash === "#contact") {
		document.getElementById("head-title").innerHTML = "contact";
	}
	else {
		''
	}

	//toggle menu of click
	$("#menu a").click(function () {
		var checkBoxes = $("input");
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
	});
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


//
new WOW().init();
