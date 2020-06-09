var  Loktopmsg,fjl,fsa,fo,Msort,wea=false;
$(function () {var Locationfile,Windowlocation=window.location.href;
	  Locationfile=Windowlocation.substr(Windowlocation.lastIndexOf('/')+1);  
  if (Locationfile.toLowerCase().startsWith("marathon.a")){Lokpubjs='Marathon';Loknewjs='M';wea=true;}
  else if (Locationfile.toLowerCase().startsWith("car.a")){Lokpubjs='Car';Loknewjs='C';wea=true;}
  else if (Locationfile.toLowerCase().startsWith("sport.a")){Lokpubjs='Sport';Loknewjs='S';wea=true;}
  else if (Locationfile.toLowerCase().startsWith("bicycle.a")){Lokpubjs='Bicycle';Loknewjs='B';wea=true;}
  else if (Locationfile.toLowerCase().startsWith("gallery.a")){Lokpubjs='Gallery';Loknewjs='G';wea=true;}
  else if (Locationfile.toLowerCase().startsWith("ad_car.a")){Lokpubjs='Car';Loknewjs='C';}
	$( "#Loktopmsg" ).load( "/Web_Data/TopNewMsg_"+Lokpubjs+".js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('MsgLoad error:' + xhr.status + " " + xhr.statusText)}else{$("#Loktopmsg li:last-child").remove();}});
	////$( "#Loktopuser" ).load( "/Web_Data/TopUser_"+Lokpubjs+".js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('UserLoad error:' + xhr.status + " " + xhr.statusText)}});
	$( "#LokWebPublicize" ).load( "/Web_Data/Publicize/"+Lokpubjs+".js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('PublicLoad error:' + xhr.status + " " + xhr.statusText)}else{$("#LokWebPublicize li a img").PpscrollLoading();$('.flexslider').flexslider({animation: "slide",animationLoop: true});}});
	if(lbroercm){var script = document.createElement("script");script.src = "/SGL_Js/hls.min.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(script, s);}else{$('#Callload').removeClass('LokSpinner');$('#Callerror').text(loks_t+br_t);}
$( "#LokIShare" ).load( "/Web_Data/News/"+Loknewjs+"_IShare.js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('UserLoad error:' + xhr.status + " " + xhr.statusText)}});
$( "#LokIKnow" ).load( "/Web_Data/News/"+Loknewjs+"_IKnow.js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('UserLoad error:' + xhr.status + " " + xhr.statusText)}});
$( "#LokIComp" ).load( "/Web_Data/News/"+Loknewjs+"_IComp.js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('UserLoad error:' + xhr.status + " " + xhr.statusText)}});
$( "#LokIProduct" ).load( "/Web_Data/News/"+Loknewjs+"_IProduct.js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('UserLoad error:' + xhr.status + " " + xhr.statusText)}});
});
$(document).ready(function(){if ($("#LokDivTwo").length>0){fo= $("#LokDivTwo");fjl = fo.position().top-40;}if ($("#LokDiv").length>0){fo= $("#LokDiv");fsa = fo.position().top-40;}
 	$('.flexslider').flexslider({animation: "slide",animationLoop: true});
 $('#LokSortAlbum  .Font100').live('click', function () {var ld=$(this).attr('Lokdata');LokWaitingPanel('LokDiv');
            $('#LokSortAlbum').each(function () { $(this).children().removeClass('SelectedFont'); });
           $("#LamSortFrame")[0].contentWindow.LokSortChange(Msort,ld);
	    $(this).attr('class', 'Font100 SelectedFont');$('#LokSortAlbum a').attr('href', '/Photo/Photo.aspx?M='+Msort+'&B='+ld);$("html,body").animate({ scrollTop: fsa }, 100);
	});
	var  getlabel=Msort;if(getlabel==6){getlabel=146};
	$('#LokSortLabel').html(LokgetlabelSort('Yanlok' + getlabel));
	
	$('#LokSortLabel  li').live('click',function(){$('#LokSortLabel').each(function(){$(this).children().removeClass('selected');});$(this).attr('class','selected');CallSortLabel($(this).attr('LlID'));LokWaitingPanel('LokDivTwo');CallRefreshButton();});
	$('#LokSortNews div').live('click',function(){$('#LokSortNews').each(function(){$(this).children().removeClass('SelectedFont');});CallSortLabel('Lok');LokWaitingPanel('LokDivTwo');
	CallSortIdc($(this).attr('Lokdata'));$('#LokSortLabel').html(LokgetlabelSort('Yanlok' + $(this).attr('Lokdata')));CallRefreshButton();
	$(this).attr('class','Font100 SelectedFont');$("html,body").animate({ scrollTop: fjl }, 100);console.log('Msort::' + Msort + '__Lokdata:' + fjl);
	});
	$('.iOSPage_list a').live('click', function () {LokWaitingPanel('LokDivTwo');});
//	if(wea){
//	var hlje=GetCookie(bc);
//	if (hlje!=null){
//		var ul=todWu(hlje);
//		lokimgReady(ul+"?Lok=Who" + Math.random(), function () {
//	},function () {
//		console.log('FCookie[' + hlje + ']'+LokFfmatSss(new Date()));
//		todWea(hlje);
//	},function () {
//		console.log('NullOrTimerOut:'+LokFfmatSss(new Date()) + '|||' + this.error);
//		Lokmarkajax();
//	});
//	}else{Lokmarkajax();}
//	}
});
function LokCallwaiting(){LokWaitingPanel('LokDiv');}
