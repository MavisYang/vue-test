webpackJsonp([2],{SZ9s:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"register",data:function(){return{params:{userName:"",phone:""}}},props:{},methods:{submitFunc:function(){var e=this.params.userName,a=this.params.phone;""!=e&&""!=a&&/^1\d{10}/.test(a)?console.log(this.params,"params"):alert("格式不正确")}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"ym-register-view"},[t("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.params.userName,expression:"params.userName",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",name:"userName",placeholder:"请输入用户名"},domProps:{value:e.params.userName},on:{change:function(a){e.$set(e.params,"userName",a.target.value.trim())},blur:function(a){e.$forceUpdate()}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.params.phone,expression:"params.phone",modifiers:{lazy:!0}}],attrs:{maxlength:"11",type:"text",name:"phone",placeholder:"请输入手机号"},domProps:{value:e.params.phone},on:{change:function(a){e.$set(e.params,"phone",a.target.value)}}}),e._v(" "),t("button",{staticClass:"btn",on:{click:e.submitFunc}},[e._v("提交")])])},staticRenderFns:[]};var n=t("VU/8")(r,s,!1,function(e){t("ewzL")},"data-v-67332951",null);a.default=n.exports},ewzL:function(e,a){}});
//# sourceMappingURL=2.2e398c23124aedb84428.js.map