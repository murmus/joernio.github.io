(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(108)),o={title:"Installation",id:"installation"},l={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Prerequisites",source:"@site/docs/installation.mdx",slug:"/installation",permalink:"/installation",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/installation.mdx",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/home"},next:{title:"Quickstart",permalink:"/quickstart"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing Pre-Built Binaries",id:"installing-pre-built-binaries",children:[]},{value:"Building from Source Code",id:"building-from-source-code",children:[]},{value:"Configuring the JVM for Optimal Performance",id:"configuring-the-jvm-for-optimal-performance",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Java 8 or higher",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Link: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://openjdk.java.net/install/"}),"https://openjdk.java.net/install/"))))),Object(a.b)("h2",{id:"installing-pre-built-binaries"},"Installing Pre-Built Binaries"),Object(a.b)("p",null,"Pre-built binaries of the joern-cli are available at:"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ShiftLeftSecurity/joern/releases/"}),"https://github.com/ShiftLeftSecurity/joern/releases/")),Object(a.b)("p",null,"To install the latest release, simply execute the following"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ShiftLeftSecurity/joern\ncd joern\nsudo ./joern-install.sh\n")),Object(a.b)("p",null,"and follow the installer instructions.\nBy default, joern will be installed at ",Object(a.b)("inlineCode",{parentName:"p"},"~/bin/joern"),"."),Object(a.b)("p",null,"You can test your installation as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/bin/joern/joern-cli\n./joern\nCompiling (synthetic)/ammonite/predef/interpBridge.sc\nCompiling (synthetic)/ammonite/predef/replBridge.sc\nCompiling (synthetic)/ammonite/predef/DefaultPredef.sc\nCompiling /home/tmp/shiftleft/joern/(console)\n\n     \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557\n     \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\n     \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\n\u2588\u2588   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\n\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\n \u255a\u2550\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d\n\njoern>\n")),Object(a.b)("h2",{id:"building-from-source-code"},"Building from Source Code"),Object(a.b)("p",null,"To build joern-cli from source code, you need to\ninstall the Scala build tool (sbt), which you can install by following\nthe instructions at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.scala-sbt.org/download.html"}),"https://www.scala-sbt.org/download.html"),". Any 1.x\nversion of sbt works as sbt downloads the correct version for building\njoern as part of the build process."),Object(a.b)("p",null,"If you are building Joern using macOS you will need to install the\ngreadlink package:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew install coreutils\n")),Object(a.b)("p",null,"Once the dependencies are installed, run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ShiftLeftSecurity/joern.git\ncd joern\nsbt stage\n")),Object(a.b)("p",null,"This builds joern-cli in the current directory. To\nbuild the  distribution zip file (",Object(a.b)("inlineCode",{parentName:"p"},"joern-cli.zip"),"), run ",Object(a.b)("inlineCode",{parentName:"p"},"sbt createDistribution"),"."),Object(a.b)("h2",{id:"configuring-the-jvm-for-optimal-performance"},"Configuring the JVM for Optimal Performance"),Object(a.b)("p",null,"Code analysis can require lots of memory, and unfortunately, the JVM does not pick up the available amount of memory by itself. While tuning Java memory usage is a discipline in its own right, it is usually sufficient to specify the maximum available amount of heap memory using the JVM's -Xmx flag. The easiest way to achieve this globally is by setting the environment variable _JAVA_OPTS as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'export _JAVA_OPTS="-Xmx$NG"\n')),Object(a.b)("p",null,"where $N is the amount of memory in gigabytes. For example, to allow the JVM to use 20 gigabytes of RAM, you would issue the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'export _JAVA_OPTS="-Xmx20G"\n')),Object(a.b)("p",null,"You can add this line to your shell startup script, e.g., ~/.bashrc or ~/.zshrc."))}u.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);