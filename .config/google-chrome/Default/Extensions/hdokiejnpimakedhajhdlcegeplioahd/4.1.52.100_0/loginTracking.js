LPTabState=function(){var e={},t=null;LPPlatform.onTabClosed(function(t){delete e[t]}),Topics.get(Topics.CLEAR_DATA).subscribe(function(){e={}});var r=function(e){this.tabID=e.tabID,this.domain=lp_gettld_url(e.tabURL),this.sites=[],this.acccountsVersion=null,this.usernameField=null,this.username=null};r.prototype.getSites=function(){if(this.acccountsVersion!==g_local_accts_version){this.sites=[];var e=getsites(this.domain);for(var t in e)this.sites.push(g_sites[t]);this.acccountsVersion=g_local_accts_version}return this.sites},r.prototype.getFields=function(){var e=[];this.passwordForm&&(e=this.passwordForm.getFields());var t=this.getUsernameField();if(t&&t.value===this.getUsername()){0===e.filter(function(e){return e.name===t.name&&e.value===t.value}).length&&e.unshift(t)}return e.filter(function(e){return e.id||e.attributes.name})},r.prototype.getUsernameField=function(){if(!this.usernameField)for(var t in e){var r=e[t];if(r.usernameField&&compare_tlds(r.domain,this.domain)){this.usernameField=r.usernameField;break}}return this.usernameField},r.prototype.setUsernameField=function(e){e&&(this.usernameField=e)},r.prototype.setUsername=function(e){e&&(this.username=e)},r.prototype.getUsername=function(){if(!this.username&&this.passwordForm&&(this.username=this.passwordForm.getUsername()),!this.username)for(var t in e){var r=e[t];if(r.username&&compare_tlds(r.domain,this.domain)){this.username=r.username;break}}return this.username};var s=function(e,t){switch(t.transitionType){case"auto_subframe":case"manual_subframe":return!1}return t.transitionQualifiers.indexOf("from_address_bar")>-1||t.transitionQualifiers.indexOf("forward_back")>-1};r.prototype.processPasswordSubmit=function(e,t){this.passwordForm=new LPFormParser.FormParser(this,e),this.setUsernameField(this.passwordForm.getUsernameField()),this.setUsername(this.passwordForm.getUsername()),e.generatedPassword?this.generatedPassword=e.generatedPassword:LPPlatform.once(LPPlatform.onTransition,function(e){s(0,e)&&this.clear()},this)},r.prototype.processTextSubmit=function(e,t){var r=new LPFormParser.FormParser(this,e,{strict:!0});this.setUsernameField(r.getUsernameField()),this.setUsername(r.getUsername())},r.prototype.getMatchingSites=function(){var e=this,t=e.getSites();if(e.getUsername())t=t.filter(function(t){return LPUtils.SiteParser.hasMatchingSiteUserName(t,e.getUsername())});else{var r=e.passwordForm&&e.passwordForm.getOriginalPassword();r&&(t=t.filter(function(e){return null!==LPUtils.SiteParser.findMatchingSitePassword(e,r)})),0===t.length&&(t=e.getSites())}return t},r.prototype.shouldShowSiteNotification=function(){if(this.passwordForm&&this.passwordForm.succeeded())return this.passwordForm.isChangePasswordForm()?Preferences.get("showChangeNotificationBar"):Preferences.get("showSaveNotificationBar")};var a=function(){var e=function(e){var t="";return e.forEach(function(e){t+=e.formname+"\t"+encodeURIComponent(e.name)+"\t"+encodeURIComponent(crypto_btoa(e.value))+"\t"+encodeURIComponent(e.type)+"\n"}),bin2hex(t)};return function(t,r){if(r.length>0){t.fields=t.fields.concat(r),g_local_accts_version++,rewritelocalfile();var s={data:e(r),ref:url2hex(t.url),updatefields:1,aid:t.aid};t.sharedfolderid&&(s.sharedfolderid=t.sharedfolderid),t.postdata=new PostParams(s).toString(),t.posturl=base_url+"gm_deliver.php",t.newvalues=r,updateFieldsFromSubmit(t.postdata,t)}}}(),i=function(e){return{name:e.attributes.name||e.id,type:e.type,value:e.value,formname:""}},o=function(e,t){return t===e.unencryptedUsername?e.username:t===LPUtils.decrypt(e,e.password)?e.password:lpmenc_acct(t,!0,e,g_shares)};r.prototype.addFields=function(e){if(this.getUsername()){var t=this.getFields();e.forEach(function(e){if(e.fields){var r=[];t.forEach(function(t){var s=i(t);0===e.fields.filter(function(r){return r.name===s.name&&(!e.save_all||r.formname===t.formname)}).length&&r.push({otherfield:e.save_all,name:s.name,type:s.type,value:o(e,t.value),checked:!1,formname:e.save_all?t.formname:"",urid:"0",otherlogin:"0",url:""})}),a(e,r)}})}},r.prototype.getSiteNotificationData=function(e){if(this.passwordForm){var t={formSubmitted:this.passwordForm.submitted(),formSucceeded:this.passwordForm.succeeded()};if(this.shouldShowSiteNotification()){var r=this.passwordForm.getFormData(),s=this.getMatchingSites(),a=s.filter(function(e){return null!==LPUtils.SiteParser.findMatchingSitePassword(e,this.passwordForm.getPassword())},this);if(a.length>0)return this.addFields(a),this.clear({force:!0}),{};if(t.matchingSites=s.map(function(e){return e.aid}),t.defaultData={url:this.passwordForm.shouldSaveFields()?r.url:hostof(r.url),name:this.domain,unencryptedUsername:this.getUsername(),group:g_nofolder_feature_enabled?"":siteCats[this.domain],basic_auth:this.passwordForm.isBasicAuthentication()?"1":"0",realm:r.realm},t.dialogData={password:this.passwordForm.getPassword()},t.matchingSiteSameSubDomain=1===s.length&&hostof(s[0].url)===hostof(this.passwordForm.getFormData().url),t.sameDomain=compare_tlds(lp_gettld_url(this.passwordForm.getFormData().url),lp_gettld_url(e.tabURL)),t.generatedPassword=this.generatedPassword===this.passwordForm.getPassword(),this.passwordForm.shouldSaveFields()){this.getFields().length>0&&(t.dialogData.fields=this.getFields().map(i))}}else this.clear();return t}return{}},r.prototype.getFormSubmissionTabState=function(){for(var e=this;e;){if(e.passwordForm)return e;e=e.previousTabState}return this},r.prototype.getUsernames=function(){return this.getSites().map(function(e){return e.unencryptedUsername})},r.prototype.getSiteNotification=function(){var e=function(e,t,r){var s=e.getUsernames();t.forEachWindow({each:function(t,r){return t.LPContentScriptTools.findText({searches:s,callback:function(t){e.setUsername(t),r()}})},done:r})},t=function(t,r,s){var a=!1,i=LPTabs.get({tabID:t.tabID}),o=function(){if(t.passwordForm&&(t.passwordForm.succeeded()||t.passwordForm.succeeded(!a),t.passwordForm.succeeded()&&!t.passwordForm.getUsername()&&t.getSites().length>0))return void e(t,i,s);s()};if(r){var n=i.getFrame(r.frameID);n&&n.LPSiteNotification.formExists(t.passwordForm.getFormData(),function(e){a=e,o()})}else t.passwordForm.getFormData().top?i.getTop().LPSiteNotification.formExists(t.passwordForm.getFormData(),function(e){a=e,o()}):i.onFramesLoaded(function(){i.forEachFrame({each:function(e,r){return e.LPSiteNotification.formExists(t.passwordForm.getFormData(),function(e){a=a||e,r()})},done:o})})};return function(e,r){if(e.callback){var s=this.getFormSubmissionTabState(),a=function(){e.callback(s.getSiteNotificationData(r))};if(s.passwordForm&&s.passwordForm.getPassword()){if(s.domain===this.domain&&!s.passwordForm.isBasicAuthentication())return void t(s,e.source,a);s.passwordForm.succeeded(!0)}a()}}}(),r.prototype.clear=function(e){var t=e&&e.force,r=!0;return this.previousTabState&&(r=this.previousTabState.clear(e))&&delete this.previousTabState,this.passwordForm&&(this.passwordForm.getPassword()===this.generatedPassword&&(this.passwordForm.submitted(!1),r=!1),(r||t)&&(delete this.passwordForm,delete this.generatedPassword)),r},r.prototype.processBasicAuthentication=function(e){this.passwordForm=new LPFormParser.FormParser(this,{basicAuthentication:!0,url:e.url,realm:e.realm,username:e.username,password:e.password})};var n=function(e){if(!lploggedin)return!1;var t=lp_gettld_url(e.tabURL);if(LPContentScriptFeatures.new_save_site)return!hasNeverSave(e.tabURL,t)&&!lp_url_is_lastpass(e.tabURL)&&!lp_url_is_lastpassext(e.tabURL);var r=IntroTutorial.getState();return r.enabled&&r.domain===t},u=function(t,s){if(t){if(n(t)){var a=e[t.tabID];if(!a||!compare_tlds(a.domain,lp_gettld_url(t.tabURL))){var i=e[t.tabID]=new r(t);i.previousTabState=a,a=i}s(a)}}else LPPlatform.getCurrentTab(function(e){e&&u(e.tabDetails,s)})},d=function(e,t){u(t,function(r){r.processTextSubmit(e,t)})},c=function(e,t){u(t,function(r){r.processPasswordSubmit(e.formData,t),r.getSiteNotification({callback:e.callback,source:t},t)})};return{getSiteNotification:function(e,t){u(t,function(r){r.getSiteNotification(e,t)})},clear:function(e,t){u(t,function(t){t.clear(e)})},processPasswordSubmit:c,processTextSubmit:d,processBasicAuthentication:function(e,t){u(t,function(t){t.processBasicAuthentication(e)})},getState:function(e,t){var r={enabled:n(t)};r.enabled?u(t,function(t){r.usernames=t.getUsernames(),r.formSubmittedFrame=t.passwordForm&&!t.passwordForm.getFormData().top,e(r)}):e(r)},setCopiedGeneratedPassword:function(e){t=e},getCopiedGeneratedPassword:function(e){e(t)}}}();