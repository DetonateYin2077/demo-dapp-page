"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{50368:function(e,t,n){n.d(t,{SIWEController:function(){return o},ui:function(){return m},wv:function(){return u.wvx},getDidAddress:function(){return u.NmC},getDidChainId:function(){return u.ZzI}});var i=n(87874),s=n(74597),r=n(30817);let a=(0,s.sj)({status:"uninitialized"}),o={state:a,subscribeKey:(e,t)=>(0,i.VW)(a,e,t),subscribe:e=>(0,s.Ld)(a,()=>e(a)),_getClient(){if(!a._client)throw Error("SIWEController client not set");return a._client},async getNonce(e){let t=this._getClient(),n=await t.getNonce(e);return this.setNonce(n),n},async getSession(){try{let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t||void 0}catch{return}},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},async setSIWEClient(e){a._client=(0,s.iH)(e),a.session=await this.getSession(),a.status=a.session?"success":"ready",r.RY.setAccountProp("siweStatus",a.status,"eip155"),r.OptionsController.setIsSiweEnabled(e.options.enabled)},setNonce(e){a.nonce=e},setStatus(e){a.status=e,r.RY.setAccountProp("siweStatus",a.status,"eip155")},setMessage(e){a.message=e},setSession(e){a.session=e,a.status=e?"success":"ready",r.RY.setAccountProp("siweStatus",a.status,"eip155")}};var c=n(74652);class l{constructor(e){let{enabled:t=!0,nonceRefetchIntervalMs:n=3e5,sessionRefetchIntervalMs:i=3e5,signOutOnAccountChange:s=!0,signOutOnDisconnect:r=!0,signOutOnNetworkChange:a=!0,...o}=e;this.options={enabled:t,nonceRefetchIntervalMs:n,sessionRefetchIntervalMs:i,signOutOnDisconnect:r,signOutOnAccountChange:s,signOutOnNetworkChange:a},this.methods=o}async getNonce(e){let t=await this.methods.getNonce(e);if(!t)throw Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await this.methods.getMessageParams?.()||{}}createMessage(e){let t=this.methods.createMessage(e);if(!t)throw Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){let e=await this.methods.getSession();if(!e)throw Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){if(!o.state._client)throw Error("SIWE client needs to be initialized before calling signIn");let e=r.RY.state.activeCaipAddress,t=e?r.j1.getPlainAddress(e):"",n=await this.methods.getNonce(t);if(!t)throw Error("An address is required to create a SIWE message.");let i=r.RY.state.activeCaipNetwork;if(!i?.id)throw Error("A chainId is required to create a SIWE message.");let s=c.p1.caipNetworkIdToNumber(i.id);if(!s)throw Error("A chainId is required to create a SIWE message.");let a=o.state._client?.options.signOutOnNetworkChange;a&&(o.state._client.options.signOutOnNetworkChange=!1,await this.signOut()),a&&(o.state._client.options.signOutOnNetworkChange=!0);let l=await this.getMessageParams?.(),u=this.methods.createMessage({address:e,chainId:Number(s),nonce:n,version:"1",iat:l?.iat||new Date().toISOString(),...l});"AUTH"===r.MO.getConnectedConnector()&&r.RouterController.pushTransactionStack({view:null,goBack:!1,replace:!0,onSuccess(){r.IN.close()}});let g=await r.ConnectionController.signMessage(u);if(!await this.methods.verifyMessage({message:u,signature:g}))throw Error("Error verifying SIWE signature");let d=await this.methods.getSession();if(!d)throw Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(d),d}async signOut(){return this.methods.onSignOut?.(),this.methods.signOut()}}var u=n(38301),g=n(67670),d=n(32216),h=(0,d.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let w=class extends d.oi{constructor(){super(...arguments),this.dappImageUrl=r.OptionsController.state.metadata?.icons,this.walletImageUrl=r.AccountController.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,d.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};w.styles=h,w=function(e,t,n,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}([(0,g.customElement)("w3m-connecting-siwe")],w);var p=n(44315),C=n(2825),S=function(e,t,n,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};let f=class extends d.oi{constructor(){super(...arguments),this.dappName=r.OptionsController.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return(0,d.dy)`
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
    `}async onSign(){this.isSigning=!0,r.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:r.AccountController.state.preferredAccountType===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{o.setStatus("loading");let e=await o.signIn();return o.setStatus("success"),r.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:r.AccountController.state.preferredAccountType===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(t){let e=r.AccountController.state.preferredAccountType===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return e?r.SnackController.showError("This application might not support Smart Accounts"):r.SnackController.showError("Signature declined"),o.setStatus("error"),r.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:e}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,r.RY.state.activeCaipAddress?(await r.ConnectionController.disconnect(),r.IN.close()):r.RouterController.push("Connect"),this.isCancelling=!1,r.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:r.RY.state.activeCaipNetwork?.id||"",isSmartAccount:r.AccountController.state.preferredAccountType===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};function m(e){return new l(e)}S([(0,p.SB)()],f.prototype,"isSigning",void 0),S([(0,p.SB)()],f.prototype,"isCancelling",void 0),S([(0,g.customElement)("w3m-connecting-siwe-view")],f)}}]);