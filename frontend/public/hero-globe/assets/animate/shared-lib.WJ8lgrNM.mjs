import{n as e,t}from"/assets/animate/rolldown-runtime.Dh6celcD.mjs";import{A as n,C as r,D as i,I as a,L as o,M as s,N as c,P as l,R as u,T as d,b as f,c as p,g as m,j as h,k as g,l as _,o as v,s as y,v as b,y as x}from"/assets/animate/react.D20wc1Tc.mjs";import{S,a as C,r as w,t as T}from"/assets/animate/motion.uC3ezD0d.mjs";import{$ as E,D,G as O,H as k,J as A,K as j,M,Q as N,U as ee,X as te,Y as ne,a as re,b as ie,c as ae,et as oe,f as se,g as ce,h as P,m as le,n as F,nt as ue,p as de,q as fe,r as I,t as pe,tt as L,x as me,y as R}from"/assets/animate/nocodexport.BjAG0dus.mjs";function z(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function B(e){return Xn.call($n,e)?!0:Xn.call(Qn,e)?!1:Zn.test(e)?$n[e]=!0:(Qn[e]=!0,!1)}function V(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}function he(e){return e[1].toUpperCase()}function ge(e){if(typeof e==`boolean`||typeof e==`number`)return``+e;e=``+e;var t=ir.exec(e);if(t){var n,r=``,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=t}e=i===n?r:r+e.substring(i,n)}return e}function _e(e,t){return{insertionMode:e,selectedValue:t}}function ve(e,t,n){switch(t){case`select`:return _e(1,n.value==null?n.defaultValue:n.value);case`svg`:return _e(2,null);case`math`:return _e(3,null);case`foreignObject`:return _e(1,null);case`table`:return _e(4,null);case`thead`:case`tbody`:case`tfoot`:return _e(5,null);case`colgroup`:return _e(7,null);case`tr`:return _e(6,null)}return 4<=e.insertionMode||e.insertionMode===0?_e(1,null):e}function ye(e,t,n){if(typeof n!=`object`)throw Error(z(62));for(var r in t=!0,n)if(Xn.call(n,r)){var i=n[r];if(i!=null&&typeof i!=`boolean`&&i!==``){if(r.indexOf(`--`)===0){var a=ge(r);i=ge((``+i).trim())}else{a=r;var o=cr.get(a);o!==void 0||(o=ge(a.replace(ar,`-$1`).toLowerCase().replace(or,`-ms-`)),cr.set(a,o)),a=o,i=typeof i==`number`?i===0||Xn.call(nr,r)?``+i:i+`px`:ge((``+i).trim())}t?(t=!1,e.push(` style="`,a,`:`,i)):e.push(`;`,a,`:`,i)}}t||e.push(`"`)}function be(e,t,n,r){switch(n){case`style`:ye(e,t,r);return;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:return}if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`){if(t=er.hasOwnProperty(n)?er[n]:null,t!==null){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(` `,n,`=""`);break;case 4:!0===r?e.push(` `,n,`=""`):!1!==r&&e.push(` `,n,`="`,ge(r),`"`);break;case 5:isNaN(r)||e.push(` `,n,`="`,ge(r),`"`);break;case 6:!isNaN(r)&&1<=r&&e.push(` `,n,`="`,ge(r),`"`);break;default:t.sanitizeURL&&(r=``+r),e.push(` `,n,`="`,ge(r),`"`)}}else if(B(n)){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(t=n.toLowerCase().slice(0,5),t!==`data-`&&t!==`aria-`)return}e.push(` `,n,`="`,ge(r),`"`)}}}function xe(e,t,n){if(t!=null){if(n!=null)throw Error(z(60));if(typeof t!=`object`||!(`__html`in t))throw Error(z(61));t=t.__html,t!=null&&e.push(``+t)}}function Se(e){var t=``;return Yn.Children.forEach(e,(function(e){e!=null&&(t+=e)})),t}function Ce(e,t,n,r){e.push(we(n));var i,a=n=null;for(i in t)if(Xn.call(t,i)){var o=t[i];if(o!=null)switch(i){case`children`:n=o;break;case`dangerouslySetInnerHTML`:a=o;break;default:be(e,r,i,o)}}return e.push(`>`),xe(e,a,n),typeof n==`string`?(e.push(ge(n)),null):n}function we(e){var t=ur.get(e);if(t===void 0){if(!lr.test(e))throw Error(z(65,e));t=`<`+e,ur.set(e,t)}return t}function Te(e,t,n,r,i){switch(t){case`select`:e.push(we(`select`));var a=null,o=null;for(u in n)if(Xn.call(n,u)){var s=n[u];if(s!=null)switch(u){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`defaultValue`:case`value`:break;default:be(e,r,u,s)}}return e.push(`>`),xe(e,o,a),a;case`option`:o=i.selectedValue,e.push(we(`option`));var c=s=null,l=null,u=null;for(a in n)if(Xn.call(n,a)){var d=n[a];if(d!=null)switch(a){case`children`:s=d;break;case`selected`:l=d;break;case`dangerouslySetInnerHTML`:u=d;break;case`value`:c=d;default:be(e,r,a,d)}}if(o!=null)if(n=c===null?Se(s):``+c,sr(o)){for(r=0;r<o.length;r++)if(``+o[r]===n){e.push(` selected=""`);break}}else``+o===n&&e.push(` selected=""`);else l&&e.push(` selected=""`);return e.push(`>`),xe(e,u,s),s;case`textarea`:for(s in e.push(we(`textarea`)),u=o=a=null,n)if(Xn.call(n,s)&&(c=n[s],c!=null))switch(s){case`children`:u=c;break;case`value`:a=c;break;case`defaultValue`:o=c;break;case`dangerouslySetInnerHTML`:throw Error(z(91));default:be(e,r,s,c)}if(a===null&&o!==null&&(a=o),e.push(`>`),u!=null){if(a!=null)throw Error(z(92));if(sr(u)&&1<u.length)throw Error(z(93));a=``+u}return typeof a==`string`&&a[0]===`
`&&e.push(`
`),a!==null&&e.push(ge(``+a)),null;case`input`:for(o in e.push(we(`input`)),c=u=s=a=null,n)if(Xn.call(n,o)&&(l=n[o],l!=null))switch(o){case`children`:case`dangerouslySetInnerHTML`:throw Error(z(399,`input`));case`defaultChecked`:c=l;break;case`defaultValue`:s=l;break;case`checked`:u=l;break;case`value`:a=l;break;default:be(e,r,o,l)}return u===null?c!==null&&be(e,r,`checked`,c):be(e,r,`checked`,u),a===null?s!==null&&be(e,r,`value`,s):be(e,r,`value`,a),e.push(`/>`),null;case`menuitem`:for(var f in e.push(we(`menuitem`)),n)if(Xn.call(n,f)&&(a=n[f],a!=null))switch(f){case`children`:case`dangerouslySetInnerHTML`:throw Error(z(400));default:be(e,r,f,a)}return e.push(`>`),null;case`title`:for(d in e.push(we(`title`)),a=null,n)if(Xn.call(n,d)&&(o=n[d],o!=null))switch(d){case`children`:a=o;break;case`dangerouslySetInnerHTML`:throw Error(z(434));default:be(e,r,d,o)}return e.push(`>`),a;case`listing`:case`pre`:for(c in e.push(we(t)),o=a=null,n)if(Xn.call(n,c)&&(s=n[c],s!=null))switch(c){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;default:be(e,r,c,s)}if(e.push(`>`),o!=null){if(a!=null)throw Error(z(60));if(typeof o!=`object`||!(`__html`in o))throw Error(z(61));n=o.__html,n!=null&&(typeof n==`string`&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(``+n))}return typeof a==`string`&&a[0]===`
`&&e.push(`
`),a;case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:for(var p in e.push(we(t)),n)if(Xn.call(n,p)&&(a=n[p],a!=null))switch(p){case`children`:case`dangerouslySetInnerHTML`:throw Error(z(399,t));default:be(e,r,p,a)}return e.push(`/>`),null;case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return Ce(e,n,t,r);case`html`:return i.insertionMode===0&&e.push(`<!DOCTYPE html>`),Ce(e,n,t,r);default:if(t.indexOf(`-`)===-1&&typeof n.is!=`string`)return Ce(e,n,t,r);for(l in e.push(we(t)),o=a=null,n)if(Xn.call(n,l)&&(s=n[l],s!=null))switch(l){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`style`:ye(e,r,s);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:break;default:B(l)&&typeof s!=`function`&&typeof s!=`symbol`&&e.push(` `,l,`="`,ge(s),`"`)}return e.push(`>`),xe(e,o,a),a}}function Ee(e,t,n){if(e.push(`<!--$?--><template id="`),n===null)throw Error(z(395));return e.push(n),e.push(`"></template>`)}function De(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push(`<div hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 2:return e.push(`<svg aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 3:return e.push(`<math aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 4:return e.push(`<table hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 5:return e.push(`<table hidden><tbody id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 6:return e.push(`<table hidden><tr id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 7:return e.push(`<table hidden><colgroup id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);default:throw Error(z(397))}}function Oe(e,t){switch(t.insertionMode){case 0:case 1:return e.push(`</div>`);case 2:return e.push(`</svg>`);case 3:return e.push(`</math>`);case 4:return e.push(`</table>`);case 5:return e.push(`</tbody></table>`);case 6:return e.push(`</tr></table>`);case 7:return e.push(`</colgroup></table>`);default:throw Error(z(397))}}function ke(e){return JSON.stringify(e).replace(dr,(function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}))}function Ae(e,t){return t=t===void 0?``:t,{bootstrapChunks:[],startInlineScript:`<script>`,placeholderPrefix:t+`P:`,segmentPrefix:t+`S:`,boundaryPrefix:t+`B:`,idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function je(e,t,n,r){return n.generateStaticMarkup?(e.push(ge(t)),!1):(t===``?e=r:(r&&e.push(`<!-- -->`),e.push(ge(t)),e=!0),e)}function Me(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case hr:return`Fragment`;case mr:return`Portal`;case _r:return`Profiler`;case gr:return`StrictMode`;case xr:return`Suspense`;case Sr:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case yr:return(e.displayName||`Context`)+`.Consumer`;case vr:return(e._context.displayName||`Context`)+`.Provider`;case br:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Cr:return t=e.displayName||null,t===null?Me(e.type)||`Memo`:t;case wr:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}function Ne(e,t){if(e=e.contextTypes,!e)return Ar;var n,r={};for(n in e)r[n]=t[n];return r}function Pe(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(z(401))}else{if(n===null)throw Error(z(401));Pe(e,n)}t.context._currentValue2=t.value}}function Fe(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Fe(e)}function Ie(e){var t=e.parent;t!==null&&Ie(t),e.context._currentValue2=e.value}function Le(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(z(402));e.depth===t.depth?Pe(e,t):Le(e,t)}function Re(e,t){var n=t.parent;if(n===null)throw Error(z(402));e.depth===n.depth?Pe(e,n):Re(e,n),t.context._currentValue2=t.value}function ze(e){var t=jr;t!==e&&(t===null?Ie(e):e===null?Fe(t):t.depth===e.depth?Pe(t,e):t.depth>e.depth?Le(t,e):Re(t,e),jr=e)}function Be(e,t,n,r){var i=e.state===void 0?null:e.state;e.updater=Mr,e.props=n,e.state=i;var a={queue:[],replace:!1};e._reactInternals=a;var o=t.contextType;if(e.context=typeof o==`object`&&o?o._currentValue2:r,o=t.getDerivedStateFromProps,typeof o==`function`&&(o=o(n,i),i=o==null?i:fr({},i,o),e.state=i),typeof t.getDerivedStateFromProps!=`function`&&typeof e.getSnapshotBeforeUpdate!=`function`&&(typeof e.UNSAFE_componentWillMount==`function`||typeof e.componentWillMount==`function`))if(t=e.state,typeof e.componentWillMount==`function`&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount==`function`&&e.UNSAFE_componentWillMount(),t!==e.state&&Mr.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length)if(t=a.queue,o=a.replace,a.queue=null,a.replace=!1,o&&t.length===1)e.state=t[0];else{for(a=o?t[0]:e.state,i=!0,o=+!!o;o<t.length;o++){var s=t[o];s=typeof s==`function`?s.call(e,a,n,r):s,s!=null&&(i?(i=!1,a=fr({},a,s)):fr(a,s))}e.state=a}else a.queue=null}function Ve(e,t,n){var r=e.id;e=e.overflow;var i=32-Pr(r)-1;r&=~(1<<i),n+=1;var a=32-Pr(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Pr(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}function He(e){return e>>>=0,e===0?32:31-(Fr(e)/Ir|0)|0}function Ue(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function We(){if(Rr===null)throw Error(z(321));return Rr}function Ge(){if(0<Kr)throw Error(z(312));return{memoizedState:null,queue:null,next:null}}function Ke(){return Vr===null?Br===null?(Hr=!1,Br=Vr=Ge()):(Hr=!0,Vr=Br):Vr.next===null?(Hr=!1,Vr=Vr.next=Ge()):(Hr=!0,Vr=Vr.next),Vr}function qe(){zr=Rr=null,Ur=!1,Br=null,Kr=0,Vr=Gr=null}function Je(e,t){return typeof t==`function`?t(e):t}function Ye(e,t,n){if(Rr=We(),Vr=Ke(),Hr){var r=Vr.queue;if(t=r.dispatch,Gr!==null&&(n=Gr.get(r),n!==void 0)){Gr.delete(r),r=Vr.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return Vr.memoizedState=r,[r,t]}return[Vr.memoizedState,t]}return e=e===Je?typeof t==`function`?t():t:n===void 0?t:n(t),Vr.memoizedState=e,e=Vr.queue={last:null,dispatch:null},e=e.dispatch=Ze.bind(null,Rr,e),[Vr.memoizedState,e]}function Xe(e,t){if(Rr=We(),Vr=Ke(),t=t===void 0?null:t,Vr!==null){var n=Vr.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!Lr(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),Vr.memoizedState=[e,t],e}function Ze(e,t,n){if(25<=Kr)throw Error(z(301));if(e===Rr)if(Ur=!0,e={action:n,next:null},Gr===null&&(Gr=new Map),n=Gr.get(t),n===void 0)Gr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function Qe(){throw Error(z(394))}function $e(){}function et(e){return console.error(e),null}function tt(){}function nt(e,t,n,r,i,a,o,s,c){var l=[],u=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:l,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:i===void 0?et:i,onAllReady:a===void 0?tt:a,onShellReady:o===void 0?tt:o,onShellError:s===void 0?tt:s,onFatalError:c===void 0?tt:c},n=it(t,0,null,n,!1,!1),n.parentFlushed=!0,e=rt(t,e,null,n,u,Ar,null,Nr),l.push(e),t}function rt(e,t,n,r,i,a,o,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var t=e.pingedTasks;t.push(c),t.length===1&&vt(e)},blockedBoundary:n,blockedSegment:r,abortSet:i,legacyContext:a,context:o,treeContext:s};return i.add(c),c}function it(e,t,n,r,i,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function at(e,t){if(e=e.onError(t),e!=null&&typeof e!=`string`)throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "`+typeof e+`" instead`);return e}function ot(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination===null?(e.status=1,e.fatalError=t):(e.status=2,e.destination.destroy(t))}function st(e,t,n,r,i){for(Rr={},zr=t,Wr=0,e=n(r,i);Ur;)Ur=!1,Wr=0,Kr+=1,Vr=null,e=n(r,i);return qe(),e}function ct(e,t,n,r){var i=n.render(),a=r.childContextTypes;if(a!=null){var o=t.legacyContext;if(typeof n.getChildContext!=`function`)r=o;else{for(var s in n=n.getChildContext(),n)if(!(s in a))throw Error(z(108,Me(r)||`Unknown`,s));r=fr({},o,n)}t.legacyContext=r,dt(e,t,i),t.legacyContext=o}else dt(e,t,i)}function lt(e,t){if(e&&e.defaultProps){for(var n in t=fr({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ut(e,t,n,r,i){if(typeof n==`function`)if(n.prototype&&n.prototype.isReactComponent){i=Ne(n,t.legacyContext);var a=n.contextType;a=new n(r,typeof a==`object`&&a?a._currentValue2:i),Be(a,n,r,i),ct(e,t,a,n)}else{a=Ne(n,t.legacyContext),i=st(e,t,n,r,a);var o=Wr!==0;if(typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0)Be(i,n,r,a),ct(e,t,i,n);else if(o){r=t.treeContext,t.treeContext=Ve(r,1,0);try{dt(e,t,i)}finally{t.treeContext=r}}else dt(e,t,i)}else{if(typeof n!=`string`){switch(n){case Dr:case Er:case gr:case _r:case hr:dt(e,t,r.children);return;case Sr:dt(e,t,r.children);return;case Tr:throw Error(z(343));case xr:e:{n=t.blockedBoundary,i=t.blockedSegment,a=r.fallback,r=r.children,o=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=it(e,i.chunks.length,s,i.formatContext,!1,!1);i.children.push(c),i.lastPushedText=!1;var l=it(e,0,null,i.formatContext,!1,!1);l.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=l;try{if(pt(e,t,r),e.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push(`<!-- -->`),l.status=1,gt(s,l),s.pendingTasks===0)break e}catch(t){l.status=4,s.forceClientRender=!0,s.errorDigest=at(e,t)}finally{t.blockedBoundary=n,t.blockedSegment=i}t=rt(e,a,n,c,o,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n==`object`&&n)switch(n.$$typeof){case br:if(r=st(e,t,n.render,r,i),Wr!==0){n=t.treeContext,t.treeContext=Ve(n,1,0);try{dt(e,t,r)}finally{t.treeContext=n}}else dt(e,t,r);return;case Cr:n=n.type,r=lt(n,r),ut(e,t,n,r,i);return;case vr:if(i=r.children,n=n._context,r=r.value,a=n._currentValue2,n._currentValue2=r,o=jr,jr=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:a,value:r},t.context=r,dt(e,t,i),e=jr,e===null)throw Error(z(403));r=e.parentValue,e.context._currentValue2=r===Or?e.context._defaultValue:r,e=jr=e.parent,t.context=e;return;case yr:r=r.children,r=r(n._currentValue2),dt(e,t,r);return;case wr:i=n._init,n=i(n._payload),r=lt(n,r),ut(e,t,n,r,void 0);return}throw Error(z(130,n==null?n:typeof n,``))}switch(i=t.blockedSegment,a=Te(i.chunks,n,r,e.responseState,i.formatContext),i.lastPushedText=!1,o=i.formatContext,i.formatContext=ve(o,n,r),pt(e,t,a),i.formatContext=o,n){case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break;default:i.chunks.push(`</`,n,`>`)}i.lastPushedText=!1}}function dt(e,t,n){if(t.node=n,typeof n==`object`&&n){switch(n.$$typeof){case pr:ut(e,t,n.type,n.props,n.ref);return;case mr:throw Error(z(257));case wr:var r=n._init;n=r(n._payload),dt(e,t,n);return}if(sr(n)){ft(e,t,n);return}if(typeof n!=`object`||!n?r=null:(r=kr&&n[kr]||n[`@@iterator`],r=typeof r==`function`?r:null),r&&=r.call(n)){if(n=r.next(),!n.done){var i=[];do i.push(n.value),n=r.next();while(!n.done);ft(e,t,i)}return}throw e=Object.prototype.toString.call(n),Error(z(31,e===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:e))}typeof n==`string`?(r=t.blockedSegment,r.lastPushedText=je(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n==`number`&&(r=t.blockedSegment,r.lastPushedText=je(t.blockedSegment.chunks,``+n,e.responseState,r.lastPushedText))}function ft(e,t,n){for(var r=n.length,i=0;i<r;i++){var a=t.treeContext;t.treeContext=Ve(a,r,i);try{pt(e,t,n[i])}finally{t.treeContext=a}}}function pt(e,t,n){var r=t.blockedSegment.formatContext,i=t.legacyContext,a=t.context;try{return dt(e,t,n)}catch(c){if(qe(),typeof c!=`object`||!c||typeof c.then!=`function`)throw t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,ze(a),c;n=c;var o=t.blockedSegment,s=it(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(s),o.lastPushedText=!1,e=rt(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,ze(a)}}function mt(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,_t(this,t,e)}function ht(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(z(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach((function(e){return ht(e,t,n)})),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function gt(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&gt(e,n)}else e.completedSegments.push(t)}function _t(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(z(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=tt,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&gt(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(mt,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(gt(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function vt(e){if(e.status!==2){var t=jr,n=Yr.current;Yr.current=qr;var r=Jr;Jr=e.responseState;try{var i,a=e.pingedTasks;for(i=0;i<a.length;i++){var o=a[i],s=e,c=o.blockedSegment;if(c.status===0){ze(o.context);try{dt(s,o,o.node),s.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push(`<!-- -->`),o.abortSet.delete(o),c.status=1,_t(s,o.blockedBoundary,c)}catch(e){if(qe(),typeof e==`object`&&e&&typeof e.then==`function`){var l=o.ping;e.then(l,l)}else{o.abortSet.delete(o),c.status=4;var u=o.blockedBoundary,d=e,f=at(s,d);if(u===null?ot(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}}}a.splice(0,i),e.destination!==null&&wt(e,e.destination)}catch(t){at(e,t),ot(e,t)}finally{Jr=r,Yr.current=n,n===qr&&ze(t)}}}function yt(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push(`<template id="`),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push(`"></template>`);case 1:n.status=2;var i=!0;r=n.chunks;var a=0;n=n.children;for(var o=0;o<n.length;o++){for(i=n[o];a<i.index;a++)t.push(r[a]);i=bt(e,t,i)}for(;a<r.length-1;a++)t.push(r[a]);return a<r.length&&(i=t.push(r[a])),i;default:throw Error(z(390))}}function bt(e,t,n){var r=n.boundary;if(r===null)return yt(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push(`<!--$!-->`),t.push(`<template`),r&&(t.push(` data-dgst="`),r=ge(r),t.push(r),t.push(`"`)),t.push(`></template>`)),yt(e,t,n),e=!!e.responseState.generateStaticMarkup||t.push(`<!--/$-->`),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var i=e.responseState,a=i.nextSuspenseID++;return i=i.boundaryPrefix+a.toString(16),r=r.id=i,Ee(t,e.responseState,r),yt(e,t,n),t.push(`<!--/$-->`)}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Ee(t,e.responseState,r.id),yt(e,t,n),t.push(`<!--/$-->`);if(e.responseState.generateStaticMarkup||t.push(`<!--$-->`),n=r.completedSegments,n.length!==1)throw Error(z(391));return bt(e,t,n[0]),e=!!e.responseState.generateStaticMarkup||t.push(`<!--/$-->`),e}function xt(e,t,n){return De(t,e.responseState,n.formatContext,n.id),bt(e,t,n),Oe(t,n.formatContext)}function St(e,t,n){for(var r=n.completedSegments,i=0;i<r.length;i++)Ct(e,t,n,r[i]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push(`$RC("`):(e.sentCompleteBoundaryFunction=!0,t.push(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`)),r===null)throw Error(z(395));return n=n.toString(16),t.push(r),t.push(`","`),t.push(e.segmentPrefix),t.push(n),t.push(`")<\/script>`)}function Ct(e,t,n,r){if(r.status===2)return!0;var i=r.id;if(i===-1){if((r.id=n.rootSegmentID)===-1)throw Error(z(392));return xt(e,t,r)}return xt(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push(`$RS("`):(e.sentCompleteSegmentFunction=!0,t.push(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`)),t.push(e.segmentPrefix),i=i.toString(16),t.push(i),t.push(`","`),t.push(e.placeholderPrefix),t.push(i),t.push(`")<\/script>`)}function wt(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){bt(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var i,a=e.clientRenderedBoundaries;for(i=0;i<a.length;i++){var o=a[i];r=t;var s=e.responseState,c=o.id,l=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push(`$RX("`):(s.sentClientRenderFunction=!0,r.push(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`)),c===null)throw Error(z(395));if(r.push(c),r.push(`"`),l||u||d){r.push(`,`);var f=ke(l||``);r.push(f)}if(u||d){r.push(`,`);var p=ke(u||``);r.push(p)}if(d){r.push(`,`);var m=ke(d);r.push(m)}if(!r.push(`)<\/script>`)){e.destination=null,i++,a.splice(0,i);return}}a.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)if(!St(e,t,h[i])){e.destination=null,i++,h.splice(0,i);return}h.splice(0,i);var g=e.partialBoundaries;for(i=0;i<g.length;i++){var _=g[i];e:{a=e,o=t;var v=_.completedSegments;for(s=0;s<v.length;s++)if(!Ct(a,o,_,v[s])){s++,v.splice(0,s);var y=!1;break e}v.splice(0,s),y=!0}if(!y){e.destination=null,i++,g.splice(0,i);return}}g.splice(0,i);var b=e.completedBoundaries;for(i=0;i<b.length;i++)if(!St(e,t,b[i])){e.destination=null,i++,b.splice(0,i);return}b.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function Tt(e,t){try{var n=e.abortableTasks;n.forEach((function(n){return ht(n,e,t)})),n.clear(),e.destination!==null&&wt(e,e.destination)}catch(t){at(e,t),ot(e,t)}}function Et(){}function Dt(e,t,n,r){var i=!1,a=null,o=``,s={push:function(e){return e!==null&&(o+=e),!0},destroy:function(e){i=!0,a=e}},c=!1;if(e=nt(e,Ae(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Et,void 0,(function(){c=!0}),void 0,void 0),vt(e),Tt(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{wt(e,s)}catch(t){at(e,t),ot(e,t)}}if(i)throw a;if(!c)throw Error(z(426));return o}function H(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function U(e,t){if(t.length!==0)if(512<t.length)0<ei&&(e.enqueue(new Uint8Array($r.buffer,0,ei)),$r=new Uint8Array(512),ei=0),e.enqueue(t);else{var n=$r.length-ei;n<t.length&&(n===0?e.enqueue($r):($r.set(t.subarray(0,n),ei),e.enqueue($r),t=t.subarray(n)),$r=new Uint8Array(512),ei=0),$r.set(t,ei),ei+=t.length}}function Ot(e,t){return U(e,t),!0}function kt(e){$r&&0<ei&&(e.enqueue(new Uint8Array($r.buffer,0,ei)),$r=null,ei=0)}function W(e){return ti.encode(e)}function G(e){return ti.encode(e)}function At(e,t){typeof e.error==`function`?e.error(t):e.close()}function jt(e){return ni.call(ai,e)?!0:ni.call(ii,e)?!1:ri.test(e)?ai[e]=!0:(ii[e]=!0,!1)}function Mt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}function Nt(e){return e[1].toUpperCase()}function Pt(e){if(typeof e==`boolean`||typeof e==`number`)return``+e;e=``+e;var t=ui.exec(e);if(t){var n,r=``,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=t}e=i===n?r:r+e.substring(i,n)}return e}function Ft(e,t,n,r){return t+(n===`s`?`\\u0073`:`\\u0053`)+r}function It(e,t,n,r,i){e=e===void 0?``:e,t=t===void 0?mi:G(`<script nonce="`+Pt(t)+`">`);var a=[];if(n!==void 0&&a.push(t,W((``+n).replace(yi,Ft)),hi),r!==void 0)for(n=0;n<r.length;n++)a.push(gi,W(Pt(r[n])),vi);if(i!==void 0)for(r=0;r<i.length;r++)a.push(_i,W(Pt(i[r])),vi);return{bootstrapChunks:a,startInlineScript:t,placeholderPrefix:G(e+`P:`),segmentPrefix:G(e+`S:`),boundaryPrefix:e+`B:`,idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Lt(e,t){return{insertionMode:e,selectedValue:t}}function Rt(e){return Lt(e===`http://www.w3.org/2000/svg`?2:e===`http://www.w3.org/1998/Math/MathML`?3:0,null)}function zt(e,t,n){switch(t){case`select`:return Lt(1,n.value==null?n.defaultValue:n.value);case`svg`:return Lt(2,null);case`math`:return Lt(3,null);case`foreignObject`:return Lt(1,null);case`table`:return Lt(4,null);case`thead`:case`tbody`:case`tfoot`:return Lt(5,null);case`colgroup`:return Lt(7,null);case`tr`:return Lt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Lt(1,null):e}function Bt(e,t,n,r){return t===``?r:(r&&e.push(bi),e.push(W(Pt(t))),!0)}function Vt(e,t,n){if(typeof n!=`object`)throw Error(H(62));for(var r in t=!0,n)if(ni.call(n,r)){var i=n[r];if(i!=null&&typeof i!=`boolean`&&i!==``){if(r.indexOf(`--`)===0){var a=W(Pt(r));i=W(Pt((``+i).trim()))}else{a=r;var o=xi.get(a);o!==void 0||(o=G(Pt(a.replace(di,`-$1`).toLowerCase().replace(fi,`-ms-`))),xi.set(a,o)),a=o,i=typeof i==`number`?i===0||ni.call(ci,r)?W(``+i):W(i+`px`):W(Pt((``+i).trim()))}t?(t=!1,e.push(Si,a,Ci,i)):e.push(wi,a,Ci,i)}}t||e.push(Di)}function Ht(e,t,n,r){switch(n){case`style`:Vt(e,t,r);return;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:return}if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`){if(t=oi.hasOwnProperty(n)?oi[n]:null,t!==null){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(!t.acceptsBooleans)return}switch(n=W(t.attributeName),t.type){case 3:r&&e.push(Ti,n,Oi);break;case 4:!0===r?e.push(Ti,n,Oi):!1!==r&&e.push(Ti,n,Ei,W(Pt(r)),Di);break;case 5:isNaN(r)||e.push(Ti,n,Ei,W(Pt(r)),Di);break;case 6:!isNaN(r)&&1<=r&&e.push(Ti,n,Ei,W(Pt(r)),Di);break;default:t.sanitizeURL&&(r=``+r),e.push(Ti,n,Ei,W(Pt(r)),Di)}}else if(jt(n)){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(t=n.toLowerCase().slice(0,5),t!==`data-`&&t!==`aria-`)return}e.push(Ti,W(n),Ei,W(Pt(r)),Di)}}}function Ut(e,t,n){if(t!=null){if(n!=null)throw Error(H(60));if(typeof t!=`object`||!(`__html`in t))throw Error(H(61));t=t.__html,t!=null&&e.push(W(``+t))}}function Wt(e){var t=``;return Qr.Children.forEach(e,(function(e){e!=null&&(t+=e)})),t}function Gt(e,t,n,r){e.push(Kt(n));var i,a=n=null;for(i in t)if(ni.call(t,i)){var o=t[i];if(o!=null)switch(i){case`children`:n=o;break;case`dangerouslySetInnerHTML`:a=o;break;default:Ht(e,r,i,o)}}return e.push(ki),Ut(e,a,n),typeof n==`string`?(e.push(W(Pt(n))),null):n}function Kt(e){var t=Pi.get(e);if(t===void 0){if(!Ni.test(e))throw Error(H(65,e));t=G(`<`+e),Pi.set(e,t)}return t}function qt(e,t,n,r,i){switch(t){case`select`:e.push(Kt(`select`));var a=null,o=null;for(u in n)if(ni.call(n,u)){var s=n[u];if(s!=null)switch(u){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`defaultValue`:case`value`:break;default:Ht(e,r,u,s)}}return e.push(ki),Ut(e,o,a),a;case`option`:o=i.selectedValue,e.push(Kt(`option`));var c=s=null,l=null,u=null;for(a in n)if(ni.call(n,a)){var d=n[a];if(d!=null)switch(a){case`children`:s=d;break;case`selected`:l=d;break;case`dangerouslySetInnerHTML`:u=d;break;case`value`:c=d;default:Ht(e,r,a,d)}}if(o!=null)if(n=c===null?Wt(s):``+c,pi(o)){for(r=0;r<o.length;r++)if(``+o[r]===n){e.push(ji);break}}else``+o===n&&e.push(ji);else l&&e.push(ji);return e.push(ki),Ut(e,u,s),s;case`textarea`:for(s in e.push(Kt(`textarea`)),u=o=a=null,n)if(ni.call(n,s)&&(c=n[s],c!=null))switch(s){case`children`:u=c;break;case`value`:a=c;break;case`defaultValue`:o=c;break;case`dangerouslySetInnerHTML`:throw Error(H(91));default:Ht(e,r,s,c)}if(a===null&&o!==null&&(a=o),e.push(ki),u!=null){if(a!=null)throw Error(H(92));if(pi(u)&&1<u.length)throw Error(H(93));a=``+u}return typeof a==`string`&&a[0]===`
`&&e.push(Mi),a!==null&&e.push(W(Pt(``+a))),null;case`input`:for(o in e.push(Kt(`input`)),c=u=s=a=null,n)if(ni.call(n,o)&&(l=n[o],l!=null))switch(o){case`children`:case`dangerouslySetInnerHTML`:throw Error(H(399,`input`));case`defaultChecked`:c=l;break;case`defaultValue`:s=l;break;case`checked`:u=l;break;case`value`:a=l;break;default:Ht(e,r,o,l)}return u===null?c!==null&&Ht(e,r,`checked`,c):Ht(e,r,`checked`,u),a===null?s!==null&&Ht(e,r,`value`,s):Ht(e,r,`value`,a),e.push(Ai),null;case`menuitem`:for(var f in e.push(Kt(`menuitem`)),n)if(ni.call(n,f)&&(a=n[f],a!=null))switch(f){case`children`:case`dangerouslySetInnerHTML`:throw Error(H(400));default:Ht(e,r,f,a)}return e.push(ki),null;case`title`:for(d in e.push(Kt(`title`)),a=null,n)if(ni.call(n,d)&&(o=n[d],o!=null))switch(d){case`children`:a=o;break;case`dangerouslySetInnerHTML`:throw Error(H(434));default:Ht(e,r,d,o)}return e.push(ki),a;case`listing`:case`pre`:for(c in e.push(Kt(t)),o=a=null,n)if(ni.call(n,c)&&(s=n[c],s!=null))switch(c){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;default:Ht(e,r,c,s)}if(e.push(ki),o!=null){if(a!=null)throw Error(H(60));if(typeof o!=`object`||!(`__html`in o))throw Error(H(61));n=o.__html,n!=null&&(typeof n==`string`&&0<n.length&&n[0]===`
`?e.push(Mi,W(n)):e.push(W(``+n)))}return typeof a==`string`&&a[0]===`
`&&e.push(Mi),a;case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:for(var p in e.push(Kt(t)),n)if(ni.call(n,p)&&(a=n[p],a!=null))switch(p){case`children`:case`dangerouslySetInnerHTML`:throw Error(H(399,t));default:Ht(e,r,p,a)}return e.push(Ai),null;case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return Gt(e,n,t,r);case`html`:return i.insertionMode===0&&e.push(Fi),Gt(e,n,t,r);default:if(t.indexOf(`-`)===-1&&typeof n.is!=`string`)return Gt(e,n,t,r);for(l in e.push(Kt(t)),o=a=null,n)if(ni.call(n,l)&&(s=n[l],s!=null))switch(l){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`style`:Vt(e,r,s);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:break;default:jt(l)&&typeof s!=`function`&&typeof s!=`symbol`&&e.push(Ti,W(l),Ei,W(Pt(s)),Di)}return e.push(ki),Ut(e,o,a),a}}function Jt(e,t,n){if(U(e,Vi),n===null)throw Error(H(395));return U(e,n),Ot(e,Hi)}function Yt(e,t,n,r){switch(n.insertionMode){case 0:case 1:return U(e,Yi),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,Xi);case 2:return U(e,Qi),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,$i);case 3:return U(e,ta),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,na);case 4:return U(e,ia),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,aa);case 5:return U(e,sa),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,ca);case 6:return U(e,ua),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,da);case 7:return U(e,pa),U(e,t.segmentPrefix),U(e,W(r.toString(16))),Ot(e,ma);default:throw Error(H(397))}}function Xt(e,t){switch(t.insertionMode){case 0:case 1:return Ot(e,Zi);case 2:return Ot(e,ea);case 3:return Ot(e,ra);case 4:return Ot(e,oa);case 5:return Ot(e,la);case 6:return Ot(e,fa);case 7:return Ot(e,ha);default:throw Error(H(397))}}function Zt(e){return JSON.stringify(e).replace(ka,(function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}))}function Qt(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case Na:return`Fragment`;case Ma:return`Portal`;case Fa:return`Profiler`;case Pa:return`StrictMode`;case za:return`Suspense`;case Ba:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case La:return(e.displayName||`Context`)+`.Consumer`;case Ia:return(e._context.displayName||`Context`)+`.Provider`;case Ra:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Va:return t=e.displayName||null,t===null?Qt(e.type)||`Memo`:t;case Ha:t=e._payload,e=e._init;try{return Qt(e(t))}catch{}}return null}function $t(e,t){if(e=e.contextTypes,!e)return Ja;var n,r={};for(n in e)r[n]=t[n];return r}function en(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(H(401))}else{if(n===null)throw Error(H(401));en(e,n)}t.context._currentValue=t.value}}function tn(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&tn(e)}function nn(e){var t=e.parent;t!==null&&nn(t),e.context._currentValue=e.value}function rn(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(H(402));e.depth===t.depth?en(e,t):rn(e,t)}function an(e,t){var n=t.parent;if(n===null)throw Error(H(402));e.depth===n.depth?en(e,n):an(e,n),t.context._currentValue=t.value}function on(e){var t=Ya;t!==e&&(t===null?nn(e):e===null?tn(t):t.depth===e.depth?en(t,e):t.depth>e.depth?rn(t,e):an(t,e),Ya=e)}function sn(e,t,n,r){var i=e.state===void 0?null:e.state;e.updater=Xa,e.props=n,e.state=i;var a={queue:[],replace:!1};e._reactInternals=a;var o=t.contextType;if(e.context=typeof o==`object`&&o?o._currentValue:r,o=t.getDerivedStateFromProps,typeof o==`function`&&(o=o(n,i),i=o==null?i:Aa({},i,o),e.state=i),typeof t.getDerivedStateFromProps!=`function`&&typeof e.getSnapshotBeforeUpdate!=`function`&&(typeof e.UNSAFE_componentWillMount==`function`||typeof e.componentWillMount==`function`))if(t=e.state,typeof e.componentWillMount==`function`&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount==`function`&&e.UNSAFE_componentWillMount(),t!==e.state&&Xa.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length)if(t=a.queue,o=a.replace,a.queue=null,a.replace=!1,o&&t.length===1)e.state=t[0];else{for(a=o?t[0]:e.state,i=!0,o=+!!o;o<t.length;o++){var s=t[o];s=typeof s==`function`?s.call(e,a,n,r):s,s!=null&&(i?(i=!1,a=Aa({},a,s)):Aa(a,s))}e.state=a}else a.queue=null}function cn(e,t,n){var r=e.id;e=e.overflow;var i=32-Qa(r)-1;r&=~(1<<i),n+=1;var a=32-Qa(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Qa(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}function ln(e){return e>>>=0,e===0?32:31-($a(e)/eo|0)|0}function un(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function dn(){if(no===null)throw Error(H(321));return no}function fn(){if(0<uo)throw Error(H(312));return{memoizedState:null,queue:null,next:null}}function pn(){return ao===null?io===null?(oo=!1,io=ao=fn()):(oo=!0,ao=io):ao.next===null?(oo=!1,ao=ao.next=fn()):(oo=!0,ao=ao.next),ao}function mn(){ro=no=null,so=!1,io=null,uo=0,ao=lo=null}function hn(e,t){return typeof t==`function`?t(e):t}function gn(e,t,n){if(no=dn(),ao=pn(),oo){var r=ao.queue;if(t=r.dispatch,lo!==null&&(n=lo.get(r),n!==void 0)){lo.delete(r),r=ao.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return ao.memoizedState=r,[r,t]}return[ao.memoizedState,t]}return e=e===hn?typeof t==`function`?t():t:n===void 0?t:n(t),ao.memoizedState=e,e=ao.queue={last:null,dispatch:null},e=e.dispatch=vn.bind(null,no,e),[ao.memoizedState,e]}function _n(e,t){if(no=dn(),ao=pn(),t=t===void 0?null:t,ao!==null){var n=ao.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!to(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),ao.memoizedState=[e,t],e}function vn(e,t,n){if(25<=uo)throw Error(H(301));if(e===no)if(so=!0,e={action:n,next:null},lo===null&&(lo=new Map),n=lo.get(t),n===void 0)lo.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function yn(){throw Error(H(394))}function bn(){}function xn(e){return console.error(e),null}function Sn(){}function Cn(e,t,n,r,i,a,o,s,c){var l=[],u=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:l,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:i===void 0?xn:i,onAllReady:a===void 0?Sn:a,onShellReady:o===void 0?Sn:o,onShellError:s===void 0?Sn:s,onFatalError:c===void 0?Sn:c},n=Tn(t,0,null,n,!1,!1),n.parentFlushed=!0,e=wn(t,e,null,n,u,Ja,null,Za),l.push(e),t}function wn(e,t,n,r,i,a,o,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var t=e.pingedTasks;t.push(c),t.length===1&&zn(e)},blockedBoundary:n,blockedSegment:r,abortSet:i,legacyContext:a,context:o,treeContext:s};return i.add(c),c}function Tn(e,t,n,r,i,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function En(e,t){if(e=e.onError(t),e!=null&&typeof e!=`string`)throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "`+typeof e+`" instead`);return e}function Dn(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination===null?(e.status=1,e.fatalError=t):(e.status=2,At(e.destination,t))}function On(e,t,n,r,i){for(no={},ro=t,co=0,e=n(r,i);so;)so=!1,co=0,uo+=1,ao=null,e=n(r,i);return mn(),e}function kn(e,t,n,r){var i=n.render(),a=r.childContextTypes;if(a!=null){var o=t.legacyContext;if(typeof n.getChildContext!=`function`)r=o;else{for(var s in n=n.getChildContext(),n)if(!(s in a))throw Error(H(108,Qt(r)||`Unknown`,s));r=Aa({},o,n)}t.legacyContext=r,Mn(e,t,i),t.legacyContext=o}else Mn(e,t,i)}function An(e,t){if(e&&e.defaultProps){for(var n in t=Aa({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jn(e,t,n,r,i){if(typeof n==`function`)if(n.prototype&&n.prototype.isReactComponent){i=$t(n,t.legacyContext);var a=n.contextType;a=new n(r,typeof a==`object`&&a?a._currentValue:i),sn(a,n,r,i),kn(e,t,a,n)}else{a=$t(n,t.legacyContext),i=On(e,t,n,r,a);var o=co!==0;if(typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0)sn(i,n,r,a),kn(e,t,i,n);else if(o){r=t.treeContext,t.treeContext=cn(r,1,0);try{Mn(e,t,i)}finally{t.treeContext=r}}else Mn(e,t,i)}else{if(typeof n!=`string`){switch(n){case Ga:case Wa:case Pa:case Fa:case Na:Mn(e,t,r.children);return;case Ba:Mn(e,t,r.children);return;case Ua:throw Error(H(343));case za:e:{n=t.blockedBoundary,i=t.blockedSegment,a=r.fallback,r=r.children,o=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=Tn(e,i.chunks.length,s,i.formatContext,!1,!1);i.children.push(c),i.lastPushedText=!1;var l=Tn(e,0,null,i.formatContext,!1,!1);l.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=l;try{if(Pn(e,t,r),l.lastPushedText&&l.textEmbedded&&l.chunks.push(bi),l.status=1,Ln(s,l),s.pendingTasks===0)break e}catch(t){l.status=4,s.forceClientRender=!0,s.errorDigest=En(e,t)}finally{t.blockedBoundary=n,t.blockedSegment=i}t=wn(e,a,n,c,o,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n==`object`&&n)switch(n.$$typeof){case Ra:if(r=On(e,t,n.render,r,i),co!==0){n=t.treeContext,t.treeContext=cn(n,1,0);try{Mn(e,t,r)}finally{t.treeContext=n}}else Mn(e,t,r);return;case Va:n=n.type,r=An(n,r),jn(e,t,n,r,i);return;case Ia:if(i=r.children,n=n._context,r=r.value,a=n._currentValue,n._currentValue=r,o=Ya,Ya=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:a,value:r},t.context=r,Mn(e,t,i),e=Ya,e===null)throw Error(H(403));r=e.parentValue,e.context._currentValue=r===Ka?e.context._defaultValue:r,e=Ya=e.parent,t.context=e;return;case La:r=r.children,r=r(n._currentValue),Mn(e,t,r);return;case Ha:i=n._init,n=i(n._payload),r=An(n,r),jn(e,t,n,r,void 0);return}throw Error(H(130,n==null?n:typeof n,``))}switch(i=t.blockedSegment,a=qt(i.chunks,n,r,e.responseState,i.formatContext),i.lastPushedText=!1,o=i.formatContext,i.formatContext=zt(o,n,r),Pn(e,t,a),i.formatContext=o,n){case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break;default:i.chunks.push(Ii,W(n),Li)}i.lastPushedText=!1}}function Mn(e,t,n){if(t.node=n,typeof n==`object`&&n){switch(n.$$typeof){case ja:jn(e,t,n.type,n.props,n.ref);return;case Ma:throw Error(H(257));case Ha:var r=n._init;n=r(n._payload),Mn(e,t,n);return}if(pi(n)){Nn(e,t,n);return}if(typeof n!=`object`||!n?r=null:(r=qa&&n[qa]||n[`@@iterator`],r=typeof r==`function`?r:null),r&&=r.call(n)){if(n=r.next(),!n.done){var i=[];do i.push(n.value),n=r.next();while(!n.done);Nn(e,t,i)}return}throw e=Object.prototype.toString.call(n),Error(H(31,e===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:e))}typeof n==`string`?(r=t.blockedSegment,r.lastPushedText=Bt(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n==`number`&&(r=t.blockedSegment,r.lastPushedText=Bt(t.blockedSegment.chunks,``+n,e.responseState,r.lastPushedText))}function Nn(e,t,n){for(var r=n.length,i=0;i<r;i++){var a=t.treeContext;t.treeContext=cn(a,r,i);try{Pn(e,t,n[i])}finally{t.treeContext=a}}}function Pn(e,t,n){var r=t.blockedSegment.formatContext,i=t.legacyContext,a=t.context;try{return Mn(e,t,n)}catch(c){if(mn(),typeof c!=`object`||!c||typeof c.then!=`function`)throw t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,on(a),c;n=c;var o=t.blockedSegment,s=Tn(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(s),o.lastPushedText=!1,e=wn(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,on(a)}}function Fn(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Rn(this,t,e)}function In(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(H(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach((function(e){return In(e,t,n)})),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Ln(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Ln(e,n)}else e.completedSegments.push(t)}function Rn(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(H(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Sn,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Ln(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(Fn,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Ln(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function zn(e){if(e.status!==2){var t=Ya,n=mo.current;mo.current=fo;var r=po;po=e.responseState;try{var i,a=e.pingedTasks;for(i=0;i<a.length;i++){var o=a[i],s=e,c=o.blockedSegment;if(c.status===0){on(o.context);try{Mn(s,o,o.node),c.lastPushedText&&c.textEmbedded&&c.chunks.push(bi),o.abortSet.delete(o),c.status=1,Rn(s,o.blockedBoundary,c)}catch(e){if(mn(),typeof e==`object`&&e&&typeof e.then==`function`){var l=o.ping;e.then(l,l)}else{o.abortSet.delete(o),c.status=4;var u=o.blockedBoundary,d=e,f=En(s,d);if(u===null?Dn(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}}}a.splice(0,i),e.destination!==null&&Gn(e,e.destination)}catch(t){En(e,t),Dn(e,t)}finally{po=r,mo.current=n,n===fo&&on(t)}}}function Bn(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,U(t,Ri),U(t,e.placeholderPrefix),e=W(r.toString(16)),U(t,e),Ot(t,zi);case 1:n.status=2;var i=!0;r=n.chunks;var a=0;n=n.children;for(var o=0;o<n.length;o++){for(i=n[o];a<i.index;a++)U(t,r[a]);i=Vn(e,t,i)}for(;a<r.length-1;a++)U(t,r[a]);return a<r.length&&(i=Ot(t,r[a])),i;default:throw Error(H(390))}}function Vn(e,t,n){var r=n.boundary;if(r===null)return Bn(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Ot(t,Ui),U(t,Gi),r&&(U(t,qi),U(t,W(Pt(r))),U(t,Ki)),Ot(t,Ji),Bn(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var i=e.responseState,a=i.nextSuspenseID++;i=G(i.boundaryPrefix+a.toString(16)),r=r.id=i,Jt(t,e.responseState,r),Bn(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Jt(t,e.responseState,r.id),Bn(e,t,n);else{if(Ot(t,Bi),n=r.completedSegments,n.length!==1)throw Error(H(391));Vn(e,t,n[0])}return Ot(t,Wi)}function Hn(e,t,n){return Yt(t,e.responseState,n.formatContext,n.id),Vn(e,t,n),Xt(t,n.formatContext)}function Un(e,t,n){for(var r=n.completedSegments,i=0;i<r.length;i++)Wn(e,t,n,r[i]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,U(t,e.startInlineScript),e.sentCompleteBoundaryFunction?U(t,xa):(e.sentCompleteBoundaryFunction=!0,U(t,ba)),r===null)throw Error(H(395));return n=W(n.toString(16)),U(t,r),U(t,Sa),U(t,e.segmentPrefix),U(t,n),Ot(t,Ca)}function Wn(e,t,n,r){if(r.status===2)return!0;var i=r.id;if(i===-1){if((r.id=n.rootSegmentID)===-1)throw Error(H(392));return Hn(e,t,r)}return Hn(e,t,r),e=e.responseState,U(t,e.startInlineScript),e.sentCompleteSegmentFunction?U(t,_a):(e.sentCompleteSegmentFunction=!0,U(t,ga)),U(t,e.segmentPrefix),i=W(i.toString(16)),U(t,i),U(t,va),U(t,e.placeholderPrefix),U(t,i),Ot(t,ya)}function Gn(e,t){$r=new Uint8Array(512),ei=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Vn(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)U(t,r[n]);n<r.length&&Ot(t,r[n])}var i,a=e.clientRenderedBoundaries;for(i=0;i<a.length;i++){var o=a[i];r=t;var s=e.responseState,c=o.id,l=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(U(r,s.startInlineScript),s.sentClientRenderFunction?U(r,Ta):(s.sentClientRenderFunction=!0,U(r,wa)),c===null)throw Error(H(395));if(U(r,c),U(r,Ea),(l||u||d)&&(U(r,Oa),U(r,W(Zt(l||``)))),(u||d)&&(U(r,Oa),U(r,W(Zt(u||``)))),d&&(U(r,Oa),U(r,W(Zt(d)))),!Ot(r,Da)){e.destination=null,i++,a.splice(0,i);return}}a.splice(0,i);var f=e.completedBoundaries;for(i=0;i<f.length;i++)if(!Un(e,t,f[i])){e.destination=null,i++,f.splice(0,i);return}f.splice(0,i),kt(t),$r=new Uint8Array(512),ei=0;var p=e.partialBoundaries;for(i=0;i<p.length;i++){var m=p[i];e:{a=e,o=t;var h=m.completedSegments;for(s=0;s<h.length;s++)if(!Wn(a,o,m,h[s])){s++,h.splice(0,s);var g=!1;break e}h.splice(0,s),g=!0}if(!g){e.destination=null,i++,p.splice(0,i);return}}p.splice(0,i);var _=e.completedBoundaries;for(i=0;i<_.length;i++)if(!Un(e,t,_[i])){e.destination=null,i++,_.splice(0,i);return}_.splice(0,i)}finally{kt(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Kn(e,t){try{var n=e.abortableTasks;n.forEach((function(n){return In(n,e,t)})),n.clear(),e.destination!==null&&Gn(e,e.destination)}catch(t){En(e,t),Dn(e,t)}}var qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo=t((()=>{r(),qn=`default`in d?f:d,Jn={},Yn=qn,Xn=Object.prototype.hasOwnProperty,Zn=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qn={},$n={},er={},`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function(e){er[e]=new V(e,0,!1,e,null,!1,!1)})),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach((function(e){var t=e[0];er[t]=new V(t,1,!1,e[1],null,!1,!1)})),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach((function(e){er[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)})),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach((function(e){er[e]=new V(e,2,!1,e,null,!1,!1)})),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function(e){er[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)})),[`checked`,`multiple`,`muted`,`selected`].forEach((function(e){er[e]=new V(e,3,!0,e,null,!1,!1)})),[`capture`,`download`].forEach((function(e){er[e]=new V(e,4,!1,e,null,!1,!1)})),[`cols`,`rows`,`size`,`span`].forEach((function(e){er[e]=new V(e,6,!1,e,null,!1,!1)})),[`rowSpan`,`start`].forEach((function(e){er[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)})),tr=/[\-:]([a-z])/g,`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function(e){var t=e.replace(tr,he);er[t]=new V(t,1,!1,e,null,!1,!1)})),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function(e){var t=e.replace(tr,he);er[t]=new V(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)})),[`xml:base`,`xml:lang`,`xml:space`].forEach((function(e){var t=e.replace(tr,he);er[t]=new V(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)})),[`tabIndex`,`crossOrigin`].forEach((function(e){er[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)})),er.xlinkHref=new V(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach((function(e){er[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)})),nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rr=[`Webkit`,`ms`,`Moz`,`O`],Object.keys(nr).forEach((function(e){rr.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]}))})),ir=/["'&<>]/,ar=/([A-Z])/g,or=/^ms-/,sr=Array.isArray,cr=new Map,lr=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ur=new Map,dr=/[<\u2028\u2029]/g,fr=Object.assign,pr=Symbol.for(`react.element`),mr=Symbol.for(`react.portal`),hr=Symbol.for(`react.fragment`),gr=Symbol.for(`react.strict_mode`),_r=Symbol.for(`react.profiler`),vr=Symbol.for(`react.provider`),yr=Symbol.for(`react.context`),br=Symbol.for(`react.forward_ref`),xr=Symbol.for(`react.suspense`),Sr=Symbol.for(`react.suspense_list`),Cr=Symbol.for(`react.memo`),wr=Symbol.for(`react.lazy`),Tr=Symbol.for(`react.scope`),Er=Symbol.for(`react.debug_trace_mode`),Dr=Symbol.for(`react.legacy_hidden`),Or=Symbol.for(`react.default_value`),kr=Symbol.iterator,Ar={},jr=null,Mr={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Nr={id:1,overflow:``},Pr=Math.clz32?Math.clz32:He,Fr=Math.log,Ir=Math.LN2,Lr=typeof Object.is==`function`?Object.is:Ue,Rr=null,zr=null,Br=null,Vr=null,Hr=!1,Ur=!1,Wr=0,Gr=null,Kr=0,qr={readContext:function(e){return e._currentValue2},useContext:function(e){return We(),e._currentValue2},useMemo:Xe,useReducer:Ye,useRef:function(e){Rr=We(),Vr=Ke();var t=Vr.memoizedState;return t===null?(e={current:e},Vr.memoizedState=e):t},useState:function(e){return Ye(Je,e)},useInsertionEffect:$e,useLayoutEffect:function(){},useCallback:function(e,t){return Xe((function(){return e}),t)},useImperativeHandle:$e,useEffect:$e,useDebugValue:$e,useDeferredValue:function(e){return We(),e},useTransition:function(){return We(),[!1,Qe]},useId:function(){var e=zr.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Pr(e)-1)).toString(32)+t;var n=Jr;if(n===null)throw Error(z(404));return t=Wr++,e=`:`+n.idPrefix+`R`+e,0<t&&(e+=`H`+t.toString(32)),e+`:`},useMutableSource:function(e,t){return We(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(z(407));return n()}},Jr=null,Yr=Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,Jn.renderToNodeStream=function(){throw Error(z(207))},Jn.renderToStaticMarkup=function(e,t){return Dt(e,t,!0,`The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},Jn.renderToStaticNodeStream=function(){throw Error(z(208))},Jn.renderToString=function(e,t){return Dt(e,t,!1,`The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},Jn.version=`18.2.0`,Xr=`default`in d?f:d,Zr={},Qr=Xr,$r=null,ei=0,ti=new TextEncoder,ni=Object.prototype.hasOwnProperty,ri=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ii={},ai={},oi={},`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function(e){oi[e]=new Mt(e,0,!1,e,null,!1,!1)})),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach((function(e){var t=e[0];oi[t]=new Mt(t,1,!1,e[1],null,!1,!1)})),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach((function(e){oi[e]=new Mt(e,2,!1,e.toLowerCase(),null,!1,!1)})),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach((function(e){oi[e]=new Mt(e,2,!1,e,null,!1,!1)})),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function(e){oi[e]=new Mt(e,3,!1,e.toLowerCase(),null,!1,!1)})),[`checked`,`multiple`,`muted`,`selected`].forEach((function(e){oi[e]=new Mt(e,3,!0,e,null,!1,!1)})),[`capture`,`download`].forEach((function(e){oi[e]=new Mt(e,4,!1,e,null,!1,!1)})),[`cols`,`rows`,`size`,`span`].forEach((function(e){oi[e]=new Mt(e,6,!1,e,null,!1,!1)})),[`rowSpan`,`start`].forEach((function(e){oi[e]=new Mt(e,5,!1,e.toLowerCase(),null,!1,!1)})),si=/[\-:]([a-z])/g,`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function(e){var t=e.replace(si,Nt);oi[t]=new Mt(t,1,!1,e,null,!1,!1)})),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function(e){var t=e.replace(si,Nt);oi[t]=new Mt(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)})),[`xml:base`,`xml:lang`,`xml:space`].forEach((function(e){var t=e.replace(si,Nt);oi[t]=new Mt(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)})),[`tabIndex`,`crossOrigin`].forEach((function(e){oi[e]=new Mt(e,1,!1,e.toLowerCase(),null,!1,!1)})),oi.xlinkHref=new Mt(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach((function(e){oi[e]=new Mt(e,1,!1,e.toLowerCase(),null,!0,!0)})),ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},li=[`Webkit`,`ms`,`Moz`,`O`],Object.keys(ci).forEach((function(e){li.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]}))})),ui=/["'&<>]/,di=/([A-Z])/g,fi=/^ms-/,pi=Array.isArray,mi=G(`<script>`),hi=G(`<\/script>`),gi=G(`<script src="`),_i=G(`<script type="module" src="`),vi=G(`" async=""><\/script>`),yi=/(<\/|<)(s)(cript)/gi,bi=G(`<!-- -->`),xi=new Map,Si=G(` style="`),Ci=G(`:`),wi=G(`;`),Ti=G(` `),Ei=G(`="`),Di=G(`"`),Oi=G(`=""`),ki=G(`>`),Ai=G(`/>`),ji=G(` selected=""`),Mi=G(`
`),Ni=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Pi=new Map,Fi=G(`<!DOCTYPE html>`),Ii=G(`</`),Li=G(`>`),Ri=G(`<template id="`),zi=G(`"></template>`),Bi=G(`<!--$-->`),Vi=G(`<!--$?--><template id="`),Hi=G(`"></template>`),Ui=G(`<!--$!-->`),Wi=G(`<!--/$-->`),Gi=G(`<template`),Ki=G(`"`),qi=G(` data-dgst="`),G(` data-msg="`),G(` data-stck="`),Ji=G(`></template>`),Yi=G(`<div hidden id="`),Xi=G(`">`),Zi=G(`</div>`),Qi=G(`<svg aria-hidden="true" style="display:none" id="`),$i=G(`">`),ea=G(`</svg>`),ta=G(`<math aria-hidden="true" style="display:none" id="`),na=G(`">`),ra=G(`</math>`),ia=G(`<table hidden id="`),aa=G(`">`),oa=G(`</table>`),sa=G(`<table hidden><tbody id="`),ca=G(`">`),la=G(`</tbody></table>`),ua=G(`<table hidden><tr id="`),da=G(`">`),fa=G(`</tr></table>`),pa=G(`<table hidden><colgroup id="`),ma=G(`">`),ha=G(`</colgroup></table>`),ga=G(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`),_a=G(`$RS("`),va=G(`","`),ya=G(`")<\/script>`),ba=G(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`),xa=G(`$RC("`),Sa=G(`","`),Ca=G(`")<\/script>`),wa=G(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`),Ta=G(`$RX("`),Ea=G(`"`),Da=G(`)<\/script>`),Oa=G(`,`),ka=/[<\u2028\u2029]/g,Aa=Object.assign,ja=Symbol.for(`react.element`),Ma=Symbol.for(`react.portal`),Na=Symbol.for(`react.fragment`),Pa=Symbol.for(`react.strict_mode`),Fa=Symbol.for(`react.profiler`),Ia=Symbol.for(`react.provider`),La=Symbol.for(`react.context`),Ra=Symbol.for(`react.forward_ref`),za=Symbol.for(`react.suspense`),Ba=Symbol.for(`react.suspense_list`),Va=Symbol.for(`react.memo`),Ha=Symbol.for(`react.lazy`),Ua=Symbol.for(`react.scope`),Wa=Symbol.for(`react.debug_trace_mode`),Ga=Symbol.for(`react.legacy_hidden`),Ka=Symbol.for(`react.default_value`),qa=Symbol.iterator,Ja={},Ya=null,Xa={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Za={id:1,overflow:``},Qa=Math.clz32?Math.clz32:ln,$a=Math.log,eo=Math.LN2,to=typeof Object.is==`function`?Object.is:un,no=null,ro=null,io=null,ao=null,oo=!1,so=!1,co=0,lo=null,uo=0,fo={readContext:function(e){return e._currentValue},useContext:function(e){return dn(),e._currentValue},useMemo:_n,useReducer:gn,useRef:function(e){no=dn(),ao=pn();var t=ao.memoizedState;return t===null?(e={current:e},ao.memoizedState=e):t},useState:function(e){return gn(hn,e)},useInsertionEffect:bn,useLayoutEffect:function(){},useCallback:function(e,t){return _n((function(){return e}),t)},useImperativeHandle:bn,useEffect:bn,useDebugValue:bn,useDeferredValue:function(e){return dn(),e},useTransition:function(){return dn(),[!1,yn]},useId:function(){var e=ro.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Qa(e)-1)).toString(32)+t;var n=po;if(n===null)throw Error(H(404));return t=co++,e=`:`+n.idPrefix+`R`+e,0<t&&(e+=`H`+t.toString(32)),e+`:`},useMutableSource:function(e,t){return dn(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(H(407));return n()}},po=null,mo=Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,Zr.renderToReadableStream=function(e,t){return new Promise((function(n,r){var i,a,o=new Promise((function(e,t){a=e,i=t})),s=Cn(e,It(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),Rt(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,a,(function(){var e=new ReadableStream({type:`bytes`,pull:function(e){if(s.status===1)s.status=2,At(e,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=e;try{Gn(s,e)}catch(e){En(s,e),Dn(s,e)}}},cancel:function(){Kn(s)}},{highWaterMark:0});e.allReady=o,n(e)}),(function(e){o.catch((function(){})),r(e)}),i);if(t&&t.signal){var c=t.signal,l=function(){Kn(s,c.reason),c.removeEventListener(`abort`,l)};c.addEventListener(`abort`,l)}zn(s)}))},Zr.version=`18.2.0`,ho={},go=Jn,_o=Zr,ho.version=go.version,ho.renderToString=go.renderToString,ho.renderToStaticMarkup=go.renderToStaticMarkup,ho.renderToNodeStream=go.renderToNodeStream,ho.renderToStaticNodeStream=go.renderToStaticNodeStream,ho.renderToReadableStream=_o.renderToReadableStream,ho.version,ho.renderToString,ho.renderToStaticMarkup,ho.renderToNodeStream,ho.renderToStaticNodeStream,vo=ho.renderToReadableStream}));function bo(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo=t((()=>{v(),M(),T(),r(),xo=[`U1mOkkuX6`,`YrQ87pFvU`],So=`framer-E5uJh`,Co={U1mOkkuX6:`framer-v-1az4pom`,YrQ87pFvU:`framer-v-bqvpbv`},wo={default:{duration:0,type:`tween`}},To=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},Eo=S(c),Do={Default:`U1mOkkuX6`,Hover:`YrQ87pFvU`},Oo=({height:e,id:t,link:n,name1:r,width:i,...a})=>({...a,PKtYhfOBL:n??a.PKtYhfOBL,variant:Do[a.variant]??a.variant??`U1mOkkuX6`,WZV5xCdWp:r??a.WZV5xCdWp??`Original`}),ko=(e,t)=>t.join(`-`)+e.layoutDependency,Ao=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:l,WZV5xCdWp:u,PKtYhfOBL:d,...f}=Oo(e),{baseVariant:m,classNames:h,gestureVariant:g,setGestureState:_,setVariant:v,transition:y,variants:x}=N({cycleOrder:xo,defaultVariant:`U1mOkkuX6`,transitions:wo,variant:l,variantClassNames:Co}),C=ko(e,x),{activeVariantCallback:T,delay:E}=k(m),D=T(async(...e)=>{v(`YrQ87pFvU`)}),O=T(async(...e)=>{v(`U1mOkkuX6`)}),j=i(null),M=b(),ee=[];return p(w,{id:s??M,children:p(Eo,{animate:x,initial:!1,children:p(To,{value:y,children:p(ae,{href:d,openInNewTab:!0,children:p(S.a,{...f,className:`${R(So,...ee,`framer-1az4pom`,o,h)} framer-a575eq`,"data-framer-name":`Default`,"data-highlight":!0,layoutDependency:C,layoutId:`U1mOkkuX6`,onHoverEnd:()=>_({isHovered:!1}),onHoverStart:()=>_({isHovered:!0}),onMouseEnter:D,onTap:()=>_({isPressed:!1}),onTapCancel:()=>_({isPressed:!1}),onTapStart:()=>_({isPressed:!0}),ref:t??j,style:{...a},...bo({YrQ87pFvU:{"data-framer-name":`Hover`,onMouseEnter:void 0,onMouseLeave:O}},m,g),children:p(de,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-family":`"Inter-Medium", "Inter", "Inter Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))`},children:`Original`})}),className:`framer-nfkn7j`,fonts:[`Inter-Medium`],layoutDependency:C,layoutId:`BKvb8kXxH`,style:{"--extracted-r6o4lv":`var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:u,variants:{YrQ87pFvU:{"--extracted-r6o4lv":`var(--token-84002464-baa0-40a1-a1a1-82899aec539a, rgb(155, 161, 165))`}},verticalAlignment:`top`,withExternalLayout:!0,...bo({YrQ87pFvU:{children:p(c,{children:p(S.p,{style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-family":`"Inter-Medium", "Inter", "Inter Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-84002464-baa0-40a1-a1a1-82899aec539a, rgb(155, 161, 165)))`},children:`Original`})})}},m,g)})})})})})})}),[`.framer-E5uJh[data-border="true"]::after, .framer-E5uJh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-E5uJh.framer-a575eq, .framer-E5uJh .framer-a575eq { display: block; }`,`.framer-E5uJh.framer-1az4pom { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 1px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }`,`.framer-E5uJh .framer-nfkn7j { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-E5uJh.framer-1az4pom { gap: 0px; } .framer-E5uJh.framer-1az4pom > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-E5uJh.framer-1az4pom > :first-child { margin-left: 0px; } .framer-E5uJh.framer-1az4pom > :last-child { margin-right: 0px; } }`],`framer-E5uJh`),Ao.displayName=`Link`,Ao.defaultProps={height:36,width:51.5},ce(Ao,{variant:{options:[`U1mOkkuX6`,`YrQ87pFvU`],optionTitles:[`Default`,`Hover`],title:`Variant`,type:I.Enum},WZV5xCdWp:{defaultValue:`Original`,displayTextArea:!1,title:`Name`,type:I.String},PKtYhfOBL:{title:`Link`,type:I.Link}}),P(Ao,[])}));function Mo(e){let[t,n]=l(null);s(()=>{let t=e.customSvgCode;r(t)});let r=t=>{let r=[[/width="[^"]*"/,`width="100%"`],[/height="[^"]*"/,`height="100%"`]],i=t.includes(`stroke="`),a=t.includes(`stroke-width="`),o=t.includes(`stroke-linecap="`),s=t.includes(`stroke-linejoin="`);if(t.includes(`<circle`)){let n=/<circle[^>]*fill="([^"]*)"/,i=t.match(n);if(i){let r=i[0].replace(i[1],e.customColor);t=t.replace(n,r)}else r.push([/<circle/g,`<circle fill="${e.customColor}"`])}i?(o?r.push([/<path/g,`<path stroke="${e.customColor}" stroke-linecap="${e.lineCap}"`]):r.push([/<path/g,`<path stroke="${e.customColor}"`]),a&&r.push([/stroke-width="(?!0\b)\d+(\.\d+)?"/g,`stroke-width="${e.customStrokeWidth}"`])):r.push([/<path/g,`<path fill="${e.customColor}"`]),t.includes(`overflow="`)?r.push([/overflow="[^"]*"/,`overflow="visible"`]):r.push([/<svg/,`<svg overflow="visible"`]),s?r.push([/stroke-linejoin="[^"]*"/,`stroke-linejoin="${e.lineJoin}"`]):r.push([/<path/g,`<path stroke-linejoin="${e.lineJoin}"`]),r.forEach(([e,n])=>{t=t.replace(e,n)}),n(t)},i={padding:`${e.customPadding}px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,overflow:`visible`};return p(`div`,{dangerouslySetInnerHTML:{__html:t},style:i})}var No=t((()=>{v(),r(),M(),Mo.defaultProps={customSvgCode:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>`,customColor:`#ffffff`,customPadding:0,customStrokeWidth:2,lineCap:`butt`,lineJoin:`miter`},ce(Mo,{customSvgCode:{type:I.String,title:`SVG Code`,displayTextArea:!1},customColor:{type:I.Color,title:`Color`,defaultValue:`#ffffff`},customPadding:{type:I.Number,title:`Padding`,defaultValue:0,min:0,step:1,displayStepper:!0,description:`More components at [Framer University](https://framer.university?utm_source=component).`},customStrokeWidth:{type:I.Number,title:`Stroke`,defaultValue:2,min:0,step:.1,displayStepper:!0,hidden:e=>!e.customSvgCode.includes(`stroke="`)},lineCap:{type:I.Enum,title:`Line Cap`,options:[`butt`,`round`,`square`],optionTitles:[`Butt`,`Round`,`Square`],defaultValue:`butt`,hidden:e=>!e.customSvgCode.includes(`stroke="`)},lineJoin:{type:I.Enum,title:`Line Join`,options:[`round`,`miter`,`bevel`],optionTitles:[`Round`,`Miter`,`Bevel`],defaultValue:`miter`,hidden:e=>!e.customSvgCode.includes(`stroke="`)}})}));function Po(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko=t((()=>{v(),M(),T(),r(),No(),Fo=D(Mo),Io=[`ielzaY18A`,`kmy7pyiZ9`],Lo=`framer-i40QN`,Ro={ielzaY18A:`framer-v-1bj5fp7`,kmy7pyiZ9:`framer-v-11sni1d`},zo={duration:0,type:`tween`},Bo=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},Vo=S(c),Ho={Default:`ielzaY18A`,Hover:`kmy7pyiZ9`},Uo=({height:e,id:t,link:n,width:r,...i})=>({...i,FCbomVt5p:n??i.FCbomVt5p,variant:Ho[i.variant]??i.variant??`ielzaY18A`}),Wo=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Go=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:l,FCbomVt5p:u,...d}=Uo(e),{baseVariant:f,classNames:m,clearLoadingGesture:h,gestureHandlers:g,gestureVariant:v,isLoading:y,setGestureState:x,setVariant:C,variants:T}=N({cycleOrder:Io,defaultVariant:`ielzaY18A`,variant:l,variantClassNames:Ro}),E=Wo(e,T),{activeVariantCallback:D,delay:O}=k(f),j=D(async(...e)=>{x({isHovered:!0}),C(`kmy7pyiZ9`)}),M=D(async(...e)=>{x({isHovered:!1}),C(`ielzaY18A`)}),te=i(null),ne=b(),re=[];return ee(),p(w,{id:s??ne,children:p(Vo,{animate:T,initial:!1,children:p(Bo,{value:zo,children:p(ae,{href:u,openInNewTab:!0,children:_(S.a,{...d,...g,className:`${R(Lo,...re,`framer-1bj5fp7`,o,m)} framer-k0pr19`,"data-framer-name":`Default`,"data-highlight":!0,layoutDependency:E,layoutId:`ielzaY18A`,onMouseEnter:j,ref:t??te,style:{backgroundColor:`var(--token-a042497d-749d-4d03-8d3a-78930210d354, rgb(32, 96, 223))`,borderBottomLeftRadius:1e3,borderBottomRightRadius:1e3,borderTopLeftRadius:1e3,borderTopRightRadius:1e3,...a},variants:{kmy7pyiZ9:{backgroundColor:`rgb(29, 87, 201)`}},...Po({kmy7pyiZ9:{"data-framer-name":`Hover`,onMouseEnter:void 0,onMouseLeave:M}},f,v),children:[p(pe,{children:p(S.div,{className:`framer-6z62xg-container`,layoutDependency:E,layoutId:`rbMJhZ_zA-container`,children:p(Mo,{customColor:`rgb(255, 255, 255)`,customPadding:0,customStrokeWidth:2,customSvgCode:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66667 0.390625L11.6095 3.33343L8.66667 6.27624L7.72387 5.33343L9.0572 4.0001H3.33333V9.33347H2V2.66677H9.0572L7.72387 1.33343L8.66667 0.390625ZM14 6.6668V13.3335H6.9428L8.27613 14.6668L7.33333 15.6096L4.39053 12.6668L7.33333 9.72394L8.27613 10.6668L6.9428 12.0001H12.6667V6.6668H14Z" fill="white"/> </svg>`,height:`100%`,id:`rbMJhZ_zA`,layoutId:`rbMJhZ_zA`,lineCap:`butt`,lineJoin:`miter`,style:{height:`100%`,width:`100%`},width:`100%`})})}),p(de,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-family":`"Inter-Medium", "Inter", "Inter Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))`},children:`Remix`})}),className:`framer-rwnbv7`,fonts:[`Inter-Medium`],layoutDependency:E,layoutId:`lmSCnJAIP`,style:{"--extracted-r6o4lv":`var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},verticalAlignment:`top`,withExternalLayout:!0})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-i40QN.framer-k0pr19, .framer-i40QN .framer-k0pr19 { display: block; }`,`.framer-i40QN.framer-1bj5fp7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,`.framer-i40QN .framer-6z62xg-container { flex: none; height: 16px; position: relative; width: 16px; }`,`.framer-i40QN .framer-rwnbv7 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-i40QN.framer-1bj5fp7 { gap: 0px; } .framer-i40QN.framer-1bj5fp7 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-i40QN.framer-1bj5fp7 > :first-child { margin-left: 0px; } .framer-i40QN.framer-1bj5fp7 > :last-child { margin-right: 0px; } }`],`framer-i40QN`),Go.displayName=`Remix Button`,Go.defaultProps={height:36,width:96},ce(Go,{variant:{options:[`ielzaY18A`,`kmy7pyiZ9`],optionTitles:[`Default`,`Hover`],title:`Variant`,type:I.Enum},FCbomVt5p:{title:`Link`,type:I.Link}}),P(Go,[{explicitInter:!0,fonts:[{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:(location.origin+"/assets/fonts/font-bb40238c.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:(location.origin+"/assets/fonts/font-b77601bb.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+1F00-1FFF`,url:(location.origin+"/assets/fonts/font-7a9f05ce.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0370-03FF`,url:(location.origin+"/assets/fonts/font-e5fdf852.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:(location.origin+"/assets/fonts/font-a0fede2c.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:(location.origin+"/assets/fonts/font-2d82cf02.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:(location.origin+"/assets/fonts/font-c01559ea.woff2"),weight:`500`}]},...Fo],{supportsExplicitInterCodegen:!0})}));function qo(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is=t((()=>{v(),M(),T(),r(),Jo=[`q9LsRGXap`,`SHaxQ4HNw`,`WTPtZwtba`,`Mo7QjZkpk`],Yo=`framer-spL2f`,Xo={Mo7QjZkpk:`framer-v-1ugkpo1`,q9LsRGXap:`framer-v-557n5r`,SHaxQ4HNw:`framer-v-ok618v`,WTPtZwtba:`framer-v-1o99nem`},Zo={default:{delay:0,duration:.1,ease:[.5,0,.88,.77],type:`tween`},Mo7QjZkpk:{delay:0,duration:.1,ease:[.12,.23,.5,1],type:`tween`},SHaxQ4HNw:{delay:0,duration:.1,ease:[.12,.23,.5,1],type:`tween`}},Qo=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},$o=S(c),es={"Mid Close":`Mo7QjZkpk`,"Mid Open":`SHaxQ4HNw`,Close:`q9LsRGXap`,Open:`WTPtZwtba`},ts=({height:e,id:t,tap:n,width:r,...i})=>({...i,GsV0XqZB5:n??i.GsV0XqZB5,variant:es[i.variant]??i.variant??`q9LsRGXap`}),ns=(e,t)=>t.join(`-`)+e.layoutDependency,rs=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:c,GsV0XqZB5:l,...u}=ts(e),{baseVariant:d,classNames:f,gestureVariant:m,setGestureState:h,setVariant:g,transition:v,variants:y}=N({cycleOrder:Jo,defaultVariant:`q9LsRGXap`,transitions:Zo,variant:c,variantClassNames:Xo}),x=ns(e,y),{activeVariantCallback:C,delay:T}=k(d),E=C(async(...e)=>{if(h({isPressed:!1}),l&&await l(...e)===!1)return!1;g(`SHaxQ4HNw`)}),D=C(async(...e)=>{if(h({isPressed:!1}),l&&await l(...e)===!1)return!1}),O=C(async(...e)=>{await T(()=>g(`WTPtZwtba`),110)}),j=C(async(...e)=>{if(h({isPressed:!1}),l&&await l(...e)===!1)return!1;g(`Mo7QjZkpk`)});te(d,{Mo7QjZkpk:C(async(...e)=>{await T(()=>g(`q9LsRGXap`),110)}),SHaxQ4HNw:O});let M=i(null),ee=b(),ne=[];return p(w,{id:s??ee,children:p($o,{animate:y,initial:!1,children:p(Qo,{value:v,children:p(S.div,{...u,className:R(Yo,...ne,`framer-557n5r`,o,f),"data-framer-name":`Close`,"data-highlight":!0,layoutDependency:x,layoutId:`q9LsRGXap`,onHoverEnd:()=>h({isHovered:!1}),onHoverStart:()=>h({isHovered:!0}),onTap:E,onTapCancel:()=>h({isPressed:!1}),onTapStart:()=>h({isPressed:!0}),ref:t??M,style:{...a},...qo({Mo7QjZkpk:{"data-framer-name":`Mid Close`,onTap:D},SHaxQ4HNw:{"data-framer-name":`Mid Open`,onTap:D},WTPtZwtba:{"data-framer-name":`Open`,onTap:j}},d,m),children:_(S.div,{className:`framer-1r861i3`,"data-framer-name":`Icon`,layoutDependency:x,layoutId:`k7ApTcQHn`,children:[p(S.div,{className:`framer-6o7r9m`,"data-framer-name":`Bottom`,layoutDependency:x,layoutId:`whUPl4qvO`,style:{backgroundColor:`rgb(255, 255, 255)`,rotate:0},variants:{WTPtZwtba:{rotate:45}}}),p(S.div,{className:`framer-1086crg`,"data-framer-name":`Top`,layoutDependency:x,layoutId:`yxpNVGsVm`,style:{backgroundColor:`rgb(255, 255, 255)`,rotate:0},variants:{WTPtZwtba:{rotate:-45}}})]})})})})})}),[`.framer-spL2f[data-border="true"]::after, .framer-spL2f [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-spL2f.framer-d6zgid, .framer-spL2f .framer-d6zgid { display: block; }`,`.framer-spL2f.framer-557n5r { cursor: pointer; height: 24px; overflow: hidden; position: relative; width: 24px; }`,`.framer-spL2f .framer-1r861i3 { flex: none; height: 18px; left: calc(50.00000000000002% - 18px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 18px / 2); width: 18px; }`,`.framer-spL2f .framer-6o7r9m { flex: none; height: 1px; left: calc(50.00000000000002% - 14px / 2); overflow: hidden; position: absolute; top: 5px; width: 14px; }`,`.framer-spL2f .framer-1086crg { bottom: 5px; flex: none; height: 1px; left: calc(50.00000000000002% - 14px / 2); overflow: hidden; position: absolute; width: 14px; }`,`.framer-spL2f.framer-v-ok618v.framer-557n5r, .framer-spL2f.framer-v-1o99nem.framer-557n5r, .framer-spL2f.framer-v-1ugkpo1.framer-557n5r { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 24px); }`,`.framer-spL2f.framer-v-ok618v .framer-6o7r9m, .framer-spL2f.framer-v-1o99nem .framer-6o7r9m, .framer-spL2f.framer-v-1ugkpo1 .framer-6o7r9m { top: calc(50.00000000000002% - 1px / 2); }`,`.framer-spL2f.framer-v-ok618v .framer-1086crg, .framer-spL2f.framer-v-1o99nem .framer-1086crg, .framer-spL2f.framer-v-1ugkpo1 .framer-1086crg { bottom: unset; top: calc(50.00000000000002% - 1px / 2); }`],`framer-spL2f`),rs.displayName=`Burger`,rs.defaultProps={height:24,width:24},ce(rs,{variant:{options:[`q9LsRGXap`,`SHaxQ4HNw`,`WTPtZwtba`,`Mo7QjZkpk`],optionTitles:[`Close`,`Mid Open`,`Open`,`Mid Close`],title:`Variant`,type:I.Enum},GsV0XqZB5:{title:`Tap`,type:I.EventHandler}}),P(rs,[])})),as,os,ss,cs=t((()=>{M(),as=`"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,os={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},{...os},ss={onClick:{type:I.EventHandler},onMouseEnter:{type:I.EventHandler},onMouseLeave:{type:I.EventHandler}},I.Number,I.Boolean,I.String,I.Enum})),ls=t((()=>{M(),r()})),us=t((()=>{r()})),ds=t((()=>{M()})),fs=t((()=>{M()})),ps=t((()=>{r()})),ms=t((()=>{M()})),hs=t((()=>{a(),r()})),gs=t((()=>{r(),fs()})),_s=t((()=>{r(),M(),fs(),us()}));function vs(e){let{fontFamily:t=`Inter`,fontSize:n=16,fontWeight:r=400,font:i=!1}=e,a=ys[r],o=`"${t} ${a}", "${t}", ${as}`,c=t?{fontSize:n,fontWeight:r,fontFamily:o}:{fontSize:n,fontWeight:r},l=async()=>{await ie.loadWebFontsFromSelectors([`CUSTOM;${t}`,`CUSTOM;${t} ${a}`,`GF;${t}-${a.toLowerCase()}`]).catch(e=>console.error(e))};return s(()=>{i&&l()},[i,t,r]),c}var ys,bs=t((()=>{M(),r(),cs(),ys={100:`Thin`,200:`Extra-light`,300:`Light`,400:`Regular`,500:`Medium`,600:`Semi-bold`,700:`Bold`,800:`Extra-bold`,900:`Black`}})),xs=t((()=>{r(),M()})),Ss=t((()=>{r()}));function Cs(e){let{borderRadius:t,isMixedBorderRadius:r,topLeftRadius:i,topRightRadius:a,bottomRightRadius:o,bottomLeftRadius:s}=e;return n(()=>r?`${i}px ${a}px ${o}px ${s}px`:`${t}px`,[t,r,i,a,o,s])}function ws(e){let{padding:t,paddingPerSide:r,paddingTop:i,paddingRight:a,paddingBottom:o,paddingLeft:s}=e;return n(()=>r?`${i}px ${a}px ${o}px ${s}px`:t,[t,r,i,a,o,s])}var Ts=t((()=>{r(),M(),I.FusedNumber,I.FusedNumber})),Es=t((()=>{cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),bs(),xs(),Ss(),Ts()})),Ds=t((()=>{Es()}));function Os(e){let{label:t,content:n,fill:r,color:i,style:a,onClick:s,font:c,hoverOptions:l,...u}=e,d=vs({fontWeight:500,...u}),f=Cs(e),m=ws(e),g=h(()=>{var e;(e=o.clipboard)==null||e.writeText(n),s?.()},[s,n]);return p(S.button,{style:{border:`none`,outline:`none`,resize:`none`,width:`max-content`,wordBreak:`break-word`,overflowWrap:`break-word`,WebkitTapHighlightColor:`rgba(0, 0, 0, 0)`,letterSpacing:`-0.2px`,display:`flex`,justifyContent:`center`,alignItems:`center`,background:r,borderRadius:f,cursor:`pointer`,padding:m,color:i,...d,...c,...a},onClick:g,...u,whileHover:l,transition:l?.transition,children:t})}var ks=t((()=>{a(),v(),r(),M(),T(),Ds(),ce(Os,{content:{type:I.String,title:`Content`,displayTextArea:!0,description:`When clicked, this content will be copied to the clipboard.`},label:{type:I.String,title:`Label`,defaultValue:`Copy to Clipboard`},fill:{type:I.Color,title:`Fill`,defaultValue:`#06F`},color:{type:I.Color,title:`Text`,defaultValue:`#fff`},font:{type:I.Font,controls:`extended`,defaultValue:{fontSize:16}},hoverOptions:{type:I.Object,title:`Hover`,buttonTitle:`Effect`,optional:!0,controls:{scale:{type:I.Number,title:`Scale`,min:0,max:10,displayStepper:!0,step:.01,defaultValue:1.1},backgroundColor:{type:I.Color,title:`Fill`,defaultValue:`#0088FF`,optional:!0},color:{type:I.Color,title:`Color`,defaultValue:`#FFF`,optional:!0},transition:{type:I.Transition,title:`Transition`,defaultValue:{type:`spring`,stiffness:400,damping:30}}}},padding:{type:I.FusedNumber,toggleKey:`paddingPerSide`,toggleTitles:[`Padding`,`Padding per side`],valueKeys:[`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`],valueLabels:[`T`,`R`,`B`,`L`],min:0,title:`Padding`,defaultValue:10},borderRadius:{title:`Radius`,type:I.FusedNumber,toggleKey:`isMixedBorderRadius`,toggleTitles:[`Radius`,`Radius per corner`],valueKeys:[`topLeftRadius`,`topRightRadius`,`bottomRightRadius`,`bottomLeftRadius`],valueLabels:[`TL`,`TR`,`BR`,`BL`],min:0,defaultValue:50},...ss})}));function As(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs=t((()=>{v(),M(),T(),r(),js=[`rWGPTcCST`,`AevBM3LaW`],Ms=`framer-OMBIu`,Ns={AevBM3LaW:`framer-v-1sfn70s`,rWGPTcCST:`framer-v-1786vx8`},Ps={damping:45,delay:0,mass:1,stiffness:600,type:`spring`},Fs=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},Is=S(c),Ls={Copy:`rWGPTcCST`,Paste:`AevBM3LaW`},Rs=({height:e,id:t,width:n,...r})=>({...r,variant:Ls[r.variant]??r.variant??`rWGPTcCST`}),zs=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Bs=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:l,...u}=Rs(e),{baseVariant:d,classNames:f,clearLoadingGesture:m,gestureHandlers:h,gestureVariant:g,isLoading:v,setGestureState:y,setVariant:x,variants:C}=N({cycleOrder:js,defaultVariant:`rWGPTcCST`,variant:l,variantClassNames:Ns}),T=zs(e,C),E=i(null),D=b(),O=[];return ee(),p(w,{id:s??D,children:p(Is,{animate:C,initial:!1,children:p(Fs,{value:Ps,children:_(S.div,{...u,...h,className:R(Ms,...O,`framer-1786vx8`,o,f),"data-framer-name":`Copy`,layoutDependency:T,layoutId:`rWGPTcCST`,ref:t??E,style:{...a},...As({AevBM3LaW:{"data-framer-name":`Paste`}},d,g),children:[p(de,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-family":`"Inter", "Inter Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))`},children:`Copy component`})}),className:`framer-1jlp1b4`,fonts:[`Inter-Medium`],layoutDependency:T,layoutId:`ZM55W60l3`,style:{"--extracted-r6o4lv":`var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,filter:`none`,opacity:1,WebkitFilter:`none`},variants:{AevBM3LaW:{filter:`blur(2px)`,opacity:0,WebkitFilter:`blur(2px)`}},verticalAlignment:`top`,withExternalLayout:!0}),p(de,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-family":`"Inter", "Inter Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))`},children:`Paste in Framer`})}),className:`framer-pmawem`,fonts:[`Inter-Medium`],layoutDependency:T,layoutId:`zDXxr7CWo`,style:{"--extracted-r6o4lv":`var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,filter:`blur(2px)`,opacity:0,WebkitFilter:`blur(2px)`},variants:{AevBM3LaW:{filter:`blur(0px)`,opacity:1,WebkitFilter:`blur(0px)`}},verticalAlignment:`top`,withExternalLayout:!0})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-OMBIu.framer-1c4f84x, .framer-OMBIu .framer-1c4f84x { display: block; }`,`.framer-OMBIu.framer-1786vx8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 115px; }`,`.framer-OMBIu .framer-1jlp1b4 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,`.framer-OMBIu .framer-pmawem { -webkit-user-select: none; bottom: 0px; flex: none; height: auto; left: -12px; position: absolute; user-select: none; white-space: pre; width: auto; z-index: 1; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OMBIu.framer-1786vx8 { gap: 0px; } .framer-OMBIu.framer-1786vx8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-OMBIu.framer-1786vx8 > :first-child { margin-left: 0px; } .framer-OMBIu.framer-1786vx8 > :last-child { margin-right: 0px; } }`,`.framer-OMBIu.framer-v-1sfn70s.framer-1786vx8 { min-height: 17px; width: 105px; }`,`.framer-OMBIu.framer-v-1sfn70s .framer-1jlp1b4 { bottom: 0px; position: absolute; right: -12px; z-index: 1; }`,`.framer-OMBIu.framer-v-1sfn70s .framer-pmawem { left: 0px; }`],`framer-OMBIu`),Bs.displayName=`Texts`,Bs.defaultProps={height:17,width:114.5},ce(Bs,{variant:{options:[`rWGPTcCST`,`AevBM3LaW`],optionTitles:[`Copy`,`Paste`],title:`Variant`,type:I.Enum}}),P(Bs,[{explicitInter:!0,fonts:[{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:(location.origin+"/assets/fonts/font-17c82058.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:(location.origin+"/assets/fonts/font-32c7aa32.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+1F00-1FFF`,url:(location.origin+"/assets/fonts/font-42a4e5cb.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0370-03FF`,url:(location.origin+"/assets/fonts/font-0d904b65.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:(location.origin+"/assets/fonts/font-607aac31.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:(location.origin+"/assets/fonts/font-f3197ccd.woff2"),weight:`500`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:(location.origin+"/assets/fonts/font-c223c830.woff2"),weight:`500`}]}],{supportsExplicitInterCodegen:!0})}));function Hs(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec=t((()=>{v(),M(),T(),r(),No(),Us=D(Mo),Ws=[`I_dgc5wkO`,`PzNdqMDP_`],Gs=`framer-ATTy1`,Ks={I_dgc5wkO:`framer-v-16v6k4r`,PzNdqMDP_:`framer-v-1s957ke`},qs={damping:45,delay:0,mass:1,stiffness:600,type:`spring`},Js=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},Ys=S(c),Xs={Checkmark:`PzNdqMDP_`,Copy:`I_dgc5wkO`},Zs=({height:e,id:t,width:n,...r})=>({...r,variant:Xs[r.variant]??r.variant??`I_dgc5wkO`}),Qs=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),$s=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:c,...l}=Zs(e),{baseVariant:u,classNames:d,clearLoadingGesture:f,gestureHandlers:m,gestureVariant:h,isLoading:g,setGestureState:v,setVariant:y,variants:x}=N({cycleOrder:Ws,defaultVariant:`I_dgc5wkO`,variant:c,variantClassNames:Ks}),C=Qs(e,x),T=i(null),E=b(),D=[];return ee(),p(w,{id:s??E,children:p(Ys,{animate:x,initial:!1,children:p(Js,{value:qs,children:_(S.div,{...l,...m,className:R(Gs,...D,`framer-16v6k4r`,o,d),"data-framer-name":`Copy`,layoutDependency:C,layoutId:`I_dgc5wkO`,ref:t??T,style:{...a},...Hs({PzNdqMDP_:{"data-framer-name":`Checkmark`}},u,h),children:[p(S.div,{className:`framer-1x87e5t`,"data-framer-name":`Copy Wrap`,layoutDependency:C,layoutId:`bdWkDdc48`,style:{filter:`none`,opacity:1,scale:1,WebkitFilter:`none`},variants:{PzNdqMDP_:{filter:`blur(2px)`,opacity:0,scale:.6,WebkitFilter:`blur(2px)`}},children:p(pe,{children:p(S.div,{className:`framer-8uod67-container`,"data-framer-name":`Copy`,layoutDependency:C,layoutId:`EGrsB1nGv-container`,name:`Copy`,children:p(Mo,{customColor:`rgb(255, 255, 255)`,customPadding:0,customStrokeWidth:2,customSvgCode:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H4.66667V4.66667H2V14H11.3333V11.3333H14V2ZM11.3333 10H12.6667V3.33333H6V4.66667H11.3333V10Z" fill="white"/> </svg>`,height:`100%`,id:`EGrsB1nGv`,layoutId:`EGrsB1nGv`,lineCap:`butt`,lineJoin:`miter`,name:`Copy`,style:{height:`100%`,width:`100%`},width:`100%`})})})}),p(S.div,{className:`framer-9mf075`,"data-framer-name":`Check Wrap`,layoutDependency:C,layoutId:`LpMr1S2th`,style:{filter:`blur(2px)`,opacity:0,scale:.6,WebkitFilter:`blur(2px)`},variants:{PzNdqMDP_:{filter:`blur(0px)`,opacity:1,scale:1,WebkitFilter:`blur(0px)`}},children:p(pe,{children:p(S.div,{className:`framer-16zdmt2-container`,"data-framer-name":`Check`,layoutDependency:C,layoutId:`caDWJjh7O-container`,name:`Check`,children:p(Mo,{customColor:`rgb(255, 255, 255)`,customPadding:0,customStrokeWidth:2,customSvgCode:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 15L9.29412 20L21 4" stroke="white" stroke-width="2" stroke-linecap="square"/> </svg>`,height:`100%`,id:`caDWJjh7O`,layoutId:`caDWJjh7O`,lineCap:`butt`,lineJoin:`miter`,name:`Check`,style:{height:`100%`,width:`100%`},width:`100%`})})})})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-ATTy1.framer-dr19u7, .framer-ATTy1 .framer-dr19u7 { display: block; }`,`.framer-ATTy1.framer-16v6k4r { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-ATTy1 .framer-1x87e5t { flex: none; height: 16px; overflow: visible; position: relative; width: 16px; }`,`.framer-ATTy1 .framer-8uod67-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,`.framer-ATTy1 .framer-9mf075 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,`.framer-ATTy1 .framer-16zdmt2-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ATTy1.framer-16v6k4r { gap: 0px; } .framer-ATTy1.framer-16v6k4r > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ATTy1.framer-16v6k4r > :first-child { margin-top: 0px; } .framer-ATTy1.framer-16v6k4r > :last-child { margin-bottom: 0px; } }`],`framer-ATTy1`),$s.displayName=`Icons`,$s.defaultProps={height:16,width:16},ce($s,{variant:{options:[`I_dgc5wkO`,`PzNdqMDP_`],optionTitles:[`Copy`,`Checkmark`],title:`Variant`,type:I.Enum}}),P($s,[{explicitInter:!0,fonts:[]},...Us],{supportsExplicitInterCodegen:!0})}));function tc(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c=t((()=>{v(),M(),T(),r(),ks(),Vs(),ec(),nc=D($s),rc=D(Bs),ic=D(Os),ac={axsofu4B8:{hover:!0},WQ5m_15ag:{hover:!0}},oc=[`WQ5m_15ag`,`axsofu4B8`],sc=`framer-PqyA1`,cc={axsofu4B8:`framer-v-1vxo4zg`,WQ5m_15ag:`framer-v-11egiuw`},lc={duration:0,type:`tween`},uc={damping:45,delay:0,mass:1,stiffness:600,type:`spring`},dc=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},fc=S(c),pc={Copied:`axsofu4B8`,Default:`WQ5m_15ag`},mc=({height:e,id:t,link:n,width:r,...i})=>({...i,l0RNA5SgB:n??i.l0RNA5SgB,variant:pc[i.variant]??i.variant??`WQ5m_15ag`}),hc=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),gc=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:c,l0RNA5SgB:l,...u}=mc(e),{baseVariant:d,classNames:f,clearLoadingGesture:m,gestureHandlers:h,gestureVariant:g,isLoading:v,setGestureState:y,setVariant:x,variants:C}=N({cycleOrder:oc,defaultVariant:`WQ5m_15ag`,enabledGestures:ac,variant:c,variantClassNames:cc}),T=hc(e,C),{activeVariantCallback:E,delay:D}=k(d),O=E(async(...e)=>{y({isPressed:!1}),x(`axsofu4B8`)});te(d,{axsofu4B8:E(async(...e)=>{await D(()=>x(`WQ5m_15ag`),1500)})});let j=i(null),M=b(),ne=[];return ee(),p(w,{id:s??M,children:p(fc,{animate:C,initial:!1,children:p(dc,{value:lc,children:_(S.div,{...u,...h,className:R(sc,...ne,`framer-11egiuw`,o,f),"data-framer-name":`Default`,"data-highlight":!0,layoutDependency:T,layoutId:`WQ5m_15ag`,onTap:O,ref:t??j,style:{backgroundColor:`var(--token-965e5c17-6359-41cc-bd03-2fa4898e2c2b, rgb(34, 36, 38))`,borderBottomLeftRadius:1e3,borderBottomRightRadius:1e3,borderTopLeftRadius:1e3,borderTopRightRadius:1e3,...a},variants:{"axsofu4B8-hover":{backgroundColor:`var(--token-88270a27-b998-4d64-94e7-850fa71e2842, rgb(39, 43, 45))`},"WQ5m_15ag-hover":{backgroundColor:`var(--token-88270a27-b998-4d64-94e7-850fa71e2842, rgb(39, 43, 45))`}},...tc({"axsofu4B8-hover":{"data-framer-name":void 0,onTap:void 0},"WQ5m_15ag-hover":{"data-framer-name":void 0},axsofu4B8:{"data-framer-name":`Copied`,onTap:void 0}},d,g),children:[p(dc,{value:uc,children:_(S.div,{className:`framer-2y35rt`,"data-framer-name":`Content - Copy`,layoutDependency:T,layoutId:`eO3Ub5AMG`,children:[p(pe,{children:p(S.div,{className:`framer-aygo53-container`,layoutDependency:T,layoutId:`gHtgLiFlR-container`,children:p($s,{height:`100%`,id:`gHtgLiFlR`,layoutId:`gHtgLiFlR`,variant:`I_dgc5wkO`,width:`100%`,...tc({axsofu4B8:{variant:`PzNdqMDP_`}},d,g)})})}),p(pe,{children:p(S.div,{className:`framer-1bx6nrx-container`,layoutDependency:T,layoutId:`cE1TdIJBo-container`,children:p(Bs,{height:`100%`,id:`cE1TdIJBo`,layoutId:`cE1TdIJBo`,variant:`rWGPTcCST`,width:`100%`,...tc({axsofu4B8:{variant:`AevBM3LaW`}},d,g)})})})]})}),p(pe,{children:p(S.div,{className:`framer-rosybs-container`,layoutDependency:T,layoutId:`tc3Crhs5V-container`,children:p(Os,{borderRadius:0,bottomLeftRadius:0,bottomRightRadius:0,color:`rgba(255, 255, 255, 0)`,content:l,fill:`rgba(5, 5, 5, 0)`,font:{},height:`100%`,id:`tc3Crhs5V`,isMixedBorderRadius:!1,label:``,layoutId:`tc3Crhs5V`,padding:0,paddingBottom:0,paddingLeft:0,paddingPerSide:!1,paddingRight:0,paddingTop:0,style:{height:`100%`,width:`100%`},topLeftRadius:0,topRightRadius:0,width:`100%`})})})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-PqyA1.framer-1kfesgd, .framer-PqyA1 .framer-1kfesgd { display: block; }`,`.framer-PqyA1.framer-11egiuw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,`.framer-PqyA1 .framer-2y35rt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 139px; }`,`.framer-PqyA1 .framer-aygo53-container, .framer-PqyA1 .framer-1bx6nrx-container { flex: none; height: auto; position: relative; width: auto; }`,`.framer-PqyA1 .framer-rosybs-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 3; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PqyA1.framer-11egiuw, .framer-PqyA1 .framer-2y35rt { gap: 0px; } .framer-PqyA1.framer-11egiuw > *, .framer-PqyA1 .framer-2y35rt > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-PqyA1.framer-11egiuw > :first-child, .framer-PqyA1 .framer-2y35rt > :first-child { margin-left: 0px; } .framer-PqyA1.framer-11egiuw > :last-child, .framer-PqyA1 .framer-2y35rt > :last-child { margin-right: 0px; } }`],`framer-PqyA1`),gc.displayName=`Copy Button`,gc.defaultProps={height:36,width:171},ce(gc,{variant:{options:[`WQ5m_15ag`,`axsofu4B8`],optionTitles:[`Default`,`Copied`],title:`Variant`,type:I.Enum},l0RNA5SgB:{defaultValue:``,displayTextArea:!0,title:`Link`,type:I.String}}),P(gc,[{explicitInter:!0,fonts:[]},...nc,...rc,...ic],{supportsExplicitInterCodegen:!0})}));function vc(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc=t((()=>{v(),M(),T(),r(),yc=[`C3_UKybnv`,`PGZq_KKSq`,`TffxSq2Ec`],bc=`framer-ONnR6`,xc={C3_UKybnv:`framer-v-bdxzq4`,PGZq_KKSq:`framer-v-c6s8tc`,TffxSq2Ec:`framer-v-o716p1`},Sc={damping:60,delay:0,mass:1,stiffness:500,type:`spring`},Cc=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},wc=S(c),Tc={"16x16":`PGZq_KKSq`,"20x20":`C3_UKybnv`,"48x48":`TffxSq2Ec`},Ec=({height:e,id:t,width:n,...r})=>({...r,variant:Tc[r.variant]??r.variant??`C3_UKybnv`}),Dc=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Oc=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:c,...l}=Ec(e),{baseVariant:u,classNames:d,clearLoadingGesture:f,gestureHandlers:m,gestureVariant:h,isLoading:g,setGestureState:_,setVariant:v,variants:y}=N({cycleOrder:yc,defaultVariant:`C3_UKybnv`,variant:c,variantClassNames:xc}),x=Dc(e,y),C=i(null),T=b(),E=[];return ee(),p(w,{id:s??T,children:p(wc,{animate:y,initial:!1,children:p(Cc,{value:Sc,children:p(ae,{href:`https://frameruni.link/ds`,openInNewTab:!0,children:p(S.a,{...l,...m,"aria-label":`Framer University logo`,className:`${R(bc,...E,`framer-bdxzq4`,o,d)} framer-1au1x7q`,"data-framer-name":`20x20`,layoutDependency:x,layoutId:`C3_UKybnv`,ref:t??C,style:{...a},...vc({PGZq_KKSq:{"data-framer-name":`16x16`},TffxSq2Ec:{"data-framer-name":`48x48`}},u,h),children:p(le,{className:`framer-1pmgwam`,"data-framer-name":`Logo Mark`,layout:`position`,layoutDependency:x,layoutId:`hPj9xIIeU`,opacity:1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 15 5.08 C 15 5.029 15.02 4.98 15.057 4.943 L 19.667 0.333 C 19.723 0.277 19.806 0.26 19.879 0.29 C 19.952 0.32 20 0.391 20 0.47 L 20 9.92 C 20 9.971 19.98 10.02 19.943 10.057 L 15 15 Z M 5 15 L 5 5.47 C 5 5.296 4.79 5.21 4.668 5.332 L 0.057 9.943 C 0.02 9.98 0 10.029 0 10.081 L 0 19.805 C 0 19.913 0.087 20 0.195 20 L 9.919 20 C 9.971 20 10.02 19.98 10.057 19.943 L 15 15 Z" fill="rgb(255,255,255)"></path></svg>`,svgContentId:10615716291,withExternalLayout:!0,...vc({PGZq_KKSq:{svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 4.064 C 12 4.023 12.016 3.984 12.046 3.954 L 15.734 0.266 C 15.778 0.222 15.845 0.208 15.903 0.232 C 15.962 0.256 16 0.313 16 0.376 L 16 7.936 C 16 7.977 15.984 8.016 15.954 8.046 L 12 12 Z M 4 12 L 4 4.376 C 4 4.237 3.832 4.168 3.734 4.266 L 0.046 7.954 C 0.016 7.984 0 8.023 0 8.065 L 0 15.844 C 0 15.93 0.07 16 0.156 16 L 7.935 16 C 7.977 16 8.016 15.984 8.046 15.954 L 12 12 Z" fill="rgb(255,255,255)"></path></svg>`,svgContentId:11156808738},TffxSq2Ec:{svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 36 12.192 C 36 12.07 36.048 11.952 36.137 11.863 L 47.201 0.799 C 47.334 0.665 47.535 0.625 47.71 0.697 C 47.885 0.769 47.999 0.939 48 1.128 L 48 23.808 C 48 23.93 47.952 24.048 47.863 24.137 L 36 36 Z M 12 36 L 12 13.128 C 12 12.71 11.496 12.504 11.203 12.797 L 0.137 23.863 C 0.049 23.951 0 24.07 0 24.194 L 0 47.532 C 0 47.791 0.209 48 0.468 48 L 23.806 48 C 23.93 48 24.048 47.952 24.137 47.863 L 36 36 Z" fill="rgb(255,255,255)"></path></svg>`,svgContentId:11678500512}},u,h)})})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-ONnR6.framer-1au1x7q, .framer-ONnR6 .framer-1au1x7q { display: block; }`,`.framer-ONnR6.framer-bdxzq4 { height: 20px; overflow: hidden; position: relative; text-decoration: none; width: 20px; }`,`.framer-ONnR6 .framer-1pmgwam { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }`,`.framer-ONnR6.framer-v-c6s8tc.framer-bdxzq4 { height: 16px; width: 16px; }`,`.framer-ONnR6.framer-v-c6s8tc .framer-1pmgwam { height: 16px; left: calc(50.00000000000002% - 16px / 2); top: calc(50.00000000000002% - 16px / 2); width: 16px; }`,`.framer-ONnR6.framer-v-o716p1.framer-bdxzq4 { height: 48px; width: 48px; }`,`.framer-ONnR6.framer-v-o716p1 .framer-1pmgwam { height: 48px; left: calc(50.00000000000002% - 48px / 2); top: calc(50.00000000000002% - 48px / 2); width: 48px; }`],`framer-ONnR6`),Oc.displayName=`v2/Framer University Logo`,Oc.defaultProps={height:20,width:20},ce(Oc,{variant:{options:[`C3_UKybnv`,`PGZq_KKSq`,`TffxSq2Ec`],optionTitles:[`20x20`,`16x16`,`48x48`],title:`Variant`,type:I.Enum}}),P(Oc,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0})}));function Ac(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc=t((()=>{v(),M(),T(),r(),jo(),Ko(),is(),_c(),kc(),jc=D(Oc),Mc=D(rs),Nc=D(Ao),Pc=D(gc),Fc=D(Go),Ic=[`XRMauoWfL`,`DU8QknrSo`,`YoTxeWGSy`,`YeUoC4VTi`],Lc=`framer-XKEjq`,Rc={DU8QknrSo:`framer-v-ighh1d`,XRMauoWfL:`framer-v-zavy0o`,YeUoC4VTi:`framer-v-1vn2vqf`,YoTxeWGSy:`framer-v-mm66m1`},zc={damping:60,delay:0,mass:1,stiffness:600,type:`spring`},Bc=e=>e!=null&&e!==``,Vc=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},Hc=S(c),Uc={"Mobile Close [Entry]":`YeUoC4VTi`,"Mobile Close":`YoTxeWGSy`,"Mobile Open":`DU8QknrSo`,Desktop:`XRMauoWfL`},Wc=({copy:e,height:t,id:n,original:r,remix:i,tutorial:a,width:o,...s})=>({...s,GX6T2VKrU:a??s.GX6T2VKrU,IwijaReYC:e??s.IwijaReYC,QTV45Te1H:i??s.QTV45Te1H,ThAwH13lz:r??s.ThAwH13lz,variant:Uc[s.variant]??s.variant??`XRMauoWfL`}),Gc=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Kc=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:c,ThAwH13lz:l,GX6T2VKrU:u,IwijaReYC:d,QTV45Te1H:f,...m}=Wc(e),{baseVariant:h,classNames:g,clearLoadingGesture:v,gestureHandlers:y,gestureVariant:x,isLoading:C,setGestureState:T,setVariant:E,variants:D}=N({cycleOrder:Ic,defaultVariant:`XRMauoWfL`,variant:c,variantClassNames:Rc}),O=Gc(e,D),{activeVariantCallback:j,delay:M}=k(h),te=j(async(...e)=>{E(`YoTxeWGSy`)}),ne=j(async(...e)=>{E(`DU8QknrSo`)}),re=i(null),ie=()=>!![`DU8QknrSo`,`YoTxeWGSy`,`YeUoC4VTi`].includes(h),ae=Bc(l),oe=Bc(u),se=Bc(d),ce=Bc(f),P=b(),le=[],F=ee();return p(w,{id:s??P,children:p(Hc,{animate:D,initial:!1,children:p(Vc,{value:zc,children:p(S.nav,{...m,...y,className:R(Lc,...le,`framer-zavy0o`,o,g),"data-border":!0,"data-framer-name":`Desktop`,layoutDependency:O,layoutId:`XRMauoWfL`,ref:t??re,style:{"--border-bottom-width":`1px`,"--border-color":`var(--token-38c4cf9a-0aa8-4902-ad35-3a2d52d62d05, rgb(26, 28, 29))`,"--border-left-width":`0px`,"--border-right-width":`0px`,"--border-style":`solid`,"--border-top-width":`0px`,backdropFilter:`blur(12px)`,backgroundColor:`rgba(19, 20, 21, 0.96)`,WebkitBackdropFilter:`blur(12px)`,...a},...Ac({DU8QknrSo:{"data-framer-name":`Mobile Open`},YeUoC4VTi:{"data-framer-name":`Mobile Close [Entry]`},YoTxeWGSy:{"data-framer-name":`Mobile Close`}},h,x),children:_(S.div,{className:`framer-6xssvv`,"data-framer-name":`Content`,layoutDependency:O,layoutId:`dKrrisOO3`,children:[_(S.div,{className:`framer-1u31eev`,"data-framer-name":`Logo + Burger`,layoutDependency:O,layoutId:`Gqr4o05BP`,children:[p(S.div,{"aria-label":`Framer University logo`,className:`framer-1x5642i`,"data-framer-name":`Logo Wrap`,layoutDependency:O,layoutId:`xFe74HeZA`,children:p(pe,{height:20,width:`20px`,y:(F?.y||0)+0+(((F?.height||60)-0-20)/2+0+0)+0+0+0,...Ac({DU8QknrSo:{height:48,width:`48px`,y:(F?.y||0)+0+0+0+0+0+0},YeUoC4VTi:{height:48,width:`48px`,y:(F?.y||0)+0+0+0+0+0+0},YoTxeWGSy:{height:48,width:`48px`,y:(F?.y||0)+0+0+0+0+0+0}},h,x),children:p(S.div,{className:`framer-cdlxsu-container`,layoutDependency:O,layoutId:`k52pFNlqP-container`,children:p(Oc,{height:`100%`,id:`k52pFNlqP`,layoutId:`k52pFNlqP`,style:{height:`100%`,width:`100%`},variant:`C3_UKybnv`,width:`100%`,...Ac({DU8QknrSo:{variant:`PGZq_KKSq`},YeUoC4VTi:{variant:`PGZq_KKSq`},YoTxeWGSy:{variant:`PGZq_KKSq`}},h,x)})})})}),ie()&&p(pe,{children:p(S.div,{className:`framer-18bixcx-container`,layoutDependency:O,layoutId:`s7iluMVZz-container`,children:p(rs,{height:`100%`,id:`s7iluMVZz`,layoutId:`s7iluMVZz`,variant:`WTPtZwtba`,width:`100%`,...Ac({DU8QknrSo:{GsV0XqZB5:te,style:{height:`100%`,width:`100%`},variant:`SHaxQ4HNw`},YeUoC4VTi:{GsV0XqZB5:ne,style:{height:`100%`,width:`100%`},variant:`q9LsRGXap`},YoTxeWGSy:{GsV0XqZB5:ne,style:{height:`100%`,width:`100%`},variant:`Mo7QjZkpk`}},h,x)})})})]}),_(S.div,{className:`framer-xzcf3w`,"data-framer-name":`Actions`,layoutDependency:O,layoutId:`aIdNPI0Pq`,style:{opacity:1},variants:{YeUoC4VTi:{opacity:0},YoTxeWGSy:{opacity:0}},children:[ae&&_(S.div,{className:`framer-1372bbm`,"data-framer-name":`Links`,layoutDependency:O,layoutId:`yrgV8Maum`,children:[ae&&p(pe,{children:p(S.div,{className:`framer-1eo4j4y-container`,layoutDependency:O,layoutId:`Wx0t1ZlzH-container`,children:p(Ao,{height:`100%`,id:`Wx0t1ZlzH`,layoutId:`Wx0t1ZlzH`,PKtYhfOBL:l,style:{height:`100%`},variant:`U1mOkkuX6`,width:`100%`,WZV5xCdWp:`Original`,...Ac({DU8QknrSo:{style:{height:`100%`,width:`100%`}},YeUoC4VTi:{style:{height:`100%`,width:`100%`}},YoTxeWGSy:{style:{height:`100%`,width:`100%`}}},h,x)})})}),oe&&p(pe,{children:p(S.div,{className:`framer-49pk0l-container`,layoutDependency:O,layoutId:`iFW3PCAj0-container`,children:p(Ao,{height:`100%`,id:`iFW3PCAj0`,layoutId:`iFW3PCAj0`,PKtYhfOBL:u,style:{height:`100%`},variant:`U1mOkkuX6`,width:`100%`,WZV5xCdWp:`Tutorial`,...Ac({DU8QknrSo:{style:{height:`100%`,width:`100%`}},YeUoC4VTi:{style:{height:`100%`,width:`100%`}},YoTxeWGSy:{style:{height:`100%`,width:`100%`}}},h,x)})})})]}),se&&p(pe,{height:36,y:(F?.y||0)+0+(((F?.height||60)-0-20)/2+0+0)+10+-18,...Ac({DU8QknrSo:{width:`calc(${F?.width||`100vw`} - 32px)`,y:(F?.y||0)+0+0+0+72+0+-36},YeUoC4VTi:{width:`calc(${F?.width||`100vw`} - 32px)`,y:(F?.y||0)+0+0+0+72+0+-36},YoTxeWGSy:{width:`calc(${F?.width||`100vw`} - 32px)`,y:(F?.y||0)+0+0+0+72+0+-36}},h,x),children:p(S.div,{className:`framer-19ph5fa-container`,layoutDependency:O,layoutId:`h_loDNIbt-container`,children:p(gc,{height:`100%`,id:`h_loDNIbt`,l0RNA5SgB:d,layoutId:`h_loDNIbt`,style:{height:`100%`},variant:`WQ5m_15ag`,width:`100%`,...Ac({DU8QknrSo:{style:{height:`100%`,width:`100%`}},YeUoC4VTi:{style:{height:`100%`,width:`100%`}},YoTxeWGSy:{style:{height:`100%`,width:`100%`}}},h,x)})})}),ce&&p(pe,{height:36,y:(F?.y||0)+0+(((F?.height||60)-0-20)/2+0+0)+10+-18,...Ac({DU8QknrSo:{width:`calc(${F?.width||`100vw`} - 32px)`,y:(F?.y||0)+0+0+0+72+0+12},YeUoC4VTi:{width:`calc(${F?.width||`100vw`} - 32px)`,y:(F?.y||0)+0+0+0+72+0+12},YoTxeWGSy:{width:`calc(${F?.width||`100vw`} - 32px)`,y:(F?.y||0)+0+0+0+72+0+12}},h,x),children:p(S.div,{className:`framer-wej6yj-container`,layoutDependency:O,layoutId:`ta9Lo4pIa-container`,children:p(Go,{FCbomVt5p:f,height:`100%`,id:`ta9Lo4pIa`,layoutId:`ta9Lo4pIa`,style:{height:`100%`},variant:`ielzaY18A`,width:`100%`,...Ac({DU8QknrSo:{style:{height:`100%`,width:`100%`}},YeUoC4VTi:{style:{height:`100%`,width:`100%`}},YoTxeWGSy:{style:{height:`100%`,width:`100%`}}},h,x)})})})]})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-XKEjq.framer-pg4r1v, .framer-XKEjq .framer-pg4r1v { display: block; }`,`.framer-XKEjq.framer-zavy0o { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 1200px; }`,`.framer-XKEjq .framer-6xssvv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-XKEjq .framer-1u31eev { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,`.framer-XKEjq .framer-1x5642i { flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }`,`.framer-XKEjq .framer-cdlxsu-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,`.framer-XKEjq .framer-18bixcx-container { flex: none; height: auto; position: relative; width: auto; }`,`.framer-XKEjq .framer-xzcf3w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; min-height: 36px; min-width: 97px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,`.framer-XKEjq .framer-1372bbm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; min-height: 36px; min-width: 62px; overflow: hidden; padding: 0px 12px 0px 0px; position: relative; width: min-content; }`,`.framer-XKEjq .framer-1eo4j4y-container, .framer-XKEjq .framer-49pk0l-container, .framer-XKEjq .framer-19ph5fa-container, .framer-XKEjq .framer-wej6yj-container { flex: none; height: 36px; position: relative; width: auto; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XKEjq.framer-zavy0o, .framer-XKEjq .framer-1u31eev, .framer-XKEjq .framer-xzcf3w, .framer-XKEjq .framer-1372bbm { gap: 0px; } .framer-XKEjq.framer-zavy0o > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-XKEjq.framer-zavy0o > :first-child { margin-top: 0px; } .framer-XKEjq.framer-zavy0o > :last-child { margin-bottom: 0px; } .framer-XKEjq .framer-1u31eev > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-XKEjq .framer-1u31eev > :first-child, .framer-XKEjq .framer-xzcf3w > :first-child, .framer-XKEjq .framer-1372bbm > :first-child { margin-left: 0px; } .framer-XKEjq .framer-1u31eev > :last-child, .framer-XKEjq .framer-xzcf3w > :last-child, .framer-XKEjq .framer-1372bbm > :last-child { margin-right: 0px; } .framer-XKEjq .framer-xzcf3w > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-XKEjq .framer-1372bbm > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }`,`.framer-XKEjq.framer-v-ighh1d.framer-zavy0o { height: min-content; justify-content: flex-start; padding: 0px; width: 390px; }`,`.framer-XKEjq.framer-v-ighh1d .framer-6xssvv, .framer-XKEjq.framer-v-mm66m1 .framer-6xssvv, .framer-XKEjq.framer-v-1vn2vqf .framer-6xssvv { flex-direction: column; gap: 24px; justify-content: flex-start; }`,`.framer-XKEjq.framer-v-ighh1d .framer-1u31eev, .framer-XKEjq.framer-v-mm66m1 .framer-1u31eev, .framer-XKEjq.framer-v-1vn2vqf .framer-1u31eev { gap: unset; height: 48px; justify-content: space-between; width: 100%; }`,`.framer-XKEjq.framer-v-ighh1d .framer-1x5642i { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 48px); width: 48px; }`,`.framer-XKEjq.framer-v-ighh1d .framer-18bixcx-container, .framer-XKEjq.framer-v-mm66m1 .framer-1x5642i, .framer-XKEjq.framer-v-mm66m1 .framer-18bixcx-container, .framer-XKEjq.framer-v-1vn2vqf .framer-1x5642i, .framer-XKEjq.framer-v-1vn2vqf .framer-18bixcx-container { height: 48px; width: 48px; }`,`.framer-XKEjq.framer-v-ighh1d .framer-xzcf3w, .framer-XKEjq.framer-v-mm66m1 .framer-xzcf3w, .framer-XKEjq.framer-v-1vn2vqf .framer-xzcf3w { flex-direction: column; gap: 12px; min-width: unset; padding: 0px 16px 16px 16px; width: 100%; }`,`.framer-XKEjq.framer-v-ighh1d .framer-1372bbm, .framer-XKEjq.framer-v-mm66m1 .framer-1372bbm, .framer-XKEjq.framer-v-1vn2vqf .framer-1372bbm { flex-direction: column; gap: 8px; min-width: unset; padding: 0px; width: 100%; }`,`.framer-XKEjq.framer-v-ighh1d .framer-1eo4j4y-container, .framer-XKEjq.framer-v-ighh1d .framer-49pk0l-container, .framer-XKEjq.framer-v-ighh1d .framer-19ph5fa-container, .framer-XKEjq.framer-v-ighh1d .framer-wej6yj-container, .framer-XKEjq.framer-v-mm66m1 .framer-1eo4j4y-container, .framer-XKEjq.framer-v-mm66m1 .framer-49pk0l-container, .framer-XKEjq.framer-v-mm66m1 .framer-19ph5fa-container, .framer-XKEjq.framer-v-mm66m1 .framer-wej6yj-container, .framer-XKEjq.framer-v-1vn2vqf .framer-1eo4j4y-container, .framer-XKEjq.framer-v-1vn2vqf .framer-49pk0l-container, .framer-XKEjq.framer-v-1vn2vqf .framer-19ph5fa-container, .framer-XKEjq.framer-v-1vn2vqf .framer-wej6yj-container { width: 100%; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XKEjq.framer-v-ighh1d .framer-6xssvv, .framer-XKEjq.framer-v-ighh1d .framer-1u31eev, .framer-XKEjq.framer-v-ighh1d .framer-xzcf3w, .framer-XKEjq.framer-v-ighh1d .framer-1372bbm { gap: 0px; } .framer-XKEjq.framer-v-ighh1d .framer-6xssvv > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-XKEjq.framer-v-ighh1d .framer-6xssvv > :first-child, .framer-XKEjq.framer-v-ighh1d .framer-xzcf3w > :first-child, .framer-XKEjq.framer-v-ighh1d .framer-1372bbm > :first-child { margin-top: 0px; } .framer-XKEjq.framer-v-ighh1d .framer-6xssvv > :last-child, .framer-XKEjq.framer-v-ighh1d .framer-xzcf3w > :last-child, .framer-XKEjq.framer-v-ighh1d .framer-1372bbm > :last-child { margin-bottom: 0px; } .framer-XKEjq.framer-v-ighh1d .framer-1u31eev > *, .framer-XKEjq.framer-v-ighh1d .framer-1u31eev > :first-child, .framer-XKEjq.framer-v-ighh1d .framer-1u31eev > :last-child { margin: 0px; } .framer-XKEjq.framer-v-ighh1d .framer-xzcf3w > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-XKEjq.framer-v-ighh1d .framer-1372bbm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }`,`.framer-XKEjq.framer-v-mm66m1.framer-zavy0o, .framer-XKEjq.framer-v-1vn2vqf.framer-zavy0o { height: 48px; justify-content: flex-start; padding: 0px; width: 390px; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XKEjq.framer-v-mm66m1 .framer-6xssvv, .framer-XKEjq.framer-v-mm66m1 .framer-1u31eev, .framer-XKEjq.framer-v-mm66m1 .framer-xzcf3w, .framer-XKEjq.framer-v-mm66m1 .framer-1372bbm { gap: 0px; } .framer-XKEjq.framer-v-mm66m1 .framer-6xssvv > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-XKEjq.framer-v-mm66m1 .framer-6xssvv > :first-child, .framer-XKEjq.framer-v-mm66m1 .framer-xzcf3w > :first-child, .framer-XKEjq.framer-v-mm66m1 .framer-1372bbm > :first-child { margin-top: 0px; } .framer-XKEjq.framer-v-mm66m1 .framer-6xssvv > :last-child, .framer-XKEjq.framer-v-mm66m1 .framer-xzcf3w > :last-child, .framer-XKEjq.framer-v-mm66m1 .framer-1372bbm > :last-child { margin-bottom: 0px; } .framer-XKEjq.framer-v-mm66m1 .framer-1u31eev > *, .framer-XKEjq.framer-v-mm66m1 .framer-1u31eev > :first-child, .framer-XKEjq.framer-v-mm66m1 .framer-1u31eev > :last-child { margin: 0px; } .framer-XKEjq.framer-v-mm66m1 .framer-xzcf3w > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-XKEjq.framer-v-mm66m1 .framer-1372bbm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XKEjq.framer-v-1vn2vqf .framer-6xssvv, .framer-XKEjq.framer-v-1vn2vqf .framer-1u31eev, .framer-XKEjq.framer-v-1vn2vqf .framer-xzcf3w, .framer-XKEjq.framer-v-1vn2vqf .framer-1372bbm { gap: 0px; } .framer-XKEjq.framer-v-1vn2vqf .framer-6xssvv > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-XKEjq.framer-v-1vn2vqf .framer-6xssvv > :first-child, .framer-XKEjq.framer-v-1vn2vqf .framer-xzcf3w > :first-child, .framer-XKEjq.framer-v-1vn2vqf .framer-1372bbm > :first-child { margin-top: 0px; } .framer-XKEjq.framer-v-1vn2vqf .framer-6xssvv > :last-child, .framer-XKEjq.framer-v-1vn2vqf .framer-xzcf3w > :last-child, .framer-XKEjq.framer-v-1vn2vqf .framer-1372bbm > :last-child { margin-bottom: 0px; } .framer-XKEjq.framer-v-1vn2vqf .framer-1u31eev > *, .framer-XKEjq.framer-v-1vn2vqf .framer-1u31eev > :first-child, .framer-XKEjq.framer-v-1vn2vqf .framer-1u31eev > :last-child { margin: 0px; } .framer-XKEjq.framer-v-1vn2vqf .framer-xzcf3w > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-XKEjq.framer-v-1vn2vqf .framer-1372bbm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }`,`.framer-XKEjq[data-border="true"]::after, .framer-XKEjq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`],`framer-XKEjq`),Kc.displayName=`Nav`,Kc.defaultProps={height:60,width:1200},ce(Kc,{variant:{options:[`XRMauoWfL`,`DU8QknrSo`,`YoTxeWGSy`,`YeUoC4VTi`],optionTitles:[`Desktop`,`Mobile Open`,`Mobile Close`,`Mobile Close [Entry]`],title:`Variant`,type:I.Enum},ThAwH13lz:{title:`Original`,type:I.Link},GX6T2VKrU:{title:`Tutorial`,type:I.Link},IwijaReYC:{defaultValue:``,displayTextArea:!0,title:`Copy`,type:I.String},QTV45Te1H:{title:`Remix`,type:I.Link}}),P(Kc,[{explicitInter:!0,fonts:[]},...jc,...Mc,...Nc,...Pc,...Fc],{supportsExplicitInterCodegen:!0})})),Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl=t((()=>{v(),M(),T(),r(),Jc=`framer-q8Ttd`,Yc={XvqTw0Be9:`framer-v-jjcw9a`},Xc={bounce:.2,delay:0,duration:.4,type:`spring`},Zc=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},Qc=S(c),$c=({height:e,id:t,subtitle:n,title:r,width:i,...a})=>({...a,WuF2iG84P:n??a.WuF2iG84P??`Set up the component by adding background and bouncer elements to the component properties.`,yeAnKbEUZ:r??a.yeAnKbEUZ??`Screen Saver`}),el=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),tl=E(m(function(e,t){let{activeLocale:n,setLocale:r}=A(),{style:a,className:o,layoutId:s,variant:l,yeAnKbEUZ:u,WuF2iG84P:d,...f}=$c(e),{baseVariant:m,classNames:h,clearLoadingGesture:g,gestureHandlers:v,gestureVariant:y,isLoading:x,setGestureState:C,setVariant:T,variants:E}=N({defaultVariant:`XvqTw0Be9`,variant:l,variantClassNames:Yc}),D=el(e,E),O=i(null),k=b(),j=[];return ee(),p(w,{id:s??k,children:p(Qc,{animate:E,initial:!1,children:p(Zc,{value:Xc,children:p(S.div,{...f,...v,className:R(Jc,...j,`framer-jjcw9a`,o,h),"data-framer-name":`Default`,layoutDependency:D,layoutId:`XvqTw0Be9`,ref:t??O,style:{backgroundColor:`rgba(136, 85, 255, 0.1)`,...a},children:_(S.div,{className:`framer-uh2i08`,layoutDependency:D,layoutId:`aM7oiNoFL`,children:[p(le,{className:`framer-flw0dh`,"data-framer-name":`Logo`,layout:`position`,layoutDependency:D,layoutId:`GthLmGmBt`,opacity:1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g id="ss11036020200_1"><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 21 7.113 C 21 7.041 21.029 6.971 21.079 6.921 L 27.534 0.465 C 27.613 0.388 27.73 0.365 27.831 0.407 C 27.933 0.449 28 0.548 28 0.658 L 28 13.888 C 28 13.96 27.971 14.028 27.921 14.079 L 21 21 Z M 7 21 L 7 7.658 C 7 7.548 6.933 7.449 6.831 7.407 C 6.73 7.365 6.613 7.388 6.534 7.465 L 0.079 13.921 C 0.028 13.972 0 14.041 0 14.113 L 0 27.728 C 0 27.877 0.122 28 0.273 28 L 13.888 28 C 13.96 28 14.028 27.971 14.079 27.921 L 21 21 Z" fill="rgb(153, 102, 255)"></path></g></svg>`,svgContentId:11036020200,withExternalLayout:!0}),_(S.div,{className:`framer-k3ullq`,layoutDependency:D,layoutId:`E3DQBYSAf`,children:[p(de,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{style:{"--font-selector":`SW50ZXItQm9sZA==`,"--framer-font-family":`"Inter", "Inter Placeholder", sans-serif`,"--framer-font-size":`11px`,"--framer-font-weight":`700`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1em`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(153, 102, 255))`},children:`Screen Saver`})}),className:`framer-q0gs4u`,"data-framer-name":`Title`,fonts:[`Inter-Bold`],layoutDependency:D,layoutId:`UqJwZqJjg`,style:{"--extracted-r6o4lv":`rgb(153, 102, 255)`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:u,verticalAlignment:`top`,withExternalLayout:!0}),p(de,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{style:{"--framer-font-size":`11px`,"--framer-letter-spacing":`-0.03em`,"--framer-line-height":`1.4em`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-r6o4lv, rgba(153, 102, 255, 0.7))`},children:`Set up the component by adding background and bouncer elements to the component properties.`})}),className:`framer-g5dqhc`,"data-framer-name":`Subtitle`,fonts:[`Inter`],layoutDependency:D,layoutId:`RJ7UF99m8`,style:{"--extracted-r6o4lv":`rgba(153, 102, 255, 0.7)`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:d,verticalAlignment:`top`,withExternalLayout:!0})]})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-q8Ttd.framer-qanqo2, .framer-q8Ttd .framer-qanqo2 { display: block; }`,`.framer-q8Ttd.framer-jjcw9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 400px; }`,`.framer-q8Ttd .framer-uh2i08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,`.framer-q8Ttd .framer-flw0dh { flex: none; height: 28px; position: relative; width: 28px; }`,`.framer-q8Ttd .framer-k3ullq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-q8Ttd .framer-q0gs4u, .framer-q8Ttd .framer-g5dqhc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-q8Ttd.framer-jjcw9a, .framer-q8Ttd .framer-uh2i08, .framer-q8Ttd .framer-k3ullq { gap: 0px; } .framer-q8Ttd.framer-jjcw9a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-q8Ttd.framer-jjcw9a > :first-child { margin-left: 0px; } .framer-q8Ttd.framer-jjcw9a > :last-child { margin-right: 0px; } .framer-q8Ttd .framer-uh2i08 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-q8Ttd .framer-uh2i08 > :first-child, .framer-q8Ttd .framer-k3ullq > :first-child { margin-top: 0px; } .framer-q8Ttd .framer-uh2i08 > :last-child, .framer-q8Ttd .framer-k3ullq > :last-child { margin-bottom: 0px; } .framer-q8Ttd .framer-k3ullq > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }`],`framer-q8Ttd`),tl.displayName=`Utils/Component Message`,tl.defaultProps={height:200,width:400},ce(tl,{yeAnKbEUZ:{defaultValue:`Screen Saver`,displayTextArea:!1,title:`Title`,type:I.String},WuF2iG84P:{defaultValue:`Set up the component by adding background and bouncer elements to the component properties.`,displayTextArea:!1,title:`Subtitle`,type:I.String}}),P(tl,[{explicitInter:!0,fonts:[{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:(location.origin+"/assets/fonts/font-48d54789.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:(location.origin+"/assets/fonts/font-b7bcaf4d.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+1F00-1FFF`,url:(location.origin+"/assets/fonts/font-f5679bd1.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0370-03FF`,url:(location.origin+"/assets/fonts/font-4c7778ed.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:(location.origin+"/assets/fonts/font-388a7c4e.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:(location.origin+"/assets/fonts/font-ee85b182.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:(location.origin+"/assets/fonts/font-c0215d82.woff2"),weight:`700`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:(location.origin+"/assets/fonts/font-ba02b29b.woff2"),weight:`400`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:(location.origin+"/assets/fonts/font-d342a035.woff2"),weight:`400`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+1F00-1FFF`,url:(location.origin+"/assets/fonts/font-29ec2a1b.woff2"),weight:`400`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0370-03FF`,url:(location.origin+"/assets/fonts/font-2666a469.woff2"),weight:`400`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:(location.origin+"/assets/fonts/font-ca74d670.woff2"),weight:`400`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:(location.origin+"/assets/fonts/font-61418a35.woff2"),weight:`400`},{family:`Inter`,source:`framer`,style:`normal`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:(location.origin+"/assets/fonts/font-b055aed3.woff2"),weight:`400`}]}],{supportsExplicitInterCodegen:!0})})),rl=t((()=>{nl(),nl()})),il,al=t((()=>{v(),r(),rl(),il=({title:e,subtitle:t,style:n})=>p(tl,{yeAnKbEUZ:e,WuF2iG84P:t,style:{width:`100%`,height:`100%`,...n}})})),ol=t((()=>{al()}));
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function sl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xd[e&255]+xd[e>>8&255]+xd[e>>16&255]+xd[e>>24&255]+`-`+xd[t&255]+xd[t>>8&255]+`-`+xd[t>>16&15|64]+xd[t>>24&255]+`-`+xd[n&63|128]+xd[n>>8&255]+`-`+xd[n>>16&255]+xd[n>>24&255]+xd[r&255]+xd[r>>8&255]+xd[r>>16&255]+xd[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function cl(e,t){return(e%t+t)%t}function ll(e,t,n){return(1-n)*e+n*t}function ul(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function dl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}function fl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pl(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ml(){let e=pl(`canvas`);return e.style.display=`block`,e}function hl(e){e in Td||(Td[e]=!0,console.warn(e))}function gl(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function _l(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vl(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function yl(){let e={enabled:!0,workingColorSpace:md,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=bl(e.r),e.g=bl(e.g),e.b=bl(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xl(e.r),e.g=xl(e.g),e.b=xl(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?hd:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[md]:{primaries:t,whitePoint:r,transfer:hd,toXYZ:Ed,fromXYZ:Dd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pd},outputColorSpaceConfig:{drawingBufferColorSpace:pd}},[pd]:{primaries:t,whitePoint:r,transfer:gd,toXYZ:Ed,fromXYZ:Dd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pd}}}),e}function bl(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xl(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function Sl(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ad.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}function Cl(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){nf.fromArray(e,a);let o=i.x*Math.abs(nf.x)+i.y*Math.abs(nf.y)+i.z*Math.abs(nf.z),s=t.dot(nf),c=n.dot(nf),l=r.dot(nf);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function wl(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Tl(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ip.copy(s),Ip.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ip);return l<n.near||l>n.far?null:{distance:l,point:Ip.clone(),object:e}}function El(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ap),e.getVertexPosition(c,jp),e.getVertexPosition(l,Mp);let u=Tl(e,t,n,r,Ap,jp,Mp,Fp);if(u){let e=new Y;rp.getBarycoord(Fp,Ap,jp,Mp,e),i&&(u.uv=rp.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=rp.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=rp.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};rp.getNormal(Ap,jp,Mp,t.normal),u.face=t,u.barycoord=e}return u}function Dl(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Ol(e){let t={};for(let n=0;n<e.length;n++){let r=Dl(e[n]);for(let e in r)t[e]=r[e]}return t}function kl(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Al(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Od.workingColorSpace}function jl(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function Ml(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Nl(e,t){let n=1-e;return n*n*t}function Pl(e,t){return 2*(1-e)*e*t}function Fl(e,t){return e*e*t}function Il(e,t,n,r){return Nl(e,t)+Pl(e,n)+Fl(e,r)}function Ll(e,t){let n=1-e;return n*n*n*t}function Rl(e,t){let n=1-e;return 3*n*n*e*t}function zl(e,t){return 3*(1-e)*e*e*t}function Bl(e,t){return e*e*e*t}function Vl(e,t,n,r,i){return Ll(e,t)+Rl(e,n)+zl(e,r)+Bl(e,i)}function Hl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ul(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Wl(e,t){return e.distance-t.distance}function Gl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Gl(r[e],t,n,!0)}}function Kl(e,t,n,r){let i=ql(r);switch(n){case hu:return e*t;case vu:return e*t;case yu:return e*t*2;case Su:return e*t/i.components*i.byteLength;case Cu:return e*t/i.components*i.byteLength;case wu:return e*t*2/i.components*i.byteLength;case Tu:return e*t*2/i.components*i.byteLength;case gu:return e*t*3/i.components*i.byteLength;case _u:return e*t*4/i.components*i.byteLength;case Eu:return e*t*4/i.components*i.byteLength;case Du:case Ou:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ku:case Au:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mu:case Pu:return Math.max(e,16)*Math.max(t,8)/4;case ju:case Nu:return Math.max(e,8)*Math.max(t,8)/2;case Fu:case Iu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Wu:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Gu:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ku:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case qu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ju:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zu:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Qu:case $u:case ed:return Math.ceil(e/4)*Math.ceil(t/4)*16;case td:case nd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case rd:case id:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ql(e){switch(e){case ru:case iu:return{byteLength:1,components:1};case ou:case au:case uu:return{byteLength:2,components:1};case du:case fu:return{byteLength:2,components:4};case cu:case su:case lu:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}var Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,q,J,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Y,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,X,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh=t((()=>{a(),Jl=1e3,Yl=1001,Xl=1002,Zl=1003,Ql=1004,$l=1005,eu=1006,tu=1007,nu=1008,ru=1009,iu=1010,au=1011,ou=1012,su=1013,cu=1014,lu=1015,uu=1016,du=1017,fu=1018,pu=1020,mu=35902,hu=1021,gu=1022,_u=1023,vu=1024,yu=1025,bu=1026,xu=1027,Su=1028,Cu=1029,wu=1030,Tu=1031,Eu=1033,Du=33776,Ou=33777,ku=33778,Au=33779,ju=35840,Mu=35841,Nu=35842,Pu=35843,Fu=36196,Iu=37492,Lu=37496,Ru=37808,zu=37809,Bu=37810,Vu=37811,Hu=37812,Uu=37813,Wu=37814,Gu=37815,Ku=37816,qu=37817,Ju=37818,Yu=37819,Xu=37820,Zu=37821,Qu=36492,$u=36494,ed=36495,td=36283,nd=36284,rd=36285,id=36286,ad=2300,od=2301,sd=2302,cd=2400,ld=2401,ud=2402,dd=3200,fd=3201,pd=`srgb`,md=`srgb-linear`,hd=`linear`,gd=`srgb`,_d=7680,vd=35044,yd=2e3,bd=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},xd=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Sd=Math.PI/180,Cd=180/Math.PI,q=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},J=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wd.makeScale(e,t)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wd=new J,Td={},Ed=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Od=yl(),Ad=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kd===void 0&&(kd=pl(`canvas`)),kd.width=e.width,kd.height=e.height;let n=kd.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kd}return t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=pl(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bl(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bl(t[e]/255)*255):t[e]=bl(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},jd=0,Md=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Sl(r[t].image)):e.push(Sl(r[t]))}else e=Sl(r);n.url=e}return t||(e.images[this.uuid]=n),n}},Nd=0,Pd=class e extends bd{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Yl,i=Yl,a=eu,o=nu,s=_u,c=ru,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=sl(),this.name=``,this.source=new Md(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jl:e.x-=Math.floor(e.x);break;case Yl:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jl:e.y-=Math.floor(e.y);break;case Yl:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},Pd.DEFAULT_IMAGE=null,Pd.DEFAULT_MAPPING=300,Pd.DEFAULT_ANISOTROPY=1,Fd=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Id=class extends bd{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Fd(0,0,e,t),this.scissorTest=!1,this.viewport=new Fd(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:eu,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Pd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Md(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ld=class extends Id{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rd=class extends Pd{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zl,this.minFilter=Zl,this.wrapR=Yl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},zd=class extends Pd{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zl,this.minFilter=Zl,this.wrapR=Yl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bd=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vd=new Y,Hd=new Bd,Ud=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gd.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gd.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Gd):Gd.fromBufferAttribute(r,t),Gd.applyMatrix4(e.matrixWorld),this.expandByPoint(Gd);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Kd.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Kd.copy(e.boundingBox)),Kd.applyMatrix4(e.matrixWorld),this.union(Kd)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gd),Gd.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($d),ef.subVectors(this.max,$d),qd.subVectors(e.a,$d),Jd.subVectors(e.b,$d),Yd.subVectors(e.c,$d),Xd.subVectors(Jd,qd),Zd.subVectors(Yd,Jd),Qd.subVectors(qd,Yd);let t=[0,-Xd.z,Xd.y,0,-Zd.z,Zd.y,0,-Qd.z,Qd.y,Xd.z,0,-Xd.x,Zd.z,0,-Zd.x,Qd.z,0,-Qd.x,-Xd.y,Xd.x,0,-Zd.y,Zd.x,0,-Qd.y,Qd.x,0];return!Cl(t,qd,Jd,Yd,ef)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,qd,Jd,Yd,ef))?!1:(tf.crossVectors(Xd,Zd),t=[tf.x,tf.y,tf.z],Cl(t,qd,Jd,Yd,ef))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gd).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gd).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wd[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wd[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wd[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wd[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wd[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wd[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wd[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wd[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wd),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wd=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Gd=new Y,Kd=new Ud,qd=new Y,Jd=new Y,Yd=new Y,Xd=new Y,Zd=new Y,Qd=new Y,$d=new Y,ef=new Y,tf=new Y,nf=new Y,rf=new Ud,af=new Y,of=new Y,sf=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rf.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;af.subVectors(e,this.center);let t=af.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(af,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(af.copy(e.center).add(of)),this.expandByPoint(af.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cf=new Y,lf=new Y,uf=new Y,df=new Y,ff=new Y,pf=new Y,mf=new Y,hf=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cf)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cf.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cf.copy(this.origin).addScaledVector(this.direction,t),cf.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lf.copy(e).add(t).multiplyScalar(.5),uf.copy(t).sub(e).normalize(),df.copy(this.origin).sub(lf);let i=e.distanceTo(t)*.5,a=-this.direction.dot(uf),o=df.dot(this.direction),s=-df.dot(uf),c=df.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(lf).addScaledVector(uf,d),f}intersectSphere(e,t){cf.subVectors(e.center,this.origin);let n=cf.dot(this.direction),r=cf.dot(cf)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cf)!==null}intersectTriangle(e,t,n,r,i){ff.subVectors(t,e),pf.subVectors(n,e),mf.crossVectors(ff,pf);let a=this.direction.dot(mf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;df.subVectors(this.origin,e);let s=o*this.direction.dot(pf.crossVectors(df,pf));if(s<0)return null;let c=o*this.direction.dot(ff.cross(df));if(c<0||s+c>a)return null;let l=-o*df.dot(mf);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gf=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/_f.setFromMatrixColumn(e,0).length(),i=1/_f.setFromMatrixColumn(e,1).length(),a=1/_f.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,bf)}lookAt(e,t,n){let r=this.elements;return Cf.subVectors(e,t),Cf.lengthSq()===0&&(Cf.z=1),Cf.normalize(),xf.crossVectors(n,Cf),xf.lengthSq()===0&&(Math.abs(n.z)===1?Cf.x+=1e-4:Cf.z+=1e-4,Cf.normalize(),xf.crossVectors(n,Cf)),xf.normalize(),Sf.crossVectors(Cf,xf),r[0]=xf.x,r[4]=Sf.x,r[8]=Cf.x,r[1]=xf.y,r[5]=Sf.y,r[9]=Cf.y,r[2]=xf.z,r[6]=Sf.z,r[10]=Cf.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=_f.set(r[0],r[1],r[2]).length(),a=_f.set(r[4],r[5],r[6]).length(),o=_f.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],vf.copy(this);let s=1/i,c=1/a,l=1/o;return vf.elements[0]*=s,vf.elements[1]*=s,vf.elements[2]*=s,vf.elements[4]*=c,vf.elements[5]*=c,vf.elements[6]*=c,vf.elements[8]*=l,vf.elements[9]*=l,vf.elements[10]*=l,t.setFromRotationMatrix(vf),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=yd){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yd){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_f=new Y,vf=new gf,yf=new Y(0,0,0),bf=new Y(1,1,1),xf=new Y,Sf=new Y,Cf=new Y,wf=new gf,Tf=new Bd,Ef=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Ef.DEFAULT_ORDER=`XYZ`,Df=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Of=0,kf=new Y,Af=new Bd,jf=new gf,Mf=new Y,Nf=new Y,Pf=new Y,Ff=new Bd,If=new Y(1,0,0),Lf=new Y(0,1,0),Rf=new Y(0,0,1),zf={type:`added`},Bf={type:`removed`},Vf={type:`childadded`,child:null},Hf={type:`childremoved`,child:null},Uf=class e extends bd{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=sl(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Ef,r=new Bd,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gf},normalMatrix:{value:new J}}),this.matrix=new gf,this.matrixWorld=new gf,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Af.setFromAxisAngle(e,t),this.quaternion.multiply(Af),this}rotateOnWorldAxis(e,t){return Af.setFromAxisAngle(e,t),this.quaternion.premultiply(Af),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jf.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mf.copy(e):Mf.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Nf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jf.lookAt(Nf,Mf,this.up):jf.lookAt(Mf,Nf,this.up),this.quaternion.setFromRotationMatrix(jf),r&&(jf.extractRotation(r.matrixWorld),Af.setFromRotationMatrix(jf),this.quaternion.premultiply(Af.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zf),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jf.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jf.multiply(e.parent.matrixWorld)),e.applyMatrix4(jf),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zf),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nf,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nf,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},Uf.DEFAULT_UP=new Y(0,1,0),Uf.DEFAULT_MATRIX_AUTO_UPDATE=!0,Uf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,Wf=new Y,Gf=new Y,Kf=new Y,qf=new Y,Jf=new Y,Yf=new Y,Xf=new Y,Zf=new Y,Qf=new Y,$f=new Y,ep=new Fd,tp=new Fd,np=new Fd,rp=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wf.subVectors(e,t),r.cross(Wf);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wf.subVectors(r,t),Gf.subVectors(n,t),Kf.subVectors(e,t);let a=Wf.dot(Wf),o=Wf.dot(Gf),s=Wf.dot(Kf),c=Gf.dot(Gf),l=Gf.dot(Kf),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qf)!==null&&qf.x>=0&&qf.y>=0&&qf.x+qf.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qf)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qf.x),s.addScaledVector(a,qf.y),s.addScaledVector(o,qf.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ep.setScalar(0),tp.setScalar(0),np.setScalar(0),ep.fromBufferAttribute(e,t),tp.fromBufferAttribute(e,n),np.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ep,i.x),a.addScaledVector(tp,i.y),a.addScaledVector(np,i.z),a}static isFrontFacing(e,t,n,r){return Wf.subVectors(n,t),Gf.subVectors(e,t),Wf.cross(Gf).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wf.subVectors(this.c,this.b),Gf.subVectors(this.a,this.b),Wf.cross(Gf).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jf.subVectors(r,n),Yf.subVectors(i,n),Zf.subVectors(e,n);let s=Jf.dot(Zf),c=Yf.dot(Zf);if(s<=0&&c<=0)return t.copy(n);Qf.subVectors(e,r);let l=Jf.dot(Qf),u=Yf.dot(Qf);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Jf,a);$f.subVectors(e,i);let f=Jf.dot($f),p=Yf.dot($f);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yf,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xf.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xf,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jf,a).addScaledVector(Yf,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ap={h:0,s:0,l:0},op={h:0,s:0,l:0},X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pd){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Od.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Od.workingColorSpace){return this.r=e,this.g=t,this.b=n,Od.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Od.workingColorSpace){if(e=cl(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=wl(i,r,e+1/3),this.g=wl(i,r,e),this.b=wl(i,r,e-1/3)}return Od.toWorkingColorSpace(this,r),this}setStyle(e,t=pd){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pd){let n=ip[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}copyLinearToSRGB(e){return this.r=xl(e.r),this.g=xl(e.g),this.b=xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pd){return Od.fromWorkingColorSpace(sp.copy(this),e),Math.round(K(sp.r*255,0,255))*65536+Math.round(K(sp.g*255,0,255))*256+Math.round(K(sp.b*255,0,255))}getHexString(e=pd){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Od.workingColorSpace){Od.fromWorkingColorSpace(sp.copy(this),t);let n=sp.r,r=sp.g,i=sp.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Od.workingColorSpace){return Od.fromWorkingColorSpace(sp.copy(this),t),e.r=sp.r,e.g=sp.g,e.b=sp.b,e}getStyle(e=pd){Od.fromWorkingColorSpace(sp.copy(this),e);let t=sp.r,n=sp.g,r=sp.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ap),this.setHSL(ap.h+e,ap.s+t,ap.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ap),e.getHSL(op);let n=ll(ap.h,op.h,t),r=ll(ap.s,op.s,t),i=ll(ap.l,op.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sp=new X,X.NAMES=ip,cp=0,lp=class extends bd{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=sl(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_d,this.stencilZFail=_d,this.stencilZPass=_d,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},up=class extends lp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ef,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dp=new Y,fp=new q,pp=0,mp=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=vd,this.updateRanges=[],this.gpuType=lu,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fp.fromBufferAttribute(this,t),fp.applyMatrix3(e),this.setXY(t,fp.x,fp.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.applyMatrix3(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.applyMatrix4(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.applyNormalMatrix(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.transformDirection(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ul(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dl(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ul(t,this.array)),t}setX(e,t){return this.normalized&&(t=dl(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ul(t,this.array)),t}setY(e,t){return this.normalized&&(t=dl(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ul(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dl(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ul(t,this.array)),t}setW(e,t){return this.normalized&&(t=dl(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dl(t,this.array),n=dl(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dl(t,this.array),n=dl(n,this.array),r=dl(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=dl(t,this.array),n=dl(n,this.array),r=dl(r,this.array),i=dl(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},hp=class extends mp{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gp=class extends mp{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_p=class extends mp{constructor(e,t,n){super(new Float32Array(e),t,n)}},vp=0,yp=new gf,bp=new Uf,xp=new Y,Sp=new Ud,Cp=new Ud,wp=new Y,Tp=class e extends bd{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=sl(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?gp:hp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yp.makeRotationFromQuaternion(e),this.applyMatrix4(yp),this}rotateX(e){return yp.makeRotationX(e),this.applyMatrix4(yp),this}rotateY(e){return yp.makeRotationY(e),this.applyMatrix4(yp),this}rotateZ(e){return yp.makeRotationZ(e),this.applyMatrix4(yp),this}translate(e,t,n){return yp.makeTranslation(e,t,n),this.applyMatrix4(yp),this}scale(e,t,n){return yp.makeScale(e,t,n),this.applyMatrix4(yp),this}lookAt(e){return bp.lookAt(e),bp.updateMatrix(),this.applyMatrix4(bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xp).negate(),this.translate(xp.x,xp.y,xp.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _p(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ud);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sp.setFromBufferAttribute(n),this.morphTargetsRelative?(wp.addVectors(this.boundingBox.min,Sp.min),this.boundingBox.expandByPoint(wp),wp.addVectors(this.boundingBox.max,Sp.max),this.boundingBox.expandByPoint(wp)):(this.boundingBox.expandByPoint(Sp.min),this.boundingBox.expandByPoint(Sp.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sf);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(Sp.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cp.setFromBufferAttribute(n),this.morphTargetsRelative?(wp.addVectors(Sp.min,Cp.min),Sp.expandByPoint(wp),wp.addVectors(Sp.max,Cp.max),Sp.expandByPoint(wp)):(Sp.expandByPoint(Cp.min),Sp.expandByPoint(Cp.max))}Sp.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)wp.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(wp));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)wp.fromBufferAttribute(a,t),o&&(xp.fromBufferAttribute(e,t),wp.add(xp)),r=Math.max(r,n.distanceToSquared(wp))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new mp(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new q,f=new q,p=new q,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new mp(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wp.fromBufferAttribute(e,t),wp.normalize(),e.setXYZ(t,wp.x,wp.y,wp.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mp(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ep=new gf,Dp=new hf,Op=new sf,kp=new Y,Ap=new Y,jp=new Y,Mp=new Y,Np=new Y,Pp=new Y,Fp=new Y,Ip=new Y,Lp=class extends Uf{constructor(e=new Tp,t=new up){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Pp.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Np.fromBufferAttribute(s,e),a?Pp.addScaledVector(Np,r):Pp.addScaledVector(Np.sub(t),r))}t.add(Pp)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Op.copy(n.boundingSphere),Op.applyMatrix4(i),Dp.copy(e.ray).recast(e.near),!(Op.containsPoint(Dp.origin)===!1&&(Dp.intersectSphere(Op,kp)===null||Dp.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(Ep.copy(i).invert(),Dp.copy(e.ray).applyMatrix4(Ep),!(n.boundingBox!==null&&Dp.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dp)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=El(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=El(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=El(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=El(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}},Rp=class e extends Tp{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _p(c,3)),this.setAttribute(`normal`,new _p(l,3)),this.setAttribute(`uv`,new _p(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zp={clone:Dl,merge:Ol},Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hp=class extends lp{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dl(e.uniforms),this.uniformsGroups=kl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Up=class extends Uf{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new gf,this.projectionMatrix=new gf,this.projectionMatrixInverse=new gf,this.coordinateSystem=yd}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wp=new Y,Gp=new q,Kp=new q,qp=class extends Up{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wp.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wp.x,Wp.y).multiplyScalar(-e/Wp.z),Wp.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wp.x,Wp.y).multiplyScalar(-e/Wp.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Kp),t.subVectors(Kp,Gp)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sd*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jp=-90,Yp=1,Xp=class extends Uf{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qp(Jp,Yp,e,t);r.layers=this.layers,this.add(r);let i=new qp(Jp,Yp,e,t);i.layers=this.layers,this.add(i);let a=new qp(Jp,Yp,e,t);a.layers=this.layers,this.add(a);let o=new qp(Jp,Yp,e,t);o.layers=this.layers,this.add(o);let s=new qp(Jp,Yp,e,t);s.layers=this.layers,this.add(s);let c=new qp(Jp,Yp,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zp=class extends Pd{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qp=class extends Ld{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?eu:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rp(5,5,5),i=new Hp({name:`CubemapFromEquirect`,uniforms:Dl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Lp(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=eu),new Xp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},$p=class extends Uf{constructor(){super(),this.isGroup=!0,this.type=`Group`}},em={type:`move`},tm=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $p,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $p,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $p,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $p;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nm=class extends Uf{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ef,this.environmentIntensity=1,this.environmentRotation=new Ef,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},rm=class extends Pd{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Zl,l=Zl,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},im=class extends mp{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},am=new gf,om=new gf,sm=[],cm=new Ud,lm=new gf,um=new Lp,dm=new sf,fm=class extends Lp{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new im(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,lm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ud),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,am),cm.copy(e.boundingBox).applyMatrix4(am),this.boundingBox.union(cm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sf),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,am),dm.copy(e.boundingSphere).applyMatrix4(am),this.boundingSphere.union(dm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(um.geometry=this.geometry,um.material=this.material,um.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dm.copy(this.boundingSphere),dm.applyMatrix4(n),e.ray.intersectsSphere(dm)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,am),om.multiplyMatrices(n,am),um.matrixWorld=om,um.raycast(e,sm);for(let e=0,n=sm.length;e<n;e++){let n=sm[e];n.instanceId=i,n.object=this,t.push(n)}sm.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new im(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rm(new Float32Array(r*this.count),r,this.count,Su,lu));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pm=new Y,mm=new Y,hm=new J,gm=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=pm.subVectors(n,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(pm),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hm.getNormalMatrix(e),r=this.coplanarPoint(pm).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_m=new sf,vm=new Y,ym=class{constructor(e=new gm,t=new gm,n=new gm,r=new gm,i=new gm,a=new gm){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yd){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_m.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_m.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_m)}intersectsSprite(e){return _m.center.set(0,0,0),_m.radius=.7071067811865476,_m.applyMatrix4(e.matrixWorld),this.intersectsSphere(_m)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(vm.x=r.normal.x>0?e.max.x:e.min.x,vm.y=r.normal.y>0?e.max.y:e.min.y,vm.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vm)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bm=class extends Pd{constructor(e,t,n,r,i,a,o,s,c,l=bu){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=cu),n===void 0&&l===1027&&(n=pu),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?Zl:o,this.minFilter=s===void 0?Zl:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xm=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn(`THREE.Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new q:new Y);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Y,r=[],i=[],a=[],o=new Y,s=new gf;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Y)}i[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(K(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(K(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sm=class extends xm{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new q){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cm=class extends Sm{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}},wm=new Y,Tm=new jl,Em=new jl,Dm=new jl,Om=class extends xm{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Y){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(wm.subVectors(r[0],r[1]).add(r[0]),c=wm);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(wm.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=wm),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Tm.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Em.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Dm.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Tm.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Em.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Dm.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Tm.calc(s),Em.calc(s),Dm.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Y().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},km=class extends xm{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Vl(e,r.x,i.x,a.x,o.x),Vl(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Am=class extends xm{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Vl(e,r.x,i.x,a.x,o.x),Vl(e,r.y,i.y,a.y,o.y),Vl(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jm=class extends xm{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mm=class extends xm{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nm=class extends xm{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Il(e,r.x,i.x,a.x),Il(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pm=class extends xm{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Il(e,r.x,i.x,a.x),Il(e,r.y,i.y,a.y),Il(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fm=class extends xm{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new q){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ml(o,s.x,c.x,l.x,u.x),Ml(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this}},Im=Object.freeze({__proto__:null,ArcCurve:Cm,CatmullRomCurve3:Om,CubicBezierCurve:km,CubicBezierCurve3:Am,EllipseCurve:Sm,LineCurve:jm,LineCurve3:Mm,QuadraticBezierCurve:Nm,QuadraticBezierCurve3:Pm,SplineCurve:Fm}),Lm=class e extends Tp{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _p(p,3)),this.setAttribute(`normal`,new _p(m,3)),this.setAttribute(`uv`,new _p(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Rm=class e extends Tp{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Y,d=new Y,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new _p(p,3)),this.setAttribute(`normal`,new _p(m,3)),this.setAttribute(`uv`,new _p(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},zm=class e extends Tp{constructor(e=new Pm(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Y,s=new Y,c=new q,l=new Y,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new _p(u,3)),this.setAttribute(`normal`,new _p(d,3)),this.setAttribute(`uv`,new _p(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Im[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Bm=class extends lp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vm=class extends lp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Hm=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Um=class extends Hm{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ld:i=e,o=2*t-n;break;case ud:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ld:a=e,s=2*n-t;break;case ud:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Wm=class extends Hm{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Gm=class extends Hm{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Km=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Um(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ad:t=this.InterpolantFactoryMethodDiscrete;break;case od:t=this.InterpolantFactoryMethodLinear;break;case sd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ad;case this.InterpolantFactoryMethodLinear:return od;case this.InterpolantFactoryMethodSmooth:return sd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ul(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sd,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},Km.prototype.TimeBufferType=Float32Array,Km.prototype.ValueBufferType=Float32Array,Km.prototype.DefaultInterpolation=od,qm=class extends Km{constructor(e,t,n){super(e,t,n)}},qm.prototype.ValueTypeName=`bool`,qm.prototype.ValueBufferType=Array,qm.prototype.DefaultInterpolation=ad,qm.prototype.InterpolantFactoryMethodLinear=void 0,qm.prototype.InterpolantFactoryMethodSmooth=void 0,Jm=class extends Km{},Jm.prototype.ValueTypeName=`color`,Ym=class extends Km{},Ym.prototype.ValueTypeName=`number`,Xm=class extends Hm{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bd.slerpFlat(i,0,a,c-o,a,c,s);return i}},Zm=class extends Km{InterpolantFactoryMethodLinear(e){return new Xm(this.times,this.values,this.getValueSize(),e)}},Zm.prototype.ValueTypeName=`quaternion`,Zm.prototype.InterpolantFactoryMethodSmooth=void 0,Qm=class extends Km{constructor(e,t,n){super(e,t,n)}},Qm.prototype.ValueTypeName=`string`,Qm.prototype.ValueBufferType=Array,Qm.prototype.DefaultInterpolation=ad,Qm.prototype.InterpolantFactoryMethodLinear=void 0,Qm.prototype.InterpolantFactoryMethodSmooth=void 0,$m=class extends Km{},$m.prototype.ValueTypeName=`vector`,eh=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},th=new eh,nh=class{constructor(e){this.manager=e===void 0?th:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},nh.DEFAULT_MATERIAL_NAME=`__DEFAULT`,rh=class extends Up{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends qp{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}},ah=`\\[\\]\\.:\\/`,oh=RegExp(`[\\[\\]\\.:\\/]`,`g`),sh=`[^\\[\\]\\.:\\/]`,ch=`[^`+ah.replace(`\\.`,``)+`]`,lh=`((?:WC+[\\/:])*)`.replace(`WC`,sh),uh=`(WCOD+)?`.replace(`WCOD`,ch),dh=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,sh),fh=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,sh),ph=RegExp(`^`+lh+uh+dh+fh+`$`),mh=[`material`,`materials`,`bones`,`map`],hh=class{constructor(e,t,n){let r=n||gh.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gh=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(oh,``)}static parseTrackName(e){let t=ph.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);mh.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},gh.Composite=hh,gh.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},gh.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},gh.prototype.GetterByBindingType=[gh.prototype._getValue_direct,gh.prototype._getValue_array,gh.prototype._getValue_arrayElement,gh.prototype._getValue_toArray],gh.prototype.SetterByBindingTypeAndVersioning=[[gh.prototype._setValue_direct,gh.prototype._setValue_direct_setNeedsUpdate,gh.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gh.prototype._setValue_array,gh.prototype._setValue_array_setNeedsUpdate,gh.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gh.prototype._setValue_arrayElement,gh.prototype._setValue_arrayElement_setNeedsUpdate,gh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gh.prototype._setValue_fromArray,gh.prototype._setValue_fromArray_setNeedsUpdate,gh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],_h=new gf,vh=class{constructor(e,t,n=0,r=1/0){this.ray=new hf(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Df,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return _h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_h),this}intersectObject(e,t=!0,n=[]){return Gl(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Gl(e[r],this,n,t);return n.sort(Wl),n}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`174`}})),u!==void 0&&(u.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):u.__THREE__=`174`)}));
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function bh(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xh(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}function Sh(e,t,n,r,i,a,o){let s=new X(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Lp(new Rp(1,1,1),new Hp({name:`BackgroundCubeMaterial`,uniforms:Dl(S_.backgroundCube.uniforms),vertexShader:S_.backgroundCube.vertexShader,fragmentShader:S_.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),w_.copy(n.backgroundRotation),w_.x*=-1,w_.y*=-1,w_.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(w_.y*=-1,w_.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(w_)),u.material.toneMapped=Od.getTransfer(r.colorSpace)!==gd,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Lp(new Lm(2,2),new Hp({name:`BackgroundMaterial`,uniforms:Dl(S_.background.uniforms),vertexShader:S_.background.vertexShader,fragmentShader:S_.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Od.getTransfer(r.colorSpace)!==gd,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(C_,Al(e)),r.buffers.color.setClear(C_.r,C_.g,C_.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Ch(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wh(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Th(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Eh(e){let t=this,n=null,r=0,i=!1,a=!1,o=new gm,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Dh(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new Qp(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}function Oh(e){let t=[],n=[],r=[],i=e,a=e-E_+1+D_.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-E_?s=D_[o-e+E_-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Tp;h.setAttribute(`position`,new mp(f,3)),h.setAttribute(`uv`,new mp(p,2)),h.setAttribute(`faceIndex`,new mp(m,1)),t.push(h),i>E_&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function kh(e,t,n){let r=new Ld(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ah(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function jh(e,t,n){let r=new Float32Array(O_),i=new Y(0,1,0);return new Hp({name:`SphericalGaussianBlur`,defines:{n:O_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mh(){return new Hp({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nh(){return new Hp({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fh(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new z_(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new z_(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Ih(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&hl(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Lh(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(fl(n)?gp:hp)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Rh(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zh(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Bh(e,t,n){let r=new WeakMap,i=new Fd;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Rd(h,p,m,u);g.type=lu,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Vh(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}function Hh(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=G_[i];if(a===void 0&&(a=new Float32Array(i),G_[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Uh(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Wh(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Gh(e,t){let n=K_[t];n===void 0&&(n=new Int32Array(t),K_[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Kh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uh(n,t))return;e.uniform2fv(this.addr,t),Wh(n,t)}}function Jh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Uh(n,t))return;e.uniform3fv(this.addr,t),Wh(n,t)}}function Yh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uh(n,t))return;e.uniform4fv(this.addr,t),Wh(n,t)}}function Xh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uh(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wh(n,t)}else{if(Uh(n,r))return;Y_.set(r),e.uniformMatrix2fv(this.addr,!1,Y_),Wh(n,r)}}function Zh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uh(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wh(n,t)}else{if(Uh(n,r))return;J_.set(r),e.uniformMatrix3fv(this.addr,!1,J_),Wh(n,r)}}function Qh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uh(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wh(n,t)}else{if(Uh(n,r))return;q_.set(r),e.uniformMatrix4fv(this.addr,!1,q_),Wh(n,r)}}function $h(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function eg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uh(n,t))return;e.uniform2iv(this.addr,t),Wh(n,t)}}function tg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Uh(n,t))return;e.uniform3iv(this.addr,t),Wh(n,t)}}function ng(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uh(n,t))return;e.uniform4iv(this.addr,t),Wh(n,t)}}function rg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ig(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uh(n,t))return;e.uniform2uiv(this.addr,t),Wh(n,t)}}function ag(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Uh(n,t))return;e.uniform3uiv(this.addr,t),Wh(n,t)}}function og(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uh(n,t))return;e.uniform4uiv(this.addr,t),Wh(n,t)}}function sg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(V_.compareFunction=515,a=V_):a=B_,n.setTexture2D(t||a,i)}function cg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||U_,i)}function lg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||W_,i)}function ug(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||H_,i)}function dg(e){switch(e){case 5126:return Kh;case 35664:return qh;case 35665:return Jh;case 35666:return Yh;case 35674:return Xh;case 35675:return Zh;case 35676:return Qh;case 5124:case 35670:return $h;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return rg;case 36294:return ig;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(e,t){e.uniform1fv(this.addr,t)}function pg(e,t){let n=Hh(t,this.size,2);e.uniform2fv(this.addr,n)}function mg(e,t){let n=Hh(t,this.size,3);e.uniform3fv(this.addr,n)}function hg(e,t){let n=Hh(t,this.size,4);e.uniform4fv(this.addr,n)}function gg(e,t){let n=Hh(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _g(e,t){let n=Hh(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vg(e,t){let n=Hh(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yg(e,t){e.uniform1iv(this.addr,t)}function bg(e,t){e.uniform2iv(this.addr,t)}function xg(e,t){e.uniform3iv(this.addr,t)}function Sg(e,t){e.uniform4iv(this.addr,t)}function Cg(e,t){e.uniform1uiv(this.addr,t)}function wg(e,t){e.uniform2uiv(this.addr,t)}function Tg(e,t){e.uniform3uiv(this.addr,t)}function Eg(e,t){e.uniform4uiv(this.addr,t)}function Dg(e,t,n){let r=this.cache,i=t.length,a=Gh(n,i);Uh(r,a)||(e.uniform1iv(this.addr,a),Wh(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||B_,a[e])}function Og(e,t,n){let r=this.cache,i=t.length,a=Gh(n,i);Uh(r,a)||(e.uniform1iv(this.addr,a),Wh(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||U_,a[e])}function kg(e,t,n){let r=this.cache,i=t.length,a=Gh(n,i);Uh(r,a)||(e.uniform1iv(this.addr,a),Wh(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||W_,a[e])}function Ag(e,t,n){let r=this.cache,i=t.length,a=Gh(n,i);Uh(r,a)||(e.uniform1iv(this.addr,a),Wh(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||H_,a[e])}function jg(e){switch(e){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return hg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return xg;case 35669:case 35673:return Sg;case 5125:return Cg;case 36294:return wg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Mg(e,t){e.seq.push(t),e.map[t.id]=t}function Ng(e,t,n){let r=e.name,i=r.length;for($_.lastIndex=0;;){let a=$_.exec(r),o=$_.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Mg(n,l===void 0?new X_(s,e,t):new Z_(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Q_(s),Mg(n,e)),n=e}}}function Pg(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function Fg(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Ig(e){Od._getMatrix(rv,Od.workingColorSpace,e);let t=`mat3( ${rv.elements.map(e=>e.toFixed(4))} )`;switch(Od.getTransfer(e)){case hd:return[t,`LinearTransferOETF`];case gd:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Lg(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Fg(e.getShaderSource(t),r)}else return i}function Rg(e,t){let n=Ig(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function zg(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Bg(){return Od.getLuminanceCoefficients(iv),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${iv.x.toFixed(4)}, ${iv.y.toFixed(4)}, ${iv.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Vg(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Wg).join(`
`)}function Hg(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ug(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Wg(e){return e!==``}function Gg(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function qg(e){return e.replace(av,Jg)}function Jg(e,t){let n=Z[t];if(n===void 0){let e=ov.get(t);if(e!==void 0)n=Z[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return qg(n)}function Yg(e){return e.replace(sv,Xg)}function Xg(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Zg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Qg(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function $g(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function e_(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function t_(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function n_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function r_(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Qg(n),l=$g(n),u=e_(n),d=t_(n),f=n_(n),p=Vg(n),m=Hg(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wg).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wg).join(`
`),_.length>0&&(_+=`
`)):(g=[Zg(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Wg).join(`
`),_=[Zg(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:zg(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Rg(`linearToOutputTexel`,n.outputColorSpace),Bg(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Wg).join(`
`)),o=qg(o),o=Gg(o,n),o=Kg(o,n),s=qg(s),s=Gg(s,n),s=Kg(s,n),o=Yg(o),s=Yg(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Pg(i,i.VERTEX_SHADER,y),S=Pg(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Lg(i,x,`vertex`),r=Lg(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ev(i,h),T=Ug(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,tv)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nv++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function i_(e,t,n,r,i,a,o){let s=new Df,c=new lv,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=S_[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=_.isInstancedMesh===!0,ee=_.isBatchedMesh===!0,te=!!a.map,ne=!!a.matcap,re=!!x,ie=!!a.aoMap,ae=!!a.lightMap,oe=!!a.bumpMap,se=!!a.normalMap,ce=!!a.displacementMap,P=!!a.emissiveMap,le=!!a.metalnessMap,F=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,I=a.iridescence>0,pe=a.sheen>0,L=a.transmission>0,me=ue&&!!a.anisotropyMap,R=de&&!!a.clearcoatMap,z=de&&!!a.clearcoatNormalMap,B=de&&!!a.clearcoatRoughnessMap,V=I&&!!a.iridescenceMap,he=I&&!!a.iridescenceThicknessMap,ge=pe&&!!a.sheenColorMap,_e=pe&&!!a.sheenRoughnessMap,ve=!!a.specularMap,ye=!!a.specularColorMap,be=!!a.specularIntensityMap,xe=L&&!!a.transmissionMap,Se=L&&!!a.thicknessMap,Ce=!!a.gradientMap,we=!!a.alphaMap,Te=a.alphaTest>0,Ee=!!a.alphaHash,De=!!a.extensions,Oe=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ee,batchingColor:ee&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:md,alphaToCoverage:!!a.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:f&&ce,emissiveMap:P,normalMapObjectSpace:se&&a.normalMapType===1,normalMapTangentSpace:se&&a.normalMapType===0,metalnessMap:le,roughnessMap:F,anisotropy:ue,anisotropyMap:me,clearcoat:de,clearcoatMap:R,clearcoatNormalMap:z,clearcoatRoughnessMap:B,dispersion:fe,iridescence:I,iridescenceMap:V,iridescenceThicknessMap:he,sheen:pe,sheenColorMap:ge,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:ye,specularIntensityMap:be,transmission:L,transmissionMap:xe,thicknessMap:Se,gradientMap:Ce,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:a.combine,mapUv:te&&h(a.map.channel),aoMapUv:ie&&h(a.aoMap.channel),lightMapUv:ae&&h(a.lightMap.channel),bumpMapUv:oe&&h(a.bumpMap.channel),normalMapUv:se&&h(a.normalMap.channel),displacementMapUv:ce&&h(a.displacementMap.channel),emissiveMapUv:P&&h(a.emissiveMap.channel),metalnessMapUv:le&&h(a.metalnessMap.channel),roughnessMapUv:F&&h(a.roughnessMap.channel),anisotropyMapUv:me&&h(a.anisotropyMap.channel),clearcoatMapUv:R&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:z&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:he&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:_e&&h(a.sheenRoughnessMap.channel),specularMapUv:ve&&h(a.specularMap.channel),specularColorMapUv:ye&&h(a.specularColorMap.channel),specularIntensityMapUv:be&&h(a.specularIntensityMap.channel),transmissionMapUv:xe&&h(a.transmissionMap.channel),thicknessMapUv:Se&&h(a.thicknessMap.channel),alphaMapUv:we&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(se||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(te||we),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:M,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:te&&a.map.isVideoTexture===!0&&Od.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:P&&a.emissiveMap.isVideoTexture===!0&&Od.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:De&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&a.extensions.multiDraw===!0||ee)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=S_[t];n=zp.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new r_(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function a_(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function o_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function s_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function c_(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||o_),r.length>1&&r.sort(t||s_),i.length>1&&i.sort(t||s_)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function l_(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new c_,e.set(t,[i])):n>=r.length?(i=new c_,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function u_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Y,color:new X};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return e[t.id]=n,n}}}function d_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function f_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function p_(e){let t=new u_,n=d_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new gf,o=new gf;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(f_);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=dv++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function m_(e){let t=new p_(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function h_(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new m_(e),t.set(n,[a])):r>=i.length?(a=new m_(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}function g_(e,t,n){let r=new ym,i=new q,a=new q,o=new Fd,s=new Bm({depthPacking:fd}),c=new Vm,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Hp({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Tp;m.setAttribute(`position`,new mp(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Lp(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Zl,magFilter:Zl};d.map!==null&&d.map.dispose(),d.map=new Ld(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ld(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function __(e,t){function n(){let t=!1,n=new Fd,r=null,i=new Fd(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=mv[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new X(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(ee)[1]),M=N>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Fd().fromArray(re),oe=new Fd().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),me(!1),R(1),P(e.CULL_FACE),pe(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function F(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let I={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(le(e.BLEND),h=!1);return}if(h===!1&&(P(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(fe[n],fe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(I[r],I[i],I[o],I[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function L(t,n){t.side===2?le(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),B(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function R(t){t===0?le(e.CULL_FACE):(P(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function z(t){t!==O&&(M&&e.lineWidth(t),O=t)}function B(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):le(e.POLYGON_OFFSET_FILL)}function V(t){t?P(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function he(t){t===void 0&&(t=e.TEXTURE0+j-1),te!==t&&(e.activeTexture(t),te=t)}function ge(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+j-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function _e(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function ke(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ae(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function je(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},te=null,ne={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new X(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:le,bindFramebuffer:F,drawBuffers:ue,useProgram:de,setBlending:pe,setMaterial:L,setFlipSided:me,setCullFace:R,setLineWidth:z,setPolygonOffset:B,setScissorTest:V,activeTexture:he,bindTexture:ge,unbindTexture:_e,compressedTexImage2D:ve,compressedTexImage3D:ye,texImage2D:Ee,texImage3D:De,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:we,texStorage3D:Te,texSubImage2D:be,texSubImage3D:xe,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ce,scissor:Oe,viewport:ke,reset:Me}}function v_(e,t,n,r,i,a,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=o!==void 0&&/OculusBrowser/g.test(o.userAgent),u=new q,d=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):pl(`canvas`)}function g(e,t,n){let r=1,i=he(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?hd:Od.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],s.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){let e=O;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ne={[Jl]:e.REPEAT,[Yl]:e.CLAMP_TO_EDGE,[Xl]:e.MIRRORED_REPEAT},re={[Zl]:e.NEAREST,[Ql]:e.NEAREST_MIPMAP_NEAREST,[$l]:e.NEAREST_MIPMAP_LINEAR,[eu]:e.LINEAR,[tu]:e.LINEAR_MIPMAP_NEAREST,[nu]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ne[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let o=j(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=Od.getPrimaries(Od.workingColorSpace),r=o.colorSpace===``?null:Od.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=g(o.image,!1,i.maxTextureSize);p=V(o,p);let m=a.convert(o.format,o.colorSpace),h=a.convert(o.type),y=b(o.internalFormat,m,h,o.colorSpace,o.isVideoTexture);ae(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=S(o,p);if(o.isDepthTexture)y=x(o.format===xu,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,y,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,y,p.width,p.height,0,m,h,null));else if(o.isDataTexture)if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,y,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,h,C.data):n.texImage2D(e.TEXTURE_2D,t,y,C.width,C.height,0,m,h,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,y,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,h,p.data)):n.texImage2D(e.TEXTURE_2D,0,y,p.width,p.height,0,m,h,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,y,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023)if(m!==null)if(T){if(D)if(o.layerUpdates.size>0){let r=Kl(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,y,C.width,C.height,p.depth,0,C.data,0,0);else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,h,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,y,C.width,C.height,p.depth,0,m,h,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,y,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,h,C.data):n.texImage2D(e.TEXTURE_2D,t,y,C.width,C.height,0,m,h,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,y,C.width,C.height,0,C.data)}else if(o.isDataArrayTexture)if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,y,p.width,p.height,p.depth),D)if(o.layerUpdates.size>0){let t=Kl(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,h,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,y,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,y,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)):n.texImage3D(e.TEXTURE_3D,0,y,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isFramebufferTexture){if(E)if(T)n.texStorage2D(e.TEXTURE_2D,O,y,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,y,t,r,0,m,h,null),t>>=1,r>>=1}}else if(w.length>0){if(T&&E){let t=he(w[0]);n.texStorage2D(e.TEXTURE_2D,O,y,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,h,C):n.texImage2D(e.TEXTURE_2D,t,y,m,h,C);o.generateMipmaps=!1}else if(T){if(E){let t=he(p);n.texStorage2D(e.TEXTURE_2D,O,y,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,h,p)}else n.texImage2D(e.TEXTURE_2D,0,y,m,h,p);_(o)&&v(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Od.getPrimaries(Od.workingColorSpace),r=o.colorSpace===``?null:Od.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=V(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=he(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function P(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,R(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=R(n);z(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,s,l,o.colorSpace),d=R(n);r&&z(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):z(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function F(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,(!a.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),M(i.depthTexture,0);let o=a.__webglTexture,s=R(i);if(i.depthTexture.format===1026)z(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)z(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function ue(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);F(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),le(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),le(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(t,n,i){let a=r.get(t);n!==void 0&&P(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ue(t)}function fe(t){let i=t.texture,o=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){o.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)o.__webglFramebuffer[t][n]=e.createFramebuffer()}else o.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)o.__webglFramebuffer[t]=e.createFramebuffer()}else o.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&z(t)===!1){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];o.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),s=a.convert(r.type),c=b(r.internalFormat,i,s,r.colorSpace,t.isXRRenderTarget===!0),u=R(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,o.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),le(o.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)P(o.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else P(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],s=r.get(a);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),ae(e.TEXTURE_2D,a),P(o.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),_(a)&&v(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)P(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else P(o.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ue(t)}function I(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let pe=[],L=[];function me(t){if(t.samples>0){if(z(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(pe.length=0,L.length=0,pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(pe.push(c),L.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,L)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function R(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function B(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function V(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Od.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function he(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=A,this.resetTextureUnits=k,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=de,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=P,this.useMultisampledRTT=z}function y_(e,t){function n(n,r=``){let i,a=Od.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}function b_(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Al(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,yv.copy(o),yv.x*=-1,yv.y*=-1,yv.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(yv.y*=-1,yv.z*=-1),e.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(yv)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function x_(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Z,Q,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv=t((()=>{a(),yh(),Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},S_={basic:{uniforms:Ol([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ol([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Ol([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ol([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Ol([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Ol([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Ol([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ol([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ol([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ol([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Ol([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:Ol([Q.common,Q.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag},shadow:{uniforms:Ol([Q.lights,Q.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}},S_.physical={uniforms:Ol([S_.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},C_={r:0,b:0,g:0},w_=new Ef,T_=new gf,E_=4,D_=[.125,.215,.35,.446,.526,.582],O_=20,k_=new rh,A_=new X,j_=null,M_=0,N_=0,P_=!1,F_=(1+Math.sqrt(5))/2,I_=1/F_,L_=[new Y(-F_,I_,0),new Y(F_,I_,0),new Y(-I_,0,F_),new Y(I_,0,F_),new Y(0,F_,-I_),new Y(0,F_,I_),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],R_=new Y,z_=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=R_}=i;j_=this._renderer.getRenderTarget(),M_=this._renderer.getActiveCubeFace(),N_=this._renderer.getActiveMipmapLevel(),P_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(j_,M_,N_),this._renderer.xr.enabled=P_,e.scissorTest=!1,Ah(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),j_=this._renderer.getRenderTarget(),M_=this._renderer.getActiveCubeFace(),N_=this._renderer.getActiveMipmapLevel(),P_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:eu,minFilter:eu,generateMipmaps:!1,type:uu,format:_u,colorSpace:md,depthBuffer:!1},r=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Oh(r)),this._blurMaterial=jh(r,e,t)}return r}_compileMaterial(e){let t=new Lp(this._lodPlanes[0],e);this._renderer.compile(t,k_)}_sceneToCubeUV(e,t,n,r,i){let a=new qp(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(A_),c.toneMapping=0,c.autoClear=!1;let d=new up({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new Lp(new Rp,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(A_),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ah(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Lp(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ah(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,k_)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=L_[(r-t-1)%L_.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Lp(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*O_-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):O_;m>O_&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${O_}`);let h=[],g=0;for(let e=0;e<O_;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ah(t,3*v*(r>_-E_?r-_+E_:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,k_)}},B_=new Pd,V_=new bm(1,1),H_=new Rd,U_=new zd,W_=new Zp,G_=[],K_=[],q_=new Float32Array(16),J_=new Float32Array(9),Y_=new Float32Array(4),X_=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}},Z_=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}},Q_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},$_=/(\w+)(\])?(\[|\.)?/g,ev=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ng(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},tv=37297,nv=0,rv=new J,iv=new Y,av=/^[ \t]*#include +<([\w\d./]+)>/gm,ov=new Map,sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,cv=0,lv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uv(e),t.set(e,n)),n}},uv=class{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}},dv=0,fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,mv={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_v=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Pd,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hp({vertexShader:hv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lp(new Lm(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vv=class extends bd{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new _v,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new q,x=null,S=new qp;S.viewport=new Fd;let C=new qp;C.viewport=new Fd;let w=[S,C],T=new ih,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new tm,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new tm,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new tm,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<`u`&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?xu:bu,a=h.stencil?pu:cu);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ld(d.textureWidth,d.textureHeight,{format:_u,type:ru,depthTexture:new bm(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ld(f.framebufferWidth,f.framebufferHeight,{format:_u,type:ru,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let j=new Y,M=new Y;function N(e,t,n){j.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far),S.layers.mask=e.layers.mask|2,C.layers.mask=e.layers.mask|4,T.layers.mask=S.layers.mask|C.layers.mask;let i=e.parent,a=T.cameras;ee(T,i);for(let e=0;e<a.length;e++)ee(a[e],i);a.length===2?N(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),te(e,T,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Cd*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new qp,o.layers.enable(r),o.viewport=new Fd,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&u){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new bh;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},yv=new Ef,bv=new gf,xv=class{constructor(e={}){let{canvas:t=ml(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pd,this.toneMapping=0,this.toneMappingExposure=1;let y=this,b=!1,x=0,S=0,C=null,w=-1,T=null,E=new Fd,D=new Fd,O=null,k=new X(0),A=0,j=t.width,M=t.height,N=1,ee=null,te=null,ne=new Fd(0,0,j,M),re=new Fd(0,0,j,M),ie=!1,ae=new ym,oe=!1,se=!1;this.transmissionResolutionScale=1;let ce=new gf,P=new gf,le=new Y,F=new Fd,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return C===null?N:1}let I=n;function pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r174`),t.addEventListener(`webglcontextlost`,Fe,!1),t.addEventListener(`webglcontextrestored`,Ie,!1),t.addEventListener(`webglcontextcreationerror`,Le,!1),I===null){let t=`webgl2`;if(I=pe(t,e),I===null)throw pe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let L,me,R,z,B,V,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me;function Ne(){L=new Ih(I),L.init(),Ae=new y_(I,L),me=new Th(I,L,e,Ae),R=new __(I,L),me.reverseDepthBuffer&&d&&R.buffers.depth.setReversed(!0),z=new zh(I),B=new a_,V=new v_(I,L,R,B,me,Ae,z),he=new Dh(y),ge=new Fh(y),_e=new xh(I),je=new Ch(I,_e),ve=new Lh(I,_e,z,je),ye=new Vh(I,ve,_e,z),De=new Bh(I,me,V),we=new Eh(B),be=new i_(y,he,ge,L,me,je,we),xe=new b_(y,B),Se=new l_,Ce=new h_(L),Ee=new Sh(y,he,ge,R,ye,f,s),Te=new g_(y,ye,me),Me=new x_(I,z,me,R),Oe=new wh(I,L,z),ke=new Rh(I,L,z),z.programs=be.programs,y.capabilities=me,y.extensions=L,y.properties=B,y.renderLists=Se,y.shadowMap=Te,y.state=R,y.info=z}Ne();let Pe=new vv(y,I);this.xr=Pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=L.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=L.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(j,M,!1))},this.getSize=function(e){return e.set(j,M)},this.setSize=function(e,n,r=!0){if(Pe.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}j=e,M=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(j*N,M*N).floor()},this.setDrawingBufferSize=function(e,n,r){j=e,M=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(ne)},this.setViewport=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),R.viewport(E.copy(ne).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(re)},this.setScissor=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),R.scissor(D.copy(re).multiplyScalar(N).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(e){R.setScissorTest(ie=e)},this.setOpaqueSort=function(e){ee=e},this.setTransparentSort=function(e){te=e},this.getClearColor=function(e){return e.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ee.getClearColor(),r=Ee.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,I.clearBufferuiv(I.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,I.clearBufferiv(I.COLOR,0,m))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Fe,!1),t.removeEventListener(`webglcontextrestored`,Ie,!1),t.removeEventListener(`webglcontextcreationerror`,Le,!1),Ee.dispose(),Se.dispose(),Ce.dispose(),B.dispose(),he.dispose(),ge.dispose(),ye.dispose(),je.dispose(),Me.dispose(),be.dispose(),Pe.dispose(),Pe.removeEventListener(`sessionstart`,We),Pe.removeEventListener(`sessionend`,Ge),Ke.stop()};function Fe(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function Ie(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=z.autoReset,t=Te.enabled,n=Te.autoUpdate,r=Te.needsUpdate,i=Te.type;Ne(),z.autoReset=e,Te.enabled=t,Te.autoUpdate=n,Te.needsUpdate=r,Te.type=i}function Le(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Re(e){let t=e.target;t.removeEventListener(`dispose`,Re),ze(t)}function ze(e){Be(e),B.remove(e)}function Be(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){be.releaseProgram(e)}),e.isShaderMaterial&&be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=tt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;je.setup(i,r,s,n,c);let h,g=Oe;if(c!==null&&(h=_e.get(c),g=ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*fe()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)hl(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(L.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?_e.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ve(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Qe(e,t,n),e.side=0,e.needsUpdate=!0,Qe(e,t,n),e.side=2):Qe(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=Ce.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ve(a,n,e),r.add(a)}else Ve(t,n,e),r.add(t)}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}L.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let He=null;function Ue(e){He&&He(e)}function We(){Ke.stop()}function Ge(){Ke.start()}let Ke=new bh;Ke.setAnimationLoop(Ue),typeof self<`u`&&Ke.setContext(self),this.setAnimationLoop=function(e){He=e,Pe.setAnimationLoop(e),e===null?Ke.stop():Ke.start()},Pe.addEventListener(`sessionstart`,We),Pe.addEventListener(`sessionend`,Ge),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(t),t=Pe.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=Ce.get(e,v.length),g.init(t),v.push(g),P.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ae.setFromProjectionMatrix(P),se=this.localClippingEnabled,oe=we.init(this.clippingPlanes,se),h=Se.get(e,_.length),h.init(),_.push(h),Pe.enabled===!0&&Pe.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&qe(e,t,-1/0,y.sortObjects)}qe(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(ee,te),de=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,de&&Ee.addToRenderList(h,e),this.info.render.frame++,oe===!0&&we.beginShadows();let n=g.state.shadowsArray;Te.render(n,e,t),oe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Ye(r,i,e,a)}de&&Ee.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Je(h,e,r,r.viewport)}}else i.length>0&&Ye(r,i,e,t),de&&Ee.render(e),Je(h,e,t);C!==null&&S===0&&(V.updateMultisampleRenderTarget(C),V.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),je.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],oe===!0&&we.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ae.intersectsSprite(e)){r&&F.setFromMatrixPosition(e.matrixWorld).applyMatrix4(P);let t=ye.update(e),i=e.material;i.visible&&h.push(e,t,i,n,F.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ae.intersectsObject(e))){let t=ye.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),F.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),F.copy(e.boundingSphere.center)),F.applyMatrix4(e.matrixWorld).applyMatrix4(P)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,F.z,o)}}else i.visible&&h.push(e,t,i,n,F.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)qe(i[e],t,n,r)}function Je(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),oe===!0&&we.setGlobalState(y.clippingPlanes,n),r&&R.viewport(E.copy(r)),i.length>0&&Xe(i,t,n),a.length>0&&Xe(a,t,n),o.length>0&&Xe(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Ye(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new Ld(1,1,{generateMipmaps:!0,type:L.has(`EXT_color_buffer_half_float`)||L.has(`EXT_color_buffer_float`)?uu:ru,minFilter:nu,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Od.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget();y.setRenderTarget(a),y.getClearColor(k),A=y.getClearAlpha(),A<1&&y.setClearColor(16777215,.5),y.clear(),de&&Ee.render(n);let c=y.toneMapping;y.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),oe===!0&&we.setGlobalState(y.clippingPlanes,r),Xe(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),L.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Ze(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}y.setRenderTarget(s),y.setClearColor(k,A),l!==void 0&&(r.viewport=l),y.toneMapping=c}function Xe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Ze(o,t,n,s,c,l)}}function Ze(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function Qe(e,t,n){t.isScene!==!0&&(t=ue);let r=B.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=be.getParameters(e,i.state,a,t,n),c=be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ge:he).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Re),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return et(e,s),u}else s.uniforms=be.getUniforms(e),e.onBeforeCompile(s,y),u=be.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=we.uniform),et(e,s),r.needsLights=rt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function $e(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ev.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function et(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function tt(e,t,n,r,i){t.isScene!==!0&&(t=ue),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:md,c=(r.isMeshStandardMaterial?ge:he).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=B.get(r),b=g.state.lights;if(oe===!0&&(se===!0||e!==T)){let t=e===T&&r.id===w;we.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==we.numPlanes||v.numIntersection!==we.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=Qe(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(R.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){R.buffers.depth.getReversed()?(ce.copy(e.projectionMatrix),_l(ce),vl(ce),k.setValue(I,`projectionMatrix`,ce)):k.setValue(I,`projectionMatrix`,e.projectionMatrix),k.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(I,le.setFromMatrixPosition(e.matrixWorld)),me.logarithmicDepthBuffer&&k.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(I,i,`bindMatrix`),k.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(I,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(k.setOptional(I,i,`batchingTexture`),k.setValue(I,`batchingTexture`,i._matricesTexture,V),k.setOptional(I,i,`batchingIdTexture`),k.setValue(I,`batchingIdTexture`,i._indirectTexture,V),k.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(I,`batchingColorTexture`,i._colorsTexture,V));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&De.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(I,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(I,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&nt(A,O),a&&r.fog===!0&&xe.refreshFogUniforms(A,a),xe.refreshMaterialUniforms(A,r,N,M,g.state.transmissionRenderTarget[e.id]),ev.upload(I,$e(v),A,V)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ev.upload(I,$e(v),A,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(I,`center`,i.center),k.setValue(I,`modelViewMatrix`,i.modelViewMatrix),k.setValue(I,`normalMatrix`,i.normalMatrix),k.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Me.update(n,S),Me.bind(n,S)}}return S}function nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function rt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=n;let r=B.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||L.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let it=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=B.get(e);if(s.__useDefaultFramebuffer!==void 0)R.bindFramebuffer(I.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(s.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(ne).multiplyScalar(N).floor(),D.copy(re).multiplyScalar(N).floor(),O=ie;if(n!==0&&(i=it),R.bindFramebuffer(I.FRAMEBUFFER,i)&&r&&R.drawBuffers(e,i),R.viewport(E),R.scissor(D),R.setScissorTest(O),a){let r=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=B.get(e.texture),i=t;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,n,i)}else if(e!==null&&n!==0){let t=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){R.bindFramebuffer(I.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!me.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!me.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Ae.convert(s),Ae.convert(c),a)}finally{let e=C===null?null:B.get(C).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!me.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!me.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(I.FRAMEBUFFER,s);let e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,e),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Ae.convert(c),Ae.convert(l),0);let o=C===null?null:B.get(C).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,o);let u=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gl(I,u,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(e),I.deleteSync(u),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(hl(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()};let at=I.createFramebuffer(),ot=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){e.isTexture!==!0&&(hl(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],a=arguments[3]||0,n=null),a===null&&(i===0?a=0:(hl(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ae.convert(t.format),_=Ae.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(I.UNPACK_ROW_LENGTH),b=I.getParameter(I.UNPACK_IMAGE_HEIGHT),x=I.getParameter(I.UNPACK_SKIP_PIXELS),S=I.getParameter(I.UNPACK_SKIP_ROWS),C=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l),I.pixelStorei(I.UNPACK_SKIP_ROWS,u),I.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);R.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);R.bindFramebuffer(I.READ_FRAMEBUFFER,at),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,ot);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(I.UNPACK_ROW_LENGTH,y),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),R.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(hl(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),hl(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,R.reset(),je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yd}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Od._getDrawingBufferColorSpace(e),t.unpackColorSpace=Od._getUnpackColorSpace()}}}));function Cv(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function wv(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Tv(e){let t,n,r;e.length===2?(t=e===Cv||e===wv?e:Ev,n=e,r=e):(t=Cv,n=(t,n)=>Cv(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function Ev(){return 0}function Dv(e){return e===null?NaN:+e}function*Ov(e){for(let t of e)yield*t}function kv(e){return Array.from(Ov(e))}var Av,jv,Mv=t((()=>{Av=Tv(Cv),Av.right,Av.left,Tv(Dv).center,jv=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){let t=this._partials,n=0;for(let r=0;r<this._n&&r<32;r++){let i=t[r],a=e+i,o=Math.abs(e)<Math.abs(i)?e-(a-i):i-(a-e);o&&(t[n++]=o),e=a}return t[n]=e,this._n=n+1,this}valueOf(){let e=this._partials,t=this._n,n,r,i,a=0;if(t>0){for(a=e[--t];t>0&&(n=a,r=e[--t],a=n+r,i=r-(a-n),!i););t>0&&(i<0&&e[t-1]<0||i>0&&e[t-1]>0)&&(r=i*2,n=a+r,r==n-a&&(a=n))}return a}},Array.prototype.slice}));function Nv(e){return e>1?0:e<-1?$:Math.acos(e)}function Pv(e){return e>1?db:e<-1?-db:Math.asin(e)}function Fv(){}function Iv(e,t){e&&Db.hasOwnProperty(e.type)&&Db[e.type](e,t)}function Lv(e,t,n){var r=-1,i=e.length-n,a;for(t.lineStart();++r<i;)a=e[r],t.point(a[0],a[1],a[2]);t.lineEnd()}function Rv(e,t){var n=-1,r=e.length;for(t.polygonStart();++n<r;)Lv(e[n],t,1);t.polygonEnd()}function zv(e,t){e&&Eb.hasOwnProperty(e.type)?Eb[e.type](e,t):Iv(e,t)}function Bv(e){return[vb(e[1],e[0]),Pv(e[2])]}function Vv(e){var t=e[0],n=e[1],r=yb(n);return[r*yb(t),r*Sb(t),Sb(n)]}function Hv(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Uv(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Wv(e,t){e[0]+=t[0],e[1]+=t[1],e[2]+=t[2]}function Gv(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function Kv(e){var t=wb(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=t,e[1]/=t,e[2]/=t}function qv(e,t){function n(n,r){return n=e(n,r),t(n[0],n[1])}return e.invert&&t.invert&&(n.invert=function(n,r){return n=t.invert(n,r),n&&e.invert(n[0],n[1])}),n}function Jv(e,t){return gb(e)>$&&(e-=Math.round(e/pb)*pb),[e,t]}function Yv(e,t,n){return(e%=pb)?t||n?qv(Zv(e),Qv(t,n)):Zv(e):t||n?Qv(t,n):Jv}function Xv(e){return function(t,n){return t+=e,gb(t)>$&&(t-=Math.round(t/pb)*pb),[t,n]}}function Zv(e){var t=Xv(e);return t.invert=Xv(-e),t}function Qv(e,t){var n=yb(e),r=Sb(e),i=yb(t),a=Sb(t);function o(e,t){var o=yb(t),s=yb(e)*o,c=Sb(e)*o,l=Sb(t),u=l*n+s*r;return[vb(c*i-u*a,s*n-l*r),Pv(u*i+c*a)]}return o.invert=function(e,t){var o=yb(t),s=yb(e)*o,c=Sb(e)*o,l=Sb(t),u=l*i-c*a;return[vb(c*i+l*a,s*n+u*r),Pv(u*n-s*r)]},o}function $v(e,t,n,r,i,a){if(n){var o=yb(t),s=Sb(t),c=r*n;i==null?(i=t+r*pb,a=t-c/2):(i=ey(o,i),a=ey(o,a),(r>0?i<a:i>a)&&(i+=r*pb));for(var l,u=i;r>0?u>a:u<a;u-=c)l=Bv([o,-s*yb(u),-s*Sb(u)]),e.point(l[0],l[1])}}function ey(e,t){t=Vv(t),t[0]-=e,Kv(t);var n=Nv(-t[1]);return((-t[2]<0?-n:n)+pb-lb)%pb}function ty(){var e=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){e.push(t=[])},lineEnd:Fv,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}}function ny(e,t){return gb(e[0]-t[0])<lb&&gb(e[1]-t[1])<lb}function ry(e,t,n,r){this.x=e,this.z=t,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function iy(e,t,n,r,i){var a=[],o=[],s,c;if(e.forEach(function(e){if(!((t=e.length-1)<=0)){var t,n=e[0],r=e[t],c;if(ny(n,r)){if(!n[2]&&!r[2]){for(i.lineStart(),s=0;s<t;++s)i.point((n=e[s])[0],n[1]);i.lineEnd();return}r[0]+=2*lb}a.push(c=new ry(n,e,null,!0)),o.push(c.o=new ry(n,null,c,!1)),a.push(c=new ry(r,e,null,!1)),o.push(c.o=new ry(r,null,c,!0))}}),a.length){for(o.sort(t),ay(a),ay(o),s=0,c=o.length;s<c;++s)o[s].e=n=!n;for(var l=a[0],u,d;;){for(var f=l,p=!0;f.v;)if((f=f.n)===l)return;u=f.z,i.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(s=0,c=u.length;s<c;++s)i.point((d=u[s])[0],d[1]);else r(f.x,f.n.x,1,i);f=f.n}else{if(p)for(u=f.p.z,s=u.length-1;s>=0;--s)i.point((d=u[s])[0],d[1]);else r(f.x,f.p.x,-1,i);f=f.p}f=f.o,u=f.z,p=!p}while(!f.v);i.lineEnd()}}}function ay(e){if(t=e.length){for(var t,n=0,r=e[0],i;++n<t;)r.n=i=e[n],i.p=r,r=i;r.n=i=e[0],i.p=r}}function oy(e){return gb(e[0])<=$?e[0]:Cb(e[0])*((gb(e[0])+$)%pb-$)}function sy(e,t){var n=oy(t),r=t[1],i=Sb(r),a=[Sb(n),-yb(n),0],o=0,s=0,c=new jv;i===1?r=db+lb:i===-1&&(r=-db-lb);for(var l=0,u=e.length;l<u;++l)if(f=(d=e[l]).length)for(var d,f,p=d[f-1],m=oy(p),h=p[1]/2+fb,g=Sb(h),_=yb(h),v=0;v<f;++v,m=b,g=S,_=C,p=y){var y=d[v],b=oy(y),x=y[1]/2+fb,S=Sb(x),C=yb(x),w=b-m,T=w>=0?1:-1,E=T*w,D=E>$,O=g*S;if(c.add(vb(O*T*Sb(E),_*C+O*yb(E))),o+=D?w+T*pb:w,D^m>=n^b>=n){var k=Uv(Vv(p),Vv(y));Kv(k);var A=Uv(a,k);Kv(A);var j=(D^w>=0?-1:1)*Pv(A[2]);(r>j||r===j&&(k[0]||k[1]))&&(s+=D^w>=0?1:-1)}}return(o<-lb||o<lb&&c<-ub)^s&1}function cy(e,t,n,r){return function(i){var a=t(i),o=ty(),s=t(o),c=!1,l,u,d,f={point:p,lineStart:h,lineEnd:g,polygonStart:function(){f.point=_,f.lineStart=v,f.lineEnd=y,u=[],l=[]},polygonEnd:function(){f.point=p,f.lineStart=h,f.lineEnd=g,u=kv(u);var e=sy(l,r);u.length?(c||=(i.polygonStart(),!0),iy(u,uy,e,n,i)):e&&(c||=(i.polygonStart(),!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),c&&=(i.polygonEnd(),!1),u=l=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function p(t,n){e(t,n)&&i.point(t,n)}function m(e,t){a.point(e,t)}function h(){f.point=m,a.lineStart()}function g(){f.point=p,a.lineEnd()}function _(e,t){d.push([e,t]),s.point(e,t)}function v(){s.lineStart(),d=[]}function y(){_(d[0][0],d[0][1]),s.lineEnd();var e=s.clean(),t=o.result(),n,r=t.length,a,f,p;if(d.pop(),l.push(d),d=null,r){if(e&1){if(f=t[0],(a=f.length-1)>0){for(c||=(i.polygonStart(),!0),i.lineStart(),n=0;n<a;++n)i.point((p=f[n])[0],p[1]);i.lineEnd()}return}r>1&&e&2&&t.push(t.pop().concat(t.shift())),u.push(t.filter(ly))}}return f}}function ly(e){return e.length>1}function uy(e,t){return((e=e.x)[0]<0?e[1]-db-lb:db-e[1])-((t=t.x)[0]<0?t[1]-db-lb:db-t[1])}function dy(e){var t=NaN,n=NaN,r=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(a,o){var s=a>0?$:-$,c=gb(a-t);gb(c-$)<lb?(e.point(t,n=(n+o)/2>0?db:-db),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(s,n),e.point(a,n),i=0):r!==s&&c>=$&&(gb(t-r)<lb&&(t-=r*lb),gb(a-s)<lb&&(a-=s*lb),n=fy(t,n,a,o),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(s,n),i=0),e.point(t=a,n=o),r=s},lineEnd:function(){e.lineEnd(),t=n=NaN},clean:function(){return 2-i}}}function fy(e,t,n,r){var i,a,o=Sb(e-n);return gb(o)>lb?_b((Sb(t)*(a=yb(r))*Sb(n)-Sb(r)*(i=yb(t))*Sb(e))/(i*a*o)):(t+r)/2}function py(e,t,n,r){var i;if(e==null)i=n*db,r.point(-$,i),r.point(0,i),r.point($,i),r.point($,0),r.point($,-i),r.point(0,-i),r.point(-$,-i),r.point(-$,0),r.point(-$,i);else if(gb(e[0]-t[0])>lb){var a=e[0]<t[0]?$:-$;i=n*a/2,r.point(-a,i),r.point(0,i),r.point(a,i)}else r.point(t[0],t[1])}function my(e){var t=yb(e),n=2*hb,r=t>0,i=gb(t)>lb;function a(t,r,i,a){$v(a,e,n,i,t,r)}function o(e,n){return yb(e)*yb(n)>t}function s(e){var t,n,a,s,u;return{lineStart:function(){s=a=!1,u=1},point:function(d,f){var p=[d,f],m,h=o(d,f),g=r?h?0:l(d,f):h?l(d+(d<0?$:-$),f):0;if(!t&&(s=a=h)&&e.lineStart(),h!==a&&(m=c(t,p),(!m||ny(t,m)||ny(p,m))&&(p[2]=1)),h!==a)u=0,h?(e.lineStart(),m=c(p,t),e.point(m[0],m[1])):(m=c(t,p),e.point(m[0],m[1],2),e.lineEnd()),t=m;else if(i&&t&&r^h){var _;!(g&n)&&(_=c(p,t,!0))&&(u=0,r?(e.lineStart(),e.point(_[0][0],_[0][1]),e.point(_[1][0],_[1][1]),e.lineEnd()):(e.point(_[1][0],_[1][1]),e.lineEnd(),e.lineStart(),e.point(_[0][0],_[0][1],3)))}h&&(!t||!ny(t,p))&&e.point(p[0],p[1]),t=p,a=h,n=g},lineEnd:function(){a&&e.lineEnd(),t=null},clean:function(){return u|(s&&a)<<1}}}function c(e,n,r){var i=Vv(e),a=Vv(n),o=[1,0,0],s=Uv(i,a),c=Hv(s,s),l=s[0],u=c-l*l;if(!u)return!r&&e;var d=t*c/u,f=-t*l/u,p=Uv(o,s),m=Gv(o,d);Wv(m,Gv(s,f));var h=p,g=Hv(m,h),_=Hv(h,h),v=g*g-_*(Hv(m,m)-1);if(!(v<0)){var y=wb(v),b=Gv(h,(-g-y)/_);if(Wv(b,m),b=Bv(b),!r)return b;var x=e[0],S=n[0],C=e[1],w=n[1],T;S<x&&(T=x,x=S,S=T);var E=S-x,D=gb(E-$)<lb,O=D||E<lb;if(!D&&w<C&&(T=C,C=w,w=T),O?D?C+w>0^b[1]<(gb(b[0]-x)<lb?C:w):C<=b[1]&&b[1]<=w:E>$^(x<=b[0]&&b[0]<=S)){var k=Gv(h,(-g+y)/_);return Wv(k,m),[b,Bv(k)]}}}function l(t,n){var i=r?e:$-e,a=0;return t<-i?a|=1:t>i&&(a|=2),n<-i?a|=4:n>i&&(a|=8),a}return cy(o,s,a,r?[0,-e]:[-$,e-$])}function hy(e,t,n,r,i,a){var o=e[0],s=e[1],c=t[0],l=t[1],u=0,d=1,f=c-o,p=l-s,m;if(m=n-o,!(!f&&m>0)){if(m/=f,f<0){if(m<u)return;m<d&&(d=m)}else if(f>0){if(m>d)return;m>u&&(u=m)}if(m=i-o,!(!f&&m<0)){if(m/=f,f<0){if(m>d)return;m>u&&(u=m)}else if(f>0){if(m<u)return;m<d&&(d=m)}if(m=r-s,!(!p&&m>0)){if(m/=p,p<0){if(m<u)return;m<d&&(d=m)}else if(p>0){if(m>d)return;m>u&&(u=m)}if(m=a-s,!(!p&&m<0)){if(m/=p,p<0){if(m>d)return;m>u&&(u=m)}else if(p>0){if(m<u)return;m<d&&(d=m)}return u>0&&(e[0]=o+u*f,e[1]=s+u*p),d<1&&(t[0]=o+d*f,t[1]=s+d*p),!0}}}}}function gy(e,t,n,r){function i(i,a){return e<=i&&i<=n&&t<=a&&a<=r}function a(i,a,s,l){var u=0,d=0;if(i==null||(u=o(i,s))!==(d=o(a,s))||c(i,a)<0^s>0)do l.point(u===0||u===3?e:n,u>1?r:t);while((u=(u+s+4)%4)!==d);else l.point(a[0],a[1])}function o(r,i){return gb(r[0]-e)<lb?i>0?0:3:gb(r[0]-n)<lb?i>0?2:1:gb(r[1]-t)<lb?+(i>0):i>0?3:2}function s(e,t){return c(e.x,t.x)}function c(e,t){var n=o(e,1),r=o(t,1);return n===r?n===0?t[1]-e[1]:n===1?e[0]-t[0]:n===2?e[1]-t[1]:t[0]-e[0]:n-r}return function(o){var c=o,l=ty(),u,d,f,p,m,h,g,_,v,y,b,x={point:S,lineStart:E,lineEnd:D,polygonStart:w,polygonEnd:T};function S(e,t){i(e,t)&&c.point(e,t)}function C(){for(var t=0,n=0,i=d.length;n<i;++n)for(var a=d[n],o=1,s=a.length,c=a[0],l,u,f=c[0],p=c[1];o<s;++o)l=f,u=p,c=a[o],f=c[0],p=c[1],u<=r?p>r&&(f-l)*(r-u)>(p-u)*(e-l)&&++t:p<=r&&(f-l)*(r-u)<(p-u)*(e-l)&&--t;return t}function w(){c=l,u=[],d=[],b=!0}function T(){var e=C(),t=b&&e,n=(u=kv(u)).length;(t||n)&&(o.polygonStart(),t&&(o.lineStart(),a(null,null,1,o),o.lineEnd()),n&&iy(u,s,e,a,o),o.polygonEnd()),c=o,u=d=f=null}function E(){x.point=O,d&&d.push(f=[]),y=!0,v=!1,g=_=NaN}function D(){u&&(O(p,m),h&&v&&l.rejoin(),u.push(l.result())),x.point=S,v&&c.lineEnd()}function O(a,o){var s=i(a,o);if(d&&f.push([a,o]),y)p=a,m=o,h=s,y=!1,s&&(c.lineStart(),c.point(a,o));else if(s&&v)c.point(a,o);else{var l=[g=Math.max(Ab,Math.min(kb,g)),_=Math.max(Ab,Math.min(kb,_))],u=[a=Math.max(Ab,Math.min(kb,a)),o=Math.max(Ab,Math.min(kb,o))];hy(l,u,e,t,n,r)?(v||(c.lineStart(),c.point(l[0],l[1])),c.point(u[0],u[1]),s||c.lineEnd(),b=!1):s&&(c.lineStart(),c.point(a,o),b=!1)}g=a,_=o,v=s}return x}}function _y(){Rb.point=vy}function vy(e,t){Rb.point=yy,Pb=Ib=e,Fb=Lb=t}function yy(e,t){Nb.add(Lb*e-Ib*t),Ib=e,Lb=t}function by(){yy(Pb,Fb)}function xy(e,t){e<zb&&(zb=e),e>Vb&&(Vb=e),t<Bb&&(Bb=t),t>Hb&&(Hb=t)}function Sy(e,t){Wb+=e,Gb+=t,++Kb}function Cy(){rx.point=wy}function wy(e,t){rx.point=Ty,Sy(tx=e,nx=t)}function Ty(e,t){var n=e-tx,r=t-nx,i=wb(n*n+r*r);qb+=i*(tx+e)/2,Jb+=i*(nx+t)/2,Yb+=i,Sy(tx=e,nx=t)}function Ey(){rx.point=Sy}function Dy(){rx.point=ky}function Oy(){Ay($b,ex)}function ky(e,t){rx.point=Ay,Sy($b=tx=e,ex=nx=t)}function Ay(e,t){var n=e-tx,r=t-nx,i=wb(n*n+r*r);qb+=i*(tx+e)/2,Jb+=i*(nx+t)/2,Yb+=i,i=nx*e-tx*t,Xb+=i*(tx+e),Zb+=i*(nx+t),Qb+=i*3,Sy(tx=e,nx=t)}function jy(e){this._context=e}function My(e,t){ux.point=Ny,ox=cx=e,sx=lx=t}function Ny(e,t){cx-=e,lx-=t,ix.add(wb(cx*cx+lx*lx)),cx=e,lx=t}function Py(e){let t=1;this._+=e[0];for(let n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Fy(e){let t=Math.floor(e);if(!(t>=0))throw RangeError(`invalid digits: ${e}`);if(t>15)return Py;if(t!==dx){let e=10**t;dx=t,fx=function(t){let n=1;this._+=t[0];for(let r=t.length;n<r;++n)this._+=Math.round(arguments[n]*e)/e+t[n]}}return fx}function Iy(e,t){let n=3,r=4.5,i,a;function o(e){return e&&(typeof r==`function`&&a.pointRadius(+r.apply(this,arguments)),zv(e,i(a))),a.result()}return o.area=function(e){return zv(e,i(Rb)),Rb.result()},o.measure=function(e){return zv(e,i(ux)),ux.result()},o.bounds=function(e){return zv(e,i(Ub)),Ub.result()},o.centroid=function(e){return zv(e,i(rx)),rx.result()},o.projection=function(t){return arguments.length?(i=t==null?(e=null,jb):(e=t).stream,o):e},o.context=function(e){return arguments.length?(a=e==null?(t=null,new hx(n)):new jy(t=e),typeof r!=`function`&&a.pointRadius(r),o):t},o.pointRadius=function(e){return arguments.length?(r=typeof e==`function`?e:(a.pointRadius(+e),+e),o):r},o.digits=function(e){if(!arguments.length)return n;if(e==null)n=null;else{let t=Math.floor(e);if(!(t>=0))throw RangeError(`invalid digits: ${e}`);n=t}return t===null&&(a=new hx(n)),o},o.projection(e).digits(n).context(t)}function Ly(e){return function(t){var n=new Ry;for(var r in e)n[r]=e[r];return n.stream=t,n}}function Ry(){}function zy(e,t,n){var r=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),r!=null&&e.clipExtent(null),zv(n,e.stream(Ub)),t(Ub.result()),r!=null&&e.clipExtent(r),e}function By(e,t,n){return zy(e,function(n){var r=t[1][0]-t[0][0],i=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,s=+t[0][1]+(i-a*(n[1][1]+n[0][1]))/2;e.scale(150*a).translate([o,s])},n)}function Vy(e,t,n){return By(e,[[0,0],t],n)}function Hy(e,t,n){return zy(e,function(n){var r=+t,i=r/(n[1][0]-n[0][0]),a=(r-i*(n[1][0]+n[0][0]))/2,o=-i*n[0][1];e.scale(150*i).translate([a,o])},n)}function Uy(e,t,n){return zy(e,function(n){var r=+t,i=r/(n[1][1]-n[0][1]),a=-i*n[0][0],o=(r-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([a,o])},n)}function Wy(e,t){return+t?Ky(e,t):Gy(e)}function Gy(e){return Ly({point:function(t,n){t=e(t,n),this.stream.point(t[0],t[1])}})}function Ky(e,t){function n(r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=l-r,v=u-i,y=_*_+v*v;if(y>4*t&&h--){var b=o+f,x=s+p,S=c+m,C=wb(b*b+x*x+S*S),w=Pv(S/=C),T=gb(gb(S)-1)<lb||gb(a-d)<lb?(a+d)/2:vb(x,b),E=e(T,w),D=E[0],O=E[1],k=D-r,A=O-i,j=v*k-_*A;(j*j/y>t||gb((_*k+v*A)/y-.5)>.3||o*f+s*p+c*m<_x)&&(n(r,i,a,o,s,c,D,O,T,b/=C,x/=C,S,h,g),g.point(D,O),n(D,O,T,b,x,S,l,u,d,f,p,m,h,g))}}return function(t){var r,i,a,o,s,c,l,u,d,f,p,m,h={point:g,lineStart:_,lineEnd:y,polygonStart:function(){t.polygonStart(),h.lineStart=b},polygonEnd:function(){t.polygonEnd(),h.lineStart=_}};function g(n,r){n=e(n,r),t.point(n[0],n[1])}function _(){u=NaN,h.point=v,t.lineStart()}function v(r,i){var a=Vv([r,i]),o=e(r,i);n(u,d,l,f,p,m,u=o[0],d=o[1],l=r,f=a[0],p=a[1],m=a[2],gx,t),t.point(u,d)}function y(){h.point=g,t.lineEnd()}function b(){_(),h.point=x,h.lineEnd=S}function x(e,t){v(r=e,t),i=u,a=d,o=f,s=p,c=m,h.point=v}function S(){n(u,d,l,f,p,m,i,a,r,o,s,c,gx,t),h.lineEnd=y,y()}return h}}function qy(e){return Ly({point:function(t,n){var r=e(t,n);return this.stream.point(r[0],r[1])}})}function Jy(e,t,n,r,i){function a(a,o){return a*=r,o*=i,[t+e*a,n-e*o]}return a.invert=function(a,o){return[(a-t)/e*r,(n-o)/e*i]},a}function Yy(e,t,n,r,i,a){if(!a)return Jy(e,t,n,r,i);var o=yb(a),s=Sb(a),c=o*e,l=s*e,u=o/e,d=s/e,f=(s*n-o*t)/e,p=(s*t+o*n)/e;function m(e,a){return e*=r,a*=i,[c*e-l*a+t,n-l*e-c*a]}return m.invert=function(e,t){return[r*(u*e-d*t+f),i*(p-d*e-u*t)]},m}function Xy(e){return Zy(function(){return e})()}function Zy(e){var t,n=150,r=480,i=250,a=0,o=0,s=0,c=0,l=0,u,d=0,f=1,p=1,m=null,h=Ob,g=null,_,v,y,b=jb,x=.5,S,C,w,T,E;function D(e){return w(e[0]*hb,e[1]*hb)}function O(e){return e=w.invert(e[0],e[1]),e&&[e[0]*mb,e[1]*mb]}D.stream=function(e){return T&&E===e?T:T=vx(qy(u)(h(S(b(E=e)))))},D.preclip=function(e){return arguments.length?(h=e,m=void 0,A()):h},D.postclip=function(e){return arguments.length?(b=e,g=_=v=y=null,A()):b},D.clipAngle=function(e){return arguments.length?(h=+e?my(m=e*hb):(m=null,Ob),A()):m*mb},D.clipExtent=function(e){return arguments.length?(b=e==null?(g=_=v=y=null,jb):gy(g=+e[0][0],_=+e[0][1],v=+e[1][0],y=+e[1][1]),A()):g==null?null:[[g,_],[v,y]]},D.scale=function(e){return arguments.length?(n=+e,k()):n},D.translate=function(e){return arguments.length?(r=+e[0],i=+e[1],k()):[r,i]},D.center=function(e){return arguments.length?(a=e[0]%360*hb,o=e[1]%360*hb,k()):[a*mb,o*mb]},D.rotate=function(e){return arguments.length?(s=e[0]%360*hb,c=e[1]%360*hb,l=e.length>2?e[2]%360*hb:0,k()):[s*mb,c*mb,l*mb]},D.angle=function(e){return arguments.length?(d=e%360*hb,k()):d*mb},D.reflectX=function(e){return arguments.length?(f=e?-1:1,k()):f<0},D.reflectY=function(e){return arguments.length?(p=e?-1:1,k()):p<0},D.precision=function(e){return arguments.length?(S=Wy(C,x=e*e),A()):wb(x)},D.fitExtent=function(e,t){return By(D,e,t)},D.fitSize=function(e,t){return Vy(D,e,t)},D.fitWidth=function(e,t){return Hy(D,e,t)},D.fitHeight=function(e,t){return Uy(D,e,t)};function k(){var e=Yy(n,0,0,f,p,d).apply(null,t(a,o)),m=Yy(n,r-e[0],i-e[1],f,p,d);return u=Yv(s,c,l),C=qv(t,m),w=qv(u,C),S=Wy(C,x),A()}function A(){return T=E=null,D}return function(){return t=e.apply(this,arguments),D.invert=t.invert&&O,k()}}function Qy(e){return function(t,n){var r=yb(t),i=yb(n),a=e(r*i);return a===1/0?[2,0]:[a*i*Sb(t),a*Sb(n)]}}function $y(e){return function(t,n){var r=wb(t*t+n*n),i=e(r),a=Sb(i),o=yb(i);return[vb(t*a,r*o),Pv(r&&n*a/r)]}}function eb(e,t){return[e,xb(Tb((db+t)/2))]}function tb(e,t){return[e,t]}function nb(){return Xy(tb).scale(152.63)}function rb(e,t){var n=Pv(Tx*Sb(t)),r=n*n,i=r*r*r;return[e*yb(n)/(Tx*(xx+3*Sx*r+i*(7*Cx+9*wx*r))),n*(xx+Sx*r+i*(Cx+wx*r))]}function ib(e,t){var n=yb(t),r=yb(e)*n;return[n*Sb(e)/r,Sb(t)/r]}function ab(e,t){var n=t*t,r=n*n;return[e*(.8707-.131979*n+r*(-.013791+r*(.003971*n-.001529*r))),t*(1.007226+n*(.015085+r*(-.044475+.028874*n-.005916*r)))]}function ob(e,t){return[yb(t)*Sb(e),Sb(t)]}function sb(e,t){var n=yb(t),r=1+yb(e)*n;return[n*Sb(e)/r,Sb(t)/r]}function cb(e,t){return[xb(Tb((db+t)/2)),-e]}var lb,ub,$,db,fb,pb,mb,hb,gb,_b,vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb,Ub,Wb,Gb,Kb,qb,Jb,Yb,Xb,Zb,Qb,$b,ex,tx,nx,rx,ix,ax,ox,sx,cx,lx,ux,dx,fx,px,mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx=t((()=>{Mv(),lb=1e-6,ub=1e-12,$=Math.PI,db=$/2,fb=$/4,pb=$*2,mb=180/$,hb=$/180,gb=Math.abs,_b=Math.atan,vb=Math.atan2,yb=Math.cos,bb=Math.exp,xb=Math.log,Sb=Math.sin,Cb=Math.sign||function(e){return e>0?1:e<0?-1:0},wb=Math.sqrt,Tb=Math.tan,Eb={Feature:function(e,t){Iv(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)Iv(n[r].geometry,t)}},Db={Sphere:function(e,t){t.sphere()},Point:function(e,t){e=e.coordinates,t.point(e[0],e[1],e[2])},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)e=n[r],t.point(e[0],e[1],e[2])},LineString:function(e,t){Lv(e.coordinates,t,0)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Lv(n[r],t,0)},Polygon:function(e,t){Rv(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Rv(n[r],t)},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)Iv(n[r],t)}},new jv,new jv,Jv.invert=Jv,Ob=cy(function(){return!0},dy,py,[-$,-db]),kb=1e9,Ab=-kb,jb=e=>e,Mb=new jv,Nb=new jv,Rb={point:Fv,lineStart:Fv,lineEnd:Fv,polygonStart:function(){Rb.lineStart=_y,Rb.lineEnd=by},polygonEnd:function(){Rb.lineStart=Rb.lineEnd=Rb.point=Fv,Mb.add(gb(Nb)),Nb=new jv},result:function(){var e=Mb/2;return Mb=new jv,e}},zb=1/0,Bb=zb,Vb=-zb,Hb=Vb,Ub={point:xy,lineStart:Fv,lineEnd:Fv,polygonStart:Fv,polygonEnd:Fv,result:function(){var e=[[zb,Bb],[Vb,Hb]];return Vb=Hb=-(Bb=zb=1/0),e}},Wb=0,Gb=0,Kb=0,qb=0,Jb=0,Yb=0,Xb=0,Zb=0,Qb=0,rx={point:Sy,lineStart:Cy,lineEnd:Ey,polygonStart:function(){rx.lineStart=Dy,rx.lineEnd=Oy},polygonEnd:function(){rx.point=Sy,rx.lineStart=Cy,rx.lineEnd=Ey},result:function(){var e=Qb?[Xb/Qb,Zb/Qb]:Yb?[qb/Yb,Jb/Yb]:Kb?[Wb/Kb,Gb/Kb]:[NaN,NaN];return Wb=Gb=Kb=qb=Jb=Yb=Xb=Zb=Qb=0,e}},jy.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,t){switch(this._point){case 0:this._context.moveTo(e,t),this._point=1;break;case 1:this._context.lineTo(e,t);break;default:this._context.moveTo(e+this._radius,t),this._context.arc(e,t,this._radius,0,pb);break}},result:Fv},ix=new jv,ux={point:Fv,lineStart:function(){ux.point=My},lineEnd:function(){ax&&Ny(ox,sx),ux.point=Fv},polygonStart:function(){ax=!0},polygonEnd:function(){ax=null},result:function(){var e=+ix;return ix=new jv,e}},hx=class{constructor(e){this._append=e==null?Py:Fy(e),this._radius=4.5,this._=``}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+=`Z`),this._point=NaN}point(e,t){switch(this._point){case 0:this._append`M${e},${t}`,this._point=1;break;case 1:this._append`L${e},${t}`;break;default:if(this._append`M${e},${t}`,this._radius!==px||this._append!==fx){let e=this._radius,t=this._;this._=``,this._append`m0,${e}a${e},${e} 0 1,1 0,${-2*e}a${e},${e} 0 1,1 0,${2*e}z`,px=e,fx=this._append,mx=this._,this._=t}this._+=mx;break}}result(){let e=this._;return this._=``,e.length?e:null}},Ry.prototype={constructor:Ry,point:function(e,t){this.stream.point(e,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},gx=16,_x=yb(30*hb),vx=Ly({point:function(e,t){this.stream.point(e*hb,t*hb)}}),yx=Qy(function(e){return wb(2/(1+e))}),yx.invert=$y(function(e){return 2*Pv(e/2)}),bx=Qy(function(e){return(e=Nv(e))&&e/Sb(e)}),bx.invert=$y(function(e){return e}),eb.invert=function(e,t){return[e,2*_b(bb(t))-db]},tb.invert=tb,xx=1.340264,Sx=-.081106,Cx=893e-6,wx=.003796,Tx=wb(3)/2,Ex=12,rb.invert=function(e,t){for(var n=t,r=n*n,i=r*r*r,a=0,o,s,c;a<Ex&&(s=n*(xx+Sx*r+i*(Cx+wx*r))-t,c=xx+3*Sx*r+i*(7*Cx+9*wx*r),n-=o=s/c,r=n*n,i=r*r*r,!(gb(o)<ub));++a);return[Tx*e*(xx+3*Sx*r+i*(7*Cx+9*wx*r))/yb(n),Pv(Sb(n)/Tx)]},ib.invert=$y(_b),ab.invert=function(e,t){var n=t,r=25,i;do{var a=n*n,o=a*a;n-=i=(n*(1.007226+a*(.015085+o*(-.044475+.028874*a-.005916*o)))-t)/(1.007226+a*(.015085*3+o*(-.044475*7+.028874*9*a-.005916*11*o)))}while(gb(i)>lb&&--r>0);return[e/(.8707+(a=n*n)*(-.131979+a*(-.013791+a*a*a*(.003971-.001529*a)))),n]},ob.invert=$y(Pv),sb.invert=$y(function(e){return 2*_b(e)}),cb.invert=function(e,t){return[-t,2*_b(bb(e))-db]}}));function Ox(e){if(!e||!e.startsWith(`var(`))return e;let t=Vx.exec(e);if(!t)return e;let n=(t[2]||``).trim();return n.startsWith(`var(`)?Ox(n):n||e}function kx(e){return typeof e!=`string`||!e.startsWith(`var(`)?e:Ox(e)}function Ax(e){if(!e||e.trim()===``)return{r:0,g:0,b:0,a:0};let t=e.trim(),n=t.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);if(n)return{r:Math.max(0,Math.min(255,parseFloat(n[1])))/255,g:Math.max(0,Math.min(255,parseFloat(n[2])))/255,b:Math.max(0,Math.min(255,parseFloat(n[3])))/255,a:n[4]===void 0?1:Math.max(0,Math.min(1,parseFloat(n[4])))};let r=t.replace(/^#/,``);return r.length===8?{r:parseInt(r.slice(0,2),16)/255,g:parseInt(r.slice(2,4),16)/255,b:parseInt(r.slice(4,6),16)/255,a:parseInt(r.slice(6,8),16)/255}:r.length===6?{r:parseInt(r.slice(0,2),16)/255,g:parseInt(r.slice(2,4),16)/255,b:parseInt(r.slice(4,6),16)/255,a:1}:r.length===4?{r:parseInt(r[0]+r[0],16)/255,g:parseInt(r[1]+r[1],16)/255,b:parseInt(r[2]+r[2],16)/255,a:parseInt(r[3]+r[3],16)/255}:r.length===3?{r:parseInt(r[0]+r[0],16)/255,g:parseInt(r[1]+r[1],16)/255,b:parseInt(r[2]+r[2],16)/255,a:1}:{r:0,g:0,b:0,a:1}}function jx(e,t,n,r,i){return n===t?r:r+(e-t)/(n-t)*(i-r)}function Mx(e){return e===0?0:jx(Math.max(0,Math.min(1,e)),0,1,0,.9)}function Nx(e){return jx(Math.max(.1,Math.min(1,e)),.1,1,24,8)}function Px(e){return jx(Math.max(0,Math.min(1,e)),0,1,.2,1)}function Fx(e){return jx(Math.max(0,Math.min(1,e)),.1,1,.1,.5)}function Ix(e){return jx(Math.max(0,Math.min(100,e)),0,100,.1,2.5)}function Lx(e){return jx(Math.max(.1,Math.min(1,e)),.1,1,10,1)}function Rx(e,t){if(e.length<2||t>=1)return e;let n=Math.max(1,Math.floor(Lx(t))),r=[];r.push(e[0]);for(let t=n;t<e.length-1;t+=n){let n=Math.min(t,e.length-1);r.push(e[n])}let i=e[e.length-1],a=e[0];return Math.abs(i[0]-a[0])<1e-4&&Math.abs(i[1]-a[1])<1e-4||r.push(i),r.length>=2?r:e}function zx(e,t){let n=Math.PI/180*e,r=Math.PI/180*t;return{x:Math.cos(n)*Math.sin(r),y:Math.sin(n),z:Math.cos(n)*Math.cos(r)}}function Bx({preview:e=!1,speed:t=.1,smoothing:n=1,density:r=.8,dotSize:a=.4,scale:o=.9,stopOnHover:c=!0,markerConfig:d={markers:[],color:`#ffffff`,size:.4},rotationDirection:f=`clockwise`,initialLatitude:m=42,initialLongitude:h=-15,oceanColor:g=`#000000`,outlineColor:_=`#ffffff`,dotColor:v=`#ffffff`,graticuleColor:y=`#616161`,outlineWidth:b=1,gridWidth:x=1,dragSpeed:S=.5,detail:C=1,style:w}){let T=i(null),[E,D]=l(!0),[O,k]=l(null),A=se.current()===se.canvas,j=Mx(t),M=f===`anticlockwise`?-j:j,N=Nx(r),ee=Fx(a),te=Ix(d.size),ne=Px(o);s(()=>{if(!T.current)return;let t=T.current,r=t.clientWidth||t.offsetWidth||800,i=t.clientHeight||t.offsetHeight||600,a=new nm,o=new qp(50,r/i,.1,1e3),s=1*ne,l=2.5/ne;o.position.set(0,0,l),o.lookAt(0,0,0);let f=new xv({antialias:!0,alpha:!0});f.setSize(r,i),f.setPixelRatio(Math.min(u.devicePixelRatio,2)),f.outputColorSpace=`srgb`;let p=f.domElement;p.style.position=`absolute`,p.style.inset=`0`,p.style.width=`100%`,p.style.height=`100%`,p.style.display=`block`,A||(p.style.opacity=`0`,p.style.visibility=`hidden`),t.appendChild(p);let w=kx(g),E=kx(_),O=kx(v),j=kx(d.color),re=kx(y),ie=Ax(w),ae=Ax(E),oe=Ax(O);Ax(j);let se=Ax(re),ce=new Lp(new Rm(s,64,64),new up({color:w?new X(w):new X(0,0,0),transparent:ie.a<1||ie.a===0,opacity:ie.a}));if(a.add(ce),_&&ae.a>0){let e=[];for(let t=0;t<=128;t++){let n=t/128*Math.PI*2,r=Math.cos(n)*s,i=Math.sin(n)*s;e.push(r,i,0)}let t=[];for(let n=0;n<e.length;n+=3)t.push(new Y(e[n],e[n+1],e[n+2]));if(t.length>=2){t.push(t[0].clone());let e=new up({color:new X(E),transparent:ae.a<1,opacity:ae.a}),n=new Om(t),r=b/10*.01;new Lp(new zm(n,t.length*2,r,8,!1),e)}}let P=new $p,le=new $p;if(re&&se.a>0){let e=new up({color:re?new X(re):new X(1,1,1),transparent:se.a<1||se.a===0,opacity:se.a});for(let t=-90;t<=90;t+=15){let n=[];for(let e=0;e<=64;e++){let r=e/64*360-180,i=zx(t,r);n.push(i.x*s,i.y*s,i.z*s)}if(n&&n.length>=6){let t=[];for(let e=0;e<n.length;e+=3)t.push(new Y(n[e],n[e+1],n[e+2]));if(t.length>=2){let n=new Om(t),r=x/10*.01,i=new Lp(new zm(n,t.length*2,r,8,!1),e);i.renderOrder=0,le.add(i)}}}for(let t=-180;t<180;t+=15){let n=[];for(let e=0;e<=64;e++){let r=zx(e/64*180-90,t);n.push(r.x*s,r.y*s,r.z*s)}if(n&&n.length>=6){let t=[];for(let e=0;e<n.length;e+=3)t.push(new Y(n[e],n[e+1],n[e+2]));if(t.length>=2){let n=new Om(t),r=x/10*.01,i=new Lp(new zm(n,t.length*2,r,8,!1),e);i.renderOrder=0,le.add(i)}}}}let F=null,ue=[],de=async()=>{try{D(!0);let e=await fetch(`https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json`);if(!e.ok)throw Error(`Failed to load land data`);let t=await e.json();for(;P.children.length>0;)P.remove(P.children[0]);if(_&&ae.a>0){let e=new up({color:new X(E),transparent:ae.a<1,opacity:ae.a,depthTest:!0,depthWrite:!0}),n=nb(),r=Iy().projection(n),i=0,c=0;t.features.forEach(t=>{let n=t.properties?.featurecla||t.properties?.type||``,a=t.properties?.name||``;if(n.toLowerCase().includes(`graticule`)||n.toLowerCase().includes(`grid`)||n.toLowerCase().includes(`line`)||a.toLowerCase().includes(`graticule`)||a.toLowerCase().includes(`grid`)||a.toLowerCase().includes(`line`)){c++;return}i++;let o=r(t);if(!o)return;let l=o.match(/[ML][^MLZ]*/g)||[];if(l.length===0)return;l.forEach(e=>{let t=e.slice(1).trim().split(/\s+/);for(let e=0;e<t.length;e+=2)e+1<t.length&&(parseFloat(t[e]),parseFloat(t[e+1]))});let u=t.geometry;if(!u||!u.coordinates)return;let d=t=>{if(t.length<2)return;let n=Rx(t,C),r=[];if(n.forEach(e=>{let[t,n]=e,i=zx(n,t);r.push(i.x*s,i.y*s,i.z*s)}),r&&r.length>=6){let t=[];for(let e=0;e<r.length;e+=3)t.push(new Y(r[e],r[e+1],r[e+2]));if(t.length>0&&t[0].distanceTo(t[t.length-1])>.001&&t.push(t[0].clone()),t.length>=2){let n=new Om(t),r=b/10*.01,i=new Lp(new zm(n,t.length*2,r,8,!1),e);i.renderOrder=0,P.add(i)}}};u.type===`Polygon`&&u.coordinates.length>0?d(u.coordinates[0]):u.type===`MultiPolygon`&&u.coordinates.forEach(e=>{e.length>0&&d(e[0])})}),console.log(`[Globe] Processed ${i} land features, skipped ${c} grid features`),A&&f.render(a,o)}let n=2048,r=1024,i=document.createElement(`canvas`);i.width=n,i.height=r;let c=i.getContext(`2d`,{willReadFrequently:!0});if(!c)throw Error(`Canvas not supported`);let l=nb().fitSize([n,r],{type:`Sphere`}),u=Iy().projection(l).context(c);c.fillStyle=`#000`,c.fillRect(0,0,n,r),c.fillStyle=`#fff`,c.beginPath(),t.features.forEach(e=>{u(e)}),c.fill();let d=c.getImageData(0,0,n,r).data,m=(e,t)=>{let i=Math.round((e+180)/360*n)%n,a=Math.round((90-t)/180*r),o=(Math.max(0,Math.min(r-1,a))*n+i)*4;return d[o]>128},h=[],g=N*.08;for(let e=-90;e<=90;e+=g){let t=Math.abs(e)*Math.PI/180,n=Math.cos(t),r=n>.01?g/Math.max(.3,n):360;for(let t=-180;t<180;t+=r)m(t,e)&&h.push([t,e])}if(h.length>0){F=new fm(new Rm(.01*ee,4,4),new up({color:O?new X(O):new X(.6,.6,.6),transparent:oe.a<1||oe.a===0,opacity:oe.a}),h.length);let e=new gf;for(let t=0;t<h.length;t++){let[n,r]=h[t],i=zx(r,n);e.makeScale(1,1,1),e.setPosition(i.x*s,i.y*s,i.z*s),F.setMatrixAt(t,e)}F.instanceMatrix.needsUpdate=!0,ye.add(F),A&&f.render(a,o)}fe(),f.render(a,o),A||(p.style.opacity=`1`,p.style.visibility=`visible`),D(!1)}catch{k(`Failed to load land map data`),D(!1)}},fe=()=>{if(ue.forEach(e=>ye.remove(e)),ue=[],d.markers&&d.markers.length>0){let e=new Rm(.01*te,16,16),t=new up({color:j?new X(j):new X(1,1,1)});d.markers.forEach(n=>{if(!n||typeof n.lat!=`number`||typeof n.lng!=`number`)return;let r=zx(n.lat,n.lng),i=new Lp(e,t.clone());i.position.set(r.x*s,r.y*s,r.z*s),ye.add(i),ue.push(i)})}},I=h*Math.PI/180,pe=m*Math.PI/180,L={x:I,y:pe},me={x:I,y:pe},R={x:0,y:0},z=!1,B=!1,V=0,he=0,ge=null,_e=n===0?1:jx(n,0,1,.4,.03),ve=jx(n,0,1,.7,.96),ye=new $p;ye.rotation.y=I,ye.rotation.x=pe,a.add(ye),ye.add(ce),y&&se.a>0&&ye.add(le),ye.add(P),F&&ye.add(F),ue.forEach(e=>ye.add(e));let be=()=>{if(A&&!e){ge=null;return}let t=!1,r=.01;!z&&M!==0&&(!c||!B)&&(me.x+=M*.01),!z&&n>0&&(Math.abs(R.x)>r||Math.abs(R.y)>r?(me.x+=R.x,me.y+=R.y,me.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,me.y)),R.x*=ve,R.y*=ve):(R.x=0,R.y=0));let i=me.x-L.x,s=me.y-L.y;(Math.abs(i)>r||Math.abs(s)>r||M!==0||z)&&(L.x+=i*_e,L.y+=s*_e,L.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,L.y)),t=!0),(t||M!==0||z)&&(ye.rotation.y=L.x,ye.rotation.x=L.y,f.render(a,o));let l=Math.abs(R.x)>r||Math.abs(R.y)>r;ge=z||M!==0||l||Math.abs(i)>r||Math.abs(s)>r?requestAnimationFrame(be):null},xe=()=>{ge===null&&!(A&&!e)&&(ge=requestAnimationFrame(be))};M!==0&&xe();let Se=e=>{z=!0,R.x=0,R.y=0,V=e.clientX,he=e.clientY,xe();let t=e=>{let t=jx(S,0,1,.001,.02),n=e.clientX-V,r=e.clientY-he;me.x+=n*t,me.y+=r*t,me.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,me.y)),R.x=n*t*.3,R.y=r*t*.3,V=e.clientX,he=e.clientY},n=()=>{document.removeEventListener(`mousemove`,t),document.removeEventListener(`mouseup`,n),z=!1};document.addEventListener(`mousemove`,t),document.addEventListener(`mouseup`,n)};p.addEventListener(`mousedown`,Se);let Ce=new vh,we=new q,Te=e=>{if(!c)return;let t=p.getBoundingClientRect();we.x=(e.clientX-t.left)/t.width*2-1,we.y=-((e.clientY-t.top)/t.height)*2+1,Ce.setFromCamera(we,o),B=Ce.intersectObject(ce).length>0};p.addEventListener(`mousemove`,Te);let Ee=new ResizeObserver(()=>{let e=t.clientWidth||t.offsetWidth||800,n=t.clientHeight||t.offsetHeight||600;o.aspect=e/n,o.updateProjectionMatrix(),f.setSize(e,n);let r=2.5/ne;o.position.set(0,0,r),o.lookAt(0,0,0),f.render(a,o)});return Ee.observe(t),de(),()=>{ge!==null&&cancelAnimationFrame(ge),p.removeEventListener(`mousedown`,Se),p.removeEventListener(`mousemove`,Te),Ee.disconnect(),f.dispose(),t.removeChild(p)}},[e,t,n,r,a,o,c,d,f,m,h,g,_,v,y,b,x,S,C,M,N,ee,te,ne,A]);let re={...w,position:`relative`,width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`};return O?p(`div`,{style:re,children:p(il,{style:{position:`relative`,width:`100%`,height:`100%`,minWidth:0,minHeight:0},title:`Error loading Earth visualization`,subtitle:O})}):p(`div`,{ref:T,style:re})}var Vx,Hx=t((()=>{a(),v(),r(),M(),ol(),Sv(),Dx(),Vx=/var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*))?\s*\)/,ce(Bx,{preview:{type:I.Boolean,title:`Preview`,defaultValue:!1,enabledTitle:`On`,disabledTitle:`Off`},rotationDirection:{type:I.Enum,title:`Rotation`,options:[`anticlockwise`,`clockwise`],optionIcons:[`direction-left`,`direction-right`],optionTitles:[`Anticlockwise`,`Clockwise`],defaultValue:`clockwise`,displaySegmentedControl:!0},speed:{type:I.Number,title:`Speed`,min:0,max:1,step:.1,defaultValue:.1},smoothing:{type:I.Number,title:`Smoothing`,min:0,max:1,step:.1,defaultValue:1},dragSpeed:{type:I.Number,title:`Drag Speed`,min:0,max:1,step:.1,defaultValue:.5},scale:{type:I.Number,title:`Scale`,min:0,max:1,step:.1,defaultValue:.9},stopOnHover:{type:I.Boolean,title:`On Hover`,defaultValue:!0,enabledTitle:`Stop`,disabledTitle:`Rotate`},initialLatitude:{type:I.Number,title:`Latitude`,min:-90,max:90,step:1,defaultValue:42},initialLongitude:{type:I.Number,title:`Longitude`,min:-180,max:180,step:1,defaultValue:-15},density:{type:I.Number,title:`Density`,min:.1,max:1,step:.1,defaultValue:.8},detail:{type:I.Number,title:`Detail`,min:.1,max:1,step:.1,defaultValue:.5},dotSize:{type:I.Number,title:`Dot Size`,min:.1,max:1,step:.1,defaultValue:.4},markerConfig:{type:I.Object,title:`Markers`,controls:{markers:{type:I.Array,title:`Markers`,defaultValue:[{lat:41,lng:13}],control:{type:I.Object,controls:{lat:{type:I.Number,title:`Lat`,min:-90,max:90,step:.1,defaultValue:25.2},lng:{type:I.Number,title:`Lng`,min:-180,max:180,step:.1,defaultValue:55.5}}}},color:{type:I.Color,title:`Color`,defaultValue:`#00f7ff`},size:{type:I.Number,title:`Size`,min:0,max:100,step:.1,defaultValue:40}}},dotColor:{type:I.Color,title:`Dots`,defaultValue:`#ffffff`},outlineColor:{type:I.Color,title:`Outline`,optional:!0,defaultValue:`#ffffff`},outlineWidth:{type:I.Number,title:`Width`,min:.5,max:10,step:.5,defaultValue:1,hidden:e=>!e.outlineColor},graticuleColor:{type:I.Color,title:`Grid`,optional:!0,defaultValue:`#616161`},gridWidth:{type:I.Number,title:`Width`,min:.5,max:10,step:.5,defaultValue:1,hidden:e=>!e.graticuleColor},oceanColor:{type:I.Color,title:`Ocean`,optional:!0,defaultValue:`#000000`,description:`More components at [Framer University](https://frameruni.link/cc).`}}),Bx.displayName=`3D Globe`}));function Ux(e,t){return{description:`3D Globe Component for Framer. Created by Framer University.`,favicon:(location.origin+"/assets/images/image-56e4b04b.png"),robots:`max-image-preview:large`,title:`3D Globe Component by Framer University`}}var Wx=t((()=>{}));function Gx(e,t){return{breakpoints:[{hash:`72rtr7`,mediaQuery:`(min-width: 1200px)`},{hash:`1i6nyat`,mediaQuery:`(min-width: 810px) and (max-width: 1199.98px)`},{hash:`15hurun`,mediaQuery:`(max-width: 809.98px)`}],description:Ux(e,t).description,elements:{},robots:`max-image-preview:large`,serializationId:`framer-N2FRu`,title:Ux(e,t).title||`Home`,viewport:`width=device-width`}}var Kx,qx,Jx=t((()=>{Wx(),Kx=1,qx={exports:{metadataVersion:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})),Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS,oS,sS,cS,lS=t((()=>{v(),M(),T(),r(),qc(),Hx(),Jx(),Yx=D(Bx),Xx=ue(S.div),Zx={KDWX91tIU:`(max-width: 809.98px)`,rxJ8_y4tS:`(min-width: 810px) and (max-width: 1199.98px)`,WQLkyLRf1:`(min-width: 1200px)`},Qx=[],$x=`framer-N2FRu`,eS={KDWX91tIU:`framer-v-15hurun`,rxJ8_y4tS:`framer-v-1i6nyat`,WQLkyLRf1:`framer-v-72rtr7`},tS=(e,t,n)=>e&&t?`position`:n,nS={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{bounce:0,delay:1.1,duration:1,type:`spring`},x:0,y:0},rS={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:20},iS={Desktop:`WQLkyLRf1`,Phone:`KDWX91tIU`,Tablet:`rxJ8_y4tS`},aS=({value:e})=>fe()?null:p(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),oS=({height:e,id:t,width:n,...r})=>({...r,variant:iS[r.variant]??r.variant??`WQLkyLRf1`}),sS=E(m(function(e,t){let r=i(null),a=t??r,o=b(),{activeLocale:s,setLocale:c}=A();ee();let{style:l,className:u,layoutId:d,variant:f,...m}=oS(e);ne(n(()=>Gx({},s),[s]));let[h,v]=j(f,Zx,!1),y=R($x),x=g(re)?.isLayoutTemplate,T=!!g(C)?.transition?.layout,E=tS(x,T);return O({}),p(re.Provider,{value:{activeVariantId:h,humanReadableVariantMap:iS,primaryVariantId:`WQLkyLRf1`,variantClassNames:eS},children:_(w,{id:d??o,children:[p(aS,{value:`html body { background: rgb(5, 5, 5); }`}),p(S.div,{...m,className:R(y,`framer-72rtr7`,u),ref:a,style:{...l},children:p(S.div,{className:`framer-jx0221`,"data-framer-name":`Main`,layout:E,children:_(`div`,{className:`framer-1vrimt5`,"data-framer-name":`Content`,children:[_(`div`,{className:`framer-3jxds3`,"data-framer-name":`Heading`,children:[p(`div`,{className:`framer-1pcvpix`}),p(`div`,{className:`framer-1getars`,"data-framer-name":`Buttons`})]}),p(Xx,{animate:nS,className:`framer-z1vig5`,"data-framer-appear-id":`z1vig5`,"data-framer-name":`Globe`,initial:rS,optimized:!0,children:p(pe,{children:p(F,{className:`framer-ps7sia-container`,isModuleExternal:!0,nodeId:`pSmHM0yc9`,scopeId:`augiA20Il`,children:p(Bx,{density:.8,detail:.5,dotColor:`rgb(255, 255, 255)`,dotSize:.4,dragSpeed:.5,graticuleColor:`rgb(97, 97, 97)`,gridWidth:1,height:`100%`,id:`pSmHM0yc9`,initialLatitude:42,initialLongitude:-15,layoutId:`pSmHM0yc9`,markerConfig:{color:`rgb(0, 247, 255)`,markers:[{lat:41,lng:13}],size:40},oceanColor:`rgba(0, 0, 0, 0.8)`,outlineColor:`rgb(255, 255, 255)`,outlineWidth:1,preview:!1,rotationDirection:`clockwise`,scale:1,smoothing:1,speed:.3,stopOnHover:!1,style:{height:`100%`,width:`100%`},width:`100%`})})})})]})})}),p(`div`,{id:`overlay`})]})})}),[`.framer-N2FRu.framer-lux5qc, .framer-N2FRu .framer-lux5qc { display: block; }`,`.framer-N2FRu.framer-72rtr7 { align-content: center; align-items: center; background-color: #050505; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,`.framer-N2FRu .framer-jx0221 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-N2FRu .framer-1vrimt5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1100px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 0; }`,`.framer-N2FRu .framer-3jxds3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,`.framer-N2FRu .framer-1pcvpix { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; min-height: 54px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-N2FRu .framer-1getars { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; min-height: 30px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-N2FRu .framer-z1vig5 { flex: 2 0 0px; height: 620px; overflow: visible; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,`.framer-N2FRu .framer-ps7sia-container { bottom: -688px; flex: none; left: -125px; position: absolute; right: -745px; top: -58px; z-index: 1; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-N2FRu.framer-72rtr7 { width: 810px; } .framer-N2FRu .framer-1vrimt5 { max-width: 800px; } .framer-N2FRu .framer-1pcvpix { min-height: 48px; } .framer-N2FRu .framer-z1vig5 { flex: 1.5 0 0px; } .framer-N2FRu .framer-ps7sia-container { bottom: -592px; left: -82px; right: -810px; top: -135px; }}`,`@media (max-width: 809.98px) { .framer-N2FRu.framer-72rtr7 { width: 390px; } .framer-N2FRu .framer-1vrimt5 { flex-direction: column; } .framer-N2FRu .framer-3jxds3 { flex: none; width: 100%; } .framer-N2FRu .framer-1pcvpix { min-height: 345px; } .framer-N2FRu .framer-1getars { min-height: 106px; } .framer-N2FRu .framer-z1vig5 { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.96878) 41%, rgba(0,0,0,1) 83%) add; flex: none; height: 425px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.96878) 41%, rgba(0,0,0,1) 83%) add; width: 100%; } .framer-N2FRu .framer-ps7sia-container { bottom: -462px; left: -281px; right: -283px; top: -27px; }}`],`framer-N2FRu`),sS.displayName=`Home`,sS.defaultProps={height:800,width:1200},P(sS,[{explicitInter:!0,fonts:[]},...Yx],{supportsExplicitInterCodegen:!0}),sS.loader={load:(e,t)=>(t.locale,Promise.allSettled([me(Kc,{},t)]))},cS={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FrameraugiA20Il`,slots:[],annotations:{framerColorSyntax:`true`,framerDisplayContentsDiv:`false`,framerScrollSections:`false`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rxJ8_y4tS":{"layout":["fixed","auto"]},"KDWX91tIU":{"layout":["fixed","auto"]}}}`,framerComponentViewportWidth:`true`,framerLayoutTemplateFlowEffect:`true`,framerIntrinsicHeight:`800`,framerContractVersion:`1`,framerAcceptsLayoutTemplate:`true`,framerIntrinsicWidth:`1200`,framerResponsiveScreen:`true`,framerAutoSizeImages:`true`,framerImmutableVariables:`true`}},__FramerMetadata__:{type:`variable`}}}}));async function uS(e,t,n){let r=fS[e],i=r?await r(t,n):void 0,a={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]};for(let t of dS){if(t.pageIds&&!t.pageIds.has(e))continue;let n=t.code(i);n&&a[t.placement].push({...t,code:n})}return a}var dS,fS,pS,mS,hS=t((()=>{dS=[],fS={},pS={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]},mS={exports:{snippetsSorting:{type:`variable`,annotations:{framerContractVersion:`1`}},getSnippets:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})),gS,_S,vS,yS=t((()=>{v(),r(),M(),gS=()=>(s(()=>{let e=document.querySelector(`meta[name="robots"]`);e?e.setAttribute(`content`,`noindex`):(e=document.createElement(`meta`),e.setAttribute(`name`,`robots`),e.setAttribute(`content`,`noindex`),document.head.appendChild(e))},[]),p(`div`,{className:`__framer-not-found-page`,style:{display:`flex`,height:`100vh`,alignItems:`center`,justifyContent:`center`,backgroundColor:`var(--color-primary)`,background:`var(--color-background)`,fontSize:`var(--font-size-body)`,boxSizing:`border-box`,fontFeatureSettings:`"liga", "clig"`,fontVariantLigatures:`common-ligatures`,textRendering:`optimizeLegibility`},children:_(`main`,{style:{boxSizing:`border-box`,fontFamily:`"Inter", sans-serif`,fontWeight:500,maxWidth:`240px`,width:`100%`,display:`flex`,alignItems:`center`,flexDirection:`column`,padding:`0 20px`,textWrap:`balance`},children:[p(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`21`,style:{verticalAlign:`middle`,color:`var(--color-primary)`,marginBottom:`20px`},children:p(`path`,{d:`M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,fill:`currentColor`})}),p(`h1`,{style:{margin:`0 0 10px 0`,fontSize:`var(--font-size-title)`,color:`var(--color-primary)`,textAlign:`center`},children:`Page Not Found`}),p(`div`,{style:{color:`var(--color-secondary)`,marginBottom:`20px`,lineHeight:`1.5em`,textAlign:`center`},children:`The page you are looking for does not exist or may have been moved.`}),p(`a`,{href:`/`,role:`button`,style:{backgroundColor:`var(--color-tint)`,color:`#ffffff`,paddingLeft:`8px`,paddingRight:`8px`,borderRadius:`8px`,lineHeight:`30px`,height:`30px`,textDecoration:`none`,verticalAlign:`baseline`},children:`Back to Home`})]})})),_S=E(gS,[`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-f291989f.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-847e9200.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-a1e9f8dc.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-a26ba202.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-e46bce5a.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-a4c529c3.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-7cc62c78.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-bb40238c.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-b77601bb.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-7a9f05ce.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-e5fdf852.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-a0fede2c.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-2d82cf02.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,`@font-face {
      font-family: Inter;
      src: url(/assets/fonts/font-c01559ea.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,`@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,`.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,`@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`]),vS={exports:{default:{type:`reactComponent`,name:`component`,slots:[],annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})),bS=e({__FramerMetadata__:()=>vS,default:()=>_S}),xS=t((()=>{yS(),yS()}));function SS(){let e=!1;try{e=u.self!==u.top}catch{e=!0}if(!e)return!1;let t=null,n=!1;if(u.location.ancestorOrigins&&u.location.ancestorOrigins.length>0){let e=u.location.ancestorOrigins[0];try{t=new URL(e).host}catch{}}else if(document.referrer)try{t=new URL(document.referrer).host}catch{}return t&&(n=t===TS||t.endsWith(`.${TS}`)),n}function CS(e){return m((t,n)=>{let r=x(ES,DS,OS),i=se.current()===se.canvas;return r&&!i?null:p(e,{...t,ref:n,onClick:e=>{e.preventDefault(),u.open(`https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(u?.location?.origin)}`)},style:{...t.style,pointerEvents:`auto`},title:`Create a free website with Framer, the website builder loved by startups, designers and agencies.`,className:t.className+` __framer-badge`})})}function wS(e){return m((t,n)=>_(y,{children:[p(`p`,{style:{position:`absolute`,transform:`scale(0.001)`},children:`Create a free website with Framer, the website builder loved by startups, designers and agencies.`}),p(e,{...t,ref:n})]}))}var TS,ES,DS,OS,kS=t((()=>{a(),v(),r(),M(),TS=`framer.com`,ES=()=>()=>{},DS=()=>SS(),OS=()=>!1})),AS,jS,MS,NS,PS,FS,IS,LS,RS=t((()=>{v(),M(),r(),AS=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`,jS=`alpha, var(--framer-icon-mask-mode, add)`,MS=`no-repeat`,NS=`center`,PS=`auto`,FS=m((e,t)=>{let{animated:n,layoutId:r,children:i,...a}=e;return n?p(S.div,{...a,layoutId:r,ref:t}):p(`div`,{...a,ref:t})}),IS=({fill:e,fill2:t,height:n,id:r,width:i,...a})=>({...a,vtL2DrqsL:t??a.vtL2DrqsL??`rgb(0, 0, 0)`,Z1QnXqTEb:e??a.Z1QnXqTEb??`rgb(0, 0, 0)`}),LS=E(m(function(e,t){let{style:n,className:r,layoutId:i,variant:a,Z1QnXqTEb:o,vtL2DrqsL:s,...c}=IS(e);return p(FS,{...c,className:R(`framer-g7oZR`,r),layoutId:i,ref:t,style:{"--1bd4d3i":o,...n}})}),[`.framer-g7oZR { -webkit-mask-image: ${AS}; -webkit-mask-position: ${NS}; -webkit-mask-repeat: ${MS}; -webkit-mask-size: ${PS}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${AS}; mask-mode: ${jS}; mask-position: ${NS}; mask-repeat: ${MS}; mask-size: ${PS}; width: 97px; }`],`framer-g7oZR`),LS.displayName=`Text`,ce(LS,{Z1QnXqTEb:{defaultValue:`rgb(0, 0, 0)`,hidden:!1,title:`Fill`,type:I.Color},vtL2DrqsL:{defaultValue:`rgb(0, 0, 0)`,hidden:!0,title:`Fill 2`,type:I.Color}})})),zS,BS,VS,HS,US,WS,GS,KS,qS=t((()=>{v(),M(),r(),zS=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`,BS=`alpha, var(--framer-icon-mask-mode, add)`,VS=`no-repeat`,HS=`center`,US=`auto`,WS=m((e,t)=>{let{animated:n,layoutId:r,children:i,...a}=e;return n?p(S.div,{...a,layoutId:r,ref:t}):p(`div`,{...a,ref:t})}),GS=({fill:e,fill2:t,height:n,id:r,width:i,...a})=>({...a,vtL2DrqsL:t??a.vtL2DrqsL??`rgb(0, 0, 0)`,Z1QnXqTEb:e??a.Z1QnXqTEb??`rgb(0, 0, 0)`}),KS=E(m(function(e,t){let{style:n,className:r,layoutId:i,variant:a,Z1QnXqTEb:o,vtL2DrqsL:s,...c}=GS(e);return p(WS,{...c,className:R(`framer-hcsc7`,r),layoutId:i,ref:t,style:{"--1bd4d3i":o,...n}})}),[`.framer-hcsc7 { -webkit-mask-image: ${zS}; -webkit-mask-position: ${HS}; -webkit-mask-repeat: ${VS}; -webkit-mask-size: ${US}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${zS}; mask-mode: ${BS}; mask-position: ${HS}; mask-repeat: ${VS}; mask-size: ${US}; width: 12px; }`],`framer-hcsc7`),KS.displayName=`Framer`,ce(KS,{Z1QnXqTEb:{defaultValue:`rgb(0, 0, 0)`,hidden:!1,title:`Fill`,type:I.Color},vtL2DrqsL:{defaultValue:`rgb(0, 0, 0)`,hidden:!0,title:`Fill 2`,type:I.Color}})})),JS=e({__FramerMetadata__:()=>dC,default:()=>uC}),YS,XS,ZS,QS,$S,eC,tC,nC,rC,iC,aC,oC,sC,cC,lC,uC,dC,fC=t((()=>{v(),M(),T(),r(),kS(),RS(),qS(),YS=D(KS),XS=D(LS),ZS=oe(LS,{nodeId:`pBR1Ew0r8`,override:wS,scopeId:`PX9hIOIVM`}),QS=ue(L(oe(S.a,{nodeId:`HK2sXlagE`,override:CS,scopeId:`PX9hIOIVM`}))),$S=`framer-6jWyo`,eC={HK2sXlagE:`framer-v-n0ccwk`},tC={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{damping:40,delay:1,mass:1.5,stiffness:350,type:`spring`},x:0,y:0},nC={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:10},rC={duration:0,type:`tween`},iC=(e,t)=>`translate(-50%, -50%) ${t}`,aC=(e,t)=>`translateX(-50%) ${t}`,oC=({value:e,children:t})=>{let r=g(C),i=e??r.transition,a=n(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:t})},sC=S.create(c),cC=({height:e,id:t,width:n,...r})=>({...r}),lC=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),uC=E(m(function(e,t){let n=i(null),r=t??n,a=b(),{activeLocale:o,setLocale:s}=A();ee();let{style:c,className:l,layoutId:u,variant:d,...f}=cC(e),{baseVariant:m,classNames:h,clearLoadingGesture:g,gestureHandlers:v,gestureVariant:y,isLoading:x,setGestureState:C,setVariant:T,variants:E}=N({defaultVariant:`HK2sXlagE`,ref:r,variant:d,variantClassNames:eC}),D=lC(e,E),O=R($S);return p(w,{id:u??a,children:p(sC,{animate:E,initial:!1,children:p(oC,{value:rC,children:p(ae,{href:`https://www.framer.com`,motionChild:!0,nodeId:`HK2sXlagE`,openInNewTab:!1,relValues:[],scopeId:`PX9hIOIVM`,children:_(QS,{...f,...v,__framer__presenceAnimate:tC,__framer__presenceInitial:nC,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,className:`${R(O,`framer-n0ccwk`,l,h)} framer-bmpgw8`,"data-framer-appear-id":`n0ccwk`,"data-framer-name":`Light`,"data-nosnippet":!0,layoutDependency:D,layoutId:`HK2sXlagE`,optimized:!0,ref:r,style:{...c},children:[p(S.div,{className:`framer-13yxzio`,"data-framer-name":`Backdrop`,layoutDependency:D,layoutId:`IH1cvP0s5`,style:{backgroundColor:`rgb(255, 255, 255)`,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,boxShadow:`0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`}}),_(S.div,{className:`framer-19yaanm`,"data-framer-name":`Content`,layoutDependency:D,layoutId:`U6HIU1IEW`,transformTemplate:iC,children:[p(S.div,{className:`framer-1kflzx5`,layoutDependency:D,layoutId:`roMJYXHnO`,children:p(KS,{animated:!0,className:`framer-e50co`,"data-framer-name":`Logo`,layoutDependency:D,layoutId:`O3s3GcxMZ`,style:{"--1bd4d3i":`rgb(0, 0, 0)`,"--otdjsv":`rgb(0, 0, 0)`},transformTemplate:aC})}),p(ZS,{animated:!0,className:`framer-1um7t9d`,"data-framer-name":`Text`,layoutDependency:D,layoutId:`pBR1Ew0r8`,style:{"--1bd4d3i":`rgb(0, 0, 0)`,"--otdjsv":`rgb(0, 0, 0)`}})]}),p(S.div,{className:`framer-j4ugry`,"data-framer-name":`Bottom`,layoutDependency:D,layoutId:`vCwsHyUh8`,style:{borderBottomLeftRadius:11,borderBottomRightRadius:11,borderTopLeftRadius:11,borderTopRightRadius:11,boxShadow:`inset 0px 0px 0px 1px rgb(0, 0, 0)`,mask:`linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,opacity:.06,WebkitMask:`linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`}}),p(S.div,{className:`framer-jnuwbw`,"data-framer-name":`Border`,layoutDependency:D,layoutId:`ZirFGX8Eh`,style:{borderBottomLeftRadius:11,borderBottomRightRadius:11,borderTopLeftRadius:11,borderTopRightRadius:11,boxShadow:`inset 0px 0px 0px 1px rgb(0, 0, 0)`,opacity:.04}})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,`.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,`.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,`.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,`.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,`.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,`.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,`.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`],`framer-6jWyo`),uC.displayName=`Badge`,uC.defaultProps={height:38,width:140},P(uC,[{explicitInter:!0,fonts:[]},...YS,...XS],{supportsExplicitInterCodegen:!0}),dC={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerPX9hIOIVM`,slots:[],annotations:{framerAutoSizeImages:`true`,framerContractVersion:`1`,framerComponentViewportWidth:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerIntrinsicWidth:`140`,framerIntrinsicHeight:`38`,framerColorSyntax:`true`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`}},__FramerMetadata__:{type:`variable`}}}}));export{vo as _,mS as a,pS as c,lS as d,Qx as f,Kx as g,Gx as h,xS as i,sS as l,Jx as m,fC as n,uS as o,qx as p,bS as r,hS as s,JS as t,cS as u,yo as v};
//# sourceMappingURL=shared-lib.WJ8lgrNM.mjs.map