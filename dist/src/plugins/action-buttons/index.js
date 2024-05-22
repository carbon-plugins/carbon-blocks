(()=>{"use strict";const e=window.React,t=window.wp.i18n,o=window.wp.element,l=t=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",style:{fill:"none"},fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...t},(0,e.createElement)("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),(0,e.createElement)("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})),n=t=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",style:{fill:"none"},fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...t},(0,e.createElement)("path",{d:"M3 6h18"}),(0,e.createElement)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,e.createElement)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),(0,e.createElement)("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),(0,e.createElement)("line",{x1:"14",x2:"14",y1:"11",y2:"17"})),c=window.wp.data,r=window.wp.components,i=window.wp.blockEditor,s=(0,window.wp.compose.createHigherOrderComponent)((s=>a=>{const{name:d,clientId:w,attributes:k,setAttributes:m}=a,{textAlign:h,showActions:b}=k,p=(0,c.select)("core/block-editor").getBlockParents(w),u=(0,c.select)("core/block-editor").getBlocksByClientId(p)[0]?.innerBlocks.length,g=(0,c.select)("core/block-editor").getBlocksByClientId(p)[0]?.attributes?.maxChildren,E=!g||u<g,B=d.startsWith("carbon-blocks");return void 0===b?(0,e.createElement)(s,{...a}):b?(0,e.createElement)(o.Fragment,null,B&&h&&(0,e.createElement)(i.BlockControls,{group:"block"},(0,e.createElement)(i.AlignmentToolbar,{value:h,onChange:e=>m({textAlign:e})})),(0,e.createElement)(i.BlockControls,null,(0,e.createElement)(r.ToolbarGroup,null,E?(0,e.createElement)(r.ToolbarButton,{icon:l,label:(0,t.__)("Duplicate bloc","carbon-blocks"),onClick:()=>{const e=(0,c.select)("core/block-editor").getSelectedBlockClientIds();(0,c.dispatch)("core/block-editor").duplicateBlocks(e)}}):void 0,(0,e.createElement)(r.ToolbarButton,{icon:n,label:(0,t.__)("Delete bloc","carbon-blocks"),className:"trash-icon",onClick:()=>{const e=(0,c.select)("core/block-editor").getSelectedBlockClientIds();(0,c.dispatch)("core/block-editor").removeBlocks(e)}}))),(0,e.createElement)(s,{...a})):(0,e.createElement)(s,{...a})}),"actionButtons");wp.hooks.addFilter("editor.BlockEdit","carbon-plugins/action-buttons",s)})();