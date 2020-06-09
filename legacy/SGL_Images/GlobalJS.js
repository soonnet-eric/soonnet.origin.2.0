// JavaScript Document
var HomeLanguage = null, LanguageTag = 0; LokMDevice = false, yanlkeyd=null;Lokhostpage = null, GlobalCN = null, CO = 'current_observation', FC = 'forecast', bc = 'BaseCity', GlobalHK = null,lokscheme = 'http://';
var Lokaxdtimer,Loknoticetimer, LokMemU=0,Loklivtimer,LokMsgint=0,LokSelf=false,Lokserv =60000,Loopin =120000,readerByte=1048576*2,gusec =3000,gcctot =2000,vexten='.mp4',loks_t='請使用最新版Google chrome瀏覽器';
var LokDigitReg = new RegExp("^[0-9]*$"),Lokpubjs,Loknewjs,Gufont="預計完成時間：",dcbmfont="請先登入會員再瀏覽賽事詳情!",Voutt="本次上載仍在進行,離開會導致數據流失,確定離開?",bchtt="請勿使用不支援的符號，如 ( ', &, @)";
var LokFfmat = function (date) { return date.LokFormat("dd/MM/yyyy"); }
var LokFfmatSss=function(date) {return date.LokFormat("yyyy/MM/dd hh:mm:ss.S");}
var LokFfmatMm=function(date) {return date.LokFormat("yyyy/MM/dd hh:mm");}
var LokFfmatMmf=function(date) {return date.LokFormat("hh:mm");}
var advimages = ['adv800_1.gif', 'adv800_2.gif', 'adv800_3.gif', 'adv800_4.gif', 'adv800_5.gif', 'adv800_6.gif'  
];var advimagess = ['D_001.png','D_002.png'];var yanphotoServer=null, yanvideoServer=null, yanDOMAIN = 'soonnet.org',yanulajash = null,  lokvserverhost = null, bann=1,LokVUNdata, LokVUNload=false,LokVviewint=5,LokHDmenu=false,lboarea=false,loNTtl=0,loHTtl=0,loTtl=0,lokbref=null,lbroercm=$.browser.chrome;
var LokShorteds, Loktwdcbm = false, LokShorthost = lokscheme + window.location.host.replace(/www./g, '') + '/'; var lokDOMAIN = '.'+yanDOMAIN+';';var os_t='等待連線', ts_t='連線中...', zs_t='等待直播開始', fs_t='這段直播視頻已結束',br_t='觀看直播';
$(function () { var xwl=window.location.href;lokbref=xwl.substr(xwl.lastIndexOf('/')+1);
    if (window.location.hostname.toLowerCase().startsWith("localhost")) { lokDOMAIN = window.location.hostname + ';'; }
 	$.getUrlParam = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).toLowerCase().match(reg);
		if (r != null) return decodeURI(r[2]); return null;
    }
