"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[695],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,d=m["".concat(l,".").concat(u)]||m[u]||y[u]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3277:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"dry-mongo-binary",title:"DryMongoBinary"},l=void 0,p={unversionedId:"api/classes/dry-mongo-binary",id:"api/classes/dry-mongo-binary",title:"DryMongoBinary",description:"API Documentation of DryMongoBinary-Class",source:"@site/../docs/api/classes/dry-mongo-binary.md",sourceDirName:"api/classes",slug:"/api/classes/dry-mongo-binary",permalink:"/mongodb-memory-server/versions/8.x/docs/api/classes/dry-mongo-binary",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/classes/dry-mongo-binary.md",tags:[],version:"current",frontMatter:{id:"dry-mongo-binary",title:"DryMongoBinary"},sidebar:"api",previous:{title:"MongoBinary",permalink:"/mongodb-memory-server/versions/8.x/docs/api/classes/mongo-binary"},next:{title:"MongoMemoryServerStates",permalink:"/mongodb-memory-server/versions/8.x/docs/api/enums/mongo-memory-server-states"}},c={},m=[{value:"Functions",id:"functions",level:2},{value:"locateBinary",id:"locatebinary",level:3},{value:"generateOptions",id:"generateoptions",level:3},{value:"parseArchiveNameRegex",id:"parsearchivenameregex",level:3},{value:"getBinaryName",id:"getbinaryname",level:3},{value:"combineBinaryName",id:"combinebinaryname",level:3},{value:"getSytemPath",id:"getsytempath",level:3},{value:"generatePaths",id:"generatepaths",level:3},{value:"generateDownloadPath",id:"generatedownloadpath",level:3},{value:"homedir",id:"homedir",level:3},{value:"Values",id:"values",level:2},{value:"binaryCache",id:"binarycache",level:3}],y={toc:m},u="wrapper";function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API Documentation of ",(0,i.kt)("inlineCode",{parentName:"p"},"DryMongoBinary"),"-Class"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This class is not actually meant to be constructed, it only consists of static functions & values")),(0,i.kt)("h3",{id:"locatebinary"},"locateBinary"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async locateBinary(opts: DryMongoBinaryOptions): Promise<string | undefined>")),(0,i.kt)("p",null,"Try to locate a existing binary without downloading or touching the filesystem much."),(0,i.kt)("h3",{id:"generateoptions"},"generateOptions"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async generateOptions(opts?: DryMongoBinaryOptions): Promise<Required<DryMongoBinaryOptions>>")),(0,i.kt)("p",null,"Generate a full ",(0,i.kt)("inlineCode",{parentName:"p"},"DryMongoBinaryOptions")," from partial input."),(0,i.kt)("h3",{id:"parsearchivenameregex"},"parseArchiveNameRegex"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static parseArchiveNameRegex(input: string, opts: Required<DryMongoBinaryOptions>): Required<DryMongoBinaryOptions>")),(0,i.kt)("p",null,"Parse a archive name into useable options."),(0,i.kt)("h3",{id:"getbinaryname"},"getBinaryName"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async getBinaryName(opts: DryMongoBinaryNameOptions): Promise<string>")),(0,i.kt)("p",null,"Get what the binary name should be formatted like.",(0,i.kt)("br",{parentName:"p"}),"\n","If ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/8.x/docs/api/config-options#use_archive_name_for_binary_name"},(0,i.kt)("inlineCode",{parentName:"a"},"USE_ARCHIVE_NAME_FOR_BINARY_NAME"))," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then the archive name will be used instead of what MMS uses by default."),(0,i.kt)("h3",{id:"combinebinaryname"},"combineBinaryName"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static combineBinaryName(basePath: string, binaryName: string): string")),(0,i.kt)("p",null,"Helper function to consistently combine a ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"binaryName")," (eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/binary"),")"),(0,i.kt)("h3",{id:"getsytempath"},"getSytemPath"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async getSystemPath(systemBinary: string): Promise<string | undefined>")),(0,i.kt)("p",null,"Check if the given path has all the permissions required to be executed."),(0,i.kt)("h3",{id:"generatepaths"},"generatePaths"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async generatePaths(opts: DryMongoBinaryOptions & DryMongoBinaryNameOptions): Promise<DryMongoBinaryPaths>")),(0,i.kt)("p",null,"Get the Paths where binaries may be located in."),(0,i.kt)("h3",{id:"generatedownloadpath"},"generateDownloadPath"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async generateDownloadPath(opts: DryMongoBinaryOptions & DryMongoBinaryNameOptions): Promise<[boolean, string]>")),(0,i.kt)("p",null,"Get the path where the binary will be downloaded to."),(0,i.kt)("h3",{id:"homedir"},"homedir"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"private static homedir(): string")),(0,i.kt)("p",null,"Used to get the Home-Dir of the current user, it is a function on the class for easy-mocking, because ",(0,i.kt)("inlineCode",{parentName:"p"},"os.homedir")," cannot be easily be mocked in jest."),(0,i.kt)("h2",{id:"values"},"Values"),(0,i.kt)("h3",{id:"binarycache"},"binaryCache"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static binaryCache: Map<string, string> = new Map()")),(0,i.kt)("p",null,"Cache for already found binaries to not hit the filesystem too much."))}d.isMDXComponent=!0}}]);