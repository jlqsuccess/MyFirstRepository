$(function(){
	$(window).scroll(function(){
        if($(window).scrollTop()>200){
			$("#back").css("display","block");
		}else{
			$("#back").css("display","none");
		}
   }); 
	
	$("#back").click(function(){
		$('body,html').animate({
			"scrollTop": 0
        }, 500);
    });


	$("div.hd>.tab").on("click","li",function(){
		var $li=$(this);
		$li.addClass("on").siblings().removeClass("on");
		var num = $li.index();
		$(".MyInvestment>div.bd").children().eq(num).css("display","block").siblings().css("display","none");
	});
});