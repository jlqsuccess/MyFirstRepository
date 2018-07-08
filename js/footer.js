$(function(){
	$.ajax({
		type:"get",
		url:"footer.html",
		success:function(html){
			var link=document.createElement("link");
			link.rel="stylesheet";
			link.href="css/footer.css";
			document.head.appendChild(link);
			document.getElementById("footer").innerHTML=html;
		}	
	});
});