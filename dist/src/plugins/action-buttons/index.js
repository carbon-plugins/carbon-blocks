(()=>{"use strict";const e=window.React,t=window.wp.i18n,o=window.wp.element,c=window.wp.primitives,l=(0,e.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(c.Path,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"})),n=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})),r=window.wp.data,i=window.wp.components,a=window.wp.blockEditor,s=(0,window.wp.compose.createHigherOrderComponent)((c=>s=>{const{name:d,clientId:w,attributes:m,setAttributes:b}=s,{textAlign:h,showActions:k}=m,p=(0,r.select)("core/block-editor").getBlockParents(w),u=(0,r.select)("core/block-editor").getBlocksByClientId(p)[0]?.innerBlocks.length,v=(0,r.select)("core/block-editor").getBlocksByClientId(p)[0]?.attributes?.maxChildren,g=!v||u<v,B=d.startsWith("carbon-blocks");return void 0===k?(0,e.createElement)(c,{...s}):k?(0,e.createElement)(o.Fragment,null,B&&h&&(0,e.createElement)(a.BlockControls,{group:"block"},(0,e.createElement)(a.AlignmentToolbar,{value:h,onChange:e=>b({textAlign:e})})),(0,e.createElement)(a.BlockControls,null,(0,e.createElement)(i.ToolbarGroup,null,g?(0,e.createElement)(i.ToolbarButton,{icon:l,label:(0,t.__)("Duplicate bloc","carbon-blocks"),onClick:()=>{const e=(0,r.select)("core/block-editor").getSelectedBlockClientIds();(0,r.dispatch)("core/block-editor").duplicateBlocks(e)}}):void 0,(0,e.createElement)(i.ToolbarButton,{icon:n,label:(0,t.__)("Delete bloc","carbon-blocks"),className:"trash-icon",onClick:()=>{const e=(0,r.select)("core/block-editor").getSelectedBlockClientIds();(0,r.dispatch)("core/block-editor").removeBlocks(e)}}))),(0,e.createElement)(c,{...s})):(0,e.createElement)(c,{...s})}),"actionButtons");wp.hooks.addFilter("editor.BlockEdit","carbon-plugins/action-buttons",s)})();