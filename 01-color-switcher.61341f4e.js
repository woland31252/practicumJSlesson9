!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1,console.log("START!!!")})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0,console.log("STOP!!")}))}();
//# sourceMappingURL=01-color-switcher.61341f4e.js.map