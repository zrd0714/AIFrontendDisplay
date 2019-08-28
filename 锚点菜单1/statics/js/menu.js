var isScroll = "0";
//初期化自动打开/折叠开关
var initShowSection = 0;

/**************************************************************************** ajax json data sample start ****************************************************************************/
myList = {
    "name":"manu data",
    "num":14,
    "sites": [
        { "id": "10000000", "link": "1", "label": "p1",		"parentId":"", 			"name":"一、综合安全管理单元" },
        { "id": "10100000", "link": "1", "label": "p1-1",	"parentId":"10000000",	"name":"1.1、安全生产管理机构人员" },
		{ "id": "10200000", "link": "1", "label": "p1-2",	"parentId":"10000000",	"name":"1.2、特种作业人员" },
		{ "id": "10300000", "link": "1", "label": "p1-3",	"parentId":"10000000",	"name":"1.3、安全生产管理制度" },
		{ "id": "10400000", "link": "1", "label": "p1-4",	"parentId":"10000000",	"name":"1.4、安全生产资金投入" },
		{ "id": "10500000", "link": "1", "label": "p1-5",	"parentId":"10000000",	"name":"1.5、教育培训" },
		{ "id": "20000000", "link": "1", "label": "p2",		"parentId":"",			"name":"二、周边环境" },
		{ "id": "30000000", "link": "1", "label": "p3",		"parentId":"",			"name":"三、生产工艺及设备" },
		{ "id": "30100000", "link": "1", "label": "p3-1",	"parentId":"30000000",	"name":"3.1、燃煤输送设备及系统" },
		{ "id": "30200000", "link": "1", "label": "p3-2",	"parentId":"30000000",	"name":"3.2、锅炉" },
		{ "id": "40000000", "link": "1", "label": "p4",		"parentId":"",			"name":"四、视频播放" },
		{ "id": "40100000", "link": "1", "label": "p4-1",	"parentId":"40000000",	"name":"4.1、播放视频简单例子" },
		{ "id": "50000000", "link": "1", "label": "p5",		"parentId":"",			"name":"五、图片/文件上传" },
		{ "id": "50100000", "link": "1", "label": "p5-1",	"parentId":"50000000",	"name":"5.1、图片文件上传简单例子" },
    ]
}

