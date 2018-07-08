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
});