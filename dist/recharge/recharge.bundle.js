webpackJsonp([6],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(4),a=r(o),i=n(1),s=r(i),l=n(106),u=r(l);a.default.render(s.default.createElement(u.default,null),document.getElementById("root"))},1:function(e,t,n){e.exports=n(3)(1)},4:function(e,t,n){e.exports=n(3)(37)},5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(11);var c=n(2),p=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=void 0,n=function(){if("1"==e.props.type){var n="alert-type1 "+(e.props.show?"show":"hide");t=u.default.createElement("div",{className:n,key:e.props.text},e.props.text)}else if("2"==e.props.type){var r="cover "+(e.props.show?"show":"hide"),o="alert-type2 "+(e.props.show?"show":"hide"),a="alert-button "+(e.props.btn1Css||"button1"),i="alert-button "+(e.props.btn2Css||"button2"),s=void 0,l=function(){s=c.strUtil.isEmpty(e.props.btn2Text)?u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(e.props.title)?"":"no-title")},u.default.createElement("button",{className:a,onClick:e.props.btn1Click},e.props.btn1Text)):u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(e.props.title)?"":"no-title")},u.default.createElement("button",{className:a,onClick:e.props.btn1Click},e.props.btn1Text),u.default.createElement("button",{className:i,onClick:e.props.btn2Click},e.props.btn2Text))};l();var p=void 0,f=function(){p=c.strUtil.isEmpty(e.props.title)?u.default.createElement("div",null):u.default.createElement("div",{className:"title"},e.props.title)};f(),t=u.default.createElement("div",null,u.default.createElement("div",{className:r}),u.default.createElement("div",{className:o},p,e.props.children,s))}else if("3"==e.props.type){var d="cover "+(e.props.show?"show":"hide"),y="alert-type3 "+(e.props.show?"show":"hide"),h="alert-button "+(e.props.btn1Css||"button1"),m="alert-button "+(e.props.btn2Css||"button2"),b=void 0,v=function(){b=c.strUtil.isEmpty(e.props.btn2Text)?u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(e.props.title)?"":"no-title")},u.default.createElement("button",{className:h,onClick:e.props.btn1Click},e.props.btn1Text)):u.default.createElement("div",{className:"wrap-btn "+(c.strUtil.isEmpty(e.props.title)?"":"no-title")},u.default.createElement("button",{className:h,onClick:e.props.btn1Click},e.props.btn1Text),u.default.createElement("button",{className:m,onClick:e.props.btn2Click},e.props.btn2Text))};v();var g=void 0,w=function(){g=c.strUtil.isEmpty(e.props.title)?u.default.createElement("div",null):u.default.createElement("div",{className:"title"},e.props.title)};w(),t=u.default.createElement("div",null,u.default.createElement("div",{className:d}),u.default.createElement("div",{className:y},g,e.props.children,b))}};return n(),u.default.createElement("div",null,t)}}]),t}(l.Component);p.defaultProps={type:"1"},t.default=p,p.propTypes={type:u.default.PropTypes.string,show:u.default.PropTypes.bool.isRequired,text:u.default.PropTypes.string,title:u.default.PropTypes.string,content1:u.default.PropTypes.string,content2:u.default.PropTypes.string,btn1Text:u.default.PropTypes.string,btn2Text:u.default.PropTypes.string,btn1Css:u.default.PropTypes.string,btn2Css:u.default.PropTypes.string,btn1Click:u.default.PropTypes.func,btn2Click:u.default.PropTypes.func}},6:function(e,t,n){(function(t,r){!function(t,n){e.exports=n()}(this,function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function o(e){return"function"==typeof e}function a(e){J=e}function i(e){X=e}function s(){return function(){return t.nextTick(f)}}function l(){return function(){W(f)}}function u(){var e=0,t=new Q(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function c(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function p(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<Y;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}Y=0}function d(){try{var e=n(9);return W=e.runOnLoop||e.runOnContext,l()}catch(e){return p()}}function y(e,t){var n=arguments,r=this,o=new this.constructor(m);void 0===o[oe]&&L(o);var a=r._state;return a?!function(){var e=n[a-1];X(function(){return M(a,o,e,r._result)})}():S(r,o,e,t),o}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(m);return C(n,e),n}function m(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function v(){return new TypeError("A promises callback cannot return that same promise.")}function g(e){try{return e.then}catch(e){return le.error=e,le}}function w(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function _(e,t,n){X(function(e){var r=!1,o=w(n,t,function(n){r||(r=!0,t!==n?C(e,n):P(e,n))},function(t){r||(r=!0,j(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,j(e,o))},e)}function E(e,t){t._state===ie?P(e,t._result):t._state===se?j(e,t._result):S(t,void 0,function(t){return C(e,t)},function(t){return j(e,t)})}function T(e,t,n){t.constructor===e.constructor&&n===y&&t.constructor.resolve===h?E(e,t):n===le?j(e,le.error):void 0===n?P(e,t):o(n)?_(e,t,n):P(e,t)}function C(t,n){t===n?j(t,b()):e(n)?T(t,n,g(n)):P(t,n)}function O(e){e._onerror&&e._onerror(e._result),k(e)}function P(e,t){e._state===ae&&(e._result=t,e._state=ie,0!==e._subscribers.length&&X(k,e))}function j(e,t){e._state===ae&&(e._state=se,e._result=t,X(O,e))}function S(e,t,n,r){var o=e._subscribers,a=o.length;e._onerror=null,o[a]=t,o[a+ie]=n,o[a+se]=r,0===a&&e._state&&X(k,e)}function k(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,a=e._result,i=0;i<t.length;i+=3)r=t[i],o=t[i+n],r?M(n,r,o,a):o(a);e._subscribers.length=0}}function x(){this.error=null}function N(e,t){try{return e(t)}catch(e){return ue.error=e,ue}}function M(e,t,n,r){var a=o(n),i=void 0,s=void 0,l=void 0,u=void 0;if(a){if(i=N(n,r),i===ue?(u=!0,s=i.error,i=null):l=!0,t===i)return void j(t,v())}else i=r,l=!0;t._state!==ae||(a&&l?C(t,i):u?j(t,s):e===ie?P(t,i):e===se&&j(t,i))}function U(e,t){try{t(function(t){C(e,t)},function(t){j(e,t)})}catch(t){j(e,t)}}function A(){return ce++}function L(e){e[oe]=ce++,e._state=void 0,e._result=void 0,e._subscribers=[]}function R(e,t){this._instanceConstructor=e,this.promise=new e(m),this.promise[oe]||L(this.promise),K(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?P(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&P(this.promise,this._result))):j(this.promise,Z())}function Z(){return new Error("Array Methods must be provided an Array")}function D(e){return new R(this,e).promise}function $(e){var t=this;return new t(K(e)?function(n,r){for(var o=e.length,a=0;a<o;a++)t.resolve(e[a]).then(n,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function z(e){var t=this,n=new t(m);return j(n,e),n}function I(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function V(e){this[oe]=A(),this._result=this._state=void 0,this._subscribers=[],m!==e&&("function"!=typeof e&&I(),this instanceof V?U(this,e):F())}function q(){var e=void 0;if("undefined"!=typeof r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=V}var B=void 0;B=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=B,Y=0,W=void 0,J=void 0,X=function(e,t){ne[Y]=e,ne[Y+1]=t,Y+=2,2===Y&&(J?J(f):re())},G="undefined"!=typeof window?window:void 0,H=G||{},Q=H.MutationObserver||H.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),re=void 0;re=ee?s():Q?u():te?c():void 0===G?d():p();var oe=Math.random().toString(36).substring(16),ae=void 0,ie=1,se=2,le=new x,ue=new x,ce=0;return R.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},R.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=g(e);if(o===y&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===V){var a=new n(m);T(a,e,o),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},R.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===ae&&(this._remaining--,e===se?j(r,n):this._result[t]=n),0===this._remaining&&P(r,this._result)},R.prototype._willSettleAt=function(e,t){var n=this;S(e,void 0,function(e){return n._settledAt(ie,t,e)},function(e){return n._settledAt(se,t,e)})},V.all=D,V.race=$,V.resolve=h,V.reject=z,V._setScheduler=a,V._setAsap=i,V._asap=X,V.prototype={constructor:V,then:y,catch:function(e){return this.then(null,e)}},q(),V.polyfill=q,V.Promise=V,V})}).call(t,n(8),function(){return this}())},7:function(e,t,n){e.exports=n(3)(186)},8:function(e,t,n){e.exports=n(3)(3)},9:function(e,t){},10:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(12);var c=(n(2),function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e){return this.props.loading!==e.loading}},{key:"render",value:function(){var e=this,t=void 0,n=function(){t=e.props.loading?u.default.createElement("div",{className:"wrap-loading"},u.default.createElement("div",{className:"loadings"},u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}),u.default.createElement("div",{className:"loading-list"}))):u.default.createElement("div",null)};return n(),u.default.createElement("div",null,t)}}]),t}(l.Component));t.default=c,c.propTypes={loading:u.default.PropTypes.bool.isRequired}},11:function(e,t){},12:function(e,t){},13:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u);n(14);var p=n(2),f=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.btnClick=function(){n.setState({btnClass:"btn-clicked"}),setTimeout(function(){n.setState({btnClass:""})},500),p.strUtil.isEmpty(n.props.btnClick)||n.props.btnClick()},n.state={btnClass:""},n}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=function(){var t="btn "+e.props.type+" "+e.state.btnClass+" "+e.props.btnCss,n="btn disabled "+e.state.btnClass+" "+e.props.btnCss;return"disabled"==e.props.type?c.default.createElement("button",{className:n,disabled:!0},e.props.btnText):c.default.createElement("button",s({},e.props,{className:t,onClick:e.btnClick}),e.props.btnText)},n=t();return c.default.createElement("div",{className:this.props.parentCss},n)}}]),t}(u.Component);f.defaultProps={type:"solid"},t.default=f,f.propTypes={btnCss:c.default.PropTypes.string,type:c.default.PropTypes.string,btnText:c.default.PropTypes.string,parentCss:c.default.PropTypes.string}},14:function(e,t){},15:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u);n(20);var p=(n(2),function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e="icon "+this.props.iconType+" "+this.props.iconCss;return c.default.createElement("span",s({className:e},this.props))}}]),t}(u.Component));p.defaultProps={},t.default=p,p.propTypes={iconCss:c.default.PropTypes.string,iconType:c.default.PropTypes.string.isRequired}},16:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(17);var c=n(5),p=r(c),f=n(2),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.btnClick=function(){var e=n.props.url?n.props.url:window.location.href;f.bussinessUtil.goLogin(e)},n}return i(t,e),s(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return u.default.createElement(p.default,{type:"2",show:this.props.show,title:"登录超时",btn1Text:"确定",btn1Click:this.btnClick,btn1Css:"loginOver-btn"},u.default.createElement("p",{className:"loginOver-alert-content"},"您已长时间没有操作，为确保安全，请重新登录。"))}}]),t}(l.Component);d.defaultProps={},t.default=d,d.propTypes={show:u.default.PropTypes.bool}},17:function(e,t){},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(19);var c,p,f,d,y,h=n(2),m={username:"^[一-龥]{2,4}$",password:"^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$",telephone:"^1[3|4|5|7|8][0-9]{9}$",identity:"^(\\d{18})|\\d{17}(\\d|X|x)$",email:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",url:"^((http|https)://(\\w+:{0,1}\\w*@)?(\\S+)|)(:[0-9]+)?(/|/([\\w#!:.?+=&%@!-/]))?$",imgCode:"^[a-zA-Z0-9]{4}$",phoneCode:"^[a-zA-Z0-9]{4}$",bankcard:"^\\d{12,19}$",couponCode:"^[a-zA-Z0-9]*$",money:"^[0-9]{1}[\\d]*.?[\\d]{0,2}$"},b={username:"姓名不能为空!",password:"密码不能为空!",telephone:"手机号码不能为空!",identity:"身份证号码不能为空!",email:"邮箱不能为空",url:"网址不能为空!",imgCode:"图形验证码不能为空!",phoneCode:"手机验证码不能为空!",bankcard:"银行卡号不能为空!",couponCode:"兑换码不能为空",money:"金钱不能为空!"},v={username:"姓名为2-4个中文",password:"密码为6-18个字母与数字的组合,没有特殊字符",telephone:"手机号码为11位有效号码",identity:"身份证格式错误",email:"邮箱格式错误",url:"网址格式错误",imgCode:"图形验证码错误",phoneCode:"手机验证码错误",bankcard:"银行卡号不符合规则",couponCode:"兑换码不符合规则",money:"金钱不符合规则"},g={username:"请输入用户名",password:"请输入6-18位字母与数字的组合",telephone:"请输入手机号码",identity:"请输入身份证号码",email:"请输入邮箱",url:"请输入网址",imgCode:"请输入图形验证码",phoneCode:"请输入手机验证码",bankcard:"请输入银行卡号",couponCode:"请输入兑换码",money:"请输入金额"},w={username:"",password:"18",telephone:"11",identity:"18",email:"",url:"",imgCode:"4",phoneCode:"4",bankcard:"19",money:"10"},_=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.inputChange=function(e){var t=e.target.value,r=n.props.index,o=!0,a=void 0;n.props.required&&(h.strUtil.isEmpty(t)?o=!1:a=n.testValue2(t)),n.props.updateValue(t,r,o,a)},n.testValue=function(e){if(n.initAttr(),h.strUtil.isEmpty(e))n.props.updateText(p,!0);else{var t=new RegExp(c);t.test(e)?(h.strUtil.isEmpty(n.props.startMoney)||parseFloat(e)<parseFloat(n.props.startMoney)&&n.props.updateText("起投金额为"+n.props.startMoney+"元",!0),h.strUtil.isEmpty(n.props.endMoney)||parseFloat(e)<parseFloat(n.props.endMoney)&&n.props.updateText("最多可投金额为"+n.props.endMoney+"元",!0)):n.props.updateText(f,!0)}},n.testValue2=function(e){var t=void 0;if(n.initAttr(),h.strUtil.isEmpty(e))t=p;else{var r=new RegExp(c);r.test(e)?(h.strUtil.isEmpty(n.props.startMoney)||parseFloat(e)<parseFloat(n.props.startMoney)&&(t=h.strUtil.isEmpty(n.props.startMoneyTip)?"最小金额为"+n.props.startMoney+"元":n.props.startMoneyTip),h.strUtil.isEmpty(n.props.endMoney)||parseFloat(e)>parseFloat(n.props.endMoney)&&(t=h.strUtil.isEmpty(n.props.endMoneyTip)?"最多金额为"+n.props.endMoney+"元":n.props.endMoneyTip)):t=f}return t},n.inputBlur=function(e){var t=e.target.value;n.props.required&&n.testValue(t)},n}return i(t,e),s(t,[{key:"initAttr",value:function(){c=h.strUtil.isEmpty(this.props.rule)?m[this.props.dataType]:this.props.rule,p=h.strUtil.isEmpty(this.props.emptyTip)?b[this.props.dataType]:this.props.emptyTip,f=h.strUtil.isEmpty(this.props.errorTip)?v[this.props.dataType]:this.props.errorTip,d=h.strUtil.isEmpty(this.props.placeholder)?g[this.props.dataType]:this.props.placeholder,y=h.strUtil.isEmpty(this.props.maxlength)?w[this.props.dataType]:this.props.maxlength}},{key:"render",value:function(){this.initAttr();var e=void 0;return u.default.createElement("input",{className:this.props.className,value:this.props.value,maxLength:y,placeholder:d,onChange:this.inputChange,onBlur:e,type:this.props.type})}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e}}]),t}(l.Component);_.defaultProps={dataType:"",placeholder:"",rule:"",emptyTip:"",errorTip:"",required:!0,isBlur:!1},t.default=_,_.propTypes={required:u.default.PropTypes.bool,emptyTip:u.default.PropTypes.string,errorTip:u.default.PropTypes.string,dataType:u.default.PropTypes.string.isRequired,maxlength:u.default.PropTypes.string,rule:u.default.PropTypes.string,startMoney:u.default.PropTypes.number,endMoney:u.default.PropTypes.number,index:u.default.PropTypes.string}},19:function(e,t){},20:function(e,t){},21:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(22);var c=(n(2),n(15)),p=(r(c),function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",this.props,this.props.children)}}]),t}(l.Component));p.defaultProps={},t.default=p},22:function(e,t){},45:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(53);var c=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleSwitch=function(){"default-off"==n.props.switchState||"off"==n.props.switchState?n.props.updateSwitch("on"):n.props.updateSwitch("off")},n}return i(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("span",{className:"swiper "+this.props.switchState,onClick:this.toggleSwitch},u.default.createElement("span",{className:"ball"}),u.default.createElement("span",{className:"slide slideColor"}))}}]),t}(l.Component);c.defaultProps={switchState:"default-off"},t.default=c,c.propTypes={switchState:u.default.PropTypes.string.isRequired}},53:function(e,t){},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l);n(166);var c=n(5),p=r(c),f=n(16),d=r(f),y=n(18),h=r(y),m=n(21),b=r(m),v=n(13),g=r(v),w=n(45),_=r(w),E=n(10),T=r(E),C=n(15),O=r(C);n(6),n(7);var P=n(2),j=P.bussinessUtil.getCardNo(),S=P.bussinessUtil.getCardname(),k={},x=P.bussinessUtil.isCZ(),N=P.bussinessUtil.getSessionKey(),M=P.bussinessUtil.getUsableBalance(),U=new Object,A=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getData=function(){var e="/bank/bankList",t="",r=function(e){e.data.list.map(function(e,t){e.bankName==S&&(k=e,U=e)}),n.setState({isLoading:!1})},o=function(e){if(e.resultCode==P.config.loginTimeOver)n.setState({loginShow:!0});else{var t=P.dataUtil.getMessage(e.resultCode);n.updateText(t,!0)}},a=function(e){n.updateText(e,!0)};P.dataUtil.getData(e,"POST",t,r,o,a)},n.updateSwitch=function(e){n.setState({switchState:e})},n.updateText=function(e,t){n.setState({alertText:e,alertShow:t}),t&&setTimeout(function(){n.setState({alertShow:!1})},P.config.alertTime)},n.updateValue=function(e,t,r,o){switch(t){case"1":r?n.setState({money:e,moneyIsTrue:r,disabled:!1,moneyErrorText:o}):n.setState({money:e,moneyIsTrue:r,disabled:!0,moneyErrorText:o})}},n.savePageInfo=function(){U.usableBalance=M,U.userRechargeMoney=n.state.money,U.cardNo=j,P.bussinessUtil.setPageInfo(U)},n.btnClick=function(){if(P.strUtil.isEmpty(n.state.moneyErrorText))if(P.bussinessUtil.setOtherPage(P.bussinessUtil.getCurrentPage()),x)n.savePageInfo(),window.location.href="../confirm_recharge/confirm_recharge.html";else if("default-off"==n.state.switchState||"off"==n.state.switchState){n.setState({isLoading2:!0});var e="/user/recharge",t="sessionKey="+N+"&orderAmount="+n.state.money,r=function(e){n.setState({isLoading2:!1}),window.location.href=e.data.url},o=function(e){if(n.setState({isLoading2:!1}),e.resultCode==P.config.loginTimeOver)n.setState({loginShow:!0});else{var t=P.dataUtil.getMessage(e.resultCode);n.updateText(t,!0)}},a=function(e){n.setState({isLoading:!1}),n.updateText(e,!0)};P.dataUtil.getData(e,"POST",t,r,o,a)}else n.bindCZ();else n.updateText(n.state.moneyErrorText,!0)},n.bindCZ=function(){n.setState({isLoading2:!0});var e="/user/agreement",t="agreement_type=ZCZP0800&unbind=0&sessionKey="+N,r=function(e){n.savePageInfo(),P.bussinessUtil.setCurrentPage("/native/confirm_recharge/confirm_recharge.html"),n.setState({isLoading2:!1}),window.location.href=e.data.url},o=function(e){if(e.resultCode==P.config.loginTimeOver)n.setState({isLoading2:!1,loginShow:!0});else{var t=P.dataUtil.getMessage(e.resultCode);n.updateText(t,!0)}},a=function(e){n.updateText(e,!0)};P.dataUtil.getData(e,"POST",t,r,o,a)},n.cleanValue=function(e){switch(e.target.title){case"1":n.setState({money:"",moneyIsTrue:!1,disabled:!0})}},n.showAlert=function(){n.setState({alert2Show:!0})},n.hideAlert=function(){n.setState({alert2Show:!1})},n.state={alertText:"",alertShow:!1,alert2Show:!1,money:"",disabled:!0,moneyIsTrue:!1,moneyErrorText:"",isLoading:!0,isLoading2:!1,switchState:"default-off",loginShow:!1},n}return i(t,e),s(t,[{key:"componentWillMount",value:function(){var e="recharge",t=window.location.href;P.bussinessUtil.dealPage(e,t)}},{key:"componentDidMount",value:function(){P.bussinessUtil.configScreen(),this.getData()}},{key:"render",value:function(){var e=this,t=function(){return e.state.disabled?u.default.createElement(g.default,{type:"disabled",disabled:!0,parentCss:"parent",btnCss:"sure",btnText:"充值",btnClick:e.btnClick}):u.default.createElement(g.default,{type:"hollow",parentCss:"parent",btnCss:"sure",btnText:"充值",btnClick:e.btnClick})},n=t(),r=function(){return x?u.default.createElement("div",null):u.default.createElement("div",{className:"open"},u.default.createElement("div",{className:"t1"},"开通免密支付",u.default.createElement("span",{className:"icon-info",onClick:e.showAlert})),u.default.createElement("div",{className:"t2"},u.default.createElement(_.default,{updateSwitch:e.updateSwitch,switchState:e.state.switchState})))},o=r(),a=function(){return e.state.isLoading?u.default.createElement("div",null,u.default.createElement(T.default,{loading:e.state.isLoading}),u.default.createElement(p.default,{text:e.state.alertText,show:e.state.alertShow})):u.default.createElement("div",{className:"Container"},u.default.createElement("div",{className:"top"},u.default.createElement("div",{className:"bank"},u.default.createElement("div",{className:"t1"},u.default.createElement("img",{src:P.strUtil.formatData(k.logoUrl),alt:"",className:"bankIcon"}),u.default.createElement("span",{className:"bankName"},k.bankName)),u.default.createElement("div",{className:"t2"},u.default.createElement("p",null,"尾号",P.strUtil.formatData(j).substring(P.strUtil.formatData(j).length-4,P.strUtil.formatData(j).length)))),u.default.createElement("p",{className:"limit"},"单笔限额",k.chargeTimeLimit,"万元，单日限额",k.chargeDateLimit,"万元")),u.default.createElement("p",{className:"balance"},"账户余额：",M,"元"),u.default.createElement(b.default,{className:"recharge"},u.default.createElement("span",{
className:"moneyNum"},"充值金额"),u.default.createElement(h.default,{type:"tel",className:"moneyInput",errorTip:"请输入有效金额",startMoney:"1",startMoneyTip:"最小充值金额为1元",endMoney:1e4*parseFloat(k.chargeTimeLimit),endMoneyTip:"最大充值金额为"+k.chargeTimeLimit+"万元",dataType:"money",index:"1",value:e.state.money,updateValue:e.updateValue,placeholder:"请输入充值金额"}),u.default.createElement(O.default,{iconType:"del",iconCss:"icon-type "+(e.state.moneyIsTrue?"show-inline":"hide-hidden"),title:"1",onClick:e.cleanValue})),u.default.createElement(p.default,{text:e.state.alertText,show:e.state.alertShow}),u.default.createElement(d.default,{type:"2",show:e.state.loginShow}),u.default.createElement(T.default,{loading:e.state.isLoading2}),u.default.createElement(p.default,{type:"2",show:e.state.alert2Show,title:"什么是免密充值",btn1Text:"确定",btn1Click:e.hideAlert},u.default.createElement("p",{className:"alert-content"},"开通免密充值后，以后每次充值将无需再输入支付密码。由于领投鸟理财采用资金同卡进出制度，这将充分确保您的资金安全。"),u.default.createElement("p",{className:"alert-content"},"您也可以在账户设置中随时关闭该功能。")),o,n)},i=a();return u.default.createElement("div",null,i)}}]),t}(l.Component);t.default=A},166:function(e,t){}});