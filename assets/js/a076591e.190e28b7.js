"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3795],{3905:(e,i,l)=>{l.d(i,{Zo:()=>m,kt:()=>s});var t=l(67294);function I(e,i,l){return i in e?Object.defineProperty(e,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[i]=l,e}function d(e,i){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),l.push.apply(l,t)}return l}function n(e){for(var i=1;i<arguments.length;i++){var l=null!=arguments[i]?arguments[i]:{};i%2?d(Object(l),!0).forEach((function(i){I(e,i,l[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(l,i))}))}return e}function a(e,i){if(null==e)return{};var l,t,I=function(e,i){if(null==e)return{};var l,t,I={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],i.indexOf(l)>=0||(I[l]=e[l]);return I}(e,i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],i.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(I[l]=e[l])}return I}var Z=t.createContext({}),c=function(e){var i=t.useContext(Z),l=i;return e&&(l="function"==typeof e?e(i):n(n({},i),e)),l},m=function(e){var i=c(e.components);return t.createElement(Z.Provider,{value:i},e.children)},b={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},o=t.forwardRef((function(e,i){var l=e.components,I=e.mdxType,d=e.originalType,Z=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),o=c(l),s=I,r=o["".concat(Z,".").concat(s)]||o[s]||b[s]||d;return l?t.createElement(r,n(n({ref:i},m),{},{components:l})):t.createElement(r,n({ref:i},m))}));function s(e,i){var l=arguments,I=i&&i.mdxType;if("string"==typeof e||I){var d=l.length,n=new Array(d);n[0]=o;var a={};for(var Z in i)hasOwnProperty.call(i,Z)&&(a[Z]=i[Z]);a.originalType=e,a.mdxType="string"==typeof e?e:I,n[1]=a;for(var c=2;c<d;c++)n[c]=l[c];return t.createElement.apply(null,n)}return t.createElement.apply(null,l)}o.displayName="MDXCreateElement"},19312:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>Z,contentTitle:()=>n,default:()=>b,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=l(87462),I=(l(67294),l(3905));const d={},n="TAPLE Client",a={unversionedId:"learn/taple-client",id:"learn/taple-client",title:"TAPLE Client",description:"TAPLE Client is an open-source application for creating a TAPLE Node and represents the simplest way to work with TAPLE technology, providing all the necessary elements to build a node. Some of its functions include:",source:"@site/docs/learn/taple-client.md",sourceDirName:"learn",slug:"/learn/taple-client",permalink:"/taple-docsite/docs/next/learn/taple-client",draft:!1,tags:[],version:"current",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"FFI",permalink:"/taple-docsite/docs/next/learn/core-ffi"},next:{title:"TAPLE Client",permalink:"/taple-docsite/docs/next/learn/taple-client"}},Z={},c=[{value:"TAPLE Core",id:"taple-core",level:2},{value:"Database",id:"database",level:2},{value:"API REST",id:"api-rest",level:2}],m={toc:c};function b(e){let{components:i,...d}=e;return(0,I.kt)("wrapper",(0,t.Z)({},m,d,{components:i,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"taple-client"},"TAPLE Client"),(0,I.kt)("p",null,"TAPLE Client is an open-source application for creating a TAPLE Node and represents the simplest way to work with TAPLE technology, providing all the necessary elements to build a node. Some of its functions include:"),(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Using the TAPLE Core library."),(0,I.kt)("li",{parentName:"ul"},"Implementing a REST API to interact with the TAPLE network in an uncomplicated manner."),(0,I.kt)("li",{parentName:"ul"},"Allowing the configuration of various mechanisms: configuration files, startup parameters, and environment variables.")),(0,I.kt)("p",null,"Internally, TAPLE Client is structured into the following modules:"),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"taple-client",src:l(12132).Z,width:"525",height:"325"})),(0,I.kt)("h2",{id:"taple-core"},"TAPLE Core"),(0,I.kt)("p",null,"Reference library written in Rust that implements most of the TAPLE functionality. TAPLE Core is not a standalone application, it is a library that implements TAPLE protocols: encodes and decodes of information; interprets received messages; and performs other functions. For more information, refer to ",(0,I.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/learn/core-architecture"},"this resource"),"."),(0,I.kt)("h2",{id:"database"},"Database"),(0,I.kt)("p",null,"This module is responsible for storing the data: configurations, subjects, gobernances, etc. TAPLE client currently uses a ",(0,I.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},(0,I.kt)("em",{parentName:"a"},"Leveldb")," database")," for information persistence. "),(0,I.kt)("h2",{id:"api-rest"},"API REST"),(0,I.kt)("p",null,"TAPLE Client includes a REST API as a method of interaction with the node. It allows actions such as creating and querying subjects, executing events, or approving state changes, among others. For more information, see ",(0,I.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/api-rest/create-event-request"},"this resource"),"."))}b.isMDXComponent=!0},12132:(e,i,l)=>{l.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZHJhdy5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MjVweCIgaGVpZ2h0PSIzMjVweCIgdmlld0JveD0iLTAuNSAtMC41IDUyNSAzMjUiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDtlbWJlZC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMy0wNy0yMVQxMzo0NzozMy40NzdaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ29kZS8xLjgwLjEgQ2hyb21lLzEwOC4wLjUzNTkuMjE1IEVsZWN0cm9uLzIyLjMuMTQgU2FmYXJpLzUzNy4zNiZxdW90OyBldGFnPSZxdW90O3E1bGlfUnV4Sk42SHY5UWhNWXdIJnF1b3Q7IHZlcnNpb249JnF1b3Q7MjEuNi41JnF1b3Q7IHR5cGU9JnF1b3Q7ZW1iZWQmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7Mml6UC0wcHZ0SEwtNlpJOFNTSjgmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7N1poZGI5b3dGSVovRFpkRmNSd2dYQVlJYTZWdXF3clNMaXVUbU1TYUUyZkdGTHBmUHlleDh3MmxsQ0pWYXk1YTUvWG5PZStEYmVqQmFiVC94bEVTZm1jK3BqM1Q4UGM5T091WjVzZzI1TjlVZU1rRkM0eHlJZURFenlWUUNndnlGeXRSOVF1MnhNZWJXa1BCR0JVa3FZc2VpMlBzaVpxR09HZTdlck0xby9WWkV4VGdsckR3RUcycnY0Z3Z3bHkxelZHcDMySVNoSHBtTUJ6bk5SSFNqVlVrbXhENWJGZVJvTnVEVTg2WXlFdlJmb3BwbWp1ZGw3emYvRUJ0c1RDT1kzRktoNUZhOGpPaVd4V2NXcGg0MGRFK1l5NklEUDRlclRCOVlCc2lDSXRsMVlvSndhSWVuT2dHRGlWQldpRllJdFZRUkZTK0FGbVVVU2JwWU5FK1NIbm9yOUNHZUgyUDhSanpKODYyc2YvRU01OG1HU0xBa3FWZFNBUmVKTWhMTys1a042bXRDYVZUUmhuUEZnYmR5V1JxejlMeEJXZS9jYVZtbmoxRmpUWnBJQlVWcjF3eTNoOU1HaWlza0FoakZtSEJYMlFUM1dHZzNGUDRBa3U5NzBvWXpLSFN3aW9JV2tRS3dLQVl1L1JJRnBSTkJ5eXpQN0ZsOC9sNFpoaEhMZU5NSUxYY0cyQWJIMldpQmVvbVF1T3FKbzcvTnhQWGxDUzNlbDNYK0ZSZTExQjlwSDFTUSszQjZZWmV4YzNteC9PNmU2d05PdHdjMGpTeGF5WURrTGJxUzhud3p6WTlyQ2VnTEdZM0Q1M0NVb1RyN0tsS3cwRDl6NFplMVhEUnJkSUpiL0xwSE5uQUJNays3OU1ZWmVrODNMdXl3ZlQrenYyeDFHUEtTRmZOZWFTV1I2SGxCcWNaU05oWDluYnhVMFh5RFdkdkE3dHg5cWdRSzNyK1hJWWphTlk1TWdkdGpvRGR3ZEg0RWhqQlZ6RTYyMjduNFU1V1A3cUw1YW0yeWlTS1k5N0ZMTVlOazVTRTFIN2t5YVJqM3JGUlJjVDMwMms2WVNseDZqN00wMFdyTzc0SjJqUVVQR1h0VkRqZ0FtaFlvMEVkRGNQcUQ5cHd3QTQ0NENYZ3NENE9qcG16ZENiT3d2MUM0encwVEgxNkgwY0RERHZRQUJkQTQ0UnZaZlhVdldtVDduQ3plcXU3eEs0N2J0ekZMTmpLbnRWMWVJTWl6Ky9LbjluS1gzRTYvbngwdi9CL3pUN1lzRzlrOU0wTy9ydnVYMmRjditScitZdEhWbGY1MlFpNi93QT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHBhdGggZD0iTSAzMCAyIEwgMjYyIDIgTCAyNjIgMTYyIEwgMiAxNjIgTCAyIDMwIEMgMiAxNC41NCAxNC41NCAyIDMwIDIgWiIgZmlsbD0iI2ViYmM4ZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMjkwIDE2MiBMIDUyMiAxNjIgTCA1MjIgMzIyIEwgMjYyIDMyMiBMIDI2MiAxOTAgQyAyNjIgMTc0LjU0IDI3NC41NCAxNjIgMjkwIDE2MiBaIiBmaWxsPSIjZmY5ZDAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwLDM5MiwyNDIpIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAzMCAxNjIgTCAyNjIgMTYyIEwgMjYyIDMyMiBMIDIgMzIyIEwgMiAxOTAgQyAyIDE3NC41NCAxNC41NCAxNjIgMzAgMTYyIFoiIGZpbGw9IiNmZjlkMDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMiwwKXNjYWxlKC0xLDEpdHJhbnNsYXRlKC0xMzIsMClyb3RhdGUoMTgwLDEzMiwyNDIpIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAyOTAgMiBMIDUyMiAyIEwgNTIyIDE2MiBMIDI2MiAxNjIgTCAyNjIgMzAgQyAyNjIgMTQuNTQgMjc0LjU0IDIgMjkwIDIgWiIgZmlsbD0iI2ZmODUwMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkyLDApc2NhbGUoLTEsMSl0cmFuc2xhdGUoLTM5MiwwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjE3MiIgeT0iMTEyIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjkwIiByeD0iMTMuNSIgcnk9IjEzLjUiIGZpbGw9IiM5OTk5OTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxNzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxNTdweDsgbWFyZ2luLWxlZnQ6IDE3M3B4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMzMzMzMzOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPjxmb250IGNvbG9yPSIjZmZmZmZmIiBzaXplPSIxIj48YiBzdHlsZT0iZm9udC1zaXplOiAyMXB4OyI+VEFQTEUgQ0xJRU5UPC9iPjwvZm9udD48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMjYyIiB5PSIxNjEiIGZpbGw9IiMzMzMzMzMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VEFQTEUgQ0xJRU5UPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIzMjciIHk9IjY2LjUiIHdpZHRoPSIxMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSlzY2FsZSgwLjk5OTk5OTk5OTk5OTk5OTkpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAxJSIgaGVpZ2h0PSIxMDElIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTI4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogODJweDsgbWFyZ2luLWxlZnQ6IDMyOHB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRkZGRkZGOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIxcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IGZvbnQtd2VpZ2h0OiBib2xkOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48Zm9udCBzdHlsZT0iZm9udC1zaXplOiAyMXB4OyI+QVBJIFJFU1Q8L2ZvbnQ+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM5MiIgeT0iODgiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjFweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkFQSSBSRVNUPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI3NCIgeT0iNjYuNSIgd2lkdGg9IjExNiIgaGVpZ2h0PSIzMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMTRweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA4MnB4OyBtYXJnaW4tbGVmdDogNzVweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+PGZvbnQgc3R5bGU9ImZvbnQtc2l6ZTogMjFweDsiPkRBVEFCQVNFPC9mb250PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxMzIiIHk9Ijg4IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIxcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5EQVRBQkFTRTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMjQyIiB5PSIyMDUiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMTQuNSIgZmlsbD0iI2ZmOWQwMCIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTgyIiB5PSIyMzIuMjUiIHdpZHRoPSIxNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSlzY2FsZSgwLjk5OTk5OTk5OTk5OTk5OTkpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAxJSIgaGVpZ2h0PSIxMDElIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjYycHg7IG1hcmdpbi1sZWZ0OiAxODNweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+VEFQTEUgQ09SRTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyNjIiIHk9IjI2OSIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyMXB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+VEFQTEUgQ09SRTwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRyYXdpby5jb20vZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+VGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXk8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);