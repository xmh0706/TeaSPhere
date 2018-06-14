window.onload=function(){
//读取时设置播放背景宽和高
	var image= new Image();
	var image2= new Image()
	image.src="image/index/41FF3C78-6827-429C-A5F3-5E68C8F630D6@2x.png"
	//获取autoPlayWarp大图位置
	image2.src="image/index/3867EF6E-3FA2-4C01-8072-DD7A347B48F0@2x.png"
		//获取find图位置
	image.onload=function(){
		var bigWd=image.width
		var bigHt=image.height
		var scale=bigHt/bigWd
		var bigWd2=image2.width
		var bigHt2=image2.height
		var scale2=bigHt2/bigWd2	
		// function autoPlayHW(id){
		// 	var obj = document.getElementById(id);
		// 	var wh=window.innerWidth
		// 	var autoHt = wh*scale //autoPlayWarp高度	
		// 		obj.style.height=autoHt+"px";
		// 		obj.style.width=wh+"px"; 
		// }
		// autoPlayHW('autoPlayWarp')
		// autoPlayHW('autoWarp')
		var find = document.getElementById("autoPlayWarp").offsetWidth
		$("#autoPlayWarp").css("height",find*scale +"px")
		$("#autoWarp").css("height",find*scale+"px")
		var find = document.getElementById("findFont").offsetWidth
		$("#findText li").css("height",find*scale2 +"px")
		$("#findText li div").css("height",find*scale2+"px")
	}

	function animate(id1,id2,num){
		var scrollTop= document.documentElement.scrollTop || document.body.scrollTop;
		var com = document.getElementById(id1).offsetTop-num
		var com1 = document.getElementById(id2)
		if(scrollTop >= com){
			com1.style.top="0px"
			com1.style.opacity='1'
		}
	}
	animate("commitment","commitmentWarpli1",600)
	animate("commitment","commitmentWarpli2",600)
	animate("commitment","commitmentWarpli3",600)
	animate("find","findTitle",600)
	animate("find","findText",600)
	animate("products","productsTitle",200)
	animate("products","productsText",200)
	animate("activity","activityTitle",200)
	animate("activity","activityText",200)
	animate("cooperate","cooperate",200)
	animate("last","last",200)
	window.onscroll = function(){
		animate("commitment","commitmentWarpli1",600)
		animate("commitment","commitmentWarpli2",600)
		animate("commitment","commitmentWarpli3",600)
		animate("find","findTitle",600)
		animate("find","findText",600)
		animate("products","productsTitle",600)
		animate("products","productsText",600)
		animate("activity","activityTitle",600)
		animate("activity","activityText",600)
		animate("cooperate","cooperate",600)
		animate("last","last",600)
	}
	//
	// function findHeight(id){
	// 	var obj = document.getElementById(id);
	// 	var li =obj.getElementsByTagName("li")
	// 	var wh=window.innerWidth
	// 	var findHt = wh*830/576/5 //find 高度
	// 	var scrollWh =window.innerWidth-document.body.clientWidth //滚动条宽度
	// 	var findWh = (wh-scrollWh)/5 //单个图片大小
	// 	var coleft =document.getElementById("cooperateLeft")
	// 	var coright =document.getElementById("cooperateRight")
	// 	for (var i = 0; i<5; i++) {
	// 		li[i].style.width=findWh+"px"
	// 	}
	// 	coright.style.width=findWh*5/2+"px";
	// 	coright.style.height=findWh*5/2*538/720+"px";
	// 	coleft.style.width=findWh*5/2+"px";
	// 	coleft.style.height=findWh*5/2*538/720+"px";
	// 	obj.style.height=findHt+"px";
	// }
	// findHeight('findText')
}
//窗口变动触发
$(window).resize(function(){
	var image= new Image();
	var image2= new Image()
	image.src="image/index/41FF3C78-6827-429C-A5F3-5E68C8F630D6@2x.png"
	//获取autoPlayWarp大图位置
	image2.src="image/index/3867EF6E-3FA2-4C01-8072-DD7A347B48F0@2x.png"
		//获取find图位置
	image.onload=function(){
		var bigWd=image.width
		var bigHt=image.height
		var scale=bigHt/bigWd
		var bigWd2=image2.width
		var bigHt2=image2.height
		var scale2=bigHt2/bigWd2	
		// function autoPlayHW(id){
		// 	var obj = document.getElementById(id);
		// 	var wh=window.innerWidth
		// 	var autoHt = wh*scale //autoPlayWarp高度	
		// 		obj.style.height=autoHt+"px";
		// 		obj.style.width=wh+"px"; 
		// }
		// autoPlayHW('autoPlayWarp')
		// autoPlayHW('autoWarp')
		var find = document.getElementById("autoPlayWarp").offsetWidth
		$("#autoPlayWarp").css("height",find*scale +"px")
		$("#autoWarp").css("height",find*scale+"px")
		var find = document.getElementById("findFont").offsetWidth
		$("#findText li").css("height",find*scale2 +"px")
		$("#findText li div").css("height",find*scale2+"px")
	}
//
// 	function autoPlayWidth(id,id2){
// 		var obj = document.getElementById(id);
// 		var obj2 = document.getElementById(id2);
// 		var wh=window.innerWidth
// 		var num = wh/1940;
// 		obj.style.width=wh+"px"; 
// 		// obj2.style.transform="scale("+num+","+num+")";
// 	}
// 	autoPlayWidth('autoWarp','autoLogo')
// // //
// 	function findHeight(id){
// 		var obj = document.getElementById(id);
// 		var li =obj.getElementsByTagName("li")
// 		var wh=window.innerWidth
// 		var findHt = wh*830/576/5 //find 高度
// 		var scrollWh =window.innerWidth-document.body.clientWidth //滚动条宽度
// 		var findWh = (wh-scrollWh)/5 //单个图片大小
// 		var coleft =document.getElementById("cooperateLeft")
// 		var coright =document.getElementById("cooperateRight")
// 		for (var i = 0; i<5; i++) {
// 			li[i].style.width=findWh+"px"
// 		}
// 		coright.style.width=findWh*5/2+"px";
// 		coright.style.height=findWh*5/2*538/720+"px";
// 		coleft.style.width=findWh*5/2+"px";
// 		coleft.style.height=findWh*5/2*538/720+"px";
// 		obj.style.height=findHt+"px";
// 	}
// 	findHeight('findText')
// 	// 窗口变动触发结束

})

function closeVideo(id1,id2){
	var obj=document.getElementById(id1);
	var obj2=document.getElementById(id2);
	obj.style.display="none";
	obj2.pause()

}
function openVideo(id1,id2){
	var obj=document.getElementById(id1);
	var obj2=document.getElementById(id2);
	obj.style.display="block";
	obj2.play()
}
