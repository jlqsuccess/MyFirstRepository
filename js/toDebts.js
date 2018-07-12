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

	$("div.news>a.closeNews").click(function(e){
		e.preventDefault();
		$(this).parent().css("display","none");
	});

	$("div.screen>a.arrow").click(function(e){
		e.preventDefault();
		if($(this).prev().is(".hide")){
			$(this).addClass("arrow1").prev().removeClass("hide").prev().removeClass("borderBtm");
		}else{
			$(this).removeClass("arrow1").prev().addClass("hide").prev().addClass("borderBtm");
		}
	});
});