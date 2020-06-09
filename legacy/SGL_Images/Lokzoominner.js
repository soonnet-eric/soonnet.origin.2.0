var IMGDIR = '.';
var zoomstatus = 1;
var BROWSER = {};
var USERAGENT = navigator.userAgent.toLowerCase();
var Wo,Ho;
browserVersion({
    'ie': 'msie',
    'firefox': '',
    'chrome': '',
    'opera': '',
    'safari': '',
    'mozilla': '',
    'webkit': '',
    'maxthon': '',
    'qq': 'qqbrowser'
});
if (BROWSER.safari) {
    //BROWSER.firefox = true;
}
BROWSER.opera = BROWSER.opera ? opera.version() : 0;
HTMLNODE = document.getElementsByTagName('head')[0].parentNode;
if (BROWSER.ie) {
    BROWSER.iemode = parseInt(typeof document.documentMode != 'undefined' ? document.documentMode: BROWSER.ie);
    HTMLNODE.className = 'ie_all ie' + BROWSER.iemode;
}
function browserVersion(types) {
    var other = 1;
    for (i in types) {
        var v = types[i] ? types[i] : i;
        if (USERAGENT.indexOf(v) != -1) {
            var re = new RegExp(v + '(\\/|\\s)([\\d\\.]+)', 'ig');
            var matches = re.exec(USERAGENT);
            var ver = matches != null ? matches[2] : 0;
            other = ver !== 0 && v != 'mozilla' ? 0 : other;
        } else {
            var ver = 0;
        }
        eval('BROWSER.' + i + '= ver');
    }
    BROWSER.other = other;
}
function getEvent() {
    if (document.all) return window.event;
    func = getEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}

var JSMENU = [];
JSMENU['active'] = [];
JSMENU['timer'] = [];
JSMENU['drag'] = [];
JSMENU['layer'] = 0;
JSMENU['zIndex'] = {
    'win': 200,
    'menu': 300,
    'dialog': 400,
    'prompt': 500
};
JSMENU['float'] = '';
var EXTRAFUNC = [];
//function $(id) {
//    return ! id ? null: document.getElementById(id);
//}
function isUndefined(variable) {
    return typeof variable == 'undefined' ? true: false;
}
function _attachEvent(obj, evt, func, eventobj) {
    eventobj = !eventobj ? obj: eventobj;
    if (obj.addEventListener) {
        obj.addEventListener(evt, func, false);
    } else if (eventobj.attachEvent) {
        obj.attachEvent('on' + evt, func);
    }
}
function _detachEvent(obj, evt, func, eventobj) {
    eventobj = !eventobj ? obj: eventobj;
    if (obj.removeEventListener) {
        obj.removeEventListener(evt, func, false);
    } else if (eventobj.detachEvent) {
        obj.detachEvent('on' + evt, func);
    }
}

