(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[5621],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,d=u["".concat(m,".").concat(k)]||u[k]||c[k]||i;return a?n.createElement(d,p(p({ref:t},o),{},{components:a})):n.createElement(d,p({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},252:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return o}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),p={id:"api.spatialimageent",title:"Interface: SpatialImageEnt",sidebar_label:"SpatialImageEnt",custom_edit_url:null},l={unversionedId:"interfaces/api.spatialimageent",id:"interfaces/api.spatialimageent",isDocsHomePage:!1,title:"Interface: SpatialImageEnt",description:"api.SpatialImageEnt",source:"@site/api/interfaces/api.spatialimageent.md",sourceDirName:"interfaces",slug:"/interfaces/api.spatialimageent",permalink:"/mapillary-js/api/interfaces/api.spatialimageent",editUrl:null,version:"current",sidebar_label:"SpatialImageEnt",frontMatter:{id:"api.spatialimageent",title:"Interface: SpatialImageEnt",sidebar_label:"SpatialImageEnt",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: SequenceEnt",permalink:"/mapillary-js/api/interfaces/api.sequenceent"},next:{title:"Interface: TileCoords2D",permalink:"/mapillary-js/api/interfaces/api.tilecoords2d"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"altitude",id:"altitude",children:[]},{value:"atomic_scale",id:"atomic_scale",children:[]},{value:"camera_parameters",id:"camera_parameters",children:[]},{value:"camera_type",id:"camera_type",children:[]},{value:"captured_at",id:"captured_at",children:[]},{value:"cluster",id:"cluster",children:[]},{value:"compass_angle",id:"compass_angle",children:[]},{value:"computed_altitude",id:"computed_altitude",children:[]},{value:"computed_compass_angle",id:"computed_compass_angle",children:[]},{value:"computed_rotation",id:"computed_rotation",children:[]},{value:"creator",id:"creator",children:[]},{value:"exif_orientation",id:"exif_orientation",children:[]},{value:"height",id:"height",children:[]},{value:"id",id:"id",children:[]},{value:"merge_id",id:"merge_id",children:[]},{value:"mesh",id:"mesh",children:[]},{value:"owner",id:"owner",children:[]},{value:"private",id:"private",children:[]},{value:"quality_score",id:"quality_score",children:[]},{value:"thumb",id:"thumb",children:[]},{value:"width",id:"width",children:[]}]}],s={toc:m};function o(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api"},"api"),".SpatialImageEnt"),(0,i.kt)("p",null,"Interface that describes the raw spatial image properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"interface"))," SpatialImageEnt"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.cameraent"},(0,i.kt)("em",{parentName:"a"},"CameraEnt")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,i.kt)("em",{parentName:"a"},"IDEnt"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"SpatialImageEnt")),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.imageent"},(0,i.kt)("em",{parentName:"a"},"ImageEnt"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"altitude"},"altitude"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"altitude"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Original EXIF altitude above sea level, in meters."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L15"},"api/ents/SpatialImageEnt.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"atomic_scale"},"atomic","_","scale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"atomic","_","scale"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Scale of atomic reconstruction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L23"},"api/ents/SpatialImageEnt.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"camera_parameters"},"camera","_","parameters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"camera","_","parameters"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[]"),(0,i.kt)("p",null,"Camera type dependent camera parameters."),(0,i.kt)("p",null,"For perspective and fisheye camera types,\nthe camera parameters array should be\nconstructed according to"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[focal, k1, k2]")),(0,i.kt)("p",null,"where focal is the camera focal length,\nand k1, k2 are radial distortion parameters."),(0,i.kt)("p",null,"For spherical camera type the camera\nparameters should be an emtpy array."),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.cameraent"},"CameraEnt"),".",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.cameraent#camera_parameters"},"camera_parameters")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CameraEnt.ts#L22"},"api/ents/CameraEnt.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"camera_type"},"camera","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"camera","_","type"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Projection type of the camera."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Supported camera types are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  'spherical'\n  'fisheye'\n  'perspective'\n")),(0,i.kt)("p",null,"Other camera types will be treated as\nperspective images."),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.cameraent"},"CameraEnt"),".",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.cameraent#camera_type"},"camera_type")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CameraEnt.ts#L38"},"api/ents/CameraEnt.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"captured_at"},"captured","_","at"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"captured","_","at"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Timestamp when the image was captured."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L28"},"api/ents/SpatialImageEnt.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cluster"},"cluster"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cluster"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.urlent"},(0,i.kt)("em",{parentName:"a"},"URLEnt"))),(0,i.kt)("p",null,"Cluster reconstruction to which the image belongs."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L62"},"api/ents/SpatialImageEnt.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"compass_angle"},"compass","_","angle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"compass","_","angle"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Original EXIF compass angle, measured in degrees."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L33"},"api/ents/SpatialImageEnt.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"computed_altitude"},"computed","_","altitude"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"computed","_","altitude"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Computed altitude, in meters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L41"},"api/ents/SpatialImageEnt.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"computed_compass_angle"},"computed","_","compass","_","angle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"computed","_","compass","_","angle"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"SfM computed compass angle, measured in degrees."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L49"},"api/ents/SpatialImageEnt.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"computed_rotation"},"computed","_","rotation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"computed","_","rotation"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[]"),(0,i.kt)("p",null,"Rotation vector in angle axis representation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L57"},"api/ents/SpatialImageEnt.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"creator"},"creator"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"creator"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.creatorent"},(0,i.kt)("em",{parentName:"a"},"CreatorEnt"))),(0,i.kt)("p",null,"Image creator."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L67"},"api/ents/SpatialImageEnt.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exif_orientation"},"exif","_","orientation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"exif","_","orientation"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"EXIF orientation of original image."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L72"},"api/ents/SpatialImageEnt.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Height of original image, not adjusted for orientation."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L77"},"api/ents/SpatialImageEnt.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Unique id."),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},"IDEnt"),".",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident#id"},"id")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/IDEnt.ts#L10"},"api/ents/IDEnt.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"merge_id"},"merge","_","id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"merge","_","id"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"SfM connected component id to which the image belongs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L85"},"api/ents/SpatialImageEnt.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mesh"},"mesh"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mesh"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.urlent"},(0,i.kt)("em",{parentName:"a"},"URLEnt"))),(0,i.kt)("p",null,"3D mesh resource."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L90"},"api/ents/SpatialImageEnt.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,i.kt)("em",{parentName:"a"},"IDEnt"))),(0,i.kt)("p",null,"Owner to which the image belongs."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L95"},"api/ents/SpatialImageEnt.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"private"},"private"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"private"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Value specifying if image is accessible to organization members only\nor to everyone."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L101"},"api/ents/SpatialImageEnt.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"quality_score"},"quality","_","score"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"quality","_","score"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Image quality score on the interval ","[0, 1]","."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L106"},"api/ents/SpatialImageEnt.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"thumb"},"thumb"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"thumb"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.urlent"},(0,i.kt)("em",{parentName:"a"},"URLEnt"))),(0,i.kt)("p",null,"Image thumbnail resource."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L111"},"api/ents/SpatialImageEnt.ts:111")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Width of original image, not adjusted for orientation."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L116"},"api/ents/SpatialImageEnt.ts:116")))}o.isMDXComponent=!0}}]);