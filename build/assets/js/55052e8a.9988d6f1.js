"use strict";(self.webpackChunkmio_grimoire=self.webpackChunkmio_grimoire||[]).push([[569],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"interacting-with-escrow",title:"Interacting With the Escrow",sidebar_label:"Interacting With the Escrow"},s=void 0,l={unversionedId:"interacting-with-escrow",id:"interacting-with-escrow",title:"Interacting With the Escrow",description:"-   As the warning above states, _never send ETH or ERC20 tokens directly to the escrow contract_. They will be lost forever. All deposits into an escrow must happen via the Deposit function. This can be done easily via the escrow app.",source:"@site/docs/interacting-with-escrow.md",sourceDirName:".",slug:"/interacting-with-escrow",permalink:"/savedao/docs/interacting-with-escrow",editUrl:"https://github.com/raid-guild/handbook/edit/master/docs/interacting-with-escrow.md",tags:[],version:"current",frontMatter:{id:"interacting-with-escrow",title:"Interacting With the Escrow",sidebar_label:"Interacting With the Escrow"},sidebar:"howSidebar",previous:{title:"In Case of Dispute",permalink:"/savedao/docs/dispute"},next:{title:"Instructions for Client Payment",permalink:"/savedao/docs/client-instructions"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As the warning above states, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"never send ETH or ERC20 tokens directly to the escrow contract")),". They will be lost forever. All deposits into an escrow must happen via the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deposit")," function. This can be done easily via the ",(0,i.kt)("a",{parentName:"li",href:"https://xdai.escrow.raidguild.org/"},"escrow app"),"."),(0,i.kt)("li",{parentName:"ul"},"Clients should ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"never use centralized exchange accounts"))," to make deposits into an escrow. For one, they wouldn't be able to use the app to ",(0,i.kt)("inlineCode",{parentName:"li"},"Deposit")," in the first place. Secondly, they wouldn't be able to ",(0,i.kt)("inlineCode",{parentName:"li"},"Release")," funds to the raid party as milestones are completed."),(0,i.kt)("li",{parentName:"ul"},"Clients depositing from a smart contract account (such as a DAO or multisig) will need to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"ensure that the account can interact with other smart contracts"))," (e.g. via Aragon Agent, Moloch Minion, or a Gnosis Safe contract interaction).")))}m.isMDXComponent=!0}}]);