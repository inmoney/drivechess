(function(e){function t(e,t){if(!(e.originalEvent.touches.length>1)){e.preventDefault();var i=e.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(n)}}if(e.support.touch="ontouchend"in document,e.support.touch){var i,n=e.ui.mouse.prototype,o=n._mouseInit;n._touchStart=function(e){var n=this;!i&&n._mouseCapture(e.originalEvent.changedTouches[0])&&(i=!0,n._touchMoved=!1,t(e,"mouseover"),t(e,"mousemove"),t(e,"mousedown"))},n._touchMove=function(e){i&&(this._touchMoved=!0,t(e,"mousemove"))},n._touchEnd=function(e){i&&(t(e,"mouseup"),t(e,"mouseout"),this._touchMoved||t(e,"click"),i=!1)},n._mouseInit=function(){var t=this;t.element.bind("touchstart",e.proxy(t,"_touchStart")).bind("touchmove",e.proxy(t,"_touchMove")).bind("touchend",e.proxy(t,"_touchEnd")),o.call(t)}}})(jQuery),!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e,t=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(e in i)if(void 0!==t.style[e])return i[e]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t=function(t,i){this.options=i,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,i=e.Event("show");this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var i=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),i&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),i?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")}))},hide:function(t){t&&t.preventDefault(),t=e.Event("hide"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]===e.target||t.$element.has(e.target).length||t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,i=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(i),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=e.support.transition&&i;if(this.$backdrop=e('<div class="modal-backdrop '+i+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;n?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var i=e.fn.modal;e.fn.modal=function(i){return this.each(function(){var n=e(this),o=n.data("modal"),a=e.extend({},e.fn.modal.defaults,n.data(),"object"==typeof i&&i);o||n.data("modal",o=new t(this,a)),"string"==typeof i?o[i]():a.show&&o.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var i=e(this),n=i.attr("href"),o=e(i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=o.data("modal")?"toggle":e.extend({remote:!/#/.test(n)&&n},o.data(),i.data());t.preventDefault(),o.modal(a).one("hide",function(){i.focus()})})}(window.jQuery),!function(e){"use strict";function t(){e(n).each(function(){i(e(this)).removeClass("open")})}function i(t){var i,n=t.attr("data-target");return n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),i=n&&e(n),i&&i.length||(i=t.parent()),i}var n="[data-toggle=dropdown]",o=function(t){var i=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){i.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var n,o,a=e(this);return a.is(".disabled, :disabled")?void 0:(n=i(a),o=n.hasClass("open"),t(),o||n.toggleClass("open"),a.focus(),!1)},keydown:function(t){var o,a,r,s,l;if(/(38|40|27)/.test(t.keyCode)&&(o=e(this),t.preventDefault(),t.stopPropagation(),!o.is(".disabled, :disabled"))){if(r=i(o),s=r.hasClass("open"),!s||s&&27==t.keyCode)return 27==t.which&&r.find(n).focus(),o.click();a=e("[role=menu] li:not(.divider):visible a",r),a.length&&(l=a.index(a.filter(":focus")),38==t.keyCode&&l>0&&l--,40==t.keyCode&&a.length-1>l&&l++,~l||(l=0),a.eq(l).focus())}}};var a=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var i=e(this),n=i.data("dropdown");n||i.data("dropdown",n=new o(this)),"string"==typeof t&&n[t].call(i)})},e.fn.dropdown.Constructor=o,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.dropdown.data-api",t).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",n,o.prototype.toggle).on("keydown.dropdown.data-api",n+", [role=menu]",o.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,i){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,i)};t.prototype.setState=function(e){var t="disabled",i=this.$element,n=i.data(),o=i.is("input")?"val":"html";e+="Text",n.resetText||i.data("resetText",i[o]()),i[o](n[e]||this.options[e]),setTimeout(function(){"loadingText"==e?i.addClass(t).attr(t,t):i.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var i=e.fn.button;e.fn.button=function(i){return this.each(function(){var n=e(this),o=n.data("button"),a="object"==typeof i&&i;o||n.data("button",o=new t(this,a)),"toggle"==i?o.toggle():i&&o.setState(i)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var i=e(t.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,i){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,i),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,i,n,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(t=this.dimension(),i=e.camelCase(["scroll",t].join("-")),n=this.$parent&&this.$parent.find("> .accordion-group > .in"),n&&n.length){if(o=n.data("collapse"),o&&o.transitioning)return;n.collapse("hide"),o||n.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][i])}},hide:function(){var t;!this.transitioning&&this.$element.hasClass("in")&&(t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0))},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[null!==e?"addClass":"removeClass"]("collapse"),this},transition:function(t,i,n){var o=this,a=function(){"show"==i.type&&o.reset(),o.transitioning=0,o.$element.trigger(n)};this.$element.trigger(i),i.isDefaultPrevented()||(this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,a):a())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var i=e.fn.collapse;e.fn.collapse=function(i){return this.each(function(){var n=e(this),o=n.data("collapse"),a=e.extend({},e.fn.collapse.defaults,n.data(),"object"==typeof i&&i);o||n.data("collapse",o=new t(this,a)),"string"==typeof i&&o[i]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=i,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var i,n=e(this),o=n.attr("data-target")||t.preventDefault()||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),a=e(o).data("collapse")?"toggle":n.data();n[e(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(o).collapse(a)})}(window.jQuery),function(e){var t={};google.load("picker","1"),t.open=function(e,t,i){var n=gapi.auth.getToken().access_token,o=new google.picker.View(google.picker.ViewId.DOCS);o.setMimeTypes("application/vnd.google-apps.drive-sdk."+t);var a=(new google.picker.PickerBuilder).enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId(t).setOAuthToken(n).addView(o).addView(new google.picker.DocsUploadView).setCallback(function(t){if(t.action==google.picker.Action.PICKED){var n=t.docs[0].id;e.redirectTo(n,i.authorizer.userId)}}).build();a.setVisible(!0)},t.share=function(e,t){var i=new gapi.drive.share.ShareClient(t);i.setItemIds([e.params.fileId]),i.showSettingsDialog()},e.drive=t}(window,document),angular.module("chessApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("chessApp").controller("MainCtrl",["$scope","rtclient","$log","$location","debounce",function(e,t,i,n,o){function a(t){e.board=t.createMap(d),t.getRoot().set("board",e.board),e.players=t.createMap(c),t.getRoot().set("players",e.players),e.history=t.createList(),t.getRoot().set("history",e.history)}function r(i){e.board=i.getModel().getRoot().get("board"),e.players=i.getModel().getRoot().get("players"),e.history=i.getModel().getRoot().get("history");var n=i.getCollaborators();for(var a in n)n[a].isMe&&(e.me=n[a],e.players.get("blackPlayerID")==e.me.userId&&$("chessboard").addClass("black"));e.$apply(),e.board.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED,function(){e.$apply()}),e.players.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED,function(){e.safeApply()}),e.history.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED,function(){e.$apply()}),gapi.client.load("drive","v2",function(){var i=gapi.client.drive.files.get({fileId:t.params.fileId});i.execute(function(i){e.title=i.title,window.debounce=o,e.updateTitle=o(function(){var i={title:e.title},n=gapi.client.drive.files.patch({fileId:t.params.fileId,resource:i});n.execute(function(){})},500),e.$apply()})}),gapi.client.load("oauth2","v2",function(){var t=gapi.client.oauth2.userinfo.get();t.execute(function(t){e.me.email=t.email})}),e.showBoard=!0}function s(e,i){gapi.client.load("drive","v2",function(){i=i||function(){};var n=gapi.client.drive.comments.insert({fileId:t.params.fileId,resource:{content:e||""}});n.execute(i)})}function l(e,i,n){gapi.client.load("drive","v2",function(){n=n||function(){};var o=gapi.client.drive.replies.insert({fileId:t.params.fileId,commentId:e,resource:{content:i}});o.execute(n)})}var d={PBa:"a7",PBb:"b7",PBc:"c7",PBd:"d7",PBe:"e7",PBf:"f7",PBg:"g7",PBh:"h7",RBa:"a8",RBh:"h8",NBb:"b8",NBg:"g8",BBc:"c8",BBf:"f8",QBd:"d8",KBe:"e8",PWa:"a2",PWb:"b2",PWc:"c2",PWd:"d2",PWe:"e2",PWf:"f2",PWg:"g2",PWh:"h2",RWa:"a1",RWh:"h1",NWb:"b1",NWg:"g1",BWc:"c1",BWf:"f1",QWd:"d1",KWe:"e1"},c={whitePlayerID:"",whitePlayerName:"",whitePlayerEmail:"",whitePlayerPhoto:"",blackPlayerID:"",blackPlayerName:"",blackPlayerEmail:"",blackPlayerPhoto:"",turn:"white"},u=34208184131;e.safeApply=function(e){var t=this.$root.$$phase;"$apply"==t||"$digest"==t?e&&"function"==typeof e&&e():this.$apply(e)};var h={clientId:"34208184131.apps.googleusercontent.com",authButtonElementId:"authorizeButton",authNeededCallback:function(){e.needsAuth=!0,e.$apply()},initializeModel:a,autoCreate:!0,defaultTitle:"Untitled Game",onFileLoaded:r},p=new t.RealtimeLoader(h);p.start(function(){e.authorized=!0,e.$apply()}),e.flip=function(){$("chessboard").toggleClass("black")},e.chooseSide=function(t){e.players.set(t+"PlayerID",e.me.userId),e.players.set(t+"PlayerName",e.me.displayName),e.players.set(t+"PlayerPhoto",e.me.photoUrl),e.players.set(t+"PlayerEmail",e.me.email),e.players.set(e.me.userId,t),"black"==t&&$("chessboard").addClass("black"),"white"==t&&$("chessboard").removeClass("black");var i=e.players.get("whitePlayerName"),n=e.players.get("blackPlayerName");i&&n&&"Untitled Game"==e.title&&(e.title=i.split(" ")[0]+" vs. "+n.split(" ")[0],e.updateTitle());var o=e.players.get("whitePlayerEmail"),a=e.players.get("blackPlayerEmail");o&&a&&s("It is on! +"+o+" vs +"+a,function(t){e.players.set("commentId",t.commentId)})},e.share=function(){drive.share(t,u)},e.open=function(){drive.open(t,u,p)},e.create=function(){e.showBoard=!1,p.createNewFileAndRedirect()},e.$on("move",function(t,i,n,o){var a=e.players.get("commentId");a&&l(a,n+" to "+o),e.history.push(n+o),e.$apply()})}]),angular.module("chessApp").factory("chessengine",function(){return{}}),angular.module("chessApp").factory("rtclient",["$log",function(e){var t=t||{};return t.INSTALL_SCOPE="https://www.googleapis.com/auth/drive.install",t.FILE_SCOPE="https://www.googleapis.com/auth/drive.file",t.EMAIL="https://www.googleapis.com/auth/userinfo.email",t.OPENID_SCOPE="openid",t.REALTIME_MIMETYPE="application/vnd.google-apps.drive-sdk",t.FOLDER_MIMETYPE="application/vnd.google-apps.folder",t.getParams=function(){var e={},t=window.location.search;if(t)for(var i=t.slice(1).split("&"),n=0;i.length>n;n++){var o=i[n].split("=");e[o[0]]=window.unescape(o[1])}return e},t.params=t.getParams(),t.getOption=function(t,i,n){var o=void 0===t[i]?n:t[i];return void 0===o&&e.error(i+" should be present in the options."),o},t.Authorizer=function(e){this.clientId=t.getOption(e,"clientId"),this.userId=t.params.userId,this.authButton=document.getElementById(t.getOption(e,"authButtonElementId")),this.authNeededCallback=t.getOption(e,"authNeededCallback")},t.Authorizer.prototype.start=function(e){var t=this;gapi.load("auth:client,drive-realtime,drive-share",function(){t.authorize(e)})},t.Authorizer.prototype.authorize=function(e){var i=this.clientId,n=this.userId,o=this,a=function(t){t&&!t.error?(o.authButton.disabled=!0,o.fetchUserId(e)):(o.authNeededCallback&&o.authNeededCallback(),o.authButton.disabled=!1,o.authButton.onclick=r)},r=function(){gapi.auth.authorize({client_id:i,scope:[t.INSTALL_SCOPE,t.FILE_SCOPE,t.EMAIL,t.OPENID_SCOPE],user_id:n,immediate:!1},a)};gapi.auth.authorize({client_id:i,scope:[t.INSTALL_SCOPE,t.FILE_SCOPE,t.EMAIL,t.OPENID_SCOPE],user_id:n,immediate:!0},a)},t.Authorizer.prototype.fetchUserId=function(e){var t=this;gapi.client.load("oauth2","v2",function(){gapi.client.oauth2.userinfo.get().execute(function(i){i.id&&(t.userId=i.id),e&&e()})})},t.createRealtimeFile=function(e,i){gapi.client.load("drive","v2",function(){var n=function(n){gapi.client.drive.files.insert({resource:{mimeType:t.REALTIME_MIMETYPE,parents:[{id:n}],title:e}}).execute(i)};gapi.client.drive.files.list({q:'title = "drivechess" and trashed = false'}).execute(function(e){e.items?n(e.items[0].id):gapi.client.drive.files.insert({resource:{mimeType:t.FOLDER_MIMETYPE,title:"drivechess"}}).execute(function(e){n(e.id)})})})},t.getFileMetadata=function(e,t){gapi.client.load("drive","v2",function(){gapi.client.drive.files.get({fileId:id}).execute(t)})},t.parseState=function(e){try{var t=JSON.parse(e);return t}catch(i){return null}},t.redirectTo=function(e,t){var i=[];e&&i.push("fileId="+e),t&&i.push("userId="+t),window.location.href=0==i.length?"/":"?"+i.join("&")},t.RealtimeLoader=function(e){this.onFileLoaded=t.getOption(e,"onFileLoaded"),this.initializeModel=t.getOption(e,"initializeModel"),this.registerTypes=t.getOption(e,"registerTypes",function(){}),this.autoCreate=t.getOption(e,"autoCreate",!1),this.defaultTitle=t.getOption(e,"defaultTitle","New Realtime File"),this.authorizer=new t.Authorizer(e)},t.RealtimeLoader.prototype.start=function(e){var t=this;this.authorizer.start(function(){t.registerTypes&&t.registerTypes(),e&&e(),t.load()})},t.RealtimeLoader.prototype.load=function(){var e=t.params.fileId,i=this.authorizer.userId,n=t.params.state,o=this.authorizer,a=function(e){e.type===gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED?o.authorize():e.type===gapi.drive.realtime.ErrorType.CLIENT_ERROR?(alert("An Error happened: "+e.message),window.location.href="/"):e.type===gapi.drive.realtime.ErrorType.NOT_FOUND&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/")};if(e)return gapi.drive.realtime.load(e,this.onFileLoaded,this.initializeModel,a),void 0;if(n){var r=t.parseState(n);if("open"===r.action)return e=r.ids[0],i=r.userId,t.redirectTo(e,i),void 0}this.autoCreate&&this.createNewFileAndRedirect()},t.RealtimeLoader.prototype.createNewFileAndRedirect=function(){var i=this;t.createRealtimeFile(this.defaultTitle,function(n){n.id?t.redirectTo(n.id,i.authorizer.userId):(e.error("Error creating file."),e.error(n))})},t}]),angular.module("chessApp").factory("debounce",["$timeout","$q",function(e,t){return function(i,n,o){var a,r=t.defer();return function(){var s=this,l=arguments,d=function(){a=null,o||(r.resolve(i.apply(s,l)),r=t.defer())},c=o&&!a;return a&&e.cancel(a),a=e(d,n),c&&(r.resolve(i.apply(s,l)),r=t.defer()),r.promise}}}]),angular.module("chessApp").directive("chessboard",["$log","$rootScope",function(e){var t,i,n="",o="abcdefgh";for(t=0;8>t;t++){var a=o[t];for(i=0;8>i;i++){var r=a+(i+1),s="ng-class=\"lastMove('"+r+"')\"";n+='<div id="'+r+'" class="cell droppable" '+s+" ></div>\n"}for(i=8;12>i;i++)n+='<div id="'+(a+(i+1))+'" class="cell"></div>\n'}return{template:n,restrict:"E",replace:!1,transclude:!0,link:function(t,i){function n(){var e=$(window).height(),i=$(window).width();i=Math.min(i,8*(e/14)),e=Math.min(e,i);var n=$(window).height()/2-e/2,o=$(window).width()/2-i/2;t.style={position:"absolute",width:i+"px",height:e+"px",left:o+"px",top:n+"px"}}t.lastMove=function(e){if(t.history&&t.history.length>0){var i=t.history.get(t.history.length-1),n=i.substring(0,2),o=i.substring(2);if(e==n)return"from";if(e==o)return"to"}return""},i.find(".droppable").droppable({out:function(){$(this).removeClass("highlight")},drop:function(n,o){var a=this.id;$(this).removeClass("highlight"),o.draggable.css({top:"",left:""});var r=i.find("."+a),s=o.draggable[0].id;r.length>1&&r.each(function(i,n){if(n.id!==s&&(t.board.set(n.id,"captured"),"K"===n.id[0])){var o="W"===n.id[1]?"Black":"White";e.info(o+" wins")}});var l=o.draggable.data("from"),d=a;l!==d&&t.$emit("move",s,l,d)},over:function(e,i){$(this).addClass("highlight"),t.board.set(i.draggable[0].id,this.id),t.$apply()}}),angular.element(window).bind("resize",function(){t.$apply(n)}),n()}}}]),angular.module("chessApp").directive("piece",["$rootScope","$log",function(){return{template:'<div class="piece animated" ng-class="board.get(id)"></div>',restrict:"E",replace:!0,scope:"isolate",link:function(e,t){e.id=t[0].id,t.parent().width(),t.draggable({snap:".cell",cursor:"move",zIndex:100,start:function(){t.removeClass("animated");var e=this.className.split(" ").filter(function(e){return 2==e.length})[0];$(this).data("from",e)},stop:function(){t.addClass("animated")},drag:function(){}})}}}]),angular.module("chessApp").directive("editable",["$timeout",function(e){return{template:['<span ng-hide="editMode" ng-click="editMode = true" class="gameTitle">{{value}}</span><input ng-show="editMode" ng-model="value" type="text" class="gameTitleEdit" />'].join("\n"),require:"ngModel",restrict:"E",link:function(t,i,n,o){var a=i.find("input"),r=i.find("span"),s=function(){return r.width()};n.$observe("maxlength",function(e){e=parseInt(e),e&&a.attr("maxlength",e)}),t.$watch("value",function(e){o.$setViewValue(e)}),o.$render=function(){t.value=o.$viewValue},a.bind("blur",function(){t.editMode=!1,t.$apply()}).bind("keydown",function(){e(function(){a.width(s())},0)}).bind("keyup",function(){e(function(){a.width(s())},0)}).bind("keypress",function(e){13===e.charCode&&(t.editMode=!1,t.$apply())})}}}]);