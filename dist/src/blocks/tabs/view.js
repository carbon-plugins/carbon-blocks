document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-carbon-blocks-tabs").forEach((t=>{const e=JSON.parse(t.dataset.colors),o=t.querySelector("button:first-of-type"),r=t.querySelector("section:first-of-type");o.classList.add("is-active"),r.classList.add("is-active"),t.querySelectorAll("button").forEach((o=>{o.style.color=e.inactiveText,o.style.backgroundColor=e.inactiveBackground,o.style.borderBottom="none",o.addEventListener("click",(()=>{const r=o.dataset.id;t.querySelectorAll("button").forEach((t=>{t.classList.remove("is-active"),t.style.color=e.inactiveText,t.style.backgroundColor=e.inactiveBackground,t.style.borderBottom="none"})),t.querySelectorAll("section").forEach((t=>{t.classList.remove("is-active"),t.dataset.id==r&&(t.classList.add("is-active"),o.classList.add("is-active"),o.style.color=e.text,o.style.backgroundColor=e.background,o.style.borderBottom=`2px solid ${e.border}`)}))}))})),o.style.color=e.text,o.style.backgroundColor=e.background,o.style.borderBottom=`2px solid ${e.border}`}))}));