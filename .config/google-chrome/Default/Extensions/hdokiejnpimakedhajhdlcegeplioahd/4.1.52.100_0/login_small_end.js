function shrink_on_remember(){var e=document.getElementById("logincontainer");if(e){var t=getComputedStyle(e);t&&"auto"!=t.height&&(document.body.parentNode.style.height=t.height,document.body.style.height=t.height)}fix_firefox_height()}function fix_firefox_height(){if(g_isfirefoxsdk){var e=document.getElementById("logincontainer");if(e){var t=getComputedStyle(e);t&&"auto"!=t.height&&getBG().resize_login_panel(400,parseInt(t.height))}}}document.title=gs("Login"),document.getElementById("lp_docwrite_login_small1")&&set_innertext(document.getElementById("lp_docwrite_login_small1"),gs("Your current settings require you to enter your LastPass password to complete this action.")),document.getElementById("lp_docwrite_login_small2")&&set_innertext(document.getElementById("lp_docwrite_login_small2"),gs("The version of Chrome you are currently running does not have HTML5 database support enabled.  As such, this login page will not remember your email and password, and other features such as automatic login on browser restart will not work.")+" "+gs("You may also be blocking all cookies, which causes Chrome to disallow HTML5 database access.")),document.getElementById("lp_docwrite_login_small3")&&set_innertext(document.getElementById("lp_docwrite_login_small3"),gs("Email")),document.getElementById("lp_docwrite_login_small4")&&set_innertext(document.getElementById("lp_docwrite_login_small4"),gs("Master Password")),document.getElementById("lp_docwrite_login_small5")&&set_innertext(document.getElementById("lp_docwrite_login_small5"),gs("Remember Email")),document.getElementById("lp_docwrite_login_small6")&&set_innertext(document.getElementById("lp_docwrite_login_small6"),gs("Remember Password")),document.getElementById("lp_docwrite_login_small7")&&set_innertext(document.getElementById("lp_docwrite_login_small7"),gs("Show Vault After Log in")),document.getElementById("lp_docwrite_login_small8")&&set_innertext(document.getElementById("lp_docwrite_login_small8"),gs("Do not re-prompt for ")),document.getElementById("lp_docwrite_login_small9")&&set_innertext(document.getElementById("lp_docwrite_login_small9"),"30 "+gs("seconds")),document.getElementById("lp_docwrite_login_small10")&&set_innertext(document.getElementById("lp_docwrite_login_small10"),"60 "+gs("seconds")),document.getElementById("lp_docwrite_login_small11")&&set_innertext(document.getElementById("lp_docwrite_login_small11"),"5 "+gs("minutes")),document.getElementById("lp_docwrite_login_small12")&&set_innertext(document.getElementById("lp_docwrite_login_small12"),"15 "+gs("minutes")),document.getElementById("lp_docwrite_login_small13")&&set_innertext(document.getElementById("lp_docwrite_login_small13"),"30 "+gs("minutes")),document.getElementById("lp_docwrite_login_small14")&&set_innertext(document.getElementById("lp_docwrite_login_small14"),"1 "+gs("hour")),document.getElementById("lp_docwrite_login_small15")&&set_innertext(document.getElementById("lp_docwrite_login_small15"),"3 "+gs("hours")),document.getElementById("lp_docwrite_login_small16")&&set_innertext(document.getElementById("lp_docwrite_login_small16"),"6 "+gs("hours")),document.getElementById("lp_docwrite_login_small25")&&set_innertext(document.getElementById("lp_docwrite_login_small25"),"8 "+gs("hours")),document.getElementById("lp_docwrite_login_small17")&&set_innertext(document.getElementById("lp_docwrite_login_small17"),"12 "+gs("hours")),document.getElementById("lp_docwrite_login_small18")&&set_innertext(document.getElementById("lp_docwrite_login_small18"),"24 "+gs("hours")),document.getElementById("login")&&set_innertext(document.getElementById("login"),gs("Log In")),document.getElementById("cancel")&&set_innertext(document.getElementById("cancel"),gs("Cancel")),document.getElementById("lp_docwrite_login_small21")&&set_innertext(document.getElementById("lp_docwrite_login_small21"),gs("I've forgotten my password.")),document.getElementById("lp_docwrite_login_small22")&&set_innertext(document.getElementById("lp_docwrite_login_small22"),gs("Screen Keyboard")),document.getElementById("lp_docwrite_login_small23")&&set_innertext(document.getElementById("lp_docwrite_login_small23"),gs("New to LastPass?")),document.getElementById("lp_docwrite_login_small23a")&&set_innertext(document.getElementById("lp_docwrite_login_small23a"),gs("Create an account now.")),document.getElementById("lp_docwrite_login_small24")&&set_innertext(document.getElementById("lp_docwrite_login_small24"),gs("Disable Chrome Password Manager")),document.getElementById("logintitletxt")&&set_innertext(document.getElementById("logintitletxt"),gs("Log In")),g_issafari||g_isopera?(document.getElementById("logoimg")&&(document.getElementById("logoimg").src="images/lp_signin_logo.png"),document.getElementById("deleteicon")&&(document.getElementById("deleteicon").src="images/cancel.png",document.getElementById("deleteicon").style.marginTop="-2px"),document.getElementById("keyboardicon")&&(document.getElementById("keyboardicon").src="images/keyboard.png",document.getElementById("screenkeyboardcontainer").style.top="4px")):g_isfirefoxsdk&&document.getElementById("deleteicon")&&(document.getElementById("deleteicon").style.position="relative",document.getElementById("deleteicon").style.top="5px"),document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){load()}),window.addEventListener("unload",function(){"function"==typeof reprompt_error_callback&&reprompt_error_callback()}),document.getElementById("f").onsubmit=function(){return!1},document.getElementById("u").addEventListener("focus",function(){glow(this)}),document.getElementById("u").addEventListener("blur",function(){dim(this),check_remember_password()}),document.getElementById("u").onchange=function(){username_changed()},document.getElementById("deleteicon").addEventListener("click",function(){delete_user()}),document.getElementById("p").addEventListener("focus",function(){glow(this)}),document.getElementById("p").addEventListener("blur",function(){dim(this)}),document.getElementById("p").onkeypress=function(e){return retsubmit(e)},document.getElementById("screenkeyboard").onclick=function(){return getBG().openURL(base_url+"?sk=1"),g_isfirefoxsdk&&closePop(),!1},document.getElementById("rememberemail").addEventListener("click",function(){this.checked||(document.getElementById("rememberpassword").checked=!1)}),document.getElementById("rememberpassword").addEventListener("click",function(){if(this.checked){this.checked=!1,LP_decimate_children(document.getElementById("rememberpasswordquestion")),document.getElementById("rememberpasswordquestion").appendChild(document.createTextNode(gs("Are you sure? Using 'remember password' makes it easier to forget your password and decreases your security if your device is infected or stolen."))),document.getElementById("rememberpasswordquestion").appendChild(document.createElement("br")),document.getElementById("rememberpasswordquestion").appendChild(document.createElement("br"));var e=document.createElement("input");e.setAttribute("type","button"),e.id="rememberpasswordyes",e.setAttribute("value",gs("Yes")),document.getElementById("rememberpasswordquestion").appendChild(e),e=document.createElement("input"),e.setAttribute("type","button"),e.id="rememberpasswordno",e.setAttribute("value",gs("No")),document.getElementById("rememberpasswordquestion").appendChild(e),document.getElementById("rememberpasswordquestion").appendChild(document.createElement("br")),document.getElementById("rememberpasswordquestion").appendChild(document.createElement("br")),document.getElementById("rememberpasswordquestion").style.display="block",document.getElementById("rememberpasswordyes").addEventListener("click",function(){document.getElementById("rememberpasswordquestion").style.display="none",document.getElementById("rememberemail").checked=document.getElementById("rememberpassword").checked=!0,shrink_on_remember()}),document.getElementById("rememberpasswordno").addEventListener("click",function(){document.getElementById("rememberpasswordquestion").style.display="none",document.getElementById("rememberpassword").checked=!1,shrink_on_remember()}),fix_firefox_height()}}),document.getElementById("showvault").addEventListener("click",function(){this.checked||(document.getElementById("showvault").checked=!1)}),document.getElementById("donotrepromptforsecs").addEventListener("change",function(){document.getElementById("donotrepromptfor").checked=this.selectedIndex>0}),document.getElementById("login").addEventListener("click",function(){do_submit()}),document.getElementById("cancel").addEventListener("click",function(e){void 0!==e&&e.preventDefault(),setTimeout(function(){closePop(),getBG().closecurrenttab("login.html")},0)}),document.getElementById("forgot").onclick=function(){return getBG().closecurrenttab("login.html"),getBG().openURL(getBG().g_forgotpwurl),closePop(),!1},document.getElementById("createaccount").onclick=function(){return-1==document.location.href.indexOf("inline=1")?document.location.href=getBG().getchromeurl("create_account.html"):(getBG().closecurrenttab("login.html"),getBG().openURL(getBG().getchromeurl("create_account.html")),closePop()),!1}}),g_isfirefoxsdk&&-1!=window.location.search.indexOf("isreprompt=1")&&setup_reprompt();