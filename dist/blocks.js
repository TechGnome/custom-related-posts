var CustomRelatedPosts;(()=>{"use strict";var e={790:(e,t)=>{var n,o=Object.prototype.hasOwnProperty;function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}t.P=function(e,t){t=t||"";var r,a,l=[];for(a in"string"!=typeof t&&(t="?"),e)if(o.call(e,a)){if((r=e[a])||null!==r&&r!==n&&!isNaN(r)||(r=""),a=encodeURIComponent(a),r=encodeURIComponent(r),null===a||null===r)continue;l.push(a+"="+r)}return l.length?t+l.join("&"):""}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o);var e=wp.apiFetch;const t={selectRelationsForCurrentPost:(0,wp.data.withSelect)(function(e,t){var n=(0,e("core/editor").getCurrentPostId)(),o=e("custom-related-posts").getRelations(null,{postId:n});return{postId:n,relations:o,updated:Date.now(),relationToIDs:Object.keys(o.to).map(function(e){return parseInt(e)}),relationFromIDs:Object.keys(o.from).map(function(e){return parseInt(e)})}}),saveRelation:function(t,n,o){e({path:"custom-related-posts/v1/relations/".concat(t),method:"POST",data:{target:n,type:o}})},removeRelation:function(t,n,o){e({path:"custom-related-posts/v1/relations/".concat(t),method:"DELETE",data:{target:n,type:o}})}};var r=wp.apiFetch,a=wp.data,l=a.registerStore,s=a.dispatch,c={relations:{to:{},from:{}}};l("custom-related-posts",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"SET_RELATIONS":return n.relations=t.relations,n;case"ADD_RELATION_TO":return n.relations.to[t.post.id]=t.post,n;case"ADD_RELATION_BOTH":return n.relations.to[t.post.id]=t.post,n.relations.from[t.post.id]=t.post,n;case"ADD_RELATION_FROM":return n.relations.from[t.post.id]=t.post,n;case"REMOVE_RELATION_TO":return delete n.relations.to[t.target],n;case"REMOVE_RELATION_FROM":return delete n.relations.from[t.target],n}return e},actions:{setRelations:function(e){return{type:"SET_RELATIONS",relations:e}},addRelationTo:function(e,n){return t.saveRelation(e,n.id,"to"),{type:"ADD_RELATION_TO",post:n}},addRelationBoth:function(e,n){return t.saveRelation(e,n.id,"both"),{type:"ADD_RELATION_BOTH",post:n}},addRelationFrom:function(e,n){return t.saveRelation(e,n.id,"from"),{type:"ADD_RELATION_FROM",post:n}},removeRelationTo:function(e,n){return t.removeRelation(e,n,"to"),{type:"REMOVE_RELATION_TO",target:n}},removeRelationFrom:function(e,n){return t.removeRelation(e,n,"from"),{type:"REMOVE_RELATION_FROM",target:n}}},selectors:{getRelations:function(e,t){return e.relations}},resolvers:{getRelations:function(e,t){r({path:"custom-related-posts/v1/relations/".concat(t.postId)}).then(function(e){Array.isArray(e.to)&&(e.to={}),Array.isArray(e.from)&&(e.from={}),s("custom-related-posts").setRelations(e)})}}});var i=wp.components,u=i.Button,p=i.Dashicon;const d=function(e){var t=e.post;return React.createElement("li",null,React.createElement(u,{className:"crp-remove-relation-button",onClick:function(){return e.onRemove(t.id)}},React.createElement(p,{icon:"trash"}))," ",React.createElement("a",{href:t.permalink,target:"_blank"},t.title))};var m=wp.i18n.__,f=wp.element.Fragment,y=wp.compose.compose,h=wp.data.withDispatch,R=function(e,t){return React.createElement("ul",null,Object.keys(e).map(function(n){var o=e[n];return React.createElement(d,{post:o,key:n,onRemove:t})}))};var b=h(function(e,t){var n=e("custom-related-posts"),o=n.removeRelationTo,r=n.removeRelationFrom;return{onRemoveRelationTo:function(e){return o(t.postId,e)},onRemoveRelationFrom:function(e){return r(t.postId,e)}}});const v=y(t.selectRelationsForCurrentPost,b)(function(e){var t=e.relations,n=e.relationToIDs,o=e.relationFromIDs;return React.createElement(f,null,0<n.length&&React.createElement(f,null,React.createElement("h3",null,m("This post links to")),R(t.to,e.onRemoveRelationTo)),0<o.length&&React.createElement(f,null,React.createElement("h3",null,m("This post get links from")),R(t.from,e.onRemoveRelationFrom)))});var E=n(790),g=wp.i18n.__,O=wp.element.Fragment,w=wp.components.Button,_=wp.compose.compose;var P=(0,wp.data.withDispatch)(function(e,t){var n=e("custom-related-posts"),o=n.addRelationTo,r=n.addRelationBoth,a=n.addRelationFrom;return{onAddRelationTo:function(e){return o(t.postId,e)},onAddRelationBoth:function(e){return r(t.postId,e)},onAddRelationFrom:function(e){return a(t.postId,e)}}});const T=_(t.selectRelationsForCurrentPost,P)(function(e){var t=e.post,n=e.relationToIDs,o=e.relationFromIDs,r=!1;return n.includes(t.id)&&o.includes(t.id)?r="both":n.includes(t.id)?r="to":o.includes(t.id)&&(r="from"),React.createElement("tr",null,React.createElement("td",null,t.post_type),React.createElement("td",null,t.date_display),React.createElement("td",null,React.createElement("a",{href:t.permalink,target:"_blank"},t.title)),React.createElement("td",null,"both"===r?React.createElement(w,{isDefault:!0,disabled:!0},g("Already linked")):React.createElement(O,null,React.createElement(w,{className:"crp-add-relations-button-to",isDefault:!0,disabled:!1!==r,onClick:function(){return e.onAddRelationTo(t)}},g("To")),React.createElement(w,{className:"crp-add-relations-button-both",isPrimary:!0,onClick:function(){return e.onAddRelationBoth(t)}},g("Both")),React.createElement(w,{className:"crp-add-relations-button-from",isDefault:!0,disabled:!1!==r,onClick:function(){return e.onAddRelationFrom(t)}},g("From")))))});function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=wp.i18n.__,I=wp.apiFetch,F=wp.element.Component,N=wp.components.Modal;const M=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=k(this,j(t).apply(this,arguments))).state={postType:"",search:"",posts:[],updatingPosts:!1,needToUpdatePosts:!1},e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,F),n=t,(o=[{key:"onChangePostType",value:function(e){var t=e.target.value;t!==this.state.postType&&this.setState({postType:t,needToUpdatePosts:this.state.search.length>=2})}},{key:"onChangeSearch",value:function(e){var t=e.target.value;t!==this.state.search&&this.setState({search:t,needToUpdatePosts:!0})}},{key:"componentDidUpdate",value:function(){this.state.needToUpdatePosts&&this.updatePosts()}},{key:"updatePosts",value:function(){var e=this;this.state.updatingPosts||(this.state.search.length<2?this.setState({updatingPosts:!1,needToUpdatePosts:!1,posts:[]}):(this.setState({updatingPosts:!0,needToUpdatePosts:!1}),I({path:"/custom-related-posts/v1/search?".concat((0,E.P)({post_type:this.state.postType,keyword:this.state.search}))}).then(function(t){e.setState({posts:t,updatingPosts:!1})})))}},{key:"render",value:function(){return React.createElement(N,{title:D("Add Relations"),onRequestClose:this.props.onClose,focusOnMount:!1,className:"crp-add-relations-modal"},React.createElement("div",{className:"crp-add-relations"},React.createElement("div",{className:"crp-add-relations-input"},React.createElement("select",{value:this.state.postType,onChange:this.onChangePostType.bind(this)},React.createElement("option",{value:""},D("All Post Types","custom-related-posts")),Object.keys(crp_admin.post_types).map(function(e,t){return React.createElement("option",{value:e,key:t},crp_admin.post_types[e])})),React.createElement("input",{autoFocus:!0,type:"text",placeholder:D("Start typing to search..."),className:"crp-add-relations-search",value:this.state.search,onChange:this.onChangeSearch.bind(this)})),React.createElement("table",{className:"crp-add-relations-posts"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,D("Post Type")),React.createElement("th",null,D("Date")),React.createElement("th",null,D("Title")),React.createElement("th",null,D("Link")))),0===this.state.posts.length?React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",{colspan:"4"},React.createElement("em",null,"No posts found.")))):React.createElement("tbody",null,this.state.posts.map(function(e,t){return React.createElement(T,{post:e,key:t})})))))}}])&&C(n.prototype,o),r&&C(n,r),t}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=wp.i18n.__,J=wp.element,Z=J.Component,q=J.Fragment,z=wp.editPost,G=z.PluginSidebar,K=z.PluginSidebarMoreMenuItem,Q=wp.components,W=Q.Panel,X=Q.PanelBody,Y=Q.Button,$=Q.Icon;function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach(function(t){oe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(0,wp.plugins.registerPlugin)("custom-related-posts",{render:function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=B(this,U(t).apply(this,arguments))).state={isModalOpen:!1},e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,Z),n=t,(o=[{key:"openModal",value:function(){this.state.isModalOpen||this.setState({isModalOpen:!0})}},{key:"closeModal",value:function(){this.state.isModalOpen&&this.setState({isModalOpen:!1})}},{key:"render",value:function(){return React.createElement(q,null,React.createElement(K,{target:"sidebar-custom-related-posts",icon:"admin-links"},"Custom Related Posts"),React.createElement(G,{name:"sidebar-custom-related-posts",title:"Custom Related Posts",icon:React.createElement($,{icon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"20",height:"20"},React.createElement("title",null,"link"),React.createElement("g",{className:"nc-icon-wrapper",fill:"#111111"},React.createElement("path",{d:"M17.619,10.138l-2.241,2.24c-.06.061-.1.13-.158.193a4.958,4.958,0,0,1,2.816,1.393,5.008,5.008,0,0,1,0,7.072l-5.5,5.5a5,5,0,0,1-7.072-7.072l2.385-2.385a10.054,10.054,0,0,1-.23-4.011L3.343,17.343A8,8,0,0,0,14.657,28.657l5.5-5.5a7.99,7.99,0,0,0-2.538-13.019Z",fill:"#111111"})," ",React.createElement("path",{"data-color":"color-2",d:"M17.343,3.343l-5.5,5.5a7.99,7.99,0,0,0,2.538,13.019l2.241-2.24c.06-.061.107-.129.162-.193a4.953,4.953,0,0,1-2.82-1.393,5.008,5.008,0,0,1,0-7.072l5.5-5.5a5,5,0,0,1,7.072,7.072l-2.383,2.382a10.086,10.086,0,0,1,.241,4l4.263-4.263A8,8,0,0,0,17.343,3.343Z"})))})},React.createElement(W,null,React.createElement(X,{title:H("Relations")},React.createElement(v,null),React.createElement(Y,{isPrimary:!0,onClick:this.openModal.bind(this)},H("Add Relations"))))),this.state.isModalOpen&&React.createElement(M,{onClose:this.closeModal.bind(this)}))}}])&&L(n.prototype,o),r&&L(n,r),t}()});var ce=wp.i18n.__,ie=wp.components,ue=ie.PanelBody,pe=ie.TextControl,de=ie.RadioControl,me=ie.Disabled,fe=ie.ServerSideRender,ye=wp.editor.InspectorControls,he=wp.element,Re=he.Component,be=he.Fragment,ve=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,le(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,Re),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=t.title,r=t.none_text,a=t.order_by,l=t.order,s=Object.values(this.props.relations.to).filter(function(e){return"publish"===e.status}),c=s.length>0,i=React.createElement(ye,null,React.createElement(ue,{title:ce("Custom Related Posts Settings")},React.createElement(pe,{label:ce("Title"),value:o,onChange:function(e){return n({title:e})}}),React.createElement(pe,{label:ce("None Text"),help:ce("Leave blank to hide when there are no related posts."),value:r,onChange:function(e){return n({none_text:e})}}),React.createElement(de,{label:ce("Order By"),selected:a,options:[{label:ce("Title"),value:"title"},{label:ce("Date"),value:"date"},{label:ce("Random"),value:"rand"}],onChange:function(e){return n({order_by:e})}}),React.createElement(de,{label:ce("Order"),selected:l,options:[{label:ce("Ascending"),value:"ASC"},{label:ce("Descending"),value:"DESC"}],onChange:function(e){return n({order:e})}})));return React.createElement(be,null,i,c||r?React.createElement(me,null,React.createElement(fe,{block:"custom-related-posts/related-posts",attributes:ne({},t,{relations:s})})):React.createElement("em",null,ce("This block will be empty until you add a related post.")))}}])&&re(n.prototype,o),r&&re(n,r),t}();const Ee=t.selectRelationsForCurrentPost(ve);var ge=wp.i18n.__;(0,wp.blocks.registerBlockType)("custom-related-posts/related-posts",{title:ge("Custom Related Posts"),description:ge("Display a list of your custom related posts."),icon:"list-view",keywords:["crp"],category:"widgets",supports:{html:!1},transforms:{from:[{type:"shortcode",tag:"custom-related-posts",attributes:{title:{type:"string",shortcode:function(e){var t=e.named.title;return(void 0===t?"":t).replace("title","")}},order_by:{type:"string",shortcode:function(e){var t=e.named.order_by;return(void 0===t?"":t).replace("order_by","")}},order:{type:"string",shortcode:function(e){var t=e.named.order;return(void 0===t?"":t).replace("order","")}},none_text:{type:"string",shortcode:function(e){var t=e.named.none_text;return(void 0===t?"":t).replace("none_text","")}}}}]},edit:Ee,save:function(e){return null}})})(),(CustomRelatedPosts=void 0===CustomRelatedPosts?{}:CustomRelatedPosts).blocks=o})();