function zoom(obj, dlda, zimg, nocover, pn, showexif ,ptic ,picic ,pgcic) {
	zimg = !zimg ? obj.src : zimg;
	showexif = !parseInt(showexif) ? 0 : showexif;
	if(!zoomstatus) {
		window.open(zimg, '', '');
		return;
	}
	if(!obj.id) obj.id = 'img_' + Math.random();
	var faid = !obj.getAttribute('aid') ? 0 : obj.getAttribute('aid');
	var menuid = 'imgzoom';
	var menu = document.getElementById(menuid);
	var zoomid = menuid + '_zoom';
	var imgtitle = !nocover && obj.title ? '<div class="imgzoom_title">' + obj.title + '</div>' +
		(showexif ? '<div id="' + zoomid + '_exif" class="imgzoom_exif" onmouseover="this.className=\'imgzoom_exif imgzoom_exif_hover\'" onmouseout="this.className=\'imgzoom_exif\'"></div>' : '')
		: '';
	var cover = !nocover ? 1 : 0;
	var pn = !pn ? 0 : 1;
	var maxh = (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight) - 70;
	var loadCheck = function (obj) {
		if(obj.complete) {
			var imgw = loading.width;
			var imgh = loading.height;
			var r = imgw / imgh;
			var w = document.body.clientWidth * 0.95;
			w = imgw > w ? w : imgw;
			var h = w / r;
//			if(w < 100 & h < 100) {
//				document.getElementById(menuid + '_waiting').style.display = 'none';
//				hideMenu();
//				return;
//			}
			if(h > maxh) {
				h = maxh;
				w = h * r;
			}
			if(document.getElementById(menuid)) {
				document.getElementById(menuid).removeAttribute('top_');document.getElementById(menuid).removeAttribute('left_');
				clearTimeout(document.getElementById(menuid).getAttribute('timer'));
			}
			//$.get("/Web_Data/Lok_ARequest.aspx?w=Iskei&P=" + ptic + "&C=" + picic + "&G=" + pgcic + "&Lok=Who", function (data, status) {});
			showimage(zimg, w, h, imgw, imgh);
//			if(showexif && faid) {
//				var x = new Ajax();
//				x.get('', function(s, x) {
//					if(s) {
//						$(zoomid + '_exif').style.display = '';
//						$(zoomid + '_exif').innerHTML = s;
//					} else {
//						$(zoomid + '_exif').style.display = 'none';
//					}
//				});
//			}
		} else {
			setTimeout(function () { loadCheck(loading); }, 100);
		}
	};
	var showloading = function (zimg, pn) {
		if(!pn) {
			if(!document.getElementById(menuid + '_waiting')) {
				waiting = document.createElement('img');
				waiting.id = menuid + '_waiting';
				waiting.src = 'P_Images/imageloading.gif';
				waiting.style.opacity = '0.8';
				waiting.style.filter = 'alpha(opacity=80)';
				waiting.style.position = 'absolute';	
				waiting.style.zIndex = '1000';
				document.getElementById('append_parent').appendChild(waiting);
			}
		}
		document.getElementById(menuid + '_waiting').style.display = '';
		document.getElementById(menuid + '_waiting').style.left = (document.body.clientWidth - 42) / 2 + 'px';
		document.getElementById(menuid + '_waiting').style.top = ((document.documentElement.clientHeight - 42) / 2 + Math.max(document.documentElement.scrollTop, document.body.scrollTop)) + 'px';
		loading = new Image();
		setTimeout(function () { loadCheck(loading); }, 100);
		if(!pn) {
			document.getElementById(menuid + '_zoomlayer').style.display = 'none';
		}
		loading.src = zimg;
	};
	var adjustpn = function(h) {
		h = h < 90 ? 90 : h;
		if(document.getElementById('zimg_prev')) {
			document.getElementById('zimg_prev').style.height= parseInt(h) + 'px';
		}
		if(document.getElementById('zimg_next')) {
			document.getElementById('zimg_next').style.height= parseInt(h) + 'px';
		}
	};
	var showimage = function (zimg, w, h, imgw, imgh) {
		document.getElementById(menuid + '_waiting').style.display = 'none';
		document.getElementById(menuid + '_zoomlayer').style.display = '';
		document.getElementById(menuid + '_img').style.width = 'auto';
		document.getElementById(menuid + '_img').style.height = 'auto';
		document.getElementById(menuid).style.width = (w < 300 ? 320 : w + 20) + 'px';
		mheight = h + 63;
		menu.style.height = mheight + 'px';
		document.getElementById(menuid + '_zoomlayer').style.height = (mheight < 120 ? 120 : mheight) + 'px';
		document.getElementById(menuid + '_img').innerHTML = '<img id="' + zoomid + '" src="' + zimg + '" width="' + w + '" height="' + h + '" w="' + imgw + '" h="' + imgh + '" />' + imgtitle;
		if(document.getElementById(menuid + '_imglink')) {
			document.getElementById(menuid + '_imglink').href = zimg;
		}
		setMenuPosition('', menuid, '00');
		adjustpn(h);
	};
	var adjustTimer = 0;
	var adjustTimerCount = 0;
	var wheelDelta = 0;
	var clientX = 0;
	var clientY = 0;
	var adjust = function(e, a) {
		if(BROWSER.ie && BROWSER.ie<7) {
		} else {
			if(adjustTimerCount) {
				adjustTimer = (function(){
					return setTimeout(function () {
						adjustTimerCount++;
						adjust(e);
					}, 20);
					})();
					if (document.getElementById(menuid) != null){
						document.getElementById(menuid).setAttribute('timer', adjustTimer);
					}
					
				if(adjustTimerCount > 17) {
					clearTimeout(adjustTimer);
					adjustTimerCount = 0;
					doane();
				}
			} else if(!a) {
				adjustTimerCount = 1;
				if(adjustTimer) {
					clearTimeout(adjustTimer);
					adjust(e, a);
				} else {
					adjust(e, a);
				}
				doane();
			}
		}
		var ele = document.getElementById(zoomid);
		if(!ele) {
			return;
		}
		var imgw = ele.getAttribute('w');
		var imgh = ele.getAttribute('h');

		if(!a) {
			e = e || window.event;
			try {
				if(e.altKey || e.shiftKey || e.ctrlKey) return;
			} catch (e) {
				e = {'wheelDelta':wheelDelta, 'clientX':clientX, 'clientY':clientY};
			}
			var step = 0;
			if(e.wheelDelta <= 0 || e.detail > 0) {
				if(ele.width - 1 <= 200 || ele.height - 1 <= 200) {
					clearTimeout(adjustTimer);
					adjustTimerCount = 0;
					doane(e);return;
				}
				step = parseInt(imgw/ele.width)-4;
			} else {
				if(ele.width + 1 >= imgw*40) {
					clearTimeout(adjustTimer);
					adjustTimerCount = 0;
					doane(e);return;
				}
				step = 4-parseInt(imgw/ele.width) || 2;
			}
			if(BROWSER.ie && BROWSER.ie<7) { step *= 5;}
			wheelDelta = e.wheelDelta;
			clientX = e.clientX;
			clientY = e.clientY;
			var ratio = 0;
			if(imgw > imgh) {
				ratio = step/ele.height;
				ele.height += step;
				ele.width = imgw*(ele.height/imgh);
			} else if(imgw < imgh) {
				ratio = step/ele.width;
				ele.width += step;
				ele.height = imgh*(ele.width/imgw);
			}
			if(BROWSER.ie && BROWSER.ie<7) {
				setMenuPosition('', menuid, '00');
			} else {
				var menutop = parseFloat(menu.getAttribute('top_') || menu.style.top);
				var menuleft = parseFloat(menu.getAttribute('left_') || menu.style.left);
				var imgY = clientY - menutop - 39;
				var imgX = clientX - menuleft - 10;
				var newTop = (menutop - imgY*ratio) + 'px';
				var newLeft = (menuleft - imgX*ratio) + 'px';
				menu.style.top = newTop;
				menu.style.left = newLeft;
				menu.setAttribute('top_', newTop);
				menu.setAttribute('left_', newLeft);
			}
		} else {
			ele.width = imgw;
			ele.height = imgh;
		}
		menu.style.width = (parseInt(ele.width < 200 ? 200 : parseInt(ele.width)) + 20) + 'px';
		var mheight = (parseInt(ele.height) + 50);
		menu.style.height = mheight + 'px';
		document.getElementById(menuid + '_zoomlayer').style.height = (mheight < 220 ? 220 : mheight) + 'px';
		
		
		adjustpn(ele.height);
		doane(e);
	};
	if(!menu && !pn) {
		menu = document.createElement('div');
		menu.id = menuid;
		if(cover) {
			//alert(dlda);
			//'+ unescape(dlda) + '
			menu.innerHTML = '<div class="zoominner" id="' + menuid + '_zoomlayer" style="display:none">' +
				'<h3 class="LokNone  titauto"><span class="y"><div class="DownLoad"></div>' +
				'<a id="' + menuid + '_imglink" class="imgadjust" target="_blank" title="在新窗口打開">在新窗口打開</a>' +
				'<a href="javascript:;" onclick="hideMenu()" class="imgclose" title="關閉">關閉</a>' +
				'</span>' +
				'<span class="zoomBtn">使用滑鼠滾動縮放圖片</span></h3>' + 
				'<div class="zimg_p" id="' + menuid + '_picpage"></div><div class="hm" id="' + menuid + '_img"><div class="LokClearfloat"></div></div>';
		} else {
			menu.innerHTML = '<div class="popupmenu_popup" id="' + menuid + '_zoomlayer" style="width:auto"><span class="right y"><a href="javascript:;" onclick="hideMenu()" class="flbc" style="width:20px;margin:0 0 2px 0">關閉</a></span>滾動滑鼠縮放圖片<div class="zimg_p" id="' + menuid + '_picpage"></div><div class="hm" id="' + menuid + '_img"></div></div>';
		}
		//*****[只針對FireFox 特殊處理，其餘照舊]
		if(BROWSER.firefox){
			menu.addEventListener('DOMMouseScroll', adjust, false);
			//alert('firefox:' + BROWSER.firefox + '_' + BROWSER.ie + '_' + BROWSER.chrome);
		} else {
			menu.onmousewheel = adjust;
			//alert('else:' + BROWSER.firefox + '_' + BROWSER.ie + '_' + BROWSER.chrome);
		}
		document.getElementById('append_parent').appendChild(menu);
		if(document.getElementById(menuid + '_adjust')) {
			document.getElementById(menuid + '_adjust').onclick = function(e) {adjust(e, 1)};
		}
	}
	showloading(zimg, pn);
	picpage = '';
	document.getElementById(menuid + '_picpage').innerHTML = '';
	if(typeof zoomgroup == 'object' && zoomgroup[obj.id] && typeof aimgcount == 'object' && aimgcount[zoomgroup[obj.id]]) {
		authorimgs = aimgcount[zoomgroup[obj.id]];
		var aid = obj.id.substr(5), authorlength = authorimgs.length, authorcurrent = '';
		
		if(authorlength > 1) {
			for(i = 0; i < authorlength;i++) {
				if(aid == authorimgs[i]) {
					authorcurrent = i;
				}
			}
			if(authorcurrent !== '') {
				paid = authorcurrent > 0 ? authorimgs[authorcurrent - 1] : authorimgs[authorlength - 1];
				picpage += ' <div id="zimg_prev" onmouseover="dragMenuDisabled=true;this.style.backgroundPosition=\'0 50px\'" onmouseout="dragMenuDisabled=false;this.style.backgroundPosition=\'0 -100px\';" onclick="_zoom_page(\'' + paid + '\', ' + (showexif ? 1 : 0) + ')" class="zimg_prev"><strong>上一张</strong></div> ';
				paid = authorcurrent < authorlength - 1 ? authorimgs[authorcurrent + 1] : authorimgs[0];
				picpage += ' <div id="zimg_next" onmouseover="dragMenuDisabled=true;this.style.backgroundPosition=\'100% 50px\'" onmouseout="dragMenuDisabled=false;this.style.backgroundPosition=\'100% -100px\';" onclick="_zoom_page(\'' + paid + '\', ' + (showexif ? 1 : 0) + ')" class="zimg_next"><strong>下一张</strong></div> ';
			}
			if(picpage) {
				document.getElementById(menuid + '_picpage').innerHTML = picpage;
			}
		}
	}
	showMenu({'ctrlid':obj.id,'menuid':menuid,'duration':3,'pos':'00','cover':cover,'drag':menuid,'maxh':''});
}