myContent = {
    "name":"content data",
    "num":11,
    "sites": [
        { "id": "10101000", "show": "1", "label": "c1-1-1", "parentId":"10100000", "title":"序号1",	"dependency":"《生产过程安全卫生要求总则》GB/T 12801-2008 第7.3条",			"content":"企业应根据本标准和国家有关规定制订如下一些安全、卫生管理制度：ａ.安全、卫生管理制度；b.安全生产责任制度；c.安全生产检查制度；d.安全技术规 程；e事故调查、分析、报告、处理制度；f安全、卫生技术措施实施计划；ｇ.安全、卫生培训、教育制度；ｈ.安全、卫生评价制度；ｉ.其它安全、卫生管理 制度。" },
        { "id": "10102000", "show": "1", "label": "c1-1-2", "parentId":"10100000", "title":"序号2",	"dependency":"《安全生产法》第五条",										"content":"生产经营单位的主要负责人对本单位的安全生产工作全面负责。" },
		{ "id": "10103000", "show": "1", "label": "c1-1-3", "parentId":"10100000", "title":"序号3",	"dependency":"《河南省安全生产条例》第十一条",								"content":"生产经营单位的主要负责人对本单位的安全生产工作全面负责；其它负责人对分管业务范围内的安全生产工作负领导责任。" },
		{ "id": "10201000", "show": "1", "label": "c1-2-1", "parentId":"10200000", "title":"序号6",	"dependency":"《安全生产法》第二十七条",									"content":"生产经营单位的特种作业人员必须按照国家有关规定经专门的安全作业培训，取得特种作业操作资格证书方可上岗作业;特种作业人员的范围由国务院负责安全生产 监督管理的部门会同国务院有关部门确定。" },
		{ "id": "10301000", "show": "1", "label": "c1-3-1", "parentId":"10300000", "title":"序号7",	"dependency":"《安全生产法》第四条",										"content":"生产经营单位必须遵守本法和其他有关安全生产的法律、法规，加强安全生产管理，建立、健全安全生产责任制度，完善安全生产条件，确保安全生产。;特种作业人员的范围由国务院负责安全生产 监督管理的部门会同国务院有关部门确定。" },
		{ "id": "10302000", "show": "1", "label": "c1-3-2", "parentId":"10300000", "title":"序号8",	"dependency":"《安全生产法》第十八条",										"content":"生产经营单位的主要负责人对本单位安全生产工作负有下列职责：建立、健全本单位安全生产责任制；组织制定本单位安全生产规章制度和操作规程。;特种作业人员的范围由国务院负责安全生产 监督管理的部门会同国务院有关部门确定。" },
		{ "id": "10401000", "show": "1", "label": "c1-4-1", "parentId":"10400000", "title":"序号9",	"dependency":"《安全生产法》第十八条",										"content":"生产经营单位的主要负责人对本单位安全生产工作负有下列职责；保证本单位安全生产投入的有效实施；;特种作业人员的范围由国务院负责安全生产 监督管理的部门会同国务院有关部门确定。" },
		{ "id": "10402000", "show": "1", "label": "c1-4-2", "parentId":"10400000", "title":"序号10",	"dependency":"《安全生产法》第二十条",										"content":"生产经营单位应当具备的安全生产条件所必需的资金投入，有生产经营单位的决策机构、主要负责人或者个人经营的投资人予以保证，并对由于安全生产所必需的资 金投入不足导致的后果承担责任。" },
		{ "id": "10501000", "show": "1", "label": "c1-5-1", "parentId":"10500000", "title":"序号13",	"dependency":"《安全生产法》第二十五条",									"content":"生产经营单位应当对从业人员进行安全生产教育和培训，保证从业人员具备必要的安全生产知识，熟悉有关的安全生产规章制度和安全操作规程，掌握本岗位的安全 操作技能。" },
		{ "id": "30101000", "show": "1", "label": "c3-1-1", "parentId":"30100000", "title":"序号59",	"dependency":"《火力发电厂设计技术规程》DL5000-2000 第7.3.1、7.3.5、7.8.6条",	"content":"1、 进入锅炉房的运煤带式输送机应采用双路系统，并具备双路同时运行的条件。每路带式输送机的出力不应小于全厂锅炉最大连续蒸发量时总耗煤量的150%。 2、 煤仓间带式输送机应有防止卸煤时煤尘飞扬的密封措施。3、运煤系统建筑物的清扫应采用水冲洗或真空清扫。 当采用水冲洗时， 设备布置及有关工艺、建筑的设计应满足冲洗的要求， 并应有沉淀和回收细煤的设施。在地下卸煤槽、翻车机室、 转运站、碎煤机室和煤仓间带式输送机层的设计中， 应有防止煤尘飞扬的措施。煤场应设置水喷淋装置。" },
		{ "id": "30201000", "show": "1", "label": "c3-2-1", "parentId":"30200000", "title":"序号60",	"dependency":"《火力发电厂设计技术规程》DL 5000-2000第8.1.1条",				"content":"发电厂锅炉的型式、台数和容量，按下列要求选择：1 锅炉设备的选型和技术要求应符合SD268—1988《燃煤电站锅炉技术条件》的规定。锅炉设备的型式必须适应燃用煤种的煤质特性及现行规定中的煤质允许 变化范围。对燃煤及其灰分应进行物理、化学试验与分析，以取得煤质的常规特性数据和非常规特性数据。2 对于中间再热机组，宜一机配一炉。锅炉的最大连续蒸发量宜与汽轮机调节阀全开时的进汽量相匹配。3 对装有非中间再热供热式机组且主蒸汽采用母管制系统的发电厂，当一台容量最大的蒸汽锅炉停用时，其余锅炉（包括可利用的其他可靠热源）应满 足：     1）热力用户连续生产所需的生产用汽量；     2）冬季采暖、通风和生活用热量的60％～75％，严寒地区取上限；此时，可降低部分发电出力。4 对装有中间再热供热式机组的发电厂，其对外供热能力的选择，应连同同一热网其他热源能力一并考虑；当一台容量最大的蒸汽锅炉停用时，其余锅炉的对外供汽能 力若不能满足本条第3款的要求，则不足部分依靠同一热网的其他热源解决。" },
    ]
}
/**************************************************************************** ajax json data sample end ****************************************************************************/

