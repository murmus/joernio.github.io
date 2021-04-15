(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(h,p(p({ref:t},l),{},{components:n})):r.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(108)),o={id:"traversal-basics",title:"Traversal Basics"},p={unversionedId:"traversal-basics",id:"traversal-basics",isDocsHomePage:!1,title:"Traversal Basics",description:"Joern helps you discover security vulnerabilities by executing graph",source:"@site/docs/traversal-basics.mdx",slug:"/traversal-basics",permalink:"/traversal-basics",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/traversal-basics.mdx",version:"current",sidebar:"docs",previous:{title:"Code Property Graph",permalink:"/code-property-graph"},next:{title:"Syntax-Tree Queries",permalink:"/c-syntaxtree"}},s=[{value:"The Anatomy of an Joern Query",id:"the-anatomy-of-an-joern-query",children:[]},{value:"Importing a Sample Project",id:"importing-a-sample-project",children:[]},{value:"A First Traversal",id:"a-first-traversal",children:[{value:"Node-Type Steps",id:"node-type-steps",children:[]},{value:"Filter Steps",id:"filter-steps",children:[]},{value:"Map Steps",id:"map-steps",children:[]},{value:"Complex Steps",id:"complex-steps",children:[]},{value:"Repeat Steps",id:"repeat-steps",children:[]}]}],l={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Joern helps you discover security vulnerabilities by executing graph\ntraversals on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"code-property-graph"}),"Code Property\nGraph"),". A traversal is formulated\nas an ",Object(i.b)("em",{parentName:"p"},"Joern Query"),", or ",Object(i.b)("em",{parentName:"p"},"query")," for short. In this article, you will learn about the different components that make up queries."),Object(i.b)("h3",{id:"the-anatomy-of-an-joern-query"},"The Anatomy of an Joern Query"),Object(i.b)("p",null,"A query consists of the following components:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("em",{parentName:"li"},"Root Object"),", which is the reference to the ",Object(i.b)("em",{parentName:"li"},"Code Property Graph")," being queried"),Object(i.b)("li",{parentName:"ol"},"Zero or more ",Object(i.b)("em",{parentName:"li"},"Node-Type Steps"),", which are atomic traversals to all nodes of a given type"),Object(i.b)("li",{parentName:"ol"},"Zero or more ",Object(i.b)("em",{parentName:"li"},"Filter Steps"),", ",Object(i.b)("em",{parentName:"li"},"Map Steps")," or ",Object(i.b)("em",{parentName:"li"},"Repeat Steps")),Object(i.b)("li",{parentName:"ol"},"Zero or more ",Object(i.b)("em",{parentName:"li"},"Property Directives"),", which reference the properties of nodes in a traversal"),Object(i.b)("li",{parentName:"ol"},"Zero or more ",Object(i.b)("em",{parentName:"li"},"Execution Directives"),", which execute a traversal and return results in a specific format"),Object(i.b)("li",{parentName:"ol"},"Zero or more ",Object(i.b)("em",{parentName:"li"},"Augmentation Directives"),", which extend a Code Property Graph with new nodes, properties, or edges")),Object(i.b)("p",null,"Finally, components 2-7 can be combined into Complex Steps in the same way basic expressions of a programming language can be combined into complex expressions."),Object(i.b)("p",null,"As an example, the query"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cpg.method.name.toList\n")),Object(i.b)("p",null,"returns all names of methods present in a Code Property Graph and can be dissected as follows: ",Object(i.b)("inlineCode",{parentName:"p"},"cpg")," is the root object, ",Object(i.b)("inlineCode",{parentName:"p"},"method")," is a node-type step which references all ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes, ",Object(i.b)("inlineCode",{parentName:"p"},"name")," is a property directive which references the ",Object(i.b)("inlineCode",{parentName:"p"},"NAME")," property of those ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes, and ",Object(i.b)("inlineCode",{parentName:"p"},"toList")," is an execution directive which executes the traversal and returns the result as a list."),Object(i.b)("h3",{id:"importing-a-sample-project"},"Importing a Sample Project"),Object(i.b)("p",null,"Before we go into the details of these components, let us import a sample program. Clone the following git repository which contains the ",Object(i.b)("em",{parentName:"p"},"Java")," implementation of a simple program named ",Object(i.b)("inlineCode",{parentName:"p"},"X42"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/ShiftLeftSecurity/x42.git\n")),Object(i.b)("p",null,"Start Joern and specify a 4GB JVM heap size using the ",Object(i.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ JAVA_OPTS='-Xmx4g' joern\n")),Object(i.b)("p",null,"Then create a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/organizing-projects"}),"Project")," from the JAR file of the ",Object(i.b)("inlineCode",{parentName:"p"},"X42")," program using the ",Object(i.b)("inlineCode",{parentName:"p"},"importCode")," top-level command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> importCode("./x42/c/", "x42")\nCreating project `x42` for code at `x42/c/`\n... output omitted\nres0: Option[Cpg] = Some(io.shiftleft.codepropertygraph.Cpg@31ed46c5)\n')),Object(i.b)("h2",{id:"a-first-traversal"},"A First Traversal"),Object(i.b)("p",null,"For our first traversal, our objective is to determine the ",Object(i.b)("inlineCode",{parentName:"p"},"LANGUAGE")," property of the ",Object(i.b)("inlineCode",{parentName:"p"},"METADATA")," node in the Code Property Graph of the ",Object(i.b)("inlineCode",{parentName:"p"},"X42")," program. At the Joern prompt, type ",Object(i.b)("inlineCode",{parentName:"p"},"cpg")," and press ",Object(i.b)("inlineCode",{parentName:"p"},"ENTER"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern> cpg \nres1: Cpg = io.shiftleft.codepropertygraph.Cpg@ab90fdab\n")),Object(i.b)("p",null,"The executed query consists only of the root object ",Object(i.b)("inlineCode",{parentName:"p"},"cpg"),". The return value of that execution is a reference to the Code Property Graph and  the reference itself is suffixed by a hexadecimal string (in this case ",Object(i.b)("inlineCode",{parentName:"p"},"@ab90fdab"),") that uniquely identifies it. We proceed to add the ",Object(i.b)("inlineCode",{parentName:"p"},"metaData")," node-type step to the query. This step represents a traversal to all nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"METADATA")," (of which there is only one):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern> cpg.metaData \nres2: Traversal[MetaData] = Traversal\n")),Object(i.b)("p",null,"Note that the result is not the content of the ",Object(i.b)("inlineCode",{parentName:"p"},"METADATA")," node, but a traversal that visits the ",Object(i.b)("inlineCode",{parentName:"p"},"METADATA")," node. In other words, Traversals are lazyly evaluated - you can compose them and at some later point execute them, as we will see. "),Object(i.b)("p",null,"This behaviour points to the ephemeral nature of queries: each query is separate from the other, and Joern holds distinct in-memory representations for them. The only object shared between queries is the root object (",Object(i.b)("inlineCode",{parentName:"p"},"cpg"),")."),Object(i.b)("p",null,"Traversals are executed - as opposed to just to being held in memory - using execution directives such as ",Object(i.b)("inlineCode",{parentName:"p"},"toList"),". The directive ",Object(i.b)("inlineCode",{parentName:"p"},"toList")," executes the traversal and returns results in a list: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.metaData.toList \nres3: List[MetaData] = List(\n  MetaData(\n    id -> 1L,\n    language -> "C",\n    version -> "0.1",\n    overlays -> List("semanticcpg"),\n    policyDirectories -> List(),\n    spid -> None\n  )\n)\n')),Object(i.b)("p",null,"In the result of this query, we already see the ",Object(i.b)("inlineCode",{parentName:"p"},"LANGUAGE")," field and that it is ",Object(i.b)("inlineCode",{parentName:"p"},"C"),". For the sake of completeness and to illustrate property directives, let us add the property directive ",Object(i.b)("inlineCode",{parentName:"p"},"language")," to the query. Property directives provide access to individual node properties. Each node-type step can be combined with different property directives, and they usually match the properties defined on the node type represented by the node-type step:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.metaData.language.toList \nres4: List[AnyRef] = "C"\n')),Object(i.b)("p",null,"With this last query, we have achieved our goal of executing a traversal which returns the ",Object(i.b)("inlineCode",{parentName:"p"},"LANGUAGE")," property of the ",Object(i.b)("inlineCode",{parentName:"p"},"METADATA")," node of the ",Object(i.b)("inlineCode",{parentName:"p"},"X42")," program."),Object(i.b)("h3",{id:"node-type-steps"},"Node-Type Steps"),Object(i.b)("p",null,"Node-Type Steps are atomic traversals that represent traversals to nodes of a given type. Each node-type step comes with distinct ",Object(i.b)("em",{parentName:"p"},"Property Directives")," to access the properties of the nodes they represent. Let us revisit the source code of the ",Object(i.b)("inlineCode",{parentName:"p"},"x42")," program to illustrate node-type steps."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'// X42.c\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n  if (argc > 1 && strcmp(argv[1], "42") == 0) {\n    fprintf(stderr, "It depends!\\n");\n    exit(42);\n  }\n  printf("What is the meaning of life?\\n");\n  exit(0);\n}\n')),Object(i.b)("p",null,"A commonly used node-type step is ",Object(i.b)("inlineCode",{parentName:"p"},"method"),", which represents a traversal to all nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD"),". ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes represent declarations of methods, functions or procedures in programs, and one of their properties is ",Object(i.b)("inlineCode",{parentName:"p"},"NAME"),". All names of all method nodes can thus be determined as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern > cpg.method.name.l \nres4: List[String] = List(\n  "<operator>.logicalAnd",\n  "strcmp",\n  "<operator>.equals",\n  "printf",\n  "fprintf",\n  "exit",\n  "<operator>.greaterThan",\n  "main",\n  "<operator>.indirectIndexAccess"\n)\n')),Object(i.b)("p",null,"The number of ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes may surprise you, given that the program only defines the single method ",Object(i.b)("inlineCode",{parentName:"p"},"main")," explicitly. The Code Property Graph, however, also includes method nodes for all methods invoked by the code. Moreover, built-in operators are modeled as methods, one decision made to enable language-agnostic analysis."),Object(i.b)("p",null,"We will look into the details of node-type steps in a different article. For now, it is sufficient to know that Joern offers these steps for all common node types: ",Object(i.b)("inlineCode",{parentName:"p"},"method"),", ",Object(i.b)("inlineCode",{parentName:"p"},"call"),", ",Object(i.b)("inlineCode",{parentName:"p"},"argument"),", ",Object(i.b)("inlineCode",{parentName:"p"},"parameter"),", ",Object(i.b)("inlineCode",{parentName:"p"},"metaData"),", ",Object(i.b)("inlineCode",{parentName:"p"},"local"),", ",Object(i.b)("inlineCode",{parentName:"p"},"literal"),", ",Object(i.b)("inlineCode",{parentName:"p"},"types"),", ",Object(i.b)("inlineCode",{parentName:"p"},"returns"),", ",Object(i.b)("inlineCode",{parentName:"p"},"identifier"),", ",Object(i.b)("inlineCode",{parentName:"p"},"namespace"),", ",Object(i.b)("inlineCode",{parentName:"p"},"namespaceBlock"),", ",Object(i.b)("inlineCode",{parentName:"p"},"methodReturn"),", ",Object(i.b)("inlineCode",{parentName:"p"},"typeDecl"),", ",Object(i.b)("inlineCode",{parentName:"p"},"member"),", ",Object(i.b)("inlineCode",{parentName:"p"},"methodRef"),", ",Object(i.b)("inlineCode",{parentName:"p"},"file"),", ",Object(i.b)("inlineCode",{parentName:"p"},"comment"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," and the generic ",Object(i.b)("inlineCode",{parentName:"p"},"all"),"."),Object(i.b)("h3",{id:"filter-steps"},"Filter Steps"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Filter Steps")," are atomic traversals that filter nodes according to given criteria. The most common filter step is aptly-named ",Object(i.b)("inlineCode",{parentName:"p"},"filter"),",  which continues the traversal in the step it suffixes for all nodes which pass its criterion. Its criterion is represented by a lamba function which has access to the node of the previous step and returns a boolean.  Continuing with the previous example, let us execute a query which returns all ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes of the Code Property Graph for ",Object(i.b)("inlineCode",{parentName:"p"},"X42"),", but only if their ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property is set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.filter(_.isExternal == false).name.toList \nres11: List[String] = List("main")\n')),Object(i.b)("p",null,"Disecting this query, we have ",Object(i.b)("inlineCode",{parentName:"p"},"cpg")," as the root object, a node-type step ",Object(i.b)("inlineCode",{parentName:"p"},"method")," which returns all nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD"),", a filter step ",Object(i.b)("inlineCode",{parentName:"p"},"where(_.isExternal == false)")," which continues the traversal only for nodes which have their ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," (with ",Object(i.b)("inlineCode",{parentName:"p"},"_")," referencing the individual nodes, and ",Object(i.b)("inlineCode",{parentName:"p"},"isExternal")," a property directive which accesses their ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property), followed by  a property directive ",Object(i.b)("inlineCode",{parentName:"p"},"name")," which returns the values of the ",Object(i.b)("inlineCode",{parentName:"p"},"NAME")," property of the nodes that passed the ",Object(i.b)("em",{parentName:"p"},"Filter Step"),", and finally an ",Object(i.b)("em",{parentName:"p"},"Execution Directive")," ",Object(i.b)("inlineCode",{parentName:"p"},"toList")," which executes the traversal and returns the results in a list."),Object(i.b)("p",null,"A shorter version of a query which returns the same results as the one above can be written using a ",Object(i.b)("em",{parentName:"p"},"Property-Filter Step"),". Property-filter steps are ",Object(i.b)("em",{parentName:"p"},"Filter Steps")," which continue the traversal only for nodes which have a specific value in the property the ",Object(i.b)("em",{parentName:"p"},"Property Filter Step")," refers to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.isExternal(false).name.toList \nres11: List[String] = List("main")\n')),Object(i.b)("p",null,"Disecting the query again, ",Object(i.b)("inlineCode",{parentName:"p"},"cpg")," is the root object, ",Object(i.b)("inlineCode",{parentName:"p"},"method")," is a node-type step, ",Object(i.b)("inlineCode",{parentName:"p"},"isExternal(false)")," is a property-filter step that filters for nodes which have ",Object(i.b)("inlineCode",{parentName:"p"},"false")," as the value of their ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property, ",Object(i.b)("inlineCode",{parentName:"p"},"name")," is a property directive, and ",Object(i.b)("inlineCode",{parentName:"p"},"toList")," is the execution directive you are already familiar with."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Be careful not to mix up property directives with property-filter steps, they look awfully similar.\nConsider that:"),Object(i.b)("p",{parentName:"div"},"a) ",Object(i.b)("inlineCode",{parentName:"p"},"cpg.method.isExternal(true).name.toList")," returns all ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes which have the ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," (in this case, 10 results)"),Object(i.b)("p",{parentName:"div"},"b) ",Object(i.b)("inlineCode",{parentName:"p"},"cpg.method.isExternal.toList")," returns the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property for all ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes in the graph (12 results)"),Object(i.b)("p",{parentName:"div"},"c) ",Object(i.b)("inlineCode",{parentName:"p"},"cpg.method.isExternal.name.toList")," is an invalid query which will not execute"))),Object(i.b)("p",null,"A final ",Object(i.b)("em",{parentName:"p"},"Filter Step")," we will look at is named ",Object(i.b)("inlineCode",{parentName:"p"},"where"),". Unlike ",Object(i.b)("inlineCode",{parentName:"p"},"filter"),", this doesn't take a simple predicate ",Object(i.b)("inlineCode",{parentName:"p"},"A => Boolean"),", but instead takes a ",Object(i.b)("inlineCode",{parentName:"p"},"Traversal[A] => Traversal[_]"),". I.e. you supply a traversal which will be executed at the current position. The resulting Traversal will preserves elements if the provided traversal has ",Object(i.b)("em",{parentName:"p"},"at least one")," result. The previous query that used a ",Object(i.b)("em",{parentName:"p"},"Property Filter Step")," can be re-written using ",Object(i.b)("inlineCode",{parentName:"p"},"where")," like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.where(_.isExternal(false)).name.toList \nres24: List[String] = List("main")\n')),Object(i.b)("p",null,"Maybe not particulary useful-seeming given this specific example, but keep it in the back of your head, because ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," is a handy tool to have in the toolbox. Next up, ",Object(i.b)("em",{parentName:"p"},"Map Steps"),"."),Object(i.b)("h3",{id:"map-steps"},"Map Steps"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Map Steps")," are traversals that map a set of nodes into a different form given a function. ",Object(i.b)("em",{parentName:"p"},"Map Steps")," are a powerful mechanism when you need to transform results to fit your specifics. For example, say you'd like to return both the ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"NAME")," properties of all ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes in ",Object(i.b)("inlineCode",{parentName:"p"},"X42"),"'s Code Property Graph. You can achieve that with the following query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.map(node => (node.isExternal, node.name)).toList\nres6: List[(java.lang.Boolean, String)] = List(\n  (true, "<operator>.logicalAnd"),\n  (true, "strcmp"),\n  (true, "<operator>.equals"),\n  (true, "printf"),\n  (true, "fprintf"),\n  (true, "exit"),\n  (true, "<operator>.greaterThan"),\n  (false, "main"),\n  (true, "<operator>.indirectIndexAccess")\n)\n')),Object(i.b)("p",null,"Don't be intimidated by the syntax used in the ",Object(i.b)("inlineCode",{parentName:"p"},"map")," ",Object(i.b)("em",{parentName:"p"},"Step")," above. If you examine ",Object(i.b)("inlineCode",{parentName:"p"},"map(node => (node.isExternal, node.name))")," for a bit, you might be able to infer that the first ",Object(i.b)("inlineCode",{parentName:"p"},"node")," simply defines the variable that represents the node which preceeds the ",Object(i.b)("inlineCode",{parentName:"p"},"map")," ",Object(i.b)("em",{parentName:"p"},"Step"),", that the ASCII arrow ",Object(i.b)("inlineCode",{parentName:"p"},"=>")," is just syntax that preceeds the body of a lambda function, and that ",Object(i.b)("inlineCode",{parentName:"p"},"(node.isExternal, node.name)")," means that the return value of the lambda is a list which contains the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"isExternal")," and ",Object(i.b)("inlineCode",{parentName:"p"},"name")," ",Object(i.b)("em",{parentName:"p"},"Property Directives")," for each of the nodes matched in the previous step and also passed into the lambda. In most cases in which you need ",Object(i.b)("inlineCode",{parentName:"p"},"map"),", you can simply follow the pattern above. But should you ever feel constrained by the common pattern shown, remember that the function for the ",Object(i.b)("inlineCode",{parentName:"p"},"map")," step is written in the Scala programming language, a fact which opens up a wide range of possibilities if you invest a little time learning the language."),Object(i.b)("h3",{id:"complex-steps"},"Complex Steps"),Object(i.b)("p",null,"Another useful ",Object(i.b)("em",{parentName:"p"},"Joern Query Component")," is the ",Object(i.b)("em",{parentName:"p"},"Complex Step"),". ",Object(i.b)("em",{parentName:"p"},"Complex Steps")," combine many simpler steps into one in order to make your queries more concise. There are a number of them available, all with different behaviours, and one good example is ",Object(i.b)("inlineCode",{parentName:"p"},"isConstructor"),". Before we use it in a query, here is the ",Object(i.b)("inlineCode",{parentName:"p"},"X42")," program again:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// X42.c\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n  if (argc > 1 && strcmp(argv[1], "42") == 0) {\n    fprintf(stderr, "It depends!\\n");\n    exit(42);\n  }\n  printf("What is the meaning of life?\\n");\n  exit(0);\n}\n')),Object(i.b)("p",null,"Earlier we queried it for all ",Object(i.b)("inlineCode",{parentName:"p"},"METHOD")," nodes which had their ",Object(i.b)("inlineCode",{parentName:"p"},"IS_EXTERNAL")," property set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"isExternal(false)")," ",Object(i.b)("em",{parentName:"p"},"Property Filter Step"),". Two results came up, even though only one method is explicitly defined:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.isExternal(false).name.l \nres103: List[String] = List("main")\n')),Object(i.b)("p",null,"Two useful ",Object(i.b)("em",{parentName:"p"},"Complex Steps")," are ",Object(i.b)("inlineCode",{parentName:"p"},"astParent")," and ",Object(i.b)("inlineCode",{parentName:"p"},"astChildren"),", which allow you to steer your traversals through the abstract syntax tree of the program under analysis. Say you'd like to have a query that returns the ",Object(i.b)("inlineCode",{parentName:"p"},"CODE")," property for all nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"LITERAL")," which are AST child nodes of ",Object(i.b)("inlineCode",{parentName:"p"},"CALL")," nodes that have ",Object(i.b)("inlineCode",{parentName:"p"},"println")," in their ",Object(i.b)("inlineCode",{parentName:"p"},"NAME")," property:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.call.name("println").astChildren.isLiteral.code.l \nres87: List[String] = List("\\"What is the meaning of life?\\"", "\\"It depends!\\"")\n')),Object(i.b)("p",null,"Or taken the other way around, a query which returns the property of all ",Object(i.b)("inlineCode",{parentName:"p"},"CALL")," nodes which have AST parent nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"LITERAL")," that have their ",Object(i.b)("inlineCode",{parentName:"p"},"CODE")," property set to ",Object(i.b)("inlineCode",{parentName:"p"},'\\"What is the meaning of life?\\"'),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.literal.filter(_.code == "\\"What is the meaning of life?\\\\n\\"").astParent.isCall.name.toList\nres100: List[String] = List("println")\n')),Object(i.b)("p",null,"Describing queries in human language tends to sound peculiar. But so would descriptions of bash one-liners, or basic regular expressions if you'd try out that exercise. As long as you understand the individual components of a query, it won't be hard to construct them correctly and understand clearly what they do."),Object(i.b)("p",null,"One final ",Object(i.b)("em",{parentName:"p"},"Joern Query Component")," we'll examine in this article is the ",Object(i.b)("em",{parentName:"p"},"Repeat Step"),"."),Object(i.b)("h3",{id:"repeat-steps"},"Repeat Steps"),Object(i.b)("p",null,"There are cases in which queries have repetitions in them and become too long. In order to make them more readable, you can use ",Object(i.b)("em",{parentName:"p"},"Repeat Steps"),". ",Object(i.b)("em",{parentName:"p"},"Repeat Steps")," are traversals that repeat other traversals a number of times.\nFor example, say you'd like to find nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"LITERAL")," in ",Object(i.b)("inlineCode",{parentName:"p"},"X42"),"'s Code Property Graph that are directly reachable from the node which represents the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," method. One way of doing that is by using five ",Object(i.b)("inlineCode",{parentName:"p"},"astChildren")," ",Object(i.b)("em",{parentName:"p"},"Complex Steps")," in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"isLiteral"),", which is another ",Object(i.b)("em",{parentName:"p"},"Complex Step")," that filters for AST nodes of type ",Object(i.b)("inlineCode",{parentName:"p"},"LITERAL")," and maps them to actual ",Object(i.b)("inlineCode",{parentName:"p"},"LITERAL")," nodes,  plus the ",Object(i.b)("inlineCode",{parentName:"p"},'code("42")')," ",Object(i.b)("em",{parentName:"p"},"Property Filter Step"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("main").astChildren.astChildren.astChildren.astChildren.astChildren.isLiteral.code("42").toList \nres137: List[Literal] = List(\n  Literal(\n    id -> 1000000050L,\n    code -> "42",\n    order -> 1,\n    argumentIndex -> 1,\n    typeFullName -> "int",\n    dynamicTypeHintFullName -> List(),\n    lineNumber -> Some(5),\n    columnNumber -> None,\n    depthFirstOrder -> None,\n    internalFlags -> None\n  )\n)\n')),Object(i.b)("p",null,"The query might do the job, but it is hard to read and change. ",Object(i.b)("inlineCode",{parentName:"p"},"repeat-times")," makes the query clearer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("main").repeat(_.astChildren)(_.times(5)).isLiteral.code("42").l \nres138: List[Literal] = List(\n  Literal(\n    id -> 1000000050L,\n    code -> "42",\n    order -> 1,\n    argumentIndex -> 1,\n    typeFullName -> "int",\n    dynamicTypeHintFullName -> List(),\n    lineNumber -> Some(5),\n    columnNumber -> None,\n    depthFirstOrder -> None,\n    internalFlags -> None\n  )\n)\n')),Object(i.b)("p",null,"And even better is another variant of ",Object(i.b)("inlineCode",{parentName:"p"},"repeat"),", namely ",Object(i.b)("inlineCode",{parentName:"p"},"repeat-until"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("main").repeat(_.astChildren)(_.until(_.isLiteral.code("42"))).l \nres139: List[AstNode] = List(\n  Literal(\n    id -> 1000000050L,\n    code -> "42",\n    order -> 1,\n    argumentIndex -> 1,\n    typeFullName -> "int",\n    dynamicTypeHintFullName -> List(),\n    lineNumber -> Some(5),\n    columnNumber -> None,\n    depthFirstOrder -> None,\n    internalFlags -> None\n  )\n)\n')),Object(i.b)("p",null,"We won't go any further in this article. If you've read so far, you already have a good overview of the most important ",Object(i.b)("em",{parentName:"p"},"Joern Query Components"),". And while the examples you've seen focused on the simple ",Object(i.b)("inlineCode",{parentName:"p"},"X42")," program, rest assured, queries that find serious vulnerabilities in programs with millions of lines of code are not much different. Master these basics and you will already have found a strong tool in your code analysis arsenal. As soon as you feel ready, explore the more advanced walkthroughs for a level-up. Have fun!"))}c.isMDXComponent=!0}}]);