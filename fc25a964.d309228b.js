(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(m,i(i({ref:n},c),{},{components:t})):o.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(104)),l={id:"exporting",title:"Exporting Graphs"},i={unversionedId:"exporting",id:"exporting",isDocsHomePage:!1,title:"Exporting Graphs",description:"Joern is used in academic research as a source for",source:"@site/docs/export.md",slug:"/exporting",permalink:"/exporting",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/export.md",version:"current",sidebar:"docs",previous:{title:"Interpreter",permalink:"/interpreter"},next:{title:"Server",permalink:"/server"}},p=[{value:"The command line tool <code>joern-export</code>",id:"the-command-line-tool-joern-export",children:[]},{value:"Plotting and Exporting on the Joern Console",id:"plotting-and-exporting-on-the-joern-console",children:[{value:"Example",id:"example",children:[]}]},{value:"Dumping representations for all functions from the shell",id:"dumping-representations-for-all-functions-from-the-shell",children:[]},{value:"References",id:"references",children:[]}],c={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Joern is used in academic research as a source for\nintermediate graph representations of code, particularly in machine\nlearning and vulnerability discovery applications [e.g., ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#references"}),"1,2,3,4,5"),"]. To support\nthis use-case, Joern provides both plotting capabilities in the\ninteractive console as well as the ",Object(a.b)("inlineCode",{parentName:"p"},"joern-export")," command line\nutility."),Object(a.b)("p",null,"In summary, Joern can create the following graph representations for\nC/C++ code:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Abstract Syntax Trees (AST)"),Object(a.b)("li",{parentName:"ul"},"Control Flow Graphs (CFG)"),Object(a.b)("li",{parentName:"ul"},"Control Dependence Graphs (CDG)"),Object(a.b)("li",{parentName:"ul"},"Data Dependence Graphs (DDG)"),Object(a.b)("li",{parentName:"ul"},"Program Dependence graphs (PDG)"),Object(a.b)("li",{parentName:"ul"},"Code Property Graphs\n(",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.sec.cs.tu-bs.de/pubs/2014-ieeesp.pdf"}),"CPG14"),")")),Object(a.b)("h2",{id:"the-command-line-tool-joern-export"},"The command line tool ",Object(a.b)("inlineCode",{parentName:"h2"},"joern-export")),Object(a.b)("p",null,"All of these representations can be plotted and exported into the\ngraphviz dot format to enable processing with third party tools or via\nexternal scripts."),Object(a.b)("p",null,"To parse the code in ",Object(a.b)("inlineCode",{parentName:"p"},"/src/directory")," and dump Program Dependence\nGraphs for all methods into the directory ",Object(a.b)("inlineCode",{parentName:"p"},"outdir"),", you can run the\nfollowing commands on the system shell:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"joern-parse /src/directory\njoern-export --repr pdg --out outdir\n")),Object(a.b)("p",null,"For a complete overview of options, run ",Object(a.b)("inlineCode",{parentName:"p"},"joern-export --help"),"."),Object(a.b)("h2",{id:"plotting-and-exporting-on-the-joern-console"},"Plotting and Exporting on the Joern Console"),Object(a.b)("p",null,"If you would like to explore graph representations interactively, you\ncan do so on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/shell"}),"Joern shell"),". To this end, we define\nthe following steps on ",Object(a.b)("inlineCode",{parentName:"p"},"method")," nodes to dump representations in dot\nformat."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cpg.method($name).dotAst.l // output AST in dot format\ncpg.method($name).dotCfg.l // output CFG in dot format\n...\ncpg.method($name).dotCpg14.l // output CPG'14 in dot format\n")),Object(a.b)("p",null,"You can also plot and view representations using the following\nqueries:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cpg.method($name).plotDotAst // plot AST\ncpg.method($name).ploDotCfg // plot CFG\n...\ncpg.method($name).plotDotCpg14 // plot CPG'14\n")),Object(a.b)("p",null,"Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"ossdataflow")," layer needs to have been calculated for\nthe source CPG via ",Object(a.b)("inlineCode",{parentName:"p"},"run.ossdataflow"),"."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Generate the CPG along with the data flow layer for a sample function\nnamed ",Object(a.b)("inlineCode",{parentName:"p"},"myfunc"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'joern> importCode.c.fromString( """\n           int myfunc(int b) {\n             int a = 42;\n             if (b > 10) {\n                foo(a)\n             }\n             bar(a);\n           }\n           """\n       ) \n\njoern> run.ossdataflow\n')),Object(a.b)("p",null,"You can now plot the AST as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'joern> cpg.method("myfunc").plotDotAst \n')),Object(a.b)("p",null,"You can obtain the dot representation of the AST as well:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'joern> cpg.method("myfunc").dotAst.l\nres4: List[String] = List(\n  """digraph myfunc {  \n"1000102" [label = "(METHOD,myfunc)" ]\n"1000103" [label = "(PARAM,int b)" ]\n"1000104" [label = "(BLOCK,,)" ]\n"1000105" [label = "(LOCAL,a: int)" ]\n"1000106" [label = "(<operator>.assignment,a = 42)" ]\n"1000107" [label = "(IDENTIFIER,a,a = 42)" ]\n"1000108" [label = "(LITERAL,42,a = 42)" ]\n"1000109" [label = "(CONTROL_STRUCTURE,if (b > 10),if (b > 10))" ]\n"1000110" [label = "(<operator>.greaterThan,b > 10)" ]\n"1000111" [label = "(IDENTIFIER,b,b > 10)" ]\n"1000112" [label = "(LITERAL,10,b > 10)" ]\n"1000113" [label = "(BLOCK,,)" ]\n"1000114" [label = "(bar,bar(a))" ]\n"1000115" [label = "(IDENTIFIER,a,bar(a))" ]\n"1000116" [label = "(METHOD_RETURN,int)" ]\n  "1000102" -> "1000103"  \n  "1000102" -> "1000104"  \n  "1000102" -> "1000116"  \n  "1000104" -> "1000105"  \n  "1000104" -> "1000106"  \n  "1000104" -> "1000109"  \n  "1000104" -> "1000114"  \n  "1000106" -> "1000107"  \n  "1000106" -> "1000108"  \n  "1000109" -> "1000110"  \n  "1000109" -> "1000113"  \n  "1000110" -> "1000111"  \n  "1000110" -> "1000112"  \n  "1000114" -> "1000115"  \n}\n"""\n)\n')),Object(a.b)("h2",{id:"dumping-representations-for-all-functions-from-the-shell"},"Dumping representations for all functions from the shell"),Object(a.b)("p",null,"You can also dump all representations into the directory ",Object(a.b)("inlineCode",{parentName:"p"},"out")," using"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"run.dumpast\nrun.dumpcfg\n...\nrun.dumpcpg14\n")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("p",null,"Research that employs Joern as an extraction tool for intermediate\nrepresentations of code:"),Object(a.b)("p",null,"(1) ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://papers.nips.cc/paper/9209-devign-effective-vulnerability-identification-by-learning-comprehensive-program-semantics-via-graph-neural-networks.pdf"}),"Devign: Effective Vulnerability Identification by Learning\nComprehensive Program Semantics via Graph Neural Networks, Zhou et al.,\nNIPS'19")),Object(a.b)("p",null,"(2) ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cs.drexel.edu/~greenie/stylometry-esorics.pdf"}),"Source Code Authorship Attribution using LongShort-Term Memory\nBased Networks, Alsulami et al., ESORICS'17")),Object(a.b)("p",null,"(3)",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.cs.utsa.edu/~shxu/socs/VulPecker.pdf"}),"VulPecker: an automated vulnerability detection system based on\ncode similarity analysis, Li et al.,\nACSAC'16")),Object(a.b)("p",null,"(4) ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://content.sciendo.com/view/journals/popets/2019/3/article-p389.xml?language=en"}),"Git blame who?: Stylistic authorship attribution of small,\nincomplete source code fragments, Dauber et al.,\nPETS-19/3")),Object(a.b)("p",null,"(5) ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://machiry.github.io/files/spider.pdf"}),"SPIDER: Enabling Fast Patch Propagation In Related Software\nRepositories, Machiry et al., S&P'20")))}s.isMDXComponent=!0}}]);