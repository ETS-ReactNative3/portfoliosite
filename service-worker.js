"use strict";var precacheConfig=[["/portfoliosite/index.html","df58da06b4d9c69f14b0012b95a80228"],["/portfoliosite/static/css/main.a97fec62.css","335e05bbb64efdd3ec5ecbdfd50b3240"],["/portfoliosite/static/js/main.a093a486.js","2f68e3b18a1572d9da238b44f114c4ab"],["/portfoliosite/static/media/LLL.2f804995.png","2f8049951b0af10ebea71978561d6701"],["/portfoliosite/static/media/aa.f984eaaa.png","f984eaaab140283cd556ca7e75e9b754"],["/portfoliosite/static/media/background.324716ec.jpg","324716ec6a234a365b1c05be492c07f1"],["/portfoliosite/static/media/bg.73356d5d.png","73356d5de98362a7f79fd6100e283ca9"],["/portfoliosite/static/media/codepen2.df5a99db.png","df5a99db8ad1eb232762a77744db2a3c"],["/portfoliosite/static/media/down.1cbca645.svg","1cbca645cfc9911919d9d45f168da011"],["/portfoliosite/static/media/email.59dac313.png","59dac313459fe190c271e2ed7e86d998"],["/portfoliosite/static/media/linkedin-logo.7fb99744.png","7fb99744eaccae943d5adf537b5b3a93"],["/portfoliosite/static/media/me2.a3278f0e.jpeg","a3278f0e3819ee7131e1cf8695e1cacc"],["/portfoliosite/static/media/ucl.ff63cb0f.jpg","ff63cb0fbc6dd707bcbd98adf7226bc0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/portfoliosite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});