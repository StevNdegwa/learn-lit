function t(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,e)}return n}function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function e(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),i&&l(t,i)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function l(t,i){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},l(t,i)}function h(t,i){if(i&&("object"==typeof i||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=o(t);if(i){var s=o(this).constructor;n=Reflect.construct(e,arguments,s)}else n=e.apply(this,arguments);return h(this,n)}}function a(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=o(t)););return t}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,i,n){var e=a(t,i);if(e){var s=Object.getOwnPropertyDescriptor(e,i);return s.get?s.get.call(arguments.length<3?t:n):s.value}},c.apply(this,arguments)}function d(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */!function(t,i){t.getElementById("livereloadscript")||((i=t.createElement("script")).async=1,i.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",i.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(i))}(window.document);const v=window,f=v.ShadowRoot&&(void 0===v.ShadyCSS||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),b=new WeakMap;class y{constructor(t,i,n){if(this._$cssResult$=!0,n!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(f&&void 0===t){const n=void 0!==i&&1===i.length;n&&(t=b.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&b.set(i,t))}return t}toString(){return this.cssText}}const g=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((i,n,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[e+1]),t[0]);return new y(n,t,p)},m=f?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return(t=>new y("string"==typeof t?t:t+"",void 0,p))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var w;const x=window,S=x.trustedTypes,$=S?S.emptyScript:"",j=x.reactiveElementPolyfillSupport,O={toAttribute(t,i){switch(i){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let n=t;switch(i){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},k=(t,i)=>i!==t&&(i==i||t==t),C={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:k};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,n)=>{const e=this._$Ep(n,i);void 0!==e&&(this._$Ev.set(e,n),t.push(e))})),t}static createProperty(t,i=C){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,n,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,n){return{get(){return this[i]},set(e){const s=this[t];this[i]=e,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||C}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)i.unshift(m(t))}else void 0!==t&&i.push(m(t));return i}static _$Ep(t,i){const n=i.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,n;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{f?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const n=document.createElement("style"),e=v.litNonce;void 0!==e&&n.setAttribute("nonce",e),n.textContent=i.cssText,t.appendChild(n)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EO(t,i,n=C){var e;const s=this.constructor._$Ep(t,n);if(void 0!==s&&!0===n.reflect){const r=(void 0!==(null===(e=n.converter)||void 0===e?void 0:e.toAttribute)?n.converter:O).toAttribute(i,n.type);this._$El=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,i){var n;const e=this.constructor,s=e._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=e.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:O;this._$El=s,this[s]=r.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,n){let e=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||k)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(n)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var E;A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==j||j({ReactiveElement:A}),(null!==(w=x.reactiveElementVersions)&&void 0!==w?w:x.reactiveElementVersions=[]).push("1.4.1");const _=window,R=_.trustedTypes,T=R?R.createPolicy("lit-html",{createHTML:t=>t}):void 0,M=`lit$${(Math.random()+"").slice(9)}$`,U="?"+M,P=`<${U}>`,z=document,I=(t="")=>z.createComment(t),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,V=/>/g,Z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,J=/"/g,W=/^(?:script|style|textarea|title)$/i,q=(t=>(i,...n)=>({_$litType$:t,strings:i,values:n}))(1),G=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),F=new WeakMap,Q=z.createTreeWalker(z,129,null,!1),X=(t,i)=>{const n=t.length-1,e=[];let s,r=2===i?"<svg>":"",o=D;for(let i=0;i<n;i++){const n=t[i];let l,h,u=-1,a=0;for(;a<n.length&&(o.lastIndex=a,h=o.exec(n),null!==h);)a=o.lastIndex,o===D?"!--"===h[1]?o=L:void 0!==h[1]?o=V:void 0!==h[2]?(W.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Z):void 0!==h[3]&&(o=Z):o===Z?">"===h[0]?(o=null!=s?s:D,u=-1):void 0===h[1]?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?Z:'"'===h[3]?J:H):o===J||o===H?o=Z:o===L||o===V?o=D:(o=Z,s=void 0);const c=o===Z&&t[i+1].startsWith("/>")?" ":"";r+=o===D?n+P:u>=0?(e.push(l),n.slice(0,u)+"$lit$"+n.slice(u)+M+c):n+M+(-2===u?(e.push(void 0),i):c)}const l=r+(t[n]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==T?T.createHTML(l):l,e]};class Y{constructor({strings:t,_$litType$:i},n){let e;this.parts=[];let s=0,r=0;const o=t.length-1,l=this.parts,[h,u]=X(t,i);if(this.el=Y.createElement(h,n),Q.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=Q.nextNode())&&l.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(M)){const n=u[r++];if(t.push(i),void 0!==n){const t=e.getAttribute(n.toLowerCase()+"$lit$").split(M),i=/([.?@])?(.*)/.exec(n);l.push({type:1,index:s,name:i[2],strings:t,ctor:"."===i[1]?st:"?"===i[1]?ot:"@"===i[1]?lt:et})}else l.push({type:6,index:s})}for(const i of t)e.removeAttribute(i)}if(W.test(e.tagName)){const t=e.textContent.split(M),i=t.length-1;if(i>0){e.textContent=R?R.emptyScript:"";for(let n=0;n<i;n++)e.append(t[n],I()),Q.nextNode(),l.push({type:2,index:++s});e.append(t[i],I())}}}else if(8===e.nodeType)if(e.data===U)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=e.data.indexOf(M,t+1));)l.push({type:7,index:s}),t+=M.length-1}s++}}static createElement(t,i){const n=z.createElement("template");return n.innerHTML=t,n}}function tt(t,i,n=t,e){var s,r,o,l;if(i===G)return i;let h=void 0!==e?null===(s=n._$Co)||void 0===s?void 0:s[e]:n._$Cl;const u=N(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==u&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===u?h=void 0:(h=new u(t),h._$AT(t,n,e)),void 0!==e?(null!==(o=(l=n)._$Co)&&void 0!==o?o:l._$Co=[])[e]=h:n._$Cl=h),void 0!==h&&(i=tt(t,h._$AS(t,i.values),h,e)),i}class it{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:n},parts:e}=this._$AD,s=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:z).importNode(n,!0);Q.currentNode=s;let r=Q.nextNode(),o=0,l=0,h=e[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new nt(r,r.nextSibling,this,t):1===h.type?i=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(i=new ht(r,this,t)),this.u.push(i),h=e[++l]}o!==(null==h?void 0:h.index)&&(r=Q.nextNode(),o++)}return s}p(t){let i=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class nt{constructor(t,i,n,e){var s;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=e,this._$Cm=null===(s=null==e?void 0:e.isConnected)||void 0===s||s}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=tt(this,t,i),N(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==G&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>B(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==K&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=Y.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===s)this._$AH.p(n);else{const t=new it(s,this),i=t.v(this.options);t.p(n),this.T(i),this._$AH=t}}_$AC(t){let i=F.get(t.strings);return void 0===i&&F.set(t.strings,i=new Y(t)),i}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,e=0;for(const s of t)e===i.length?i.push(n=new nt(this.O(I()),this.O(I()),this,this.options)):n=i[e],n._$AI(s),e++;e<i.length&&(this._$AR(n&&n._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class et{constructor(t,i,n,e,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,n,e){const s=this.strings;let r=!1;if(void 0===s)t=tt(this,t,i,0),r=!N(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const e=t;let o,l;for(t=s[0],o=0;o<s.length-1;o++)l=tt(this,e[n+o],i,o),l===G&&(l=this._$AH[o]),r||(r=!N(l)||l!==this._$AH[o]),l===K?t=K:t!==K&&(t+=(null!=l?l:"")+s[o+1]),this._$AH[o]=l}r&&!e&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}const rt=R?R.emptyScript:"";class ot extends et{constructor(){super(...arguments),this.type=4}j(t){t&&t!==K?this.element.setAttribute(this.name,rt):this.element.removeAttribute(this.name)}}class lt extends et{constructor(t,i,n,e,s){super(t,i,n,e,s),this.type=5}_$AI(t,i=this){var n;if((t=null!==(n=tt(this,t,i,0))&&void 0!==n?n:K)===G)return;const e=this._$AH,s=t===K&&e!==K||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==K&&(e===K||s);s&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const ut=_.litHtmlPolyfillSupport;null==ut||ut(Y,nt),(null!==(E=_.litHtmlVersions)&&void 0!==E?E:_.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var at,ct;class dt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const n=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=n.firstChild),n}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,n)=>{var e,s;const r=null!==(e=null==n?void 0:n.renderBefore)&&void 0!==e?e:i;let o=r._$litPart$;if(void 0===o){const t=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:null;r._$litPart$=o=new nt(i.insertBefore(I(),t),t,void 0,null!=n?n:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return G}}dt.finalized=!0,dt._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:dt});const vt=globalThis.litElementPolyfillSupport;null==vt||vt({LitElement:dt}),(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft=1;class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends pt{constructor(t){var i;if(super(t),t.type!==ft||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,n)=>{const e=t[n];return null==e?i:i+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(t,[i]){const{style:n}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in i)this.vt.add(t);return this.render(i)}this.vt.forEach((t=>{null==i[t]&&(this.vt.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")}));for(const t in i){const e=i[t];null!=e&&(this.vt.add(t),t.includes("-")?n.setProperty(t,e):n[t]=e)}return G}});var yt,gt,mt,wt,xt=g(yt||(yt=d(["\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  div.label {\n    line-height: 25px;\n    font-size: 0.9rem;\n    font-weight: 400;\n  }\n  div.input {\n    height: 40px;\n    border: 2px solid gray;\n    border-radius: 8px;\n    padding: 0 4px;\n  }\n  iframe {\n    width: 100%;\n    height: 100%;\n    border: none;\n    outset: none;\n  }\n  div.error-message {\n    line-height: 35px;\n    color: #fa1616;\n  }\n"]))),St={src:{type:String},label:{type:String},focused:{type:String,attribute:!0,converter:function(t){return"true"===t}},valid:{type:String,attribute:!0,converter:function(t){return"true"===t}}},$t=function(t){r(s,dt);var n=u(s);function s(){var t;return i(this,s),(t=n.call(this)).focused=!1,t}return e(s,[{key:"render",value:function(){var t={borderColor:this.focused?"blue":"gray"};return q(gt||(gt=d(['\n      <div class="label">','</div>\n      <div class="input" style=',">\n        <iframe src=","></iframe>\n      </div>\n      ","\n    "])),this.label,bt(t),this.src,!this.valid&&this.focused?q(mt||(mt=d(['<div class="error-message">Invalid data</div>']))):K)}}]),s}();$t.styles=xt,$t.properties=St,customElements.define("input-iframe",$t);var jt,Ot,kt=g(wt||(wt=d(["\n  div.page-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(82, 81, 81, 0.7);\n  }\n  div.popup-content {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1001;\n    width: 60vw;\n    height: 60vh;\n    background-color: white;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),Ct={_isOpen:{type:Boolean},buttonLabel:{type:String}},At=function(t){r(s,dt);var n=u(s);function s(){var t;return i(this,s),(t=n.call(this))._isOpen=!1,t.buttonLabel="Toggle",t}return e(s,[{key:"togglePopup",value:function(){this._isOpen=!this._isOpen}},{key:"showPopup",value:function(){this._isOpen}},{key:"render",value:function(){return q(jt||(jt=d(['\n      <button @click="','">',"</button>\n      ","\n    "])),this.togglePopup,this.buttonLabel,this._isOpen?q(Ot||(Ot=d(['<div class="page-overlay" @click="','"></div>\n            <div class="popup-content">Popup content</div>'])),this.togglePopup):K)}}]),s}();At.styles=kt,At.properties=Ct,customElements.define("fullscreen-popup",At);var Et,_t,Rt={label:{type:String},inputDataInValid:{type:String,attribute:!0,converter:function(t){return"true"===t}}},Tt=g(Et||(Et=d(["\n  button {\n    width: 80px;\n    height: 35px;\n    margin: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n"])));var Mt=function(t){r(s,dt);var n=u(s);function s(){return i(this,s),n.call(this)}return e(s,[{key:"handlePay",value:function(){var t;t={fn:"Pay"},console.log(t)}},{key:"render",value:function(){return q(_t||(_t=d(["<button\n      @click=","\n      .disabled=","\n    >\n      ","\n    </button>"])),this.handlePay,this.inputDataInValid,this.label)}}]),s}();Mt.properties=Rt,Mt.styles=Tt,customElements.define("pay-button",Mt);var Ut,Pt,zt={fields:{type:Object,state:!0}},It=g(Ut||(Ut=d(["\n  form {\n    border: 1px dashed gray;\n    padding: 15px;\n    border-radius: 8px;\n  }\n"]))),Nt=function(n){r(h,dt);var l=u(h);function h(){var t;return i(this,h),(t=l.call(this)).fields={card:{valid:!1,focused:!1},cvv:{valid:!1,focused:!1},expiry:{valid:!1,focused:!1}},t}return e(h,[{key:"connectedCallback",value:function(){var i=this;window.onmessage=function(n){var e=n.data;switch(e.messageType){case"event":e.data&&"onfocus"===e.data.eventName&&(i.fields[e.from].focused=Boolean(e.data.value)),e.data&&"onblur"===e.data.eventName&&(i.fields[e.from].focused=Boolean(!e.data.value));break;case"validation":e.data&&(i.fields[e.from].valid=Boolean(e.data.valid))}i.fields=function(i){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?t(Object(e),!0).forEach((function(t){s(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}({},i.fields)},c(o(h.prototype),"connectedCallback",this).call(this)}},{key:"render",value:function(){return q(Pt||(Pt=d(['<form>\n      <input-iframe\n        src="https://stvnganga.github.io/card?origin=','"\n        label="Card number Input"\n        focused="','"\n        valid="','"\n      ></input-iframe>\n      <input-iframe\n        src="https://stvnganga.github.io/cvv?origin=','"\n        label="CVV Input"\n        focused="','"\n        valid="','"\n      ></input-iframe>\n      <input-iframe\n        src="https://stvnganga.github.io/expiry?origin=','"\n        label="Card expiry"\n        focused="','"\n        valid="','"\n      ></input-iframe>\n      <pay-button\n        label="Pay"\n        inputDataInValid="','"\n      ></pay-button>\n    </form>'])),window.location.href,this.fields.card.focused,this.fields.card.valid,window.location.href,this.fields.cvv.focused,this.fields.cvv.valid,window.location.href,this.fields.expiry.focused,this.fields.expiry.valid,!this.fields.expiry.valid||!this.fields.cvv.valid||!this.fields.card.valid)}}]),h}();Nt.properties=zt,Nt.styles=It,customElements.define("payment-form",Nt);var Bt,Dt,Lt,Vt,Zt={profiles:{type:Array,state:!0}},Ht=g(Bt||(Bt=d(["\n  ul {\n    list-style-type: none;\n  }\n  li {\n    display: inline-flex;\n    flex-direction: column;\n    text-align: center;\n    margin: 0px 20px;\n  }\n  img {\n    width: 50px;\n  }\n"]))),Jt=function(t){r(s,dt);var n=u(s);function s(){var t;return i(this,s),(t=n.call(this)).profiles=[],t}return e(s,[{key:"connectedCallback",value:function(){var t=this;fetch("https://randomuser.me/api/?results=2",{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){return{name:t.name.title+" "+t.name.first+" "+t.name.last,picture:t.picture.medium}}))})).then((function(i){t.profiles=i})),c(o(s.prototype),"connectedCallback",this).call(this)}},{key:"expandImage",value:function(t){var i=document.getElementById("notification");i.style.display="block";var n=document.createElement("img");n.src=t.picture,i.appendChild(n)}},{key:"render",value:function(){var t=this;return q(Dt||(Dt=d(["<ul>\n      ","\n    </ul>"])),this.profiles.map((function(i){return q(Lt||(Lt=d(["<li @click=",'>\n            <img src="','" />',"\n          </li>"])),(function(){return t.expandImage(i)}),i.picture,i.name)})))}}]),s}();Jt.properties=Zt,Jt.styles=Ht,customElements.define("user-profiles",Jt);var Wt,qt=g(Vt||(Vt=d(['\n  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;1,200;1,300&display=swap");\n  * {\n    font-family: "Montserrat", sans-serif;\n  }\n  div.widget-container {\n    border: 1px dashed #fc1717;\n    padding: 40px;\n    border-radius: 20px;\n  }\n  h1 {\n    font-size: 15px;\n  }\n']))),Gt=function(t){r(s,dt);var n=u(s);function s(){return i(this,s),n.call(this)}return e(s,[{key:"render",value:function(){return q(Wt||(Wt=d(['<div class="widget-container">\n      <h1>Payment widget</h1>\n      <payment-form></payment-form>\n    </div>'])))}}]),s}();s(Gt,"properties",{fields:{type:Object,state:!0}}),Gt.styles=qt,customElements.define("widget-container",Gt);
