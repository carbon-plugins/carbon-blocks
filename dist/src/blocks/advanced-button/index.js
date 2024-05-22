(()=>{"use strict";var e,t={9605:()=>{const e=window.wp.i18n,t=window.wp.blocks,o=window.React,n=window.wp.element,l=window.wp.components,r=window.wp.blockEditor;function a({value:t,onChange:n,disabledHelp:r=(0,e.__)("This setting is disabled. You must have at least one active property.","carbon-blocks"),label:a="",help:i="",disabled:c=!1}){return(0,o.createElement)(l.__experimentalToggleGroupControl,{onChange:n,className:c?"is-disabled":"",label:a,value:t,help:c?r:i,isBlock:!0,__nextHasNoMarginBottom:!0},(0,o.createElement)(l.__experimentalToggleGroupControlOption,{value:!0,label:(0,e.__)("Yes","carbon-blocks")}),(0,o.createElement)(l.__experimentalToggleGroupControlOption,{value:!1,label:(0,e.__)("No","carbon-blocks")}))}const i=window.wp.primitives,c=(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(i.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"}));function s({setAttributes:t,popoverRef:n,post:a={},isPopoverOpen:i,setPopoverVisibility:c}){return i&&(0,o.createElement)(l.Popover,{anchor:n.current,focusOnMount:"firstElement",position:"bottom right",headerTitle:(0,e.__)("Link settings","carbon-blocks"),onClose:()=>c(!1)},(0,o.createElement)(r.__experimentalLinkControl,{searchInputPlaceholder:(0,e.__)("Enter a page or a URL","carbon-blocks"),value:a,showSuggestions:!0,showInitialSuggestions:!0,settings:[{id:"opensInNewWindow",title:(0,e.__)("Open in a new tab","carbon-blocks")},{id:"underline",title:(0,e.__)("Underline text","carbon-blocks")}],onChange:e=>{e.title=void 0,t({post:{...e}})},onRemove:()=>{t({post:{}})}}))}function p({popoverRef:t,setPopoverVisibility:n,isActive:r}){return(0,o.createElement)(l.ToolbarButton,{label:(0,e.__)("Add a link","carbon-blocks"),icon:c,onClick:()=>n(!0),ref:t,isActive:r})}const u=({children:e,conditions:t})=>{if(t)return e},h=e=>{switch(e){case"top":case"left":return"flex-start";case"center":return"center";case"right":case"bottom":return"flex-end";case"space-between":return"space-between";case"stretch":return"stretch"}},b=({value:t,onChange:n,allowSpaceBetween:r=!1})=>(0,o.createElement)(l.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Horizontal alignment","carbon-blocks"),value:t,onChange:n},(0,o.createElement)(l.__experimentalToggleGroupControlOptionIcon,{icon:(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,o.createElement)(i.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),label:(0,e.__)("Left","carbon-blocks"),value:"left"}),(0,o.createElement)(l.__experimentalToggleGroupControlOptionIcon,{icon:(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,o.createElement)(i.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),label:(0,e.__)("Center","carbon-blocks"),value:"center"}),(0,o.createElement)(l.__experimentalToggleGroupControlOptionIcon,{icon:(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,o.createElement)(i.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Right","carbon-blocks"),value:"right"}),(0,o.createElement)(u,{conditions:r},(0,o.createElement)(l.__experimentalToggleGroupControlOptionIcon,{icon:(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,o.createElement)(i.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),label:(0,e.__)("Space between","carbon-blocks"),value:"space-between"}))),m=({value:e,onChange:t,allowSpaceBetween:n=!1})=>{const a=["left","center","right",...n?["space-between"]:[]];return(0,o.createElement)(l.ToolbarGroup,{group:"blocks"},(0,o.createElement)(r.JustifyContentControl,{value:e,allowedControls:a,onChange:t}))},d="Lorem ipsum";(0,e.__)("Learn more","carbon-blocks"),(0,o.createElement)("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",preserveAspectRatio:"none",class:"components-placeholder__illustration","aria-hidden":"true",focusable:"false"},(0,o.createElement)("path",{"vector-effect":"non-scaling-stroke",d:"M60 60 0 0"}));(0,t.registerBlockType)("carbon-blocks/advanced-button",{icon:e=>(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd"},...e},(0,o.createElement)("g",{transform:"translate(0 .007)scale(.048)"},(0,o.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,o.createElement)("clipPath",{id:"Advanced_Button_svg__a"},(0,o.createElement)("path",{d:"M0 0h500v500H0z"})),(0,o.createElement)("g",{clipPath:"url(#Advanced_Button_svg__a)"},(0,o.createElement)("path",{d:"M2 20.558v-5.116C2 14.598 2.598 14 3.442 14h17.116c1.035 0 1.442.606 1.442 1.442v5.116c0 .829-.613 1.442-1.442 1.442H3.442C2.5 22 2 21.5 2 20.558Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.05px"},transform:"translate(-35 -177.5)scale(23.75)"}),(0,o.createElement)("path",{d:"M3364.83 1523.31h78",style:{fill:"none",stroke:"#18181b",strokeWidth:"12.54px",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:30},transform:"matrix(2.14814 0 0 1.82692 -7145.09 -2534.34)"}),(0,o.createElement)("path",{d:"M5 12h14",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"4.12px",strokeLinecap:"round",strokeLinejoin:"round"},transform:"translate(285.352 161.19)scale(7.28571)"}),(0,o.createElement)("path",{d:"M11.33 5.67 19 12l-7.67 6.33",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"3.43px",strokeLinecap:"round",strokeLinejoin:"round"},transform:"translate(285.352 161.19)scale(7.28571)"})))),title:(0,e.__)("Advanced button","carbon-blocks"),description:(0,e.__)("Drive interaction on your site with a dynamic button; add a personalized link and customize it easily.","carbon-blocks"),example:{attributes:{text:(0,e.__)("Button","carbon-blocks"),style:{color:{background:"black",text:"white"},spacing:{padding:{top:"5px",right:"15px",bottom:"5px",left:"15px"},blockGap:"10px"}}},innerBlocks:[{name:"carbon-blocks/icons",attributes:{icon:{category:(0,e.__)("Miscellaneous","---"),keywords:[],name:(0,e.__)("Wordpress","---"),slug:"dashicons:wordpress",svg:"<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'><path fill='currentColor' d='M20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10s10-4.48 10-10zM10 1.01c4.97 0 8.99 4.02 8.99 8.99s-4.02 8.99-8.99 8.99S1.01 14.97 1.01 10S5.03 1.01 10 1.01zM8.01 14.82L4.96 6.61c.49-.03 1.05-.08 1.05-.08c.43-.05.38-1.01-.06-.99c0 0-1.29.1-2.13.1c-.15 0-.33 0-.52-.01c1.44-2.17 3.9-3.6 6.7-3.6c2.09 0 3.99.79 5.41 2.09c-.6-.08-1.45.35-1.45 1.42c0 .66.38 1.22.79 1.88c.31.54.5 1.22.5 2.21c0 1.34-1.27 4.48-1.27 4.48l-2.71-7.5c.48-.03.75-.16.75-.16c.43-.05.38-1.1-.05-1.08c0 0-1.3.11-2.14.11c-.78 0-2.11-.11-2.11-.11c-.43-.02-.48 1.06-.05 1.08l.84.08l1.12 3.04zm6.02 2.15L16.64 10s.67-1.69.39-3.81c.63 1.14.94 2.42.94 3.81c0 2.96-1.56 5.58-3.94 6.97zM2.68 6.77L6.5 17.25c-2.67-1.3-4.47-4.08-4.47-7.25c0-1.16.2-2.23.65-3.23zm7.45 4.53l2.29 6.25c-.75.27-1.57.42-2.42.42c-.72 0-1.41-.11-2.06-.3z'/></svg>"},size:20}}]},edit:function(t){const{attributes:i,setAttributes:c}=t,{text:v,alignment:g,post:w,isChild:_,width:k,showIcon:f,iconPosition:E}=i,[x,C]=(0,n.useState)(!1),B=(0,n.useRef)(),y=(0,r.useBlockProps)({style:{justifyContent:h(g),width:k,flexDirection:`${E}`}}),{children:M,...O}=(0,r.useInnerBlocksProps)(y,{allowedBlocks:!1,templateLock:"all",renderAppender:!1,template:[["carbon-blocks/icons",{size:25,showActions:!1,isChild:!0}]]});return(0,o.createElement)("a",{...O,href:w?.url,target:w?.opensInNewWindow?"_blank":"_self",rel:"noopener",onClick:e=>e.preventDefault()},(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,e.__)("Settings","carbon-blocks")},(0,o.createElement)(a,{label:(0,e.__)("Show icon","carbon-blocks"),value:f,onChange:e=>c({showIcon:e})}),(0,o.createElement)(u,{conditions:f},(0,o.createElement)(l.__experimentalToggleGroupControl,{isBlock:!0,label:(0,e.__)("Icon position","carbon-blocks"),value:E,onChange:e=>c({iconPosition:e}),__nextHasNoMarginBottom:!0},(0,o.createElement)(l.__experimentalToggleGroupControlOption,{label:(0,e.__)("Start","carbon-blocks"),value:"row-reverse"}),(0,o.createElement)(l.__experimentalToggleGroupControlOption,{label:(0,e.__)("End","carbon-blocks"),value:"row"}))),(0,o.createElement)(l.__experimentalToggleGroupControl,{isBlock:!0,label:(0,e.__)("Width","carbon-blocks"),value:k,onChange:e=>c({width:e}),__nextHasNoMarginBottom:!0},(0,o.createElement)(l.__experimentalToggleGroupControlOption,{label:(0,e.__)("Fit","carbon-blocks"),value:"fit-content"}),(0,o.createElement)(l.__experimentalToggleGroupControlOption,{label:(0,e.__)("Full","carbon-blocks"),value:"100%"})),(0,o.createElement)(u,{conditions:"100%"===k},(0,o.createElement)(b,{value:g,onChange:e=>c({alignment:e}),allowSpaceBetween:!0})))),(0,o.createElement)(r.RichText,{tagName:"span",value:v,placeholder:d,onChange:e=>c({text:e}),multiline:!1,allowedFormats:["core/bold","core/italic"]}),(0,o.createElement)(u,{conditions:f},M),(0,o.createElement)(u,{conditions:!_},(0,o.createElement)(r.BlockControls,null,(0,o.createElement)(l.ToolbarGroup,{group:"blocks"},(0,o.createElement)(u,{conditions:"100%"===k},(0,o.createElement)(m,{value:g,allowSpaceBetween:!0,onChange:e=>c({alignment:e})})),(0,o.createElement)(p,{isActive:w?.url,popoverRef:B,isPopoverOpen:x,setPopoverVisibility:C}))),(0,o.createElement)(s,{post:w,popoverRef:B,setAttributes:c,isPopoverOpen:x,setPopoverVisibility:C})))},save:function(e){const{attributes:t}=e,{text:n,alignment:l,post:a,width:i,showIcon:c}=t,s=r.useBlockProps.save({style:{justifyContent:h(l),width:i}}),{children:p,...b}=r.useInnerBlocksProps.save(s);return(0,o.createElement)("a",{...b,href:a?.url,target:a?.opensInNewWindow?"_blank":"_self",rel:"noopener",onClick:e=>e.preventDefault()},(0,o.createElement)(r.RichText.Content,{tagName:"span",value:n||d}),(0,o.createElement)(u,{conditions:c},p))}})}},o={};function n(e){var l=o[e];if(void 0!==l)return l.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,l,r)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,l,r]=e[p],i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(p--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2722:0,5271:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var l,r,[a,i,c]=o,s=0;if(a.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(c)var p=c(n)}for(t&&t(o);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},o=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=n.O(void 0,[5271],(()=>n(9605)));l=n.O(l)})();