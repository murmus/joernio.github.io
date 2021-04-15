(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,h=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(108)),i={id:"organizing-projects",title:"Workspace"},c={unversionedId:"organizing-projects",id:"organizing-projects",isDocsHomePage:!1,title:"Workspace",description:"When working with Joern, a common set of commands is focused around organizing files generated during analyses. This walk-through provides a detailed description of these commands.",source:"@site/docs/organizing-projects.mdx",slug:"/organizing-projects",permalink:"/organizing-projects",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/organizing-projects.mdx",version:"current",sidebar:"docs",previous:{title:"Server",permalink:"/server"},next:{title:"Code Property Graph",permalink:"/code-property-graph"}},p=[{value:"The Workspace",id:"the-workspace",children:[]},{value:"Joern Projects",id:"joern-projects",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When working with Joern, a common set of commands is focused around organizing files generated during analyses. This walk-through provides a detailed description of these commands."),Object(o.b)("h3",{id:"the-workspace"},"The Workspace"),Object(o.b)("p",null,"The Workspace is a directory on your file system in which all files generated during analyses are saved. Every Joern installation has exactly one Workspace and it provides access to it with the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," command.  Type ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," in your Joern Shell now and press ",Object(o.b)("inlineCode",{parentName:"p"},"ENTER")," to evaluate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"joern> workspace\nThe workpace is empty. Use `importCode` or `importCpg` to populate it\nres0: io.shiftleft.console.workspacehandling.WorkspaceManager[io.shiftleft.repl.JoernProject] = empty\n")),Object(o.b)("p",null,"The Joern Workspace will be empty if you haven't used Joern before. While empty, it's not of much use, but you can still print its path on the filesystem using the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace.getPath")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> workspace.getPath\nres1: String = "/home/user/.shiftleft/joern/workspace"\n')),Object(o.b)("p",null,"OK. You now know what the Workspace is, and where it is located, let us move on to something more exciting, Joern Projects."),Object(o.b)("h3",{id:"joern-projects"},"Joern Projects"),Object(o.b)("p",null,"An Joern Project is a collection of files related to a single analysis. Just like the Joern Workspace, Joern Projects are represented by directories on your filesystem. Each project directory contains the project metadata (like its name, or the absolute path of the program under analysis), a binary representation of the Code Property Graph for the program under analysis, and, optionally, binary representations of the Code Property Graph Overlays that have been generated. Other files may be part of project directories, but we will leave their description for later."),Object(o.b)("p",null,"For now, let us create two Joern Projects using the ",Object(o.b)("inlineCode",{parentName:"p"},"importCode")," top-level command of the Joern Shell. ",Object(o.b)("inlineCode",{parentName:"p"},"importCode")," does four things: 1) it creates a new Joern Project for a program found at a path, 2) it generates a Code Property Graph for that program, 3) it loads the generated Code Property Graph into memory, and 4) it generates Code Property Graph Overlays for that Code Property Graph. For the purposes of this demonstration, you will create the two Joern Projects from a sample program named ",Object(o.b)("inlineCode",{parentName:"p"},"X42"),". Clone the following git repository which contains its implementation in a few different programming languages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/ShiftLeftSecurity/x42.git\n")),Object(o.b)("p",null,"Now run ",Object(o.b)("inlineCode",{parentName:"p"},"importCode"),", first for the ",Object(o.b)("em",{parentName:"p"},"C")," implementation of the ",Object(o.b)("inlineCode",{parentName:"p"},"X42")," program: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> importCode("./x42/c", "x42-c")\nCreating project `x42-c` for code at `./x42/c`\n// ...output trimmed\nres1: Option[Cpg] = Some(io.shiftleft.codepropertygraph.Cpg@7923e12c)\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you see an error and a return value of ",Object(o.b)("inlineCode",{parentName:"p"},"None"),", you have probably pointed Joern to the wrong input path for the directory containing the source code for the sample project. Ensure it is correct by navigating to the git repository you cloned and using its absolute path in the ",Object(o.b)("inlineCode",{parentName:"p"},"importCode")," command."))),Object(o.b)("p",null,"Then, for the ",Object(o.b)("em",{parentName:"p"},"Java")," implementation of the same ",Object(o.b)("inlineCode",{parentName:"p"},"X42")," program:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> importCode("./x42/java/X42.jar", "x42-java")\nCreating project `x42-java` for code at `./x42/java/X42.jar`\n// ...output trimmed\nres2: Option[Cpg] = Some(io.shiftleft.codepropertygraph.Cpg@5d41bf70)\n')),Object(o.b)("p",null,"If you did everything right, the output of ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," will look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"joern> workspace \nres3: io.shiftleft.console.workspacehandling.WorkspaceManager[io.shiftleft.repl.JoernProject] = \n____________________________________________________________________________\n| name    | overlays                    | inputPath                  | open|\n|==========================================================================|\n| x42-java| semanticcpg,dataflow,tagging| /home/user/x42/java/X42.jar| true|\n| x42-c   | semanticcpg,dataflow,tagging| /home/user/x42/c           | true|\n")),Object(o.b)("p",null,"The output is fairly self-explanatory. The Joern Workspace contains two Joern Projects, one named ",Object(o.b)("inlineCode",{parentName:"p"},"x42-c")," and one named ",Object(o.b)("inlineCode",{parentName:"p"},"x42-java"),". The second column, ",Object(o.b)("em",{parentName:"p"},"overlays"),", lists the Code Property Graph Overlays that have been created for each project.  Values in the ",Object(o.b)("em",{parentName:"p"},"inputPath")," column refer to the absolute filesystem paths of the programs these projects represent. And finally, ",Object(o.b)("em",{parentName:"p"},"open")," specifies whether the Code Property Graphs are currently loaded in memory."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You might have noticed that the paths pointing to the different language implementations of the X42 program differ slightly. One points to a directory, another to a file. That is because of the way Joern creates Code Property Graphs for programs. For Java, JAR files are supported. For other languages, directories with source files."))),Object(o.b)("p",null,"Each Joern Shell session has one active project at a time, and you can find out which one it is using the ",Object(o.b)("inlineCode",{parentName:"p"},"project")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> project \nres4: io.shiftleft.repl.JoernProject = Project(\n  ProjectFile("/home/user/x42/c", "x42-c"),\n  /home/user/.shiftleft/joern/workspace/x42-c,\n  Some(io.shiftleft.codepropertygraph.Cpg@28ce038d)\n)\n')),Object(o.b)("p",null,"The active project is the project which contains the Code Property Graph you want to focus your analysis on at a given time. Some important Joern Shell commands always refer to the ",Object(o.b)("em",{parentName:"p"},"current active project"),". For example, if you run ",Object(o.b)("inlineCode",{parentName:"p"},"cpg.metaData.l"),", the return value will be the ",Object(o.b)("em",{parentName:"p"},"META_DATA")," node of the Code Property Graph of the ",Object(o.b)("em",{parentName:"p"},"currently active project"),", which in this case, is ",Object(o.b)("inlineCode",{parentName:"p"},"x42-c"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.metaData.l \nres5: List[MetaData] = List(\n  MetaData(\n    id -> 2L,\n    language -> "C",\n    version -> null,\n    overlays -> List("semanticcpg", "dataflow", "tagging"),\n    policyDirectories -> List(),\n    spid -> None\n  )\n)\n')),Object(o.b)("p",null,"If instead you'd like access to the ",Object(o.b)("em",{parentName:"p"},"META_DATA")," node of the ",Object(o.b)("inlineCode",{parentName:"p"},"x42-java")," project, you'd first make it the active project using ",Object(o.b)("inlineCode",{parentName:"p"},"workspace.setActiveProject"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> workspace.setActiveProject("x42-java") \nres6: Option[io.shiftleft.repl.JoernProject] = Some(\n  Project(\n    ProjectFile("/home/user/x42/java/X42.jar", "x42-java"),\n    /home/user/.shiftleft/joern/workspace/x42-java,\n    Some(io.shiftleft.codepropertygraph.Cpg@13a6e76f)\n  )\n)\n')),Object(o.b)("p",null,"And then run the ",Object(o.b)("inlineCode",{parentName:"p"},"cpg.metaData.l")," command again to see its ",Object(o.b)("em",{parentName:"p"},"META_DATA")," node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.metaData.l \nres7: List[MetaData] = List(\n  MetaData(\n    id -> 1L,\n    language -> "JAVA",\n    version -> "0.1",\n    overlays -> List("semanticcpg", "dataflow", "tagging"),\n    policyDirectories -> List(),\n    spid -> None\n  )\n)\n')),Object(o.b)("p",null,"Other top-level commands that refer to the currently active project are ",Object(o.b)("inlineCode",{parentName:"p"},"run"),", ",Object(o.b)("inlineCode",{parentName:"p"},"open"),", close, ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"undo"),"."),Object(o.b)("p",null,"That concludes this gentle introducton into the commands the Joern Shell provides you with for organizing your Joern Projects. Have fun with your analysis!"))}l.isMDXComponent=!0}}]);