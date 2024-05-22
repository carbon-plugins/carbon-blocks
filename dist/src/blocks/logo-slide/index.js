(()=>{"use strict";var e,t={4163:()=>{const e=window.wp.i18n,t=window.wp.blocks,n=window.React,o="data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nby0xIiB3aWR0aD0iMTMyIiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTMyIDM1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8cGF0aCBkPSJNMzguNTEgMTEuMjZINDEuNzJWMjQuMjZIMzguNTFWMTEuMjZaTTQzIDE5LjM3QzQzIDE2LjE1IDQ1IDE0LjIyIDQ4IDE0LjIyQzUxIDE0LjIyIDUzIDE2LjE1IDUzIDE5LjM3QzUzIDIyLjU5IDUxLjA3IDI0LjU0IDQ4IDI0LjU0QzQ0LjkzIDI0LjU0IDQzIDIyLjY2IDQzIDE5LjM3Wk00OS44MiAxOS4zN0M0OS44MiAxNy42IDQ5LjEzIDE2LjU2IDQ4LjAzIDE2LjU2QzQ2LjkzIDE2LjU2IDQ2LjI1IDE3LjU2IDQ2LjI1IDE5LjM3QzQ2LjI1IDIxLjE4IDQ2LjkzIDIyLjE3IDQ4LjAzIDIyLjE3QzQ5LjEzIDIyLjE3IDQ5Ljg0IDIxLjE4IDQ5Ljg0IDE5LjM4TDQ5LjgyIDE5LjM3Wk01NC4yOCAyNC45M0g1Ny4zOEM1Ny41MjExIDI1LjI2MzcgNTcuNzY3NiAyNS41NDIyIDU4LjA4MTggMjUuNzIyN0M1OC4zOTYgMjUuOTAzMyA1OC43NjA2IDI1Ljk3NjEgNTkuMTIgMjUuOTNDNjAuMzUgMjUuOTMgNjAuOTkgMjUuMjcgNjAuOTkgMjQuMjlWMjIuNDlINjFDNjAuNzM1MSAyMy4wNTA1IDYwLjMwNjcgMjMuNTE3NiA1OS43NzEzIDIzLjgzQzU5LjIzNTggMjQuMTQyNCA1OC42MTgzIDI0LjI4NTMgNTggMjQuMjRDNTUuNjUgMjQuMjQgNTQuMDkgMjIuNDUgNTQuMDkgMTkuMzdDNTQuMDkgMTYuMjkgNTUuNTggMTQuMzcgNTguMDkgMTQuMzdDNTguNzI0MSAxNC4zMzYxIDU5LjM1MzIgMTQuNDk5NiA1OS44OTA0IDE0LjgzODFDNjAuNDI3NyAxNS4xNzY2IDYwLjg0NjggMTUuNjczNCA2MS4wOSAxNi4yNkg2MVYxNC40NUg2NC4xOFYyNC4xOUM2NC4xOCAyNi41NCA2Mi4xIDI4LjAxIDU5LjA0IDI4LjAxQzU2LjI2IDI4IDU0LjQ4IDI2LjczIDU0LjMgMjQuOTRMNTQuMjggMjQuOTNaTTYxIDE5LjM3QzYxIDE3LjggNjAuMjggMTYuODEgNTkuMTQgMTYuODFDNTggMTYuODEgNTcuMyAxNy44MSA1Ny4zIDE5LjM3QzU3LjMgMjAuOTMgNTcuOTkgMjEuODUgNTkuMTQgMjEuODVDNjAuMjkgMjEuODUgNjEgMjEgNjEgMTkuMzdaTTY1LjQ1IDE5LjM3QzY1LjQ1IDE2LjE1IDY3LjQ1IDE0LjIyIDcwLjQ1IDE0LjIyQzczLjQ1IDE0LjIyIDc1LjQ1IDE2LjE1IDc1LjQ1IDE5LjM3Qzc1LjQ1IDIyLjU5IDczLjUxIDI0LjU0IDcwLjQ1IDI0LjU0QzY3LjM5IDI0LjU0IDY1LjQ3IDIyLjY2IDY1LjQ3IDE5LjM3SDY1LjQ1Wk03Mi4yNyAxOS4zN0M3Mi4yNyAxNy42IDcxLjU3IDE2LjU2IDcwLjQ4IDE2LjU2QzY5LjM5IDE2LjU2IDY4LjcgMTcuNTYgNjguNyAxOS4zN0M2OC43IDIxLjE4IDY5LjM4IDIyLjE3IDcwLjQ4IDIyLjE3QzcxLjU4IDIyLjE3IDcyLjI5IDIxLjE4IDcyLjI5IDE5LjM4TDcyLjI3IDE5LjM3Wk03Ni43NSAxMi4wOEM3Ni43MzYgMTEuNzUzIDc2LjgyMDIgMTEuNDI5MyA3Ni45OTE3IDExLjE1MDZDNzcuMTYzMiAxMC44NzE4IDc3LjQxNDIgMTAuNjUwOCA3Ny43MTI0IDEwLjUxNTlDNzguMDEwNiAxMC4zODA5IDc4LjM0MjMgMTAuMzM4MyA3OC42NjQ5IDEwLjM5MzVDNzguOTg3NSAxMC40NDg2IDc5LjI4NjIgMTAuNTk5IDc5LjUyMjYgMTAuODI1M0M3OS43NTkgMTEuMDUxNyA3OS45MjIzIDExLjM0MzUgNzkuOTkxNSAxMS42NjM0QzgwLjA2MDYgMTEuOTgzMyA4MC4wMzI1IDEyLjMxNjYgNzkuOTEwNyAxMi42MjAzQzc5Ljc4ODkgMTIuOTI0MSA3OS41NzkgMTMuMTg0NSA3OS4zMDggMTMuMzY4Qzc5LjAzNyAxMy41NTE1IDc4LjcxNzMgMTMuNjQ5NyA3OC4zOSAxMy42NUM3OC4xODA5IDEzLjY1NTMgNzcuOTcyNyAxMy42MTkgNzcuNzc3NyAxMy41NDMzQzc3LjU4MjcgMTMuNDY3NSA3Ny40MDQ2IDEzLjM1MzcgNzcuMjUzOSAxMy4yMDg2Qzc3LjEwMzIgMTMuMDYzNSA3Ni45ODI4IDEyLjg4OTkgNzYuODk5OCAxMi42OTc4Qzc2LjgxNjcgMTIuNTA1OCA3Ni43NzI2IDEyLjI5OTIgNzYuNzcgMTIuMDlMNzYuNzUgMTIuMDhaTTc2Ljc1IDE0LjQ0SDgwVjI0LjNINzYuOEw3Ni43NSAxNC40NFpNOTEuNjkgMTkuMzdDOTEuNjkgMjIuNTggOTAuMjUgMjQuNDQgODcuOCAyNC40NEM4Ny4xNzI4IDI0LjQ3ODcgODYuNTQ4OCAyNC4zMjM5IDg2LjAxMjMgMjMuOTk2N0M4NS40NzU4IDIzLjY2OTQgODUuMDUyNyAyMy4xODU0IDg0LjggMjIuNjFIODQuNzRWMjcuNDdIODEuNTNWMTQuNDdIODQuNzJWMTYuMjNIODQuNzhDODUuMDI0IDE1LjY0MzMgODUuNDQzIDE1LjE0NiA4NS45Nzk4IDE0LjgwNkM4Ni41MTY3IDE0LjQ2NiA4Ny4xNDUzIDE0LjI5OTggODcuNzggMTQuMzNDOTAuMyAxNC4zMSA5MS43NSAxNi4xNiA5MS43NSAxOS4zOEw5MS42OSAxOS4zN1pNODguNDIgMTkuMzdDODguNDIgMTcuODEgODcuNjkgMTYuOCA4Ni41NiAxNi44Qzg1LjQzIDE2LjggODQuNzIgMTcuOCA4NC43MSAxOS4zN0M4NC43IDIwLjk0IDg1LjQzIDIxLjkzIDg2LjU2IDIxLjkzQzg3LjY5IDIxLjkzIDg4LjQ4IDIxIDg4LjQ4IDE5LjM4TDg4LjQyIDE5LjM3Wk05Ny4xNyAxNC4yMUM5OS44NiAxNC4yMSAxMDEuNTMgMTUuNDggMTAxLjU1IDE3LjUySDk4LjYyQzk4LjYyIDE2LjgxIDk4LjAzIDE2LjM3IDk3LjE1IDE2LjM3Qzk2LjI3IDE2LjM3IDk1Ljg1IDE2LjcxIDk1Ljg1IDE3LjIyQzk1Ljg1IDE3LjczIDk2LjIyIDE3Ljg5IDk2Ljk2IDE4LjA0TDk5LjAyIDE4LjQ2QzEwMS4wMiAxOC44OCAxMDEuODIgMTkuNjggMTAxLjgyIDIxLjE3QzEwMS44MiAyMy4xNyA5OS45NyAyNC41MyA5Ny4yMiAyNC41M0M5NC40NyAyNC41MyA5Mi42OCAyMy4yMSA5Mi41NSAyMS4ySDk1LjY2Qzk1Ljc1IDIxLjkzIDk2LjMzIDIyLjM2IDk3LjI3IDIyLjM2Qzk4LjIxIDIyLjM2IDk4LjY1IDIyLjA2IDk4LjY1IDIxLjUzQzk4LjY1IDIxIDk4LjM1IDIwLjkxIDk3LjU4IDIwLjc1TDk1LjcyIDIwLjM2QzkzLjc5IDE5Ljk1IDkyLjc4IDE4Ljk0IDkyLjc4IDE3LjQzQzkyLjg0IDE1LjQ3IDk0LjUyIDE0LjIyIDk3LjIzIDE0LjIyTDk3LjE3IDE0LjIxWk0xMTIuNTcgMjQuMjlIMTA5LjQ2VjIyLjQ0SDEwOS40QzEwOS4yMjYgMjMuMDU3MSAxMDguODQ3IDIzLjU5NjQgMTA4LjMyNSAyMy45NjlDMTA3LjgwMyAyNC4zNDE3IDEwNy4xNyAyNC41MjU0IDEwNi41MyAyNC40OUMxMDYuMDQ3IDI0LjUwNTcgMTA1LjU2NSAyNC40MTkxIDEwNS4xMTggMjQuMjM1N0MxMDQuNjcxIDI0LjA1MjQgMTA0LjI2NyAyMy43NzY1IDEwMy45MzQgMjMuNDI2MkMxMDMuNiAyMy4wNzU4IDEwMy4zNDUgMjIuNjU4OSAxMDMuMTg0IDIyLjIwMjlDMTAzLjAyMyAyMS43NDY5IDEwMi45NiAyMS4yNjE5IDEwMyAyMC43OFYxNC40NUgxMDYuMjFWMjAuMDlDMTA2LjIxIDIxLjI1IDEwNi44MiAyMS44OCAxMDcuODIgMjEuODhDMTA4LjA1NSAyMS44NzgyIDEwOC4yODYgMjEuODI2MSAxMDguNDk5IDIxLjcyNzNDMTA4LjcxMiAyMS42Mjg0IDEwOC45MDEgMjEuNDg1IDEwOS4wNTMgMjEuMzA2OEMxMDkuMjA2IDIxLjEyODYgMTA5LjMxOSAyMC45MTk3IDEwOS4zODQgMjAuNjk0M0MxMDkuNDQ4IDIwLjQ2ODggMTA5LjQ2NCAyMC4yMzIxIDEwOS40MyAyMFYxNC40NUgxMTIuNjNMMTEyLjU3IDI0LjI5Wk0xMTQuMTIgMTQuNDRIMTE3LjI0VjE2LjM0SDExNy4zMUMxMTcuNDgyIDE1LjczMTMgMTE3Ljg1MiAxNS4xOTcgMTE4LjM2IDE0LjgyMDZDMTE4Ljg2OSAxNC40NDQzIDExOS40ODggMTQuMjQ3MSAxMjAuMTIgMTQuMjZDMTIwLjc1NSAxNC4yMDQ4IDEyMS4zODggMTQuMzg4NCAxMjEuODk0IDE0Ljc3NDlDMTIyLjQwMSAxNS4xNjE0IDEyMi43NDUgMTUuNzIzMSAxMjIuODYgMTYuMzVIMTIzQzEyMy4yIDE1LjcxOTcgMTIzLjYwMiAxNS4xNzMxIDEyNC4xNDUgMTQuNzk1MkMxMjQuNjg3IDE0LjQxNzIgMTI1LjM0IDE0LjIyOTEgMTI2IDE0LjI2QzEyNi40MzkgMTQuMjQzMyAxMjYuODc3IDE0LjMxOTUgMTI3LjI4NCAxNC40ODM2QzEyNy42OTIgMTQuNjQ3NiAxMjguMDYgMTQuODk1OSAxMjguMzY1IDE1LjIxMjJDMTI4LjY3IDE1LjUyODQgMTI4LjkwNCAxNS45MDU1IDEyOS4wNTMgMTYuMzE4N0MxMjkuMjAzIDE2LjczMTkgMTI5LjI2MyAxNy4xNzE5IDEyOS4yMyAxNy42MVYyNC4zSDEyNlYxOC40M0MxMjYgMTcuNDMgMTI1LjUzIDE2Ljg3IDEyNC42MiAxNi44N0MxMjQuNDE4IDE2Ljg2NjcgMTI0LjIxOCAxNi45MDcxIDEyNC4wMzMgMTYuOTg4M0MxMjMuODQ4IDE3LjA2OTYgMTIzLjY4NCAxNy4xODk5IDEyMy41NSAxNy4zNDA5QzEyMy40MTYgMTcuNDkyIDEyMy4zMTYgMTcuNjcwMSAxMjMuMjU3IDE3Ljg2MzNDMTIzLjE5OSAxOC4wNTY1IDEyMy4xODMgMTguMjYgMTIzLjIxIDE4LjQ2VjI0LjNIMTIwLjE1VjE4LjRDMTIwLjE1IDE3LjQgMTE5LjY2IDE2Ljg3IDExOC43OCAxNi44N0MxMTguNTc2IDE2Ljg2ODQgMTE4LjM3NCAxNi45MTA0IDExOC4xODggMTYuOTkzMkMxMTguMDAxIDE3LjA3NjEgMTE3LjgzNSAxNy4xOTc4IDExNy42OTkgMTcuMzUwM0MxMTcuNTY0IDE3LjUwMjggMTE3LjQ2MyAxNy42ODI1IDExNy40MDMgMTcuODc3M0MxMTcuMzQyIDE4LjA3MjIgMTE3LjMyNCAxOC4yNzc3IDExNy4zNSAxOC40OFYyNC4zSDExNC4xNEwxMTQuMTIgMTQuNDRaIiBjbGFzcz0iY2N1c3RvbSIgZmlsbD0iI2ExYTNhYSI+PC9wYXRoPiA8cGF0aCBkPSJNMzIuMTYgMTIuMTFDMzIuMTYwMSAxMC4xMTk3IDMxLjU1OTEgOC4xNzU3NiAzMC40MzU3IDYuNTMyODJDMjkuMzEyMyA0Ljg4OTg4IDI3LjcxODggMy42MjQ1MyAyNS44NjQxIDIuOTAyNTNDMjQuMDA5NCAyLjE4MDUyIDIxLjk3OTggMi4wMzU1MiAyMC4wNDEzIDIuNDg2NTFDMTguMTAyNyAyLjkzNzUgMTYuMzQ1NiAzLjk2MzQ2IDE1IDUuNDNIMi41MjAwMlYzMS43N0gyOC44N1YxOS40NkMyOS45MDQyIDE4LjUzNSAzMC43MzE4IDE3LjQwMjMgMzEuMjk4NyAxNi4xMzU4QzMxLjg2NTYgMTQuODY5MyAzMi4xNTkxIDEzLjQ5NzYgMzIuMTYgMTIuMTFWMTIuMTFaTTI3LjA5IDEyLjExQzI3LjA5MiAxMy4wNjM3IDI2LjgxMSAxMy45OTY2IDI2LjI4MjYgMTQuNzkwNkMyNS43NTQxIDE1LjU4NDUgMjUuMDAyMSAxNi4yMDM5IDI0LjEyMTUgMTYuNTcwMkMyMy4yNDA5IDE2LjkzNjYgMjIuMjcxNSAxNy4wMzM1IDIxLjMzNTggMTYuODQ4NkMyMC40MDAyIDE2LjY2MzggMTkuNTQwNCAxNi4yMDU1IDE4Ljg2NTMgMTUuNTMxOEMxOC4xOTAyIDE0Ljg1ODEgMTcuNzMwMiAxMy45OTkzIDE3LjU0MzQgMTMuMDY0QzE3LjM1NjYgMTIuMTI4OCAxNy40NTE1IDExLjE1OTEgMTcuODE2IDEwLjI3NzhDMTguMTgwNSA5LjM5NjQ2IDE4Ljc5ODMgOC42NDMwOSAxOS41OTExIDguMTEzMDJDMjAuMzg0IDcuNTgyOTUgMjEuMzE2MyA3LjMwMDAxIDIyLjI3IDcuM0MyMy41NDY2IDcuMyAyNC43NzExIDcuODA2NDUgMjUuNjc0NyA4LjcwODIxQzI2LjU3ODQgOS42MDk5NyAyNy4wODc0IDEwLjgzMzQgMjcuMDkgMTIuMTFWMTIuMTFaTTIzLjggMjYuN0g3LjU5MDAyVjEwLjVIMTIuNTNDMTIuNDM0NiAxMS4wMzE1IDEyLjM4NDQgMTEuNTcwMSAxMi4zOCAxMi4xMUMxMi4zODI3IDE0LjczMjIgMTMuNDI1NSAxNy4yNDYyIDE1LjI3OTcgMTkuMTAwNEMxNy4xMzM4IDIwLjk1NDUgMTkuNjQ3OCAyMS45OTc0IDIyLjI3IDIyQzIyLjc4MjcgMjEuOTk3MyAyMy4yOTQzIDIxLjk1MzggMjMuOCAyMS44N1YyNi43WiIgY2xhc3M9ImNjdXN0b20iIGZpbGw9IiNhMWEzYWEiPjwvcGF0aD4gPC9zdmc+Cg==",i=window.wp.blockEditor,r=window.wp.components,c=window.wp.primitives,s=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),M=window.wp.element,l=window.wp.data,u=/^[a-z0-9]+(-[a-z0-9]+)*$/,a=(e,t,n,o="")=>{const i=e.split(":");if("@"===e.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const e=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:e};return t&&!g(r)?null:r}const r=i[0],c=r.split("-");if(c.length>1){const e={provider:o,prefix:c.shift(),name:c.join("-")};return t&&!g(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:r};return t&&!g(e,n)?null:e}return null},g=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(u)||!(t&&""===e.prefix||e.prefix.match(u))||!e.name.match(u)),I=Object.freeze({left:0,top:0,width:16,height:16}),j=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),D=Object.freeze({...I,...j}),f=Object.freeze({...D,body:"",hidden:!1});function N(e,t){const n=function(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}(e,t);for(const o in f)o in j?o in e&&!(o in n)&&(n[o]=j[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function d(e,t,n){const o=e.icons,i=e.aliases||Object.create(null);let r={};function c(e){r=N(o[e]||i[e],r)}return c(t),n.forEach(c),N(e,r)}function y(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=function(e,t){const n=e.icons,o=e.aliases||Object.create(null),i=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function e(t){if(n[t])return i[t]=[];if(!(t in i)){i[t]=null;const n=o[t]&&o[t].parent,r=n&&e(n);r&&(i[t]=[n].concat(r))}return i[t]})),i}(e);for(const i in o){const r=o[i];r&&(t(i,d(e,i,r)),n.push(i))}return n}const p={provider:"",aliases:{},not_found:{},...I};function L(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function h(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!L(e,p))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e.match(u)||"string"!=typeof t.body||!L(t,f))return null}const o=t.aliases||Object.create(null);for(const e in o){const t=o[e],i=t.parent;if(!e.match(u)||"string"!=typeof i||!n[i]&&!o[i]||!L(t,f))return null}return t}const E=Object.create(null);function T(e,t){const n=E[e]||(E[e]=Object.create(null));return n[t]||(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}(e,t))}function x(e,t){return h(t)?y(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}let z=!1;function A(e){return"boolean"==typeof e&&(z=e),z}const O=Object.freeze({width:null,height:null}),k=Object.freeze({...O,...j}),m=/(-?[0-9.]*[0-9]+[0-9.]*)/g,w=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function b(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(m);if(null===o||!o.length)return e;const i=[];let r=o.shift(),c=w.test(r);for(;;){if(c){const e=parseFloat(r);isNaN(e)?i.push(r):i.push(Math.ceil(e*t*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");c=!c}}const Q=/\sid="(\S+)"/g,S="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let v=0;function C(e,t=S){const n=[];let o;for(;o=Q.exec(e);)n.push(o[1]);if(!n.length)return e;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof t?t(n):t+(v++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),e=e.replace(new RegExp(i,"g"),"")}const U=Object.create(null);function Y(e){return U[e]||U[""]}function _(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const F=Object.create(null),B=["https://api.simplesvg.com","https://api.unisvg.com"],P=[];for(;B.length>0;)1===B.length||Math.random()>.5?P.push(B.shift()):P.push(B.pop());function W(e,t){const n=_(t);return null!==n&&(F[e]=n,!0)}function R(e){return F[e]}F[""]=_({resources:["https://api.iconify.design"].concat(P)});let V=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();const H={prepare:(e,t,n)=>{const o=[],i=function(e,t){const n=R(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const i=t+".json?icons=";o=n.maxURL-e-n.path.length-i.length}else o=0;return o}(e,t),r="icons";let c={type:r,provider:e,prefix:t,icons:[]},s=0;return n.forEach(((n,M)=>{s+=n.length+1,s>=i&&M>0&&(o.push(c),c={type:r,provider:e,prefix:t,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(e,t,n)=>{if(!V)return void n("abort",424);let o=function(e){if("string"==typeof e){const t=R(e);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let i=503;V(e+o).then((e=>{const t=e.status;if(200===t)return i=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",i)}))})).catch((()=>{n("next",i)}))}};function Z(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}let G=0;var J={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function $(e){const t={...J,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,i,r){const c=function(e,t,n,o){const i=e.resources.length,r=e.random?Math.floor(Math.random()*i):e.index;let c;if(e.random){let t=e.resources.slice(0);for(c=[];t.length>1;){const e=Math.floor(Math.random()*t.length);c.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}c=c.concat(t)}else c=e.resources.slice(r).concat(e.resources.slice(0,r));const s=Date.now();let M,l="pending",u=0,a=null,g=[],I=[];function j(){a&&(clearTimeout(a),a=null)}function D(){"pending"===l&&(l="aborted"),j(),g.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),g=[]}function f(e,t){t&&(I=[]),"function"==typeof e&&I.push(e)}function N(){l="failed",I.forEach((e=>{e(void 0,M)}))}function d(){g.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),g=[]}return"function"==typeof o&&I.push(o),setTimeout((function o(){if("pending"!==l)return;j();const i=c.shift();if(void 0===i)return g.length?void(a=setTimeout((()=>{j(),"pending"===l&&(d(),N())}),e.timeout)):void N();const r={status:"pending",resource:i,callback:(t,n)=>{!function(t,n,i){const r="success"!==n;switch(g=g.filter((e=>e!==t)),l){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return M=i,void N();if(r)return M=i,void(g.length||(c.length?o():N()));if(j(),d(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",I.forEach((e=>{e(i)}))}(r,t,n)}};g.push(r),u++,a=setTimeout(o,e.rotate),n(i,t,r.callback)})),function(){return{startTime:s,payload:t,status:l,queriesSent:u,queriesPending:g.length,subscribe:f,abort:D}}}(t,e,i,((e,t)=>{o(),r&&r(e,t)}));return n.push(c),c},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function q(){}const X=Object.create(null);const K="iconify2",ee="iconify",te=ee+"-count",ne=ee+"-version",oe=36e5,ie=168;function re(e,t){try{return e.getItem(t)}catch(e){}}function ce(e,t,n){try{return e.setItem(t,n),!0}catch(e){}}function se(e,t){try{e.removeItem(t)}catch(e){}}function Me(e,t){return ce(e,te,t.toString())}function le(e){return parseInt(re(e,te))||0}const ue={local:!0,session:!0},ae={local:new Set,session:new Set};let ge=!1,Ie="undefined"==typeof window?{}:window;function je(e){const t=e+"Storage";try{if(Ie&&Ie[t]&&"number"==typeof Ie[t].length)return Ie[t]}catch(e){}ue[e]=!1}function De(e,t){const n=je(e);if(!n)return;const o=re(n,ne);if(o!==K){if(o){const e=le(n);for(let t=0;t<e;t++)se(n,ee+t.toString())}return ce(n,ne,K),void Me(n,0)}const i=Math.floor(Date.now()/oe)-ie,r=e=>{const o=ee+e.toString(),r=re(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(e){}se(n,o)}};let c=le(n);for(let t=c-1;t>=0;t--)r(t)||(t===c-1?(c--,Me(n,c)):ae[e].add(t))}function fe(){if(!ge){ge=!0;for(const e in ue)De(e,(e=>{const t=e.data,n=T(e.provider,t.prefix);if(!x(n,t).length)return!1;const o=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function Ne(){}const de=(e,t)=>{const n=function(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const i="string"==typeof e?a(e,t,n):e;i&&o.push(i)})),o}(e,!0,A()),o=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const i=e.provider,r=e.prefix,c=e.name,s=n[i]||(n[i]=Object.create(null)),M=s[r]||(s[r]=T(i,r));let l;l=c in M.icons?t.loaded:""===r||M.missing.has(c)?t.missing:t.pending;const u={provider:i,prefix:r,name:c};l.push(u)})),t}(n);if(!o.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(o.loaded,o.missing,o.pending,Ne)})),()=>{e=!1}}const i=Object.create(null),r=[];let c,s;return o.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===c)return;c=t,s=n,r.push(T(t,n));const o=i[t]||(i[t]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,r=T(t,n),c=r.pendingIcons||(r.pendingIcons=new Set);c.has(o)||(c.add(o),i[t][n].push(o))})),r.forEach((e=>{const{provider:t,prefix:n}=e;i[t][n].length&&function(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;let i;delete e.iconsToLoad,o&&(i=Y(t))&&i.prepare(t,n,o).forEach((n=>{!function(e,t,n){let o,i;if("string"==typeof e){const t=Y(e);if(!t)return n(void 0,424),q;i=t.send;const r=function(e){if(!X[e]){const t=R(e);if(!t)return;const n={config:t,redundancy:$(t)};X[e]=n}return X[e]}(e);r&&(o=r.redundancy)}else{const t=_(e);if(t){o=$(t);const n=Y(e.resources?e.resources[0]:"");n&&(i=n.send)}}o&&i?o.query(t,i,n)().abort:n(void 0,424)}(t,n,(t=>{if("object"!=typeof t)n.icons.forEach((t=>{e.missing.add(t)}));else try{const n=x(e,t);if(!n.length)return;const o=e.pendingIcons;o&&n.forEach((e=>{o.delete(e)})),function(e,t){function n(n){let o;if(!ue[n]||!(o=je(n)))return;const i=ae[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=le(o),!Me(o,r+1))return;const c={cached:Math.floor(Date.now()/oe),provider:e.provider,data:t};return ce(o,ee+r.toString(),JSON.stringify(c))}ge||fe(),t.lastModified&&!function(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const n in ue)De(n,(n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t}));return!0}(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}(e,t)}catch(e){console.error(e)}!function(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,i=e.prefix;t.forEach((t=>{const r=t.icons,c=r.pending.length;r.pending=r.pending.filter((t=>{if(t.prefix!==i)return!0;const c=t.name;if(e.icons[c])r.loaded.push({provider:o,prefix:i,name:c});else{if(!e.missing.has(c))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:c})}return!1})),r.pending.length!==c&&(n||Z([e],t.id),t.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),t.abort))}))})))}(e)})))}(e)}))}))})))}(e,i[t][n])})),t?function(e,t,n){const o=G++,i=Z.bind(null,n,o);if(!t.pending.length)return i;const r={id:o,icons:t,callback:e,abort:i};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(r)})),i}(t,o,r):Ne},ye=/[\s,]+/;function pe(e,t){t.split(ye).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function Le(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i/=t,i%1==0?o(i):0)}}return t}let he;function Ee(e){return void 0===he&&function(){try{he=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){he=null}}(),he?he.createHTML(e):e}const Te={...k,inline:!1},xe={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ze={display:"inline-block"},Ae={backgroundColor:"currentColor"},Oe={backgroundColor:"transparent"},ke={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},me={WebkitMask:Ae,mask:Ae,background:Oe};for(const e in me){const t=me[e];for(const n in ke)t[e+n]=ke[n]}const we={...Te,inline:!0};function be(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}if(A(!0),Qe=H,U[""]=Qe,"undefined"!=typeof document&&"undefined"!=typeof window){fe();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),z&&!t&&!e.prefix){let t=!1;return h(e)&&(e.prefix="",y(e,((e,n)=>{n&&function(e,t){const n=a(e,!0,z);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(e){}return!1}(T(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)}))),t}const n=e.prefix;return!!g({provider:t,prefix:n,name:"a"})&&!!x(T(t,n),e)}(e))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;W(e,o)||console.error(n)}catch(e){console.error(n)}}}}var Qe;class Se extends n.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const t=this.state,n=this.props.icon;if("object"==typeof n&&null!==n&&"string"==typeof n.body)return this._icon="",this._abortLoading(),void((e||null===t.icon)&&this._setData({data:n}));let o;if("string"!=typeof n||null===(o=a(n,!1,!0)))return this._abortLoading(),void this._setData(null);const i=function(e){const t="string"==typeof e?a(e,!0,z):e;if(t){const e=T(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}(o);if(i){if(this._icon!==n||null===t.icon){this._abortLoading(),this._icon=n;const e=["iconify"];""!==o.prefix&&e.push("iconify--"+o.prefix),""!==o.provider&&e.push("iconify--"+o.provider),this._setData({data:i,classes:e}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),null!==i&&(this._loading={name:n,abort:de([o],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,t=this.state.icon;if(null===t)return e.children?e.children:n.createElement("span",{});let o=e;return t.classes&&(o={...e,className:("string"==typeof e.className?e.className+" ":"")+t.classes.join(" ")}),((e,t,o,i)=>{const r=o?we:Te,c=function(e,t){const n={...e};for(const e in t){const o=t[e],i=typeof o;e in O?(null===o||o&&("string"===i||"number"===i))&&(n[e]=o):i===typeof n[e]&&(n[e]="rotate"===e?o%4:o)}return n}(r,t),s=t.mode||"svg",M={},l=t.style||{},u={..."svg"===s?xe:{},ref:i};for(let e in t){const n=t[e];if(void 0!==n)switch(e){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":c[e]=!0===n||"true"===n||1===n;break;case"flip":"string"==typeof n&&pe(c,n);break;case"color":M.color=n;break;case"rotate":"string"==typeof n?c[e]=Le(n):"number"==typeof n&&(c[e]=n);break;case"ariaHidden":case"aria-hidden":!0!==n&&"true"!==n&&delete u["aria-hidden"];break;default:void 0===r[e]&&(u[e]=n)}}const a=function(e,t){const n={...D,...e},o={...k,...t},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let c,s=e.rotate;switch(n?o?s+=2:(t.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),t.push("scale(-1 1)"),i.top=i.left=0):o&&(t.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),t.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=i.height/2+i.top,t.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:t.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:c=i.width/2+i.left,t.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(i.left!==i.top&&(c=i.left,i.left=i.top,i.top=c),i.width!==i.height&&(c=i.width,i.width=i.height,i.height=c)),t.length&&(r='<g transform="'+t.join(" ")+'">'+r+"</g>")}));const c=o.width,s=o.height,M=i.width,l=i.height;let u,a;null===c?(a=null===s?"1em":"auto"===s?l:s,u=b(a,M/l)):(u="auto"===c?M:c,a=null===s?b(u,l/M):"auto"===s?l:s);const g={},I=(e,t)=>{(e=>"unset"===e||"undefined"===e||"none"===e)(t)||(g[e]=t.toString())};return I("width",u),I("height",a),g.viewBox=i.left.toString()+" "+i.top.toString()+" "+M.toString()+" "+l.toString(),{attributes:g,body:r}}(e,c),g=a.attributes;if(c.inline&&(M.verticalAlign="-0.125em"),"svg"===s){u.style={...M,...l},Object.assign(u,g);let e=0,o=t.id;return"string"==typeof o&&(o=o.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:Ee(C(a.body,o?()=>o+"ID"+e++:"iconifyReact"))},n.createElement("svg",u)}const{body:I,width:j,height:f}=e,N="mask"===s||"bg"!==s&&-1!==I.indexOf("currentColor"),d=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(I,{...g,width:j+"",height:f+""});var y;return u.style={...M,"--svg":(y=d,'url("'+function(e){return"data:image/svg+xml,"+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(e)}(y)+'")'),width:be(g.width),height:be(g.height),...ze,...N?Ae:Oe,...l},n.createElement("span",u)})({...D,...t.data},o,e._inline,e._ref)}}const ve=n.forwardRef((function(e,t){const o={...e,_ref:t,_inline:!1};return n.createElement(Se,o)}));function Ce({title:t="block",icon:o="fluent:settings-24-filled",position:i="right"}){const r="left"===i?{left:0}:{right:0};return(0,n.createElement)("span",{"aria-label":(0,e.sprintf)("Open %1$s settings",t,"carbon"),title:(0,e.__)(`Open ${t} settings`,"carbon"),className:"carbon-setting",onClick:function(){(0,l.dispatch)("core/edit-post").openGeneralSidebar("edit-post/block")},style:r},(0,n.createElement)(ve,{icon:o}))}function Ue({children:o,blockProps:c,clientId:s,showSettingButton:u,blockName:a}){c.className="swiper-slide "+c.className;const[g,I]=(0,M.useState)(!1),[j,D]=(0,M.useState)(!1),f=(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,n.createElement)("path",{fill:"currentColor",d:"M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2m-7 3H3V6h16v7h2V6c0-1.11-.89-2-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11v-2Z"})),N=(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,n.createElement)("path",{fill:"currentColor",d:"m20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41L20.41 19m-7.32-1H4V6h16v7.09c.72.12 1.39.37 2 .72V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1c0-.34.04-.67.09-1Z"})),d=(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,n.createElement)("path",{fill:"currentColor",d:"M21 16V6H7v10h14m0-12c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v10c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h14M3 20h15v2H3c-.53 0-1.04-.21-1.41-.59C1.21 21.04 1 20.53 1 20V9h2v11Z"})),y=(0,l.select)("core/block-editor").getBlockRootClientId(s),p=(0,l.select)("core/block-editor").getBlock(y);return(0,M.useEffect)((()=>{D(document.querySelector(`.editor-styles-wrapper [data-block="${y}"]`))}),[]),(0,n.createElement)(M.Fragment,null,(0,n.createElement)("li",{...c},u&&(0,n.createElement)(Ce,{title:(0,e.__)("slide","carbon-blocks"),icon:"mdi:card-outline",position:"right"}),o),(0,n.createElement)(i.BlockControls,null,(0,n.createElement)(r.ToolbarGroup,null,(0,n.createElement)(r.ToolbarButton,{label:(0,e.__)("Duplicate current slide","carbon-blocks"),icon:d,onClick:()=>{const e=p.innerBlocks.findIndex((e=>e.clientId===s))+1,n=(0,l.select)("core/block-editor").getBlock(s),o=(0,t.cloneBlock)(n),i=new CustomEvent("duplicateSlide",{detail:{index:e,clientId:o.clientId}});(0,l.dispatch)("core/block-editor").insertBlock(o,e,y,!1),setTimeout((()=>j.dispatchEvent(i)),20)}}),(0,n.createElement)(r.ToolbarButton,{label:(0,e.__)("Add a slide","carbon-blocks"),icon:f,onClick:()=>{const e=p.innerBlocks.findIndex((e=>e.clientId===s))+1,n=(0,t.createBlock)(a,{isSlide:!0}),o=new CustomEvent("addSlide",{detail:{index:e,clientId:n.clientId}});(0,l.dispatch)("core/block-editor").insertBlock(n,e,y,!1),setTimeout((()=>j.dispatchEvent(o)),20)}}),(0,n.createElement)(r.ToolbarButton,{label:(0,e.__)("Remove current slide","carbon-blocks"),icon:N,onClick:()=>I(!0)}))),(0,n.createElement)(r.__experimentalConfirmDialog,{isOpen:g,onConfirm:()=>{(e=>{(0,l.dispatch)("core/block-editor").removeBlock(e,!1)})(s),I(!1)},onCancel:()=>I(!1),cancelButtonText:(0,e.__)("Cancel","carbon-blocks"),confirmButtonText:(0,e.__)("Yes, delete it","carbon-blocks")},(0,e.__)("Are you sure you want to delete this slide ?","carbon-blocks")))}function Ye({children:e,blockProps:t}){return t.className="swiper-slide "+t.className,(0,n.createElement)("li",{...t},e)}n.forwardRef((function(e,t){const o={...e,_ref:t,_inline:!0};return n.createElement(Se,o)}));(0,t.registerBlockType)("carbon-blocks/logo-slide",{icon:e=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},...e},(0,n.createElement)("path",{d:"M0 0h500v500H0z",style:{fill:"none"},transform:"matrix(.04792 0 0 .04792 -.041 -.109)"}),(0,n.createElement)("path",{d:"M2 3v18",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.31px"},transform:"matrix(1.08038 0 0 .7238 -1.006 3.185)"}),(0,n.createElement)("path",{d:"M18 5.763v12.474C18 19.762 17.171 21 16.149 21H7.851C6.829 21 6 19.762 6 18.237V5.763C6 4.238 6.829 3 7.851 3h8.298C17.171 3 18 4.238 18 5.763",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.31px"},transform:"matrix(1.08038 0 0 .7238 -1.006 3.185)"}),(0,n.createElement)("path",{d:"M22 3v18",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.31px"},transform:"matrix(1.08038 0 0 .7238 -1.006 3.185)"})),title:(0,e.__)("Logo","carbon-blocks"),description:(0,e.__)("Add the logo of your partner, client, or affiliate.","carbon-blocks"),example:{},edit:function(t){const{attributes:c,clientId:M,setAttributes:l}=t,{logo:u}=c,a=(0,i.useBlockProps)();return(0,n.createElement)(Ue,{blockProps:a,clientId:M,showSettingButton:!1,blockName:t.name},(0,n.createElement)(i.BlockControls,null,(0,n.createElement)(r.ToolbarGroup,null,(0,n.createElement)(i.MediaUploadCheck,null,(0,n.createElement)(i.MediaUpload,{onSelect:e=>l({logo:e}),allowedTypes:["image"],multiple:!1,value:u?.id,render:({open:t})=>(0,n.createElement)(r.ToolbarButton,{label:u?.id?(0,e.__)("Change logo","carbon-blocks"):(0,e.__)("Pick a logo","carbon-blocks"),icon:s,onClick:t})})))),u?.id?(0,n.createElement)("img",{src:u.url,alt:u.caption}):(0,n.createElement)("img",{src:o,alt:"Placeholder image for a logo"}))},save:function(e){const{attributes:t}=e,{logo:r}=t,c=i.useBlockProps.save();return(0,n.createElement)(Ye,{blockProps:c},r?.id?(0,n.createElement)("img",{src:r.url,alt:r.caption}):(0,n.createElement)("img",{src:o,alt:"Placeholder image for a logo"}))}})}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){for(var[n,i,r]=e[u],s=!0,M=0;M<n.length;M++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](n[M])))?n.splice(M--,1):(s=!1,r<c&&(c=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={7921:0,353:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[c,s,M]=n,l=0;if(c.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(M)var u=M(o)}for(t&&t(n);l<c.length;l++)r=c[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[353],(()=>o(4163)));i=o.O(i)})();