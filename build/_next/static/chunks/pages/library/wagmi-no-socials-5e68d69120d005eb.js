(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6965],{27733:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library/wagmi-no-socials",function(){return i(35195)}])},96551:function(n,e,i){"use strict";i.d(e,{K:function(){return x}});var t=i(97458);i(52983);var r=i(89192),s=i(52876),c=i(25341),d=i(72365),l=i(74631),u=i(44584),o=i(5451),a=i(11098);function x(n){let{address:e,chainId:i,clientId:x}=n;return(0,t.jsxs)(r.Z,{marginTop:10,marginBottom:10,children:[(0,t.jsx)(s.O,{children:(0,t.jsx)(c.X,{size:"md",children:"Account Information"})}),(0,t.jsx)(d.e,{children:(0,t.jsxs)(l.K,{divider:(0,t.jsx)(u.c,{}),spacing:"4",children:[(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(c.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Address"}),(0,t.jsx)(a.x,{"data-testid":"w3m-address",children:e})]}),(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(c.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Chain Id"}),(0,t.jsx)(a.x,{"data-testid":"w3m-chain-id",children:i})]}),x&&(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(c.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Relay Client ID"}),(0,t.jsx)(a.x,{"data-testid":"w3m-chain-id",children:x})]})]})})]})}},64460:function(n,e,i){"use strict";i.d(e,{P:function(){return l}});var t=i(97458),r=i(52983),s=i(88944),c=i(96551),d=i(36346);function l(){let{address:n,isConnected:e}=(0,d.Tj)(),{chainId:i,connector:l}=(0,s.m)(),[u,o]=r.useState(null);async function a(){if((null==l?void 0:l.type)==="walletConnect"){var n,e,i,t;let r=await (null==l?void 0:null===(n=l.getProvider)||void 0===n?void 0:n.call(l));return null==r?void 0:null===(t=r.client)||void 0===t?void 0:null===(i=t.core)||void 0===i?void 0:null===(e=i.crypto)||void 0===e?void 0:e.getClientId()}return null}return r.useEffect(()=>{a().then(o)},[l]),e?(0,t.jsx)(c.K,{address:n,chainId:i,clientId:u||void 0}):null}},35195:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var t=i(97458),r=i(36346),s=i(12467),c=i(86256),d=i(31213),l=i(53840),u=i(47919),o=i(49636),a=i(62352),x=i(26913),f=i(64460),j=i(34343);let h=new s.S,v=[x.RJ,x.v4,x.yu,x.jM,x.yX,x.Fo],p=new j.Ks({ssr:!0,networks:v,projectId:a.bq.ProjectId}),w=(0,r.cz)({adapters:[p],networks:v,defaultNetwork:x.RJ,projectId:a.bq.ProjectId,features:{analytics:!0,socials:[]}});function m(){return(0,t.jsx)(d.F,{config:p.wagmiConfig,children:(0,t.jsxs)(c.aH,{client:h,children:[(0,t.jsx)(l.v,{}),(0,t.jsx)(f.P,{}),(0,t.jsx)(u.r,{})]})})}o.i.setModal(w)}},function(n){n.O(0,[2361,4720,3669,580,7677,5021,4953,2759,7919,2888,9774,179],function(){return n(n.s=27733)}),_N_E=n.O()}]);