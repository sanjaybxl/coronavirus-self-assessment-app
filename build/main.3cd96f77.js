!function(n){function e(e){for(var t,o,i=e[0],u=e[1],c=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var n,e=0;e<a.length;e++){for(var r=a[e],t=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(t=!1)}t&&(a.splice(e--,1),n=o(o.s=r[0]))}return n}var t={},s={6:0},a=[];function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(n){var e=[],r=s[n];if(0!==r)if(r)e.push(r[2]);else{var t=new Promise((function(e,t){r=s[n]=[e,t]}));e.push(r[2]=t);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(n){return o.p+"templates/"+({0:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx~C:/sbhaskar/coronavirus/co~57b78527",2:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx",3:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx",4:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/index.tsx",5:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/result.tsx",7:"vendors~C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx"}[n]||n)+"."+{0:"010b80a2",2:"6a8fa453",3:"563c3eb3",4:"674315ee",5:"f762036b",7:"655f198a"}[n]+".js"}(n);var u=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(c);var r=s[n];if(0!==r){if(r){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+t+": "+a+")",u.name="ChunkLoadError",u.type=t,u.request=a,r[1](u)}s[n]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},o.m=n,o.c=t,o.d=function(n,e,r){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/",o.oe=function(n){throw console.error(n),n};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([84,1,8]),r()}({132:function(n,e,r){var t={".":22,"./":22,"./index":22,"./index.js":22};function s(n){var e=a(n);return r(e)}function a(n){if(!r.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}s.keys=function(){return Object.keys(t)},s.resolve=a,n.exports=s,s.id=132},139:function(n,e,r){"use strict";r.r(e),function(n){var t=r(0),s=r.n(t),a=r(35),o=r.n(a),i=r(75),u=r(34);r(149);if(e.default=u.a,"undefined"!=typeof document){var c=document.getElementById("root"),l=c.hasChildNodes()?o.a.hydrate:o.a.render,p=function(n){l(s.a.createElement(i.AppContainer,null,s.a.createElement(n,null)),c)};p(u.a),n&&n.hot&&n.hot.accept("./App",(function(){p(u.a)}))}}.call(this,r(140)(n))},149:function(n,e,r){"use strict";var t=r(33),s=r(29),a=r(73),o=r(74);"undefined"!=typeof XMLHttpRequest&&t.a.use(a.a),t.a.use(o.a).use(s.a).init({fallbackLng:["en"],whitelist:["en"],defaultNS:"translation",debug:!0,backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1}});t.a},34:function(n,e,r){"use strict";var t=r(23),s=r.n(t),a=r(31),o=r.n(a),i=r(24),u=r.n(i),c=r(25),l=r.n(c),p=r(41),f=r.n(p),d=r(42),m=r.n(d),h=r(43),v=r.n(h),g=r(0),b=r.n(g),k=r(27),y=r(19),x=r(4),w=r(5),C=r.n(w),E=r(8),j=r.n(E),O=r(46),P=r(29),_=r(66);function S(){var n=j()(["\n    border: none;\n    background: none;\n    font-size: 1em;\n    color: inherit;\n    font-weight: ",";\n\n    &:first-of-type {\n        margin-right: 1em;\n    }\n"]);return S=function(){return n},n}function L(){var n=j()(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5vh 0;\n    color: white;\n"]);return L=function(){return n},n}function M(){var n=j()(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 99;\n    background: ",";\n"]);return M=function(){return n},n}var N=x.c.div(M(),(function(n){return n.isTransparent?"transparent":n.theme.colors.primary})),R=x.c.nav(L()),T=x.c.button(S(),(function(n){return n.active?"bold":"normal"})),A=function(){var n=Object(P.b)().i18n,e=Object(g.useState)("undefined"!=typeof window&&0===window.scrollY),r=C()(e,2),t=r[0],s=r[1];Object(g.useEffect)((function(){if("undefined"!=typeof window){var n=function(){s(0===window.scrollY)};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}}),[]);var a=n.languages.sort();return b.a.createElement(N,{isTransparent:t},b.a.createElement(O.a,null,b.a.createElement(R,null,b.a.createElement(_.a,null),b.a.createElement("div",null,a.map((function(e){return b.a.createElement(T,{key:e,active:n.language===e,onClick:function(){return n.changeLanguage(e)}})}))))))},F={borderRadius:"2px",colors:{primary:"#1D32FA",secondary:"white",light:"#EEEFF3"}};function z(){var n=j()(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');\n  html, body, #root, #root > div, #router {\n    min-height: 100%;\n    height: 100%;\n  }\n  body{\n    font-family: 'Helvetica', sans-serif;\n    background: ",";\n  }\n"]);return z=function(){return n},n}var D=Object(x.b)(z(),(function(n){return n.theme.colors.primary})),H=r(153);function B(){var n=j()(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 99;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ",";\n    \n    div{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-column-gap: 1em;\n        grid-row-gap: 1em;\n    }\n    span{\n        width: 1em;\n        height: 1em;\n        border-radius: 50%;\n        background: white;\n        \n        &:first-child{\n            animation: "," 1s linear infinite;\n        }\n        &:nth-child(2){\n            animation: "," 1s .2s linear infinite;\n        }\n        &:nth-child(3){\n            animation: "," 1s .4s linear infinite;\n        }\n        &:last-child{\n            animation: "," 1s .6s linear infinite;\n        }\n    }\n"]);return B=function(){return n},n}function Y(){var n=j()(["\n    0%, 100%{\n        opacity: 1;\n    }\n    50%{\n        opacity: .5;\n    }\n"]);return Y=function(){return n},n}var q=Object(x.d)(Y()),J=x.c.div(B(),(function(n){return new H.a(n.theme.colors.primary).setAlpha(.8).toRgbString()}),q,q,q,q),U=function(){return b.a.createElement(J,null,b.a.createElement("div",null,b.a.createElement("span",null),b.a.createElement("span",null),b.a.createElement("span",null),b.a.createElement("span",null)))};Object(k.addPrefetchExcludes)(["dynamic"]),r(148);var I=function(n){function e(n){var r;return u()(this,e),(r=f()(this,m()(e).call(this,n))).state={loading:!1},r}var r;return v()(e,n),l()(e,[{key:"componentDidMount",value:(r=o()(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.setState({loading:!0}),this.setState({loading:!1});case 2:case"end":return n.stop()}}),n,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){return"undefined"==typeof window?null:b.a.createElement(k.Root,null,b.a.createElement(x.a,{theme:F},b.a.createElement(D,null),b.a.createElement(b.a.Suspense,{fallback:b.a.createElement(U,null)},b.a.createElement(A,null),b.a.createElement(y.Router,{id:"router"},b.a.createElement(k.Routes,{path:"*"})))))}}]),e}(b.a.Component);e.a=I},46:function(n,e,r){"use strict";var t=r(8),s=r.n(t);function a(){var n=s()(["\n    width: calc(100% - 4em);\n    height: 100%;\n    margin: auto;\n    @media(min-width: 1000px){\n        width: 80%;\n    }\n"]);return a=function(){return n},n}var o=r(4).c.div(a());e.a=o},48:function(n,e,r){"use strict";r.r(e);var t=r(68),s=[{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/node_modules/react-static-plugin-styled-components",plugins:[],hooks:{}},{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/node_modules/react-static-plugin-reach-router",plugins:[],hooks:r.n(t)()({})},{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app",plugins:[],hooks:{}}];e.default=s},65:function(n,e,r){"use strict";r.r(e),function(n){r.d(e,"notFoundTemplate",(function(){return v}));var t=r(14),s=r.n(t),a=r(15),o=r.n(a),i=r(0),u=r.n(i),c=r(12),l=r.n(c);Object(c.setHasBabelPlugin)();var p={loading:function(){return null},error:function(n){return console.error(n.error),u.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=l()(o()({id:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx",load:function(){return Promise.all([r.e(2).then(r.bind(null,80))]).then((function(n){return n[0]}))},path:function(){return s.a.join(n,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx")},resolve:function(){return 80},chunkName:function(){return"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx"}}),p);f.template="C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx";var d=l()(o()({id:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx",load:function(){return Promise.all([Promise.all([r.e(1),r.e(7),r.e(0),r.e(3)]).then(r.bind(null,81))]).then((function(n){return n[0]}))},path:function(){return s.a.join(n,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx")},resolve:function(){return 81},chunkName:function(){return"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx"}}),p);d.template="C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx";var m=l()(o()({id:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/index.tsx",load:function(){return Promise.all([r.e(4).then(r.bind(null,83))]).then((function(n){return n[0]}))},path:function(){return s.a.join(n,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/index.tsx")},resolve:function(){return 83},chunkName:function(){return"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/index.tsx"}}),p);m.template="C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/index.tsx";var h=l()(o()({id:"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/result.tsx",load:function(){return Promise.all([Promise.all([r.e(0),r.e(5)]).then(r.bind(null,82))]).then((function(n){return n[0]}))},path:function(){return s.a.join(n,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/result.tsx")},resolve:function(){return 82},chunkName:function(){return"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/result.tsx"}}),p);h.template="C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/result.tsx",e.default={"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx":f,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/app.tsx":d,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/index.tsx":m,"C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/result.tsx":h};var v="C:/sbhaskar/coronavirus/coronavirus-self-assessment-app/src/pages/404.tsx"}.call(this,"/")},66:function(n,e,r){"use strict";var t=r(17),s=r.n(t),a=r(8),o=r.n(a),i=r(0),u=r.n(i),c=r(4),l=r(19);r(16);function p(){var n=o()(["\n    color: ",";\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    span {\n        display: block;\n        height: ",";\n        width: ",';\n        border-radius: 50%;\n        background: red;\n        margin-right: 0.5em;\n        position: relative;\n\n        &::after {\n            content: "";\n            display: block;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            height: ',";\n            width: ",";\n            border-radius: 50%;\n            background: ",";;\n        }\n    }\n    h4 {\n        margin: 0;\n        font-size: ",";\n    }\n"]);return p=function(){return n},n}var f=Object(c.c)(l.Link)(p(),(function(n){return n.primary?n.theme.colors.primary:"inherit"}),(function(n){return n.big?"2em":"1em"}),(function(n){return n.big?"2em":"1em"}),(function(n){return n.big?"1em":".5em"}),(function(n){return n.big?"1em":".5em"}),(function(n){return n.primary?"white":n.theme.colors.primary}),(function(n){return n.big?"2em":"inherit"}));e.a=function(n){return u.a.createElement(f,s()({to:"/"},n),u.a.createElement("span",null),u.a.createElement("h4",null,"How You ",u.a.createElement("br",null),"Feel World"))}},84:function(n,e,r){r(85),r(130),n.exports=r(137)}});