(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{5121:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/with-ethereum-provider",function(){return t(5531)}])},5173:function(n,e,t){"use strict";t.d(e,{FI:function(){return i},Qf:function(){return r},T_:function(){return s},ph:function(){return o}});let i={name:"WalletConnectModal Lab",description:"WalletConnectModal Laboratory",url:"lab.web3modal.com",icons:["https://walletconnect.com/_next/static/media/logo_mark.84dd8525.svg"]},o={requiredNamespaces:{eip155:{methods:["eth_sendTransaction","personal_sign"],chains:["eip155:1"],events:["chainChanged","accountsChanged"]}}},s={statement:"Connect to WalletConnectModal Lab"};function r(n,e){return{topic:n,chainId:"eip155:1",request:{method:"personal_sign",params:["0x48656c6c6f20576562334d6f64616c",e]}}}},5531:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var i=t(4246),o=t(7070),s=t(8574),r=t(2970),c=t(3753),a=t(6410),u=t(3888),l=t(5173),d=t(7378),f=t(7385),h=t(8663),p=t(1742);function g(){let[n,e]=(0,d.useState)(void 0),[t,g]=(0,d.useState)(!1),[m,w]=(0,d.useState)(!1),_=(0,a.nB)();async function x(){let n=await u.Gn.init({projectId:(0,h.f)(),showQrModal:!0,qrModalOptions:{themeMode:(0,h.g)()},chains:[1],methods:["eth_sendTransaction","personal_sign"],events:["connect","disconnect"]});n.session&&g(!0),e(n)}async function E(){if(n)try{await n.connect(),g(!0),f.G.open("Connect",JSON.stringify(n.session,null,2))}catch(e){let n=(0,p.e)(e);(0,p.E)(n)}else(0,p.E)("providerClient is not initialized")}async function C(){if(!m){if(n){w(!0);try{await n.disconnect()}catch(e){let n=(0,p.e)(e);(0,p.E)(n)}w(!1),g(!1)}else(0,p.E)("providerClient is not initialized")}}async function y(){if(null==n?void 0:n.session)try{let{request:e}=(0,l.Qf)(n.session.topic,n.accounts[0]),t=await n.request(e);f.G.open("Sign Message",JSON.stringify(t,null,2))}catch(e){let n=(0,p.e)(e);(0,p.E)(n)}else(0,p.E)("providerClient is not initialized")}return(0,d.useEffect)(()=>{window.open=n=>{_.openTelegramLink(n),console.log("重载open")}},[]),(0,d.useEffect)(()=>{n&&n.on("disconnect",()=>{g(!1)})},[n]),(0,d.useEffect)(()=>{x()},[]),(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsx)(o.ZP,{css:{maxWidth:"400px",margin:"100px auto"},variant:"bordered",children:(0,i.jsx)(o.ZP.Body,{css:{justifyContent:"center",alignItems:"center",height:"200px"},children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{shadow:!0,color:"primary",onPress:y,children:"Sign Message"}),(0,i.jsx)(r.Z,{}),(0,i.jsx)(s.ZP,{shadow:!0,color:"error",onPress:C,disabled:m,children:m?(0,i.jsx)(c.ZP,{size:"xs",color:"white"}):"Disconnect"})]}):(0,i.jsx)(s.ZP,{shadow:!0,color:"primary",onPress:E,children:"Connect"})})})})}},1742:function(n,e,t){"use strict";t.d(e,{E:function(){return o},e:function(){return s}});var i=t(4496);function o(n){i.C.error(n,{duration:2e3})}function s(n){return n instanceof Error?n.message:"Something went wrong..."}},1586:function(){}},function(n){n.O(0,[673,670,970,774,888,179],function(){return n(n.s=5121)}),_N_E=n.O()}]);