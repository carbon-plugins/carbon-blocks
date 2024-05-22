(()=>{"use strict";var e,t={3344:()=>{const e=window.wp.i18n,t=window.wp.blocks,n=window.React,o=window.wp.blockEditor,a=window.wp.components,l=({children:e,conditions:t})=>{if(t)return e},r=window.wp.primitives,i=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"})),c=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})),s=e=>{switch(e){case"top":case"left":return"flex-start";case"center":return"center";case"right":case"bottom":return"flex-end";case"space-between":return"space-between";case"stretch":return"stretch"}},h=({value:t,onChange:o,allowSpaceBetween:i=!1})=>(0,n.createElement)(a.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Horizontal alignment","carbon-blocks"),value:t,onChange:o},(0,n.createElement)(a.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(r.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),label:(0,e.__)("Left","carbon-blocks"),value:"left"}),(0,n.createElement)(a.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(r.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),label:(0,e.__)("Center","carbon-blocks"),value:"center"}),(0,n.createElement)(a.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(r.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Right","carbon-blocks"),value:"right"}),(0,n.createElement)(l,{conditions:i},(0,n.createElement)(a.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(r.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Space between","carbon-blocks"),value:"space-between"}))),m=({value:t,onChange:o})=>(0,n.createElement)(a.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Direction","carbon-blocks"),value:t,onChange:o},(0,n.createElement)(a.__experimentalToggleGroupControlOptionIcon,{icon:i,label:(0,e.__)("Row","carbon-blocks"),value:"row"}),(0,n.createElement)(a.__experimentalToggleGroupControlOptionIcon,{icon:c,label:(0,e.__)("Column","carbon-blocks"),value:"column"}));function p({value:t,onChange:o,disabledHelp:l=(0,e.__)("This setting is disabled. You must have at least one active property.","carbon-blocks"),label:r="",help:i="",disabled:c=!1}){return(0,n.createElement)(a.__experimentalToggleGroupControl,{onChange:o,className:c?"is-disabled":"",label:r,value:t,help:c?l:i,isBlock:!0,__nextHasNoMarginBottom:!0},(0,n.createElement)(a.__experimentalToggleGroupControlOption,{value:!0,label:(0,e.__)("Yes","carbon-blocks")}),(0,n.createElement)(a.__experimentalToggleGroupControlOption,{value:!1,label:(0,e.__)("No","carbon-blocks")}))}(0,t.registerBlockType)("carbon-blocks/signature",{icon:e=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},...e},(0,n.createElement)("g",{transform:"scale(.04793)"},(0,n.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,n.createElement)("clipPath",{id:"Signature_svg__a"},(0,n.createElement)("path",{d:"M0 0h500v500H0z"})),(0,n.createElement)("g",{clipPath:"url(#Signature_svg__a)"},(0,n.createElement)("path",{d:"M20 19.5v.5c0 1.097-.903 2-2 2H6c-1.097 0-2-.903-2-2V4c0-1.097.903-2 2-2h8.5L18 5.5",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.05px"},transform:"matrix(23.7837 0 0 23.69415 -57.29 -34.135)"}),(0,n.createElement)("path",{d:"M140.746 120.807h5.13",style:{fill:"none",stroke:"#151826",strokeWidth:"1.4px",strokeLinejoin:"miter",strokeMiterlimit:30},transform:"matrix(20.8629 0 0 20.86286 -2837.357 -2128.019)"}),(0,n.createElement)("path",{d:"M18.42 9.61a2.1 2.1 0 0 1 1.485-.615c1.152 0 2.1.948 2.1 2.1a2.1 2.1 0 0 1-.615 1.485L16.95 17 13 18l.99-3.95z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.23px"},transform:"matrix(23.7837 0 0 23.69415 -57.29 -34.135)"})))),title:(0,e.__)("Signature","carbon-blocks-pro"),description:(0,e.__)("Add a personalized signature at the end of your publications.","carbon-blocks-pro"),example:{attributes:{position:(0,e.__)("CEO","carbon-blocks-pro"),name:(0,e.__)("John Smith","carbon-blocks-pro"),style:{color:{text:"black"}}},innerBlocks:[{name:"carbon-blocks/advanced-avatar",attributes:{type:"image",image:{url:"https://picsum.photos/id/447/400/300"}}}]},edit:function(t){const{attributes:r,setAttributes:i}=t,{name:c,position:b,showName:u,showPosition:d,alignment:v,showAvatar:g,direction:w}=r,_=(0,o.useBlockProps)({style:{justifyContent:"row"===w?s(v):"center",alignItems:"column"===w?s(v):"center",flexDirection:w}}),{children:E,...k}=(0,o.useInnerBlocksProps)(_,{allowedBlocks:["carbon-blocks/advanced-avatar"],renderAppender:!1,template:[["carbon-blocks/advanced-avatar",{isChild:!0}]],orientation:"horizontal"}),x=(0,n.useMemo)((()=>1===[g,u,d].filter((e=>!!e)).length),[g,u,d]);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(a.PanelBody,{title:(0,e.__)("Settings","carbon-blocks-pro")},(0,n.createElement)(m,{value:w,onChange:e=>i({direction:e})}),(0,n.createElement)(h,{value:v,onChange:e=>i({alignment:e})}),(0,n.createElement)(p,{label:(0,e.__)("Show avatar","carbon-blocks-pro"),value:g,disabled:x&&g,onChange:e=>i({showAvatar:e})}),(0,n.createElement)(p,{label:(0,e.__)("Show name","carbon-blocks-pro"),value:u,disabled:x&&u,onChange:e=>i({showName:e})}),(0,n.createElement)(p,{label:(0,e.__)("Show position","carbon-blocks-pro"),value:d,disabled:x&&d,onChange:e=>i({showPosition:e})}))),(0,n.createElement)("section",{...k},(0,n.createElement)(l,{conditions:g},E),(0,n.createElement)("section",null,(0,n.createElement)(l,{conditions:u},(0,n.createElement)(o.RichText,{tagName:"cite",value:c,onChange:e=>{i({name:e})},placeholder:(0,e.__)("Name","carbon-blocks-pro"),allowedFormats:["core/bold","core/italic"],style:{textAlign:v}})),(0,n.createElement)(l,{conditions:d},(0,n.createElement)(o.RichText,{tagName:"cite",value:b,onChange:e=>{i({position:e})},placeholder:(0,e.__)("Position","carbon-blocks-pro"),allowedFormats:["core/bold","core/italic"],style:{textAlign:v}})))))},save:function(e){const{attributes:t}=e,{name:a,position:r,showName:i,showPosition:c,alignment:h,showAvatar:m,direction:p}=t,b=o.useBlockProps.save({style:{justifyContent:"row"===p?s(h):"center",alignItems:"column"===p?s(h):"center",flexDirection:p}}),{children:u,...d}=o.useInnerBlocksProps.save(b);return(0,n.createElement)("section",{...d},(0,n.createElement)(l,{conditions:m},u),(0,n.createElement)("section",null,(0,n.createElement)(l,{conditions:i},(0,n.createElement)(o.RichText.Content,{tagName:"cite",value:a||"name",style:{textAlign:h}})),(0,n.createElement)(l,{conditions:c},(0,n.createElement)(o.RichText.Content,{tagName:"cite",value:r||"position",style:{textAlign:h}}))))}})}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,a,l)=>{if(!n){var r=1/0;for(h=0;h<e.length;h++){for(var[n,a,l]=e[h],i=!0,c=0;c<n.length;c++)(!1&l||r>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,l<r&&(r=l));if(i){e.splice(h--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var h=e.length;h>0&&e[h-1][2]>l;h--)e[h]=e[h-1];e[h]=[n,a,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2379:0,6505:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[r,i,c]=n,s=0;if(r.some((t=>0!==e[t]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(c)var h=c(o)}for(t&&t(n);s<r.length;s++)l=r[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(h)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[6505],(()=>o(3344)));a=o.O(a)})();