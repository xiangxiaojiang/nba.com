//新闻页面轮播图
var index=1;
var btn1=$(".btn-l");
var btn2=$(".btn-r");

function show(){
	change(index);
}

function change(){
	$(".n-tu").css({
		"background":"url(news/"+index+".jpg)"	
    });	
    $("#" + index + "a").addClass("point");
    $("."+index+"zi").css({
    	"display":"block"
    });
}


function auto(){
	time=setInterval(function(){
		index++;
		if(index>7){
            index = 1;
             $("#7a").removeClass("point");
             $(".7zi").css({
		    	"display":"none"
		    });
		}
		$("#"+(index-1)+"a").removeClass("point");
		$("."+(index-1)+"zi").css({
			"display":"none"
		});
        change();
	},4000);
}
auto();


btn1.click(function(){
	index--;
	if(index<1){
		index=7;
		$("#1a").removeClass("point");
	     $(".1zi").css({
	    	"display":"none"
	    });
	}
	$("#"+(index+1)+"a").removeClass("point");
	$("."+(index+1)+"zi").css({
		"display":"none"
	});
	change();
});

btn2.click(function(){
	index++;
	if(index>7){
		index=1;
		$("#7a").removeClass("point");
	     $(".7zi").css({
	    	"display":"none"
	    });
	}
	$("#"+(index-1)+"a").removeClass("point");
	$("."+(index-1)+"zi").css({
		"display":"none"
	});
	change();
});

$("#1a").click(function(){
	index=1;
	change();

	$("#7a").removeClass("point");
	$(".7zi").css({
		"display":"none"
	});
	$("#6a").removeClass("point");
	$(".6zi").css({
		"display":"none"
	});
	$("#5a").removeClass("point");
	$(".5zi").css({
		"display":"none"
	});
	$("#4a").removeClass("point");
	$(".4zi").css({
		"display":"none"
	});
	$("#3a").removeClass("point");
	$(".3zi").css({
		"display":"none"
	});
	$("#2a").removeClass("point");
	$(".2zi").css({
		"display":"none"
	});
});

$("#2a").click(function(){
	index=2;
	change();

	$("#7a").removeClass("point");
	$(".7zi").css({
		"display":"none"
	});
	$("#6a").removeClass("point");
	$(".6zi").css({
		"display":"none"
	});
	$("#5a").removeClass("point");
	$(".5zi").css({
		"display":"none"
	});
	$("#4a").removeClass("point");
	$(".4zi").css({
		"display":"none"
	});
	$("#3a").removeClass("point");
	$(".3zi").css({
		"display":"none"
	});
	$("#1a").removeClass("point");
	$(".1zi").css({
		"display":"none"
	});
});

$("#3a").click(function(){
	index=3;
	change();

	$("#7a").removeClass("point");
	$(".7zi").css({
		"display":"none"
	});
	$("#6a").removeClass("point");
	$(".6zi").css({
		"display":"none"
	});
	$("#5a").removeClass("point");
	$(".5zi").css({
		"display":"none"
	});
	$("#4a").removeClass("point");
	$(".4zi").css({
		"display":"none"
	});
	$("#1a").removeClass("point");
	$(".1zi").css({
		"display":"none"
	});
	$("#2a").removeClass("point");
	$(".2zi").css({
		"display":"none"
	});
});

$("#4a").click(function(){
	index=4;
	change();

	$("#7a").removeClass("point");
	$(".7zi").css({
		"display":"none"
	});
	$("#6a").removeClass("point");
	$(".6zi").css({
		"display":"none"
	});
	$("#5a").removeClass("point");
	$(".5zi").css({
		"display":"none"
	});
	$("#1a").removeClass("point");
	$(".1zi").css({
		"display":"none"
	});
	$("#3a").removeClass("point");
	$(".3zi").css({
		"display":"none"
	});
	$("#2a").removeClass("point");
	$(".2zi").css({
		"display":"none"
	});
});

$("#5a").click(function(){
	index=5;
	change();

	$("#7a").removeClass("point");
	$(".7zi").css({
		"display":"none"
	});
	$("#6a").removeClass("point");
	$(".6zi").css({
		"display":"none"
	});
	$("#1a").removeClass("point");
	$(".1zi").css({
		"display":"none"
	});
	$("#4a").removeClass("point");
	$(".4zi").css({
		"display":"none"
	});
	$("#3a").removeClass("point");
	$(".3zi").css({
		"display":"none"
	});
	$("#2a").removeClass("point");
	$(".2zi").css({
		"display":"none"
	});
});

$("#6a").click(function(){
	index=6;
	change();

	$("#7a").removeClass("point");
	$(".7zi").css({
		"display":"none"
	});
	$("#1a").removeClass("point");
	$(".1zi").css({
		"display":"none"
	});
	$("#5a").removeClass("point");
	$(".5zi").css({
		"display":"none"
	});
	$("#4a").removeClass("point");
	$(".4zi").css({
		"display":"none"
	});
	$("#3a").removeClass("point");
	$(".3zi").css({
		"display":"none"
	});
	$("#2a").removeClass("point");
	$(".2zi").css({
		"display":"none"
	});
});

$("#7a").click(function(){
	index=7;
	change();

	$("#1a").removeClass("point");
	$(".1zi").css({
		"display":"none"
	});
	$("#6a").removeClass("point");
	$(".6zi").css({
		"display":"none"
	});
	$("#5a").removeClass("point");
	$(".5zi").css({
		"display":"none"
	});
	$("#4a").removeClass("point");
	$(".4zi").css({
		"display":"none"
	});
	$("#3a").removeClass("point");
	$(".3zi").css({
		"display":"none"
	});
	$("#2a").removeClass("point");
	$(".2zi").css({
		"display":"none"
	});
});




//战绩表
var est=$(".r-2");
var wes=$(".r-3");
var tab1=$(".tab1");
var tab2=$(".tab2");

est.click(function (){
	tab1.css({
		"display":"block"
	});
	tab2.css({
		"display":"none"
	});
	est.addClass("r-hover");
	wes.removeClass("r-hover");
});

wes.click(function(){
	tab2.css({
		"display":"block"
	});
	tab1.css({
		"display":"none"
	});
	est.removeClass("r-hover");
	wes.addClass("r-hover");
});
