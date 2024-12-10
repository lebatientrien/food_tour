!/**
 * Highcharts Stock JS v11.4.8 (2024-08-29)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/klinger",["highcharts","highcharts/modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function o(e,o,i,r){e.hasOwnProperty(o)||(e[o]=r.apply(null,i),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:e[o]}})))}o(e,"Stock/Indicators/MultipleLinesComposition.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var o,i=t.seriesTypes.sma.prototype,r=e.defined,n=e.error,a=e.merge;return function(t){var e=["bottomLine"],o=["top","bottom"],s=["top"];function l(t){return"plot"+t.charAt(0).toUpperCase()+t.slice(1)}function p(t,e){var o=[];return(t.pointArrayMap||[]).forEach(function(t){t!==e&&o.push(l(t))}),o}function u(){var t,e=this,o=e.pointValKey,s=e.linesApiNames,u=e.areaLinesNames,c=e.points,h=e.options,f=e.graph,g={options:{gapSize:h.gapSize}},d=[],y=p(e,o),m=c.length;if(y.forEach(function(e,o){for(d[o]=[];m--;)t=c[m],d[o].push({x:t.x,plotX:t.plotX,plotY:t[e],isNull:!r(t[e])});m=c.length}),e.userOptions.fillColor&&u.length){var v=d[y.indexOf(l(u[0]))],A=1===u.length?c:d[y.indexOf(l(u[1]))],P=e.color;e.points=A,e.nextPoints=v,e.color=e.userOptions.fillColor,e.options=a(c,g),e.graph=e.area,e.fillGraph=!0,i.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=P}s.forEach(function(t,o){d[o]?(e.points=d[o],h[t]?e.options=a(h[t].styles,g):n('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],i.drawGraph.call(e),e["graph"+t]=e.graph):n('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=c,e.options=h,e.graph=f,i.drawGraph.call(e)}function c(t){var e,o=[],r=[];if(t=t||this.points,this.fillGraph&&this.nextPoints){if((e=i.getGraphPath.call(this,this.nextPoints))&&e.length){e[0][0]="L",o=i.getGraphPath.call(this,t),r=e.slice(0,o.length);for(var n=r.length-1;n>=0;n--)o.push(r[n])}}else o=i.getGraphPath.apply(this,arguments);return o}function h(t){var e=[];return(this.pointArrayMap||[]).forEach(function(o){e.push(t[o])}),e}function f(){var t,e=this,o=this.pointArrayMap,r=[];r=p(this),i.translate.apply(this,arguments),this.points.forEach(function(i){o.forEach(function(o,n){t=i[o],e.dataModify&&(t=e.dataModify.modifyValue(t)),null!==t&&(i[r[n]]=e.yAxis.toPixels(t,!0))})})}t.compose=function(t){var i=t.prototype;return i.linesApiNames=i.linesApiNames||e.slice(),i.pointArrayMap=i.pointArrayMap||o.slice(),i.pointValKey=i.pointValKey||"top",i.areaLinesNames=i.areaLinesNames||s.slice(),i.drawGraph=u,i.getGraphPath=c,i.toYData=h,i.translate=f,t}}(o||(o={})),o}),o(e,"Stock/Indicators/Klinger/KlingerIndicator.js",[e["Stock/Indicators/MultipleLinesComposition.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,o){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=e.seriesTypes,a=n.ema,s=n.sma,l=o.correctFloat,p=o.error,u=o.extend,c=o.isArray,h=o.merge,f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.calculateTrend=function(t,e){return t[e][1]+t[e][2]+t[e][3]>t[e-1][1]+t[e-1][2]+t[e-1][3]?1:-1},e.prototype.isValidData=function(t){var e=this.chart,o=this.options,i=this.linkedParent,r=c(t)&&4===t.length,n=this.volumeSeries||(this.volumeSeries=e.get(o.params.volumeSeriesID));return n||p("Series "+o.params.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,i.chart),!!([i,n].every(function(t){return t&&t.xData&&t.xData.length>=o.params.slowAvgPeriod})&&r)},e.prototype.getCM=function(t,e,o,i,r){return l(e+(o===i?t:r))},e.prototype.getDM=function(t,e){return l(t-e)},e.prototype.getVolumeForce=function(t){for(var e,o,i=[],r=0,n=1,a=0,s=t[0][1]-t[0][2],l=0;n<t.length;n++)o=this.calculateTrend(t,n),e=this.getDM(t[n][1],t[n][2]),r=this.getCM(a,e,o,l,s),i.push([this.volumeSeries.yData[n]*o*Math.abs(2*(e/r-1))*100]),l=o,a=r,s=e;return i},e.prototype.getEMA=function(t,e,o,i,r,n,s){return a.prototype.calculateEma(s||[],t,void 0===n?1:n,i,e,void 0===r?-1:r,o)},e.prototype.getSMA=function(t,e,o){return a.prototype.accumulatePeriodPoints(t,e,o)/t},e.prototype.getValues=function(t,e){var o,i,r=[],n=t.xData,a=t.yData,s=[],p=[],u=[],c=0,h=0,f=void 0,g=void 0,d=null;if(this.isValidData(a[0])){for(var y=this.getVolumeForce(a),m=this.getSMA(e.fastAvgPeriod,0,y),v=this.getSMA(e.slowAvgPeriod,0,y),A=2/(e.fastAvgPeriod+1),P=2/(e.slowAvgPeriod+1);c<a.length;c++)c>=e.fastAvgPeriod&&(f=h=this.getEMA(y,f,m,A,0,c,n)[1]),c>=e.slowAvgPeriod&&(g=i=this.getEMA(y,g,v,P,0,c,n)[1],o=l(h-i),u.push(o),u.length>=e.signalPeriod&&(d=u.slice(-e.signalPeriod).reduce(function(t,e){return t+e})/e.signalPeriod),r.push([n[c],o,d]),s.push(n[c]),p.push([o,d]));return{values:r,xData:s,yData:p}}},e.defaultOptions=h(s.defaultOptions,{params:{fastAvgPeriod:34,slowAvgPeriod:55,signalPeriod:13,volumeSeriesID:"volume"},signalLine:{styles:{lineWidth:1,lineColor:"#ff0000"}},dataGrouping:{approximation:"averages"},tooltip:{pointFormat:'<span style="color: {point.color}">●</span><b> {series.name}</b><br/><span style="color: {point.color}">Klinger</span>: {point.y}<br/><span style="color: {point.series.options.signalLine.styles.lineColor}">Signal</span>: {point.signal}<br/>'}}),e}(s);return u(f.prototype,{areaLinesNames:[],linesApiNames:["signalLine"],nameBase:"Klinger",nameComponents:["fastAvgPeriod","slowAvgPeriod"],pointArrayMap:["y","signal"],parallelArrays:["x","y","signal"],pointValKey:"y"}),t.compose(f),e.registerSeriesType("klinger",f),f}),o(e,"masters/indicators/klinger.src.js",[e["Core/Globals.js"]],function(t){return t})});