LokMDevice=$.browser.mobile;
Date.prototype.LokFormat = function (fmt) {
		var o = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S": this.getMilliseconds()
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	
    var config = {    
         sensitivity: 3,  
         interval: 200,    
         over: doOpen,    
         timeout: 200,       
         out: doClose   
    };
    
    function doOpen() {
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    }
 
    function doClose() {
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    }    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
	
$.fn.PpscrollLoading = function (options) {
        var defaults = {
            attr: "zoomfile"
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function () {
            var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
            if (!url) { return; }
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };
            params.cache.push(data);
        });

        var loading = function () {
            var st = $(window).scrollTop(), sth = st + $(window).height();
			var istop=0;
            $.each(params.cache, function (i, data) {
                var o = data.obj, tag = data.tag, url = data.url;
                if (o) {
                    post = o.position().top; posb = post + o.height();
						$("<img />").load(function(){o.hide().attr("src",url).fadeIn().removeAttr("class").removeAttr("zoomfile").removeAttr("style");
						}).attr("src",url + "?Lok=Who" + Math.random());o.attr('class','LoadPanel_Begin888');data.obj = null;	
                }
            });
        };loading();$(window).bind("scroll", loading);
    };$("#Language_ZH").change(function() { LanguageTag=parseInt($(this).val());SetDayCookie('BaseLanguage', LanguageTag);location.reload();}); 
	$.fn.LokajaScroll = function() {Lokajatimer($(this),0);};
	$("#smallotice_button").click(function(){ $('#Webimgcss').attr("src","/SGL_Images/AD/1700x650.jpg?v2");$('#WebNoticeinfo').fadeIn();});
	$("#Webimgcss").click(function(){if(!Loktwdcbm){alert(dcbmfont);}else{LokLocationURL('https://goo.gl/eh512K');}});
	$("#NoticeButton").click(function(){
		  $("html,body").animate({scrollTop: 0}, 500);
		  $("#WebNoticeinfo").slideUp(function(){
			  $(this).css({ display: "none" });SetHoursCookie('LokNotice', false);
		  });	
	});$(document).on('click', '#LokloaddataButton', function() {if(LokVUNload){return;}LokVUNload=true;loFppp();});
	$(document).on('click', '#loklndta', function() {if(LokVUNload){return;}LokVUNload=true;$(this).find(".lokssccircle").fadeIn();loFppp(loTtl,1);});
	$(document).on('click', '#loklhdta', function() {if(LokVUNload){return;}LokVUNload=true;$(this).find(".lokssccircle").fadeIn();loFppp(loTtl,2);});
	$(document).on('click', '#lokrefdta', function() {if(LokVUNload){return;}LokVUNload=true;$(this).find(".lokssccircle").fadeIn();loFppp(loTtl,0);});
		$('#LinkupMainpage').click(function () {LokLocationAssign(null,null);});if (lokbref.toLowerCase().startsWith("video.a")){$('#Callerror').text(os_t);if(lbroercm){var script = document.createElement("script");script.src = "/SGL_Js/hls.min.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(script, s);}else{$('#Callload').removeClass('LokSpinner');$('#Callerror').text(loks_t+br_t);}}
$('#LokPlayerlayer, #LokPlayerpanel').bind('contextmenu',function() { return false; });});
$(document).ready(function() {var Y2K=null, hlge=GetCookie('BaseLanguage');if (hlge!=null){if(LokCKini(hlge)){LanguageTag=parseInt(hlge);}}if(LanguageTag>1){LanguageTag=0;}var PPiuo=$('#Language_ZH  option');if (PPiuo.length>0){PPiuo.get(LanguageTag).selected = true;}//console.log('LanguageTag:' + LanguageTag);
    Lokaxdtimer = $.timer(function () {
        Y2K = GetCookie('YLocation'); if (Y2K != null) { $.get("/LokARX.cc?L=" + Y2K + "&W=IsExi"); } else { console.log('Y2K:' + Y2K); } Lokaxdtimer.stop();//Lokaxdtimer.set({ time: Loopin });
	$('#BackComputer').click(function (){SetDayCookie('PCD', false);LokLocationAssign('M','');});
});
Loknoticetimer = $.timer(function () {if (LokMemU<0){return;}var gjk=false;
$.ajax({url: "/Web_Data/LokNoticeList.js?Lok=Who" + Math.random(),type: "GET",dataType: "json",success: function(Jdata) {
	$.each( Jdata.LokJSon, function( Y, L ) {if (LokMemU== parseInt(L.N_UUid)){LokMsgint=L.N_UNRead; //console.log( "<li id='" + Y + "'>" + L.N_UUid + "</li>" );
	if (LokSelf){$('#LokReceiveMessage').text(LokMsgint);gjk=true;return false;}else{if (LokMsgint==0){console.log('LokMsgint:' + LokMsgint);}else{
	$('#LokNoticeinfo').text(LokMsgint);$('#LokMessageNotice').css({ right: "0px" }).fadeIn();gjk=true;return false;}}}});
  },error: function() {}});if(!gjk){$('#LokMessageNotice').fadeOut();}if (LokSelf){$('#LokReceiveMessage').text('0');}
Loknoticetimer.set({ time: Lokserv });});
$('#YesIKnow').click(function () {$('#LokMessageNotice').animate({ 'right': '-300px' }, 500, function () {$(this).css({ display: "none" });});});
Lokaxdtimer.set({ time: 6000, autostart: true });
});
function popoad() {return;var hlgevN=GetCookie('LokNotice');if (lokbref.toLowerCase().startsWith("createnews.a")){$('#smallotice_button').remove();return;}else if (lokbref.toLowerCase().startsWith("createdaily.a")){$('#smallotice_button').remove();return;}else if (lokbref.toLowerCase().startsWith("videoupload.a")){$('#smallotice_button').remove();return;}else if (lokbref.toLowerCase().startsWith("photoupload.a")){$('#smallotice_button').remove();return;}
	if (hlgevN==null){$('#event-tw-2019-popup').fadeIn();}else{$('#WebNoticeinfo88').remove();$('#WebBar').removeClass('WebBarcss');}
}function cbhut(b) {
	 $('#Webimgcss').attr("src","/SGL_Images/AD/1700x650.jpg?v5");
	 $('#WebNoticeinfo').css({ display: "block" });}
