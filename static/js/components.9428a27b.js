(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components"],{c853:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),l=Object(n["createTextVNode"])(" 封装的Dialog "),r=Object(n["createTextVNode"])("打开Dialog");function c(e,t,o,c,a,i){var u=Object(n["resolveComponent"])("ProDialog"),s=Object(n["resolveComponent"])("el-button");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(u,{value:c.visible,"onUpdate:value":t[1]||(t[1]=function(e){return c.visible=e}),title:"title",onBeforeClose:c.handleClose},{default:Object(n["withCtx"])((function(){return[l]})),_:1},8,["value","onBeforeClose"]),Object(n["createVNode"])(s,{style:{display:"block",margin:"20px auto"},type:"primary",onClick:t[2]||(t[2]=function(e){return c.visible=!0})},{default:Object(n["withCtx"])((function(){return[r]})),_:1})])}var a=o("5271"),i={name:"ProDialogPage",components:{ProDialog:a["a"]},setup:function(){var e=Object(n["ref"])(!1);function t(e){console.log(e)}return{visible:e,handleClose:t}}};i.render=c;t["default"]=i}}]);