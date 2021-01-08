(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(105)),c={id:"data-flow-steps",title:"Data-Flow Steps"},l={unversionedId:"cpgql/data-flow-steps",id:"cpgql/data-flow-steps",isDocsHomePage:!1,title:"Data-Flow Steps",description:"Data-Flow Steps are Complex Steps that represent flows of data.",source:"@site/docs/cpgql/data-flow-steps.mdx",slug:"/cpgql/data-flow-steps",permalink:"/cpgql/data-flow-steps",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/cpgql/data-flow-steps.mdx",version:"current",sidebar:"docs",previous:{title:"Control-Flow Steps",permalink:"/cpgql/control-flow-steps"},next:{title:"Execution Directives",permalink:"/cpgql/execution-directives"}},i=[{value:"reachableBy",id:"reachableby",children:[]},{value:"reachableByFlows",id:"reachablebyflows",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Data-Flow Steps are Complex Steps that represent flows of data."),Object(o.b)("p",null,"We will look at each one using our sample program ",Object(o.b)("inlineCode",{parentName:"p"},"X42"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n  if (argc > 1 && strcmp(argv[1], "42") == 0) {\n    fprintf(stderr, "It depends!\\n");\n    exit(42);\n  }\n  printf("What is the meaning of life?\\n");\n  exit(0);\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"After importing the program, make sure to run the OSS dataflow overlay creation command in order to run these steps:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern> run.ossdataflow \nThe graph has been modified. You may want to use the `save` command to persist changes to disk.  All changes will also be saved collectively on exit\nres0: Cpg = io.shiftleft.codepropertygraph.Cpg@221b5be0\n")))),Object(o.b)("h3",{id:"reachableby"},"reachableBy"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"reachableBy")," is a ",Object(o.b)("em",{parentName:"p"},"Data-Flow Step")," that returns sources for flows of data from sinks to sources."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.call.name("strcmp").reachableBy(cpg.method.parameter).l\nres0: List[MethodParameterIn] = List(\n  MethodParameterIn(\n    id -> 1000104L,\n    code -> "char *argv[]",\n    order -> 2,\n    name -> "argv",\n    evaluationStrategy -> "BY_VALUE",\n    typeFullName -> "char * [ ]",\n    dynamicTypeHintFullName -> List(),\n    lineNumber -> Some(5),\n    columnNumber -> Some(19)\n  )\n)\n')),Object(o.b)("h3",{id:"reachablebyflows"},"reachableByFlows"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"reachableBy")," is a ",Object(o.b)("em",{parentName:"p"},"Data-Flow Step")," that returns paths for flows of data from sinks to sources."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> sink.reachableByFlows(source).l\nres0: List[Path] = List(\n  Path(\n    List(\n      MethodParameterIn(\n        id -> 1000104L,\n        code -> "char *argv[]",\n        order -> 2,\n        name -> "argv",\n        evaluationStrategy -> "BY_VALUE",\n        typeFullName -> "char * [ ]",\n        dynamicTypeHintFullName -> List(),\n        lineNumber -> Some(5),\n        columnNumber -> Some(19)\n      ),\n      Call(\n        id -> 1000112L,\n        code -> "strcmp(argv[1], \\"42\\")",\n        name -> "strcmp",\n        order -> 1,\n        methodInstFullName -> None,\n        methodFullName -> "strcmp",\n        argumentIndex -> 1,\n        dispatchType -> "STATIC_DISPATCH",\n        signature -> "TODO assignment signature",\n        typeFullName -> "ANY",\n        dynamicTypeHintFullName -> List(),\n        lineNumber -> Some(6),\n        columnNumber -> Some(18),\n        resolved -> None,\n        depthFirstOrder -> None,\n        internalFlags -> None\n      )\n    )\n  )\n)\n')))}p.isMDXComponent=!0}}]);