function initMenu() {
	var menuList = myList;
	var menuTemp = '';
	for(var i = 0; i < menuList.num; i++) {
		if(menuList.sites[i].parentId == "") {
			menuTemp += '<li class="menu-item menu-item-1 collapse" name="' + menuList.sites[i].label + '">';
			menuTemp += '	<a class="sub-title" href="javascript:;">' + menuList.sites[i].name + '</a>';
			menuTemp += '</li>';
			$('.menu-group').append(menuTemp);
			menuTemp = '';
		} else {
			for(var j = 0; j < menuList.num; j++) {
				if(menuList.sites[i].parentId == menuList.sites[j].id) {
					if($('[name="' + menuList.sites[j].label + '"]').children('ul').length == 0) {
						menuTemp += ' <ul>';
						menuTemp += ' </ul>';
						$('[name="' + menuList.sites[j].label + '"]').append(menuTemp);
						menuTemp = '';
					}
					
					menuTemp += '		<li class="menu-item menu-item-2">';
					menuTemp += '			<a href="#' + menuList.sites[i].label + '" class="sub-link" name="' + menuList.sites[i].label + '">' + menuList.sites[i].name + '</a>';
					menuTemp += '		</li>';
					$('[name="' + menuList.sites[j].label + '"] ul').append(menuTemp);
					menuTemp = '';
				}
			}
		}
	}
}

function getMenuObject(id) {
	var menuList = myList;
	for(var i = 0; i < menuList.num; i++) {
		if(!id && id == '') {
			return null;
		} else if(id == menuList.sites[i].id) {
			return menuList.sites[i];
		}
	}
	return "";
}

