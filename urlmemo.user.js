//
// log-url.user.js
// 2010.2.27
// Copyright (c) 2010, Toshiyuki Masui
// Released under the GPL license
// http://pitecan.com
//
// ....................................................................
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "UrlMemo", and click Uninstall.
//
// ....................................................................
//
// ==UserScript==
// @name UrlMemo
// @namespace http://pitecan.com/urlmemo.user.js
// @description Send the URL and TITLE of the Web page for logging
// @exclude http://pornotube.com/*
// @exclude http://*.etology.com/*
// @exclude http://*.adultfriendfinder.com/*
// @exclude http://*.enoratraffic.com/*
// @exclude http://*.deqwas.net/*
// @exclude http://*.pubmatic.com/*
// @exclude http://*.doubleclick.net/*
// @exclude http://203.86.249.80/*
// @exclude http://wms.assoc-amazon.jp/*
// @exclude http://rcm-jp.amazon.co.jp/*
// @exclude https://images-na.ssl-images-amazon.com/*
// @exclude http://z-ecx.images-amazon.com/images/*
// @exclude http://*images-amazon.com/*
// @exclude https://*images-amazon.com/*
// @exclude http://ad.rbbtoday.com/*
// @exclude http://ad.adlantis.jp/*
// @exclude http://as.bp.impact-ad.jp/*
// @exclude http://feemo.rssad.jp/*
// @exclude http://*.ads.mixi.jp/*
// @exclude http://*.impact-ad.jp/*
// @exclude http://www.yomiuri.co.jp/i1/*
// @exclude http://view.atdmt.com/*
// @exclude http://ad.pitta.ne.jp/*
// @exclude http://dg.specificclick.net/*
// @exclude http://affiliate.dtiserv.com/*
// @exclude http://ld.send.microad.jp/*
// @exclude http://*.ias.rakuten.co.jp/*
// @exclude http://*.send.microad.jp/*
// @exclude http://bizad.nikkeibp.co.jp/*
// @exclude http://notice.kakaku.com/*
// @exclude http://wifemovie.blog96.fc2.com/*
// @exclude http://video.fc2.com/*
// @exclude http://blog-imgs-11.fc2.com/*
// @exclude http://api.poppin.cc/*
// @exclude http://platform.twitter.com/widgets/*
// @exclude https://platform.twitter.com/widgets/*
// @exclude https://apis.google.com/*
// @exclude http://p4-e2ihobmsvlrpc-4v7bmdswasqgtxwx-if-v6exp3-v4.metric.gstatic.com/*
// @exclude http://static.ak.facebook.com/*
// @exclude http://cdn.api.b.hatena.ne.jp/*
// @exclude http://plugins.mixi.jp/*
// @exclude http://urlmemo.memo.masui.org/*
// @exclude http://gigazine.asia/a/*
// @exclude http://sync.fout.jp/sync*
// @exclude http://jp-u.openx.net/w/*
// @exclude http://spnet2-1.i-mobile.co.jp/*
// @exclude http://s7.addthis.com/*
// @exclude https://widgets.getpocket.com/*
// @exclude https://www.facebook.com/ai.php*
// @exclude http://www.facebook.com/l.php*
// @exclude https://www.facebook.com/plugins/like*
// @exclude https://www.facebook.com/plugins/recommendations*
// @exclude https://www.facebook.com/connect/ping*
// @exclude https://s-static.ak.facebook.com/connect/*
// @exclude http://www.google.com/url*
// @exclude https://accounts.google.com/*
// @exclude http://cmap.uac.ace.advertising.com*
// @exclude http://o.advg.jp/*
// @exclude http://tabelog.com/overture_ad_new*
// @exclude http://ad.fout.jp/*
// @exclude http://pagead2.googlesyndication.com/*
// @exclude http://xid.i-mobile.co.jp/*
// @exclude http://sexy-ch.com/*
// @exclude http://api.popin.cc/*
// @exclude http://t.co/*
// @exclude http://*.metric.gstatic.com/*
// @exclude https://aax-fe.amazon-adsystem.com/*
// @exclude http://www.amazon.co.jp/aan/*
// @exclude http://js.fout.jp/*
// @exclude http://adm.shinobi.jp/*
// @exclude http://www-open-opensocial.googleusercontent.com/*
// @exclude http://www.buzzfeed.com/*
// @exclude http://labaq.com/user/themes*
// @exclude http://a248.e.akamai.net*
// @exclude http://www.blogger.com/navbar*
// @exclude http://rcm-fe.amazon-adsystem.com/*
// @exclude http://www.blogger.com/comment-iframe*
// @exclude http://i.yimg.jp/lib/news/widgets/*
// @exclude http://ds.advg.jp/*
// @exclude http://dis.jp.as.criteo.com/*
// @exclude http://ad.watch.impress.co.jp/*
// @exclude http://leadback.advertising.com/*
// @exclude http://k-tai.impress.co.jp/ad/*
// @exclude http://ananke.cdnplanet.com/*
// @exclude http://rc.rlcdn.com/*
// @exclude http://i.yimg.jp/*
// @exclude http://www.linkedin.com/csp/*
// @exclude http://ads1.solocpm.com/*
// @exclude http://cdn.turn.com/*
// @exclude http://an.tacoda.net/*
// @exclude http://www.google.co.jp/ads*
// @exclude http://adclr.jp/*
//
// http://googleads.g.doubleclick.net/*
// https://googleads.g.doubleclick.net/*
// http://cm.g.doubleclick.net/*
// http://ad.doubleclick.net/*
// http://aktrack.pubmatic.com/*
// http://image2.pubmatic.com/*
// http://ads.pubmatic.com/*
//
// ==/UserScript==

d = new Date;
GM_xmlhttpRequest({
	method: 'GET',
	    url: 'http://urlmemo.memo.masui.org/memo.cgi?register=1&long=' +
	    encodeURIComponent(location.href) + '&title=' +
	    encodeURIComponent(document.title) + '&short=' +
	    d.getFullYear() + ('00'+(d.getMonth()+1)).slice(-2) + 
	    ('00'+d.getDate()).slice(-2) + ('00'+d.getHours()).slice(-2) + 
	    ('00'+d.getMinutes()).slice(-2)+('00'+d.getSeconds()).slice(-2)
	    });
