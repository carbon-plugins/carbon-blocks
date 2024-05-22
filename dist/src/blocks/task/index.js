(()=>{"use strict";var e,t={8148:()=>{const e=window.wp.i18n,t=window.wp.blocks,o=window.React,l=window.wp.blockEditor,n=window.wp.components,r=window.wp.primitives,a=(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),c=(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));(0,t.registerBlockType)("carbon-blocks/task",{icon:e=>(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},...e},(0,o.createElement)("g",{transform:"translate(0 -.034)scale(.04793)"},(0,o.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,o.createElement)("clipPath",{id:"Task_svg__a"},(0,o.createElement)("path",{d:"M0 0h500v500H0z"})),(0,o.createElement)("g",{clipPath:"url(#Task_svg__a)"},(0,o.createElement)("path",{d:"m5 13 4 4L19 7",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.59px"},transform:"translate(25.768 23.81)scale(18.8492)"}),(0,o.createElement)("path",{d:"M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:1,strokeLinecap:"butt",strokeLinejoin:"miter"},transform:"matrix(23.75 0 0 26.3889 -34.416 -66.667)"})))),title:(0,e.__)("Task","carbon-blocks"),description:(0,e.__)("Add a task line and customize its style.","carbon-blocks"),example:{attributes:{tickBackground:"black",textContent:(0,e.__)("Task to do","carbon-blocks"),color:"black"}},edit:function(t){const{attributes:r,setAttributes:s,context:i}=t,{textContent:k,activeTask:b,color:d,background:p,tickColor:u,tickBackground:m,disabledColor:g,type:h}=r,v=(0,l.useBlockProps)({style:{textDecoration:b?"none":"strikethrough"===h&&`line-through ${g}`}}),_=i["carbon-blocks/labels"];let f=_?{completed:_.completed,taskCompleted:_.taskCompleted,taskTodo:_.taskTodo,style:_.style}:{completed:(0,e.__)("Completed","carbon-blocks"),taskCompleted:(0,e.__)("Task completed","carbon-blocks"),taskTodo:(0,e.__)("Task to-do","carbon-blocks"),style:(0,e.__)("Task completed style","carbon-blocks")};const{children:w,...C}=(0,l.useInnerBlocksProps)(v,{});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:(0,e.__)("Settings","carbon-blocks"),initialOpen:!0},(0,o.createElement)(n.__experimentalToggleGroupControl,{label:f.style,value:h,onChange:e=>s({type:e}),isBlock:!0,__nextHasNoMarginBottom:!0},(0,o.createElement)(n.__experimentalToggleGroupControlOption,{label:(0,e.__)("Strikethrough","carbon-blocks"),value:"strikethrough"}),(0,o.createElement)(n.__experimentalToggleGroupControlOption,{label:(0,e.__)("Cross","carbon-blocks"),value:"cross"})))),(0,o.createElement)(l.InspectorControls,{group:"styles"},(0,o.createElement)(l.PanelColorSettings,{enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,title:(0,e.__)("Colors","carbon-blocks"),className:"carbon-blocks-color-panel",colorSettings:[{value:d,onChange:e=>s({color:e}),label:(0,e.__)("Text","carbon-blocks")},{value:p,onChange:e=>s({background:e}),label:(0,e.__)("Background","carbon-blocks")},{value:u,onChange:e=>s({tickColor:e}),label:(0,e.__)("Tick","carbon-blocks")},{value:m,onChange:e=>s({tickBackground:e}),label:(0,e.__)("Tick background","carbon-blocks")},{value:g,onChange:e=>s({disabledColor:e}),label:f.completed}]})),(0,o.createElement)("li",{...C},(0,o.createElement)(n.Icon,{icon:b||"strikethrough"===h?a:c,style:{fill:b?u:"#ffffff",background:b?m:g}}),(0,o.createElement)(l.RichText,{tagName:"span",value:k,multiline:!1,onChange:e=>s({textContent:e}),placeholder:"Lorem ipsum",allowedFormats:["core/bold","core/italic"],style:{color:b?d:g,background:b?p:"none"}})),(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(n.ToolbarGroup,{group:"blocks"},(0,o.createElement)(n.ToolbarButton,{isActive:!b,label:b?f.taskCompleted:f.taskTodo,icon:b?a:c,onClick:()=>s({activeTask:!b})}))))},save:function(e){const{attributes:t}=e,{textContent:r,activeTask:s,color:i,background:k,tickColor:b,tickBackground:d,disabledColor:p,type:u}=t,m=l.useBlockProps.save({style:{textDecoration:s?"none":`line-through ${p}`}}),{children:g,...h}=l.useInnerBlocksProps.save(m);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("li",{...h},(0,o.createElement)(n.Icon,{icon:s||"strikethrough"===u?a:c,style:{fill:s?b:"#ffffff",background:s?d:p}}),(0,o.createElement)(l.RichText.Content,{tagName:"span",value:r||"Lorem ipsum",style:{color:s?i:p,background:s?k:"none"}})))}})}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,o,n,r)=>{if(!o){var a=1/0;for(k=0;k<e.length;k++){for(var[o,n,r]=e[k],c=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](o[s])))?o.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(k--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var k=e.length;k>0&&e[k-1][2]>r;k--)e[k]=e[k-1];e[k]=[o,n,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={8900:0,9799:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[a,c,s]=o,i=0;if(a.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var k=s(l)}for(t&&t(o);i<a.length;i++)r=a[i],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(k)},o=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=l.O(void 0,[9799],(()=>l(8148)));n=l.O(n)})();