function initContent() {
	var contentList = myContent;
	var contentTemp = '';
	var parentObj;
	
	for(var i = 0; i < contentList.num; i++) {
		if(contentList.sites[i].show == "1") {
			parentObj = getMenuObject(contentList.sites[i].parentId);
			
			contentTemp += '<div class="am-panel am-panel-default">';
			contentTemp += '	<div class="am-panel-hd content-item-single-title">' + contentList.sites[i].title + '</div>';
			contentTemp += '	<div class="am-panel-bd">';
			contentTemp += '		<div class="content-item">';
			contentTemp += '			<ul>';
			contentTemp += '				<li class="content-li">';
			contentTemp += '					<label><strong>检查内容：</strong></label>';
			contentTemp += '					<div class="editAble content-check-body">';
			contentTemp += '						' + contentList.sites[i].content;
			contentTemp += '					</div>';
			contentTemp += '				</li>';
			contentTemp += '				<li class="content-li">';
			contentTemp += '					<label><strong>检查依据：</strong></label>';
			contentTemp += '					<span class="editAble content-check-dependency">';
			contentTemp += '						' + contentList.sites[i].dependency;
			contentTemp += '					</span>';
			contentTemp += '				</li>';
			contentTemp += '				<li class="content-li">';
			contentTemp += '					<label><strong>现场照片或音视频：</strong></label>';
			contentTemp += '					<div class="content-check-upload">';
			contentTemp += '						<input type="file" id="input-file-add" style="display: block;" class="dropify-fr dropify-event" data-height="230" data-max-file-size="5M" data-min-width="100" data-max-width="1000" data-min-height="100" data-max-height="1000" data-show-remove="false" data-allowed-file-extensions="jpg png gif">';
			contentTemp += '					</div>';
			contentTemp += '				</li>';
			contentTemp += '				<li class="content-li">';
			contentTemp += '					<label><strong>实际情况描述：</strong></label><br>';
			contentTemp += '					<textarea placeholder="请输入描述" class="content-check-descript-input m-input m-textarea" rows="3"></textarea>';
			contentTemp += '				</li>';
			contentTemp += '			</ul>';
			contentTemp += '			<div class="content-div" style="margin-top: 16px;">';
			contentTemp += '				<label style="display: inline-block;"><strong>是否符合：</strong></label>';
			contentTemp += '				<ul style="display: inline-block;">';
			contentTemp += '					<li class="radio-item-li">';
			contentTemp += '						<div class="radio-item-div">';
			contentTemp += '							<label class="radio-item-label"></label>';
			contentTemp += '							<input type="radio" name="radio1-1" value="1">';
			contentTemp += '							<label class="">是</label></div>';
			contentTemp += '					</li>';
			contentTemp += '					<li class="radio-item-li">';
			contentTemp += '						<div class="radio-item-div">';
			contentTemp += '							<label class="radio-item-label"></label>';
			contentTemp += '							<input type="radio" name="radio1-1" value="0">';
			contentTemp += '							<label class="">否</label>';
			contentTemp += '						</div>';
			contentTemp += '					</li>';
			contentTemp += '				</ul>';
			contentTemp += '			</div>';
			contentTemp += '			<ul>';
			contentTemp += '				<li class="content-li">';
			contentTemp += '					<label><strong>整改措施及建议：</strong></label><br>';
			contentTemp += '					<textarea placeholder="请输入描述" class="content-check-improve-input m-input m-textarea" rows="3"></textarea>';
			contentTemp += '				</li>';
			contentTemp += '			</ul>';
			contentTemp += '		</div>';
			contentTemp += '	</div>';
			contentTemp += '</div>';
			
			$('[id="' + parentObj.label + '"]').parent().find(".am-panel-bd").eq(0).append(contentTemp);
			contentTemp = '';
		}
	}
}

$(function() {
	initMenu();
	
	initContent();
	
	var dateStr = new Date().Format("yyyy-MM-dd HH:mm:ss");
	$('.show-time').html(dateStr);
	//左侧菜单
	var h = 0;
	$('.menu-item-1 .sub-title').click(function() {
		var obj = $(this);
		$(this).parent().toggleClass('active collapse');
		$('.menu-item-1').each(function() {
			h += $(this).height();
		})
		//给菜单赋值高度
		$('.sidebar').css({
			"height": h
		});
		h = 0;
		
		$('.menu-item-1').each(function() {
			if(obj.parent().attr("name") != $(this).attr("name")) {
				$(this).removeClass("active");
				$(this).addClass("collapse");
			}
		})
	});
	
	//右上角鼠标悬浮触发下拉
	$('.dropdown-toc').hover(function() {
		$('.dropdown-body').toggle();
	});
	
	//滚动监听
	var leg = $('.maodian').length;
	$(window).scroll(function() {
		$('.imgtc').hide(); //滚动后图片放大隐藏
		var sh = $(window).scrollTop()
		//右上悬浮
		sh > 86 ? $('.anchor-toc').addClass('fixed') : $('.anchor-toc').removeClass('fixed');
		//循环遍历锚点
		for(i = 1; i <= leg; i++) {
			if($("#mao" + i).offset().top-140 <= sh) {
				$('.maodian').removeClass('active');
				$('#mao' + i).addClass("active");
				$('.toc-current').text($('#mao'+i).parent().text());
				$('.dropdown-body ul li').removeClass('active').eq(i-1).addClass('active');
			}
			
		}
		sh < 140?$('.toc-current').text("本页导航"):"";
	});
	
	//右上角点击
	$('.dropdown-body ul li').click(function(){
		var jt = $(this).index();
		$(window).scrollTop($('.maodian').eq(jt).offset().top-140);
	});
	
	//图片放大
	$('img').click(function(){
		var img = $(this).attr('src');
		$('.imgtc').show().find('img').attr('src',img);
	});
	
	$('.imgtc').click(function(){
		$(this).toggle();
	});
	
	//点击链接打开右侧折叠框
	$('.sub-link').click(function(){
		//console.log($(this).parents(".menu-item-1").attr("name"));
		
		//console.log($(this).attr("name"));
		//$(".am-panel-hd").find([id='am-active']);
		
		$(".am-panel-group").find('[id="' + $(this).attr("name") + '"]').parents("div[id^='business-section']").css("height", "auto");
		$(".am-panel-group").find('[id="' + $(this).attr("name") + '"]').parents("div[id^='business-section']").addClass("am-in");
		$(".am-panel-group").find('[id="' + $(this).attr("name") + '"]').parents("div[id^='business-section']").parent().find("#web-icon").attr("class", "am-icon-angle-down am-fr am-margin-right");
	});
	
	//折叠框icon变形
	$("div[id^='business-section']").on('open.collapse.amui', function() {
		$(this).parent().find("#web-icon").attr("class", "am-icon-angle-down am-fr am-margin-right");
	}).on('close.collapse.amui', function() {
		$(this).parent().find("#web-icon").attr("class", "am-icon-angle-right am-fr am-margin-right");
	});
	
	//折叠框初始化展开/折叠开关设定
	if(initShowSection == 1) {
		$("div[id^='business-section']").addClass("am-in");
	} else {
		$("div[id^='business-section']").removeClass("am-in");
	}
	
	//初期化视频加载
	initVideo();
	
	//初期化附件上传
	initUploadAttach();
	
	//top事件注册
	scrollToTop ();
});

