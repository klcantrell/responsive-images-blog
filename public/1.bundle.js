(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0);function i(e){var n=e.target,t=e.customText,i=void 0===t?void 0:t,o=document.createElement("div"),a="home"===n.toLowerCase()?"/":"/"+n.toLowerCase();return o.innerHTML="\n    <a href="+a+">\n      "+(i||n.split("").map(function(e,n){return 0===n?e.toUpperCase():e.toLowerCase()}).join(""))+"\n    </a>\n  ",{node:o.firstElementChild,markup:o.innerHTML,bindNav:function(e){return e.querySelector('[href="'+a+'"').addEventListener("click",function(e){e.preventDefault(),r.a.navigate(e.target.getAttribute("href"))}),e}}}},9:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return o});var r=t(3),i=Object(r.a)({target:"tasty",customText:"Ooh, please click me!"});function o(){var e=document.createElement("div");return e.innerHTML="\n    <div>\n      <h2>This is the home component!</h2>\n      "+i.markup+"\n    </div>\n  ",{node:i.bindNav(e.firstElementChild),markup:e.innerHTML}}}}]);