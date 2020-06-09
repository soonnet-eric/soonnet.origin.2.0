var LokapiFiles = null, LokDragdiv = null, LokFullDiv = null, LokFullBox = null, LokCancel = false, LokUNdata, LokUNload = false, Loklikeme = false, Loktyp = null, Lokviewint = 50;
var isforint = 0, totalis = 0, iisupuiint = 10, LokSexMark, Lokuptimer, Lokcount = 0, Lokgudstr = null, Totalsize = 0, LErrorboo = false, LErrcount = 0, LokChangeevent = null, Lokapd, Lokapdftop = 0, Lokturboup = 0;
var PPCH = "把相片檔拖放到這裡<br>當相片數量或容量龐大時，請使用此f方式選擇文件.<br/><br/>或";
var ErrorCH = "檔案拖放功能無法使用，請按<F5>重新整理瀏覽器!", lokupwait = '計算中...';
var OpOk = "尋寶網 - 圖片上載", Ooutt = "本次上載仍在進行,離開會導致數據流失,確定離開?";
var GridOptions = { itemSelector: ".PListitem", minMargin: 10, maxMargin: 15, firstItemClass: "first-item" };
var Uio = 11, VTW = '/LokARX.cc', Lokhkserver = 'http://hkphoto.' + yanDOMAIN, Loktwserver = 'http://twphoto.' + yanDOMAIN, Loktwserver2 = 'https://img.' + yanDOMAIN;
var Lokashx = '/Photo/PhotoUploadSsIAReX.ashx?Lok=Sspost', ajaxash = Lokashx; LokArrayOBJ = new Array();
var lscopy = '[請手動複製] ', lscped = '已複製短網址.', Lokplayfolder, Lokplaytag = 0, Lokplaylist, lokbasic = 30, mvtg = null, mvpa = null, accsshost = 0, accsswhere = null;