$(window).scroll(function(event){
	//alert(isScroll);
　　//$("[class=am-active]").parents(".menu-item-1").addClass("active");
});

jQuery(window).on('scroll', function(){
	(function ($) {
		stickyHeader();
	})(jQuery);
});

function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

function stickyHeader() {
	var strickyScrollPos = 0;
	
	if ($(window).scrollTop() > strickyScrollPos) {
		$('.scroll-to-top').fadeIn(1500);
	} else if ($(this).scrollTop() <= strickyScrollPos) {
		$('.scroll-to-top').fadeOut(1500);
	}
}

//滚动滑轮更新左侧菜单
var scrollFunc = function (e) {
	e = e || window.event;
	if (e.wheelDelta) {
		if (e.wheelDelta != 0) {
			$("[class='sub-link am-active']").parents(".menu-item-1").addClass("active");
			$('.menu-item-1').each(function() {
				if($("[class='sub-link am-active']").parents(".menu-item-1").attr("name") != $(this).attr("name")) {
					$(this).removeClass("active");
					$(this).addClass("collapse");
				}
			});
		}
	} else if (e.detail) {
		if (e.detail != 0) {
			$("[class='sub-link am-active']").parents(".menu-item-1").addClass("active");
			$('.menu-item-1').each(function() {
				if($("[class='sub-link am-active']").parents(".menu-item-1").attr("name") != $(this).attr("name")) {
					$(this).removeClass("active");
					$(this).addClass("collapse");
				}
			});
		} 
	}
}  

//给页面绑定滑轮滚动事件  
if (document.addEventListener) {  
	document.addEventListener('DOMMouseScroll', scrollFunc, false);  
}  

//滚动滑轮触发scrollFunc方法  
window.onmousewheel = document.onmousewheel = scrollFunc;