function Ovvvo(z){$("#lokvdta"+z).append(decodeURIComponent(LokVUNdata));}
function Mvvvoe(z){$("#lokl"+z).remove();}function rdfblgn(){$('#LokOverlay').fadeIn(); $('#LoadingGif').fadeIn(); $("body").css("overflow", "hidden");setTimeout(function () {checkLoginState();console.log('remove.');},3000);}
function cderaj(data){if (data.startsWith("MCon Wrong")){alert(bchtt);return true;}return false;
}function Windowscroll(){
	var Navfo = $("#LokNavigationBar");
	var Navfjl = Navfo.position().top;	          
	window.onscroll=function(){
		 var NavFlm = $(window).scrollTop();
		 if (NavFlm > Navfjl)
		 {Navfo.addClass('NavigationFloat');
		 }else{Navfo.removeClass('NavigationFloat');}
	};	
}
function LokDrawImage(imgurl){
   var image=new Image();
   var FitWidth,FitHeight;
   FitWidth=1024;
   FitHeight=600;
   image.src=imgurl;
   if(image.width>0 && image.height>0){
       if(image.width/image.height>= FitWidth/FitHeight){
           if(image.width>FitWidth){
               Wo=FitWidth;
               Ho=(image.height*FitWidth)/image.width;
           }else{
               Wo=image.width;
               Ho=image.height;
           }
       } else{
           if(image.height>FitHeight){
               Ho=FitHeight;
               Wo=(image.width*FitHeight)/image.height;
           }else{
               Wo=image.width;
               Ho=image.height;
           }
       }
   }
}
var imgReady = (function () {
	var list = [], intervalId = null,
	tick = function () {
		var i = 0;
		for (; i < list.length; i++) {
			list[i].end ? list.splice(i--, 1) : list[i]();
		};
		!list.length && stop();
	},
	stop = function () {
		clearInterval(intervalId);
		intervalId = null;
	};
	return function (url, ready, iscomplete, error, load) {
		var onready, width, height, newWidth, newHeight,
			img = new Image();
		img.src = url;
		if (img.complete) {
			ready.call(img);
			iscomplete.call(img);
			load && load.call(img);
			return;
		};
		width = img.width;
		height = img.height;
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};
		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height || newWidth * newHeight > 1024)
			{
				ready.call(img);
				onready.end = true;
			};
		};
		onready();
		img.onload = function () {
			!onready.end && onready();
			iscomplete.call(img);
			load && load.call(img);
			img = img.onload = img.onerror = null;
		};
		if (!onready.end) {
			list.push(onready);
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();
function ByeOverlay(){$('.msgbox_layer_wrap').hide();$('#LokOverlay').fadeOut('fast');}
function ByeOverlaySout(so){setTimeout(function () {$('#LokOverlay').fadeOut('fast');}, so);}
function JustOverlay(info){
var msg = 'Waiting...';
var tipHtml = '<img src="/SGL_Images/Waiting_x16.gif">'+ info;
if ($('.msgbox_layer_wrap')){$('.msgbox_layer_wrap').remove();}
$("body").prepend("<div class='msgbox_layer_wrap'><span id='mode_tips_v2' style='z-index: 2;' class='msgbox_layer'><span class='gtl_ico_clear'></span>"+tipHtml+"<span class='gtl_end'></span></span></div>");
$('#LokOverlay').fadeIn('fast');
$('.msgbox_layer_wrap').fadeIn('fast');
$('.msgbox_layer_wrap').animate({ 'top': '200px' }, 500);
}
function GetCookie(name){var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr != null) return decodeURIComponent(arr[2]); return null;}
function SetCookie(name, value) { var Days = 30; var exp = new Date(); exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + lokDOMAIN; }
function SetDayCookie(name, value) { var Days = 1; var exp = new Date(); exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + lokDOMAIN; }
function SetHoursCookie(name, value) { var Days = 1; var exp = new Date(); exp.setTime(exp.getTime() + 8 *60 * 60 * 1000); document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + lokDOMAIN; }
function LokLocationAssign(Point, Qs) { window.location.assign(lokscheme + window.location.host + '/' + Point + escape(Qs)); window.location.href = lokscheme + window.location.host + '/' + Point + encodeURIComponent(Qs); }
function LokLocationURL(url){window.location.assign(url);window.location.href=url;}
function Lokgetnowtimer(){ var DD= new Date();return DD.getMinutes() + ':' + DD.getSeconds() + ':' + DD.getMilliseconds();}
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURI(r[2]); return null; 
}
function LokPrinttime(){var nd=new Date();return nd.LokFormat("hh:mm:ss.S")+'@ ';}
function LokCKini(ec){if (isNaN(ec)){console.log('isNaN:' + ec);return false;}if (parseInt(ec) <=0){console.log('parseInt:' + ec);return false;}return true;}
$('#LokBackToTop').live('click',function(){$("html,body").animate({ scrollTop: 0 }, 500);});
function LokGetRoundDd(num, len) {if(!LokCKini(num)){return 0;}return num.toFixed(len);}
function todWea(u){$('#LokTodayWeather').css('background-image', 'url('+todWu(u)+')');}
function todWu(fn){var d='.png';if(fn=='404'){d='.jpg';}return "/Web_Data/Weather/"+removeAllSpace(fn) + d;}
function LokDateDiff(sDate1, sDate2)  
{
    var aDate, oDate1, oDate2, iDays;  
    aDate = sDate1.split("/");  
    oDate1 = new Date(aDate[0],aDate[1]-1,aDate[2]);  
    aDate = sDate2.split("/");  
    oDate2 = new Date(aDate[0],aDate[1]-1,aDate[2]);
    return  (oDate1.getTime() > oDate2.getTime());   
}  
function LokKeyPressbyinput(evt,Typ)
{evt = (evt) ? evt : ((window.event) ? window.event : "");
var key = evt.keyCode?evt.keyCode:evt.which;
if (key==13){
switch(Typ){
case 1:GogoSearch();break;
case 2:Fpagebykey();
  break;
default:
 return false;
}}return false;}
function GogoSearch(){var Qbox=$('#LokSearchBox input[type="text"]');var Qs=Qbox.val();if (Qs == "") return false;LokLocationAssign('Search.aspx?F='+Lokhostpage+'&Q=',Qs);}
function LokBlockFooter(){$('#Lok_Footer').remove();}
function Lokmarkajax(){console.log('start:'+LokFfmatSss(new Date()));return;
$.ajax({url: window.location.protocol+"//api.wunderground.com/api/1fe2f3783409f859/forecast/conditions/lang:TW/q/autoip.json" ,dataType: "jsonp",
success: function(Lokdata) {var Eerror=Lokdata['response']['error'];if((Eerror!=null)){todWea('404');alert('Get Weather Fail.!');return;}
var jJd = ['observation_time', 'icon', 'weather', 'temp_c', 'relative_humidity', 'wind_dir', 'wind_kph', 'precip_today_metric'];
var location = Lokdata[CO]['display_location']['full'];var location_city = Lokdata[CO]['display_location']['city'];
if(location.indexOf('Green Island') != -1){location='Hong Kong, 香港'}if(location_city.indexOf('Green Island') != -1){location_city='HongKong'}
var fd = new FormData();fd.append('full', location);fd.append('city', location_city);$.each(jJd, function(key, value) {fd.append(value, Lokdata[CO][value]);});
$.each(Lokdata[FC]['simpleforecast']['forecastday'], function(key, value) {
fd.append('conditions'+key, value['conditions']);
fd.append('date'+key, value['date']['weekday_short']);
fd.append('high'+key, value['high']['celsius']);
fd.append('low'+key, value['low']['celsius']);
fd.append('icon'+key, value['icon']);
});var Y62K=null;Y62K=GetCookie('YLocation');if (Y62K ==null){return;}
$.ajax({url: '/LokARX.cc?L='+Y62K +'&W=IsWeather',data: fd,cache: false,mimeType:"multipart/form-data",contentType: false,processData:false,type: 'POST',
success: function(data){if (!data.startsWith("LokWeatherDone")){alert('WeatherCB Error:' + data);}SetCookie(bc, location_city);todWea(location_city);},
error: function(jqXHR, textStatus, errorThrown){todWea('404');alert('Weather Error:TimeOut.!');}
});},error: function(jqXHR, textStatus, errorThrown){todWea('404');alert('Source Error:TimeOut.!');}
});}
function LokWaitingPanel(DIV){
$('#' + DIV).append('<div id="Lok_WaitingPanel" class="WaitingPanel"></div>');
setTimeout(function () {$('#Lok_WaitingPanel').remove();},650);
}
GlobalHK = new Array("重機","路跑","聯絡我們"
						  );
