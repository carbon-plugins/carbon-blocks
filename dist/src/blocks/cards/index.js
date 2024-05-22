(()=>{"use strict";var e,t={7583:()=>{const e=window.wp.i18n,t=window.wp.blocks,n=window.React,r=window.wp.blockEditor,o=window.wp.components;function a({columns:t,setAttributes:r}){return(0,n.createElement)(o.RangeControl,{initialPosition:t,label:(0,e.__)("Max column number","carbon-blocks"),help:(0,e.__)("Select in how many columns you want to divide your content for max width.","carbon-blocks"),min:1,max:5,value:t,onChange:e=>r({columns:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})}function l(e,t){return`calc(100% / ${e} - ${t*(e-1)}px / ${e})`}function c(e){return e&&e.replace(/[^0-9]/g,"")}const i=window.wp.primitives,s=({children:e,conditions:t})=>{if(t)return e},h=e=>{switch(e){case"top":case"left":return"flex-start";case"center":return"center";case"right":case"bottom":return"flex-end";case"space-between":return"space-between";case"stretch":return"stretch"}},p=({value:t,onChange:r,allowSpaceBetween:a=!1})=>(0,n.createElement)(o.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Horizontal alignment","carbon-blocks"),value:t,onChange:r},(0,n.createElement)(o.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(i.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),label:(0,e.__)("Left","carbon-blocks"),value:"left"}),(0,n.createElement)(o.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(i.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),label:(0,e.__)("Center","carbon-blocks"),value:"center"}),(0,n.createElement)(o.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(i.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Right","carbon-blocks"),value:"right"}),(0,n.createElement)(s,{conditions:a},(0,n.createElement)(o.__experimentalToggleGroupControlOptionIcon,{icon:(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,n.createElement)(i.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Space between","carbon-blocks"),value:"space-between"})));(0,t.registerBlockType)("carbon-blocks/cards",{icon:e=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd"},...e},(0,n.createElement)("g",{transform:"translate(-.041 -.075)scale(.048)"},(0,n.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,n.createElement)("clipPath",{id:"Cards_svg__a"},(0,n.createElement)("path",{d:"M0 0h500v500H0z"})),(0,n.createElement)("g",{clipPath:"url(#Cards_svg__a)"},(0,n.createElement)("path",{d:"M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.18px"},transform:"matrix(20.00002 0 0 22.2223 47.5 20.833)"}),(0,n.createElement)("path",{d:"M212.299 152.433h11.025",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.2px",strokeLinecap:"round",strokeMiterlimit:30},transform:"matrix(20.83334 0 0 20.83334 -4252.527 -2829.565)"}),(0,n.createElement)("path",{d:"M110.099 86.423h10.651",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.31px",strokeLinecap:"round",strokeMiterlimit:30},transform:"matrix(17.25714 0 0 20.83334 -1729.63 -1391.156)"}),(0,n.createElement)("path",{d:"M215.939 144.314v2.061a.114.114 0 0 1-.113.114h-4.264a.113.113 0 0 1-.113-.114v-2.061c0-.063.05-.114.113-.114h4.264c.062 0 .113.051.113.114Z",style:{fill:"none",stroke:"#18181b",strokeWidth:".48px",strokeLinecap:"round",strokeMiterlimit:30},transform:"matrix(52.17337 0 0 51.50553 -10861.61 -7261.395)"}),(0,n.createElement)("path",{d:"M5.825 21.027 4 21c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v1.415",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.18px"},transform:"matrix(20 0 0 22.2222 -27.5 -54.759)"})))),title:(0,e.__)("Cards","carbon-blocks"),description:(0,e.__)("Create cards by customizing the title, text, and image to highlight important information.","carbon-blocks"),example:{viewportWidth:1200,innerBlocks:[{name:"carbon-blocks/card",attributes:{showSeeMore:!1},innerBlocks:[{name:"carbon-blocks/advanced-image",attributes:{id:0,url:"https://picsum.photos/id/317/400/300",alt:"",description:"",height:"100%",width:"100%"}},{name:"core/heading",attributes:{textAlign:"center",content:(0,e.__)("Escape to paradise","carbon-blocks"),level:3}},{name:"core/paragraph",attributes:{align:"center",content:(0,e.__)("Discover our dream vacation rentals in exotic destinations. From the beach to the mountains, find the perfect getaway for unforgettable holidays.","carbon-blocks")}}]},{name:"carbon-blocks/card",attributes:{showSeeMore:!1},innerBlocks:[{name:"carbon-blocks/advanced-image",attributes:{id:0,url:"https://picsum.photos/id/320/400/300",alt:"",description:"",height:"100%",width:"100%"}},{name:"core/heading",attributes:{textAlign:"center",content:(0,e.__)("Journey to the Heart of the City","carbon-blocks"),level:3}},{name:"core/paragraph",attributes:{align:"center",content:(0,e.__)("Experience the vibrant pulse of major cities around the world. From historic neighborhoods to trendy districts, immerse yourself in a captivating urban experience.","carbon-blocks")}}]}]},styles:[{name:"default",label:(0,e.__)("Default","carbon-blocks"),isDefault:!0},{name:"modern",label:(0,e.__)("Modern","carbon-blocks"),attributes:{color:"var(--carbon-button-primary)"}}],edit:function(t){const{attributes:i,setAttributes:s}=t,{style:m,columns:u,justification:d}=i,b=c(m.spacing.blockGap),g=(0,r.useBlockProps)({style:{gap:`${b}px`,justifyContent:h(d),"--card-size-md":u<=2?l(u,b):`calc(50% - (${b}px / 2))`,"--card-size-lg":u<=3?l(u,b):`calc(33.33% - (${b}px / 3))`,"--card-size-xl":l(u,b)}}),{children:v,...w}=(0,r.useInnerBlocksProps)(g,{allowedBlocks:["carbon-blocks/card"],template:[["carbon-blocks/card"]],orientation:"horizontal"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(o.PanelBody,{title:(0,e.__)("Settings","carbon-blocks"),initialOpen:!0},(0,n.createElement)(p,{value:d,onChange:e=>s({justification:e}),allowSpaceBetween:!0}),(0,n.createElement)(a,{columns:u,setAttributes:s}))),(0,n.createElement)("section",{...w},v))},save:function(e){const{attributes:t}=e,{columns:o,style:a,justification:i}=t,s=c(a.spacing.blockGap),p=r.useBlockProps.save({style:{gap:`${s}px`,justifyContent:h(i),"--card-size-md":o<=2?l(o,s):`calc(50% - (${s}px / 2))`,"--card-size-lg":o<=3?l(o,s):`calc(33.33% - (${s}px / 3))`,"--card-size-xl":l(o,s)}}),{children:m,...u}=r.useInnerBlocksProps.save(p);return(0,n.createElement)("section",{...u},m)}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(h=0;h<e.length;h++){for(var[n,o,a]=e[h],c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(h--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={3167:0,2339:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,c,i]=n,s=0;if(l.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var h=i(r)}for(t&&t(n);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(h)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[2339],(()=>r(7583)));o=r.O(o)})();