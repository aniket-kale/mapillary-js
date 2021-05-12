(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[7076],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return d}});var p=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);e&&(p=p.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,p)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,p,a=function(t,e){if(null==t)return{};var n,p,a={},r=Object.keys(t);for(p=0;p<r.length;p++)n=r[p],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(p=0;p<r.length;p++)n=r[p],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=p.createContext({}),s=function(t){var e=p.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return p.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return p.createElement(p.Fragment,{},e)}},c=p.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return n?p.createElement(k,o(o({ref:e},m),{},{components:n})):p.createElement(k,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return p.createElement.apply(null,o)}return p.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6252:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return m}});var p=n(2122),a=n(9756),r=(n(7294),n(3905)),o={id:"component.popup",title:"Class: Popup",sidebar_label:"Popup",custom_edit_url:null},l={unversionedId:"classes/component.popup",id:"classes/component.popup",isDocsHomePage:!1,title:"Class: Popup",description:"component.Popup",source:"@site/api/classes/component.popup.md",sourceDirName:"classes",slug:"/classes/component.popup",permalink:"/mapillary-js/api/classes/component.popup",editUrl:null,version:"current",sidebar_label:"Popup",frontMatter:{id:"component.popup",title:"Class: Popup",sidebar_label:"Popup",custom_edit_url:null},sidebar:"api",previous:{title:"Class: PolygonGeometry",permalink:"/mapillary-js/api/classes/component.polygongeometry"},next:{title:"Class: PopupComponent",permalink:"/mapillary-js/api/classes/component.popupcomponent"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"setBasicPoint",id:"setbasicpoint",children:[]},{value:"setBasicRect",id:"setbasicrect",children:[]},{value:"setDOMContent",id:"setdomcontent",children:[]},{value:"setHTML",id:"sethtml",children:[]},{value:"setText",id:"settext",children:[]}]}],s={toc:i};function m(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,p.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".Popup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"classdesc"))," Popup instance for rendering custom HTML content\non top of images. Popups are based on 2D basic image coordinates\n(see the ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/viewer.viewer-1"},"Viewer")," class documentation for more information about coordinate\nsystems) and a certain popup is therefore only relevant to a single image.\nPopups related to a certain image should be removed when moving\nto another image."),(0,r.kt)("p",null,"A popup must have both its content and its point or rect set to be\nrendered. Popup options can not be updated after creation but the\nbasic point or rect as well as its content can be changed by calling\nthe appropriate methods."),(0,r.kt)("p",null,"To create and add one ",(0,r.kt)("inlineCode",{parentName:"p"},"Popup")," with default configuration\n(tooltip visuals and automatic float) and one with specific options\nuse"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var defaultSpan = document.createElement('span');\ndefaultSpan.innerHTML = 'hello default';\n\nvar defaultPopup = new Popup();\ndefaultPopup.setDOMContent(defaultSpan);\ndefaultPopup.setBasicPoint([0.3, 0.3]);\n\nvar cleanSpan = document.createElement('span');\ncleanSpan.innerHTML = 'hello clean';\n\nvar cleanPopup = new Popup({\n    clean: true,\n    float: mapillary.Alignment.Top,\n    offset: 10,\n    opacity: 0.7,\n});\n\ncleanPopup.setDOMContent(cleanSpan);\ncleanPopup.setBasicPoint([0.6, 0.6]);\n\npopupComponent.add([defaultPopup, cleanPopup]);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Implementation of API methods and API documentation inspired\nby/used from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/mapbox-gl-js/blob/v0.38.0/src/ui/popup.js"},"https://github.com/mapbox/mapbox-gl-js/blob/v0.38.0/src/ui/popup.js")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"+"," ",(0,r.kt)("strong",{parentName:"p"},"new Popup"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/component.popupoptions"},(0,r.kt)("em",{parentName:"a"},"PopupOptions")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"viewportCoords?"),": ",(0,r.kt)("em",{parentName:"p"},"ViewportCoords"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dom?"),": ",(0,r.kt)("em",{parentName:"p"},"DOM"),"): ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.popup"},(0,r.kt)("em",{parentName:"a"},"Popup"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/component.popupoptions"},(0,r.kt)("em",{parentName:"a"},"PopupOptions")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"viewportCoords?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"ViewportCoords"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dom?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"DOM"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.popup"},(0,r.kt)("em",{parentName:"a"},"Popup"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/popup/popup/Popup.ts#L76"},"component/popup/popup/Popup.ts:76")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"setbasicpoint"},"setBasicPoint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setBasicPoint"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"basicPoint"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"[]): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets a 2D basic image coordinates point to the popup's anchor, and\nmoves the popup to it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Overwrites any previously set point or rect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var popup = new Popup();\npopup.setText('hello image');\npopup.setBasicPoint([0.3, 0.3]);\n\npopupComponent.add([popup]);\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"basicPoint")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Point in 2D basic image coordinates.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/popup/popup/Popup.ts#L144"},"component/popup/popup/Popup.ts:144")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setbasicrect"},"setBasicRect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setBasicRect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"basicRect"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"[]): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets a 2D basic image coordinates rect to the popup's anchor, and\nmoves the popup to it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Overwrites any previously set point or rect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var popup = new Popup();\npopup.setText('hello image');\npopup.setBasicRect([0.3, 0.3, 0.5, 0.6]);\n\npopupComponent.add([popup]);\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"basicRect")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Rect in 2D basic image coordinates (","[topLeftX, topLeftY, bottomRightX, bottomRightY]",") .")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/popup/popup/Popup.ts#L169"},"component/popup/popup/Popup.ts:169")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdomcontent"},"setDOMContent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setDOMContent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"htmlNode"),": Node): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets the popup's content to the element provided as a DOM node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var div = document.createElement('div');\ndiv.innerHTML = 'hello image';\n\nvar popup = new Popup();\npopup.setDOMContent(div);\npopup.setBasicPoint([0.3, 0.3]);\n\npopupComponent.add([popup]);\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"htmlNode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A DOM node to be used as content for the popup.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/popup/popup/Popup.ts#L193"},"component/popup/popup/Popup.ts:193")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sethtml"},"setHTML"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setHTML"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"html"),": ",(0,r.kt)("em",{parentName:"p"},"string"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets the popup's content to the HTML provided as a string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," This method does not perform HTML filtering or sanitization,\nand must be used only with trusted content. Consider Popup#setText if the\ncontent is an untrusted text string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var popup = new Popup();\npopup.setHTML('<div>hello image</div>');\npopup.setBasicPoint([0.3, 0.3]);\n\npopupComponent.add([popup]);\n")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"html")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A string representing HTML content for the popup.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/popup/popup/Popup.ts#L227"},"component/popup/popup/Popup.ts:227")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settext"},"setText"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setText"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"text"),": ",(0,r.kt)("em",{parentName:"p"},"string"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets the popup's content to a string of text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," This function creates a Text node in the DOM, so it cannot insert raw HTML.\nUse this method for security against XSS if the popup content is user-provided."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var popup = new Popup();\npopup.setText('hello image');\npopup.setBasicPoint([0.3, 0.3]);\n\npopupComponent.add([popup]);\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Textual content for the popup.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/popup/popup/Popup.ts#L262"},"component/popup/popup/Popup.ts:262")))}m.isMDXComponent=!0}}]);