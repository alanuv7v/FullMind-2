var C=Object.defineProperty;var B=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function N(e){return e()}function O(){return Object.create(null)}function p(e){e.forEach(N)}function L(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function q(e){return Object.keys(e).length===0}function F(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e){return Array.from(e.childNodes)}let b;function h(e){b=e}const l=[],k=[];let d=[];const A=[],G=Promise.resolve();let y=!1;function K(){y||(y=!0,G.then(S))}function $(e){d.push(e)}const m=new Set;let u=0;function S(){if(u!==0)return;const e=b;do{try{for(;u<l.length;){const t=l[u];u++,h(t),R(t.$$)}}catch(t){throw l.length=0,u=0,t}for(h(null),l.length=0,u=0;k.length;)k.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];m.has(n)||(m.add(n),n())}d.length=0}while(l.length);for(;A.length;)A.pop()();y=!1,m.clear(),h(e)}function R(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function T(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const U=new Set;function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function H(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),$(()=>{const s=e.$$.on_mount.map(N).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...s):p(s),e.$$.on_mount=[]}),r.forEach($)}function J(e,t){const n=e.$$;n.fragment!==null&&(T(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(l.push(e),K(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,o,r,s,f,j=[-1]){const _=b;h(e);const c=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:O(),dirty:j,skip_bound:!1,root:t.target||_.$$.root};f&&f(c.root);let w=!1;if(c.ctx=n?n(e,t.props||{},(i,x,...v)=>{const E=v.length?v[0]:x;return c.ctx&&r(c.ctx[i],c.ctx[i]=E)&&(!c.skip_bound&&c.bound[i]&&c.bound[i](E),w&&Q(e,i)),x}):[],c.update(),w=!0,p(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const i=D(t.target);c.fragment&&c.fragment.l(i),i.forEach(P)}else c.fragment&&c.fragment.c();t.intro&&V(e.$$.fragment),H(e,t.target,t.anchor),S()}h(_)}class X{constructor(){g(this,"$$");g(this,"$$set")}$destroy(){J(this,1),this.$destroy=a}$on(t,n){if(!L(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);function Z(e){let t;return{c(){t=M("main"),t.textContent=`폰트 테스트
  가나다라마바사 ABCDEFG
  The quick brown fox jumps over the lazy dog
  다람쥐 헌 쳇바퀴에 타고파
  !@#$%^&*`,z(t,"class","svelte-11td2gs")},m(n,o){F(n,t,o)},p:a,i:a,o:a,d(n){n&&P(t)}}}class ee extends X{constructor(t){super(),W(this,t,null,Z,I,{})}}new ee({target:document.getElementById("app")});