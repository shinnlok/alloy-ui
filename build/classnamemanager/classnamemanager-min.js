/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.2
build: 3.7.2
*/
YUI.add("classnamemanager",function(e,t){var n="classNamePrefix",r="classNameDelimiter",i=e.config;i[n]=i[n]||"yui3",i[r]=i[r]||"-",e.ClassNameManager=function(){var t=i[n],s=i[r];return{getClassName:e.cached(function(){var n=e.Array(arguments);return n[n.length-1]!==!0?n.unshift(t):n.pop(),n.join(s)})}}()},"3.7.2",{requires:["yui-base"]});
