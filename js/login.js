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


	$(".loginButton").on("click",function(e){
    	    e.preventDefault(); 
            var uphone = $("#uphone").val();
			var upwd = $("#upwd").val();
			$.ajax({
                type: "GET", 
                url: "date/login.php",
                contentType:"application/json",
                data:{uphone:uphone,upwd:upwd},   
				dataType:"json",
                success: function(data){
                   if(data.code>0){
						alert(data.msg);
						location.href = "index.html";
					}else{
						alert(data.msg);
					}
                },
                error: function(){
                   alert("网络故障请检查!")}
                }
    	    });
	});

});