
    $(function(){
	//1.图片淡入效果： 展开页面  整个页面打开的时候淡入显示fadeIn()；代码实现如下
	$("#wrap").fadeIn(2000);

	// 2.幻灯片效果（1） ：底下循环滚动图片，鼠标经过停止，挪开继续滚动,使用setInterval，clearInterval方法
	//div_1.scrollLeft+=1;循环执行changeToLeft();代码实现如下
	var a;
    a=setInterval("changeToLeft();",10);
    $("#second").mouseover(function(){
    	clearInterval(a);
    }).mouseout(function(){
    	a=setInterval("changeToLeft();",10);
    });

	//3.幻灯片效果（2） 中间拉动图片，一张一张的拉动，鼠标经过停止，挪开继续拉动，循环执行AutoScroll()；函数实现
	// 在下边函数AutoScroll()内容中已经表明
	//代码实现如下
	var _scrolling=setInterval("AutoScroll()",3000);
	$("#slide>ul").mouseover(function(){
		//鼠标移动DIV上停止
		clearInterval(_scrolling);
	}).mouseout(function(){
		//离开继续调用
		_scrolling=setInterval("AutoScroll()",3000);
	});

	// 4.图片效果：百度图片不经过时不断循环的变淡变深，使用animate({opacity:"1"},1000);animate({opacity:"0.5"},1000);
	// 等方法，以及经过百度图片的时候变深，挪开变浅，利用mouseover()mouseout()
	$("#baidu").mouseover(function(){
		$(this).animate({opacity:"1"},1000);
	}).mouseout(function(){
       $(this).animate({opacity:"0.5"},1000);
	});
	// 百度图片不经过时不断循环的变淡变深
	setInterval(function(){
		$("#baidu").animate({opacity:"1"},1000).animate({opacity:"0.5"},1000);
	},1000);
	// 5.弹出层效果, 单击登录小图标，弹出登录层，单击该层左上角的关闭图标，可隐藏该层。利用show()和fadeOut()方法
	$("#denglu").click(function(){
		$("#tanchu").show(1000);
	});
	$("#guanbi").click(function(){
		$("#tanchu").fadeOut(1000);
	});
    
    });
	// 6.导航条效果:动态下拉菜单，经过动态下拉slideDown("slow");挪开动态收回slideUp("slow");
	// 利用hover(),代码实现如下：
	$(function(){

	 var lis=$("#nav > li");
	// hover() 方法规定当鼠标指针悬停在被选元素上时要运行的两个函数
	 lis.hover(function(){
	  $(this).addClass("sfhover");
	  $(this).find("ul").slideDown("slow");

	},function(){

	$(this).find("ul").slideUp("slow");

	});

	});
    // 旅游
    // 7.图片效果：鼠标经过li时一个div收缩，另一个隐藏的a部分的内容动态进入，鼠标移开，div动态回来，a部分动态隐藏；
    //如何实现的: 代码实现如下:
	$(function(){
		$('.lanren li').mouseenter(function(){
			$(this).find('.divA').stop().animate({bottom:'-66px'});
			$(this).find('.a2').css({left:'0'})
			$(this).children('.a2').find('.p4').css({left:'0'})
			$(this).children('.a2').find('.p5').css({left:'0'})
			$(this).children('.a2').find('.p6').css({transform:'scale(1)'})
			$(this).children('.a2').find('.p7').css({bottom:'25px'})
		})
		$('.lanren li').mouseleave(function(){
			$(this).find('.divA').stop().animate({bottom:'0px'});
			$(this).find('.a2').css({left:-$(this).width()})
			$(this).children('.a2').find('.p4').css({left:-$(this).width()})
			$(this).children('.a2').find('.p5').css({left:-$(this).width()})
			$(this).children('.a2').find('.p6').css({transform:'scale(1.3)'})
			$(this).children('.a2').find('.p7').css({bottom:'-50px'})
		})
	})
	// 8.百度地图调用,点击百度图片，跳转到百度地图页面，利用window.location.href改变href
	window.onload=function(){
		document.getElementById("baidu").onclick=function(){
			setTimeout("jumpToBaidu()", 3000);//加 ""
		}
		// 9.鼠标跟随效果：鼠标经过百度图片时通过事件对象获取鼠标指针相对于浏览器页面（或客户区）的水平垂直坐标，
		// 利用top,left属性设置div的位置，跟随鼠标位置改变div显示位置；tip.style.left = oEvent.clientX + "px";
		// tip.style.top = oEvent.clientY + "px";鼠标移开隐藏
		document.getElementById("baidu").onmouseover=showTip;
		document.getElementById("baidu").onmouseout=hideTip;
	   
	    
	}
	function jumpToBaidu(){
			window.location.href = "http://map.baidu.com/";
		}
				
			
	//3.幻灯片效果（2）图片拉动
	function AutoScroll(){
		var _scroll = $("#slide>ul");
		//ul往左边移动1325px
		_scroll.animate({marginLeft:"-=1325px"},2000,function(){
			//把第一个li丢最后面去
			_scroll.css({marginLeft:0}).find("li:first").appendTo(_scroll);
			//find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。
		});
	}
	//2.幻灯片效果（1） 图片滚动代码部分
	function changeToLeft(){
		var div_1=document.getElementById("second");
		div_1.scrollLeft+=1;//元素滚动条的水平偏移值；
		var pyl=div_1.scrollLeft;
		var picScroll1=document.getElementById("picScroll1");
		

	    var width_1=picScroll1.offsetWidth;
	   
		if(pyl>=width_1)
		{
	       div_1.scrollLeft=0;

		}
	 

	}
	// 9.鼠标跟随效果：
	function showTip(oEvent){
		var tip = document.getElementById("divTip1");
		tip.style.display = "block";
		tip.style.left = oEvent.clientX + "px";
		//clientX 事件属性返回当事件被触发时鼠标指针相对于浏览器页面（或客户区）的水平坐标。

		tip.style.top = oEvent.clientY + "px";
	}
	function hideTip(oEvent){
		var tip = document.getElementById("divTip1");
		tip.style.display = "none";
	}

