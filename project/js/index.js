
var ico2 = document.getElementById('ico2');
var As = ico2.getElementsByTagName('a');
var dropdown2 = document.getElementById('dropdown2');

//header 头部
As[0].onclick = function (){
	As[0].style.display = 'none';
	As[1].style.display = 'block';
	dropdown2.style.display = 'block';
	
	var ul = document.getElementById('ul1');
	var lis = ul.children;
	var aPos = [];
	for(var i=0;i<lis.length;i++){
		aPos[i] = {
			top:lis[i].offsetTop,
			left:lis[i].offsetLeft,
			width:lis[i].offsetWidth,
			height:lis[i].offsetHeight
		}
	}
	for(var i=0;i<lis.length;i++){
		lis[i].style.left = aPos[0].left + 'px';
		lis[i].style.top = aPos[0].top + 'px';
		lis[i].style.position = 'absolute';
		lis[i].style.margin = 0;
		aPos[i].opacity = 1;
	}

	var timer = null;
	var num = 0;
	
	timer = setInterval(function(){
		move(lis[num],aPos[num],500,'easeOut');
		num++;
		if(num == lis.length){
			clearInterval(timer);
		}
		console.log(num);
	},100);
	
};
As[1].onclick = function (){
	As[1].style.display = 'none';
	As[0].style.display = 'block';
	dropdown2.style.display = 'none';
};


