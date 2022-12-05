this.wc=this.wc||{},this.wc.wcBlocksRegistry=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=143)}({0:function(e,t){e.exports=window.wp.element},143:function(e,t,n){"use strict";n.r(t),n.d(t,"registerPaymentMethod",(function(){return w})),n.d(t,"registerExpressPaymentMethod",(function(){return k})),n.d(t,"registerPaymentMethodExtensionCallbacks",(function(){return P})),n.d(t,"__experimentalDeRegisterPaymentMethod",(function(){return M})),n.d(t,"__experimentalDeRegisterExpressPaymentMethod",(function(){return E})),n.d(t,"getPaymentMethods",(function(){return T})),n.d(t,"getExpressPaymentMethods",(function(){return C})),n.d(t,"getRegisteredBlockComponents",(function(){return x})),n.d(t,"getRegisteredInnerBlocks",(function(){return I})),n.d(t,"registerBlockComponent",(function(){return S})),n.d(t,"registerInnerBlock",(function(){return _}));var o=n(8),r=n.n(o),a=n(2),i=n(20),s=n.n(i),c=n(0);const l={},u=l,p=(e,t,n)=>{const o=((e,t)=>n=>((null==n?void 0:n.paymentRequirements)||[]).every(e=>t.includes(e))&&e(n))(e,t);return Object.values(u).some(e=>n in e)?((e,t,n)=>o=>{let r=e(o);if(r){const e={};Object.entries(t).forEach(t=>{let[o,r]=t;n in r&&"function"==typeof r[n]&&(e[o]=r[n])}),r=Object.keys(e).every(t=>{try{return e[t](o)}catch(e){return console.error(`Error when executing callback for ${n} in ${t}`,e),!0}})}return r})(o,u,n):o},d=(e,t)=>{if(null!==e&&!Object(c.isValidElement)(e))throw new TypeError(`The ${t} property for the payment method must be a React element or null.`)},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=t.reduce((t,n)=>(e.hasOwnProperty(n)||t.push(n),t),[]);if(n.length>0)throw new TypeError("The payment method configuration object is missing the following properties:"+n.join(", "))},h=()=>null;class f{constructor(e){var t,n,o,r;f.assertValidConfig(e),this.name=e.name,this.label=e.label,this.placeOrderButtonLabel=e.placeOrderButtonLabel,this.ariaLabel=e.ariaLabel,this.content=e.content,this.savedTokenComponent=e.savedTokenComponent,this.icons=e.icons||null,this.edit=e.edit,this.paymentMethodId=e.paymentMethodId||this.name,this.supports={showSavedCards:(null==e||null===(t=e.supports)||void 0===t?void 0:t.showSavedCards)||(null==e||null===(n=e.supports)||void 0===n?void 0:n.savePaymentInfo)||!1,showSaveOption:(null==e||null===(o=e.supports)||void 0===o?void 0:o.showSaveOption)||!1,features:(null==e||null===(r=e.supports)||void 0===r?void 0:r.features)||["products"]},this.canMakePaymentFromConfig=e.canMakePayment}get canMakePayment(){return p(this.canMakePaymentFromConfig,this.supports.features,this.name)}}s()(f,"assertValidConfig",e=>{var t,n,o,a,i,s,l;if(e.savedTokenComponent=e.savedTokenComponent||Object(c.createElement)(h,null),m(e,["name","label","ariaLabel","content","edit","canMakePayment"]),"string"!=typeof e.name)throw new Error("The name property for the payment method must be a string");if(void 0!==e.icons&&!Array.isArray(e.icons)&&null!==e.icons)throw new Error("The icons property for the payment method must be an array or null.");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if("string"!=typeof e.placeOrderButtonLabel&&void 0!==e.placeOrderButtonLabel)throw new TypeError("The placeOrderButtonLabel property for the payment method must be a string");if(((e,t)=>{if(null!==e&&!Object(c.isValidElement)(e)&&"string"!=typeof e)throw new TypeError("The label property for the payment method must be a React element, a string, or null.")})(e.label),d(e.content,"content"),d(e.edit,"edit"),d(e.savedTokenComponent,"savedTokenComponent"),"string"!=typeof e.ariaLabel)throw new TypeError("The ariaLabel property for the payment method must be a string");if("function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the payment method must be a function.");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.showSavedCards)&&"boolean"!=typeof(null===(n=e.supports)||void 0===n?void 0:n.showSavedCards))throw new TypeError("If the payment method includes the `supports.showSavedCards` property, it must be a boolean");if(void 0!==(null===(o=e.supports)||void 0===o?void 0:o.savePaymentInfo)&&r()("Passing savePaymentInfo when registering a payment method.",{alternative:"Pass showSavedCards and showSaveOption",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3686"}),void 0!==(null===(a=e.supports)||void 0===a?void 0:a.features)&&!Array.isArray(null===(i=e.supports)||void 0===i?void 0:i.features))throw new Error("The features property for the payment method must be an array or undefined.");if(void 0!==(null===(s=e.supports)||void 0===s?void 0:s.showSaveOption)&&"boolean"!=typeof(null===(l=e.supports)||void 0===l?void 0:l.showSaveOption))throw new TypeError("If the payment method includes the `supports.showSaveOption` property, it must be a boolean")});class y{constructor(e){var t;y.assertValidConfig(e),this.name=e.name,this.content=e.content,this.edit=e.edit,this.paymentMethodId=e.paymentMethodId||this.name,this.supports={features:(null==e||null===(t=e.supports)||void 0===t?void 0:t.features)||["products"]},this.canMakePaymentFromConfig=e.canMakePayment}get canMakePayment(){return p(this.canMakePaymentFromConfig,this.supports.features,this.name)}}s()(y,"assertValidConfig",e=>{var t,n;if(m(e,["name","content","edit"]),"string"!=typeof e.name)throw new TypeError("The name property for the express payment method must be a string");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.features)&&!Array.isArray(null===(n=e.supports)||void 0===n?void 0:n.features))throw new Error("The features property for the payment method must be an array or undefined.");if(d(e.content,"content"),d(e.edit,"edit"),"function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the express payment method must be a function.")});var b=n(7);const g={},v={},w=e=>{let t;"function"==typeof e?(t=e(f),r()("Passing a callback to registerPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new f(e),t instanceof f&&(g[t.name]=t)},k=e=>{let t;"function"==typeof e?(t=e(y),r()("Passing a callback to registerExpressPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new y(e),t instanceof y&&(v[t.name]=t)},P=(e,t)=>{l[e]?console.error(`The namespace provided to registerPaymentMethodExtensionCallbacks must be unique. Callbacks have already been registered for the ${e} namespace.`):(l[e]={},Object.entries(t).forEach(t=>{let[n,o]=t;"function"==typeof o?l[e][n]=o:console.error(`All callbacks provided to registerPaymentMethodExtensionCallbacks must be functions. The callback for the ${n} payment method in the ${e} namespace was not a function.`)}))},M=e=>{delete g[e];const{__internalRemoveAvailablePaymentMethod:t}=Object(a.dispatch)(b.b);t(e)},E=e=>{delete v[e];const{__internalRemoveAvailableExpressPaymentMethod:t}=Object(a.dispatch)(b.b);t(e)},T=()=>g,C=()=>v,O={};function x(e){return{..."object"==typeof O[e]&&Object.keys(O[e]).length>0?O[e]:{},...O.any}}function I(e){return r()("getRegisteredInnerBlocks",{version:"2.8.0",alternative:"getRegisteredBlockComponents",plugin:"WooCommerce Blocks"}),x(e)}function S(e){e.context||(e.context="any"),R(e,"context","string"),R(e,"blockName","string"),j(e,"component");const{context:t,blockName:n,component:o}=e;O[t]||(O[t]={}),O[t][n]=o}const j=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},R=(e,t,n)=>{const o=typeof e[t];if(o!==n)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${n}.`)};function _(e){r()("registerInnerBlock",{version:"2.8.0",alternative:"registerBlockComponent",plugin:"WooCommerce Blocks",hint:'"main" has been replaced with "context" and is now optional.'}),R(e,"main","string"),S({...e,context:e.main})}},2:function(e,t){e.exports=window.wp.data},20:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));const o="wc/store/payment";let r;!function(e){e.PRISTINE="pristine",e.STARTED="started",e.PROCESSING="processing",e.ERROR="has_error",e.FAILED="failed",e.SUCCESS="success",e.COMPLETE="complete"}(r||(r={}))},8:function(e,t){e.exports=window.wp.deprecated}});