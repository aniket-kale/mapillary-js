(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[5963],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(o,".").concat(f)]||u[f]||s[f]||i;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1509:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),p={id:"api.coreimageent",title:"Interface: CoreImageEnt",sidebar_label:"CoreImageEnt",custom_edit_url:null},l={unversionedId:"interfaces/api.coreimageent",id:"interfaces/api.coreimageent",isDocsHomePage:!1,title:"Interface: CoreImageEnt",description:"api.CoreImageEnt",source:"@site/api/interfaces/api.coreimageent.md",sourceDirName:"interfaces",slug:"/interfaces/api.coreimageent",permalink:"/mapillary-js/api/interfaces/api.coreimageent",editUrl:null,version:"current",sidebar_label:"CoreImageEnt",frontMatter:{id:"api.coreimageent",title:"Interface: CoreImageEnt",sidebar_label:"CoreImageEnt",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: ClusterContract",permalink:"/mapillary-js/api/interfaces/api.clustercontract"},next:{title:"Interface: CoreImagesContract",permalink:"/mapillary-js/api/interfaces/api.coreimagescontract"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"computed_geometry",id:"computed_geometry",children:[]},{value:"geometry",id:"geometry",children:[]},{value:"id",id:"id",children:[]},{value:"sequence",id:"sequence",children:[]}]}],c={toc:o};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api"},"api"),".CoreImageEnt"),(0,i.kt)("p",null,"Interface that describes the raw core image properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"interface"))," CoreImageEnt"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,i.kt)("em",{parentName:"a"},"IDEnt"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"CoreImageEnt")),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.imageent"},(0,i.kt)("em",{parentName:"a"},"ImageEnt"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"computed_geometry"},"computed","_","geometry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"computed","_","geometry"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.lnglat"},(0,i.kt)("em",{parentName:"a"},"LngLat"))),(0,i.kt)("p",null,"SfM computed longitude, latitude in WGS84 datum, measured in degrees."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CoreImageEnt.ts#L16"},"api/ents/CoreImageEnt.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"geometry"},"geometry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"geometry"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.lnglat"},(0,i.kt)("em",{parentName:"a"},"LngLat"))),(0,i.kt)("p",null,"Original EXIF longitude, latitude in WGS84 datum, measured in degrees."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CoreImageEnt.ts#L21"},"api/ents/CoreImageEnt.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Unique id."),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},"IDEnt"),".",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident#id"},"id")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/IDEnt.ts#L10"},"api/ents/IDEnt.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sequence"},"sequence"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"sequence"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,i.kt)("em",{parentName:"a"},"IDEnt"))),(0,i.kt)("p",null,"Sequence that the image is part of."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CoreImageEnt.ts#L26"},"api/ents/CoreImageEnt.ts:26")))}m.isMDXComponent=!0}}]);