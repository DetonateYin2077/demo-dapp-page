(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7122:function(e,t,l){Promise.resolve().then(l.bind(l,2441))},2441:function(e,t,l){"use strict";l.r(t);var n=l(5862),r=l(7058),s=l(9010),i=l(5685);t.default=()=>{let[e,t]=(0,r.useState)(null),[l,a]=(0,r.useState)(null),[o,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(""),[h,x]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{let[e]=(0,s.JZ)(),l=await e;x(l);let{available:n,accessGranted:r}=l;t(n),a(r)})();let e=(0,s.on)("biometry_auth_requested",e=>{let{status:t,token:l}=e;console.log("Biometry authentication request complete:",t,l)}),l=(0,s.on)("biometry_info_received",e=>{if(e.available){let{available:t,access_requested:l,access_granted:n,device_id:r,token_saved:s,type:i}=e;console.log("Biometry settings were received:",t,l,n,r,s,i)}else console.log("Biometry settings were received:",e.available)});return()=>{e(),l()}},[]);let y=async()=>{if(console.log("生物识别：".concat(e)),e)try{await h.requestAccess({reason:"reason"})&&(console.log("用户已授权"),t(!0))}catch(e){return console.error("生物识别发生错误:",e),t(!1),!1}else t(!1);return e},f=async()=>{if(!e){alert("功能不支持");return}try{await h.updateToken({token:o}),alert("内容已保存")}catch(e){console.error("保存失败:",e)}},j=async()=>{if(!e){alert("功能不支持");return}try{await h.updateToken({token:""}),d(""),alert("内容已清除")}catch(e){console.error("清除失败:",e)}},p=async()=>{if(!e){alert("功能不支持");return}try{let e=await h.authenticate({reason:"Please!"});e||alert("未找到生物识别数据"),d(null!=e?e:"")}catch(e){console.error("读取失败:",e)}};return(0,n.jsx)(i.h7,{children:(0,n.jsxs)("div",{style:{padding:"20px"},children:[(0,n.jsx)(i.Dx,{level:"1",style:{marginBottom:"20px"},children:"生物识别测试"}),(0,n.jsx)(i.gR,{style:{marginTop:"10px"},children:"注意：生物识别需要在 iOS 或者 Android 应用中配置生物识别功能"}),(0,n.jsx)(i.iz,{}),(0,n.jsxs)(i.aV,{children:[(0,n.jsx)(i.zx,{stretched:!0,disabled:null!==e,mode:null===e?"bezeled":e?"filled":"white",onClick:async()=>{y()},children:null===e?"检测生物识别检测":e?"支持生物识别":"不支持生物识别"}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.II,{placeholder:"请输入要保存的内容",value:o,onChange:e=>c(e.target.value)}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,n.jsx)(i.zx,{size:"l",onClick:f,children:"保存"}),(0,n.jsx)(i.zx,{size:"l",onClick:p,children:"读取"}),(0,n.jsx)(i.zx,{size:"l",onClick:j,children:"清除"})]}),u&&(0,n.jsx)(i.$0,{children:(0,n.jsxs)(i.xv,{size:20,style:{marginTop:"10px"},children:["读取内容: ",u]})})]})]})]})})}}},function(e){e.O(0,[845,158,660,744],function(){return e(e.s=7122)}),_N_E=e.O()}]);