$(document).ready(function(){
	//轮播
	var flash =0
	function autoRun(){
		flash++;
		flash =(flash==3)?0:flash;
		$('.autoPlayWarp li').eq(flash).fadeIn(1000).siblings().hide()
		$('.autoPlayDot li').eq(flash).addClass('choose').siblings().removeClass('choose')
	}
	var lunbo=setInterval(function(){autoRun()},3000)
	$('.autoPlayWarp li').hover(function(){
		clearInterval(lunbo)
		flash = $(this).index()
		$('.autoPlayWarp li').eq(flash).fadeIn(1000).siblings().hide()
		$('.autoPlayDot li').eq(flash).addClass('choose').siblings().removeClass('choose')
	},function(){
		lunbo=setInterval(function(){autoRun()},3000)
	})
	
	$('.autoPlayDot li').hover(function(){
		clearInterval(lunbo)
		flash = $(this).index()
		$('.autoPlayWarp li').eq(flash).fadeIn(1000).siblings().hide()
		$('.autoPlayDot li').eq(flash).addClass('choose').siblings().removeClass('choose')
	},function(){
		lunbo=setInterval(function(){autoRun()},3000)
	})
////获取轮播图片宽高
	var image= new Image();
	image.src="image/public/5DBBD51A-A150-49B1-83E0-D1F4A7673ED3@1x.png"
	image.onload=function(){
		var bigWd=image.width
		var bigHt=image.height
		var scale=bigHt/bigWd
		// function autoPlayHW(id){
		// 	var obj = document.getElementById(id);
		// 	var wh=window.innerWidth
		// 	var autoHt = wh*scale //autoPlayWarp高度	
		// 	obj.style.height=autoHt+"px";
		// 	obj.style.width=wh+"px";
		// }
		// autoPlayHW('autoPlayWarp')
		var find = document.getElementById("autoPlayWarp").offsetWidth
		$("#autoPlayWarp").css("height",find*scale +"px")
	}	
})
$(window).resize(function(){
	//获取轮播图片宽高
	var image= new Image();
	image.src="image/public/1C18E3E0-A482-49BB-8662-F3A62BA0A503@2x.png"	
	image.onload=function(){
		var bigWd=image.width
		var bigHt=image.height
		var scale=bigHt/bigWd
		// function autoPlayHW(id){
		// 	var obj = document.getElementById(id);
		// 	var wh=window.innerWidth
		// 	var autoHt = wh*scale //autoPlayWarp高度	
		// 	obj.style.height=autoHt+"px";
		// 	obj.style.width=wh+"px";
		// }
		// autoPlayHW('autoPlayWarp')
		var find = document.getElementById("autoPlayWarp").offsetWidth
		$("#autoPlayWarp").css("height",find*scale +"px")
	}	
	// autoPlayHW('autoPlay')
})
