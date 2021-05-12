(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[1495],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3016:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o={id:"viewer.transitionmode",title:"Enumeration: TransitionMode",sidebar_label:"TransitionMode",custom_edit_url:null},s={unversionedId:"enums/viewer.transitionmode",id:"enums/viewer.transitionmode",isDocsHomePage:!1,title:"Enumeration: TransitionMode",description:"viewer.TransitionMode",source:"@site/api/enums/viewer.transitionmode.md",sourceDirName:"enums",slug:"/enums/viewer.transitionmode",permalink:"/mapillary-js/api/enums/viewer.transitionmode",editUrl:null,version:"current",sidebar_label:"TransitionMode",frontMatter:{id:"viewer.transitionmode",title:"Enumeration: TransitionMode",sidebar_label:"TransitionMode",custom_edit_url:null},sidebar:"api",previous:{title:"Enumeration: RenderPass",permalink:"/mapillary-js/api/enums/viewer.renderpass"},next:{title:"Class: DataProviderBase",permalink:"/mapillary-js/api/classes/api.dataproviderbase"}},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"Default",id:"default",children:[]},{value:"Instantaneous",id:"instantaneous",children:[]}]}],u={toc:l};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/viewer"},"viewer"),".TransitionMode"),(0,a.kt)("p",null,"Enumeration for transition mode"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"readonly"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))," Modes for specifying how transitions\nbetween images are performed."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Default"),": = 0"),(0,a.kt)("p",null,"Default transitions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))," The viewer dynamically determines\nwhether transitions should be performed with or\nwithout motion and blending for each transition\nbased on the underlying data."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/state/TransitionMode.ts#L17"},"state/TransitionMode.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instantaneous"},"Instantaneous"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Instantaneous"),": = 1"),(0,a.kt)("p",null,"Instantaneous transitions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))," All transitions are performed\nwithout motion or blending."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/state/TransitionMode.ts#L25"},"state/TransitionMode.ts:25")))}p.isMDXComponent=!0}}]);