(()=>{"use strict";var e,t,o,r={9880:(e,t,o)=>{o.r(t);const r=window.wp.blocks,l=window.wc.wcSettings;var a,n,i,c,s,p,d,m,u,g;const v=(0,l.getSetting)("wcBlocksConfig",{pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),y=v.pluginUrl+"assets/images/",w=(v.pluginUrl,null===(a=l.STORE_PAGES.shop)||void 0===a||a.permalink,null===(n=l.STORE_PAGES.checkout)||void 0===n||n.id,null===(i=l.STORE_PAGES.checkout)||void 0===i||i.permalink,null===(c=l.STORE_PAGES.privacy)||void 0===c||c.permalink,null===(s=l.STORE_PAGES.privacy)||void 0===s||s.title,null===(p=l.STORE_PAGES.terms)||void 0===p||p.permalink,null===(d=l.STORE_PAGES.terms)||void 0===d||d.title,null===(m=l.STORE_PAGES.cart)||void 0===m||m.id,null===(u=l.STORE_PAGES.cart)||void 0===u||u.permalink,null!==(g=l.STORE_PAGES.myaccount)&&void 0!==g&&g.permalink?l.STORE_PAGES.myaccount.permalink:(0,l.getSetting)("wpLoginUrl","/wp-login.php"),(0,l.getSetting)("localPickupEnabled",!1),(0,l.getSetting)("countries",{})),f=(0,l.getSetting)("countryData",{}),_=(Object.fromEntries(Object.keys(f).filter((e=>!0===f[e].allowBilling)).map((e=>[e,w[e]||""]))),Object.fromEntries(Object.keys(f).filter((e=>!0===f[e].allowBilling)).map((e=>[e,f[e].states||[]]))),Object.fromEntries(Object.keys(f).filter((e=>!0===f[e].allowShipping)).map((e=>[e,w[e]||""]))),Object.fromEntries(Object.keys(f).filter((e=>!0===f[e].allowShipping)).map((e=>[e,f[e].states||[]]))),Object.fromEntries(Object.keys(f).map((e=>[e,f[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]}),b=((0,l.getSetting)("addressFieldsLocations",_).address,(0,l.getSetting)("addressFieldsLocations",_).contact,(0,l.getSetting)("addressFieldsLocations",_).order,(0,l.getSetting)("additionalOrderFields",{}),(0,l.getSetting)("additionalContactFields",{}),(0,l.getSetting)("additionalAddressFields",{}),JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-filters-overlay","version":"1.0.0","title":"Product Filters Overlay (Experimental)","description":"Display product filters in an overlay on top of a page.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"multiple":false,"inserter":false,"layout":{"allowCustomContentAndWideSize":true},"color":{},"typography":{},"dimensions":{},"spacing":{"padding":true,"blockGap":true}},"textdomain":"woocommerce","providesContext":{},"attributes":{"overlayStyle":{"type":"string","default":"drawer"},"overlayPosition":{"type":"string","default":"left"},"style":{"type":"object","default":{"spacing":{"padding":{"top":"1rem","right":"1rem","bottom":"1rem","left":"1rem"}}}}},"example":{}}'));var k=o(1609);const O=window.wp.blockEditor,S=window.wp.components;var E=o(7723);const h=[["woocommerce/product-filters"]];var P=o(851),j=o(7104),T=o(1844);const x={icon:()=>(0,k.createElement)(j.A,{icon:T.A}),edit:({setAttributes:e,attributes:t})=>{const o=(0,O.useBlockProps)();return(0,k.createElement)("div",{...o},(0,k.createElement)(O.InspectorControls,{group:"styles"},(0,k.createElement)(S.PanelBody,{title:(0,E.__)("Style","woocommerce")},(0,k.createElement)(S.__experimentalToggleGroupControl,{className:"wc-block-editor-product-filters-overlay__overlay-style-toggle",isBlock:!0,value:t.overlayStyle,onChange:t=>{e({overlayStyle:t})},help:"fullscreen"===t.overlayStyle?(0,E.__)("The overlay will fill up the whole screen.","woocommerce"):(0,E.__)("The overlay will show on the left or right side of the screen (only on desktop).","woocommerce")},(0,k.createElement)(S.__experimentalToggleGroupControlOption,{value:"fullscreen",label:(0,E.__)("Full-Screen","woocommerce")}),(0,k.createElement)(S.__experimentalToggleGroupControlOption,{value:"drawer",label:(0,E.__)("Drawer","woocommerce")})),"drawer"===t.overlayStyle&&(0,k.createElement)(S.__experimentalToggleGroupControl,{className:"wc-block-editor-product-filters-overlay__overlay-position-toggle",isBlock:!0,value:t.overlayPosition,label:(0,E.__)("POSITION","woocommerce"),onChange:t=>{e({overlayPosition:t})}},(0,k.createElement)(S.__experimentalToggleGroupControlOption,{value:"left",label:(0,E.__)("Left","woocommerce")}),(0,k.createElement)(S.__experimentalToggleGroupControlOption,{value:"right",label:(0,E.__)("Right","woocommerce")})),"drawer"===t.overlayStyle?(0,k.createElement)("img",{className:"wc-block-editor-product-filters-overlay__drawer-image",src:"left"===t.overlayPosition?`${y}blocks/product-filters-overlay/overlay-drawer-left.svg`:`${y}blocks/product-filters-overlay/overlay-drawer-right.svg`,alt:(0,E.__)("Overlay drawer orientation","woocommerce")}):(0,k.createElement)("img",{className:"wc-block-editor-product-filters-overlay__drawer-image",src:`${y}blocks/product-filters-overlay/overlay-drawer-fullscreen.svg`,alt:(0,E.__)("Overlay drawer orientation","woocommerce")}))),(0,k.createElement)(O.InnerBlocks,{templateLock:!1,template:h}))},save:()=>{const e=O.useBlockProps.save({className:(0,P.A)("wc-block-product-filters-overlay")}),t=O.useInnerBlocksProps.save(e);return(0,k.createElement)("div",{...t})}};(()=>{const{experimentalBlocksEnabled:e}=(0,l.getSetting)("wcBlocksConfig",{experimentalBlocksEnabled:!1});return e})()&&(0,r.registerBlockType)(b,x)},1609:e=>{e.exports=window.React},6087:e=>{e.exports=window.wp.element},7723:e=>{e.exports=window.wp.i18n},5573:e=>{e.exports=window.wp.primitives}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return r[e].call(o.exports,o,o.exports,a),o.exports}a.m=r,e=[],a.O=(t,o,r,l)=>{if(!o){var n=1/0;for(p=0;p<e.length;p++){for(var[o,r,l]=e[p],i=!0,c=0;c<o.length;c++)(!1&l||n>=l)&&Object.keys(a.O).every((e=>a.O[e](o[c])))?o.splice(c--,1):(i=!1,l<n&&(n=l));if(i){e.splice(p--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);a.r(l);var n={};t=t||[null,o({}),o([]),o(o)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,a.d(l,n),l},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=7209,(()=>{var e={7209:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[n,i,c]=o,s=0;if(n.some((t=>0!==e[t]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(c)var p=c(a)}for(t&&t(o);s<n.length;s++)l=n[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(p)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=a.O(void 0,[94],(()=>a(9880)));n=a.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-filters-overlay"]=n})();