"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[181],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9200:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"enable-debug-mode",title:"Enable Debug Mode"},l=void 0,u={unversionedId:"guides/enable-debug-mode",id:"guides/enable-debug-mode",title:"Enable Debug Mode",description:"The Debug Mode can be enabled by setting the DEBUG config options, which can be done by either setting it as a Environment Variable or package.json option.",source:"@site/../docs/guides/enable-debug-mode.md",sourceDirName:"guides",slug:"/guides/enable-debug-mode",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/enable-debug-mode",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/enable-debug-mode.md",tags:[],version:"current",frontMatter:{id:"enable-debug-mode",title:"Enable Debug Mode"},sidebar:"guides",previous:{title:"Integration with Docker",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/integration-examples/docker"},next:{title:"Known Issues",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/known-issues"}},c={},p=[{value:"Examples",id:"examples",level:2},{value:"Via Environment Variable",id:"via-environment-variable",level:3},{value:"Via <code>package.json</code> config",id:"via-packagejson-config",level:3},{value:"Extra Notes",id:"extra-notes",level:2},{value:"npm quirks",id:"npm-quirks",level:3}],d={toc:p},m="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Debug Mode can be enabled by setting the ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/8.x/docs/api/config-options#debug"},(0,a.kt)("inlineCode",{parentName:"a"},"DEBUG"))," config options, which can be done by either setting it as a ",(0,a.kt)("a",{parentName:"p",href:"../api/config-options#how-to-use-them-as-environment-variables"},"Environment Variable")," or ",(0,a.kt)("a",{parentName:"p",href:"../api/config-options#how-to-use-them-in-the-packagejson"},(0,a.kt)("inlineCode",{parentName:"a"},"package.json")," option"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"via-environment-variable"},"Via Environment Variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# also available case-insensitive values: "on" "yes" "true"\nMONGOMS_DEBUG=1 npm run test\n')),(0,a.kt)("h3",{id:"via-packagejson-config"},"Via ",(0,a.kt)("inlineCode",{parentName:"h3"},"package.json")," config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "mongodbMemoryServer": {\n      "debug": "1", // also available case-insensitive values: "on" "yes" "true"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"extra-notes"},"Extra Notes"),(0,a.kt)("h3",{id:"npm-quirks"},"npm quirks"),(0,a.kt)("p",null,"Starting with NPM 7, scripts (like ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall"),") will run in parallel and will not output any logging, but sometimes in ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server")," it is required to provide the Debug Log from a ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," script."),(0,a.kt)("p",null,"Logging can be temporarly enabled with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Change scripts to be executed on the NPM main proccess instead of workers AND log script output\nMONGOMS_DEBUG=1 npm install --foreground-scripts\n")))}g.isMDXComponent=!0}}]);