function showMenu(v) {
    var ctrlid = isUndefined(v['ctrlid']) ? v: v['ctrlid'];
    var showid = isUndefined(v['showid']) ? ctrlid: v['showid'];
    var menuid = isUndefined(v['menuid']) ? showid + '_menu': v['menuid'];
    var ctrlObj = document.getElementById(ctrlid);
    var menuObj = document.getElementById(menuid);
    if (!menuObj) return;
    var mtype = isUndefined(v['mtype']) ? 'menu': v['mtype'];
    var evt = isUndefined(v['evt']) ? 'mouseover': v['evt'];
    var pos = isUndefined(v['pos']) ? '43': v['pos'];
    var layer = isUndefined(v['layer']) ? 1 : v['layer'];
    var duration = isUndefined(v['duration']) ? 2 : v['duration'];
    var timeout = isUndefined(v['timeout']) ? 250 : v['timeout'];
    var maxh = isUndefined(v['maxh']) ? 600 : v['maxh'];
    var cache = isUndefined(v['cache']) ? 1 : v['cache'];
    var drag = isUndefined(v['drag']) ? '': v['drag'];
    var dragobj = drag && document.getElementById(drag) ? document.getElementById(drag) : menuObj;
    var fade = isUndefined(v['fade']) ? 0 : v['fade'];
    var cover = isUndefined(v['cover']) ? 0 : v['cover'];
    var zindex = isUndefined(v['zindex']) ? JSMENU['zIndex']['menu'] : v['zindex'];
    var ctrlclass = isUndefined(v['ctrlclass']) ? '': v['ctrlclass'];
    var winhandlekey = isUndefined(v['win']) ? '': v['win'];
    zindex = cover ? zindex + 500 : zindex;
    if (typeof JSMENU['active'][layer] == 'undefined') {
        JSMENU['active'][layer] = [];
    }
    for (i in EXTRAFUNC['showmenu']) {
        try {
            eval(EXTRAFUNC['showmenu'][i] + '()');
        } catch(e) {}
    }
    if (evt == 'click' && in_array(menuid, JSMENU['active'][layer]) && mtype != 'win') {
        hideMenu(menuid, mtype);
        return;
    }
    if (mtype == 'menu') {
        hideMenu(layer, mtype);
    }
    if (ctrlObj) {
        if (!ctrlObj.getAttribute('initialized')) {
            ctrlObj.setAttribute('initialized', true);
            ctrlObj.unselectable = true;
            ctrlObj.outfunc = typeof ctrlObj.onmouseout == 'function' ? ctrlObj.onmouseout: null;
            ctrlObj.onmouseout = function() {
                if (this.outfunc) this.outfunc();
                if (duration < 3 && !JSMENU['timer'][menuid]) {
                    JSMENU['timer'][menuid] = setTimeout(function() {
                        hideMenu(menuid, mtype);
                    },
                    timeout);
                }
            };
            ctrlObj.overfunc = typeof ctrlObj.onmouseover == 'function' ? ctrlObj.onmouseover: null;
            ctrlObj.onmouseover = function(e) {
                doane(e);
                if (this.overfunc) this.overfunc();
                if (evt == 'click') {
                    clearTimeout(JSMENU['timer'][menuid]);
                    JSMENU['timer'][menuid] = null;
                } else {
                    for (var i in JSMENU['timer']) {
                        if (JSMENU['timer'][i]) {
                            clearTimeout(JSMENU['timer'][i]);
                            JSMENU['timer'][i] = null;
                        }
                    }
                }
            };
        }
    }
    if (!menuObj.getAttribute('initialized')) {
        menuObj.setAttribute('initialized', true);
        menuObj.ctrlkey = ctrlid;
        menuObj.mtype = mtype;
        menuObj.layer = layer;
        menuObj.cover = cover;
        if (ctrlObj && ctrlObj.getAttribute('fwin')) {
            menuObj.scrolly = true;
        }
        menuObj.style.position = 'absolute';
        menuObj.style.zIndex = zindex + layer;
        menuObj.onclick = function(e) {
            return doane(e, 0, 1);
        };
        if (duration < 3) {
            if (duration > 1) {
                menuObj.onmouseover = function() {
                    clearTimeout(JSMENU['timer'][menuid]);
                    JSMENU['timer'][menuid] = null;
                };
            }
            if (duration != 1) {
                menuObj.onmouseout = function() {
                    JSMENU['timer'][menuid] = setTimeout(function() {
                        hideMenu(menuid, mtype);
                    },
                    timeout);
                };
            }
        }
        if (cover) {
            var coverObj = document.createElement('div');
            coverObj.id = menuid + '_cover';
            coverObj.style.position = 'fixed';				////<absolute>	***fixed背景層，解決height:100%問題
            coverObj.style.zIndex = menuObj.style.zIndex - 1;
            coverObj.style.left = coverObj.style.top = '0px';
            coverObj.style.width = '100%';
            coverObj.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
            coverObj.style.backgroundColor = '#000';
            coverObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=50)';
            coverObj.style.opacity = 0.5;
            coverObj.onclick = function() {
                hideMenu();
            };
            document.getElementById('append_parent').appendChild(coverObj);
            _attachEvent(window, 'load',
            function() {
                coverObj.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
            },
            document);
        }
    }
    if (drag) {
        dragobj.style.cursor = 'move';
        dragobj.onmousedown = function(event) {
            try {
                dragMenu(menuObj, event, 1);
            } catch(e) {}
        };
    }
    if (cover) document.getElementById(menuid + '_cover').style.display = '';
    if (fade) {
        var O = 0;
        var fadeIn = function(O) {
            if (O > 100) {
                clearTimeout(fadeInTimer);
                return;
            }
            menuObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + O + ')';
            menuObj.style.opacity = O / 100;
            O += 20;
            var fadeInTimer = setTimeout(function() {
                fadeIn(O);
            },
            40);
        };
        fadeIn(O);
        menuObj.fade = true;
    } else {
        menuObj.fade = false;
    }
    menuObj.style.display = '';
    if (ctrlObj && ctrlclass) {
        ctrlObj.className += ' ' + ctrlclass;
        menuObj.setAttribute('ctrlid', ctrlid);
        menuObj.setAttribute('ctrlclass', ctrlclass);
    }
    if (pos != '*') {
        setMenuPosition(showid, menuid, pos);
    }
    if (BROWSER.ie && BROWSER.ie < 7 && winhandlekey && document.getElementById('fwin_' + winhandlekey)) {
        document.getElementById(menuid).style.left = (parseInt(document.getElementById(menuid).style.left) - parseInt(document.getElementById('fwin_' + winhandlekey).style.left)) + 'px';
        document.getElementById(menuid).style.top = (parseInt(document.getElementById(menuid).style.top) - parseInt(document.getElementById('fwin_' + winhandlekey).style.top)) + 'px';
    }
    if (maxh && menuObj.scrollHeight > maxh) {
        menuObj.style.height = maxh + 'px';
        if (BROWSER.opera) {
            menuObj.style.overflow = 'auto';
        } else {
            menuObj.style.overflowY = 'auto';
        }
    }
    if (!duration) {
        setTimeout('hideMenu(\'' + menuid + '\', \'' + mtype + '\')', timeout);
    }
    if (!in_array(menuid, JSMENU['active'][layer])) JSMENU['active'][layer].push(menuid);