GlobalCN = new Array("重机","路跑","联络我们"
				);
function LokUptitle(Lok){$(document).attr("title", Lok);}
function LokSpFloat(LStartimer) {
try{
var OffTicks=((new Date()).getTime()) - LokStarticks;
var UseTicks= parseFloat(OffTicks / 1000);
LokTicks += UseTicks;
Lokspeed = parseFloat(Loklength / LokTicks);
}
catch(err){}	
}
function ftime(time){
	var hourstr='', hours = Math.floor((time / 60 / 60) % 60),
	minutes = Math.floor((time / 60) % 60),
	seconds = Math.floor(time % 60);
	if (hours > 0) {if (hours < 10) {hours = '0' + hours;}hourstr=hours + ':';}
	if (seconds < 10) {seconds = '0' + seconds;}
	if (minutes < 10) {minutes = '0' + minutes;}
	return (hourstr + minutes + ':' + seconds);
}
function toggleFullScreen(d,v) {if(!isFullScreen()){
			if (d.requestFullscreen) {
				d.requestFullscreen();
			} else if (d.webkitRequestFullScreen) {
				d.webkitRequestFullScreen();
			} else if (d.mozRequestFullScreen) {
				d.mozRequestFullScreen();
			} else if (d.msRequestFullscreen) {
				d.msRequestFullscreen();
			}$('#LokVideo').removeClass('Defaultvideosize');
			$('#LokPlayerD').removeClass('DefaultplayerDiv').addClass('FullscreenplayerDiv');} else {
	if (document.exitFullscreen) document.exitFullscreen();
		  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		  else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
		  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		  else if (document.msExitFullscreen) document.msExitFullscreen();
		  $('#LokVideo').addClass('Defaultvideosize');
		  $('#LokPlayerD').removeClass('FullscreenplayerDiv').addClass('DefaultplayerDiv');					
  }
}
function DetectFullScreen() {return isFullScreen();
}
var isFullScreen = function() {
	return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}
