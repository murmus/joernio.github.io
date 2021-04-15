(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return g}));var a=n(3),r=n(7),o=n(0),i=n.n(o),l=n(108),c=(n(189),n(123)),s=n(132),p=n(190),d=function(e){var t=e.codeId,n=e.language,r=Object(c.usePluginData)("staticcode").code[t];return i.a.createElement(s.a,Object(a.a)({},s.b,{code:r,theme:p.a,language:n}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},a.map((function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",o({token:e,key:t}))})))})))}))},u={id:"quickstart",title:"Quickstart"},m={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Joern is a command-line tools for static code analysis. Joern can",source:"@site/docs/quickstart.mdx",slug:"/quickstart",permalink:"/quickstart",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/quickstart.mdx",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/installation"},next:{title:"Interactive Shell",permalink:"/shell"}},h=[{value:"Obtaining the Sample Program",id:"obtaining-the-sample-program",children:[]},{value:"Starting Joern&#39;s Interactive Shell",id:"starting-joerns-interactive-shell",children:[]},{value:"Importing the Code",id:"importing-the-code",children:[]},{value:"Querying the Code Property Graph",id:"querying-the-code-property-graph",children:[]},{value:"Solving the Challenge",id:"solving-the-challenge",children:[]},{value:"Closing the Project",id:"closing-the-project",children:[]}],b={toc:h};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Joern is a command-line tools for static code analysis. Joern can\nhelp you find and correct security vulnerabilities in programs with\nhundreds of thousands of lines of code, including flaws that are\ndifficult to detect with fuzzing. It includes an interactive shell and\nautomation capabilities centered around Code Property Graphs."),Object(l.b)("p",null,"This article introduces you to the basics of working with Joern. You\nlearn how to create and modify Code Property Graphs, how to query them\nand about organisational commands. If you have not yet installed\nJoern, you can do so by following ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/installation"}),"these instructions"),"."),Object(l.b)("h2",{id:"obtaining-the-sample-program"},"Obtaining the Sample Program"),Object(l.b)("p",null,"Before you start Joern, you should have a program ready to\nanalyze. Clone the following git repository which contains a simple\nprogram named ",Object(l.b)("inlineCode",{parentName:"p"},"X42"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/ShiftLeftSecurity/x42.git\n")),Object(l.b)("p",null,"Let us start with a problem statement. Show - without running the\nprogram - that an input exists for which ",Object(l.b)("inlineCode",{parentName:"p"},"X42")," writes a string to\nstandard error (STDERR)."),Object(l.b)(d,{codeId:"x42-c",language:"c",mdxType:"PrismCode"}),Object(l.b)("h2",{id:"starting-joerns-interactive-shell"},"Starting Joern's Interactive Shell"),Object(l.b)("p",null,"Launch Joern in your shell:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$ joern\n")),Object(l.b)("p",null,"A console session will start and you will see a prompt:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern>\n")),Object(l.b)("p",null,"The prompt you are looking at is the prompt of a Scala-based REPL. If\nyou have no experience with Scala or read-eval-print-loops, don't\nworry, you can accomplish a lot with Joern by focusing only on what\nits commands allow you to do. If you ",Object(l.b)("em",{parentName:"p"},"are")," familiar with Scala and\nREPLs, you may be pleasantly surprised at the flexibility it provides\nyou with."),Object(l.b)("h2",{id:"importing-the-code"},"Importing the Code"),Object(l.b)("p",null,"We create a Code Property Graph for the ",Object(l.b)("inlineCode",{parentName:"p"},"X42")," program using the\ncommand ",Object(l.b)("inlineCode",{parentName:"p"},"importCode"),", which requires the path to the source code to be\npassed as a first argument, and a project name as a second\nargument. In particular, ",Object(l.b)("inlineCode",{parentName:"p"},"importCode")," creates a new project directory\nand stores a binary representation of the Code Property Graph in it."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> importCode(inputPath="./x42/c", projectName="x42-c")\nCreating project `x42-c` for code at `x42/c`\n... output omitted\nres1: Option[Cpg] = Some(io.shiftleft.codepropertygraph.Cpg@31ed46c5)\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you see an error and a return value of ",Object(l.b)("inlineCode",{parentName:"p"},"None"),", you have probably pointed Joern to the wrong input path for the directory containing the source code for the sample project."))),Object(l.b)("h2",{id:"querying-the-code-property-graph"},"Querying the Code Property Graph"),Object(l.b)("p",null,"You are ready to analyze your first program using Joern and the Code\nProperty Graph. Code analysis in Joern is done using the query\nlanguage, a domain-specific language designed specifically for work\nwith the Code Property Graph. It contains practical representations of\nthe various nodes found in the Code Property Graph, and useful\nfunctions for querying their properties and relationships between each\nother. The top-level entry point into a Code Property Graph loaded in\nmemory, and the root object of the query Language is ",Object(l.b)("inlineCode",{parentName:"p"},"cpg"),". If you\nevaluate ",Object(l.b)("inlineCode",{parentName:"p"},"cpg")," at the prompt, the output is underwhelming:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern> cpg\nres2: Cpg = io.shiftleft.codepropertygraph.Cpg@cb0d5241\n")),Object(l.b)("p",null,"Rest assured, a lot is hidden behind that simple statement. You will\ndiscover the full set of commands in time, but for now, you should\nlearn a helpful Joern trick: ",Object(l.b)("inlineCode",{parentName:"p"},"TAB"),"-completion. In the Joern prompt,\ntype ",Object(l.b)("inlineCode",{parentName:"p"},"cpg."),", do not press ",Object(l.b)("inlineCode",{parentName:"p"},"ENTER"),", but instead press ",Object(l.b)("inlineCode",{parentName:"p"},"TAB"),". You will\nsee a list of available functions ",Object(l.b)("inlineCode",{parentName:"p"},"cpg")," supports:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern> cpg. \nall                            comment                        finding                        local                          newArgumentDescriptorSource    newReturnSource                runScript                      types\nannotation                     configfile                     flow                           member                         newArgumentSink                newTagForMethodsWithFullName   scalaGraph                     write\nargument                       cpg                            graph                          metaData                       newArgumentSource              newTagForParameter             sensitiveType\narithmetic                     dependency                     help                           method                         newExposedParameterSink        newTagForParameterWithIndex    sensitiveVariable\nassignment                     dom                            id                             methodRef                      newExposedParameterSource      newTagForParameterWithIndexes  sink\nblacklist                      exposedMethod                  identifier                     methodReturn                   newLiteralSource               packagePrefix                  source\ncall                           exposedOutputParameter         ioFlow                         namespace                      newMethodSummary               parameter                      tag\ncallChain                      exposedParameter               jsp                            namespaceBlock                 newReturnDescriptorSource      read                           transform\nclose                          file                           literal                        newArgumentDescriptorSink      newReturnSink                  returns                        typeDecl\n")),Object(l.b)("p",null,"TAB-completion is available for all query language directives, and for\ntop-level commands. For more descriptive assistance, use the ",Object(l.b)("inlineCode",{parentName:"p"},"help"),"\ncommand, like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> help.cpg \nres3: String = """\nUpon importing code, a project is created that holds an intermediate\nrepresentation called `Code Property Graph`. This graph is a composition of\nlow-level program representations such as abstract syntax trees and control flow\ngraphs, but it can be arbitrarily extended to hold any information relevant in\nyour audit, information about HTTP entry points, IO routines, information flows,\nor locations of vulnerable code. Think of Joern as a CPG editor.\n\nIn practice, `cpg` is the root object of the query language, that is, all query\nlanguage constructs can be invoked starting from `cpg`. For exanple,\n`cpg.method.l` lists all methods, while `cpg.finding.l` lists all findings of\npotentially vulnerable code."""\n')),Object(l.b)("h2",{id:"solving-the-challenge"},"Solving the Challenge"),Object(l.b)("p",null,"Now that we have a good set of basic commands, and a Code Property\nGraph loaded in memory, let us return to our ",Object(l.b)("inlineCode",{parentName:"p"},"X42")," program and the\nproblem we want to solve using Joern.\nTo reiterate, the problem statement is ",Object(l.b)("em",{parentName:"p"},"Show that an input exists for\nwhich the X42 program always writes a string to STDERR"),". And this is\nthe ",Object(l.b)("inlineCode",{parentName:"p"},"X42")," program:"),Object(l.b)(d,{codeId:"x42-c",language:"c",mdxType:"PrismCode"}),Object(l.b)("p",null,"There are two parts in the problem statement: 1. ",Object(l.b)("em",{parentName:"p"},"does the program\nwrite anything to STDERR?"),", and 2. _if there is a call writing to\nSTDERR, is it conditional on a value passed in as argument to the\n",Object(l.b)("inlineCode",{parentName:"p"},"X42")," program?"),Object(l.b)("p",null,"Joern makes answering both questions easy. To answer the first one,\nwhether the program writes anything to STDERR, we can search for nodes\nof type ",Object(l.b)("inlineCode",{parentName:"p"},"CALL")," in the graph, then use the ",Object(l.b)("inlineCode",{parentName:"p"},"argument")," step to only\nselect those calls which have connections to nodes of type ",Object(l.b)("inlineCode",{parentName:"p"},"ARGUMENT"),",\nfollowed by the ",Object(l.b)("inlineCode",{parentName:"p"},'code("stderr")')," property filter step which selects only\nthose nodes that have the string ",Object(l.b)("inlineCode",{parentName:"p"},"stderr")," as the value of their ",Object(l.b)("inlineCode",{parentName:"p"},"CODE"),"\nproperty. We find exactly one:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.call.argument.code("stderr").toList\nres4: List[Call] = List(\n  Call(\n    id -> 24L,\n    code -> "fprintf(stderr, \\"It depends!\\\\n\\")",\n    name -> "fprintf",\n    order -> 1,\n    methodInstFullName -> None,\n    methodFullName -> "fprintf",\n    argumentIndex -> 1,\n    dispatchType -> "STATIC_DISPATCH",\n    signature -> "TODO assignment signature",\n    typeFullName -> "ANY",\n    dynamicTypeHintFullName -> List(),\n    lineNumber -> Some(7),\n    columnNumber -> Some(4),\n    resolved -> None,\n    depthFirstOrder -> Some(-8),\n    internalFlags -> Some(4)\n  )\n)\n')),Object(l.b)("p",null,"With this query we have proven the first part of our problem statement correct, there is a place in the ",Object(l.b)("inlineCode",{parentName:"p"},"X42")," program that writes to STDERR. Let us move to the second part, the check whether the call that writes something to STDERR is conditional on a value passed as input to the ",Object(l.b)("inlineCode",{parentName:"p"},"X42")," program. Since we are analyzing a program written in ",Object(l.b)("inlineCode",{parentName:"p"},"C"),", we will search the Code Property Graph for the conventional ",Object(l.b)("inlineCode",{parentName:"p"},"argc")," or ",Object(l.b)("inlineCode",{parentName:"p"},"argv")," parameters of the ",Object(l.b)("inlineCode",{parentName:"p"},"main")," function as the input that potentially triggers the call which writes to STDERR."),Object(l.b)("p",null,"Using the query from the previous step, we can use the ",Object(l.b)("inlineCode",{parentName:"p"},"astParent")," construct to find out more about the surroundings around the ",Object(l.b)("inlineCode",{parentName:"p"},"fprintf")," call by moving up in the hierarchy of the abstract syntax tree that is part of the Code Property Graph. Moving up one level in the AST hierarchy gives us a block; not very helpful:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.call.argument.code("stderr").astParent.toList\nres5: List[AstNode] = List(\n  Block(\n    id -> 23L,\n    code -> "",\n    order -> 2,\n    argumentIndex -> 2,\n    typeFullName -> "void",\n    dynamicTypeHintFullName -> List(),\n    lineNumber -> Some(6),\n    columnNumber -> Some(46),\n    depthFirstOrder -> Some(-24),\n    internalFlags -> Some(0)\n  )\n)\n')),Object(l.b)("p",null,"Another two layers up gives us an if statement, much better:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.call.argument.code("stderr").astParent.astParent.astParent.l\nres6: List[AstNode] = List(\n  ControlStructure(\n    id -> 11L,\n    code -> "if (argc > 1 && strcmp(argv[1], \\"42\\") == 0)",\n    columnNumber -> Some(2),\n    lineNumber -> Some(6),\n    order -> 1,\n    parserTypeName -> "IfStatement",\n    argumentIndex -> 1,\n    depthFirstOrder -> None,\n    internalFlags -> None\n  )\n)\n')),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CODE")," property of the ",Object(l.b)("inlineCode",{parentName:"p"},"CONTROL_STRUCTURE")," node you just found proves the second part of our problem statement correct, the call that writes to STDERR is conditional on ",Object(l.b)("inlineCode",{parentName:"p"},"argc")," and ",Object(l.b)("inlineCode",{parentName:"p"},"argv"),". Hence, the whole problem statement is correct."),Object(l.b)("h2",{id:"closing-the-project"},"Closing the Project"),Object(l.b)("p",null,"Now that we've finished the analysis, let us close the project, which also unloads the Code Property Graph from memory. You do not have to worry about losing any data, because it will remain on disk in the ",Object(l.b)("inlineCode",{parentName:"p"},"x42-c")," project you created earlier with ",Object(l.b)("inlineCode",{parentName:"p"},"importCode"),". Close the project using the aptly-named ",Object(l.b)("inlineCode",{parentName:"p"},"close"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> close \n2020-05-08 01:13:01.752 WARN clearing 105 references - this may take some time\n2020-05-08 01:13:01.756 WARN cleared all clearable references\nres7: Option[io.shiftleft.console.workspacehandling.Project] = Some(\n  Project(\n    ProjectFile("/home/user/x42/c", "x42-c"),\n    /home/user/.shiftleft/joern/workspace/x42-c,\n    None\n  )\n)\n')),Object(l.b)("p",null,"As a final step, exit Joern:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"joern> exit\nBye!\nWould you like to save changes? (y/N)\ny\nsaving.\n")),Object(l.b)("p",null,"Congratulations, you have succesfully queried your first  Code\nProperty Graph using Joern and its query language. In subsequent\narticles, you will learn the more advanced features of Joern and also\nhow to use it to find your first real-world vulnerability."))}g.isMDXComponent=!0}}]);