//点击隐藏
$('.menu-top').click(function() {
	$(this).toggleClass('active collapse');
	if($(this).hasClass('active')) {
		$('.sidebar-wrapper').css("left", "0px");
		$('.main-container').css("margin-left", "230px");
		//延时方式
//		setTimeout(function() {
//			$('.menu-group').show();
//		}, 1000);
		//透明度
		$('.menu-group').css("opacity", "1");
		$(this).html("隐藏 &laquo;");
	} else {
		$('.sidebar-wrapper').css("left", "-200px");
		$('.main-container').css("margin-left", "30px");
		//延时方式
//		setTimeout(function() {
//			$('.menu-group').hide();
//		}, 1000);
		//透明度
		$('.menu-group').css("opacity", "0");
		$(this).html("显示 &raquo;");
	}
});

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function initVideo() {
	$(".title_top").text("视频播放测试");
	var vids = document.getElementById("vids");
	var sskd = $(".controls").width();
	
	var csdz = "statics/video/";
	
	var xzdz = "short_video.mp4";
	vids.src = csdz + xzdz;
}

function initUploadAttach() {
	//渲染图片
	$('.dropify-fr').dropify({
		//maxFileSize: '1000k',
		disableRemove: true,
		messages: {
			'default': '点击或拖拽文件到这里<br>最佳尺寸：400 * 400',
			'replace': '点击或拖拽文件到这里来替换文件',
			'remove':  '移除文件',
			'error':   '错误',
		},
		error: {
			'fileSize': '文件尺寸超过最大值 ({{ value }}).',
			'minWidth': '文件宽度小于最大值 ({{ value }}px).',
			'maxWidth': '文件宽度大于最大值 ({{ value }}px).',
			'minHeight': '文件高度小于最大值 ({{ value }}px).',
			'maxHeight': '文件高度大于最大值 ({{ value }}px).',
			'imageFormat': '请使用下列图片格式 ({{ value }}).',
			'fileExtension': '请使用下列文件格式 ({{ value }}).'
		},
	});
	
	dropifyRender();
}

function dropifyRender() {
    // Used events
    var drEvent = $('.dropify-event').dropify();

//    drEvent.on('dropify.beforeClear', function(event, element){
//        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
//    });
//
//    drEvent.on('dropify.afterClear', function(event, element){
//        alert('File deleted');
//    });
    
	drEvent.on('dropify.fileReady', function(event, element) {

	});
    
    drEvent.on('dropify.error.fileSize', function(event, element) {
	    alert('文件尺寸超过最大值 (' + $(this).attr('data-max-file-size') + ').');
	});
    
	drEvent.on('dropify.error.minWidth', function(event, element) {
		alert('文件宽度小于最大值 (' + $(this).attr('data-min-width') + 'px).');
	});
	
	drEvent.on('dropify.error.maxWidth', function(event, element) {
		alert('文件宽度大于最大值 (' + $(this).attr('data-max-width') + 'px).');
	});
	
	drEvent.on('dropify.error.minHeight', function(event, element) {
		alert('文件高度小于最大值 (' + $(this).attr('data-min-height') + 'px).');
	});
	
	drEvent.on('dropify.error.maxHeight', function(event, element) {
		alert('文件高度大于最大值 (' + $(this).attr('data-max-height') + 'px).');
	});
	
	drEvent.on('dropify.error.fileExtension', function(event, element) {
		alert('请使用下列文件格式 (' + $(this).attr('data-allowed-file-extensions') + ').');
	});
    
    $(".dropify-wrapper").css('padding', '0px');
    $(".dropify-wrapper").css('border', '0px');
    $(".dropify-infos-inner").css('display', 'none');
    $(".dropify-fr").css('display', 'block');
}

$('.open-checklist-all').click(function() {
	//$("div[id^='business-section']").css("height", "auto");
	//$("div[id^='business-section']").addClass("am-in");
	//$("div[id^='business-section']").parent().find("#web-icon").attr("class", "am-icon-angle-down am-fr am-margin-right");
	$("div[id^='business-section']").collapse('open');
});

$('.collapse-checklist-all').click(function() {
	//$("div[id^='business-section']").removeClass("am-in");
	//$("div[id^='business-section']").parent().find("#web-icon").attr("class", "am-icon-angle-right am-fr am-margin-right");
	$("div[id^='business-section']").collapse('close');
});