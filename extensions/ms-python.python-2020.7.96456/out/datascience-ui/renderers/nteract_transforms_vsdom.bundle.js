(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{416:function(t,e,r){t.exports=r(434)},434:function(t,e,r){r(435),t.exports=r(372).Array.isArray},435:function(t,e,r){var a=r(382);a(a.S,"Array",{isArray:r(451)})},439:function(t,e,r){t.exports=r(440)},440:function(t,e,r){var a=r(372),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},622:function(t,e,r){"use strict";var a=r(370);Object.defineProperty(e,"__esModule",{value:!0}),e.objectToReactElement=l,e.arrayToReactChildren=s;var n=a(r(564)),o=a(r(416)),i=a(r(439)),u=r(11);function l(t){var e=[];if(!t.tagName||"string"!=typeof t.tagName)throw new Error("Invalid tagName on ".concat((0,i.default)(t,null,2)));if(!t.attributes||(0,o.default)(t.attributes)||"object"!==(0,n.default)(t.attributes))throw new Error("Attributes must exist on a VDOM Object as an object");if(null===t.attributes.style||void 0===t.attributes.style);else if((0,o.default)(t.attributes.style)||"object"!==(0,n.default)(t.attributes.style))throw new Error("Style attribute must be an object like { 'backgroundColor': 'DeepPink' }");e[0]=t.tagName,e[1]=t.attributes;var r=t.children;if(r)if((0,o.default)(r))void 0===e[1]&&(e[1]=null),e=e.concat(s(r));else if("string"==typeof r)e[2]=r;else{if("object"!==(0,n.default)(r))throw new Error("children of a vdom element must be a string, object, null, or array of vdom nodes");e[2]=l(r)}return u.createElement.apply({},e)}function s(t){for(var e=[],r=0,a=t.length;r<a;r++){var i=t[r];if(null!==i)if((0,o.default)(i))e.push(s(i));else if("string"==typeof i)e.push(i);else{if("object"!==(0,n.default)(i))throw new Error('invalid vdom child: "'.concat(i,'"'));var u={tagName:i.tagName,attributes:i.attributes,children:i.children,key:r};i.attributes&&i.attributes.key&&(u.key=i.attributes.key),e.push(l(u))}}return e}},769:function(t,e,r){"use strict";var a=r(376),n=r(370);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"objectToReactElement",{enumerable:!0,get:function(){return b.objectToReactElement}}),e.default=void 0;var o=n(r(384)),i=n(r(385)),u=n(r(386)),l=n(r(387)),s=n(r(388)),c=n(r(381)),f=a(r(11)),d=r(621),b=r(622),p=function(t){function e(){return(0,o.default)(this,e),(0,u.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,s.default)(e,t),(0,i.default)(e,[{key:"shouldComponentUpdate",value:function(t){return t.data!==this.props.data}},{key:"render",value:function(){try{var t=(0,d.cloneDeep)(this.props.data);return(0,b.objectToReactElement)(t)}catch(t){return f.createElement(f.Fragment,null,f.createElement("pre",{style:{backgroundColor:"ghostwhite",color:"black",fontWeight:"600",display:"block",padding:"10px",marginBottom:"20px"}},"There was an error rendering VDOM data from the kernel or notebook"),f.createElement("code",null,t.toString()))}}}]),e}(f.Component);e.default=p,(0,c.default)(p,"MIMETYPE","application/vdom.v1+json")}}]);
//# sourceMappingURL=nteract_transforms_vsdom.bundle.js.map