(()=>{"use strict";var e,o={2965:()=>{const e=window.wp.i18n,o=window.wp.blocks,r=window.React,t=window.wp.element,A=window.wp.blockEditor,l=window.wp.components,n=window.wp.primitives,a=(0,r.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(n.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"}));function s({setAttributes:o,popoverRef:t,post:n={},isPopoverOpen:a,setPopoverVisibility:s}){return a&&(0,r.createElement)(l.Popover,{anchor:t.current,focusOnMount:"firstElement",position:"bottom right",headerTitle:(0,e.__)("Link settings","carbon-blocks"),onClose:()=>s(!1)},(0,r.createElement)(A.__experimentalLinkControl,{searchInputPlaceholder:(0,e.__)("Enter a page or a URL","carbon-blocks"),value:n,showSuggestions:!0,showInitialSuggestions:!0,settings:[{id:"opensInNewWindow",title:(0,e.__)("Open in a new tab","carbon-blocks")},{id:"underline",title:(0,e.__)("Underline text","carbon-blocks")}],onChange:e=>{e.title=void 0,o({post:{...e}})},onRemove:()=>{o({post:{}})}}))}function i({popoverRef:o,setPopoverVisibility:t,isActive:A}){return(0,r.createElement)(l.ToolbarButton,{label:(0,e.__)("Add a link","carbon-blocks"),icon:a,onClick:()=>t(!0),ref:o,isActive:A})}const c=({children:e,conditions:o})=>{if(o)return e};function p({value:o,onChange:t,disabledHelp:A=(0,e.__)("This setting is disabled. You must have at least one active property.","carbon-blocks"),label:n="",help:a="",disabled:s=!1}){return(0,r.createElement)(l.__experimentalToggleGroupControl,{onChange:t,className:s?"is-disabled":"",label:n,value:o,help:s?A:a,isBlock:!0,__nextHasNoMarginBottom:!0},(0,r.createElement)(l.__experimentalToggleGroupControlOption,{value:!0,label:(0,e.__)("Yes","carbon-blocks")}),(0,r.createElement)(l.__experimentalToggleGroupControlOption,{value:!1,label:(0,e.__)("No","carbon-blocks")}))}const E=(0,e.__)("Learn more","carbon-blocks");(0,r.createElement)("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",preserveAspectRatio:"none",class:"components-placeholder__illustration","aria-hidden":"true",focusable:"false"},(0,r.createElement)("path",{"vector-effect":"non-scaling-stroke",d:"M60 60 0 0"}));(0,o.registerBlockType)("carbon-blocks/card",{icon:e=>(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd"},...e},(0,r.createElement)("g",{transform:"translate(0 .007)scale(.048)"},(0,r.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,r.createElement)("clipPath",{id:"Card_svg__a"},(0,r.createElement)("path",{d:"M0 0h500v500H0z"})),(0,r.createElement)("g",{clipPath:"url(#Card_svg__a)"},(0,r.createElement)("path",{d:"M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:1},transform:"matrix(23.75 0 0 26.3889 -34.416 -66.667)"}),(0,r.createElement)("path",{d:"M3364.83 1523.31h78",style:{fill:"none",stroke:"#18181b",strokeWidth:"8.29px",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:30},transform:"matrix(3.84615 0 0 1.84432 -12844.084 -2488.125)"}),(0,r.createElement)("path",{d:"M110.099 86.423h10.651",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.31px",strokeLinecap:"round",strokeMiterlimit:30},transform:"matrix(17.2571 0 0 20.8333 -1802.374 -1415.645)"}),(0,r.createElement)("path",{d:"M21 3.6v16.8c0 .329-.271.6-.6.6H3.6a.603.603 0 0 1-.6-.6V3.6c0-.329.271-.6.6-.6h16.8c.329 0 .6.271.6.6",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.87px",strokeLinecap:"round",strokeLinejoin:"round"},transform:"matrix(16.9983 0 0 8.18612 46.605 90.613)"})))),title:(0,e.__)("Card","carbon-blocks"),description:(0,e.__)("Craft a card by customizing the title, text, and image to highlight important information.","carbon-blocks"),example:{attributes:{showSeeMore:!1},innerBlocks:[{name:"carbon-blocks/advanced-image",attributes:{id:0,url:"data:image/jpeg;base64,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",alt:"",description:"",height:"100%",width:"100%"}},{name:"core/heading",attributes:{textAlign:"center",content:(0,e.__)("Escape to paradise","carbon-blocks"),level:3}},{name:"core/paragraph",attributes:{align:"center",content:(0,e.__)("Discover our dream vacation rentals in exotic destinations. From the beach to the mountains, find the perfect getaway for unforgettable holidays.","carbon-blocks")}}]},edit:function(o){const{attributes:n,setAttributes:a}=o,{post:m,seeMore:h,showSeeMore:M,linkColor:x,backgroundColor:w}=n,k=(0,A.useBlockProps)({style:{backgroundColor:w}}),[b,u]=(0,t.useState)(!1),d=(0,t.useRef)(),{children:N,...I}=(0,A.useInnerBlocksProps)(k,{allowedBlocks:["carbon-blocks/advanced-image","core/heading","core/paragraph","carbon-blocks/advanced-buttons"],template:[["carbon-blocks/advanced-image",{showActions:!1,isChild:!0,objectFit:"cover",aspectRatio:"4/3"}],["core/heading",{textAlign:"center",placeholder:"Lorem ipsum",level:3}],["core/paragraph",{placeholder:"Vestibulum hendrerit lectus. Mauris sodales nibh ex, et auctor ex tempus et. Sed sit amet suscipit urna",align:"center"}]]});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(A.InspectorControls,{group:"styles"},(0,r.createElement)(A.PanelColorSettings,{enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,title:(0,e.__)("Colors","carbon-blocks"),className:"carbon-blocks-color-panel",colorSettings:[{value:x,onChange:e=>a({linkColor:e}),label:(0,e.__)("Link","carbon-blocks")},{value:w,onChange:e=>a({backgroundColor:e}),label:(0,e.__)("Background","carbon-blocks")}]})),(0,r.createElement)(A.InspectorControls,null,(0,r.createElement)(l.PanelBody,{title:(0,e.__)("Settings","carbon-blocks"),initialOpen:!0},(0,r.createElement)(c,{conditions:m?.id},(0,r.createElement)(p,{value:M,onChange:e=>a({showSeeMore:e}),label:(0,e.__)('Show "see more"',"carbon-blocks")})))),(0,r.createElement)("article",{...I},N,(0,r.createElement)(c,{conditions:m?.url&&M},(0,r.createElement)(A.RichText,{tagName:"span",onChange:e=>a({seeMore:e}),value:h,placeholder:E,style:{color:x},allowedFormats:["core/bold","core/italic","carbon-blocks/text-animation","carbon-blocks/text-color"]})),(0,r.createElement)(c,{conditions:m?.url},(0,r.createElement)("a",{href:m?.url}))),(0,r.createElement)(A.BlockControls,null,(0,r.createElement)(l.ToolbarGroup,{group:"blocks"},(0,r.createElement)(i,{isActive:m?.url,popoverRef:d,isPopoverOpen:b,setPopoverVisibility:u}))),(0,r.createElement)(s,{post:m,popoverRef:d,setAttributes:a,isPopoverOpen:b,setPopoverVisibility:u}))},save:function(e){const{attributes:o}=e,{seeMore:t,post:l,showSeeMore:n,linkColor:a,backgroundColor:s}=o,i=A.useBlockProps.save({style:{backgroundColor:s}}),{children:p,...m}=A.useInnerBlocksProps.save(i);return(0,r.createElement)("article",{...m},p,(0,r.createElement)(c,{conditions:l?.url&&n},(0,r.createElement)(A.RichText.Content,{tagName:"span",value:t||E,style:{color:a}})),(0,r.createElement)(c,{conditions:l?.url},(0,r.createElement)("a",{href:l?.url})))}})}},r={};function t(e){var A=r[e];if(void 0!==A)return A.exports;var l=r[e]={exports:{}};return o[e](l,l.exports,t),l.exports}t.m=o,e=[],t.O=(o,r,A,l)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,A,l]=e[c],a=!0,s=0;s<r.length;s++)(!1&l||n>=l)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(a=!1,l<n&&(n=l));if(a){e.splice(c--,1);var i=A();void 0!==i&&(o=i)}}return o}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,A,l]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={3816:0,294:0};t.O.j=o=>0===e[o];var o=(o,r)=>{var A,l,[n,a,s]=r,i=0;if(n.some((o=>0!==e[o]))){for(A in a)t.o(a,A)&&(t.m[A]=a[A]);if(s)var c=s(t)}for(o&&o(r);i<n.length;i++)l=n[i],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},r=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var A=t.O(void 0,[294],(()=>t(2965)));A=t.O(A)})();