var ContentScript=function(a){a.id=chrome.runtime.id;a.port=null;a.token_="";a.whiteList=[];a.initWhiteList=function(){a.whiteList.push("ieatgpc.dll");a.whiteList.push("atmccli.dll");a.whiteList.push("webexmgr.dll");a.whiteList.push("ateccli.dll");a.whiteList.push("wbxmgrec.dll");a.whiteList.push("wbxtccli.dll");a.whiteList.push("wbxmgrtc.dll");a.whiteList.push("wbxtcholcli.dll");a.whiteList.push("tcholmgr.dll");a.whiteList.push("atsc3cls.dll");a.whiteList.push("atsccli.dll");a.whiteList.push("atsccust.dll");
a.whiteList.push("scplugin.dll");a.whiteList.push("ataactrl.dll");a.whiteList.push("aasetup.dll");a.whiteList.push("atonecli.dll");a.whiteList.push("mailutil.dll");a.whiteList.push("ramtmgr.dll");a.whiteList.push("raagt.dll");a.whiteList.push("atstctrl.dll");a.whiteList.push("atplycli.dll");a.whiteList.push("atrcp.dll");a.whiteList.push("atshcli.dll");a.whiteList.push("atconfui.bundle");a.whiteList.push("wbxmgrmc.bundle");a.whiteList.push("wbxmgrtc.bundle");a.whiteList.push("wbxmgrec.bundle");a.whiteList.push("tcholmgr.bundle");
a.whiteList.push("asplayback.bundle");a.whiteList.push("nbrpfw.bundle");a.whiteList.push("raconfui.bundle");a.whiteList.push("pcnow client.app");a.whiteList.push("pcnow process manager.app")};a.sendGoogleAnalyticMessage=function(a,e,c,d,f){chrome.runtime.sendMessage({platform:a,action:e,label:c,serviceType:d,result:f},function(a){})};a.sendLog=function(b,e){try{if(navigator.platform.match(/win/i)){var c=JSON.parse(b.message),d=c.GpcUrlRoot,f=a.getServiceType(c);d&&a.sendGoogleAnalyticMessage("Win",
"GpcUrlRoot",d.trim(),f,e);var g=c.GpcExtName;g&&a.sendGoogleAnalyticMessage("Win","GpcExtName",g,f,e);var h=c.GpcUnpackName;h&&a.sendGoogleAnalyticMessage("Win","GpcUnpackName",h,f,e);var k=c.GpcInitCall;k&&a.sendGoogleAnalyticMessage("Win","GpcInitCall",atob(k.trim()),f,e);var m=c.GpcExitCall;m&&a.sendGoogleAnalyticMessage("Win","GpcExitCall",atob(m.trim()),f,e);var l=c.GpcComponentName;l&&(l=atob(l).trim().toLowerCase(),a.sendGoogleAnalyticMessage("Win","GpcComponentName",l,f,e))}}catch(n){console.log("[ContentScript] sendLog: err=",
n)}};a.getServiceType=function(a){var b=a.GPCServiceType,c=a.productname;a=a.GpcComponentName;if(b){if("1"==b)return"MC";if("6"==b)return"EC";if("7"==b)return"TC";if("9"==b)return"SC"}else{if(c)return btoa(c).toLowerCase();if(a){a=atob(a).trim().toLowerCase();if("atmccli.dll"==a)return"MC";if("ateccli.dll"==a)return"EC";if("wbxtccli.dll"==a)return"TC";if("atsc3cls.dll"==a)return"SC"}}return"OTHER"};a.verifyScriptCall=function(a){var b=/^(WebEx_|A[sT][ADEPSN]|conDll|RA[AM])|^(Ex|In)it|^(FinishC|Is[NS]|JoinM|[NM][BCS][JRUC]|Set|Name|Noti|Trans|Update)|^(td|SCSP)$/;
if(10240<a.length)return!1;a=a.split(";");for(var c=0;c<a.length;c++){var d=a[c].trim(),f="",g=d.indexOf("=");0<=g&&(d=d.substring(g+1).trim());g=d.indexOf("(");0<=g&&(f=d.substring(g+1),d=d.substring(0,g).trim());g=f.split(",");if(1024<f.length||20<g.length||0<d.length&&!d.match(b))return!1}return!0};a.verify=function(b){if("connect"!=b.message_type&&"disconnect"!=b.message_type&&"launch_meeting"!=b.message_type)return!1;if("launch_meeting"==b.message_type){try{var e=JSON.parse(b.message);if(navigator.platform.match(/win/i)){var c=
e.GpcExtName;if(c&&(c=c.trim(),"atgpcext"!=c.toLowerCase()&&"atgpcext"!=atob(c).toLowerCase().trim()))return!1;var d=e.GpcUnpackName;if(d&&(d=d.trim(),"atgpcdec"!=d.toLowerCase()&&"atgpcdec"!=atob(d).toLowerCase().trim()))return!1;var f=e.GpcInitCall;if(f&&!a.verifyScriptCall(atob(f.trim())))return!1;var g=e.GpcExitCall;if(g&&!a.verifyScriptCall(atob(g.trim())))return!1}else if(navigator.platform.match(/mac/i)){if(c=e.GpcExtName.trim(),"atgpcext64"!=c.toLowerCase()&&"atgpcext64"!=atob(c).toLowerCase().trim())return!1}else return!1;
var h=e.GpcComponentName.toLowerCase().trim();null==h.match(/\.dll$|\.bundle$|\.app$/)&&(h=atob(e.GpcComponentName),h=h.toLowerCase().trim());for(b=b=0;b<a.whiteList.length;b++)if(h==a.whiteList[b])return!0}catch(k){console.log("[ContentScript]:",k)}return!1}return!0};a.handleStateChanged=function(b){console.log("[ContentScript] handleStateChanged: result=",b);b={timestamp:(new Date).toUTCString(),token:ContentScript.token_,message_type:"state_changed",message:{ExtState:{result:b,reason:b?"ok":"ExtensionNotInstalled"},
HostState:{result:!1,reason:"HostNotInstalled"}}};a.handleNativeMessage(b)};a.handleNativeMessage=function(a){console.log("[ContentScript] handleNativeMessage: message=",a);a=new CustomEvent("native_message",{detail:a});window.parent.document.dispatchEvent(a)};a.handleNativeDisconnect=function(b){console.log("[ContentScript] port.onDisconnect: self.port=",a.port);b={timestamp:(new Date).toUTCString(),token:a.token_,message_type:"disconnect",message:"disconnect"};a.port=null;a.handleNativeMessage(b)};
a.sendMessage=function(b,e){console.log("[ContentScript] sendMessage: self.port=",a.port);console.log("[ContentScript] sendMessage: message=",b);try{if(a.verify(b))"launch_meeting"==b.message_type&&(b.domain=window.location.protocol+"//"+window.location.host),null!=a.port&&a.port.postMessage(b);else{"launch_meeting"==b.message_type&&a.sendLog(b,"Illegal");var c={timestamp:(new Date).toUTCString(),token:a.token_,message_type:"error",message:{error_code:1005,error_message:"BadDocshow"}};a.handleNativeMessage(c);
if(null!=a.port){var d={timestamp:(new Date).toUTCString(),token:a.token_,message_type:"disconnect",message:"disconnect"};a.port.postMessage(d)}}}catch(f){console.log("[ContentScript] sendMessage: err=",f),c={timestamp:(new Date).toUTCString(),token:a.token_,message_type:"error",message:{error_code:-1,error_message:f.toString()}},a.handleNativeMessage(c),console.log(f.toString())}};a.connectPort=function(b){console.log("[ContentScript] connectPort: extId=",b,"self.port=",a.port,"host=",window.location.host);
if(null==a.port)try{a.port=chrome.runtime.connect(b,{name:a.token_}),console.log("[ContentScript] connectPort: self.port=",a.port),null!=a.port&&(a.port.onMessage.addListener(a.handleNativeMessage),a.port.onDisconnect.addListener(a.handleNativeDisconnect))}catch(e){console.log("[ContentScript] connectPort: err=",e),ContentScript.handleStateChanged(!1)}};a.init=function(){console.log("[ContentScript] init: chrome.runtime.id=",chrome.runtime.id);a.initWhiteList();document.addEventListener("connect",
function(b){console.log("[ContentScript] connect: e=",b);a.token_=b.detail.token;a.connectPort("")});document.addEventListener("message",function(b){a.sendMessage(b.detail,a.handleNativeMessage)})};return a}(ContentScript||{});ContentScript.init();window.onload=function(){ContentScript.handleStateChanged(!0)};