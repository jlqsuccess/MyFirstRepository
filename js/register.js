$(function(){
	$(window).load(function(){
		$("#regForm>.register>.li1>input").focus();
	});
	$("#regForm>.register>.li1>input").focus(function(){
		$(this).css({
			border:"1px solid #8BADE4",
			boxShadow:"1px 1px 1px #8BADE4",
			borderLeft:"none",
		}).prev().css({
			border:"1px solid #8BADE4",
			boxShadow:"1px 1px 1px #8BADE4",
			borderRight:"1px solid #ccc",
			
		});
	});
	$("#regForm>.register>.li1>input").blur(function(){
		$(this).css({
			border:"1px solid #ccc",
			borderLeft:"none",
			boxShadow:"none",
		}).prev().css({
			border:"1px solid #ccc",
			boxShadow:"none",
		});
		if($(this).val()==""){
			$("#regForm>.register>.li1>span").css({
				visibility:"visible",
				height:22,
			});
		}else{
			$("#regForm>.register>.li1>span").css({
				visibility:"hidden",
				height:0,
			});
		}
	});
	$("#regForm>.register>.li2>input").focus(function(){
		$(this).css({
			border:"1px solid #8BADE4",
			boxShadow:"1px 1px 1px #8BADE4",
			borderLeft:"none",
		}).prev().css({
			border:"1px solid #8BADE4",
			boxShadow:"1px 1px 1px #8BADE4",
			borderRight:"1px solid #ccc",
			
		});
	});
	$("#regForm>.register>.li2>input").blur(function(){
		$(this).css({
			border:"1px solid #ccc",
			borderLeft:"none",
			boxShadow:"none",
		}).prev().css({
			border:"1px solid #ccc",
			boxShadow:"none",
		});
		if($(this).val()==""){
			$("#regForm>.register>.li2>span").css({
				visibility:"visible",
				height:22,
			});
		}else{
			$("#regForm>.register>.li2>span").css({
				visibility:"hidden",
				height:0,
			});
		}
	});
	$("#regForm>.register>.li3>input").focus(function(){
		$(this).css({
			border:"1px solid #8BADE4",
			boxShadow:"1px 1px 1px #8BADE4",
		});
	});
	$("#regForm>.register>.li3>input").blur(function(){
		$(this).css({
			border:"1px solid #ccc",
			boxShadow:"none",
		});
		if($(this).val()==""){
			$("#regForm>.register>.li3>span").css({
				visibility:"visible",
				height:22,
			});
		}else{
			$("#regForm>.register>.li3>span").css({
				visibility:"hidden",
				height:0,
			});
		}
	});
	$("#regForm>.register>.li5>input").click(function(){
		if($(this).is(":checked")){
			$(this).parent().next().children("a").css("background","#ff4f3f");
		}else{
			$(this).parent().next().children("a").css("background","gray");
		}
	});



	$("#li6register").on("click",function(e){
    	    e.preventDefault(); 
            var uphone = $("#uphone").val();
			var upwd = $("#upwd").val();
			var yzm = $("#yzm").val();
			$.ajax({
                type: "GET", 
                url: "date/register.php",
                contentType:"application/json",
                data:{uphone:uphone,upwd:upwd,yzm:yzm},   
				dataType:"json",
                success: function(data){
                   if(data.code>0){
						alert(data.msg);
						location.href = "login.html";
					}else{
						alert(data.msg);
					}
                },
                error: function(){
                   alert("网络故障请检查!");
                },
    	    });
	});
});