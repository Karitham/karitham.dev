var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,l=!1;function a(t,e,n,o){for(;t<e;){const s=t+(e-t>>1);n(s)<=o?t=s+1:e=s}return t}function u(t,e){l?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const r=a(1,s+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[r]+1;const i=r+1;n[i]=t,s=Math.max(i,s)}const r=[],i=[];let c=e.length-1;for(let t=n[s]+1;0!=t;t=o[t-1]){for(r.push(e[t-1]);c>=t;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);r.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<r.length&&i[e].claim_order>=r[n].claim_order;)n++;const o=n<r.length?r[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function f(t,e,n){l&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(){return m("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){c=t}function k(){if(!c)throw new Error("Function called outside component initialization");return c}function w(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function _(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const y=[],x=[],I=[],E=[],L=Promise.resolve();let j=!1;function C(){j||(j=!0,L.then(A))}function D(t){I.push(t)}let T=!1;const W=new Set;function A(){if(!T){T=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];$(e),N(e.$$)}for($(null),y.length=0;x.length;)x.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];W.has(e)||(W.add(e),e())}I.length=0}while(y.length);for(;E.length;)E.pop()();j=!1,T=!1,W.clear()}}function N(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const P=new Set;let O;function S(){O={r:0,c:[],p:O}}function H(){O.r||s(O.c),O=O.p}function K(t,e){t&&t.i&&(P.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),O.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function R(t,e){const n={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],c=e[r];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[r]=c}else for(const t in i)s[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function U(t){t&&t.c()}function z(t,e,o,i){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,o),i||D((()=>{const e=l.map(n).filter(r);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(D)}function B(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,n,r,i,a,u,f=[-1]){const d=c;$(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let m=!1;if(p.ctx=r?r(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),m&&function(t,e){-1===t.$$.dirty[0]&&(y.push(t),C(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),m=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){l=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),z(e,n.target,n.anchor,n.customElement),l=!1,A()}$(d)}class F{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function Q(t,e){return{subscribe:V(t,e).subscribe}}function V(e,n=t){let o;const s=[];function r(t){if(i(e,t)&&(e=t,o)){const t=!Y.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,c=t){const l=[i,c];return s.push(l),1===s.length&&(o=n(r)||t),i(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function X(e,n,o){const i=!Array.isArray(e),c=i?[e]:e,l=n.length<2;return Q(o,(e=>{let o=!1;const a=[];let u=0,f=t;const h=()=>{if(u)return;f();const o=n(i?a[0]:a,e);l?e(o):f=r(o)?o:t},d=c.map(((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>{a[n]=t,u&=~(1<<n),o&&h()}),(()=>{u|=1<<n}))));return o=!0,h(),function(){s(d),f()}}))}function J(t){let n,o,s;const r=[t[2]];var i=t[0];function c(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}return i&&(n=new i(c()),n.$on("routeEvent",t[7])),{c(){n&&U(n.$$.fragment),o=v()},m(t,e){n&&z(n,t,e),f(t,o,e),s=!0},p(t,e){const s=4&e?R(r,[M(t[2])]):{};if(i!==(i=t[0])){if(n){S();const t=n;G(t.$$.fragment,1,0,(()=>{B(t,1)})),H()}i?(n=new i(c()),n.$on("routeEvent",t[7]),U(n.$$.fragment),K(n.$$.fragment,1),z(n,o.parentNode,o)):n=null}else i&&n.$set(s)},i(t){s||(n&&K(n.$$.fragment,t),s=!0)},o(t){n&&G(n.$$.fragment,t),s=!1},d(t){t&&h(o),n&&B(n,t)}}}function Z(t){let n,o,s;const r=[{params:t[1]},t[2]];var i=t[0];function c(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}return i&&(n=new i(c()),n.$on("routeEvent",t[6])),{c(){n&&U(n.$$.fragment),o=v()},m(t,e){n&&z(n,t,e),f(t,o,e),s=!0},p(t,e){const s=6&e?R(r,[2&e&&{params:t[1]},4&e&&M(t[2])]):{};if(i!==(i=t[0])){if(n){S();const t=n;G(t.$$.fragment,1,0,(()=>{B(t,1)})),H()}i?(n=new i(c()),n.$on("routeEvent",t[6]),U(n.$$.fragment),K(n.$$.fragment,1),z(n,o.parentNode,o)):n=null}else i&&n.$set(s)},i(t){s||(n&&K(n.$$.fragment,t),s=!0)},o(t){n&&G(n.$$.fragment,t),s=!1},d(t){t&&h(o),n&&B(n,t)}}}function tt(t){let e,n,o,s;const r=[Z,J],i=[];function c(t,e){return t[1]?0:1}return e=c(t),n=i[e]=r[e](t),{c(){n.c(),o=v()},m(t,n){i[e].m(t,n),f(t,o,n),s=!0},p(t,[s]){let l=e;e=c(t),e===l?i[e].p(t,s):(S(),G(i[l],1,1,(()=>{i[l]=null})),H(),n=i[e],n?n.p(t,s):(n=i[e]=r[e](t),n.c()),K(n,1),n.m(o.parentNode,o))},i(t){s||(K(n),s=!0)},o(t){G(n),s=!1},d(t){i[e].d(t),t&&h(o)}}}function et(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const nt=Q(null,(function(t){t(et());const e=()=>{t(et())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));X(nt,(t=>t.location)),X(nt,(t=>t.querystring));const ot=V(void 0);function st(t,e,n){let{routes:o={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,s,r,i=[],c="",l=t.split("/");for(l[0]||l.shift();s=l.shift();)"*"===(n=s[0])?(i.push("wild"),c+="/(.*)"):":"===n?(o=s.indexOf("?",1),r=s.indexOf(".",1),i.push(s.substring(1,~o?o:~r?r:s.length)),c+=~o&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(c+=(~o?"?":"")+"\\"+s.substring(r))):c+="/"+s;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const e=t.match(s);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,e)=>{c.push(new i(e,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let l=null,a=null,u={};const f=w();async function h(t,e){await(C(),L),f(t,e)}let d=null,p=null;var m;r&&(p=t=>{d=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",p),m=()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)},k().$$.after_update.push(m));let g=null,v=null;const b=nt.subscribe((async t=>{g=t;let e=0;for(;e<c.length;){const o=c[e].match(t.location);if(!o){e++;continue}const s={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await c[e].checkConditions(s))return n(0,l=null),v=null,void h("conditionsFailed",s);h("routeLoading",Object.assign({},s));const r=c[e].component;if(v!=r){r.loading?(n(0,l=r.loading),v=r,n(1,a=r.loadingParams),n(2,u={}),h("routeLoaded",Object.assign({},s,{component:l,name:l.name,params:a}))):(n(0,l=null),v=null);const e=await r();if(t!=g)return;n(0,l=e&&e.default||e),v=r}return o&&"object"==typeof o&&Object.keys(o).length?n(1,a=o):n(1,a=null),n(2,u=c[e].props),void h("routeLoaded",Object.assign({},s,{component:l,name:l.name,params:a})).then((()=>{ot.set(a)}))}n(0,l=null),v=null,ot.set(void 0)}));return function(t){k().$$.on_destroy.push(t)}((()=>{b(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,s=t.prefix),"restoreScrollState"in t&&n(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[l,a,u,o,s,r,function(e){_.call(this,t,e)},function(e){_.call(this,t,e)}]}class rt extends F{constructor(t){super(),q(this,t,st,tt,i,{routes:3,prefix:4,restoreScrollState:5})}}function it(t,e,n){const o=t.slice();return o[1]=e[n],o}function ct(t,e,n){const o=t.slice();return o[4]=e[n],o}function lt(t,e,n){const o=t.slice();return o[7]=e[n],o}function at(e){let n,o=e[7]+"";return{c(){n=p("p"),b(n,"class","home-desc svelte-1i9vke6")},m(t,e){f(t,n,e),n.innerHTML=o},p:t,d(t){t&&h(n)}}}function ut(e){let n,o,s;return{c(){n=p("a"),o=p("img"),o.src!==(s="https://avatars.githubusercontent.com/u/57440386")&&b(o,"src","https://avatars.githubusercontent.com/u/57440386"),b(o,"alt",e[4].Name),b(o,"class","svelte-1i9vke6"),b(n,"href",e[4].Link),b(n,"target","_blank"),b(n,"class","svelte-1i9vke6")},m(t,e){f(t,n,e),u(n,o)},p:t,d(t){t&&h(n)}}}function ft(e){let n,o,s;return{c(){n=p("a"),o=p("img"),o.src!==(s=e[4].Image)&&b(o,"src",s),b(o,"alt",e[4].Name),b(o,"class","svelte-1i9vke6"),b(n,"href",e[4].Link),b(n,"target","_blank"),b(n,"class","svelte-1i9vke6")},m(t,e){f(t,n,e),u(n,o)},p:t,d(t){t&&h(n)}}}function ht(t){let e,n,o,s,r,i,c,l,a,d,v=t[4].Name+"",$=t[4].Desc+"";let k=function(t,e){return t[4].Image?ft:ut}(t)(t);return{c(){e=p("div"),n=p("h3"),o=p("a"),s=m(v),i=g(),k.c(),c=g(),l=p("p"),a=m($),d=g(),b(o,"href",r=t[4].Link),b(o,"target","_blank"),b(o,"class","svelte-1i9vke6"),b(n,"class","project-name"),b(l,"class","project-desc svelte-1i9vke6"),b(e,"class","project svelte-1i9vke6")},m(t,r){f(t,e,r),u(e,n),u(n,o),u(o,s),u(e,i),k.m(e,null),u(e,c),u(e,l),u(l,a),u(e,d)},p(t,e){k.p(t,e)},d(t){t&&h(e),k.d()}}}function dt(e){let n,o,s,r,i,c,l,a;return{c(){n=p("div"),o=p("a"),s=p("img"),a=g(),s.src!==(r=e[1].Icon)&&b(s,"src",r),b(s,"alt",i=e[1].Title),b(s,"class","logo svelte-1i9vke6"),b(s,"title",c=e[1].Desc),b(o,"href",l=e[1].Link),b(o,"target","_blank"),b(o,"class","svelte-1i9vke6"),b(n,"class","contact-card svelte-1i9vke6")},m(t,e){f(t,n,e),u(n,o),u(o,s),u(n,a)},p:t,d(t){t&&h(n)}}}function pt(e){let n,o,s,r,i,c,l,a,m,v,$,k,w,_,y,x,I,E,L,j,C,D,T,W,A,N,P,O,S,H,K,G,R,M,U,z,B,q,F,Y,Q,V,X,J,Z,tt,et;document.title=n=e[0].PageTitle;let nt=e[0].HomeDesc,ot=[];for(let t=0;t<nt.length;t+=1)ot[t]=at(lt(e,nt,t));let st=e[0].Projects.Cards,rt=[];for(let t=0;t<st.length;t+=1)rt[t]=ht(ct(e,st,t));let ut=e[0].WhoIs.Contact.Links,ft=[];for(let t=0;t<ut.length;t+=1)ft[t]=dt(it(e,ut,t));return{c(){o=g(),s=p("main"),r=p("div"),i=p("h3"),c=p("a"),c.textContent=`${e[0].PageTitle}`,l=g(),a=p("div"),m=p("div"),v=p("h1"),v.textContent=`${e[0].HomeMessage}`,$=g(),k=p("h2"),k.textContent=`${e[0].HomeSub}`,w=g();for(let t=0;t<ot.length;t+=1)ot[t].c();_=g(),y=p("div"),x=p("img"),E=g(),L=p("div"),j=p("div"),C=p("h1"),C.textContent=`${e[0].Projects.Title}`,D=g(),T=p("h2"),T.textContent=`${e[0].Projects.Desc}`,W=g(),A=p("div");for(let t=0;t<rt.length;t+=1)rt[t].c();N=g(),P=p("div"),O=p("div"),S=p("h1"),S.textContent=`${e[0].WhoIs.Title}`,H=g(),K=p("p"),K.textContent=`${e[0].WhoIs.Desc}`,G=g(),R=p("div"),M=p("div"),U=p("h3"),U.textContent=`${e[0].WhoIs.Where.Title}`,z=g(),B=p("p"),B.textContent=`${e[0].WhoIs.Where.Desc}`,q=g(),F=p("div"),Y=p("h3"),Y.textContent=`${e[0].WhoIs.Who.Title}`,Q=g(),V=p("p"),V.textContent=`${e[0].WhoIs.Who.Desc}`,X=g(),J=p("div"),Z=p("h3"),Z.textContent=`${e[0].WhoIs.Contact.Title}`,tt=g(),et=p("div");for(let t=0;t<ft.length;t+=1)ft[t].c();b(c,"href","/"),b(i,"class","page-title"),b(v,"class","home-message"),b(k,"class","home-sub blue"),b(m,"class","left svelte-1i9vke6"),b(x,"class","pfp svelte-1i9vke6"),x.src!==(I=e[0].HomeImage)&&b(x,"src",I),b(x,"alt","Karitham profile"),b(y,"class","right svelte-1i9vke6"),b(a,"class","body svelte-1i9vke6"),b(r,"id","p1"),b(r,"class","page svelte-1i9vke6"),b(C,"class","project-title"),b(T,"class","project-sub blue"),b(A,"class","cards svelte-1i9vke6"),b(j,"class","body svelte-1i9vke6"),b(L,"id","p2"),b(L,"class","page svelte-1i9vke6"),b(S,"class","whois-title"),b(K,"class","whois-desc svelte-1i9vke6"),b(U,"class","whois-name blue"),b(B,"class","whois-desc svelte-1i9vke6"),b(M,"class","whois-sub"),b(Y,"class","whois-name blue"),b(V,"class","whois-desc svelte-1i9vke6"),b(F,"class","whois-sub"),b(Z,"class","whois-name blue"),b(et,"class","whois-desc cards svelte-1i9vke6"),b(J,"class","whois-sub"),b(R,"class","cards svelte-1i9vke6"),b(O,"class","body svelte-1i9vke6"),b(P,"id","p3"),b(P,"class","page svelte-1i9vke6")},m(t,e){f(t,o,e),f(t,s,e),u(s,r),u(r,i),u(i,c),u(r,l),u(r,a),u(a,m),u(m,v),u(m,$),u(m,k),u(m,w);for(let t=0;t<ot.length;t+=1)ot[t].m(m,null);u(a,_),u(a,y),u(y,x),u(s,E),u(s,L),u(L,j),u(j,C),u(j,D),u(j,T),u(j,W),u(j,A);for(let t=0;t<rt.length;t+=1)rt[t].m(A,null);u(s,N),u(s,P),u(P,O),u(O,S),u(O,H),u(O,K),u(O,G),u(O,R),u(R,M),u(M,U),u(M,z),u(M,B),u(R,q),u(R,F),u(F,Y),u(F,Q),u(F,V),u(R,X),u(R,J),u(J,Z),u(J,tt),u(J,et);for(let t=0;t<ft.length;t+=1)ft[t].m(et,null)},p(t,[e]){if(1&e&&n!==(n=t[0].PageTitle)&&(document.title=n),1&e){let n;for(nt=t[0].HomeDesc,n=0;n<nt.length;n+=1){const o=lt(t,nt,n);ot[n]?ot[n].p(o,e):(ot[n]=at(o),ot[n].c(),ot[n].m(m,null))}for(;n<ot.length;n+=1)ot[n].d(1);ot.length=nt.length}if(1&e){let n;for(st=t[0].Projects.Cards,n=0;n<st.length;n+=1){const o=ct(t,st,n);rt[n]?rt[n].p(o,e):(rt[n]=ht(o),rt[n].c(),rt[n].m(A,null))}for(;n<rt.length;n+=1)rt[n].d(1);rt.length=st.length}if(1&e){let n;for(ut=t[0].WhoIs.Contact.Links,n=0;n<ut.length;n+=1){const o=it(t,ut,n);ft[n]?ft[n].p(o,e):(ft[n]=dt(o),ft[n].c(),ft[n].m(et,null))}for(;n<ft.length;n+=1)ft[n].d(1);ft.length=ut.length}},i:t,o:t,d(t){t&&h(o),t&&h(s),d(ot,t),d(rt,t),d(ft,t)}}}function mt(t){return[{PageTitle:"Kar's HQ.",HomeMessage:"This is Karitham.",ResumeLink:"/other/resume.pdf",HomeSub:"Welcome to my HQ.",HomeDesc:["Computer engineering student.","Open Source Enthusiast.","Gamer.","Nerd.",'<a href="{text.ResumeLink}" class="blue">View my Resume.</a>'],HomeImage:"https://avatars.githubusercontent.com/u/57440386",Projects:{Title:"Projects.",Desc:"Open source projects, made with love.",Cards:[{Name:"Goapi-gen",Desc:"Utilities for generating Go boilerplate code for services based on OpenAPI 3.0 API definitions.",Link:"https://github.com/Karitham/handlergen"},{Name:"WaifuBot",Desc:"Complete gacha game to collect and trade manga characters. Front-End and API available for advanced use, to promote trades between players. Available on over 300 discord guilds, with thousands of players.",Link:"https://github.com/Karitham/WaifuBot",Image:"https://raw.githubusercontent.com/go-waifubot/WaifuGUI/solidjs/src/assets/YMD.png"},{Name:"zp",Desc:"A blazing fast shell prompt cross compatible written in pure zig.",Link:"https://github.com/Karitham/zp",Image:"/img/zp.jpg"},{Name:"Genial",Desc:"A code-generation helper for golang. Build an AST, genial writes the code.",Link:"https://github.com/Karitham/go-genial"},{Name:"Corde",Desc:"A high level discord reverse-webhook wrapper, to enable fast micro-service oriented developments of discord bots.",Link:"https://github.com/Karitham/corde"},{Name:"WaifuGUI",Desc:"A web based GUI for the waifu bot. Features a simple yet extensible interface to sort, search and compare user lists.",Link:"https://github.com/go-waifubot/WaifuGUI",Image:"https://raw.githubusercontent.com/go-waifubot/WaifuGUI/solidjs/src/assets/YMD.png"}]},WhoIs:{Title:"WhoIS",Desc:"",Where:{Title:"Where?",Desc:"Lille. France."},Who:{Title:"Who?",Desc:"Pery Pierre-Louis."},Contact:{Title:"Contact",Links:[{Title:"Email",Link:"mailto://kar@karitham.dev",Icon:"/img/mail.svg"},{Title:"GitHub",Link:"https://github.com/Karitham",Icon:"/img/gh.svg"},{Title:"Linkedin",Link:"https://www.linkedin.com/in/pl-pery",Icon:"/img/linkedin.svg"},{Title:"Twitter",Link:"https://twitter.com/KarithamIRL",Icon:"/img/twitter.svg"},{Title:"Discord",Icon:"/img/discord.svg",Link:"https://discord.com/users/206794847581896705",Desc:"Karitham#0577"}]}}}]}class gt extends F{constructor(t){super(),q(this,t,mt,pt,i,{})}}function vt(e){let n,o,s;return o=new rt({props:{routes:e[0]}}),{c(){n=p("body"),U(o.$$.fragment)},m(t,e){f(t,n,e),z(o,n,null),s=!0},p:t,i(t){s||(K(o.$$.fragment,t),s=!0)},o(t){G(o.$$.fragment,t),s=!1},d(t){t&&h(n),B(o)}}}function bt(t){return[{"/":gt}]}return new class extends F{constructor(t){super(),q(this,t,bt,vt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
