const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};u();console.log("Test");let a=document.getElementById("hambergur"),r=document.getElementById("nav-items"),s=document.querySelector("#ham-menu-close"),d=document.querySelector("#ham-menu"),m=document.querySelector("#main");a.addEventListener("click",function(i){r.classList.toggle("left-960"),r.classList.toggle("left-0"),d.classList.toggle("hidden"),s.classList.toggle("hidden"),s.classList.toggle("block"),m.classList.toggle("pe-none")});