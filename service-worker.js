"use strict";var precacheConfig=[["/portfoliosite/index.html","d8c0d0d0aace7b2b9009e18b3ee2483c"],["/portfoliosite/static/css/main.9f1f7564.css","065dd0927b6f14df728aa6517aba00d8"],["/portfoliosite/static/js/main.13681a22.js","2bbdc14ed69ba1e8db246dbbf2d1f122"],["/portfoliosite/static/media/CSS3_logo.747e0cdd.png","747e0cdd86b84302647a03026e26fd08"],["/portfoliosite/static/media/C_lang.b4dd4c5e.png","b4dd4c5e18b3c0a0c35018f37c2b2f94"],["/portfoliosite/static/media/DIN-Regular.e0185b8d.ttf","e0185b8dd98e7dadde77c95bcc0e8b8d"],["/portfoliosite/static/media/JS_Logo.637ccbf2.png","637ccbf2b702b94a2cf9a3ff6cdd7dc2"],["/portfoliosite/static/media/LLL.2f804995.png","2f8049951b0af10ebea71978561d6701"],["/portfoliosite/static/media/Matlab.cf286322.png","cf28632239db6e02bc09bcca6bf5360f"],["/portfoliosite/static/media/aa.f984eaaa.png","f984eaaab140283cd556ca7e75e9b754"],["/portfoliosite/static/media/background.324716ec.jpg","324716ec6a234a365b1c05be492c07f1"],["/portfoliosite/static/media/catia.13b51ae4.png","13b51ae427cdaa47f5955ab8ab6c85b7"],["/portfoliosite/static/media/codepen2.df5a99db.png","df5a99db8ad1eb232762a77744db2a3c"],["/portfoliosite/static/media/down.1cbca645.svg","1cbca645cfc9911919d9d45f168da011"],["/portfoliosite/static/media/email.59dac313.png","59dac313459fe190c271e2ed7e86d998"],["/portfoliosite/static/media/html.da3c36ab.png","da3c36ab7d12285e143e25c4741d3d3e"],["/portfoliosite/static/media/linkedin-logo.7fb99744.png","7fb99744eaccae943d5adf537b5b3a93"],["/portfoliosite/static/media/me2.a3278f0e.jpeg","a3278f0e3819ee7131e1cf8695e1cacc"],["/portfoliosite/static/media/myWebsite.9e508305.png","9e5083052bf87b7b84cb3fcdd3678381"],["/portfoliosite/static/media/nodejs2.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/portfoliosite/static/media/pyth.ca2ceddc.png","ca2ceddcd9c28a22c449286f3fe66751"],["/portfoliosite/static/media/react.61a7eeee.png","61a7eeee285cd4b16e3f86b37ab01ae3"],["/portfoliosite/static/media/setings.33697f6b.png","33697f6bc37bacb5c924d3f73af0ab0f"],["/portfoliosite/static/media/ucl.ff63cb0f.jpg","ff63cb0fbc6dd707bcbd98adf7226bc0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/portfoliosite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});