//无缝轮播
window.onload = function(){
//	var photo_c = $('.content');
	var photo_c = document.getElementById("photo_c");
//	console.log(photo_c);
//	var photo1 = $('.photo1');
//	console.log(photo1.length);
	var prevBtn = document.getElementById("prev");
	var nextBtn = document.getElementById("next");
	var navs = document.getElementById("navs");
	var navsA = navs.getElementsByTagName("a");

	var p_lis1 = document.getElementById("p_lis1");
	var pli = p_lis1.getElementsByTagName('li');
//	console.log(pli.length);
	
	var li = p_lis1.getElementsByTagName("li");
	var liH = css(li[0], "width");
	var zIndex = 1;
	var now = 0;
	var timer = 0;
	tab(0);;
//	p_lis1.innerHTML += p_lis1.innerHTML;
	navsA[0].className = "active";
	timer = setInterval(next, 3000);
	photo_c.onmouseover = function() {
//		alert(1);
		clearInterval(timer);
	};
	photo_c.onmouseout = function() {
		timer = setInterval(next, 3000);
//		alert(1);
	};
	for(var i = 0; i < navsA.length; i++){
			navsA[i].index = i;
			navsA[i].onmouseover = function (){
				var next =this.index;
				tab(next);
			};
		}
	prevBtn.onclick = function() {
		var next = now - 1;
		if(next < 0)
		{
			next = navsA.length - 1;
			p_lis1.style.left = -5500+'px';
		}
		tab(next);
	};
	nextBtn.onclick = next; 
	function next() {
		if(now == navsA.length)
		{
			now = 0;
			p_lis1.style.left = 0;
		}
		var next = now + 1;
//		alert(1);
		tab(next);
	}
	function tab(next) {
			
			navsA[now%navsA.length].className = "";
			console.log(now%navsA.length);
			startMove(p_lis1,"left",500, -next*liH ,"easeOut");
//			for(var i = 0; i<pli.length;i++){
//				pli[i].index = i;
				pli[next].innerHTML =creatFn(next);
//			}
//			console.log(creatFn(next));
			now = next;
			console.log(now);
			navsA[now%navsA.length].className = "active";
		}
	
	//index无缝轮播数据渲染
	
	function creatFn(next){
//		alert(1);
//		console.log(next)
		var str = '';
		str += '<div class="c_left">';
		str +='<h1>';
		str += Data[next].h1;
		str +='<p>';
		str += Data[next].p;
		str +='</p>';
		str +='</div>';
		str +='<div class="c_right">';
		str +='<img class="img" src="'+Data[next].img+'" />';
		str +='</div>';
//		console.log(str);
//		setTimeout(function (){	
//		}, 1000);
		return str;
	}
};






var iH = $('.lis_w').eq(0).width();
//console.log(iH);
var num = 0;
var aAll = $('.navs2').find('a');
	function tab(){
		if(num == $('.lis_w').size()-1){
			$('.lis_w').last().css({position:'static'});
		}
		if(num == 0){
			$('.lis_w').eq(0).css({position:'static'})
		}
		
		
		if(num == $('.lis_w').size()-1){
			$('.lis_w').eq(0).css({
				position:'relative',
				left:iH * $('.lis_w').size()
			});
			
		}
		
		if(num > $('.lis_w').size()){
			$('.lis_w').eq(0).css({position:'static'});
			$('.p_lis2').css({left:0});
			num = 1;
			//alert(1)
		}
		
		if(num == -1){
			$('.lis_w').last().css({
				position:'relative',
				left:-iH * $('.lis_w').size()
			});
		}
		if(num < -1){
			$('.lis_w').last().css({position:'static'});
			$('.p_lis2').css({left:-iH*($('.lis_w').size()-1)});
			num = $('.lis_w').size()-2
		}

		aAll.eq(num% aAll.length).addClass('active2').siblings('a').removeClass('active2');
		
		$('.p_lis2').stop().animate({
			left:-iH*num
		},{
			easing:'linear',
			duration:400
		});
	}
	
	
	$('.navs2').find('a').click(function(){
//		console.log(num)
		num = $(this).index();
		tab();
	});