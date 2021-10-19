"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[120],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return c}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?t.createElement(k,o(o({ref:n},d),{},{components:r})):t.createElement(k,o({ref:n},d))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9002:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var t=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"error-warning-details",title:"Details for Errors & Warnings"},s=void 0,p={unversionedId:"guides/error-warning-details",id:"guides/error-warning-details",isDocsHomePage:!1,title:"Details for Errors & Warnings",description:"StateError",source:"@site/../docs/guides/error-warning-details.md",sourceDirName:"guides",slug:"/guides/error-warning-details",permalink:"/mongodb-memory-server/docs/guides/error-warning-details",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/error-warning-details.md",tags:[],version:"current",frontMatter:{id:"error-warning-details",title:"Details for Errors & Warnings"},sidebar:"guides",previous:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"},next:{title:"Mongodb Server Versions",permalink:"/mongodb-memory-server/docs/guides/mongodb-server-versions"}},d=[{value:"StateError",id:"stateerror",children:[]},{value:"UnknownLockfileStatusError",id:"unknownlockfilestatuserror",children:[]},{value:"UnableToUnlockLockfileError",id:"unabletounlocklockfileerror",children:[]},{value:"UnknownArchitectureError",id:"unknownarchitectureerror",children:[]},{value:"UnknownPlatformError",id:"unknownplatformerror",children:[]},{value:"WaitForPrimaryTimeoutError",id:"waitforprimarytimeouterror",children:[]},{value:"EnsureInstanceError",id:"ensureinstanceerror",children:[]},{value:"NoSystemBinaryFoundError",id:"nosystembinaryfounderror",children:[]},{value:"Md5CheckFailedError",id:"md5checkfailederror",children:[]},{value:"StartBinaryFailedError",id:"startbinaryfailederror",children:[]},{value:"InstanceInfoError",id:"instanceinfoerror",children:[]},{value:"KeyFileMissingError",id:"keyfilemissingerror",children:[]},{value:"AuthNotObjectError",id:"authnotobjecterror",children:[]},{value:"InsufficientPermissionsError",id:"insufficientpermissionserror",children:[]},{value:"BinaryNotFoundError",id:"binarynotfounderror",children:[]},{value:"AssertionFallbackError",id:"assertionfallbackerror",children:[]},{value:"ReplsetCountLowError",id:"replsetcountlowerror",children:[]}],u={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"stateerror"},"StateError"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'Incorrect State for operation: "${gotState}", allowed States: "[${wantedStates.join(\',\')}]"\nThis may be because of using a v6.x way of calling functions, look at the following guide if anything applies:\nhttps://nodkz.github.io/mongodb-memory-server/docs/guides/migrate7#no-function-other-than-start-create-ensureinstance-will-be-starting-anything\n')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown if an function (or setter) is called, but the state is not what it should be.",(0,i.kt)("br",{parentName:"p"}),"\n","(like calling start again after already being started - or changing options while running)"),(0,i.kt)("h2",{id:"unknownlockfilestatuserror"},"UnknownLockfileStatusError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Unknown LockFile Status: "${status}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown if an number outside the ",(0,i.kt)("inlineCode",{parentName:"p"},"LockFileStatus")," Enum is used"),(0,i.kt)("h2",{id:"unabletounlocklockfileerror"},"UnableToUnlockLockfileError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot unlock file \"${file}\", because it is not locked by this ${thisInstance ? 'instance' : 'process'}")),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown when this package cannot get what platform it is running on"),(0,i.kt)("h2",{id:"unknownarchitectureerror"},"UnknownArchitectureError"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'Unsupported Architecture-Platform combination: arch: "${arch}", platform: "${platform}"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'Unsupported Architecture: "${arch}"'))),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown when this package runs on an unsupported architecture by mongodb"),(0,i.kt)("h2",{id:"unknownplatformerror"},"UnknownPlatformError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Unknown Platform: "${platform}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","The Platform ",(0,i.kt)("inlineCode",{parentName:"p"},"${platform}")," is not supported, only supported platform currently are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"win32")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"linux"))),(0,i.kt)("h2",{id:"waitforprimarytimeouterror"},"WaitForPrimaryTimeoutError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Timed out after ${timeout}ms while waiting for a Primary (where: "${where}")')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Waiting for a Primary has timedout, this originates from 4 common issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Starting instances failed"),(0,i.kt)("li",{parentName:"ul"},"A even number of instances started and are unable to elect a Primary"),(0,i.kt)("li",{parentName:"ul"},"Internal Problem"),(0,i.kt)("li",{parentName:"ul"},"Target System is too slow to start the number of instances")),(0,i.kt)("p",null,"Default Timeout: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000 * 30")," (30 seconds)"),(0,i.kt)("h2",{id:"ensureinstanceerror"},"EnsureInstanceError"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'${baseMesasge} state was "running" but "instanceInfo" was undefined!')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'${baseMesasge} "instanceInfo" was undefined after running "start"'))),(0,i.kt)("p",null,"Details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First Error Message gets thrown when ",(0,i.kt)("inlineCode",{parentName:"li"},"ensureInstance")," is called and the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"running"),", but somehow ",(0,i.kt)("inlineCode",{parentName:"li"},"instanceInfo")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Second Error Message gets thrown when ",(0,i.kt)("inlineCode",{parentName:"li"},"ensureInstance")," is called and after ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," was called by ",(0,i.kt)("inlineCode",{parentName:"li"},"ensureInstance")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"instanceInfo")," is still ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,i.kt)("p",null,"In any case this Error gets thrown, it means that some internal problem happened that was not handled with another Error, please report if your get this error and did not mock anything."),(0,i.kt)("p",null,"Also see ",(0,i.kt)("a",{parentName:"p",href:"#instanceinfoerror"},(0,i.kt)("inlineCode",{parentName:"a"},"InstanceInfoError")),"."),(0,i.kt)("h2",{id:"nosystembinaryfounderror"},"NoSystemBinaryFoundError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Config option "SYSTEM_BINARY" was provided with value "${binaryPath}", but no binary could be found!')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Config Options ",(0,i.kt)("a",{parentName:"p",href:"../api/config-options#system_binary"},(0,i.kt)("inlineCode",{parentName:"a"},"SYSTEM_BINARY"))," was set, but no binary could be found at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"${binaryPath}"),".\nLikely causes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Binary Exists at the specified path"),(0,i.kt)("li",{parentName:"ul"},"The Binary is does not have the necessary permissions and is so ignored (required permissions are ",(0,i.kt)("inlineCode",{parentName:"li"},"fs.constants.X_OK")," (",(0,i.kt)("inlineCode",{parentName:"li"},"--x"),"))")),(0,i.kt)("p",null,"Also see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insufficientpermissionserror"},(0,i.kt)("inlineCode",{parentName:"a"},"InsufficientPermissionsError"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#binarynotfounderror"},(0,i.kt)("inlineCode",{parentName:"a"},"BinaryNotFoundError")))),(0,i.kt)("h2",{id:"md5checkfailederror"},"Md5CheckFailedError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'MD5 check failed! Binary MD5 is "${binarymd5}", Checkfile MD5 is "${checkfilemd5}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Download MD5 check was enabled (",(0,i.kt)("a",{parentName:"p",href:"../api/config-options#md5_check"},(0,i.kt)("inlineCode",{parentName:"a"},"MD5_CHECK")),") but failed, listing the local file md5 as ",(0,i.kt)("inlineCode",{parentName:"p"},"${binarymd5}")," and the downloaded md5 as ",(0,i.kt)("inlineCode",{parentName:"p"},"${checkfilemd5}")),(0,i.kt)("h2",{id:"startbinaryfailederror"},"StartBinaryFailedError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Starting the Binary Failed (PID is undefined)! Binary: "${binary}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Trying to start the binary ",(0,i.kt)("inlineCode",{parentName:"p"},"${binary}")," as a childprocess somehow failed by having property ",(0,i.kt)("inlineCode",{parentName:"p"},"pid")," being ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),".  "),(0,i.kt)("p",null,"Enable ",(0,i.kt)("a",{parentName:"p",href:"./enable-debug-mode"},"Debug Mode")," for more information."),(0,i.kt)("h2",{id:"instanceinfoerror"},"InstanceInfoError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"instanceInfo" was undefined when expected to be defined! (where: "${where}")')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"instanceInfo")," was ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when it was expected to have been defined previously. Please Report if this error gets thrown."),(0,i.kt)("p",null,"Enable ",(0,i.kt)("a",{parentName:"p",href:"./enable-debug-mode"},"Debug Mode")," for more information."),(0,i.kt)("h2",{id:"keyfilemissingerror"},"KeyFileMissingError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"keyfileLocation" was undefined when expected!')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Option ",(0,i.kt)("inlineCode",{parentName:"p"},"keyfileLocation")," was ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when it was needed. This Options is required when starting a ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoInstance")," and option ",(0,i.kt)("inlineCode",{parentName:"p"},"replSet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," are set."),(0,i.kt)("h2",{id:"authnotobjecterror"},"AuthNotObjectError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"auth" was not a object when it was expected!')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Property ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," was expect to be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," (transform happens in the setter for ",(0,i.kt)("inlineCode",{parentName:"p"},"replSetOpts"),"). Please Report if this error gets thrown."),(0,i.kt)("h2",{id:"insufficientpermissionserror"},"InsufficientPermissionsError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'File "${path}" does not have the required Permissions, required Permissions: "--x"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Binary Check was conducted and found that the specified file ",(0,i.kt)("inlineCode",{parentName:"p"},"${path}")," exists, but does not have the required permissions, required permissions are ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.constants.X_OK")," (",(0,i.kt)("inlineCode",{parentName:"p"},"--x"),")."),(0,i.kt)("h2",{id:"binarynotfounderror"},"BinaryNotFoundError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'No Binary at path "${path}" was found! (ENOENT)')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Binary Check was conducted and found that the specified file ",(0,i.kt)("inlineCode",{parentName:"p"},"${path}")," did not exist (",(0,i.kt)("inlineCode",{parentName:"p"},"ENOENT"),"), this may be a result of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Binary Download failed without throwing another Error"),(0,i.kt)("li",{parentName:"ul"},"The Path generation had a problem")),(0,i.kt)("h2",{id:"assertionfallbackerror"},"AssertionFallbackError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Assert failed - no custom error")),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown when no custom error to ",(0,i.kt)("inlineCode",{parentName:"p"},"assertion")," is given, this should never happen"),(0,i.kt)("h2",{id:"replsetcountlowerror"},"ReplsetCountLowError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'ReplSet Count needs to be 1 or higher! (specified count: "${count}")')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","ReplSet count (like ",(0,i.kt)("inlineCode",{parentName:"p"},"new MongoMemoryReplSet({ replSet: { count: 0 } })"),") needs to be ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," or higher"))}m.isMDXComponent=!0}}]);