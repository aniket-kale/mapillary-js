(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[2677],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),g=n,f=s["".concat(c,".").concat(g)]||s[g]||u[g]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8510:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o={id:"viewer.navigationedgedata",title:"Interface: NavigationEdgeData",sidebar_label:"NavigationEdgeData",custom_edit_url:null},l={unversionedId:"interfaces/viewer.navigationedgedata",id:"interfaces/viewer.navigationedgedata",isDocsHomePage:!1,title:"Interface: NavigationEdgeData",description:"viewer.NavigationEdgeData",source:"@site/api/interfaces/viewer.navigationedgedata.md",sourceDirName:"interfaces",slug:"/interfaces/viewer.navigationedgedata",permalink:"/mapillary-js/api/interfaces/viewer.navigationedgedata",editUrl:null,version:"current",sidebar_label:"NavigationEdgeData",frontMatter:{id:"viewer.navigationedgedata",title:"Interface: NavigationEdgeData",sidebar_label:"NavigationEdgeData",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: NavigationEdge",permalink:"/mapillary-js/api/interfaces/viewer.navigationedge"},next:{title:"Interface: NavigationEdgeStatus",permalink:"/mapillary-js/api/interfaces/viewer.navigationedgestatus"}},c=[{value:"Properties",id:"properties",children:[{value:"direction",id:"direction",children:[]},{value:"worldMotionAzimuth",id:"worldmotionazimuth",children:[]}]}],p={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/viewer"},"viewer"),".NavigationEdgeData"),(0,i.kt)("p",null,"Interface that describes additional properties of an edge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"interface"))," NavigationEdgeData"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"direction"},"direction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"direction"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/enums/viewer.navigationdirection"},(0,i.kt)("em",{parentName:"a"},"NavigationDirection"))),(0,i.kt)("p",null,"The edge direction."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/graph/edge/interfaces/NavigationEdgeData.ts#L12"},"graph/edge/interfaces/NavigationEdgeData.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"worldmotionazimuth"},"worldMotionAzimuth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"worldMotionAzimuth"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"The counter clockwise horizontal rotation angle from\nthe X-axis in a spherical coordiante system of the\nmotion from the source image to the destination node."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/graph/edge/interfaces/NavigationEdgeData.ts#L19"},"graph/edge/interfaces/NavigationEdgeData.ts:19")))}d.isMDXComponent=!0}}]);