(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3139],{29083:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library/wagmi-permissions-sync",function(){return i(90979)}])},90979:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return tl}});var s=i(97458),r=i(36346),n=i(12467),o=i(86256),a=i(31213),c=i(53840),l=i(49636),u=i(62352),d=i(89192),h=i(52876),f=i(25341),p=i(72365),y=i(74631),x=i(44584),m=i(5451),w=i(11098),g=i(3494),b=i(88944),k=i(35465),j=i(52983),v=i(38966),P=i(79879),I=i(99355),E=i(86228),S=i(41211),L=i(29290);let N=(0,j.createContext)({passkey:void 0,isPasskeyAvailable:!1,passkeyId:"",setPasskey:function(){console.warn("PasskeyContext used outside of provider")}});function O(t){let{children:e}=t,[i,r]=(0,L.R)(S.Sf,void 0),[n,o]=(0,j.useState)(!1),[a,c]=(0,j.useState)("");return(0,j.useEffect)(()=>{i&&(o(!0),c(i.id))},[i]),(0,s.jsx)(N.Provider,{value:{passkey:i,isPasskeyAvailable:n,passkeyId:a,setPasskey:function(t){(0,S.D$)(S.Sf,""),r(t),o(!1)}},children:e})}function C(){let t=(0,j.useContext)(N);if(!t)throw Error("usePasskey must be used within a PasskeyContext");return t}var B=i(11962),K=i(75223),A=i(90398),U=i(43939),_=i(553),R=i(6274);async function z(t){let e=(0,R.DW)(new Uint8Array(t)),i=(0,R.xj)(e),s=await (0,R.ke)(i);return function(t){let e="string"==typeof t?(0,R.nr)(t):t,i=65===e.length?1:0,s=e.slice(i,32+i),r=e.slice(32+i,64+i);return{prefix:65===e.length?e[0]:void 0,x:BigInt((0,R.ci)(s)),y:BigInt((0,R.ci)(r))}}(await (0,R.QN)(s))}var T=i(91895);function D(){let{provider:t,supported:e}=(0,B.C)({method:E.nf.WALLET_GRANT_PERMISSIONS}),{address:i,isConnected:n}=(0,r.Tj)(),{chain:o}=(0,b.m)();return n&&t&&i&&o?e?(0,s.jsx)(X,{chain:o,provider:t,address:i}):(0,s.jsx)(w.x,{fontSize:"md",color:"yellow",children:"Wallet does not support wallet_grantPermissions rpc method"}):(0,s.jsx)(w.x,{fontSize:"md",color:"yellow",children:"Wallet not connected"})}function X(t){let{chain:e,provider:i,address:r}=t,[n,o]=(0,j.useState)(!1),{passkey:a}=C(),{grantedPermissions:c,clearGrantedPermissions:l,grantPermissions:u}=(0,K.S)(),d=(0,v.p)(),h=(0,j.useCallback)(async()=>{o(!0);try{if(!r)throw Error("No account address available, Please connect your wallet.");if(!a)throw Error("Passkey not available");if(!i)throw Error("No Provider available, Please connect your wallet.");let t=(0,P.K)({account:r,chain:e,transport:(0,I.P)(i)}).extend((0,k.l)()),s=a;s={...s,publicKey:{prefix:s.publicKey.prefix,x:BigInt(s.publicKey.x),y:BigInt(s.publicKey.y)}};let n=function(t,e={}){let{compressed:i=!1,to:s="hex"}=e,r=Uint8Array.from([...t.prefix&&!i?[t.prefix]:[],...(0,_.tL)(t.x,32),...(0,_.tL)(t.y,32)]);return"hex"===s?(0,R.ci)(r):r}(s.publicKey,{to:"hex"}),o=(0,U.tp)(),c=await u(t,{permissions:o,signerKey:{key:n,type:T.yu.secp256r1}});d({type:"success",title:"Permissions Granted",description:JSON.stringify(c.approvedPermissions,A.d)})}catch(t){d({type:"error",title:"Request Permissions Errors",description:t instanceof Error?t.message:"Unknown Error"})}finally{o(!1)}},[a,i,r,e,u,d]);return(0,s.jsxs)(y.K,{direction:["column","column","row"],children:[(0,s.jsx)(g.z,{"data-testid":"request-permissions-button",onClick:h,isDisabled:!!(n||c),isLoading:n,children:"Request Permissions"}),(0,s.jsx)(g.z,{"data-test-id":"clear-permissions-button",onClick:l,isDisabled:!c,children:"Clear Permissions"})]})}var F=i(18394),q=i(13637),H=i(86802),M=i(3766),W=i(50554),J=i(20216);function G(){var t;let{passkeyId:e}=C(),{grantedPermissions:i,pci:r}=(0,K.S)(),{data:n,refetch:o,isLoading:a,isRefetching:c}=(0,q.u)({abi:W.M,address:W.L,functionName:"getBalance",args:[(null==i?void 0:null===(t=i.signerData)||void 0===t?void 0:t.submitToAddress)||"0x"]}),[l,u]=(0,j.useState)(!1),d=(0,v.p)();async function h(){u(!0);try{if(!i)throw Error("No permissions available");if(!r)throw Error("No WC cosigner data(PCI) available");let t=(0,H.R)({abi:W.M,functionName:"purchase",args:[1]}),s=[{to:W.L,value:(0,M.f)("0.0001"),data:t}],n=await (0,U.Vp)({actions:s,chain:J.F,passkeyId:e,permissions:i,pci:r});n&&(d({title:"UserOp submitted successfully",description:"UserOp Hash: ".concat(n),type:"success"}),await o())}catch(t){d({title:"Transaction Failed",description:"".concat(t),type:"error"})}u(!1)}return i?(0,s.jsxs)(y.K,{direction:["column","column","row"],children:[(0,s.jsx)(g.z,{isDisabled:!i,isLoading:l,onClick:h,children:"Purchase Donut"}),(0,s.jsx)(F.k,{alignItems:"center",children:a||c?(0,s.jsx)(w.x,{children:"Fetching donuts..."}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.x,{marginRight:"5px",children:"Crypto donuts left:"}),(0,s.jsx)(w.x,{children:null==n?void 0:n.toString()})]})})]}):(0,s.jsx)(w.x,{fontSize:"md",color:"yellow",children:"Dapp does not have the permissions"})}var V=i(79815),Z=i(46599),Q=i(37058);let $=Uint8Array.from([105,171,180,181,160,222,75,198,42,42,32,31,141,37,186,233]);async function Y(t){let{createFn:e=window.navigator.credentials.create.bind(window.navigator.credentials),...i}=t,s=function(t){let{challenge:e=$,excludeCredentialIds:i,name:s,rp:r={id:window.location.hostname,name:window.document.title},user:n}=t,o=n?.name??s;return{publicKey:{attestation:"none",authenticatorSelection:{authenticatorAttachment:"platform",residentKey:"preferred",requireResidentKey:!1,userVerification:"required"},challenge:e,...i?{excludeCredentials:i?.map(t=>({id:R.xj(t),type:"public-key"}))}:{},pubKeyCredParams:[{type:"public-key",alg:-7}],rp:r,user:{id:n?.id??(0,Z.fr)((0,Q.O0)(o)),name:o,displayName:n?.displayName??o}}}}(i);try{let t=await e(s);if(!t)throw Error("credential creation failed.");let i=await z(new Uint8Array(t.response.getPublicKey()));return{id:t.id,publicKey:i}}catch(t){throw Error("credential creation failed.",{cause:t})}}function tt(){let{isPasskeyAvailable:t,setPasskey:e,passkeyId:i}=C(),r=(0,v.p)();async function n(){try{let t=await Y({name:"Session key"});e(t),r({type:"success",title:"Passkey created succesfully",description:""})}catch(t){r({type:"error",title:"Unable to create passkey",description:"Reason ".concat(t)})}}return(0,j.useEffect)(()=>{let t=(0,S.le)(S.aK);t&&(0,V.L)(t)},[]),(0,s.jsxs)(y.K,{direction:["column","column","row"],align:"center",children:[(0,s.jsx)(g.z,{"data-testid":"sign-message-button",onClick:n,children:"Create New Passkey"}),t&&i&&(0,s.jsxs)("div",{children:["Passkey Id: ",i]})]})}function te(){return(0,s.jsxs)(d.Z,{marginTop:10,marginBottom:10,children:[(0,s.jsx)(h.O,{children:(0,s.jsx)(f.X,{size:"md",children:"Test Interactions"})}),(0,s.jsx)(p.e,{children:(0,s.jsxs)(y.K,{divider:(0,s.jsx)(x.c,{}),spacing:"4",children:[(0,s.jsxs)(m.xu,{children:[(0,s.jsx)(f.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"New Passkey"}),(0,s.jsx)(tt,{})]}),(0,s.jsxs)(m.xu,{children:[(0,s.jsx)(f.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Request Permissions"}),(0,s.jsx)(D,{})]}),(0,s.jsxs)(m.xu,{children:[(0,s.jsx)(f.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Purchase Donut With Permissions"}),(0,s.jsx)(G,{})]})]})})]})}var ti=i(26913),ts=i(34343),tr=i(47229);let tn=new n.S,to=[ti.RJ,ti.v4,ti.yu,ti.jM,ti.yX,ti.Fo],ta=new ts.Ks({ssr:!0,networks:to,projectId:u.bq.ProjectId}),tc=(0,r.cz)({adapters:[ta],networks:to,defaultNetwork:ti.RJ,projectId:u.bq.ProjectId,features:{analytics:!0},termsConditionsUrl:"https://reown.com/terms-of-service",privacyPolicyUrl:"https://reown.com/privacy-policy"});function tl(){return(0,s.jsx)(a.F,{config:ta.wagmiConfig,children:(0,s.jsx)(o.aH,{client:tn,children:(0,s.jsx)(tr.L,{children:(0,s.jsxs)(O,{children:[(0,s.jsx)(c.v,{}),(0,s.jsx)(te,{})]})})})})}l.i.setModal(tc)},25714:function(t,e,i){"use strict";i.d(e,{EP:function(){return a},SD:function(){return l},Vl:function(){return o},gm:function(){return c},mk:function(){return u}});let s=BigInt(4294967296-1),r=BigInt(32);function n(t,e=!1){return e?{h:Number(t&s),l:Number(t>>r&s)}:{h:0|Number(t>>r&s),l:0|Number(t&s)}}function o(t,e=!1){let i=new Uint32Array(t.length),s=new Uint32Array(t.length);for(let r=0;r<t.length;r++){let{h:o,l:a}=n(t[r],e);[i[r],s[r]]=[o,a]}return[i,s]}let a=(t,e,i)=>t<<i|e>>>32-i,c=(t,e,i)=>e<<i|t>>>32-i,l=(t,e,i)=>e<<i-32|t>>>64-i,u=(t,e,i)=>t<<i-32|e>>>64-i;e.ZP={fromBig:n,split:o,toBig:(t,e)=>BigInt(t>>>0)<<r|BigInt(e>>>0),shrSH:(t,e,i)=>t>>>i,shrSL:(t,e,i)=>t<<32-i|e>>>i,rotrSH:(t,e,i)=>t>>>i|e<<32-i,rotrSL:(t,e,i)=>t<<32-i|e>>>i,rotrBH:(t,e,i)=>t<<64-i|e>>>i-32,rotrBL:(t,e,i)=>t>>>i-32|e<<64-i,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:a,rotlSL:c,rotlBH:l,rotlBL:u,add:function(t,e,i,s){let r=(e>>>0)+(s>>>0);return{h:t+i+(r/4294967296|0)|0,l:0|r}},add3L:(t,e,i)=>(t>>>0)+(e>>>0)+(i>>>0),add3H:(t,e,i,s)=>e+i+s+(t/4294967296|0)|0,add4L:(t,e,i,s)=>(t>>>0)+(e>>>0)+(i>>>0)+(s>>>0),add4H:(t,e,i,s,r)=>e+i+s+r+(t/4294967296|0)|0,add5H:(t,e,i,s,r,n)=>e+i+s+r+n+(t/4294967296|0)|0,add5L:(t,e,i,s,r)=>(t>>>0)+(e>>>0)+(i>>>0)+(s>>>0)+(r>>>0)}},46599:function(t,e,i){"use strict";i.d(e,{fr:function(){return b}});var s=i(44659),r=i(25714),n=i(37058);let o=[],a=[],c=[],l=BigInt(0),u=BigInt(1),d=BigInt(2),h=BigInt(7),f=BigInt(256),p=BigInt(113);for(let t=0,e=u,i=1,s=0;t<24;t++){[i,s]=[s,(2*i+3*s)%5],o.push(2*(5*s+i)),a.push((t+1)*(t+2)/2%64);let r=l;for(let t=0;t<7;t++)(e=(e<<u^(e>>h)*p)%f)&d&&(r^=u<<(u<<BigInt(t))-u);c.push(r)}let[y,x]=(0,r.Vl)(c,!0),m=(t,e,i)=>i>32?(0,r.SD)(t,e,i):(0,r.EP)(t,e,i),w=(t,e,i)=>i>32?(0,r.mk)(t,e,i):(0,r.gm)(t,e,i);class g extends n.kb{constructor(t,e,i,r=!1,o=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=r,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,s.Rx)(i),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,n.Jq)(this.state)}keccak(){n.iA||(0,n.l1)(this.state32),function(t,e=24){let i=new Uint32Array(10);for(let s=24-e;s<24;s++){for(let e=0;e<10;e++)i[e]=t[e]^t[e+10]^t[e+20]^t[e+30]^t[e+40];for(let e=0;e<10;e+=2){let s=(e+8)%10,r=(e+2)%10,n=i[r],o=i[r+1],a=m(n,o,1)^i[s],c=w(n,o,1)^i[s+1];for(let i=0;i<50;i+=10)t[e+i]^=a,t[e+i+1]^=c}let e=t[2],r=t[3];for(let i=0;i<24;i++){let s=a[i],n=m(e,r,s),c=w(e,r,s),l=o[i];e=t[l],r=t[l+1],t[l]=n,t[l+1]=c}for(let e=0;e<50;e+=10){for(let s=0;s<10;s++)i[s]=t[e+s];for(let s=0;s<10;s++)t[e+s]^=~i[(s+2)%10]&i[(s+4)%10]}t[0]^=y[s],t[1]^=x[s]}i.fill(0)}(this.state32,this.rounds),n.iA||(0,n.l1)(this.state32),this.posOut=0,this.pos=0}update(t){(0,s.Gg)(this);let{blockLen:e,state:i}=this,r=(t=(0,n.O0)(t)).length;for(let s=0;s<r;){let n=Math.min(e-this.pos,r-s);for(let e=0;e<n;e++)i[this.pos++]^=t[s++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:i,blockLen:s}=this;t[i]^=e,(128&e)!=0&&i===s-1&&this.keccak(),t[s-1]^=128,this.keccak()}writeInto(t){(0,s.Gg)(this,!1),(0,s.aI)(t),this.finish();let e=this.state,{blockLen:i}=this;for(let s=0,r=t.length;s<r;){this.posOut>=i&&this.keccak();let n=Math.min(i-this.posOut,r-s);t.set(e.subarray(this.posOut,this.posOut+n),s),this.posOut+=n,s+=n}return t}xofInto(t){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,s.Rx)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,s.J8)(t,this),this.finished)throw Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:i,outputLen:s,rounds:r,enableXOF:n}=this;return t||(t=new g(e,i,s,n,r)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=r,t.suffix=i,t.outputLen=s,t.enableXOF=n,t.destroyed=this.destroyed,t}}let b=(0,n.hE)(()=>new g(136,1,32))}},function(t){t.O(0,[2361,4720,580,7677,4247,2918,5124,4953,2759,3980,2888,9774,179],function(){return t(t.s=29083)}),_N_E=t.O()}]);