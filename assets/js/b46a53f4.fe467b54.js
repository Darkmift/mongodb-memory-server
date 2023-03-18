"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[750],{3905:function(e,r,n){n.d(r,{Zo:function(){return m},kt:function(){return y}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},m=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,y=l["".concat(c,".").concat(d)]||l[d]||p[d]||i;return n?t.createElement(y,s(s({ref:r},m),{},{components:n})):t.createElement(y,s({ref:r},m))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3452:function(e,r,n){n.r(r),n.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={id:"common-issues",title:"Common Issues"},c=void 0,u={unversionedId:"guides/common-issues",id:"guides/common-issues",title:"Common Issues",description:"There are some common issues you may encounter with mongodb-memory-server (or also manually handling mongod instances), this guide will try to explain why they happen how to fix those issues.",source:"@site/../docs/guides/common-issues.md",sourceDirName:"guides",slug:"/guides/common-issues",permalink:"/mongodb-memory-server/docs/guides/common-issues",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/common-issues.md",tags:[],version:"current",frontMatter:{id:"common-issues",title:"Common Issues"},sidebar:"guides",previous:{title:"Mongodb Server Versions",permalink:"/mongodb-memory-server/docs/guides/mongodb-server-versions"},next:{title:"Migrate to version 8.0.0",permalink:"/mongodb-memory-server/docs/guides/migration/migrate8"}},m={},l=[{value:"MongoWriteConcernError: operation was interrupted",id:"mongowriteconcernerror-operation-was-interrupted",level:2}],p={toc:l};function d(e){var r=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are some common issues you may encounter with mongodb-memory-server (or also manually handling mongod instances), this guide will try to explain why they happen how to fix those issues."),(0,i.kt)("h2",{id:"mongowriteconcernerror-operation-was-interrupted"},"MongoWriteConcernError: operation was interrupted"),(0,i.kt)("p",null,"The Error ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoWriteConcernError: operation was interrupted")," happens when a operation which is not retryable fails, which includes for example ",(0,i.kt)("inlineCode",{parentName:"p"},"db.dropDatabase"),".\nThis Error happens because mongodb firstly starts all instances, says they are okay and has a primary (which are all events mongodb-memory-server listens for before resolving ",(0,i.kt)("inlineCode",{parentName:"p"},".start"),"), but the shortly after the ",(0,i.kt)("inlineCode",{parentName:"p"},".start")," is resolved, the instace that is primary decides to step-down due to whatever reason."),(0,i.kt)("p",null,"The fix is to manually re-try those operations, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// original:\nasync function setup(db) {\n  await db.dropDatabase();\n}\n\n// fix\nasync function setup(db) {\n  let retries = 5;\n  while (retries > 0) {\n    retries -= 1;\n    try {\n      await _setup(db);\n    } catch (err) {\n      if (err instanceof mongodb.MongoWriteConcernError && /operation was interrupted/.test(err.message)) {\n        continue;\n      }\n\n      throw err;\n    }\n  }\n}\n\nasync function _setup(db) {\n  await db.dropDatabase();\n}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/retryable-writes/#retryable-write-operations"},"Operations which are retry-able"),"."))}d.isMDXComponent=!0}}]);