//move
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}

function move(obj,json,options){
	options = options || {};
	options.duration = options.duration || 1000;
	options.type = options.type || 'ease-out';
	var timer = null;
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name)); //开始的值
		dis[name] = json[name] - start[name];  //总距离		
	} 
	var count = Math.floor(options.duration/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a = n/count;
					var cur = start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*a*a*a;
					break;
				case 'ease-out':
					var a = 1-(n/count);
					var cur = start[name]+dis[name]*(1-a*a*a);
					break;
			}
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity="cur*100")';
			}else{
				obj.style[name] = cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete && options.complete.apply(obj,arguments);
		}
	},30)
}

function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var reg = new RegExp('\\b'+sClass+'\\b');
		var arr = [];
		var aEle = oParent.getElementsByTagName('*');
		for(var i = 0; i < aEle.length; i++){
			if(reg.test(aEle[i].className)){
				arr.push(aEle[i]);
			}
		}
		return arr;
	}
}

// window.onload = function(){
	//p1
	var oLeft = document.getElementById('left');
	var aSpan = oLeft.getElementsByTagName('span');
	var aP2 = oLeft.getElementsByTagName('p');
	var aLi5 = oLeft.getElementsByTagName('li');
	
	
	var oRight = document.getElementById('right');
	var aLi6 = oRight.getElementsByTagName('li');
	var aBor = getByClass(oRight,'bor2');
	var aImg2 = getByClass(oRight,'img1');
	
	
	
	for(var i = 0; i < aLi5.length;i++){
		aLi5[i].index = i;
		aLi6[i].index = i;
		aLi5[i].onmouseover = aLi6[i].onmouseover = function(){
			for(var i = 0; i < aLi5.length;i++){
				aSpan[i].className = '';
				aP2[i].className = '';
				aBor[i].className = 'fl bor2';
				aImg2[i].src = 'resources/images/arrow2.png';
			}	
			aSpan[this.index].className = 'bg';
			aP2[this.index].className = 'color';
			aBor[this.index].className = 'fl bor bor2';
			aImg2[this.index].src = 'resources/images/arrow1.png';
		};
	}
	
	//p2
	var oUl1 = document.getElementById('ul1');
	var aLi1 = oUl1.getElementsByTagName('li');
	for(var i = 0; i < aLi1.length;i++){
		aLi1[i].index = i;
		aLi1[i].onmouseover = function(){
			for(var i = 0; i < aLi1.length;i++){
				move(aLi1[i],{opacity:0.5},{duration:500});
			}
			move(this,{opacity:1},{duration:500});
		};
	}
	//p4
	var oTbox = document.getElementById('tBox');
	var aBtn = oTbox.getElementsByTagName('em');
	
	var oRoll = document.getElementById('roll');
	
	var aA = oTbox.getElementsByTagName('a');
	var oBot = document.getElementById('bottom');
	var aUl2 = oBot.getElementsByTagName('ul');
	var aI = oTbox.getElementsByTagName('i');
	var aLi4 = oBot.getElementsByTagName('li');
	var aH3_2 = oBot.getElementsByTagName('h3');
	
	for(var i = 0; i < aA.length;i++){
		aA[i].index = i;
		aA[i].onmouseover = function(){
			for(var i = 0; i < aA.length;i++){
				aUl2[i].className = 'clearfix';
				aI[i].className = '';
			}
			aUl2[this.index].className = 'clearfix opa';
			aI[this.index].className = 'opa';
		};
	}

	var iNow = 0;
	
	aBtn[0].onclick = function(){
		iNow++;
		if(iNow == 2){
			iNow=0;
			move(oRoll,{left:-922*iNow});
		}else if(iNow<0){
			move(oRoll,{left:922*iNow});
		}else if(iNow>=0){
			move(oRoll,{left:-922*iNow});
		}
	};
	aBtn[1].onclick = function(){
		iNow--;
		if(iNow == -2){
			iNow=0;
			move(oRoll,{left:922*iNow});
		}else if(iNow<=0){
			move(oRoll,{left:922*iNow});
		}else if(iNow>0){
			move(oRoll,{left:-922*iNow});
		}
	};
	
	//p5
    var $about07div = $('.about07 > div');
    $about07div.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tab-box > div').eq($(this).index()).show().siblings().hide();
    });


    var couUl = $('.cou-ul > li');
    var couBox = $('.cou-box > div');

    couUl.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = couUl.index(this);
        couBox.eq($(this).index()).show().siblings().hide();
    });
    //p7
    var oUl2 = document.getElementById('ul2');
	var aLi2 = oUl2.getElementsByTagName('li');
	var aH3 = oUl2.getElementsByTagName('h3');
	for(var i = 0; i < aLi2.length;i++){
		aLi2[i].index = i;
		aLi2[i].onmouseover = function(){
			for(var i = 0; i < aLi2.length;i++){
				aLi2[i].style.boxShadow = 'none';
				aH3[i].className = '';
			}
			this.style.boxShadow = '0px 10px 20px 5px #ddd';
			aH3[this.index].className = 'color';
		};
	} 
	//p8
	var oUl3 = document.getElementById('ul3');
	var aImg = oUl3.getElementsByTagName('img');
	var aH3_1 = oUl3.getElementsByTagName('h3');
	for(var i = 0; i < aImg.length;i++){
		aImg[i].index = i;
		aImg[i].onmouseover = function(){
			//alert(1)
			for(var i = 0; i < aImg.length;i++){
				move(aH3_1[i],{opacity:0});
				aH3_1[i].style.zIndex = '-1';
			}
			move(aH3_1[this.index],{opacity:1});
			aH3_1[this.index].style.zIndex = '0';
		};
	}
	/**
	//p9
	var oBtn = document.getElementById('btn');
	var aLi3 = oBtn.getElementsByTagName('li');
	var aP = oBtn.getElementsByTagName('p');
	var oImgBox = document.getElementById('imgBox');
	var aCon = oImgBox.getElementsByTagName('ul');
	//alert(aP.length)
	for(var i = 0; i < aLi3.length;i++){
		aLi3[i].index = i;
		aLi3[i].onmouseover = function(){
			for(var i = 0; i < aLi3.length;i++){
				aCon[i].className = 'fl';
				aP[i].style.background = 'url(resources/images/pic0'+(i+1)+'.png) no-repeat 133px 0px';
				aP[i].style.borderBottom = 'none';
			}
			aCon[this.index].className = 'fl opa';
			aP[this.index].style.background = 'url(resources/images/pic'+(this.index+1)+'.png) no-repeat 133px 0px';
			aP[this.index].style.borderBottom = '3px solid #00b38b';
		};
	}
	*/
	
// };
/*banner轮播*/
var banner = new Swiper('#banner',{
	pagination: '.banner_pagination',
	autoplay : 3000,
	speed:1000,
	loop:true,
	paginationClickable :true
});
// stop_swiper(banner,$('#banner'));