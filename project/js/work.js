var c_year = $('.c_year');
var c_yearlist = $('.c_yearlist');
var c_item = $('.c_item');
var w_h3 = $('.w_h3');
var onoff = true;
var onoff2 = true;
$.each(c_item,function(i,elem){
	$(elem).on('mouseover',function(){
		if(onoff){
			onoff = false;
			$(elem).find(w_h3).animate({
			left:-1500,
			},{
			duration:1000,
			easing:'swing',
			complete:function(now,fx){
			},
			step:function(now,fx){
			}
		})
			setTimeout(function(){
				onoff = true;
			},100);
		}
		else {
			return
		};
//		alert($(elem).index())
		
	});
});
//console.log(c_item.length);
$.each(c_item,function(i,elem){
	$(elem).on('mouseout',function(){
//		alert($(elem).index())
//		alert(1);
		if(onoff2){
			onoff2 = false;
			$(elem).find(w_h3).animate({
				left:50,
			},{
				duration:1000,
				easing:'swing',
				complete:function(now,fx){
				},
				step:function(now,fx){
				}
			})
			setTimeout(function(){
					onoff2 = true;
				},100);
			}
		else {
			return
		};
	})
});