function WillChangelanguage(){
switch(LanguageTag){
case 1:break;
case 2:break;
  break;
default:
	HomeLanguage=GlobalHK;
	break;
}

	for (var i = 0; i < HomeLanguage.length; i++) {
		console.log($('#loklanguage' + i).html());
		$('#loklanguage' + i).html(HomeLanguage[i]);
	}	
//	HomeLanguage.forEach(function(value, index){
//		console.log(value + '_' + index);
//	});
}
var lokimgReady = (function () {
	var list = [], intervalId = null,
	tick = function () {
		var i = 0;
		for (; i < list.length; i++) {
			list[i].end ? list.splice(i--, 1) : list[i]();
		};
		!list.length && stop();
	},
	stop = function () {
		clearInterval(intervalId);
		intervalId = null;
	};
	return function (url, ready, iscomplete, error, load) {
		var onready, width, height, newWidth, newHeight,
			img = new Image();
		img.src = url;
		if (img.complete) {
			ready.call(img);
			iscomplete.call(img);
			load && load.call(img);
			return;
		};
		width = img.width;
		height = img.height;
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};
		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height || newWidth * newHeight > 1024)
			{
				ready.call(img);
				onready.end = true;
			};
		};
		onready();
		img.onload = function () {
			!onready.end && onready();
			iscomplete.call(img);
			load && load.call(img);
			img = img.onload = img.onerror = null;
		};
		if (!onready.end) {
			list.push(onready);
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();
function AAdd(){console.log('bann:'+bann);if(bann>1){return;}$('#SortindexBanner').css({'background-image': 'url(/Advertisement/' + advimages[bann-1] + ')'});bann++;setTimeout(function () {AAdd();}, 1000);}
function AAdsd(){console.log('bann:'+bann);if(bann>=3){bann=1;}$('#SortindexBanner').css({'background-image': 'url(/Advertisement/' + advimagess[bann-1] + ')'});bann++;setTimeout(function () {AAdsd();}, 3000);}
function loPppp(){$(".Kei_Go_l .lokssccircle").each(function() {console.log('this.text:'+$(this).text());
$(this).css({ display: "none" });
});LokVUNload=false;$("#Lokloadwating").fadeOut();$("#LokloaddataButton").text('載入更多影片');}
function removeAllSpace(str) {
return str.replace(/\s+/g, "");
}