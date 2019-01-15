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
			else if (window.location.hash === "#about-us") {
				document.getElementById("head-title").innerHTML = "about us";
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
	else if (window.location.hash === "#about-us") {
		document.getElementById("head-title").innerHTML = "about us";
	}
	else {
		document.getElementById("head-title").innerHTML = "";
	}
});

//toggle menu of click
$("#menu a").click(function () {
	var checkBoxes = $("input");
	checkBoxes.prop("checked", !checkBoxes.prop("checked"));
});


//