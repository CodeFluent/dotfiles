var ExtensionCreateAccountSimple=function(t){ExtensionCreateAccount.call(this,t,{views:[{selector:"#emailEntry",nextButtonText:Strings.translateString("Create Account")},{selector:"#mpEntry",nextButtonText:Strings.translateString("Unlock my Vault")}],additionalHeaderClasses:["icon"],nextButtonText:Strings.translateString("Create Account")})};ExtensionCreateAccountSimple.prototype=Object.create(ExtensionCreateAccount.prototype),ExtensionCreateAccountSimple.prototype.constructor=ExtensionCreateAccountSimple,function(){var t;ExtensionCreateAccountSimple.prototype.initialize=function(e){ExtensionCreateAccount.prototype.initialize.apply(this,arguments);var n=this;n.data.version="sso";new FieldToolTip({parentEl:e,isPopup:n.data.isPopup});t=new EmailToolTip({toolTipEl:e.find("#mpCurrentEmail"),parentEl:$("body"),emailField:n.inputFields.email,backActionFn:function(){n.showPreviousView()}}),$("body").addClass("login-background"),e.find("#signInBtn").bind("click",function(t){t.preventDefault(),bg.sendLpImprove("viewloginform",{version:n.data.version}),dialogs.loginSimple.open({isPopup:!1}),n.close(!0)}),ExtensionCreateAccount.prototype.setBackgroundOverlay(new BackgroundOverlay({parentEl:$("body")}))},ExtensionCreateAccountSimple.prototype.setNextView=function(e){ExtensionCreateAccount.prototype.setNextView.apply(this,arguments),t&&t.toggle(e>0)}}();