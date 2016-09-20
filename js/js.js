;(function($){
	int();
	function int(){
		var home = new iScroll("home",{
			onBeforeScrollStart: function (e) {
				var tar = e.target || e.srcElement;
				var tag = tar.nodeName.toLowerCase();
            if(tag!="select" && 
            	tag!="input" && 
            	 tag!="text" && 
            	 tag!="a" && 
            	 tag!="textarea")
	           e.preventDefault(); 
			}

		});

		bindEvent()

	}

	function bindEvent(){
		$(document).on("click","a",function(e){
			 e.preventDefault(); 
		}).on("tap","a",function(){
			var _href = $(this).attr("href")
			$(_href).css("left",0).siblings().css("left","100%")
			if($(this).parent()[0].nodeName.toLowerCase()=="footer"){
				var index = $(this).index();
				$(".block").css("left",index*25+"%")
			}

		})
		

	}




})(Zepto)







 
/*;(function($){
	init();
	function init(){//初始化函数，一打开页面就执行
		//给首页中间加局部滚动炫酷的效果，
			//兼容，iscroll4的bug它会阻止掉所有input，select，a，textarea的默认行为
		var scroll=new iScroll("home",{
			onBeforeScrollStart:function(e){
				var target=e.target || e.srcElement;
				var tag=target.nodeName.toLowerCase();
				if(tag!="input" && tag!="select" && tag!="textarea" && tag!="button" && tag!="a"){
					e.preventDefault();
				}
			}
		});
	//iscroll5的bug它会使你添加iscroll的页面无法超链接跳转页面，所以后面click得设置为true；头部不知为何会跑上去，所以给头部z-index设值；
		var iscroll=new IScroll("#home",{"click":true});

		//添加事件
		bindEvent();
	}
	//添加事件
	function bindEvent(){
		//利用事件委托的原理给页面中多个元素绑定事件,只有click这个事件才有阻止默认行为，而tap事件没有
		$(document).on("click","a",function(e){
			e.preventDefault();
		}).on("tap","a",function(){
				var _href=$(this).attr("href");
				console.log(_href);
				$(_href).animate({"left":0},1000).siblings().css({"left":100+"%"},1000);
			if($(this).parent()[0].nodeName.toLowerCase()=="footer"){
				var index=$(this).index();
				console.log(index);
				$(".black").animate({"left":(index*25)+"%"});
			}
			
		})	

	}
})(Zepto)
*/









