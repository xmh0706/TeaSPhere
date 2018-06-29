window.onload=function(){

	
	$("#mainLeftLi li").click(function(){
		flash = $(this).index()
		$('#mainRight li').eq(flash).fadeIn(1000).siblings().hide()
		$('#mainLeftLi li').eq(flash).addClass('leftListNow').siblings().removeClass('leftListNow')

	})
}
