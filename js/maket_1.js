$(document).ready(function () {
	$(".header_top_burger").click(function (event) {
		$(".header_top_burger, .header_top_menu").toggleClass('active');
		$("body").toggleClass('lock');
	});
});


$(document).ready(function () {
	$(".menu_item_1").hover(function (event) {
		$(".menu_title_1, .menu_text_1, .menu_item_line_1").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".menu_item_2").hover(function (event) {
		$(".menu_title_2, .menu_text_2, .menu_item_line_2").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".menu_item_3").hover(function (event) {
		$(".menu_title_3, .menu_text_3, .menu_item_line_3").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".menu_item_4").hover(function (event) {
		$(".menu_title_4, .menu_text_4, .menu_item_line_4").toggleClass('active');
	});
});


$(document).ready(function () {
	$(".projects_button_button_1").hover(function (event) {
		$(".projects_button_button_1, .projects_button_button_1").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".projects_button_button_2").hover(function (event) {
		$(".projects_button_button_2, .projects_button_button_2").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".projects_button_button_3").hover(function (event) {
		$(".projects_button_button_3, .projects_button_button_3").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".projects_button_button_4").hover(function (event) {
		$(".projects_button_button_4, .projects_button_button_4").toggleClass('active');
	});
});
$(document).ready(function () {
	$(".projects_button_button_5").hover(function (event) {
		$(".projects_button_button_5, .projects_button_button_5").toggleClass('active');
	});
});


$(document).ready(function () {
	$(".projects_item_1").hover(function (event) {
		$(".projects_item_1, .projects_item_1").toggleClass('active');

		let image = $(".project_item_img_1").attr('src');

		if (image == "img/project_1_2.png") {
			$(".project_item_img_1").attr("src", "img/project_1.png");
		}
		else {
			$(".project_item_img_1").attr("src", "img/project_1_2.png");
		}
	});
});
$(document).ready(function () {
	$(".projects_item_2").hover(function (event) {
		$(".projects_item_2, .projects_item_2").toggleClass('active');

		let image = $(".project_item_img_2").attr('src');

		if (image == "img/project_2_2.png") {
			$(".project_item_img_2").attr("src", "img/project_2.png");
		}
		else {
			$(".project_item_img_2").attr("src", "img/project_2_2.png");
		}
	});
});
$(document).ready(function () {
	$(".projects_item_3").hover(function (event) {
		$(".projects_item_3, .projects_item_3").toggleClass('active');

		let image = $(".project_item_img_3").attr('src');

		if (image == "img/project_3_2.png") {
			$(".project_item_img_3").attr("src", "img/project_3.png");
		}
		else {
			$(".project_item_img_3").attr("src", "img/project_3_2.png");
		}
	});
});
$(document).ready(function () {
	$(".projects_item_4").hover(function (event) {
		$(".projects_item_4, .projects_item_4").toggleClass('active');

		let image = $(".project_item_img_4").attr('src');

		if (image == "img/project_4_2.png") {
			$(".project_item_img_4").attr("src", "img/project_4.png");
		}
		else {
			$(".project_item_img_4").attr("src", "img/project_4_2.png");
		}
	});
});
$(document).ready(function () {
	$(".projects_item_5").hover(function (event) {
		$(".projects_item_5, .projects_item_5").toggleClass('active');

		let image = $(".project_item_img_5").attr('src');

		if (image == "img/project_5_2.png") {
			$(".project_item_img_5").attr("src", "img/project_5.png");
		}
		else {
			$(".project_item_img_5").attr("src", "img/project_5_2.png");
		}
	});
});
$(document).ready(function () {
	$(".projects_item_6").hover(function (event) {
		$(".projects_item_6, .projects_item_6").toggleClass('active');

		let image = $(".project_item_img_6").attr('src');

		if (image == "img/project_6_2.png") {
			$(".project_item_img_6").attr("src", "img/project_6.png");
		}
		else {
			$(".project_item_img_6").attr("src", "img/project_6_2.png");
		}
	});
});



$(document).ready(function () {
	$(".video").hover(function (event) {

		let image = $(".video").css("background");

		// if(image == 'rgba(0, 0, 0, 0) url("file:///D:/Front-end/makety/Maket_1%20%E2%80%94%20kopia/img/video.png") no-repeat scroll 50% 0% / cover padding-box border-box'){
		// 	$(".video").css('background', 'rgba(0, 0, 0, 0) url("file:///D:/Front-end/makety/Maket_1%20%E2%80%94%20kopia/img/video_2.png") no-repeat scroll 50% 0% / cover padding-box border-box');
		// }
		// else if(image == 'rgba(0, 0, 0, 0) url("file:///D:/Front-end/makety/Maket_1%20%E2%80%94%20kopia/img/video_2.png") no-repeat scroll 50% 0% / cover padding-box border-box'){
		// 	$(".video").css('background', 'rgba(0, 0, 0, 0) url("file:///D:/Front-end/makety/Maket_1%20%E2%80%94%20kopia/img/video.png") no-repeat scroll 50% 0% / cover padding-box border-box');
		// }
	});

	$(".video_img").hover(function (event) {

		let image = $(".video_img img").attr("src");

		if (image == "img/video_icon.png") {
			$(".video_img img").attr('src', 'img/video_icon_2.png');
		}
		else {
			$(".video_img img").attr('src', 'img/video_icon.png');
		}
	});
});


$(document).ready(function () {
	$(".posts_item_1").hover(function (event) {
		$(".posts_item_1, .posts_item_img_1, .posts_item_title_1, .posts_item_text_1").toggleClass('active');

		let image = $(".posts_item_img_1 img").attr('src');

		if (image == "img/posts_1.png") {
			$(".posts_item_img_1 img").attr("src", "img/posts_1_2.png");
		}
		else {
			$(".posts_item_img_1 img").attr("src", "img/posts_1.png");
		}
	});
});
$(document).ready(function () {
	$(".posts_item_2").hover(function (event) {
		$(".posts_item_2, .posts_item_img_2, .posts_item_title_2, .posts_item_text_2").toggleClass('active');

		let image = $(".posts_item_img_2 img").attr('src');

		if (image == "img/posts_2.png") {
			$(".posts_item_img_2 img").attr("src", "img/posts_2_2.png");
		}
		else {
			$(".posts_item_img_2 img").attr("src", "img/posts_2.png");
		}
	});
});
$(document).ready(function () {
	$(".posts_item_3").hover(function (event) {
		$(".posts_item_3, .posts_item_img_3, .posts_item_title_3, .posts_item_text_3").toggleClass('active');

		let image = $(".posts_item_img_3 img").attr('src');

		if (image == "img/posts_3.png") {
			$(".posts_item_img_3 img").attr("src", "img/posts_3_2.png");
		}
		else {
			$(".posts_item_img_3 img").attr("src", "img/posts_3.png");
		}
	});
});







































