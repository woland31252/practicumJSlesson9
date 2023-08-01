const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",(function(){n=setInterval(`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,1e3),console.log("START!!!")})),e.addEventListener("click",(function(){clearInterval(n),console.log("STOP!!")}));
//# sourceMappingURL=01-color-switcher.110ed475.js.map