//    menuObj.cache = cache;
    if (layer > JSMENU['layer']) {
        JSMENU['layer'] = layer;
    }
    var hasshow = function(ele) {
        while (ele.parentNode && ((typeof(ele['currentStyle']) === 'undefined') ? window.getComputedStyle(ele, null) : ele['currentStyle'])['display'] !== 'none') {
            ele = ele.parentNode;
        }
        if (ele === document) {
            return true;
        } else {
            return false;
        }
    };
    if (!menuObj.getAttribute('disautofocus')) {
        try {
            var focused = false;
            var tags = ['input', 'select', 'textarea', 'button', 'a'];
            for (var i = 0; i < tags.length; i++) {
                var _all = menuObj.getElementsByTagName(tags[i]);
                if (_all.length) {
                    for (j = 0; j < _all.length; j++) {
                        if ((!_all[j]['type'] || _all[j]['type'] != 'hidden') && hasshow(_all[j])) {
                            _all[j].className += ' hidefocus';
                            _all[j].focus();
                            focused = true;
                            var cobj = _all[j];
                            _attachEvent(_all[j], 'blur',
                            function() {
                                cobj.className = trim(cobj.className.replace(' hidefocus', ''));
                            });
                            break;
                        }
                    }
                }
                if (focused) {
                    break;
                }
            }
        } catch(e) {}
    }
}
function hideMenu(attr, mtype) {
    attr = isUndefined(attr) ? '': attr;
    mtype = isUndefined(mtype) ? 'menu': mtype;
    if (attr == '') {
        for (var i = 1; i <= JSMENU['layer']; i++) {
            hideMenu(i, mtype);
        }
        return;
    } else if (typeof attr == 'number') {
        for (var j in JSMENU['active'][attr]) {
            hideMenu(JSMENU['active'][attr][j], mtype);
        }
        return;
    } else if (typeof attr == 'string') {
        var menuObj = document.getElementById(attr);
        if (!menuObj || (mtype && menuObj.mtype != mtype)) return;
        var ctrlObj = '',
        ctrlclass = '';
        if ((ctrlObj = document.getElementById(menuObj.getAttribute('ctrlid'))) && (ctrlclass = menuObj.getAttribute('ctrlclass'))) {
            var reg = new RegExp(' ' + ctrlclass);
            ctrlObj.className = ctrlObj.className.replace(reg, '');
        }
        clearTimeout(JSMENU['timer'][attr]);
        var hide = function() {
            if (menuObj.cache) {
                if (menuObj.style.visibility != 'hidden') {
                    menuObj.style.display = 'none';
                    if (menuObj.cover) document.getElementById(attr + '_cover').style.display = 'none';
					document.getElementById('imgzoom_waiting').style.display = 'none';
                }
            } else {
                menuObj.parentNode.removeChild(menuObj);
                if (menuObj.cover) document.getElementById(attr + '_cover').parentNode.removeChild(document.getElementById(attr + '_cover'));
            }
            var tmp = [];
            for (var k in JSMENU['active'][menuObj.layer]) {
                if (attr != JSMENU['active'][menuObj.layer][k]) tmp.push(JSMENU['active'][menuObj.layer][k]);
            }
            JSMENU['active'][menuObj.layer] = tmp;
        };
        if (menuObj.fade) {
            var O = 100;
            var fadeOut = function(O) {
                if (O == 0) {
                    clearTimeout(fadeOutTimer);
                    hide();
                    return;
                }
                menuObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + O + ')';
                menuObj.style.opacity = O / 100;
                O -= 20;
                var fadeOutTimer = setTimeout(function() {
                    fadeOut(O);
                },
                40);
            };
            fadeOut(O);
        } else {
            hide();
        }
    }
}
function setMenuPosition(showid, menuid, pos) {
    var showObj = document.getElementById(showid);
    var menuObj = menuid ? document.getElementById(menuid) : document.getElementById(showid + '_menu');
    if (isUndefined(pos) || !pos) pos = '43';
    var basePoint = parseInt(pos.substr(0, 1));
    var direction = parseInt(pos.substr(1, 1));
    var important = pos.indexOf('!') != -1 ? 1 : 0;
    var sxy = 0,
    sx = 0,
    sy = 0,
    sw = 0,
    sh = 0,
    ml = 0,
    mt = 0,
    mw = 0,
    mcw = 0,
    mh = 0,
    mch = 0,
    bpl = 0,
    bpt = 0;
    if (!menuObj || (basePoint > 0 && !showObj)) return;
    if (showObj) {
        sxy = fetchOffset(showObj);
        sx = sxy['left'];
        sy = sxy['top'];
        sw = showObj.offsetWidth;
        sh = showObj.offsetHeight;
    }
    mw = menuObj.offsetWidth;
    mcw = menuObj.clientWidth;
    mh = menuObj.offsetHeight;
    mch = menuObj.clientHeight;
    switch (basePoint) {
    case 1:
        bpl = sx;
        bpt = sy;
        break;
    case 2:
        bpl = sx + sw;
        bpt = sy;
        break;
    case 3:
        bpl = sx + sw;
        bpt = sy + sh;
        break;
    case 4:
        bpl = sx;
        bpt = sy + sh;
        break;
    }
    switch (direction) {
    case 0:
        menuObj.style.left = (document.body.clientWidth - menuObj.clientWidth) / 2 + 'px';
        mt = (document.documentElement.clientHeight - menuObj.clientHeight) / 2;
        break;
    case 1:
        ml = bpl - mw;
        mt = bpt - mh;
        break;
    case 2:
        ml = bpl;
        mt = bpt - mh;
        break;
    case 3:
        ml = bpl;
        mt = bpt;
        break;
    case 4:
        ml = bpl - mw;
        mt = bpt;
        break;
    }
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    if (!important) {
        if (in_array(direction, [1, 4]) && ml < 0) {
            ml = bpl;
            if (in_array(basePoint, [1, 4])) ml += sw;
        } else if (ml + mw > scrollLeft + document.body.clientWidth && sx >= mw) {
            ml = bpl - mw;
            if (in_array(basePoint, [2, 3])) {
                ml -= sw;
            } else if (basePoint == 4) {
                ml += sw;
            }
        }
        if (in_array(direction, [1, 2]) && mt < 0) {
            mt = bpt;
            if (in_array(basePoint, [1, 2])) mt += sh;
        } else if (mt + mh > scrollTop + document.documentElement.clientHeight && sy >= mh) {
            mt = bpt - mh;
            if (in_array(basePoint, [3, 4])) mt -= sh;
        }
    }
    if (pos.substr(0, 3) == '210') {
        ml += 69 - sw / 2;
        mt -= 5;
        if (showObj.tagName == 'TEXTAREA') {
            ml -= sw / 2;
            mt += sh / 2;
        }
    }
    if (direction == 0 || menuObj.scrolly) {
        if (BROWSER.ie && BROWSER.ie < 7) {
            if (direction == 0) mt += scrollTop;
        } else {
            if (menuObj.scrolly) mt -= scrollTop;
            menuObj.style.position = 'fixed';
        }
    }
    if (ml) menuObj.style.left = ml + 'px';
    if (mt) menuObj.style.top = mt + 'px';
    if (direction == 0 && BROWSER.ie && !document.documentElement.clientHeight) {
        menuObj.style.position = 'absolute';
        menuObj.style.top = (document.body.clientHeight - menuObj.clientHeight) / 2 + 'px';
    }
    if (menuObj.style.clip && !BROWSER.opera) {
        menuObj.style.clip = 'rect(auto, auto, auto, auto)';
    }
}
function fetchOffset(obj, mode) {
    var left_offset = 0,
    top_offset = 0,
    mode = !mode ? 0 : mode;
    if (obj.getBoundingClientRect && !mode) {
        var rect = obj.getBoundingClientRect();
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        if (document.documentElement.dir == 'rtl') {
            scrollLeft = scrollLeft + document.documentElement.clientWidth - document.documentElement.scrollWidth;
        }
        left_offset = rect.left + scrollLeft - document.documentElement.clientLeft;
        top_offset = rect.top + scrollTop - document.documentElement.clientTop;
    }
    if (left_offset <= 0 || top_offset <= 0) {
        left_offset = obj.offsetLeft;
        top_offset = obj.offsetTop;
        while ((obj = obj.offsetParent) != null) {
            position = getCurrentStyle(obj, 'position', 'position');
            if (position == 'relative') {
                continue;
            }
            left_offset += obj.offsetLeft;
            top_offset += obj.offsetTop;
        }
    }
    return {
        'left': left_offset,
        'top': top_offset
    };
}
function in_array(needle, haystack) {
    if (typeof needle == 'string' || typeof needle == 'number') {
        for (var i in haystack) {
            if (haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}
function doane(event, preventDefault, stopPropagation) {
    var preventDefault = isUndefined(preventDefault) ? 1 : preventDefault;
    var stopPropagation = isUndefined(stopPropagation) ? 1 : stopPropagation;
    e = event ? event: window.event;
    if (!e) {
        e = getEvent();
    }
    if (!e) {
        return null;
    }
    if (preventDefault) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
    if (stopPropagation) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
    return e;
}
var dragMenuDisabled = false;
function dragMenu(menuObj, e, op) {
    e = e ? e: window.event;
    if (op == 1) {
        if (dragMenuDisabled || in_array(e.target ? e.target.tagName: e.srcElement.tagName, ['TEXTAREA', 'INPUT', 'BUTTON', 'SELECT'])) {
            return;
        }
        JSMENU['drag'] = [e.clientX, e.clientY];
        JSMENU['drag'][2] = parseInt(menuObj.style.left);
        JSMENU['drag'][3] = parseInt(menuObj.style.top);
        document.onmousemove = function(e) {
            try {
                dragMenu(menuObj, e, 2);
            } catch(err) {}
        };
        document.onmouseup = function(e) {
            try {
                dragMenu(menuObj, e, 3);
            } catch(err) {}
        };
        doane(e);
    } else if (op == 2 && JSMENU['drag'][0]) {
        var menudragnow = [e.clientX, e.clientY];
        menuObj.style.left = (JSMENU['drag'][2] + menudragnow[0] - JSMENU['drag'][0]) + 'px';
        menuObj.style.top = (JSMENU['drag'][3] + menudragnow[1] - JSMENU['drag'][1]) + 'px';
        menuObj.removeAttribute('top_');
        menuObj.removeAttribute('left_');
        doane(e);
    } else if (op == 3) {
        JSMENU['drag'] = [];
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
(function ($) {
  $(document).bind("contextmenu",function(e) {return false;});  
  $(window).keydown(function(e){
	 var code;
	 if(!e) var e=window.event;
	 if(e.keyCode) {
	   code=e.keyCode;
	 }else if(e.which){
	   code = e.which;
	 }
	 if(code == 37){$('#LokPreviousClick').click();}else if(code == 39){$('#LokNextClick').click();}
  });
	   
    $.fn.scrollLoading = function (options) {
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
                     
data.obj = null;
imgReady(url + "?Lok=Who" + Math.random(), function () {
	if (this.complete == false){
		o.attr('class','LoadPanel_Ready').attr("src",'P_Images/Dot.png');
	}
	Wo=this.width; Ho=this.height;
	var Wwidth='auto';
	var Hheight='auto';
	var FitWidth,FitHeight;
	FitWidth=1024;
	FitHeight=600;
	 if(Wo/Ho>= FitWidth/FitHeight){
		 if(Wo>FitWidth){
			 Wwidth=FitWidth;
			 Hheight=(Ho * FitWidth)/Wo;
		 }else{
			 Wwidth=Wo;
			 Hheight=Ho;
		 }
	 } else{
		 if(Ho>FitHeight){
			 Hheight=FitHeight;
			 Wwidth=(Wo*FitHeight)/Ho;
		 }else{
			 Wwidth=Wo;
			 Hheight=Ho;
		 }
	 }
	 istop=0;
	istop=(FitHeight-Hheight) / 2;if(istop<0){istop=0;}
	if (this.complete == false){
		o.attr('class','LoadPanel_Ready');
		$('#Lokimg_Body').css('top',istop);
	}
	o.attr({ width: Wwidth, height: Hheight });
},function () {o.hide().attr("src",this.src).fadeIn().attr("onclick","window.top.zoom(this, this.src, 0, 0, 0)").removeAttr("zoomfile").removeAttr("class");$('#Lokimg_Body').css('top',istop);$('#IsPercentage').fadeOut();
},function () {o.attr('class','LoadPanel_Error').removeAttr("onclick");$('#IsPercentage').html('Photo Not found(404).!').fadeIn();
});
                     
                }
            });
            return false;
        };
        loading();
       $(window).bind("scroll", loading);
    };


    $.fn.playscrollLoading = function (options) {
console.log('length:' + Object.keys(Lokplaylist.LokJSon).length);
//console.log('Lokplaytag:' + Lokplaytag);
        var defaults = {
			piid: Lokplaylist.LokJSon[Lokplaytag].Piciid,
            attr: Lokplaylist.LokJSon[Lokplaytag].Fname,
			lhost: Lokplaylist.LokJSon[Lokplaytag].TWboo
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];LokNowplayIpc(params["piid"]);
        $(this).each(function () {var lls='';if (params["lhost"]=='1'){lls=Loktwserver;}else{if (!window.location.hostname.toLowerCase().startsWith("localhost")) { lls=Lokhkserver; }}
            var node = this.nodeName.toLowerCase(),  url =  lls+ '/Photo/Photo_Resources/' + Lokplayfolder + params["attr"] + "_PB.jpg";
            if (!url) { return; }
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };////console.log('url:' + url);
            params.cache.push(data);
        });

        var playloading = function () {
            var st = $(window).scrollTop(), sth = st + $(window).height();
			var istop=0;
            $.each(params.cache, function (i, data) {
                var o = data.obj, tag = data.tag, url = data.url;
                if (o) {
                    post = o.position().top; posb = post + o.height();
                     
data.obj = null;// + "?Lok=Who" + Math.random()
imgReady(url, function () {
	if (this.complete == false){
		o.attr('class','LoadPanel_Ready').attr("src",'P_Images/Dot.png');
	}
	Wo=this.width; Ho=this.height;
	var Wwidth='auto';
	var Hheight='auto';
	var FitWidth,FitHeight;
	FitWidth=$(window).width();
	FitHeight=$(window).height();
	 if(Wo/Ho>= FitWidth/FitHeight){
		 if(Wo>FitWidth){
			 Wwidth=FitWidth;
			 Hheight=(Ho * FitWidth)/Wo;
		 }else{
			 Wwidth=Wo;
			 Hheight=Ho;
		 }
	 } else{
		 if(Ho>FitHeight){
			 Hheight=FitHeight;
			 Wwidth=(Wo*FitHeight)/Ho;
		 }else{
			 Wwidth=Wo;
			 Hheight=Ho;
		 }
	 }
	 istop=0;
	istop=(FitHeight-Hheight) / 2;if(istop<0){istop=0;}
	if (this.complete == false){
		o.attr('class','LoadPanel_Ready');
		$('#Lokplayimg_Body').css('top',istop);
	}
	o.attr({ width: Wwidth, height: Hheight });
//	console.log('W.Height:' + $(window).width() + '__W.Width:' + $(window).height());
//	console.log('D.Height:' + $(document).width() + '__D.Width:' + $(document).height());
//	console.log('B.Height:' + $(document.body).width() + '__B.Width:' + $(document.body).height());
	
},function () {o.hide().attr("src",this.src).fadeIn().removeAttr("class");$('#Lokplayimg_Body').css('top',istop);$('#IsPercentage').fadeOut();
},function () {o.removeAttr("class").attr('src','/SGL_Images/404.png');
});
Lokplaytag++;if(Lokplaytag>(Object.keys(Lokplaylist.LokJSon).length-1)){Lokplaytag=0;console.log('----------------------');
	if (lokbasic<=Object.keys(Lokplaylist.LokJSon).length){LokplayTimer.toggle();LokGetdata();}
	
	}}
            });
            return false;
        };
        playloading();
       $(window).bind("scroll", playloading);
    };
})(jQuery);
function LokDrawImage(imgurl){
   var image=new Image();
   var FitWidth,FitHeight;
   FitWidth=1024;
   FitHeight=768;
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