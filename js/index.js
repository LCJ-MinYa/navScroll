/*
 * ===========================
 *
 * 首页 => index
 * @author   : LiChaoJun
 * @datetime : 2017/3/21
 *
 * ===========================
 */
(function() {
	var navInit = function() {
		var nav = $(".nav-wrap").offset().top;
		var productSummarize = $("#product-summarize").offset().top;
		var userPeople = $("#user-people").offset().top;
		var productValue = $("#product-value").offset().top;
		var productFunction = $("#product-function").offset().top;
		var productPrice = $("#product-price").offset().top;
		$(window).scroll(function() {
			if ($(this).scrollTop() > nav) {
				$(".nav-wrap").css({
					position: "fixed",
					top: "0",
					left: "0"
				})
			} else {
				$(".nav-wrap").css({
					position: "relative",
				})
			}

			if ($(this).scrollTop() > productSummarize - 200) {
				$(".nav-box").find("li").removeClass("active").eq(0).addClass("active");
			}

			if ($(this).scrollTop() > userPeople - 200) {
				$(".nav-box").find("li").removeClass("active").eq(1).addClass("active");
			}

			if ($(this).scrollTop() > productValue - 200) {
				$(".nav-box").find("li").removeClass("active").eq(2).addClass("active");
			}

			if ($(this).scrollTop() > productFunction - 200) {
				$(".nav-box").find("li").removeClass("active").eq(3).addClass("active");
			}

			if ($(this).scrollTop() > productPrice - 200) {
				$(".nav-box").find("li").removeClass("active").eq(4).addClass("active");
			}
		});
	}

	var navAnimate = function() {
		$(".nav-box").on("click", "li", function() {
			var id = "#" + $(this).find("a").attr("title");
			$("html,body").animate({
				scrollTop: $(id).offset().top - 90
			}, 500);
		})
	}

	var userPeopleInit = function() {
		$(".user-people-title").on("click", "span", function() {
			if (!$(this).hasClass("active")) {
				$(this).addClass('active').siblings().removeClass('active');
				var index = $(this).index();
				var imgArr = $(this).parent().parent().find("ul");
				imgArr.removeClass('active').eq(index).addClass('active');
			}
		});
	}

	var productFunctionInit = function() {
		$(".product-function-title").on("click", "span", function() {
			if (!$(this).hasClass("active")) {
				$(this).addClass('active').siblings().removeClass('active');
				var index = $(this).index();
				var imgArr = $(".product-function-img").find("li");
				var textArr = $(".product-function-dec").find("li");
				imgArr.removeClass('active').eq(index).addClass('active');
				textArr.removeClass('active').eq(index).addClass('active');

			}
		});
	}

	/*------ 执行方法 ------*/
	$(function() {
		navInit();
		navAnimate();
		userPeopleInit();
		productFunctionInit();
	});
}());