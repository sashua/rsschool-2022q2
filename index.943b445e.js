!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},s=e.parcelRequire2a8d;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequire2a8d=s),s.register("iE7OH",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var s={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},i=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var i={};function s(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),i[t]=e),e}})),s("iE7OH").register(JSON.parse('{"EVgbq":"index.943b445e.js","qVoRx":"on-repeat.14de760f.mp3","fbVJK":"save-tonight.dc9fb2b6.mp3","3isen":"sugar.5412f714.mp3","fkso9":"unforgettable.b6f05091.mp3","duaT2":"willst-du.ec147ed3.mp3","jupcV":"wrong.e9b8de56.mp3"}'));class o{updateTime(){const t=new Date;return this.refs.time.textContent=t.toLocaleTimeString(this.locale,this.timeOptions),this.refs.date.textContent=t.toLocaleDateString(this.locale,this.dateOptions),this.getTimeOfDay(t)}getTimeOfDay(t){const e=t.getHours();return e>=6&&e<=11?"morning":e>=12&&e<=17?"afternoon":e>=18&&e<=23?"evening":e>=0&&e<=5?"night":void 0}getRefs(t){const e=document.querySelector(t);return{time:e.querySelector(".clock__time"),date:e.querySelector(".clock__date")}}constructor(t){this.refs=this.getRefs(t),this.locale="en-GB",this.timeOptions={hour12:!1},this.dateOptions={weekday:"long",day:"2-digit",month:"long",year:"numeric"}}}class a{getName(){return this.refs.input.value.trim()}updateText(t){this.refs.text.textContent=`Good ${t},`}setInputWidth(){const t=this.getName();this.refs.test.textContent=t||this.refs.input.placeholder,this.refs.input.style.width=this.refs.test.offsetWidth+"px"}bindEvents(){this.refs.input.addEventListener("input",this.setInputWidth.bind(this))}getRefs(t){const e=document.querySelector(t);return{text:e.querySelector(".greet__text"),input:e.querySelector(".greet__input"),test:e.querySelector(".greet__test")}}constructor(t,e){this.refs=this.getRefs(t),this.refs.input.value=e||"",this.setInputWidth(),this.bindEvents()}}var u={},c="Expected a function",l=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,g="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=g||v||Function("return this")(),y=Object.prototype.toString,b=Math.max,w=Math.min,S=function(){return m.Date.now()};function _(t,e,n){var r,i,s,o,a,u,l=0,h=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError(c);function p(e){var n=r,s=i;return r=i=void 0,l=e,o=t.apply(s,n)}function g(t){return l=t,a=setTimeout(m,e),h?p(t):o}function v(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-l>=s}function m(){var t=S();if(v(t))return y(t);a=setTimeout(m,function(t){var n=e-(t-u);return f?w(n,s-(t-l)):n}(t))}function y(t){return a=void 0,d&&r?p(t):(r=i=void 0,o)}function _(){var t=S(),n=v(t);if(r=arguments,i=this,u=t,n){if(void 0===a)return g(u);if(f)return a=setTimeout(m,e),p(u)}return void 0===a&&(a=setTimeout(m,e)),o}return e=E(e)||0,x(n)&&(h=!!n.leading,s=(f="maxWait"in n)?b(E(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=u=i=a=void 0},_.flush=function(){return void 0===a?o:y(S())},_}function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=f.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):h.test(t)?NaN:+t}u=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(c);return x(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),_(t,e,{leading:r,maxWait:e,trailing:i})};class q{setRange(t,e,n=0){this.refs.input.min=t,this.refs.input.max=e,this.setValue(n)}setValue(t){this.refs.input.value=t}getValue(){return this.refs.input.value}onInput(t){this.onInputCallback&&this.onInputCallback(t.target.value)}bindEvents(){this.refs.input.addEventListener("input",u(this.onInput.bind(this),100))}getRefs(t){return{input:document.querySelector(t).querySelector(".range__input")}}constructor({rootSelector:t,onInputCallback:e,min:n=0,max:r=100,value:i=0}){this.refs=this.getRefs(t),this.onInputCallback=e,this.setRange(n,r,i),this.bindEvents()}}var j;j=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("qVoRx");var O;O=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("fbVJK");var R;R=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("3isen");var C;C=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("fkso9");var T;T=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("duaT2");var B;B=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("jupcV");var N=[{author:"Robin Schulz",title:"On Repeat",src:n(j)},{author:"Robin Schulz",title:"Unforgettable",src:n(C)},{author:"Robin Schulz",title:"Save Tonight",src:n(O)},{author:"Robin Schulz",title:"Wrong",src:n(B)},{author:"Robin Schulz",title:"Willst Du",src:n(T)},{author:"Robin Schulz",title:"Sugar",src:n(R)}],I={},k=1/0,L=9007199254740991,H=17976931348623157e292,V=NaN,U="[object Arguments]",$="[object Map]",D="[object Promise]",W="[object Set]",A="[object String]",M="[object Symbol]",P="[object WeakMap]",F="[object DataView]",Q=/^\s+|\s+$/g,J=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,G=/^\[object .+?Constructor\]$/,K=/^0o[0-7]+$/i,X=/^(?:0|[1-9]\d*)$/,Y="[\ud800-\udfff]",Z="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",tt="[^\ud800-\udfff]",et="(?:\ud83c[\udde6-\uddff]){2}",nt="[\ud800-\udbff][\udc00-\udfff]",rt="(?:"+Z+"|"+"\ud83c[\udffb-\udfff])"+"?",it="[\\ufe0e\\ufe0f]?",st=it+rt+("(?:\\u200d(?:"+[tt,et,nt].join("|")+")"+it+rt+")*"),ot="(?:"+[tt+Z+"?",Z,et,nt,Y].join("|")+")",at=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+ot+st,"g"),ut=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),ct=parseInt,lt="object"==typeof e&&e&&e.Object===Object&&e,ht="object"==typeof self&&self&&self.Object===Object&&self,ft=lt||ht||Function("return this")();function dt(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}(e,(function(e){return t[e]}))}function pt(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function gt(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function vt(t){return function(t){return ut.test(t)}(t)?function(t){return t.match(at)||[]}(t):function(t){return t.split("")}(t)}var mt,yt,bt,wt=Function.prototype,St=Object.prototype,_t=ft["__core-js_shared__"],xt=(mt=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||""))?"Symbol(src)_1."+mt:"",Et=wt.toString,qt=St.hasOwnProperty,jt=St.toString,Ot=RegExp("^"+Et.call(qt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Rt=ft.Symbol,Ct=Rt?Rt.iterator:void 0,Tt=St.propertyIsEnumerable,Bt=Math.floor,Nt=(yt=Object.keys,bt=Object,function(t){return yt(bt(t))}),It=Math.random,kt=zt(ft,"DataView"),Lt=zt(ft,"Map"),Ht=zt(ft,"Promise"),Vt=zt(ft,"Set"),Ut=zt(ft,"WeakMap"),$t=Xt(kt),Dt=Xt(Lt),Wt=Xt(Ht),At=Xt(Vt),Mt=Xt(Ut);function Pt(t,e){var n=Zt(t)||function(t){return function(t){return re(t)&&te(t)}(t)&&qt.call(t,"callee")&&(!Tt.call(t,"callee")||jt.call(t)==U)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var s in t)!e&&!qt.call(t,s)||i&&("length"==s||Kt(s,r))||n.push(s);return n}function Ft(t){if(!ne(t)||function(t){return!!xt&&xt in t}(t))return!1;var e=ee(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Ot:G;return e.test(Xt(t))}function Qt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||St,e!==r)return Nt(t);var e,n,r,i=[];for(var s in Object(t))qt.call(t,s)&&"constructor"!=s&&i.push(s);return i}function Jt(t,e){return t+Bt(It()*(e-t+1))}function zt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(n)?n:void 0}var Gt=function(t){return jt.call(t)};function Kt(t,e){return!!(e=null==e?L:e)&&("number"==typeof t||X.test(t))&&t>-1&&t%1==0&&t<e}function Xt(t){if(null!=t){try{return Et.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Yt(t,e,n){var r,i,s,o=-1,a=function(t){if(!t)return[];if(te(t))return function(t){return"string"==typeof t||!Zt(t)&&re(t)&&jt.call(t)==A}(t)?vt(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(Ct&&t[Ct])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[Ct]());var e=Gt(t);return(e==$?pt:e==W?gt:ie)(t)}(t),u=a.length,c=u-1;for((n?function(t,e,n){if(!ne(n))return!1;var r=typeof e;return!!("number"==r?te(n)&&Kt(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}(t,e,n):void 0===e)?e=1:(r=function(t){var e=function(t){return t?(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||re(t)&&jt.call(t)==M}(t))return V;if(ne(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ne(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Q,"");var n=z.test(t);return n||K.test(t)?ct(t.slice(2),n?2:8):J.test(t)?V:+t}(t))===k||t===-1/0?(t<0?-1:1)*H:t==t?t:0:0===t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}(e),i=0,s=u,r==r&&(void 0!==s&&(r=r<=s?r:s),void 0!==i&&(r=r>=i?r:i)),e=r);++o<e;){var l=Jt(o,c),h=a[l];a[l]=a[o],a[o]=h}return a.length=e,a}(kt&&Gt(new kt(new ArrayBuffer(1)))!=F||Lt&&Gt(new Lt)!=$||Ht&&Gt(Ht.resolve())!=D||Vt&&Gt(new Vt)!=W||Ut&&Gt(new Ut)!=P)&&(Gt=function(t){var e=jt.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?Xt(n):void 0;if(r)switch(r){case $t:return F;case Dt:return $;case Wt:return D;case At:return W;case Mt:return P}return e});var Zt=Array.isArray;function te(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=L}(t.length)&&!ee(t)}function ee(t){var e=ne(t)?jt.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function ne(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function re(t){return!!t&&"object"==typeof t}function ie(t){return t?dt(t,function(t){return te(t)?Pt(t):Qt(t)}(t)):[]}I=function(t){return Yt(t,4294967295)};class se{setDuration(t){const e=this.audio.duration?this.audio.duration:0;this.audio.currentTime=e*t/100,this.renderDurationTime()}renderDurationTime(){const t=this.audio.currentTime?this.audio.currentTime:0,e=this.audio.duration?this.audio.duration:0,n=Math.floor(t%60),r=Math.floor(t/60),i=Math.floor(e%60),s=Math.floor(e/60);this.refs.currentTime.textContent=`${r}:${n.toString().padStart(2,"0")}`,this.refs.durationTime.textContent=`${s}:${i.toString().padStart(2,"0")}`,this.durationControl.setValue(e?Math.floor(100*t/e):0)}onPlayStarted(t){}setVolume(t){this.audio.volume=t/100,this.setVolumeIcon()}playPrev(){this.currentSong=this.currentSong<=0?this.songs.length-1:this.currentSong-1,this.audio.src=this.songs[this.currentSong].src,this.audio.currentTime=0,this.refs.playBtn.dataset.action="play",this.playAudio(),this.refs.prevBtn.blur()}playNext(){this.currentSong=(this.currentSong+1)%this.songs.length,this.audio.src=this.songs[this.currentSong].src,this.audio.currentTime=0,this.refs.playBtn.dataset.action="play",this.playAudio(),this.refs.nextBtn.blur()}playAudio(){"play"===this.refs.playBtn.dataset.action?(this.audio.play(),this.refs.playBtn.dataset.action="pause"):(this.refs.playBtn.dataset.action="play",this.audio.pause()),this.setActiveSong(),this.refs.playBtn.blur()}setActiveSong(){const t=this.refs.songsList.querySelector(".player__song--active");t&&t.classList.remove("player__song--active"),this.refs.songsList.children[this.currentSong].classList.add("player__song--active")}renderSongsList(){const t=this.songs.map((({title:t})=>`\n        <li class="player__song">${t}</li>`)).join("\n");this.refs.songsList.innerHTML=t}setVolumeIcon(){const t=this.volumeControl.getValue();let e;e=t>66?"high-volume":t>33?"mid-volume":t>0?"low-volume":"mute-volume",this.refs.volumeBtn.dataset.icon=e}onVolumeClick(){const t=this.volumeControl.getValue()>0?0:50;this.volumeControl.setValue(t),this.setVolume(t)}bindEvents(){this.refs.playBtn.addEventListener("click",this.playAudio.bind(this)),this.refs.prevBtn.addEventListener("click",this.playPrev.bind(this)),this.refs.nextBtn.addEventListener("click",this.playNext.bind(this)),this.refs.volumeBtn.addEventListener("click",this.onVolumeClick.bind(this)),this.audio.addEventListener("canplay",this.onPlayStarted.bind(this)),this.audio.addEventListener("ended",this.playNext.bind(this))}getRefs(t){const e=document.querySelector(t);return{playBtn:e.querySelector('[data-action="play"]'),prevBtn:e.querySelector('[data-action="prev"]'),nextBtn:e.querySelector('[data-action="next"]'),volumeBtn:e.querySelector(".player__volume-controls .button"),currentTime:e.querySelector(".player__duration-controls > .player__duration-time:first-of-type"),durationTime:e.querySelector(".player__duration-controls > .player__duration-time:last-of-type"),songsList:e.querySelector(".player__list")}}constructor(t){this.refs=this.getRefs(t),this.audio=new Audio,this.songs=I(N),this.currentSong=0,this.audio.src=this.songs[this.currentSong].src,this.volumeControl=new q({rootSelector:".player__volume-controls .range",onInputCallback:this.setVolume.bind(this)}),this.volumeControl.setValue(50),this.setVolume(50),this.durationControl=new q({rootSelector:".player__duration-controls .range",onInputCallback:this.setDuration.bind(this)}),this.durationControl.setRange(0,this.audio.duration),this.setDuration(0),this.renderSongsList(),this.setActiveSong(),this.bindEvents()}}class oe{onButtonClick(t){this.lastUpdateTime=0,this.updateQuote(),this.refs.button.blur()}async fetchQuotes(){const t=await fetch(this.url),e=await t.json();this.quotes=e}getRandomQuote(){return this.quotes[Math.ceil(Math.random()*this.quotes.length)]}updateQuote(){if(!this.quotes)return;if(Date.now()-this.lastUpdateTime<this.updateInterval)return;this.lastUpdateTime=Date.now();const{quote:t,author:e}=this.getRandomQuote();this.refs.text.textContent=t,this.refs.author.textContent=e}getRefs(t){const e=document.querySelector(t);return{button:e.querySelector(".quote__button"),text:e.querySelector(".quote__text"),author:e.querySelector(".quote__author")}}constructor(t,e){this.refs=this.getRefs(t),this.url="quotes.json",this.quotes=null,this.lastUpdateTime=0,this.updateInterval=6e4*e,this.refs.button.addEventListener("click",this.onButtonClick.bind(this)),this.fetchQuotes()}}const ae={morning:"sunrise landscape",afternoon:"sunny day landscape",evening:"sunset landscape",night:"night landscape"};class ue{getRefs(t){const e=document.querySelector(t),[n,r]=e.querySelectorAll(".slider__button");return{bg:document.querySelector(".slider__bg"),prevBtn:n,nextBtn:r}}addHandlers(){this.refs.prevBtn.addEventListener("click",this.prevHandler),this.refs.nextBtn.addEventListener("click",this.nextHandler)}removeHandlers(){this.refs.prevBtn.removeEventListener("click",this.prevHandler),this.refs.nextBtn.removeEventListener("click",this.nextHandler)}setPrevBg(){this.removeHandlers(),this.setPrevNum(),this.setBg(),this.refs.prevBtn.blur()}setNextBg(){this.removeHandlers(),this.setNextNum(),this.setBg(),this.refs.nextBtn.blur()}updateBg(t){this.timeOfDay!==t&&(this.timeOfDay=t,this.lastUpdateTime=0),Date.now()-this.lastUpdateTime<this.updateInterval||(this.setBg(),this.lastUpdateTime=Date.now())}async setBg(){const t=new Image;t.src=await this.getUnsplashUrl(),t.addEventListener("load",(()=>this.refs.bg.style.backgroundImage=`url('${t.src}')`))}setPrevNum(){return this.slideNum=this.slideNum<=1?this.slidesQty:this.slideNum-1}setNextNum(){return this.slideNum=this.slideNum++%this.slidesQty+1}async getRsUrl(){return`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.timeOfDay}/${this.slideNum.toString().padStart(2,"0")}.jpg`}async getUnsplashUrl(){const t=new URLSearchParams({orientation:"landscape",client_id:"GLvO30R_mbNR5Qf1kAG2O2PmBiHVjDg5JQ5y836_iWg",query:ae[this.timeOfDay]}),e=await fetch("https://api.unsplash.com/photos/random?"+t.toString());return 200===e.status?(await e.json()).urls.full:this.getRsUrl()}constructor(t,e){this.refs=this.getRefs(t),this.slidesQty=20,this.slideNum=Math.floor(Math.random()*this.slidesQty+1),this.lastUpdateTime=0,this.updateInterval=6e4*e,this.prevHandler=this.setPrevBg.bind(this),this.nextHandler=this.setNextBg.bind(this),this.addHandlers(),this.refs.bg.addEventListener("transitionend",(()=>this.addHandlers()))}}var ce={},le=/^\s+|\s+$/g,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,de=/^0o[0-7]+$/i,pe=parseInt,ge="object"==typeof e&&e&&e.Object===Object&&e,ve="object"==typeof self&&self&&self.Object===Object&&self,me=ge||ve||Function("return this")(),ye=Object.prototype.toString,be=Math.max,we=Math.min,Se=function(){return me.Date.now()};function _e(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function xe(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==ye.call(t)}(t))return NaN;if(_e(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_e(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(le,"");var n=fe.test(t);return n||de.test(t)?pe(t.slice(2),n?2:8):he.test(t)?NaN:+t}ce=function(t,e,n){var r,i,s,o,a,u,c=0,l=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,s=i;return r=i=void 0,c=e,o=t.apply(s,n)}function p(t){return c=t,a=setTimeout(v,e),l?d(t):o}function g(t){var n=t-u;return void 0===u||n>=e||n<0||h&&t-c>=s}function v(){var t=Se();if(g(t))return m(t);a=setTimeout(v,function(t){var n=e-(t-u);return h?we(n,s-(t-c)):n}(t))}function m(t){return a=void 0,f&&r?d(t):(r=i=void 0,o)}function y(){var t=Se(),n=g(t);if(r=arguments,i=this,u=t,n){if(void 0===a)return p(u);if(h)return a=setTimeout(v,e),d(u)}return void 0===a&&(a=setTimeout(v,e)),o}return e=xe(e)||0,_e(n)&&(l=!!n.leading,s=(h="maxWait"in n)?be(xe(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=i=a=void 0},y.flush=function(){return void 0===a?o:m(Se())},y};class Ee{async updateWeather(){if(Date.now()-this.lastUpdateTime<this.updateInterval)return;const t=await this.fetchWeather();this.lastUpdateTime=Date.now(),t?200===t.cod?this.renderWeather(t):this.clearWeather(t):this.clearWeather()}getCity(){return this.refs.input.value.trim()}async fetchWeather(){const t=this.getCity();this.apiUrl.searchParams.set("q",t||"Minsk");const e=await fetch(this.apiUrl);return await e.json()}renderWeather(t){this.refs.icon.className=`weather__icon owf owf-lg owf-${t.weather[0].id}`,this.refs.temperature.textContent=`${t.main.temp.toFixed(0)}°C`,this.refs.description.textContent=t.weather[0].description,this.refs.wind.textContent=`${t.wind.speed.toFixed(0)} m/s`,this.refs.humidity.textContent=`${t.main.humidity.toFixed(0)} %`,this.refs.mainInfo.display="block",this.refs.addInfo.display="block"}clearWeather(t){this.refs.icon.className="weather__icon owf",this.refs.temperature.textContent="",this.refs.wind.textContent="",this.refs.humidity.textContent="",this.refs.mainInfo.display="none",this.refs.addInfo.display="none",this.refs.description.textContent=t?t.message:""}setInputWidth(){const t=this.refs.input.value.trim();this.refs.test.textContent=t?this.refs.input.value:this.refs.input.placeholder,this.refs.input.style.width=this.refs.test.offsetWidth+"px"}onCityChange(t){this.lastUpdateTime=0,this.updateWeather()}bindEvents(){this.refs.input.addEventListener("input",ce(this.onCityChange.bind(this),1e3)),this.refs.input.addEventListener("input",this.setInputWidth.bind(this))}getRefs(t){const e=document.querySelector(t);return{input:e.querySelector(".weather__input"),mainInfo:e.querySelector(".weather__main-info"),icon:e.querySelector(".weather__icon"),temperature:e.querySelector(".weather__temperature"),description:e.querySelector(".weather__description"),addInfo:e.querySelector(".weather__add-info"),wind:e.querySelector(".weather__wind"),humidity:e.querySelector(".weather__humidity"),test:e.querySelector(".weather__test")}}constructor(t,e,n){this.refs=this.getRefs(t),this.refs.input.value=e||"",this.apiUrl=new URL("https://api.openweathermap.org/data/2.5/weather"),this.apiUrl.searchParams.set("appid","4a406d43d5aad2dbfda3cb2d7cd48b00"),this.apiUrl.searchParams.set("units","metric"),this.lastUpdateTime=0,this.updateInterval=6e4*n,this.setInputWidth(),this.bindEvents()}}new class{init(){const{name:t,city:e}=this.getSavedValues();this.clock=new o(".clock"),this.greet=new a(".greet",t),this.slider=new ue(".slider",60),this.weather=new Ee(".weather",e,30),this.quote=new oe(".quote",60),this.player=new se(".player"),this.updateInfo()}bindEvents(){window.onload=this.init.bind(this),window.setInterval(this.updateInfo.bind(this),1e3),window.addEventListener("beforeunload",this.saveValues.bind(this))}updateInfo(){const t=this.clock.updateTime();this.greet.updateText(t),this.slider.updateBg(t),this.weather.updateWeather(),this.quote.updateQuote(),this.player.renderDurationTime()}saveValues(){const t=this.greet.getName(),e=this.weather.getCity();window.localStorage.setItem("name",t),window.localStorage.setItem("city",e)}getSavedValues(){return{city:window.localStorage.getItem("city"),name:window.localStorage.getItem("name")}}constructor(){this.bindEvents()}}}();
//# sourceMappingURL=index.943b445e.js.map
