(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[3235],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5645:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return f}});var a=n(2122),r=n(9756),i=n(7294),l=n(3905),o=n(944),s=n(6010),p="tabItem_1uMI",c="tabItemActive_2DSg";var d=37,u=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,l=e.groupId,m=e.className,h=(0,o.Z)(),y=h.tabGroupChoices,v=h.setTabGroupChoices,f=(0,i.useState)(a),g=f[0],k=f[1],w=i.Children.toArray(e.children),N=[];if(null!=l){var b=y[l];null!=b&&b!==g&&r.some((function(e){return e.value===b}))&&k(b)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=r[n].value;k(a),null!=l&&(v(l,a),setTimeout((function(){var e,n,a,r,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case d:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},r.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:x,onClick:x},n)}))),t?(0,i.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},y={id:"try",title:"Try MapillaryJS"},v={unversionedId:"intro/try",id:"intro/try",isDocsHomePage:!1,title:"Try MapillaryJS",description:"- How to install MapillaryJS",source:"@site/docs/intro/try.mdx",sourceDirName:"intro",slug:"/intro/try",permalink:"/mapillary-js/docs/intro/try",editUrl:"https://github.com/mapillary/mapillary-js/edit/main/doc/docs/intro/try.mdx",version:"current",frontMatter:{id:"try",title:"Try MapillaryJS"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/mapillary-js/docs/"},next:{title:"Glossary",permalink:"/mapillary-js/docs/intro/glossary"}},f=[{value:"Installation",id:"installation",children:[{value:"Prerequisites",id:"prerequisites",children:[]}]},{value:"Add MapillaryJS to a Website",id:"add-mapillaryjs-to-a-website",children:[{value:"Using a Module Bundler",id:"using-a-module-bundler",children:[]},{value:"Using a CDN",id:"using-a-cdn",children:[]}]},{value:"That&#39;s It!",id:"thats-it",children:[]},{value:"Next steps",id:"next-steps",children:[]}],g={toc:f};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"You will learn")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"How to install MapillaryJS"),(0,l.kt)("li",{parentName:"ul"},"How to add MapillaryJS to your website")))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"MapillaryJS is essentially an ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mapillary-js"},"npm package")," that can be installed via ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com"},"Yarn")," or ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-npm"},"npm"),"."),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"For this guide, we will use the following tools."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You have ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node")," installed at ",(0,l.kt)("inlineCode",{parentName:"li"},"version >= v12.3.0"),"."),(0,l.kt)("li",{parentName:"ul"},"You have ",(0,l.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com"},"Yarn")," installed at ",(0,l.kt)("inlineCode",{parentName:"li"},"version >= v1.2.0"),".")),(0,l.kt)("p",null,"To start using MapillaryJS with data from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mapillary.com"},"Mapillary")," platform, you need an app token. When ",(0,l.kt)("a",{parentName:"p",href:"/docs/extend"},"extending MapillaryJS")," to render your own data, no app token is needed."),(0,l.kt)("p",null,"Once you have setup the prerequisites, you can try MapillaryJS in your own website."),(0,l.kt)("h2",{id:"add-mapillaryjs-to-a-website"},"Add MapillaryJS to a Website"),(0,l.kt)("h3",{id:"using-a-module-bundler"},"Using a Module Bundler"),(0,l.kt)("p",null,"Install the package."),(0,l.kt)(m,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,l.kt)(h,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},"yarn add mapillary-js\n"))),(0,l.kt)(h,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},"npm install --save mapillary-js\n")))),(0,l.kt)("p",null,"Use a CSS loader or include the CSS file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  href="https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.css"\n  rel="stylesheet"\n/>\n')),(0,l.kt)("p",null,"Include the following code in your application. If you are developing a TypeScript application you will get code editor intellisense while typing."),(0,l.kt)(m,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(h,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import {Viewer, ViewerOptions} from 'mapillary-js';\n\nconst container = document.createElement('div');\ncontainer.style.width = '400px';\ncontainer.style.height = '300px';\ndocument.body.appendChild(container);\n\nconst options: ViewerOptions = {\n  apiClient: '<your app token>',\n  container,\n  imageId: '<your image ID for initializing the viewer>',\n};\nconst viewer = new Viewer(options);\n"))),(0,l.kt)(h,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {Viewer} from 'mapillary-js';\n\nconst container = document.createElement('div');\ncontainer.style.width = '400px';\ncontainer.style.height = '300px';\ndocument.body.appendChild(container);\n\nconst viewer = new Viewer({\n  apiClient: '<your app token>',\n  container,\n  imageId: '<your image ID for initializing the viewer>',\n});\n")))),(0,l.kt)("h3",{id:"using-a-cdn"},"Using a CDN"),(0,l.kt)("p",null,"Include the JavaScript and CSS files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.js"><\/script>\n<link\n  href="https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.css"\n  rel="stylesheet"\n/>\n')),(0,l.kt)("p",null,"Add a container to the ",(0,l.kt)("inlineCode",{parentName:"p"},"<body>")," of your HTML file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div id="mly" style="width: 400px; height: 300px;"></div>\n')),(0,l.kt)("p",null,"The global ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/umdjs/umd"},"UMD")," name for MapillaryJS is ",(0,l.kt)("inlineCode",{parentName:"p"},"mapillary"),". Include the following code in the ",(0,l.kt)("inlineCode",{parentName:"p"},"<body>")," of your HTML file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nvar { Viewer } = mapillary;\n\nvar viewer = new Viewer({\n  apiClient: '<your app token>',\n  container: 'mly', // the ID of our container defined in the HTML body\n  imageId: '<your image ID for initializing the viewer>',\n});\n<script>\n")),(0,l.kt)("h2",{id:"thats-it"},"That's It!"),(0,l.kt)("p",null,"Congratulations! You have just added MapillaryJS to your project."),(0,l.kt)("p",null,"You should see something similar to what is shown in the live editor below."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Throughout the documentation the live example editors use the ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React library")," and the ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX syntax"),". This is the first such example that you will see. If you have not used React before, that is no problem, understanding React and JSX is not needed to follow along in the guides."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can edit the code and get immediate feedback in the ",(0,l.kt)("strong",{parentName:"p"},"Result")," section."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function renderMapillary(props) {\n  class ViewerComponent extends React.Component {\n    constructor(props) {\n      super(props);\n      this.containerRef = React.createRef();\n    }\n\n    componentDidMount() {\n      this.viewer = new Viewer({\n        apiClient: this.props.appToken,\n        container: this.containerRef.current,\n        imageId: this.props.imageId,\n      });\n    }\n\n    componentWillUnmount() {\n      this.viewer.remove();\n    }\n\n    render() {\n      return <div ref={this.containerRef} style={this.props.style} />;\n    }\n  }\n\n  return (\n    <ViewerComponent\n      appToken={'QjI1NnU0aG5FZFZISE56U3R5aWN4ZzpkYzg0NzE3MDA0YTRhZjlh'}\n      imageId={'ie9ktAVyhibDCD_V0m6apQ'}\n      style={{width: '100%', height: '300px'}}\n    />\n  );\n}\n")),(0,l.kt)("h2",{id:"next-steps"},"Next steps"),(0,l.kt)("p",null,"Now you are ready to start exploring the ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides"},"guide to main concepts"),"."))}k.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);