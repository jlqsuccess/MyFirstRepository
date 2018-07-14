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



	function loadProducts(pno,pageSize){
		//1发送ajax请求
		$.ajax({
			type:"get",
			url:"date/productlist.php",
			data:{pno,pageSize},
			dataType:"json",
			//2获取返回数据
			success:function(data){
				//3.1创建字符串拼接当前网页内容
				var html="";
				for(var item of data.data){
					html+=`<div class="projectList" id="aa">
					<h3>
						<span><a href="javascript:;">WCJR-18HCC205-01</a></span>
					</h3>
					<div class="content">
						<ul>
							<li>
								<span>借款利率：</span>
								<strong class="red">
									<span class="font">${item.jkll}%</span>
								</strong>
							</li>
							<li>还款方式：${item.hkfs}</li>
						</ul>
						<ul>
							<li>
								项目期限：
								<strong>${item.xmqx}</strong>
								天
							</li>
							<li>担保机构: <a href="javascript:;" target="_blank">${item.dbjg}</a></li>
						</ul>
						<ul>
							<li>
								项目规模:
								<strong>${item.xmgm}</strong>
								万
							</li>
							<li>
								<span>筹款进度：</span>
								<div class="ProgressBar">
									<span style="width: 100%">${item.ckjd}%</span>
								</div>
								<span class="font12">${item.ckjd}%</span>
							</li>
						</ul>
						<div class="button">
							<a href="javascript:;" class="investmentBtn">还款中</a>
						</div>
					</div>
					</div>`;
				}
				$("#content-box-nr").html(html);
				//3.2创建字符串拼接页面条

				var pno=parseInt(data.pno);
				var pageCount=parseInt(data.pageCount);
				var html="";
				html+=`<li><a href="#">首页</a></li>`;
				if(pno-1>0){
					html+=`<li><a href="#">上一页</a></li>`;
				}
				if(pno-2>0){
					html+=`<li><a href="#">${pno-2}</a></li>`;
				}
				if(pno-1>0){
					html+=`<li><a href="#">${pno-1}</a></li>`;
				}
				html+=`<li id="current1"><a href="#" class="current">${pno}</a></li>`;
				if(pno+1<=pageCount){
					html+=`<li><a href="#">${pno+1}</a></li>`;
				}
				if(pno+2<=pageCount){
					html+=`<li><a href="#">${pno+2}</a></li>`;
				}
				if(pno+1<=pageCount){
					html+=`<li><a href="#">下一页</a></li>`;
				}
				html+=`<li><a href="#" data-pagecount="${pageCount}">尾页</a></li>`;
				$("#pagination").html(html);
				return pageCount;
			},
			error:function(){
				alert("网络故障请检查");
			}
		});
	}
	var pageCount=loadProducts(1,6);
	$("#pagination").on("click","a",function(e,pageCount){
		e.preventDefault();
		if($(this).html()=="上一页"){
			var pno=parseInt($(this).parent().siblings("#current1").children().first().html())-1;
			loadProducts(pno,6);
		}else if($(this).html()=="下一页"){
			var pno=parseInt($(this).parent().siblings("#current1").children().first().html())+1;
			loadProducts(pno,6);
		}else if($(this).html()=="首页"){
			var pno=1;
			loadProducts(pno,6);
		}else if($(this).html()=="尾页"){
			var pno=parseInt($(this).data("pagecount"));
			loadProducts(pno,6);
		}else{
			var pno=parseInt($(this).html());
			loadProducts(pno,6);
		}
	});
});