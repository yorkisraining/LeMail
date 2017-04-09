window.onload = function() {
	selectHead();

	navOut();
	
	pptAni();
	
	adChange();
	
	rightSide();
	
	leftSide()
	
	var leftNav = document.getElementsByClassName('left-nav')[0];
	leftNav.style.position = 'absolute';
	leftNav.style.top = 778 + 'px';
}

// 头部下拉列表
function selectHead() {
	var selectRegion = document.getElementById("selectRegion");
	var selectRegionList = document.getElementsByClassName('selectRegionList')[0];
	var helpLinkP = document.getElementsByClassName('link-help')[0];
	var helpLinkC = document.getElementsByClassName('helpLink')[0];
	var ecoP = document.getElementsByClassName('link-ecology')[0];
	var ecoC = document.getElementsByClassName('ecologyList')[0];
	showIt(selectRegion, selectRegionList);
	showIt(helpLinkP, helpLinkC);
	showIt(ecoP, ecoC);
}

function showIt(parentSel, childSel) {
	parentSel.onmouseover = function() {
		childSel.style.display = 'block';
	}
	parentSel.onmouseout = function() {
		childSel.style.display = 'none';
	}	
}

//导航显示
function navOut() {
	var mainNavLis = document.getElementsByClassName("main-nav-list")[0].getElementsByTagName('li');
	var p = document.getElementsByClassName('main-nav-side')[0];
	var l =getChild(p, 'nav-side');
	for (var i=0; i<l.length; i++) {
		mainNavLis[i].index = i;
		mainNavLis[i].onmouseover = function() {
			l[this.index].className = 'lihover';
		}
		mainNavLis[i].onmouseout = function() {
			l[this.index].className = 'nav-side';
		}	
	}
}

//ppt轮播 
function pptAni() {
	var pics = document.getElementsByClassName('pptpic')[0].getElementsByTagName('img');
	var texts = document.getElementsByClassName('pptword')[0].getElementsByTagName('li');

	var index = 0;
	var opc = 0.5;
	setInterval(function(){
		opc += 0.1;
		if (opc > 5.5){
			opc = 0.7;
			index += 1;
		}		
		if (index==pics.length){
			index = 0;
		}
		var l = index;
		pics[l].style.opacity = opc;
		pics[l].style.zIndex = 1;
		texts[l].className = 'on';
		if (l == 0) {
			l = 6;
		}
		pics[l-1].style.opacity = 0.15;
		pics[l-1].style.zIndex = 0;
		texts[l-1].className = '';
	}, 100);
	
	for ( var i=0; i<texts.length; i++) {
		texts[i].index = i;
		texts[i].onmouseover = function() {
			opcu = 0.7;
			pics[index].style.opacity = 0.15;
			pics[index].style.zIndex = 0;
			texts[index].className = '';
			pics[this.index].style.opacity = opc;
			pics[this.index].style.zIndex = 1;
			texts[this.index].className = 'on';
			index = this.index;
		}
	}
}

//获取第一层子元素
function getChild(parent, child) {
	var clis = [];
	var childs = parent.childNodes;
	for (var i=0; i<childs.length; i++) {
		if (childs[i].className == child){
			clis.push(childs[i]);
		}
	}
	return clis;
}

//放大图片 (还不会做)
function bigit() {
	
}

//下方图片轮播 5s/次
function adAni() {
	
}

//广告切换  5s/次
function adChange() {
	var index = 0;
	setInterval(function(){
		var Ipad = document.getElementsByClassName('ip-ad')[0].getElementsByTagName('ul');
		
		index += 1;
		if(index == Ipad.length){
			index = 0
		}
		Ipad[index].className = 'clearfix show';
		
		var l;
		l = index;
		if (l == 0){
			l = 3;
		}
		Ipad[l-1].className = 'clearfix';
	}, 5000);
}

//左侧栏
function leftSide() {
	var bg = [];
	var bgColor = ['#fc8024', '#e5ac9a', '#52b4db', '#d8be50', '#3e50ce'];
	for (var i=0; i<5; i++) {
		bg.push(document.getElementsByClassName('bg'+i));
	}
	
//	for (var j=0; j<5; j++) {
//		bg[j][0].onmouseover = function() {
//			bg[j][0].style.background = bgColor[i];
//		}
//		bg[j][0].onmouseout = function() {
//			bg[j][0].style.background = '';
//		}
//	}	
		bg[0][0].onmouseover = function() {
			bg[0][0].style.background = bgColor[0];
		}
		bg[0][0].onmouseout = function() {
			bg[0][0].style.background = '';
		}
		
		
		bg[1][0].onmouseover = function() {
			bg[1][0].style.background = bgColor[1];
		}
		bg[1][0].onmouseout = function() {
			bg[1][0].style.background = '';
		}
		
		bg[2][0].onmouseover = function() {
			bg[2][0].style.background = bgColor[2];
		}
		bg[2][0].onmouseout = function() {
			bg[2][0].style.background = '';
		}
		
		bg[3][0].onmouseover = function() {
			bg[3][0].style.background = bgColor[3];
		}
		bg[3][0].onmouseout = function() {
			bg[3][0].style.background = '';
		}
		
		bg[4][0].onmouseover = function() {
			bg[4][0].style.background = bgColor[4];
		}
		bg[4][0].onmouseout = function() {
			bg[4][0].style.background = '';
		}
	

}

//右侧栏
function rightSide() {
	var lis = document.getElementsByClassName('rnl');
	var expln = document.getElementsByClassName('expln');

	
	for (var i=0; i<lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			expln[this.index].style.display = 'block';
		}
		lis[i].onmouseout = function() {
			expln[this.index].style.display = 'none';
		}
	}
}

//返回顶部
window.onscroll = function() {
	
	var scTop = document.body.scrollTop || document.documentElement.scrollTop;
	var back = document.getElementsByClassName('backTop')[0];
	if (scTop > 99) {
		back.style.display = 'block';
	}
	if (scTop < 99) {
		back.style.display = 'none';
	}
	
	back.onclick = function() {
		scroll(0,0);
	}
	var leftNav = document.getElementsByClassName('left-nav')[0];
	if(scTop > 480 ) {
		leftNav.style.position = 'fixed';
		leftNav.style.top = '40%';
	} 
	if (scTop < 505) {
		leftNav.style.position = 'absolute';
		leftNav.style.top = 778 + 'px';
	} 
	if (scTop > 2550) {
		leftNav.style.position = 'absolute';
		leftNav.style.top = 2826 + 'px';
	}
	
}

function a() {
	$('.lazy').lazyload({
		effect: 'fadeIn',
		failure_limit: 10,
		threshold : 200,
		skip_invisible: false
	})
}

a();
