(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{32:function(t,e,n){"use strict";var r=n(41),o=n.n(r),c="api_key=4f9c0875fb3e036244791a873d8888e9",i="https://api.themoviedb.org";e.a={getPopularMovies:function(){var t="".concat(i).concat("/3/trending/movie/week?").concat(c);return o.a.get(t).then((function(t){return t.data}))},foundMovies:function(t){var e="".concat(i).concat("/3/search/movie?").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false");return o.a.get(e).then((function(t){return t.data}))},detailMovies:function(t){var e="/3/movie/".concat(t,"?"),n="".concat(i).concat(e).concat(c,"&language=en-US");return o.a.get(n).then((function(t){return t.data}))},getMoviesActors:function(t){var e="/3/movie/".concat(t,"/credits?"),n="".concat(i).concat(e).concat(c,"&language=en-US");return o.a.get(n).then((function(t){return t.data}))},getReviewMovies:function(t){var e="/3/movie/".concat(t,"/reviews?"),n="".concat(i).concat(e).concat(c,"&language=en-US&page=1");return o.a.get(n).then((function(t){return t.data}))}}},33:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},34:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},35:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}n.d(e,"a",(function(){return i}))},36:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},37:function(t,e,n){"use strict";var r,o,c,i=n(74),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){c=!1}function u(t){if(t){if(t!==r){if(t.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==a&&(r=a,s())}function l(){return c||(c=function(){r||u(a);for(var t,e=r.split(""),n=[],o=i.nextValue();e.length>0;)o=i.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||a},characters:function(t){return u(t),r},seed:function(t){i.seed(t),o!==t&&(s(),o=t)},lookup:function(t){return l()[t]},shuffled:l}},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(40);var o=n(39);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},43:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return c}))},72:function(t,e,n){"use strict";t.exports=n(73)},73:function(t,e,n){"use strict";var r=n(37),o=n(75),c=n(79),i=n(80)||0;function a(){return o(i)}t.exports=a,t.exports.generate=a,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return i=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=c},74:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},75:function(t,e,n){"use strict";var r,o,c=n(76);n(37);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=c(7),e+=c(t),r>0&&(e+=c(r)),e+=c(n)}},76:function(t,e,n){"use strict";var r=n(37),o=n(77),c=n(78);t.exports=function(t){for(var e,n=0,i="";!e;)i+=c(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return i}},77:function(t,e,n){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},78:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),c="";;)for(var i=t(o),a=o;a--;)if((c+=e[i[a]&r]||"").length===+n)return c}},79:function(t,e,n){"use strict";var r=n(37);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},80:function(t,e,n){"use strict";t.exports=0},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n(43),o=n(33),c=n(34),i=n(36),a=n(35),s=n(0),u=n(9),l=n(2),f=n(32),p=n(7),h=n(38),d=n(1),b=function(t){var e=t.id,n=t.name,r=t.character,o=t.profile;return Object(d.jsxs)("li",{id:e,children:[Object(d.jsx)("img",{src:o,alt:n}),Object(d.jsxs)("p",{children:[" ",n]}),Object(d.jsx)("p",{children:r})]})};b.defaultProp={profile:"https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png"};var j=b,v=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={cast:[]},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.a.getMoviesActors(this.props.id).then((function(e){t.setState({cast:Object(h.a)(e.cast)})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:this.state.cast.map((function(t){return Object(d.jsx)(j,{id:t.id,name:t.name,character:t.character,profile:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png"},t.id)}))})})}}]),n}(s.Component),m=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={reviews:[]},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.a.getReviewMovies(this.props.id).then((function(e){t.setState({reviews:Object(h.a)(e.results)})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:this.state.reviews.length>0?this.state.reviews.map((function(t){return Object(d.jsxs)("li",{className:"review-item",children:[Object(d.jsx)("p",{className:"name-autor",children:t.author}),Object(d.jsx)("p",{className:"content",children:t.content})]},t.id)})):"We don`t have reviews"})})}}]),n}(s.Component),O=n(72),g=function(t){var e=t.movie,n="https://image.tmdb.org/t/p/w500";return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"box-movie",children:[Object(d.jsx)("img",{className:"big-poster",src:e.backdrop_path?"".concat(n).concat(e.backdrop_path):e.poster_path?"".concat(n).concat(e.poster_path):"https://ik.imagekit.io/s2fpg15d4rx/depositphotos_144011369-stock-photo-popcorn-and-movie-clapper-board_G9Nbh-ef0_9M.jpg",alt:e.title}),Object(d.jsxs)("div",{className:"about-movie",children:[Object(d.jsx)("h3",{className:"prod-countries",children:"production countries"}),Object(d.jsx)("ul",{children:e.production_countries.map((function(t){return Object(d.jsxs)("li",{children:[" ",t.name]},O.generate())}))}),Object(d.jsx)("h3",{children:"genre"}),Object(d.jsx)("ul",{children:e.genres.map((function(t){return Object(d.jsx)("li",{children:t.name},t.id)}))}),Object(d.jsx)("h3",{children:"production companies"}),Object(d.jsx)("ul",{children:e.production_companies.map((function(t){return Object(d.jsx)("li",{children:t.name},t.id)}))}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("h3",{children:"overview"}),Object(d.jsx)("p",{children:e.overview})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("h3",{children:"budget"}),Object(d.jsxs)("p",{children:[e.budget,"$"]})]})]})]})]})})},x=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={videoPage:{}},t.handleBack=function(){var e,n=t.props,r=n.location;n.history.push((null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)||p.a.home)},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.a.detailMovies(this.props.match.params.movieId).then((function(e){t.setState({videoPage:Object(r.a)({},e)})}))}},{key:"render",value:function(){var t,e,n=Object.keys(this.state.videoPage).length,o=this.state.videoPage,c=this.props,i=c.match,a=c.location;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"btn-back",onClick:this.handleBack,children:"come back"}),Object(d.jsx)("div",{children:n>0&&Object(d.jsx)(g,{movie:o})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"addition informations"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{exact:!0,to:{pathname:"".concat(i.url,"/cast"),state:{from:(null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)||"/"}},className:"info-link",activeClassName:"info-link-activ",children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{exact:!0,to:{pathname:"".concat(i.url,"/reviews"),state:{from:(null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from)||"/"}},className:"info-link",activeClassName:"info-link-activ",children:"Reviews"})})]}),Object(d.jsx)(l.b,{exact:!0,path:"".concat(i.url,"/cast"),render:function(t){return Object(d.jsx)(v,Object(r.a)(Object(r.a)({},t),{},{id:i.params.movieId}))}}),Object(d.jsx)(l.b,{exact:!0,path:"".concat(this.props.match.url,"/reviews"),render:function(t){return o&&Object(d.jsx)(m,Object(r.a)(Object(r.a)({},t),{},{id:i.params.movieId}))}})]})]})}}]),n}(s.Component)}}]);
//# sourceMappingURL=movieDetais-page.274d321d.chunk.js.map