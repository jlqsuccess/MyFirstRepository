$(function(){
	$(window).load(function(){
		$("#form1>.loginBox>.accountNumber>input").focus();
	});
	$("#form1>.loginBox>.accountNumber>input").focus(function(){
		$(this).css("border","2px solid #8BADE4");
	});
	$("#form1>.loginBox>.accountNumber>input").blur(function(){
		if($(this).val()==""){
			$("#form1>.loginBox>.accountNumber>span").css("visibility","visible");
		}else{
			$("#form1>.loginBox>.accountNumber>span").css("visibility","hidden");
		}
		$(this).css("border","1px solid #ccc");
	});
});