//返回顶部按钮函数
$(function(){
	$(".return").click(function(){
		$("html,body").animate({
			"scrollTop":0
		},700);
	});
});
