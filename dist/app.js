!function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],_=0,d=[];_<l.length;_++)i=l[_],a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={0:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([152,1]),r()}({142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(372);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},152:function(e,t,r){r(153),e.exports=r(355)},355:function(e,t,r){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(356)),a=l(r(1)),o=l(r(1)),i=l(r(357));function l(e){return e&&e.__esModule?e:{default:e}}n.install({onUpdateReady:function(){n.applyUpdate()},onUpdated:function(){window.swUpdate=!0}}),o.default.render(a.default.createElement(i.default,null),document.getElementById("root"))},357:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_templateObject=_taggedTemplateLiteral(["\n  ","\n  html {\n    font-family: Microsoft JhengHei,Helvetica Neue,Helvetica,Arial,sans-serif;\n  }\n  .m-0 {\n    margin: 0;\n  }\n  .mr-5 {\n    margin-right:5px;\n  }\n  .mb-5 {\n    margin-bottom:5px;\n  }\n"],["\n  ","\n  html {\n    font-family: Microsoft JhengHei,Helvetica Neue,Helvetica,Arial,sans-serif;\n  }\n  .m-0 {\n    margin: 0;\n  }\n  .mr-5 {\n    margin-right:5px;\n  }\n  .mb-5 {\n    margin-bottom:5px;\n  }\n"]),_reactHotLoader=__webpack_require__(3),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_RootPage=__webpack_require__(359),_RootPage2=_interopRequireDefault(_RootPage),_mobxReact=__webpack_require__(52),_store=__webpack_require__(376),stores=_interopRequireWildcard(_store),_styledComponents=__webpack_require__(58),_styledNormalize=__webpack_require__(400),enterModule;function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _taggedTemplateLiteral(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var GlobalStyle=(0,_styledComponents.createGlobalStyle)(_templateObject,_styledNormalize.normalize),App=function(_Component){function App(e){return _classCallCheck(this,App),_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,e))}return _inherits(App,_Component),_createClass(App,[{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(GlobalStyle,null),_react2.default.createElement(_mobxReact.Provider,stores,_react2.default.createElement(_RootPage2.default,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react.Component);(0,_mobxReact.onError)(function(e){console.log("----mobx-error-msg----"),console.log(e)});var _default=(0,_reactHotLoader.hot)(module)(App),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(GlobalStyle,"GlobalStyle","/Users/jimmy/vhost/react-infinite-scroll-example/src/app.js"),reactHotLoader.register(App,"App","/Users/jimmy/vhost/react-infinite-scroll-example/src/app.js"),reactHotLoader.register(_default,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/app.js"),leaveModule(module))}).call(this,__webpack_require__(17)(module))},359:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(360);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},360:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_mobxReact=__webpack_require__(52),_components=__webpack_require__(361),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var PageRoot=(_dec=(0,_mobxReact.inject)("RootPageStore"),_dec(_class=(0,_mobxReact.observer)(_class=function(_Component){function PageRoot(e){return _classCallCheck(this,PageRoot),_possibleConstructorReturn(this,(PageRoot.__proto__||Object.getPrototypeOf(PageRoot)).call(this,e))}return _inherits(PageRoot,_Component),_createClass(PageRoot,[{key:"render",value:function(){var e=this.props.RootPageStore,t=e.onSubmit,r=e.searchBarOnChange,n=e.list,a=e.isFetching,o=e.isLock,i=e.getNextPage,l=e.lockTime;return _react2.default.createElement("div",null,_react2.default.createElement(_components.SearchBar,{store:this.props.RootPageStore,valueKey:"param_keyword",onChange:r,onSubmit:t,placeholder:"輸入完畢後按下 Enter9"}),_react2.default.createElement(_components.List,{list:n,isFetching:a,isLock:o,lockTime:l,getNextPage:i}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PageRoot}(_react.Component))||_class)||_class),_default=PageRoot,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(PageRoot,"PageRoot","/Users/jimmy/vhost/react-infinite-scroll-example/src/containers/RootPage/RootPage.js"),reactHotLoader.register(_default,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/containers/RootPage/RootPage.js"),leaveModule(module))}).call(this,__webpack_require__(17)(module))},361:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlaceholderBar=t.List=t.SearchBar=void 0;var n=i(r(362)),a=i(r(369)),o=i(r(142));function i(e){return e&&e.__esModule?e:{default:e}}t.SearchBar=n.default,t.List=a.default,t.PlaceholderBar=o.default},362:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(363);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},363:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(1),l=(n=i)&&n.__esModule?n:{default:n},c=r(364),s=r(52);(a=r(3).enterModule)&&a(e);var u,_,d=function(e){var t=e.valueKey,r=e.store,n=e.onSubmit,a=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["valueKey","store","onSubmit"]);return l.default.createElement(c.SearchBarStyle,null,l.default.createElement("form",{onSubmit:n},l.default.createElement("input",o({type:"text"},a,{value:r[t]})),l.default.createElement("input",{type:"hidden",value:""})))},p=(0,s.observer)(d);t.default=p,u=r(3).default,_=r(3).leaveModule,u&&(u.register(d,"SearchBar","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/SearchBar/SearchBar.js"),u.register(p,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/SearchBar/SearchBar.js"),_(e))}).call(this,r(17)(e))},364:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.SearchBarStyle=void 0;var n,a,o,i,l=(n=["\n    padding:20px;\n    height:30px;\n    position:fixed;\n    width: calc(100% - 40px);\n    background-color: #6a8ea7;\n    top:0;\n    z-index:1;\n    input {\n        background-color:transparent;\n        color:#fff;\n        width:100%;\n        height:30px;\n        line-height:30px;\n        border:none;\n        border-bottom:1px solid #ddd;\n        letter-spacing:1px;\n        &:focus {\n            outline:none;\n        }\n        &::placeholder {\n           color:#fff;\n        }\n    }\n"],a=["\n    padding:20px;\n    height:30px;\n    position:fixed;\n    width: calc(100% - 40px);\n    background-color: #6a8ea7;\n    top:0;\n    z-index:1;\n    input {\n        background-color:transparent;\n        color:#fff;\n        width:100%;\n        height:30px;\n        line-height:30px;\n        border:none;\n        border-bottom:1px solid #ddd;\n        letter-spacing:1px;\n        &:focus {\n            outline:none;\n        }\n        &::placeholder {\n           color:#fff;\n        }\n    }\n"],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))),c=r(58),s=(o=c)&&o.__esModule?o:{default:o};(i=r(3).enterModule)&&i(e);var u,_,d=t.SearchBarStyle=s.default.div(l);u=r(3).default,_=r(3).leaveModule,u&&(u.register(d,"SearchBarStyle","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/SearchBar/style.js"),_(e))}).call(this,r(17)(e))},369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(370);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},370:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_class,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_mobxReact=__webpack_require__(52),_style=__webpack_require__(371),_PlaceholderBar=__webpack_require__(142),_PlaceholderBar2=_interopRequireDefault(_PlaceholderBar),_ListItem=__webpack_require__(374),_ListItem2=_interopRequireDefault(_ListItem),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var List=(0,_mobxReact.observer)(_class=function(_Component){function List(e){_classCallCheck(this,List);var t=_possibleConstructorReturn(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,e));return t.handleScroll=function(){var e=Math.max(document.body.scrollHeight,document.body.offsetHeight);(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)===e&&t.props.getNextPage()},t}return _inherits(List,_Component),_createClass(List,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener(this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.list,r=e.isFetching,n=e.isLock,a=e.lockTime;return _react2.default.createElement(_style.ListStyle,null,t.map(function(e,t){var r=e.node_id+"_"+t;return _react2.default.createElement(_ListItem2.default,{key:r,item:e})}),(r||n)&&_react2.default.createElement("div",{style:{width:"100%",maxWidth:"600px"}},n&&_react2.default.createElement("p",null,"太猴急了!! 請等個",a,"秒"),_react2.default.createElement("div",{style:{padding:"10px 0"}},_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,1,1,0,0,0,0,0,0,0]}),_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,0,1,1,1,1,0,0,0,0]}),_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,1,0,1,1,1,0,0,0,0]})),_react2.default.createElement("div",{style:{padding:"10px 0"}},_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,1,1,0,1,1,1,0,0,0]}),_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,0,1,1,1,0,0,0,0,0]}),_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,1,0,0,1,1,0,0,0,0]})),_react2.default.createElement("div",{style:{padding:"10px 0"}},_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,1,1,0,0,0,0,0,0,0]}),_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,0,1,1,1,1,0,0,0,0]}),_react2.default.createElement(_PlaceholderBar2.default,{height:"20px",className:"mb-5",blockArr:[1,1,0,1,1,1,1,1,0,0]}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),List}(_react.Component))||_class,_default=List,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(List,"List","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/List/List.js"),reactHotLoader.register(_default,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/List/List.js"),leaveModule(module))}).call(this,__webpack_require__(17)(module))},371:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.ListStyle=void 0;var n,a,o,i,l=(n=["\n    padding:70px 20px 0 20px;\n    color:#666;\n    overflow:hidden;\n    .listItem {\n        height:5rem;\n        display:flex;\n        align-items:center;\n        transition: all .2s ease-in;\n        transform:scale(1);\n        backface-visibility: hidden;    \n        will-change: transform, opacity, padding;\n        @media (max-width: 769px) {\n            padding:10px 0 0 0;\n            line-height:20px;\n        }\n        &:hover {\n            transform:scale(1.044);\n            box-shadow:0 1px 3px 0px #ddd;\n            padding:0 0 0 10px;\n            .lang{\n                opacity:1;\n                transform:translate3d(0,0,0);\n            }\n        }\n        a {\n            text-decoration:none;\n            color:#6a8ea7;\n        }\n    }\n\n    .lang {\n        transition: all .3s ease;\n        color:#ff9e9e;\n        flex:1;\n        transform:translate(0,20px);\n        opacity:0;\n    }\n"],a=["\n    padding:70px 20px 0 20px;\n    color:#666;\n    overflow:hidden;\n    .listItem {\n        height:5rem;\n        display:flex;\n        align-items:center;\n        transition: all .2s ease-in;\n        transform:scale(1);\n        backface-visibility: hidden;    \n        will-change: transform, opacity, padding;\n        @media (max-width: 769px) {\n            padding:10px 0 0 0;\n            line-height:20px;\n        }\n        &:hover {\n            transform:scale(1.044);\n            box-shadow:0 1px 3px 0px #ddd;\n            padding:0 0 0 10px;\n            .lang{\n                opacity:1;\n                transform:translate3d(0,0,0);\n            }\n        }\n        a {\n            text-decoration:none;\n            color:#6a8ea7;\n        }\n    }\n\n    .lang {\n        transition: all .3s ease;\n        color:#ff9e9e;\n        flex:1;\n        transform:translate(0,20px);\n        opacity:0;\n    }\n"],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))),c=r(58),s=(o=c)&&o.__esModule?o:{default:o};(i=r(3).enterModule)&&i(e);var u,_,d=t.ListStyle=s.default.div(l);u=r(3).default,_=r(3).leaveModule,u&&(u.register(d,"ListStyle","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/List/style.js"),_(e))}).call(this,r(17)(e))},372:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_class,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_mobxReact=__webpack_require__(52),_style=__webpack_require__(373),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var PlaceholderBar=(0,_mobxReact.observer)(_class=function(_React$Component){function PlaceholderBar(){return _classCallCheck(this,PlaceholderBar),_possibleConstructorReturn(this,(PlaceholderBar.__proto__||Object.getPrototypeOf(PlaceholderBar)).apply(this,arguments))}return _inherits(PlaceholderBar,_React$Component),_createClass(PlaceholderBar,[{key:"render",value:function(){var e=this.props.maskColor||"#fff",t=this.props.className||"",r=this.props.height||"30px",n=this.props.blockArr||[1,0,1,1,0,1,1,1,1,1];return _react2.default.createElement(_style.PlaceholderBarStyle,null,_react2.default.createElement("div",{className:"mask-wrapper "+t},_react2.default.createElement("div",{className:"animated-background",style:{height:r,backgroundSize:"300px"}},n.map(function(t,r){return _react2.default.createElement("div",{key:"placeholderBar_"+r,className:"background-masker "+(t?"":"w-10")+" lt-"+10*r,style:{backgroundColor:e}})}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PlaceholderBar}(_react2.default.Component))||_class,_default=PlaceholderBar,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(PlaceholderBar,"PlaceholderBar","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/PlaceholderBar/PlaceholderBar.js"),reactHotLoader.register(_default,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/PlaceholderBar/PlaceholderBar.js"),leaveModule(module))}).call(this,__webpack_require__(17)(module))},373:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.PlaceholderBarStyle=void 0;var n,a,o=s(["",""],["",""]),i=s(["\n    @keyframes placeHolderShimmer {\n        0% {\n            background-position: -300px 0\n        }\n        100% {\n            background-position: 300px 0\n        }\n    }\n    width:100%;\n    .mask-wrapper {\n        background: #fff;\n        .animated-background {\n            animation-duration: 1s;\n            animation-fill-mode: forwards;\n            animation-iteration-count: infinite;\n            animation-name: placeHolderShimmer;\n            animation-timing-function: linear;\n            background: #eee;\n            background: linear-gradient(to right, #eee 8%, #dddddd 18%, #eee 33%);\n            position: relative;\n        }\n    }\n    ","\n    .background-masker {\n        background: #fff;\n        position: absolute;\n        &.w-10 {\n            width: 10%;\n            height: 100%;\n        }\n    }\n"],["\n    @keyframes placeHolderShimmer {\n        0% {\n            background-position: -300px 0\n        }\n        100% {\n            background-position: 300px 0\n        }\n    }\n    width:100%;\n    .mask-wrapper {\n        background: #fff;\n        .animated-background {\n            animation-duration: 1s;\n            animation-fill-mode: forwards;\n            animation-iteration-count: infinite;\n            animation-name: placeHolderShimmer;\n            animation-timing-function: linear;\n            background: #eee;\n            background: linear-gradient(to right, #eee 8%, #dddddd 18%, #eee 33%);\n            position: relative;\n        }\n    }\n    ","\n    .background-masker {\n        background: #fff;\n        position: absolute;\n        &.w-10 {\n            width: 10%;\n            height: 100%;\n        }\n    }\n"]),l=r(58),c=(n=l)&&n.__esModule?n:{default:n};function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(){for(var e="",t=0;t<=10;t++)e+="\n        .lt-"+t+"0 {\n           left: "+10*t+"%;\n         }\n       ";return(0,l.css)(o,e)}(a=r(3).enterModule)&&a(e);var _,d,p=t.PlaceholderBarStyle=c.default.div(i,u());_=r(3).default,d=r(3).leaveModule,_&&(_.register(u,"createCSS","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/PlaceholderBar/style.js"),_.register(p,"PlaceholderBarStyle","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/PlaceholderBar/style.js"),d(e))}).call(this,r(17)(e))},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(375);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},375:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=r(1),i=(n=o)&&n.__esModule?n:{default:n},l=r(52);(a=r(3).enterModule)&&a(e);var c,s,u=function(e){var t=e.item;return i.default.createElement("div",{className:"listItem"},i.default.createElement("div",null,i.default.createElement("div",{className:"mr-5"},t.owner.login),i.default.createElement("a",{href:t.html_url,target:"_blink"},t.name),i.default.createElement("div",{className:"lang"},t.language)))},_=(0,l.observer)(u);t.default=_,c=r(3).default,s=r(3).leaveModule,c&&(c.register(u,"ListItem","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/ListItem/ListItem.js"),c.register(_,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/components/ListItem/ListItem.js"),s(e))}).call(this,r(17)(e))},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(377);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootPageStore=void 0;var n,a=r(12),o=r(378),i=(n=o)&&n.__esModule?n:{default:n};(0,a.configure)({enforceActions:"observed"}),t.RootPageStore=i.default},378:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_mobx=__webpack_require__(12),_storeAction2=__webpack_require__(379),_storeAction3=_interopRequireDefault(_storeAction2),_api=__webpack_require__(380),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,o){try{var i=t[a](o),l=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}function _initDefineProp(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _applyDecoratedDescriptor(e,t,r,n,a){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}function _initializerWarningHelper(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var initState={isFetching:!1,isLock:!1,lockTime:40,list:[],total_count:0,noResult:!1,param_keyword:"",param_sort:"",param_order:"",param_page:1},RootPageStore=(_class=function(_storeAction){function RootPageStore(){_classCallCheck(this,RootPageStore);var e=_possibleConstructorReturn(this,(RootPageStore.__proto__||Object.getPrototypeOf(RootPageStore)).call(this));return _initDefineProp(e,"getList",_descriptor,e),_initDefineProp(e,"setLockTime",_descriptor2,e),_initDefineProp(e,"searchBarOnChange",_descriptor3,e),_initDefineProp(e,"onSubmit",_descriptor4,e),_initDefineProp(e,"getNextPage",_descriptor5,e),e.initState=initState,(0,_mobx.extendObservable)(e,initState),e}return _inherits(RootPageStore,_storeAction),_createClass(RootPageStore,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}},{key:"resultTotal",get:function(){return this.list.length}},{key:"postData",get:function(){var e=this.param_keyword,t=this.param_sort,r=this.param_order,n=this.param_page;return{q:e,sort:t||void 0,order:r||void 0,param_page:n}}}]),RootPageStore}(_storeAction3.default),_descriptor=_applyDecoratedDescriptor(_class.prototype,"getList",[_mobx.action],{enumerable:!0,initializer:function(){var e,t=this;return e=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.assignData({isFetching:!0}),e.prev=1,e.next=4,(0,_api.getRepositories)(r).catch(function(e){e&&403===e.status&&(t.assignData({isLock:!0}),t.setLockTime(t.lockTime))});case 4:n=e.sent,t.param_keyword.length?n&&(a=[].concat(_toConsumableArray(t.list),_toConsumableArray(n.items)),t.assignData({list:a,total_count:n.total_count})):t.reset(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:t.assignData({isFetching:!1});case 12:case"end":return e.stop()}},e,t,[[1,8]])})),function(t){return e.apply(this,arguments)}}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"setLockTime",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return function(t){e.time&&clearTimeout(e.time),t?e.time=setTimeout(function(){e.assignData({lockTime:t,isLock:!0}),e.setLockTime(t-1)},1e3):(e.assignData({lockTime:40,isLock:!1}),e.getList(e.postData))}}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,"searchBarOnChange",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return function(t){e.assignData({param_keyword:t.target.value}),e.onSubmit()}}}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,"onSubmit",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return function(t){t&&(t.preventDefault(),t.stopPropagation()),e.assignData({noResult:!1,list:[],param_page:1}),e.param_keyword.length&&e.getList(e.postData)}}}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,"getNextPage",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.noResult||e.isFetching||e.isLock){t.next=4;break}return e.assignData({param_page:e.param_page+1}),t.next=4,e.getList(e.postData);case 4:e.resultTotal===e.total_count&&e.assignData({noResult:!0});case 5:case"end":return t.stop()}},t,e)}))}}),_applyDecoratedDescriptor(_class.prototype,"resultTotal",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"resultTotal"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"postData",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"postData"),_class.prototype),_class),store=new RootPageStore,_default=store,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(initState,"initState","/Users/jimmy/vhost/react-infinite-scroll-example/src/containers/RootPage/store/RootPageStore.js"),reactHotLoader.register(RootPageStore,"RootPageStore","/Users/jimmy/vhost/react-infinite-scroll-example/src/containers/RootPage/store/RootPageStore.js"),reactHotLoader.register(store,"store","/Users/jimmy/vhost/react-infinite-scroll-example/src/containers/RootPage/store/RootPageStore.js"),reactHotLoader.register(_default,"default","/Users/jimmy/vhost/react-infinite-scroll-example/src/containers/RootPage/store/RootPageStore.js"),leaveModule(module))}).call(this,__webpack_require__(17)(module))},379:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_mobx=__webpack_require__(12),enterModule;function _initDefineProp(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _applyDecoratedDescriptor(e,t,r,n,a){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}function _initializerWarningHelper(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var storeAction=(_class=function(){function storeAction(){_classCallCheck(this,storeAction),_initDefineProp(this,"assignData",_descriptor,this),_initDefineProp(this,"paramsAssign",_descriptor2,this),_initDefineProp(this,"reset",_descriptor3,this),this.initState={}}return _createClass(storeAction,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),storeAction}(),_descriptor=_applyDecoratedDescriptor(_class.prototype,"assignData",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return function(t,r){Object.assign(e,t)}}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"paramsAssign",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return function(t){var r=_extends({},e.params,t);e.assignData({params:r})}}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,"reset",[_mobx.action],{enumerable:!0,initializer:function(){var e=this;return function(){Object.assign(e,e.initState)}}}),_class),reactHotLoader,leaveModule;exports.default=storeAction,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(storeAction,"storeAction","/Users/jimmy/vhost/react-infinite-scroll-example/src/store/storeAction.js"),leaveModule(module))}).call(this,__webpack_require__(17)(module))},380:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.getRepositories=void 0;var n,a=r(381);(n=r(3).enterModule)&&n(e);var o,i,l=t.getRepositories=function(e){return(0,a.get)("https://api.github.com/search/repositories",e,!0)};o=r(3).default,i=r(3).leaveModule,o&&(o.register(l,"getRepositories","/Users/jimmy/vhost/react-infinite-scroll-example/src/actions/api.js"),i(e))}).call(this,r(17)(e))},381:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.get=_;var n,a,o=r(382),i=(n=o)&&n.__esModule?n:{default:n};(a=r(3).enterModule)&&a(e);var l,c,s=i.default.CancelToken,u=void 0;function _(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u&&u(),(0,i.default)({method:"get",url:e,params:t,timeout:6e4,headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/vnd.github.symmetra-preview+json"},cancelToken:r?new s(function(e){u=e}):void 0}).then(function(e){return e.data}).catch(function(e){return 403===e.response.status?Promise.reject({status:403}):catchError(e)})}l=r(3).default,c=r(3).leaveModule,l&&(l.register(s,"CancelToken","/Users/jimmy/vhost/react-infinite-scroll-example/src/actions/mainAction.js"),l.register(u,"cancel","/Users/jimmy/vhost/react-infinite-scroll-example/src/actions/mainAction.js"),l.register(_,"get","/Users/jimmy/vhost/react-infinite-scroll-example/src/actions/mainAction.js"),c(e))}).call(this,r(17)(e))}});
//# sourceMappingURL=app.js.map