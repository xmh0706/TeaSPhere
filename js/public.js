$(document).ready(function(){
	//轮播
	var flash =0
	function autoRun(){
		flash++;
		flash =(flash==3)?0:flash;
		$('.autoPlayWarp li').eq(flash).fadeIn(1000).siblings().hide()
		$('.autoPlayDot li').eq(flash).addClass('choose').siblings().removeClass('choose')
	}
	var lunbo=setInterval(function(){autoRun()},4000)
	$('.autoPlayWarp li').hover(function(){
		clearInterval(lunbo)
		flash = $(this).index()
		$('.autoPlayWarp li').eq(flash).fadeIn(1000).siblings().hide()
		$('.autoPlayDot li').eq(flash).addClass('choose').siblings().removeClass('choose')
	},function(){
		lunbo=setInterval(function(){autoRun()},4000)
	})
	
	$('.autoPlayDot li').hover(function(){
		clearInterval(lunbo)
		flash = $(this).index()
		$('.autoPlayWarp li').eq(flash).fadeIn(1000).siblings().hide()
		$('.autoPlayDot li').eq(flash).addClass('choose').siblings().removeClass('choose')
	},function(){
		lunbo=setInterval(function(){autoRun()},4000)
	})
////获取轮播图片宽高
	var image= new Image();
	image.src="image/public/5DBBD51A-A150-49B1-83E0-D1F4A7673ED3@1x.png"
	image.onload=function(){
		var bigWd=image.width
		var bigHt=image.height
		var scale=bigHt/bigWd
		var find = document.getElementById("autoPlayWarp").offsetWidth
		$("#autoPlayWarp").css("height",find*scale +"px")
	}	
})

$(window).resize(function(){
	//获取轮播图片宽高
	var image= new Image();
	image.src="image/public/5DBBD51A-A150-49B1-83E0-D1F4A7673ED3@1x.png"	
		var bigWd=image.width
		var bigHt=image.height
		var scale=bigHt/bigWd
		var find = document.getElementById("autoPlayWarp").offsetWidth
		$("#autoPlayWarp").css("height",find*scale +"px")	
})
