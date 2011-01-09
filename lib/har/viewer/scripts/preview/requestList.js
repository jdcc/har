require.def("preview/requestList",["domplate/domplate","core/lib","i18n!nls/requestList","preview/harModel","core/cookies","preview/requestBody","domplate/infoTip","domplate/popupMenu"],function(o,d,m,p,t,u,v,w){with(o){o=function(a){this.input=a;v.addListener(this)};o.prototype=domplate({tableTag:TABLE({"class":"netTable",cellpadding:0,cellspacing:0,onclick:"$onClick"},TBODY(TR(TD({width:"20%"}),TD({width:"10%"}),TD({width:"10%"}),TD({width:"10%"}),TD({width:"50%"}),TD({width:"15px"})))),fileTag:FOR("file",
"$files",TR({"class":"netRow loaded",$hasHeaders:"$file|hasResponseHeaders",$responseError:"$file|isError",$fromCache:"$file|isFromCache"},TD({"class":"netHrefCol netCol"},DIV({"class":"netHrefLabel netLabel",style:"margin-left: $file|getIndent\\px"},"$file|getHref"),DIV({"class":"netFullHrefLabel netHrefLabel netLabel",style:"margin-left: $file|getIndent\\px"},"$file|getFullHref")),TD({"class":"netStatusCol netCol"},DIV({"class":"netStatusLabel netLabel"},"$file|getStatus")),TD({"class":"netDomainCol netCol"},
DIV({"class":"netDomainLabel netLabel"},"$file|getDomain")),TD({"class":"netSizeCol netCol"},DIV({"class":"netSizeLabel netLabel"},"$file|getSize")),TD({"class":"netTimeCol netCol"},DIV({"class":"netTimelineBar"},"&nbsp;",DIV({"class":"netResolvingBar netBar",style:"left: $file.offset"}),DIV({"class":"netConnectingBar netBar",style:"left: $file.offset"}),DIV({"class":"netBlockingBar netBar",style:"left: $file.offset"}),DIV({"class":"netSendingBar netBar",style:"left: $file.offset"}),DIV({"class":"netWaitingBar netBar",
style:"left: $file.offset"}),DIV({"class":"netContentLoadBar netBar",style:"left: $file.offset"}),DIV({"class":"netWindowLoadBar netBar",style:"left: $file.offset"}),DIV({"class":"netReceivingBar netBar",style:"left: $file.offset; width: $file.width"},SPAN({"class":"netTimeLabel"},"$file|getElapsedTime")))),TD({"class":"netOptionsCol netCol"},DIV({"class":"netOptionsLabel netLabel",onclick:"$onOpenOptions"})))),headTag:TR({"class":"netHeadRow"},TD({"class":"netHeadCol",colspan:6},DIV({"class":"netHeadLabel"},
"$doc.rootFile.href"))),netInfoTag:TR({"class":"netInfoRow"},TD({"class":"netInfoCol",colspan:6})),summaryTag:TR({"class":"netRow netSummaryRow"},TD({"class":"netCol",colspan:3},DIV({"class":"netCountLabel netSummaryLabel"},"-")),TD({"class":"netTotalSizeCol netCol"},DIV({"class":"netTotalSizeLabel netSummaryLabel"},"0KB")),TD({"class":"netTotalTimeCol netCol"},DIV({"class":"",style:"width: 100%"},DIV({"class":"netCacheSizeLabel netSummaryLabel"},"(",SPAN("0KB"),SPAN(" "+m.fromCache),")"),DIV({"class":"netTimeBar"},
SPAN({"class":"netTotalTimeLabel netSummaryLabel"},"0ms")))),TD({"class":"netCol"})),getIndent:function(){return 0},isError:function(a){a=Math.floor(a.response.status/100);return a==4||a==5},isFromCache:function(a){return a.cache&&a.cache.afterRequest},getHref:function(a){return a.request.method+" "+d.getFileName(this.getFullHref(a))},getFullHref:function(a){return a.request.url},getStatus:function(a){return(a.response.status>0?a.response.status+" ":"")+a.response.statusText},getDomain:function(a){return d.getPrettyDomain(a.request.url)},
getSize:function(a){var b=a.response.bodySize;return this.formatSize(b&&b!=-1?b:a.response.content.size)},hasResponseHeaders:function(){return true},formatSize:function(a){return d.formatSize(a)},getElapsedTime:function(a){return d.formatTime(a.time)},onClick:function(a){var b=$.event.fix(a||window.event);if(d.isLeftClick(a))if(b=d.getAncestorByClass(b.target,"netRow")){this.toggleHeadersRow(b);d.cancelEvent(a)}},toggleHeadersRow:function(a){if(d.hasClass(a,"hasHeaders")){var b=a.repObject;d.toggleClass(a,
"opened");if(d.hasClass(a,"opened")){var c=this.netInfoTag.insertRows({},a)[0];c.repObject=b;(new u).render(c.firstChild,b)}else{c=a.nextSibling;d.getElementByClass(c,"netInfoBody");a.parentNode.removeChild(c)}}},onOpenOptions:function(a){var b=$.event.fix(a||window.event);d.cancelEvent(a);if(d.isLeftClick(a)){a=b.target;b=this.getOptionsMenuItems(d.getAncestorByClass(a,"netRow"));(new w({id:"requestContextMenu",items:b})).showPopup(a)}},getOptionsMenuItems:function(a){var b=a.repObject;return[{label:m.menuBreakTimeline,
type:"checkbox",disabled:false,checked:a.phase.files[0]==b,command:d.bind(this.breakLayout,this,a)},"-",{label:m.menuOpenRequest,command:d.bind(this.openRequest,this,b)},{label:m.menuOpenResponse,disabled:!b.response.content.text,command:d.bind(this.openResponse,this,b)}]},openRequest:function(a,b){window.open(b.request.url)},openResponse:function(a,b){a=b.response.content.mimeType;var c=b.response.content.encoding;window.open("data:"+(a?a:"")+";"+(c?c:"")+","+b.response.content.text)},breakLayout:function(a,
b){a=b.repObject;b.breakLayout=b.phase.files[0]!=a;b=d.getAncestorByClass(b,"netTable");a=p.getParentPage(this.input,a);this.updateLayout(b,a)},updateLayout:function(a,b){var c=p.getPageEntries(this.input,b);this.table=a;a=this.firstRow=this.table.firstChild.firstChild.nextSibling;this.phases=[];var e=t.getCookie("phaseInterval");e||(e=1E3);var f=null,i=b?d.parseISO8601(b.startedDateTime):null,h=0,g=0;if(b&&b.pageTimings){g=b.pageTimings;h=g.onLoad>0?g.onLoad:0;g=g.onContentLoad>0?g.onContentLoad:
0}for(var j=0;j<c.length;j++){var k=c[j];if(d.hasClass(a,"netInfoRow"))a=a.nextSibling;a.repObject=k;i||(i=d.parseISO8601(k.startedDateTime));var l=d.parseISO8601(k.startedDateTime),n=f?d.parseISO8601(f.getLastStartTime()):0;n=l-n>=e&&l>i+h;if(typeof a.breakLayout=="boolean")if(!f||a.breakLayout)f=this.startPhase(k);else f.addFile(k);else if(!f||n)f=this.startPhase(k);else f.addFile(k);if(f.startTime==undefined||f.startTime>l)f.startTime=l;if(f.endTime==undefined||f.endTime<l+k.time)f.endTime=l+k.time;
if(k.phase==this.phases[0]&&f.endTime<i+h)f.endTime=i+h;if(k.phase==this.phases[0]&&f.endTime<i+g)f.endTime=i+g;a=a.nextSibling}this.updateTimeline(b);this.updateSummaries(b)},startPhase:function(a){a=new q(a);this.phases.push(a);return a},calculateFileTimes:function(a,b,c){if(c!=b.phase){c=b.phase;this.phaseStartTime=c.startTime;this.phaseEndTime=c.endTime;this.phaseElapsed=this.phaseEndTime-c.startTime}var e=b.timings.dns<0?0:b.timings.dns,f=e+(b.timings.connect<0?0:b.timings.connect),i=f+(b.timings.blocked<
0?0:b.timings.blocked),h=i+(b.timings.send<0?0:b.timings.send),g=h+(b.timings.wait<0?0:b.timings.wait),j=g+(b.timings.receive<0?0:b.timings.receive);this.barOffset=((d.parseISO8601(b.startedDateTime)-this.phaseStartTime)/this.phaseElapsed*100).toFixed(3);this.barResolvingWidth=(e/this.phaseElapsed*100).toFixed(3);this.barConnectingWidth=(f/this.phaseElapsed*100).toFixed(3);this.barBlockingWidth=(i/this.phaseElapsed*100).toFixed(3);this.barSendingWidth=(h/this.phaseElapsed*100).toFixed(3);this.barWaitingWidth=
(g/this.phaseElapsed*100).toFixed(3);this.barReceivingWidth=(j/this.phaseElapsed*100).toFixed(3);if(a){e=d.parseISO8601(a.startedDateTime);f=a.pageTimings.onContentLoad;if(b.phase==this.phases[0]&&f>0)this.contentLoadBarOffset=((e+f-c.startTime)/this.phaseElapsed*100).toFixed(3);a=a.pageTimings.onLoad;if(b.phase==this.phases[0]&&a>0)this.windowLoadBarOffset=((e+a-c.startTime)/this.phaseElapsed*100).toFixed(3)}return c},updateTimeline:function(a){for(var b,c=this.firstRow;c;c=c.nextSibling){var e=
c.repObject;if(e)if(!d.hasClass(c,"netInfoRow")){b=this.calculateFileTimes(a,e,b);c.phase=e.phase;delete e.phase;e=d.getElementByClass(c,"netResolvingBar");var f=e.nextSibling,i=f.nextSibling,h=i.nextSibling,g=h.nextSibling,j=g.nextSibling,k=j.nextSibling,l=k.nextSibling;e.style.left=f.style.left=i.style.left=h.style.left=g.style.left=l.style.left=this.barOffset+"%";e.style.width=this.barResolvingWidth+"%";f.style.width=this.barConnectingWidth+"%";i.style.width=this.barBlockingWidth+"%";h.style.width=
this.barSendingWidth+"%";g.style.width=this.barWaitingWidth+"%";l.style.width=this.barReceivingWidth+"%";if(this.contentLoadBarOffset){j.style.left=this.contentLoadBarOffset+"%";j.style.display="block";this.contentLoadBarOffset=null}if(this.windowLoadBarOffset){k.style.left=this.windowLoadBarOffset+"%";k.style.display="block";this.windowLoadBarOffset=null}}}},updateSummaries:function(a){for(var b=this.phases,c=0,e=0,f=0,i=0,h=0;h<b.length;++h){var g=b[h];g.invalidPhase=false;g=this.summarizePhase(g);
c+=g.fileCount;e+=g.totalSize;f+=g.cachedSize;i+=g.totalTime}if(b=this.summaryRow){d.getElementByClass(b,"netCountLabel").firstChild.nodeValue=this.formatRequestCount(c);c=d.getElementByClass(b,"netTotalSizeLabel");c.setAttribute("totalSize",e);c.firstChild.nodeValue=d.formatSize(e);e=d.getElementByClass(b,"netCacheSizeLabel");e.setAttribute("collapsed",f==0);e.childNodes[1].firstChild.nodeValue=d.formatSize(f);f=d.getElementByClass(b,"netTotalTimeLabel");i=d.formatTime(i);if(a&&a.pageTimings.onLoad>
0)i+=" (onload: "+d.formatTime(a.pageTimings.onLoad)+")";f.innerHTML=i}},formatRequestCount:function(a){return a+" "+(a==1?m.request:m.requests)},summarizePhase:function(a){var b=0,c=0,e="all";if(e=="all")e=null;for(var f=0,i=0,h=0,g=0;g<a.files.length;g++){var j=a.files[g],k=d.parseISO8601(j.startedDateTime);if(!e||j.category==e){++f;var l=j.response.bodySize;l=l&&l!=-1?l:j.response.content.size;c+=l;if(j.response.status==304)b+=l;if(!i||k<i)i=k;j=k+j.time;if(j>h)h=j}}return{cachedSize:b,totalSize:c,
totalTime:h-i,fileCount:f}},showInfoTip:function(a,b){var c=d.getAncestorByClass(b,"netRow");if(c)if(d.getAncestorByClass(b,"netBar")){a.setAttribute("multiline",true);this.infoTipURL=b=c.repObject.startedDateTime+"-nettime";return this.populateTimeInfoTip(a,c)}else if(d.hasClass(b,"netSizeLabel")){this.infoTipURL=b=c.repObject.startedDateTime+"-netsize";return this.populateSizeInfoTip(a,c)}},populateTimeInfoTip:function(a,b){r.render(this.input,b,a);return true},populateSizeInfoTip:function(a,b){x.render(this.input,
b,a);return true},render:function(a,b){var c=p.getPageEntries(this.input,b);if(c.length){this.table=this.tableTag.replace({},a,this);this.summaryRow=this.summaryTag.insertRows({},this.table.firstChild)[0];this.fileTag.insertRows({files:c},this.table.firstChild.lastChild.previousSibling,this);this.updateLayout(this.table,b)}}});var q=function(a){this.files=[];this.addFile(a)};q.prototype={addFile:function(a){this.files.push(a);a.phase=this},getLastStartTime:function(){return this.files[this.files.length-
1].startedDateTime}};var r=domplate({tableTag:TABLE({"class":"timeInfoTip"},TBODY()),timingsTag:FOR("time","$timings",TR({"class":"timeInfoTipRow",$collapsed:"$time|hideBar"},TD({"class":"$time|getBarClass timeInfoTipBar",$loaded:"$time.loaded",$fromCache:"$time.fromCache"}),TD({"class":"timeInfoTipCell startTime"},"$time.start|formatStartTime"),TD({"class":"timeInfoTipCell elapsedTime"},"$time.elapsed|formatTime"),TD("$time|getLabel"))),startTimeTag:TR(TD(),TD("$startTime.time|formatStartTime"),
TD({colspan:2},"$startTime|getLabel")),separatorTag:TR(TD({colspan:4,height:"10px"})),eventsTag:FOR("event","$events",TR({"class":"timeInfoTipEventRow"},TD({"class":"timeInfoTipBar",align:"center"},DIV({"class":"$event|getBarClass timeInfoTipEventBar"})),TD("$event.start|formatStartTime"),TD({colspan:2},"$event|getLabel"))),hideBar:function(a){return!a.elapsed&&a.bar=="request.phase.Blocking"},getBarClass:function(a){return"net"+a.bar.substr(a.bar.lastIndexOf(".")+1)+"Bar"},formatTime:function(a){return d.formatTime(a)},
formatStartTime:function(a){var b=a>0,c=d.formatTime(Math.abs(a));if(!a)return c;return(b>0?"+":"-")+c},getLabel:function(a){return m[a.bar]},render:function(a,b,c){var e=b.repObject;var f=(a=p.getParentPage(a,e))?d.parseISO8601(a.startedDateTime):null,i=d.parseISO8601(e.startedDateTime);c=r.tableTag.replace({},c);var h={};h.time=i-b.phase.startTime;h.bar="request.Started";this.startTimeTag.insertRows({startTime:h},c.firstChild);this.separatorTag.insertRows({},c.firstChild);b=0;h=[];var g=e.timings.dns,
j=e.timings.connect,k=e.timings.blocked,l=e.timings.send,n=e.timings.wait,s=e.timings.receive;g>=0&&h.push({bar:"request.phase.Resolving",elapsed:g,start:b});if(j>=0)h.push({bar:"request.phase.Connecting",elapsed:j,start:b+=g<0?0:g});if(k>=0)h.push({bar:"request.phase.Blocking",elapsed:k,start:b+=j<0?0:j});if(l>=0)h.push({bar:"request.phase.Sending",elapsed:l,start:b+=k<0?0:k});if(n>=0)h.push({bar:"request.phase.Waiting",elapsed:n,start:b+=l<0?0:l});if(s>=0)h.push({bar:"request.phase.Receiving",elapsed:s,
start:b+(n<0?0:n),loaded:e.loaded,fromCache:e.fromCache});this.timingsTag.insertRows({timings:h},c.firstChild);e=[];a&&a.pageTimings.onContentLoad>0&&e.push({bar:"ContentLoad",start:f+a.pageTimings.onContentLoad-i});a&&a.pageTimings.onLoad>0&&e.push({bar:"WindowLoad",start:f+a.pageTimings.onLoad-i});if(e.length){this.separatorTag.insertRows({},c.firstChild);this.eventsTag.insertRows({events:e},c.firstChild);return true}}}),x=domplate({tag:DIV({"class":"sizeInfoTip"},"$file|getSize"),zippedTag:DIV(DIV({"class":"sizeInfoTip"},
"$file|getBodySize"),DIV({"class":"sizeInfoTip"},"$file|getContentSize")),getSize:function(a){a=a.response.bodySize;return d.formatString(m.tooltipSize,[d.formatSize(a),a.size<0?"?":d.formatNumber(a)])},getBodySize:function(a){a=a.response.bodySize;return d.formatString(m.tooltipZippedSize,[d.formatSize(a),a.size<0?"?":d.formatNumber(a)])},getContentSize:function(a){a=a.response.content.size;return d.formatString(m.tooltipUnzippedSize,[d.formatSize(a),a.size<0?"?":d.formatNumber(a)])},render:function(a,
b,c){a=b.repObject;if(a.response.bodySize==a.response.content.size)return this.tag.replace({file:a},c);return this.zippedTag.replace({file:a},c)}});return o}});