(()=>{"use strict";var e,t={5256:()=>{const e=window.wp.i18n,t=window.wp.blocks,n=window.React,o=window.wp.blockEditor,r=window.wp.components,l=window.wp.primitives,a=({children:e,conditions:t})=>{if(t)return e},s=e=>{switch(e){case"top":case"left":return"flex-start";case"center":return"center";case"right":case"bottom":return"flex-end";case"space-between":return"space-between";case"stretch":return"stretch"}},c=({value:t,onChange:o,allowSpaceBetween:s=!1})=>(0,n.createElement)(r.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Horizontal alignment","carbon-blocks"),value:t,onChange:o},(0,n.createElement)(r.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(l.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),label:(0,e.__)("Left","carbon-blocks"),value:"left"}),(0,n.createElement)(r.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(l.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),label:(0,e.__)("Center","carbon-blocks"),value:"center"}),(0,n.createElement)(r.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(l.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Right","carbon-blocks"),value:"right"}),(0,n.createElement)(a,{conditions:s},(0,n.createElement)(r.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(l.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Space between","carbon-blocks"),value:"space-between"}))),i=({value:e,onChange:t,allowSpaceBetween:l=!1})=>{const a=["left","center","right",...l?["space-between"]:[]];return(0,n.createElement)(r.ToolbarGroup,{group:"blocks"},(0,n.createElement)(o.JustifyContentControl,{value:e,allowedControls:a,onChange:t}))};function h(e){return e&&e.replace(/[^0-9]/g,"")}(0,t.registerBlockType)("carbon-blocks/counters",{icon:e=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},...e},(0,n.createElement)("g",{transform:"scale(.048)"},(0,n.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,n.createElement)("clipPath",{id:"Counter_svg__a"},(0,n.createElement)("path",{d:"M0 0h500v500H0z"})),(0,n.createElement)("g",{clipPath:"url(#Counter_svg__a)"},(0,n.createElement)("path",{d:"M13 16V8l-3 3",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.01px"},transform:"matrix(25.2292 0 0 25.2292 -164.904 -54.135)"}),(0,n.createElement)("path",{d:"M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:1,strokeLinecap:"butt",strokeLinejoin:"miter"},transform:"matrix(23.74998 0 0 26.38884 -34.393 -66.667)"}),(0,n.createElement)("path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.2px"},transform:"translate(-80.07 -268.737)scale(24.2942)"}),(0,n.createElement)("path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5 0 1.097-.903 2-2 2M17 17.5c2 1.5 4 .3 4-1.5 0-1.097-.903-2-2-2",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:".99px"},transform:"matrix(24.9733 0 0 24.9733 -94.332 70.52)"}),(0,n.createElement)("path",{d:"M114.237.6v22.8",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.4px",strokeLinejoin:"miter",strokeMiterlimit:30,strokeDasharray:"1.4,2.8,0,0,0,0"},transform:"translate(-2125)scale(20.8333)"})))),title:(0,e.__)("Counters","carbon-blocks"),description:(0,e.__)("Display key information by incorporating an icon, a significant number, and descriptive text to highlight statistics, achievements, or any other essential elements.","carbon-blocks"),example:{viewportWidth:560,innerBlocks:[{name:"carbon-blocks/counter",attributes:{number:"35",text:"houses built",textColor:"black",numberColor:"black",style:{spacing:{blockGap:"10px"}}},innerBlocks:[{name:"carbon-blocks/icons",attributes:{icon:{svg:"<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'/></svg>"},size:35}}]},{name:"carbon-blocks/counter",attributes:{number:"27",text:(0,e.__)("partners","carbon-blocks"),textColor:"black",numberColor:"black",style:{spacing:{blockGap:"10px"}}},innerBlocks:[{name:"carbon-blocks/icons",attributes:{icon:{svg:"<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M18 18.72a9.094 9.094 0 0 0 3.741-.479a3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72a8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Z'/></svg>"},size:35}}]},{name:"carbon-blocks/counter",attributes:{number:"10",text:(0,e.__)("years of experience","carbon-blocks"),textColor:"black",numberColor:"black",style:{spacing:{blockGap:"10px"}}},innerBlocks:[{name:"carbon-blocks/icons",attributes:{icon:{svg:"<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'/></svg>"},size:35}}]}],viewportWidth:1200},edit:function(t){const{attributes:l,setAttributes:a}=t,{justification:m,style:p}=l,u=h(p.spacing.blockGap),b=(0,o.useBlockProps)({style:{gap:`${u}px`,justifyContent:s(m)}}),{children:v,...w}=(0,o.useInnerBlocksProps)(b,{allowedBlocks:["carbon-blocks/counter"],template:[["carbon-blocks/counter"]],orientation:"horizontal"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(r.PanelBody,{title:(0,e.__)("Settings","carbon")},(0,n.createElement)(c,{value:m,onChange:e=>a({justification:e}),allowSpaceBetween:!0}))),(0,n.createElement)("dl",{...w},v),(0,n.createElement)(o.BlockControls,null,(0,n.createElement)(r.ToolbarGroup,{group:"blocks"},(0,n.createElement)(i,{value:m,allowSpaceBetween:!0,onChange:e=>a({justification:e})}))))},save:function(e){const{attributes:t}=e,{justification:r,style:l}=t,a=h(l.spacing.blockGap),c=o.useBlockProps.save({style:{gap:`${a}px`,justifyContent:s(r)}}),{children:i,...m}=o.useInnerBlocksProps.save(c);return(0,n.createElement)("dl",{...m},i)}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(h=0;h<e.length;h++){for(var[n,r,l]=e[h],s=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,l<a&&(a=l));if(s){e.splice(h--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var h=e.length;h>0&&e[h-1][2]>l;h--)e[h]=e[h-1];e[h]=[n,r,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={5196:0,3330:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,s,c]=n,i=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var h=c(o)}for(t&&t(n);i<a.length;i++)l=a[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(h)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[3330],(()=>o(5256)));r=o.O(r)})();