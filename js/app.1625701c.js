(function(){"use strict";var e={6554:function(e,t,n){var r=n(7195),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Simon the game!")]),t("h3",[e._v("Score - "+e._s(e.score))]),t("div",{attrs:{id:"simon-board"}},e._l(e.simonColors,(function(n,r){return t("div",{key:r,staticClass:"simon-button",style:{backgroundColor:n},on:{click:function(t){return e.handleButtonClick(r)}}})})),0),t("button",{on:{click:e.startGame}},[e._v("Start Game")])])},u=[],i=(n(560),{name:"App",data(){return{score:0,simonColors:["red","blue","green","yellow"],gameStarted:!1,sequence:[],playerSequence:[]}},methods:{startGame(){this.gameStarted=!0,this.sequence=[],this.playerSequence=[],this.addToSequence(),this.playSequence()},addToSequence(){const e=Math.floor(4*Math.random());this.sequence.push(e),console.log(e)},playSequence(){let e=0;const t=setInterval((()=>{this.highlightButton(this.sequence[e]),e++,e>=this.sequence.length&&clearInterval(t)}),1e3)},highlightButton(e){const t=document.getElementsByClassName("simon-button")[e],n=t.style.backgroundColor;document.getElementsByClassName("simon-button")[e].style.backgroundColor="orange",setTimeout((()=>{document.getElementsByClassName("simon-button")[e].style.backgroundColor=n}),1e3)},handleButtonClick(e){this.gameStarted&&(this.playerSequence.push(e),this.highlightButton(e),this.checkSequence()?this.playerSequence.length===this.sequence.length&&(this.score+=1,alert("Correct! Next round 🏆"),this.playerSequence=[],this.addToSequence(),setTimeout((()=>this.playSequence()),1e3)):(alert("Game Over 🥲"),this.gameStarted=!1))},checkSequence(){for(let e=0;e<this.playerSequence.length;e++)if(this.playerSequence[e]!==this.sequence[e])return!1;return!0}}}),s=i,a=n(1001),c=(0,a.Z)(s,o,u,!1,null,null,null),l=c.exports;r.ZP.config.productionTip=!1,new r.ZP({render:e=>e(l)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(s=!1,u<i&&(i=u));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,i=r[0],s=r[1],a=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(a)var l=a(n)}for(t&&t(r);c<i.length;c++)u=i[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(l)},r=self["webpackChunksimon_the_game_app"]=self["webpackChunksimon_the_game_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6554)}));r=n.O(r)})();
//# sourceMappingURL=app.1625701c.js.map