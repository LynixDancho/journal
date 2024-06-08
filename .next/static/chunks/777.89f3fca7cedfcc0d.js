"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{501:function(e,t,n){n.r(t);var l=n(7437),r=n(3705),i=n(2214),s=n(2375),a=n(9930),c=n(3922),u=n(2265),o=n(7017);t.default=e=>{let{onChange:t,content:n}=e,[d,h]=(0,u.useState)(!1),[x,y]=(0,u.useState)(null),k=e=>{t(e)},f=(0,r.jE)({extensions:[i.Z,a.ZP.configure({openOnClick:!1,autolink:!0}),c.ZP.configure({allowBase64:!0}),s.Z],editorProps:{attributes:{class:"flex flex-col line-clamp-3 px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md  rounded-br-md outline-none"}},onUpdate:e=>{let{editor:t}=e;k(t.getHTML())}});return(0,l.jsxs)("div",{className:"w-full ml-1 px-0",children:[(0,l.jsx)(o.Z,{editor:f,content:n}),(0,l.jsx)(r.kg,{style:{whiteSpace:"pre-line"},editor:f})]})}},7017:function(e,t,n){var l=n(7437),r=n(2265),i=n(8604),s=n(9322),a=n(1216),c=n(5637),u=n(2352),o=n(7180),d=n(5574),h=n(703),x=n(7746),y=n(9348),k=n(3751);t.Z=e=>{let{editor:t,content:n}=e,f=(0,r.useCallback)(e=>{e.preventDefault();let n=t.getAttributes("link").href,l=window.prompt("URL",n);if(null===l||""===l.trim()){t.chain().focus().extendMarkRange("link").unsetLink().run();return}l.match(/^https?:\/\//i)||(l="http://"+l),t.chain().focus().extendMarkRange("link").setLink({href:l}).run()},[t]);return t?(0,l.jsx)("div",{className:"px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700",children:(0,l.jsxs)("div",{className:"flex justify-start items-center gap-4 w-full lg:w-10/12 flex-wrap",children:[(0,l.jsx)("div",{className:"text-sky-400 mt-1",children:(0,l.jsx)("button",{onClick:e=>{e.preventDefault();let n=window.prompt("URL");n&&t.chain().focus().setImage({src:n}).run()},children:(0,l.jsx)(i.Z,{className:"w-5 h-5"})})}),(0,l.jsx)("button",{onClick:e=>f(e),className:t.isActive("link")?"is-active":"",children:(0,l.jsx)("p",{className:"text-sky-400",children:"Link"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().unsetLink().run()},disabled:!t.isActive("link"),className:"text-sky-400",children:"Unlink"}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleBold().run()},className:t.isActive("bold")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(s.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleItalic().run()},className:t.isActive("italic")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(a.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleUnderline().run()},className:t.isActive("underline")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(c.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleStrike().run()},className:t.isActive("strike")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(u.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleHeading({level:1}).run()},className:t.isActive("heading",{level:1})?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(o.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleBulletList().run()},className:t.isActive("bulletList")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(d.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().toggleOrderedList().run()},className:t.isActive("orderedList")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(h.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().setCode().run()},className:t.isActive("code")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400",children:(0,l.jsx)(x.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().undo().run()},className:t.isActive("undo")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg",children:(0,l.jsx)(y.Z,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:e=>{e.preventDefault(),t.chain().focus().redo().run()},className:t.isActive("redo")?"bg-sky-700 text-white p-2 rounded-lg":"text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg",children:(0,l.jsx)(k.Z,{className:"w-5 h-5"})})]})}):null}},8030:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(2265);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,l.forwardRef)((e,t)=>{let{color:n="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:u="",children:o,iconNode:d,...h}=e;return(0,l.createElement)("svg",{ref:t,...s,width:r,height:r,stroke:n,strokeWidth:c?24*Number(a)/Number(r):a,className:i("lucide",u),...h},[...d.map(e=>{let[t,n]=e;return(0,l.createElement)(t,n)}),...Array.isArray(o)?o:[o]])}),c=(e,t)=>{let n=(0,l.forwardRef)((n,s)=>{let{className:c,...u}=n;return(0,l.createElement)(a,{ref:s,iconNode:t,className:i("lucide-".concat(r(e)),c),...u})});return n.displayName="".concat(e),n}},9322:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]])},7746:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},7180:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]])},8604:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},1216:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]])},703:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]])},5574:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]])},3751:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]])},2352:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]])},5637:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]])},9348:function(e,t,n){n.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(8030).Z)("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]])}}]);