$(function() {
	document.onreadystatechange = function() {
		if(document.readyState == "complete") {
			$("#loading").fadeOut();
		}
	}
	//音乐开关
	$("#audio_btn").click(function() {
		var music = document.getElementById("music");
		if(music.paused) {
			music.play();
			$("#music_btn").attr("src", "img/play.png");
		} else {
			music.pause();
			$("#music_btn").attr("src", "img/pause.png");
		}
	});
	//菜单按钮
	$("#menu").click(function() {
		if($(this).hasClass('toggled')) {
			$(this).removeClass("toggled");
			$("nav").removeClass("toggled");
			return false;
		} else {
			$(this).addClass("toggled");
			$("nav").addClass("toggled");
			return false;
		}
	});
	//轮播
	$(".carousel-content").carousel({
		carousel: ".carousel", //轮播图容器
		indexContainer: ".img-index", //下标容器
		prev: ".carousel-prev", //左按钮
		next: ".carousel-next", //右按钮
		timing: 5000, //自动播放间隔
		animateTime: 600, //动画时间
		auto: false, //是否自动播放
	});
	$(document).ready(function() {
		//锚点跳转滑动效果
		$('a[href*=#],area[href*=#]').click(function() {
			console.log(this.pathname)
			if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				if($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
							scrollTop: targetOffset
						},
						800);
					return false;
				}
			}
		});
		// 网页定位导航  
		$(window).scroll(function() {
			/*在这里做一些事情*/
			//noinspection JSValidateTypes  
			var top;
			//noinspection JSValidateTypes  
			top = $(document).scrollTop();
			var menu = $("#right_nav");
			var items = $("#content").find(".module");
			var currentId = ""; //当前所在的楼层(module) #id  
			items.each(function() {
				var m = $(this);
				var itemTop = m.offset().top;
				/* console.log(itemTop);*/
				if(top > itemTop - 200) {
					currentId = '"#' + m.attr("id") + '"';
				} else {
					return false;
				}
			})
			//给相应的楼层a设置class：current，取消其他链接的crrent  
			var currentLink = menu.find(".current");
			if(currentId && currentLink.attr("href") != currentId) {
				currentLink.removeClass("current");
				menu.find('[href=' + currentId + ']').addClass("current");
			}
		})
		//typed
		$(".typed").typed({
			strings: ["My name is Nichang", "I'm a third year student in YTU.", "Love basketball and music.","Look forward to communicating with you."],
			typeSpeed: 100,
			backDelay: 900,
			// loop
			loop: true
		});
		//Skill
		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.count-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});
		//experience
		jQuery('.events').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).animate({
					opacity: "1"
				}, 2000);
			});
		});
		$('.VivaTimeline').vivaTimeline({
			carousel: true,
			carouselTime: 3000
		});
	});
})