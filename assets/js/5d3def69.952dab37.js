(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[6242],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2660:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return s}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),p={id:"api.creatorent",title:"Interface: CreatorEnt",sidebar_label:"CreatorEnt",custom_edit_url:null},o={unversionedId:"interfaces/api.creatorent",id:"interfaces/api.creatorent",isDocsHomePage:!1,title:"Interface: CreatorEnt",description:"api.CreatorEnt",source:"@site/api/interfaces/api.creatorent.md",sourceDirName:"interfaces",slug:"/interfaces/api.creatorent",permalink:"/mapillary-js/api/interfaces/api.creatorent",editUrl:null,version:"current",sidebar_label:"CreatorEnt",frontMatter:{id:"api.creatorent",title:"Interface: CreatorEnt",sidebar_label:"CreatorEnt",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: CoreImagesContract",permalink:"/mapillary-js/api/interfaces/api.coreimagescontract"},next:{title:"Interface: EntContract<T\\>",permalink:"/mapillary-js/api/interfaces/api.entcontract"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"username",id:"username",children:[]}]}],c={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api"},"api"),".CreatorEnt"),(0,i.kt)("p",null,"Interface that describes the raw image creator properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"interface"))," CreatorEnt"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,i.kt)("em",{parentName:"a"},"IDEnt"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"CreatorEnt")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Unique id."),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},"IDEnt"),".",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident#id"},"id")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/IDEnt.ts#L10"},"api/ents/IDEnt.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"username"},"username"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"username"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"The username of the user."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CreatorEnt.ts#L12"},"api/ents/CreatorEnt.ts:12")))}s.isMDXComponent=!0}}]);