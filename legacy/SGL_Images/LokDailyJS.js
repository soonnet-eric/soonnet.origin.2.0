var  Loktopmsg,fjl,fsa,fo,Msort,Downscroll=0,LokUNdata, LokUNload=false, Lokviewint=10,scrTtl=0;
$(function () {var Locationfile,Windowlocation=window.location.href;Locationfile=Windowlocation.substr(Windowlocation.lastIndexOf('/')+1);  
  if (Locationfile.toLowerCase().startsWith("daily.a")){Lokpubjs='Daily';Loknewjs='D';}
  else if (Locationfile.toLowerCase().startsWith("finance.a")){Lokpubjs='Finance';Loknewjs='F';}
  else if (Locationfile.toLowerCase().startsWith("sports.a")){Lokpubjs='Sports';Loknewjs='S';}
  	$( "#Loktopmsg" ).load( "/Web_Data/TopNewMsg_"+Lokpubjs+".js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('MsgLoad error:' + xhr.status + " " + xhr.statusText)}else{$( "#Loktopmsg" ).text('').html(decodeURIComponent(response))}});
	$( "#LokDailyBanner" ).load( "/Web_Data/Daily/"+Lokpubjs+"_Msg.js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('PublicLoad error:' + xhr.status + " " + xhr.statusText)}else{$("#LokDailyBanner li a img").PpscrollLoading();$('.flexslider').flexslider({animation: "slide",animationLoop: true});}});
	$( "#Loktopdaily" ).load( "/Web_Data/Daily/"+Lokpubjs+".js?Lok=Y" + Math.random(), function( response, status, xhr ) {if ( status == "error" ) {$(this).text('MsgLoad error:' + xhr.status + " " + xhr.statusText)}else{$( "#Loktopdaily" ).text('').html(decodeURIComponent(response))}});

window.onscroll=function(){
var NavfoR = $("#LokBodyRight_Fly");
var NavfjlR = NavfoR.height();
	var Navfo = $("#LokUnlimited");
	var Navfjl = $(document).height() - $(window).height()-200;
	var NavFlm = $(window).scrollTop();
	var NavfoF = $("#LokCutoff_Fly");
	var NavfjlF = NavfoF.position().top;
		 if($(".Lok_DailyBody").height()>900){
		 if ((NavFlm+$(window).height()) > NavfjlF){if(NavFlm<70){NavfoR.removeClass('LokRightFlyFloat');}else{NavfoR.addClass('LokRightFlyFloat');}}if(NavfjlR > (NavFlm+ $(window).height())){NavfoR.removeClass('LokRightFlyFloat');}}
		 if (NavFlm > Downscroll){Downscroll=NavFlm;}else{return;}
		 if (NavFlm > Navfjl){if(LokUNload){return;}Fppp();}
	};	
});
function Pppp(){$("#LokUnlimited").fadeOut();LokUNload=false;}
function Ooooo(){try{$("#Lok_Data").append(decodeURIComponent(LokUNdata));}catch(err){$("#Lok_Data").append(LokUNdata);}}
$(document).ready(function (){
	$(document).on('click', '#Lok_DailyHeader li', function() {if ($(this).attr('Lokdata')==null){return;}
		$('#Lok_DailyHeader ul').each(function(){$(this).children().find('span').removeClass('SelectedFont100');});$(this).find('span').attr('class','SelectedFont100');
		 $("#Lok_Data").html('');LokUNload=false;Ttl=0,Downscroll=0;LokWaitingPanel('LokDailyDiv');$("#LokBodyRight_Fly").removeClass('LokRightFlyFloat');cccl($(this).attr('Lokdata'));
	});
	if(getUrlParam("COlympic")!=null){console.log('getUrlParam:'  + getUrlParam("COlympic"));
	$('#COlympic').trigger('click');
	}
});

