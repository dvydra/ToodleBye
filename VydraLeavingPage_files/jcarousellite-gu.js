/* m-482~public/js/jcarousellite-gu.js */
/**
 * jCarouselLite - jQuery plugin to navigate images/any content in a carousel style widget.
 * @requires jQuery v1.2 or above
 *
 * http://gmarwaha.com/jquery/jcarousellite/
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.1
 * Note: Requires jquery 1.2 or above from version 1.0.1
 */
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,overrideWidth:null,vertical:false,circular:true,visible:3,start:0,scroll:2,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var running=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var div=$(this),ul=$("ul",div),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v;}
var li=$("li",ul),itemLength=li.size(),curr=o.start;div.css("visibility","visible");li.css({overflow:"hidden","float":o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});div.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var liSize=o.vertical?height(li):width(li);var ulSize=liSize*itemLength+500;var divSize=o.overrideWidth?o.overrideWidth:liSize*v;li.css({'padding':'0 10px 0 10px','border-right':'1px solid #aaa','border-bottom-width':'0','width':li.width(),'height':getHighest(li)});ul.css(sizeCss,ulSize+"px").css(animCss,-(curr*liSize)-0);div.css(sizeCss,divSize+"px");div.children('div.hd').css('width',divSize+"px")
if(o.btnPrev)
$(o.btnPrev).click(function(){return go(curr-o.scroll);});if(o.btnNext)
$(o.btnNext).click(function(){return go(curr+o.scroll);});if(o.btnGo)
$.each(o.btnGo,function(i,val){$(val).click(function(){return go(o.circular?o.visible+i:i);});});if(o.mouseWheel&&div.mousewheel)
div.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll);});if(o.auto)
setInterval(function(){go(curr+o.scroll);},o.auto+o.speed);function vis(){return li.slice(curr).slice(0,v);};function go(to){if(!running){if(o.beforeStart)
o.beforeStart.call(this,vis());if(o.circular){if(to<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*liSize)+"px");curr=to==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll;}else if(to>=itemLength-v+1){ul.css(animCss,-((v)*liSize)+"px");curr=to==itemLength-v+1?v+1:v+o.scroll;}else curr=to;}else{if(to<0){if(curr=0){return;}else{curr=0;}}else if(to>itemLength-v){if(curr==itemLength-v){return;}else{curr=itemLength-v;}}else{curr=to;}}
running=true;ul.animate(animCss=="left"?{left:-(curr*liSize)}:{top:-(curr*liSize)},o.speed,o.easing,function(){if(o.afterEnd)
o.afterEnd.call(this,vis());running=false;});if(!o.circular){if(curr==0){$(o.btnPrev).addClass("disabled");}else{$(o.btnPrev).removeClass("disabled");}
if(curr==itemLength-v){$(o.btnNext).addClass("disabled");}else{$(o.btnNext).removeClass("disabled");}}}
return false;};});};function css(el,prop){return parseInt($.css(el[0],prop))||0;};function width(el){return el[0].offsetWidth+css(el,'marginLeft')+css(el,'marginRight')+21;};function height(el){return el[0].offsetHeight+css(el,'marginTop')+css(el,'marginBottom');};function getHighest(el){var theHighest=0;$.each(el,function(i,val){if(val.offsetHeight>theHighest){theHighest=val.offsetHeight;};});return parseInt(theHighest);};})(jQuery);
