$(function(){
	$.ajax({
		type:"get",
		url:"header.html",
		success:function(html){
			var link=document.createElement("link");
			link.rel="stylesheet";
			link.href="css/header.css";
			document.head.appendChild(link);
			document.getElementById("header").innerHTML=html;
		}
	});
});