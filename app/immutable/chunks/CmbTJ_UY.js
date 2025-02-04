var wt=Object.defineProperty;var yt=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>yt(e,typeof t!="symbol"?t+"":t,n);import{n as he,s as _t,o as $e,t as bt}from"./DYjCt7Qj.js";new URL("sveltekit-internal://");function vt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function kt(e){return e.split("%25").map(decodeURI).join("%25")}function At(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function pe({href:e}){return e.split("#")[0]}function St(e,t,n,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return r}function Et(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Rt(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}const It=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&M.delete(ve(e)),It(e,t));const M=new Map;function Ut(e,t){const n=ve(e,t),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&M.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Rt(r)),Promise.resolve(new Response(r,s))}return window.fetch(e,t)}function Lt(e,t,n){if(M.size>0){const a=ve(e,n),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(t,n)}function ve(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${Et(...r)}"]`}return a}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function xt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ct(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ge(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ge(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const u=Tt.exec(c),[,p,w,f,m]=u;return t.push({name:f,matcher:m,optional:!!p,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return ge(c)}).join("")}).join("")}/?$`),params:t}}function Pt(e){return!/^\([^)]+\)$/.test(e)}function Ct(e){return e.slice(1).split("/").filter(Pt)}function Ot(e,t,n){const a={},r=e.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=r[o-i];if(c.chained&&c.rest&&i&&(l=r.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const u=t[o+1],p=r[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ge(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:w}=xt(o),f={id:o,exec:m=>{const h=p.exec(m);if(h)return Ot(h,w,a)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[r.has(o),e[o]]}}function We(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function je(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const j=[];function ke(e,t=he){let n;const a=new Set;function r(o){if(_t(e,o)&&(e=o,n)){const c=!j.length;for(const l of a)l[1](),j.push(l,e);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function s(o){r(o(e))}function i(o,c=he){const l=[o,c];return a.add(l),a.size===1&&(n=t(r,s)||he),o(e),()=>{a.delete(l),a.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}var He;const T=((He=globalThis.__sveltekit_ks35oz)==null?void 0:He.base)??"";var Ke;const $t=((Ke=globalThis.__sveltekit_ks35oz)==null?void 0:Ke.assets)??T,jt="1738659545948",Ye="sveltekit:snapshot",Je="sveltekit:scroll",Xe="sveltekit:states",Dt="sveltekit:pageurl",F="sveltekit:history",K="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},X=location.origin;function Ze(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ae(){return{x:pageXOffset,y:pageYOffset}}function D(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const De={...Z,"":Z.hover};function Qe(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function et(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Qe(e)}}function ye(e,t,n){let a;try{if(a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,s=!a||!!r||ie(a,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===X&&e.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function Q(e){let t=null,n=null,a=null,r=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)a===null&&(a=D(o,"preload-code")),r===null&&(r=D(o,"preload-data")),t===null&&(t=D(o,"keepfocus")),n===null&&(n=D(o,"noscroll")),s===null&&(s=D(o,"reload")),i===null&&(i=D(o,"replacestate")),o=Qe(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:De[a??"off"],preload_data:De[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Fe(e){const t=ke(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const tt={v:()=>{}};function Ft(){const{set:e,subscribe:t}=ke(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${$t}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==jt;return i&&(e(!0),tt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function ie(e,t,n){return e.origin!==X||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Ve(e){const t=Bt(e),n=new ArrayBuffer(t.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,t.charCodeAt(r));return n}const Vt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Bt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,a=0;for(let r=0;r<e.length;r++)n<<=6,n|=Vt.indexOf(e[r]),a+=6,a===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,t+=String.fromCharCode(n)):a===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const qt=-1,Gt=-2,Mt=-3,zt=-4,Ht=-5,Kt=-6;function Wt(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(s,i=!1){if(s===qt)return;if(s===Mt)return NaN;if(s===zt)return 1/0;if(s===Ht)return-1/0;if(s===Kt)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return a[s]=l(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const u=new Set;a[s]=u;for(let f=1;f<o.length;f+=1)u.add(r(o[f]));break;case"Map":const p=new Map;a[s]=p;for(let f=1;f<o.length;f+=2)p.set(r(o[f]),r(o[f+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);a[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=r(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],h=Ve(m),d=new f(h);a[s]=d;break}case"ArrayBuffer":{const f=o[1],m=Ve(f);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==Gt&&(c[l]=r(u))}}else{const c={};a[s]=c;for(const l in o){const u=o[l];c[l]=r(u)}}return a[s]}return r(0)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const Yt=new Set([...nt]);[...Yt];function Jt(e){return e.filter(t=>t!=null)}class ce{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Se{constructor(t,n){this.status=t,this.location=n}}class Ee extends Error{constructor(t,n,a){super(a),this.status=t,this.text=n}}const Xt="x-sveltekit-invalidated",Zt="x-sveltekit-trailing-slash";function ee(e){return e instanceof ce||e instanceof Ee?e.status:500}function Qt(e){return e instanceof Ee?e.text:"Internal Error"}let I,W,me;const en=$e.toString().includes("$$")||/function \w+\(\) \{\}/.test($e.toString());en?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},me={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},me=new class{constructor(){x(this,"current",$state.raw(!1))}},tt.v=()=>me.current=!0);function tn(e){Object.assign(I,e)}const nn="/__data.json",an=".html__data.json";function rn(e){return e.endsWith(".html")?e.replace(/\.html$/,an):e.replace(/\/$/,"")+nn}const on=new Set(["icon","shortcut icon","apple-touch-icon"]),$=We(Je)??{},Y=We(Ye)??{},C={url:Fe({}),page:Fe({}),navigating:ke(null),updated:Ft()};function Re(e){$[e]=Ae()}function sn(e,t){let n=e+1;for(;$[n];)delete $[n],n+=1;for(n=t+1;Y[n];)delete Y[n],n+=1}function B(e){return location.href=e.href,new Promise(()=>{})}async function at(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function Be(){}let Ie,_e,te,P,be,k;const ne=[],ae=[];let U=null;const rt=new Set,cn=new Set,z=new Set;let b={branch:[],error:null,url:null},Ue=!1,re=!1,qe=!0,J=!1,q=!1,ot=!1,Le=!1,st,E,L,N;const H=new Set;async function Rn(e,t,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),k=e,await((s=(r=e.hooks).init)==null?void 0:s.call(r)),Ie=Nt(e),P=document.documentElement,be=t,_e=e.nodes[0],te=e.nodes[1],_e(),te(),E=(i=history.state)==null?void 0:i[F],L=(o=history.state)==null?void 0:o[K],E||(E=L=Date.now(),history.replaceState({...history.state,[F]:E,[K]:L},""));const a=$[E];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await _n(be,n):mn(k.hash?mt(new URL(location.href)):location.href,{replaceState:!0}),yn()}function ln(){ne.length=0,Le=!1}function it(e){ae.some(t=>t==null?void 0:t.snapshot)&&(Y[e]=ae.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function ct(e){var t;(t=Y[e])==null||t.forEach((n,a)=>{var r,s;(s=(r=ae[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function Ge(){Re(E),je(Je,$),it(L),je(Ye,Y)}async function Te(e,t,n,a){return G({type:"goto",url:Ze(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(Le=!0),t.invalidate&&t.invalidate.forEach(wn)}})}async function fn(e){if(e.id!==(U==null?void 0:U.id)){const t={};H.add(t),U={id:e.id,token:t,promise:ft({...e,preload:t}).then(n=>(H.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function we(e){var n;const t=(n=await fe(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(a=>a==null?void 0:a[1]()))}function lt(e,t,n){var s;b=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(I,e.props.page),st=new k.root({target:t,props:{...e.props,stores:C,components:ae},hydrate:n,sync:!1}),ct(L);const r={from:null,to:{params:b.params,route:{id:((s=b.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(r)),re=!0}function oe({url:e,params:t,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(T&&(e.pathname===T||e.pathname===T+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=vt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:s},props:{constructors:Jt(n).map(f=>f.node.component),page:Ce(I)}};i!==void 0&&(c.props.form=i);let l={},u=!I,p=0;for(let f=0;f<Math.max(n.length,b.branch.length);f+=1){const m=n[f],h=b.branch[f];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!b.url||e.href!==b.url.href||b.error!==r||i!==void 0&&i!==I.form||u)&&(c.props.page={error:r,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:u?l:I.data}),c}async function xe({loader:e,parent:t,url:n,params:a,route:r,server_data_node:s}){var u,p,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let f=function(...h){for(const d of h){const{href:y}=new URL(d,n);c.dependencies.add(y)}};const m={route:new Proxy(r,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(a,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:St(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},k.hash),async fetch(h,d){let y;h instanceof Request?(y=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):y=h;const A=new URL(y,n);return o&&f(A.href),A.origin===n.origin&&(y=A.href.slice(n.origin.length)),re?Lt(y,A.href,d):Ut(y,d)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Me(e,t,n,a,r,s){if(Le)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==b.params[i])return!0;for(const i of r.dependencies)if(ne.some(o=>o(new URL(i))))return!0;return!1}function Pe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function un(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),s=t.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function ze({error:e,url:t,route:n,params:a}){return{type:"loaded",state:{error:e,url:t,route:n,params:a,branch:[]},props:{page:Ce(I),constructors:[]}}}async function ft({id:e,invalidating:t,url:n,params:a,route:r,preload:s}){if((U==null?void 0:U.id)===e)return H.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=r,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=b.url?e!==se(b.url):!1,w=b.route?r.id!==b.route.id:!1,f=un(b.url,n);let m=!1;const h=l.map((g,_)=>{var O;const v=b.branch[_],S=!!(g!=null&&g[0])&&((v==null?void 0:v.loader)!==g[1]||Me(m,w,p,f,(O=v.server)==null?void 0:O.uses,a));return S&&(m=!0),S});if(h.some(Boolean)){try{u=await ht(n,h)}catch(g){const _=await V(g,{url:n,params:a,route:{id:e}});return H.has(s)?ze({error:_,url:n,params:a,route:r}):le({status:ee(g),error:_,url:n,route:r})}if(u.type==="redirect")return u}const d=u==null?void 0:u.nodes;let y=!1;const A=l.map(async(g,_)=>{var ue;if(!g)return;const v=b.branch[_],S=d==null?void 0:d[_];if((!S||S.type==="skip")&&g[1]===(v==null?void 0:v.loader)&&!Me(y,w,p,f,(ue=v.universal)==null?void 0:ue.uses,a))return v;if(y=!0,(S==null?void 0:S.type)==="error")throw S;return xe({loader:g[1],url:n,params:a,route:r,parent:async()=>{var Ne;const Oe={};for(let de=0;de<_;de+=1)Object.assign(Oe,(Ne=await A[de])==null?void 0:Ne.data);return Oe},server_data_node:Pe(S===void 0&&g[0]?{type:"skip"}:S??null,g[0]?v==null?void 0:v.server:void 0)})});for(const g of A)g.catch(()=>{});const R=[];for(let g=0;g<l.length;g+=1)if(l[g])try{R.push(await A[g])}catch(_){if(_ instanceof Se)return{type:"redirect",location:_.location};if(H.has(s))return ze({error:await V(_,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let v=ee(_),S;if(d!=null&&d.includes(_))v=_.status??v,S=_.error;else if(_ instanceof ce)S=_.body;else{if(await C.updated.check())return await at(),await B(n);S=await V(_,{params:a,url:n,route:{id:r.id}})}const O=await dn(g,R,i);return O?oe({url:n,params:a,branch:R.slice(0,O.idx).concat(O.node),status:v,error:S,route:r}):await dt(n,{id:r.id},S,v)}else R.push(void 0);return oe({url:n,params:a,branch:R,status:200,error:null,route:r,form:t?void 0:null})}async function dn(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:t,url:n,route:a}){const r={};let s=null;if(k.server_loads[0]===0)try{const o=await ht(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==X||n.pathname!==location.pathname||Ue)&&await B(n)}try{const o=await xe({loader:_e,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Pe(s)}),c={node:await te(),loader:te,universal:null,server:null,data:null};return oe({url:n,params:r,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Se)return Te(new URL(o.location,location.href),{},0);throw o}}function hn(e){let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}async function fe(e,t){if(e&&!ie(e,T,k.hash)){const n=hn(e);if(!n)return;const a=pn(n);for(const r of Ie){const s=r.exec(a);if(s)return{id:se(e),invalidating:t,route:r,params:At(s),url:e}}}}function pn(e){return kt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function se(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ut({url:e,type:t,intent:n,delta:a}){let r=!1;const s=gt(b,n,e,t);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return J||rt.forEach(o=>o(i)),r?null:s}async function G({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Be,block:u=Be}){const p=N;N=c;const w=await fe(t,!1),f=ut({url:t,type:e,delta:n==null?void 0:n.delta,intent:w});if(!f){u(),N===c&&(N=p);return}const m=E,h=L;l(),J=!0,re&&C.navigating.set(W.current=f.navigation);let d=w&&await ft(w);if(!d){if(ie(t,T,k.hash))return await B(t);d=await dt(t,{id:null},await V(new Ee(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(w==null?void 0:w.url)||t,N!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await le({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Te(new URL(d.location,t).href,{},o+1,c),!1;else d.props.page.status>=400&&await C.updated.check()&&(await at(),await B(t));if(ln(),Re(m),it(h),d.props.page.url.pathname!==t.pathname&&(t.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[F]:E+=g,[K]:L+=g,[Xe]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||sn(E,L)}if(U=null,d.props.page.state=i,re){b=d.state,d.props.page&&(d.props.page.url=t);const g=(await Promise.all(Array.from(cn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(v=>{z.delete(v)})};g.push(_),g.forEach(v=>{z.add(v)})}st.$set(d.props),tn(d.props.page),ot=!0}else lt(d,be,!1);const{activeElement:y}=document;await bt();const A=n?n.scroll:r?Ae():null;if(qe){const g=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));A?scrollTo(A.x,A.y):g?g.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==y&&document.activeElement!==document.body;!a&&!R&&bn(),qe=!0,d.props.page&&Object.assign(I,d.props.page),J=!1,e==="popstate"&&ct(L),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),C.navigating.set(W.current=null)}async function dt(e,t,n,a){return e.origin===X&&e.pathname===location.pathname&&!Ue?await le({status:a,error:n,url:e,route:t}):await B(e)}function gn(){let e,t;P.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(e),e=setTimeout(()=>{r(o,2)},20)});function n(i){i.defaultPrevented||r(i.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const a=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(we(new URL(o.target.href)),a.unobserve(o.target))},{threshold:0});async function r(i,o){const c=et(i,P);if(!c||c===t)return;t=c;const{url:l,external:u,download:p}=ye(c,T,k.hash);if(u||p)return;const w=Q(c),f=l&&se(b.url)===se(l);if(!w.reload&&!f)if(o<=w.preload_data){const m=await fe(l,!1);m&&fn(m)}else o<=w.preload_code&&we(l)}function s(){a.disconnect();for(const i of P.querySelectorAll("a")){const{url:o,external:c,download:l}=ye(i,T,k.hash);if(c||l)continue;const u=Q(i);u.reload||(u.preload_code===Z.viewport&&a.observe(i),u.preload_code===Z.eager&&we(o))}}z.add(s),s()}function V(e,t){if(e instanceof ce)return e.body;const n=ee(e),a=Qt(e);return k.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function mn(e,t={}){return e=new URL(Ze(e)),e.origin!==X?Promise.reject(new Error("goto: invalid URL")):Te(e,t,0)}function wn(e){if(typeof e=="function")ne.push(e);else{const{href:t}=new URL(e,location.href);ne.push(n=>n.href===t)}}function yn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(Ge(),!J){const r=gt(b,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};rt.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ge()}),(t=navigator.connection)!=null&&t.saveData||gn(),P.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=et(n.composedPath()[0],P);if(!a)return;const{url:r,external:s,target:i,download:o}=ye(a,T,k.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[u,p]=(k.hash?r.hash.replace(/^#/,""):r.href).split("#"),w=u===pe(location);if(s||c.reload&&(!w||!p)){ut({url:r,type:"link"})?J=!0:n.preventDefault();return}if(p!==void 0&&w){const[,f]=b.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(q=!0,Re(E),e(r),!c.replace_state)return;q=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),G({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(ie(o,T,!1))return;const c=n.target,l=Q(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=r==null?void 0:r.getAttribute("name");p&&u.append(p,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),G({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[F]){const r=n.state[F];if(N={},r===E)return;const s=$[r],i=n.state[Xe]??{},o=new URL(n.state[Dt]??location.href),c=n.state[K],l=b.url?pe(location)===pe(b.url):!1;if(c===L&&(ot||l)){i!==I.state&&(I.state=i),e(o),$[E]=Ae(),s&&scrollTo(s.x,s.y),E=r;return}const p=r-E;await G({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{E=r,L=c},block:()=>{history.go(-p)},nav_token:N})}else if(!q){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[F]:++E,[K]:L},"",location.href)):k.hash&&b.url.hash===location.hash&&G({type:"goto",url:mt(b.url)})});for(const n of document.querySelectorAll("link"))on.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(W.current=null)});function e(n){b.url=I.url=n,C.page.set(Ce(I)),C.page.notify()}}async function _n(e,{status:t=200,error:n,node_ids:a,params:r,route:s,server_route:i,data:o,form:c}){Ue=!0;const l=new URL(location.href);let u;({params:r={},route:s={id:null}}=await fe(l,!1)||{}),u=Ie.find(({id:f})=>f===s.id);let p,w=!0;try{const f=a.map(async(h,d)=>{const y=o[d];return y!=null&&y.uses&&(y.uses=pt(y.uses)),xe({loader:k.nodes[h],url:l,params:r,route:s,parent:async()=>{const A={};for(let R=0;R<d;R+=1)Object.assign(A,(await f[R]).data);return A},server_data_node:Pe(y)})}),m=await Promise.all(f);if(u){const h=u.layouts;for(let d=0;d<h.length;d++)h[d]||m.splice(d,0,void 0)}p=oe({url:l,params:r,branch:m,status:t,error:n,form:c,route:u??null})}catch(f){if(f instanceof Se){await B(new URL(f.location,location.href));return}p=await le({status:ee(f),error:await V(f,{url:l,params:r,route:s}),url:l,route:s}),e.textContent="",w=!1}p.props.page&&(p.props.page.state={}),lt(p,e,w)}async function ht(e,t){var s;const n=new URL(e);n.pathname=rn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Zt,"1"),n.searchParams.append(Xt,t.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new ce(r.status,i)}return new Promise(async i=>{var w;const o=new Map,c=r.body.getReader(),l=new TextDecoder;function u(f){return Wt(f,{...k.decoders,Promise:m=>new Promise((h,d)=>{o.set(m,{fulfil:h,reject:d})})})}let p="";for(;;){const{done:f,value:m}=await c.read();if(f&&!p)break;for(p+=!m&&p?`
`:l.decode(m,{stream:!0});;){const h=p.indexOf(`
`);if(h===-1)break;const d=JSON.parse(p.slice(0,h));if(p=p.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=pt(y.uses),y.data=u(y.data))}),i(d);else if(d.type==="chunk"){const{id:y,data:A,error:R}=d,g=o.get(y);o.delete(y),R?g.reject(u(R)):g.fulfil(u(A))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function bn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function gt(e,t,n,a){var c,l;let r,s;const i=new Promise((u,p)=>{r=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:s}}function Ce(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function mt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Rn as a,C as s};
