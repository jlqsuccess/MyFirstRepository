$(function(){
	function move(){
		var flash_small=$("#indexBanner>a.none").index();
		$("#indexBanner>a").eq(flash_small).fadeIn().siblings().fadeOut();
		$("div.hidder>ul>li").eq(flash_small).css("opacity","1").siblings().css("opacity","0.4");
	};
	move();
	function automove(){
		var flash_small=$("#indexBanner>a.none").index();
		flash_small++;
		flash_small=flash_small>4?0:flash_small;
		$("#indexBanner>a").eq(flash_small).addClass("none").fadeIn().siblings().removeClass("none").fadeOut();
		$("div.hidder>ul>li").eq(flash_small).css("opacity","1").siblings().css("opacity","0.4");
	};
	var timer=setInterval(automove,3000);
	var $fullSlide=$("div.fullSlide");
	$fullSlide.mouseenter(function(){
		clearInterval(timer);
		timer=null;
		$("#indexBanner>a").stop(true);
		$("div.fullSlide>a").css("display","block");
	}).mouseleave(function(){
		var flash_small=$("#indexBanner>a.none").index();
		timer=setInterval(automove,3000);
		$("div.fullSlide>a").css("display","none");
	});

	var $aLeft=$("div.fullSlide>a.left"),$aRight=$("div.fullSlide>a.right");
	$aLeft.click(function(e){
		e.preventDefault();
		var i=$("#indexBanner>a.none").index();
		i=(i==0)?5:i;
		i--;
		$("#indexBanner>a").stop(true).eq(i).addClass("none").fadeIn().siblings().removeClass("none").fadeOut();
		$("div.hidder>ul>li").eq(i).css("opacity","1").siblings().css("opacity","0.4");
	});
	$aRight.click(function(e){
		e.preventDefault();
		$("#indexBanner>a").stop(true);
		var i=$("#indexBanner>a.none").index();
		i++;
		i=(i==5)?0:i;
		$("#indexBanner>a").stop(true).eq(i).addClass("none").fadeIn().siblings().removeClass("none").fadeOut();
		$("div.hidder>ul>li").eq(i).css("opacity","1").siblings().css("opacity","0.4");
	});

	$ul=$("div.hidder>ul");
	$ul.on("click","li",function(){
		var $li=$(this);
		var j=$li.index();
		$("#indexBanner>a").stop(true).eq(j).fadeIn().addClass("none").siblings().fadeOut().removeClass("none");
		$("div.hidder>ul>li").eq(j).css("opacity","1").siblings().css("opacity","0.4");
	});

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