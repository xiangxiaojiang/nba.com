var bt1=$("#zl");
var bt2=$("#sj");
bt1.click(function(){
	bt1.addClass("mouse");
	$(".center").css({
		"display":"block"
	});
	bt2.removeClass("mouse");
	$(".center-data").css({
		"display":"none"
	});
});
bt2.click(function(){
	bt1.removeClass("mouse");
	$(".center").css({
		"display":"none"
	});
	bt2.addClass("mouse");
	$(".center-data").css({
		"display":"block"
	});
});