(function ($) {
    if (HomeLanguage == 'TW') { ajaxash = Lokashx; }
    $.fn.LokScrollLoading = function (options) {
        var defaults = {
            lhost: 'data-hots',
            attr: "data-src",
            bak: "data-bak",
            yanl: '.jpg',
            ylokrem: false,
            container: $(window),
            callback: $.noop
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function () {
            var lls = ''; console.log($(this).attr(params["bak"])); if ($(this).attr(params["lhost"]) == '1') { lls = Loktwserver; } else { if (!window.location.hostname.toLowerCase().startsWith("localhost")) { lls = Lokhkserver; } }
            //if ($(this).attr(params["bak"]) == "86" && params["attr"].lastIndexOf(".") > 0) { lls = Loktwserver2; }
            var node = this.nodeName.toLowerCase(), url = lls + '/Photo/Photo_Resources/' + $(this).attr(params["attr"]) + params["yanl"];
            console.log("ulr" + url);
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };
            params.cache.push(data);
        });
        var callback = function (call) {
            if ($.isFunction(params.callback)) {
                params.callback.call(call.get(0));
            }
        };
        var loading = function () {
            var contHeight = params.container.height();
            if ($(window).get(0) === window) {
                contop = $(window).scrollTop();
            } else {
                contop = params.container.offset().top;
            }
            $.each(params.cache, function (i, data) {
                var o = data.obj, tag = data.tag, url = data.url, post, posb;
                if (o) {
                    post = o.offset().top - contop, post + o.height();
                    if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                        $("<img />").load(function () {
                            o.hide().attr("src", url).fadeIn().removeAttr("class").removeAttr("id"); if (params["ylokrem"] == false) { o.removeAttr("data-src"); }
                        }).attr("src", url); o.attr('class', 'LoadPanel_Begin'); data.obj = null;
                    }
                }
            });
        }; loading();
        params.container.bind("scroll", loading);
    }; console.log('HomeLanguage:' + HomeLanguage + '__[]');
    $.fn.LokUnScrollLoad = function (options) {
        var defaults = {
            attr: "data-src",
            yanl: '.jpg',
            ylokrem: false,
            container: $(window),
            callback: $.noop
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function () {
            var lls = ''; if ($(this).attr(params["lhost"]) == 'True') { lls = Loktwserver; } else { lls = Lokhkserver; }
            ////var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
            var node = this.nodeName.toLowerCase(), url = lls + '/Photo/Photo_Resources/' + $(this).attr(params["attr"]) + params["yanl"];
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };
            ////if ($(this).attr("class") === undefined || $(this).attr("class") === null) {return;}
            params.cache.push(data);
        });
        var callback = function (call) {
            if ($.isFunction(params.callback)) {
                params.callback.call(call.get(0));
            }
        };
        var unload = function () {
            var contHeight = params.container.height();
            if ($(window).get(0) === window) {
                contop = $(window).scrollTop();
            } else {
                contop = params.container.offset().top;
            }
            $.each(params.cache, function (i, data) {
                var o = data.obj, tag = data.tag, url = data.url, post, posb;
                if (o) {
                    post = o.offset().top - contop, post + o.height();
                    if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                        $("<img />").load(function () {
                            o.hide().attr("src", url).fadeIn().removeAttr("class").removeAttr("data-src").removeAttr("style").removeAttr("id");
                        }).attr("src", url); o.attr('class', 'LoadPanel_Begin'); data.obj = null;
                    }
                }
            });
        }; unload();
        params.container.bind("scroll", unload);
    };
    $('#LokErrorTips').live('click', function () { ByeOverlay(); $(this).fadeOut(); $('#ConfirmButton').attr("disabled", false); $('EdittButton').attr("disabled", false); });
    $('#LokMessageBox  button').live('click', function () {
        var cc = $('#LokMessageBox  textarea').val(); if (cc.replace(/(^s*)|(s*$)/g, "").length == 0) { alert('請輸入留言內容.'); return; }
        sMsgg(cc, true, 0, 0, 0, 0); $('#LokMessageBox  textarea').val('');
    });
    $('#LokReplyBox  button').live('click', function () {
        var dd = $('#LokReplyBox  textarea').val(); if (dd.replace(/(^s*)|(s*$)/g, "").length == 0) { alert('請輸入留言內容.'); return; }
        var U = $('#LokReplyBox').attr("LokUic");
        var M = $('#LokReplyBox').attr("LokMsic");
        var T = $('#LokReplyBox').attr("LokType");
        var B = $('#LokReplyBox').attr("LokBelong");
        sMsgg(dd, false, M, B, T, U); $('#LokReplyBox  textarea').val('');
    });
    $('#CleckReply').live('click', function () {
        if (!MLBoo) { return; }
        var U = $(this).attr("LokUic");
        var M = $(this).attr("LokMsic");
        var T = $(this).attr("LokType");
        var B = $(this).attr("LokBelong");
        var OoO = 'LokReplyBox';
        var PPoo = $(this).parent().children("#" + OoO); if (PPoo.length > 0) { return; } if (!LokCKini(T)) { T = 0; }
        $('#' + OoO).fadeOut(100, function () { $(this).remove(); })
        var Myitem = $('<div id="' + OoO + '"  LokType="' + T + '"  LokBelong="' + B + '"  LokUic="' + U + '"  LokMsic="' + M + '">' + $('#LokMessageBox').html() + '</div>').hide().fadeIn(600);
        $(this).parent().append(Myitem);
    });
})(jQuery);
$(document).ready(function () {
    $('#LokNavigationBar').removeClass('NavigationBarCss').addClass('NavigationBarCssRelative'); $('#HrBar').css({ display: 'none' });
    ////$('#iOSPageBar .circlebtn').live('click',function(){$('#LokOverlay').fadeIn();});
    $("#LokShortBox").live('focus', function () { $(this).select(); }); $("#LokShortBox").live('mouseup', function () { $(this).select(); });
});
function LokSpFloat(LStartimer) {
    try {
        var OffTicks = ((new Date()).getTime()) - LokStarticks;
        var UseTicks = parseFloat(OffTicks / 1000);
        console.log('LokTicks:' + LokTicks + '__UseTicks:' + UseTicks);
        LokTicks += UseTicks;
        Lokspeed = parseFloat(Loklength / LokTicks);
    } catch (err) { }
}
function LokImgLoadNow() {
    $("#LokImgLoad img").LokScrollLoading({
        lhost: 'data-hots',
        attr: "data-src",
        yanl: "_S.jpg",
        ylokrem: 'false',
        container: $(window),
        callback: function () { }
    });
    $('#Selectfile_Layer').css({ display: 'none' });
    $('#UploadBody_Layer').css({ display: 'block' });
    Mediabox.scanPage = function () {
        var links = $$("a").filter(function (el) {
            return el.rel && el.rel.test(/^lightbox/i);
        });
        $$(links).mediabox({/* Put custom options here */ }, null, function (el) {
            var rel0 = this.rel.replace(/[[]|]/gi, " ");
            var relsize = rel0.split(" ");
            return (this == el) || ((this.rel.length > 8) && el.rel.match(relsize[1]));
        });
    };
    window.addEvent("domready", Mediabox.scanPage);
};
function Rrload() {
    $(".PListitem #LokImgLoad").LokScrollLoading({
        lhost: 'data-hots',
        attr: "data-src",
        yanl: "_P.jpg",
        ylokrem: false,
        container: $(window),
        callback: function () { }
    }); RrowG();
}
function RrowG() {
    $("#Album_PhotoData").rowGrid(GridOptions); console.log('RrowG'); ByeOverlaySout(1500);
}
function LokReLoadAlbumPoster() {
    $("#LokAutoimg img").LokScrollLoading({
        lhost: 'data-hots',
        attr: "data-src",
        yanl: '/AlbumPoster.jpg',
        ylokrem: false,
        container: $(window),
        callback: function () { ; }
    }); LokAutoWidth(); ByeOverlay();
}
function LokAutoWidth() { Wx = $('#BodyListOne').width(); var lk = (Math.floor(Wx / LokMaxColumn) - Uio); $('#LokAutoimg  img').css("width", lk).css("height", lk); setTimeout(function () { ByeOverlay(); }, 1000); }
function LokhandleEnter(e) {
    $('#LokOverlay').css({ display: 'block' }); CleanupUI();
    LokFullDiv.className = 'LokDragbackground';
    LokDragdiv.textContent = "請在任意位置鬆開鼠標，即完成檔案選擇.!";
    e.stopPropagation();
    e.preventDefault();
}
function LokhandleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}
function LokhandleDragleave(e) {
    e.stopPropagation();
    e.preventDefault();
    RecoverFileBoxUI();
}
function LoktksFloat() {
    LokSpFloat('null');
    var Trueticks = parseFloat(Totalsize / Lokspeed), vtg = new Date(LokStartimer.getTime() + (Trueticks * 1000));
    Lokguess = LokFfmatSss(vtg); Lokgudstr = LokFfmatMm(vtg);
}
function MMMsg(Muu, Mname, Mcontent, Mgid, Ulg) {
    var Fy = "<div id=\"Messageinfo\"><div id=\"Messageinfo_item\">  " +
        "<div class=\"Info_Logo\"><img src=\"" + Ulg + "\" width=\"48\"></div>" +
        "<div class=\"Info_item\">" +
        "<div class=\"Info_Name\">" + Mname + "&nbsp;&nbsp;&nbsp;&nbsp;" + LokFfmat(new Date()) + "</div>" +
        "<div class=\"Info_Content\">" + Mcontent + "</div>" +
        "<div id=\"Messageinfo_IsReply\"><a id=\"CleckReply\"  LokUic=" + Muu + "  LokMsic=" + Mgid + "  href=\"javascript:void(0)\">>&nbsp;回覆</a>" +
        "</div></div></div></div>";
    return Fy;
}
function Gogoo(Pp) { window.location.assign('http://' + window.location.host + Pp); window.location.href = 'http://' + window.location.host + Pp; }
function Googooo(Pp) {
    console.log('Pp:' + Pp);
    window.location.assign(Pp); window.location.href = Pp;
}
function RRMsg(Muu, Mname, Mcontent, Ulg) {
    var Mg = "<div class=\"Info_ReplyinfoDiv\"><div id=\"Messageinfo_item\"> " +
        "<div class=\"Info_Logo\"><img src=\"" + Ulg + "\" width=\"48\"></div>" +
        "<div class=\"Info_item\">" +
        "<div class=\"Info_Name\">" + Mname + "&nbsp;&nbsp;&nbsp;&nbsp;" + LokFfmat(new Date()) + "</div>" +
        "<div class=\"Info_Content\">" + Mcontent + "</div>" +
        "</div></div></div>";
    return Mg;
}
function LokUptitle(Lok) { $(document).attr("title", Lok); }
function AAeee(F) { $("#LokUnlimited").fadeOut(); LokAutoWidth(); setTimeout(function () { LokAutoWidth(); LokUNload = false; console.log('LokUNload:' + LokUNload); }, 500); }
function lokFlymark(AiC, OoL) { }
