(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9235,368],{531:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library/ethers-no-socials",function(){return n(65176)}])},65176:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=n(97458),s=n(15860),r=n(53840),a=n(36346),o=n(49636),c=n(62352),l=n(96378),u=n(81109),g=n(39009),d=n(26913);let h=new u.w6,w=(0,a.cz)({adapters:[h],networks:[d.yX,d.RJ,d.v4,d.yu,d.jM,d.Fo],defaultNetwork:d.RJ,projectId:c.bq.ProjectId,features:{analytics:!0,socials:[]},siweConfig:g.s});function p(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.v,{}),(0,i.jsx)(l.p,{}),(0,i.jsx)(s.v,{})]})}o.i.setModal(w)},39009:function(t,e,n){"use strict";n.d(e,{s:function(){return o}});var i=n(56408),s=n(50368),r=n(26913);let a=[r.RJ,r.v4,r.yu,r.jM,r.yX,r.Fo],o=(0,s.ui)({signOutOnAccountChange:!0,signOutOnNetworkChange:!0,getMessageParams:async()=>({domain:window.location.host,uri:window.location.origin,chains:a.map(t=>t.chainId),statement:"Please sign with your account",iat:new Date().toISOString()}),createMessage:t=>{let{address:e,...n}=t;return(0,s.wv)(n,e)},getNonce:async()=>{let t=await (0,i.getCsrfToken)();if(!t)throw Error("Failed to get nonce!");return t},getSession:async()=>{let t=await (0,i.getSession)();if(!t)throw Error("Failed to get session!");let{address:e,chainId:n}=t;return{address:e,chainId:n}},verifyMessage:async t=>{let{message:e,signature:n,cacao:s}=t;try{let t=await (0,i.signIn)("credentials",{message:e,redirect:!1,signature:n,callbackUrl:"/protected"});return!!(null==t?void 0:t.ok)}catch(t){return!1}},signOut:async()=>{try{return await (0,i.signOut)({redirect:!1}),!0}catch(t){return!1}}})},50368:function(t,e,n){"use strict";n.d(e,{SIWEController:function(){return o},ui:function(){return y},wv:function(){return u.wvx},getDidAddress:function(){return u.NmC},getDidChainId:function(){return u.ZzI}});var i=n(87874),s=n(74597),r=n(30817);let a=(0,s.sj)({status:"uninitialized"}),o={state:a,subscribeKey:(t,e)=>(0,i.VW)(a,t,e),subscribe:t=>(0,s.Ld)(a,()=>t(a)),_getClient(){if(!a._client)throw Error("SIWEController client not set");return a._client},async getNonce(t){let e=this._getClient(),n=await e.getNonce(t);return this.setNonce(n),n},async getSession(){try{let t=this._getClient(),e=await t.getSession();return e&&(this.setSession(e),this.setStatus("success")),e||void 0}catch{return}},createMessage(t){let e=this._getClient().createMessage(t);return this.setMessage(e),e},async verifyMessage(t){let e=this._getClient();return await e.verifyMessage(t)},async signIn(){let t=this._getClient();return await t.signIn()},async signOut(){let t=this._getClient();await t.signOut(),this.setStatus("ready"),this.setSession(void 0),t.onSignOut?.()},onSignIn(t){let e=this._getClient();e.onSignIn?.(t)},onSignOut(){let t=this._getClient();t.onSignOut?.()},async setSIWEClient(t){a._client=(0,s.iH)(t),a.session=await this.getSession(),a.status=a.session?"success":"ready",r.RY.setAccountProp("siweStatus",a.status,"eip155"),r.OptionsController.setIsSiweEnabled(t.options.enabled)},setNonce(t){a.nonce=t},setStatus(t){a.status=t,r.RY.setAccountProp("siweStatus",a.status,"eip155")},setMessage(t){a.message=t},setSession(t){a.session=t,a.status=t?"success":"ready",r.RY.setAccountProp("siweStatus",a.status,"eip155")}};var c=n(74652);class l{constructor(t){let{enabled:e=!0,nonceRefetchIntervalMs:n=3e5,sessionRefetchIntervalMs:i=3e5,signOutOnAccountChange:s=!0,signOutOnDisconnect:r=!0,signOutOnNetworkChange:a=!0,...o}=t;this.options={enabled:e,nonceRefetchIntervalMs:n,sessionRefetchIntervalMs:i,signOutOnDisconnect:r,signOutOnAccountChange:s,signOutOnNetworkChange:a},this.methods=o}async getNonce(t){let e=await this.methods.getNonce(t);if(!e)throw Error("siweControllerClient:getNonce - nonce is undefined");return e}async getMessageParams(){return await this.methods.getMessageParams?.()||{}}createMessage(t){let e=this.methods.createMessage(t);if(!e)throw Error("siweControllerClient:createMessage - message is undefined");return e}async verifyMessage(t){return await this.methods.verifyMessage(t)}async getSession(){let t=await this.methods.getSession();if(!t)throw Error("siweControllerClient:getSession - session is undefined");return t}async signIn(){if(!o.state._client)throw Error("SIWE client needs to be initialized before calling signIn");let t=r.RY.state.activeCaipAddress,e=t?r.j1.getPlainAddress(t):"",n=await this.methods.getNonce(e);if(!e)throw Error("An address is required to create a SIWE message.");let i=r.RY.state.activeCaipNetwork;if(!i?.id)throw Error("A chainId is required to create a SIWE message.");let s=c.p1.caipNetworkIdToNumber(i.id);if(!s)throw Error("A chainId is required to create a SIWE message.");let a=o.state._client?.options.signOutOnNetworkChange;a&&(o.state._client.options.signOutOnNetworkChange=!1,await this.signOut()),a&&(o.state._client.options.signOutOnNetworkChange=!0);let l=await this.getMessageParams?.(),u=this.methods.createMessage({address:t,chainId:Number(s),nonce:n,version:"1",iat:l?.iat||new Date().toISOString(),...l});"AUTH"===r.MO.getConnectedConnector()&&r.RouterController.pushTransactionStack({view:null,goBack:!1,replace:!0,onSuccess(){r.IN.close()}});let g=await r.ConnectionController.signMessage(u);if(!await this.methods.verifyMessage({message:u,signature:g}))throw Error("Error verifying SIWE signature");let d=await this.methods.getSession();if(!d)throw Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(d),d}async signOut(){return this.methods.onSignOut?.(),this.methods.signOut()}}var u=n(38301),g=n(67670),d=n(32216),h=(0,d.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let w=class extends d.oi{constructor(){super(...arguments),this.dappImageUrl=r.OptionsController.state.metadata?.icons,this.walletImageUrl=r.AccountController.state.connectedWalletInfo?.icon}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return(0,d.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};w.styles=h,w=function(t,e,n,i){var s,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,n,a):s(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a}([(0,g.customElement)("w3m-connecting-siwe")],w);var p=n(44315),f=n(2825),C=function(t,e,n,i){var s,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,n,a):s(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};let S=class extends d.oi{constructor(){super(...arguments),this.dappName=r.OptionsController.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return(0,d.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,r.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:r.AccountController.state.preferredAccountType===f.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{o.setStatus("loading");let t=await o.signIn();return o.setStatus("success"),r.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:r.AccountController.state.preferredAccountType===f.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),t}catch(e){let t=r.AccountController.state.preferredAccountType===f.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return t?r.SnackController.showError("This application might not support Smart Accounts"):r.SnackController.showError("Signature declined"),o.setStatus("error"),r.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,r.RY.state.activeCaipAddress?(await r.ConnectionController.disconnect(),r.IN.close()):r.RouterController.push("Connect"),this.isCancelling=!1,r.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:r.AccountController.state.preferredAccountType===f.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};function y(t){return new l(t)}C([(0,p.SB)()],S.prototype,"isSigning",void 0),C([(0,p.SB)()],S.prototype,"isCancelling",void 0),C([(0,g.customElement)("w3m-connecting-siwe-view")],S)}},function(t){t.O(0,[2361,4720,3669,580,2728,12,7872,4953,5397,348,2888,9774,179],function(){return t(t.s=531)}),_N_E=t.O()}]);