import{_ as r}from"./hero-CbGtQ2Lh.js";import{_ as i,r as a,o as c,c as h,b as e,d as o,e as t,a as s}from"./app-P3E1jSxo.js";const d={},p=s('<p><img src="'+r+'" alt="Logo"></p><h1 id="this-week-in-mojo-2023-06-09" tabindex="-1"><a class="header-anchor" href="#this-week-in-mojo-2023-06-09"><span>This Week in Mojo 2023-06-09</span></a></h1><h2 id="mojo-playground-update" tabindex="-1"><a class="header-anchor" href="#mojo-playground-update"><span>Mojo Playground Update</span></a></h2>',3),u={href:"https://docs.modular.com/mojo/changelog.html",target:"_blank",rel:"noopener noreferrer"},m=s('<h3 id="⭐️-new" tabindex="-1"><a class="header-anchor" href="#⭐️-new"><span>⭐️ New</span></a></h3><p>Tuple syntax now works on the left-hand side of assignments (in “lvalue” positions), enabling things like (a, b) = (b, a).</p><p>There are several caveats: the element types must exactly match (no implicit conversions), this only work with values of TupleLiteral type (notably, it will not work with PythonObject yet) and parentheses are required for tuple syntax.</p><h3 id="❌-removed" tabindex="-1"><a class="header-anchor" href="#❌-removed"><span>❌ Removed</span></a></h3><p>Mojo Playground no longer includes the following Python packages (due to size, compute costs, and environment complications): torch, tensorflow, keras, transformers.</p><h3 id="🦋-changed" tabindex="-1"><a class="header-anchor" href="#🦋-changed"><span>🦋 Changed</span></a></h3>',6),g={href:"https://github.com/modularml/mojo/issues/152",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"🛠️-fixed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🛠️-fixed"},[e("span",null,"🛠️ Fixed")])],-1),y={href:"https://github.com/modularml/mojo/issues/287",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/modularml/mojo/issues/318",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/modularml/mojo/issues/326",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/modularml/mojo/issues/282",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/modularml/mojo/issues/271",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"official-content",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#official-content"},[e("span",null,"Official Content")])],-1),j={href:"https://github.com/modularml/mojo/blob/main/proposals/lifetimes-and-provenance.md",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/modularml/mojo/blob/main/proposals/lifetimes-keyword-renaming.md",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.modular.com/blog/if-ai-serving-tech-cant-solve-todays-problems-how-do-we-scale-into-the-future",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.modular.com/blog/do-llms-eliminate-the-need-for-programming-languages",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"community-content",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-content"},[e("span",null,"Community Content")])],-1),M={href:"https://www.thapaliya.com/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.thapaliya.com/en/writings/hello-with-a-glider-gun-mojo/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://youtu.be/pduYnTpRBLo",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"mojo-team-answers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mojo-team-answers"},[e("span",null,"Mojo Team Answers")])],-1),T=e("h3",{id:"pure-functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pure-functions"},[e("span",null,"Pure Functions")])],-1),L=e("p",null,'Pureness is what is known as an "effect" in PL terminology. You can see this in the handling of async and raises in the current mojo implementation: a non-raising function is not allowed to call a raising function directly - it must wrap it in a try block.',-1),P=e("p",null,`I don't see a way to provide this sort of mapping from one world to the other for purity, I think we cannot practically implement this, and while pure computation is important, it is actually quite complicated: is reading from memory pure? If no, "purity" is pretty useless. If so, you cannot use purity information for much optimization, because you need to know which memory sets may be read and written by functions anyway.`,-1),S=e("p",null,'Also, in other pure-functional languages like Haskell, you need escape hatches (perform unsafe io) because you want to add printf debugging etc to "pure" functions and compiler enforcement makes that whole thing incredibly difficult.',-1),R=e("p",null,"Overall I can understand wanting to have this conceptually, but I can't see how it could work out well in practice. We can come back to this later as the language evolves.",-1),W={href:"https://github.com/modularml/mojo/discussions/345#discussioncomment-6136537",target:"_blank",rel:"noopener noreferrer"},O=e("h3",{id:"becoming-a-mojo-champion-mod-on-discord",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#becoming-a-mojo-champion-mod-on-discord"},[e("span",null,[o("Becoming a "),e("code",null,"Mojo Champion"),o(" mod on Discord")])])],-1),G=e("p",null,"We reached out to individuals we identified ourselves this time. In the future as the server scales, if we look to add more, we will probably send out an application form that folks can fill out and we'll review on a rolling basis.",-1),N={href:"https://discord.com/channels/1087530497313357884/1116515673611448352/1116528356603736084",target:"_blank",rel:"noopener noreferrer"},E=s('<h3 id="string-to-pythonobject" tabindex="-1"><a class="header-anchor" href="#string-to-pythonobject"><span>String to PythonObject</span></a></h3><p>Right now you can turn a <code>StringRef</code> or a <code>StringLiteral</code> into a <code>PythonObject</code>. To get a <code>PythonObject</code> from a <code>String</code>, you&#39;d need to turn the <code>String</code> into a <code>StringRef</code>. This is available through some underscored methods, but it&#39;s currently unsafe due to some lifetime issues. Let me see if I can add a direct conversion path, though it will take a week to make its way to the playground.</p><p>A direct conversion should be included in the next Playground release.</p>',3),U={href:"https://discord.com/channels/1087530497313357884/1116063443200520334/1116066258664828949",target:"_blank",rel:"noopener noreferrer"},V=e("h3",{id:"compiler-guidance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compiler-guidance"},[e("span",null,"Compiler Guidance")])],-1),z=e("p",null,[o("Mojo already gives a couple warnings that suggest better things to do, such as using "),e("code",null,"let"),o(" instead of "),e("code",null,"var"),o(" where possible. That said, the compiler isn't good at pointing out larger design pattern changes, for this I think we'll have LLM based tools outside the compiler itself. The UI is much better for explaining things in that context.")],-1),H={href:"https://github.com/modularml/mojo/discussions/323#discussioncomment-6084627",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"compile-time-metaprogramming-relationship-to-mlir",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compile-time-metaprogramming-relationship-to-mlir"},[e("span",null,"Compile time metaprogramming relationship to MLIR")])],-1),J=e("p",null,"Mojo has great support for evaluating fairly arbitrary expressions at compile time with an interpreter that (under the covers) ends up calling an MLIR dialect's fold operations.",-1),K=e("p",null,"These then get wrapped up in structs to give a new programmable veneer etc. Check out the Bool workbook example in the documentation for a simple example of doing this with the index dialect.",-1),Y=e("p",null,'Mojo is designed "for" MLIR in this way - MLIR can talk to roughly anything that computes, and it is very important (over time) for Mojo to scale into new forms of computation, whether it be low level things like low-level tensorcore operators, mid-level things like a shape dialect, or high level things like an ML operator graph.',-1),Z=e("p",null,'Right now many folks on the channel are excited about a Python++, but Mojo was designed to work backwards from the "speed of light" of hardware and accelerators. The syntax and applicability to Python is important for community reasons, but not particularly relevant to the accelerator side of Mojo.',-1),Q={href:"https://discord.com/channels/1087530497313357884/1114406301808726138/1116540613618323517",target:"_blank",rel:"noopener noreferrer"},X=s('<h3 id="loose-typing" tabindex="-1"><a class="header-anchor" href="#loose-typing"><span>Loose Typing</span></a></h3><p>This is an evolving part of the language and likely another difference we pull into the <code>fn</code> vs <code>def</code> world, in a <code>def</code> we could default to getting objects for literals, but within a <code>fn</code> you get typed literals. Another potential solution is to have aggressive decay rules in <code>def</code> e.g. <code>True</code> starts out being typed to <code>Bool</code> but we allow decaying to object when an expression doesn&#39;t type check otherwise. We&#39;ll need to experiment with that when we make progress on other more basic things. The major reason to have both <code>def</code> and <code>fn</code> is to have a Python compatible world and a stricter systems programmer world, and have them coexist seamlessly.</p>',2),$={href:"https://discord.com/channels/1087530497313357884/1114818534946648165/1114971056671838350",target:"_blank",rel:"noopener noreferrer"},ee=e("h3",{id:"struct-memory-layout-c-compatibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#struct-memory-layout-c-compatibility"},[e("span",null,"Struct Memory Layout C Compatibility")])],-1),oe=e("p",null,"I agree that an opt-in decorator that specifies layout is the right way to go. By default the compiler should be able to reorder fields to eliminate internal padding so programmers don't have to worry about this, but people putting bits on a wire or dealing with c compatibility should be able to get that. We will need to properly design this out.",-1),te={href:"https://github.com/modularml/mojo/discussions/289#discussioncomment-6080125",target:"_blank",rel:"noopener noreferrer"},ne=e("h3",{id:"int-provenance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#int-provenance"},[e("span",null,"Int Provenance")])],-1),se=e("p",null,"Ints and pointers are different things, so no ints don't carry provenance. This is one of the major things that C/C++ got wrong that has haunted LLVM IR and many other things for a long time. Taking a hard line on this makes everything simpler, but that is only possible when you have a fresh slate like Mojo provides us.",-1),ae={href:"https://discord.com/channels/1087530497313357884/1098713601386233997/1115452333074153653",target:"_blank",rel:"noopener noreferrer"},le=e("h3",{id:"float8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#float8"},[e("span",null,"Float8")])],-1),re=e("p",null,"There are so many variants of Float8 representation. We need to think about which ones does Mojo represents and how to expose the variety. For now, we are removing Float8 from the DType list to avoid folks from falling into this trap.",-1),ie={href:"https://github.com/modularml/mojo/discussions/289#discussioncomment-6080125",target:"_blank",rel:"noopener noreferrer"},ce=e("h3",{id:"integer-overflow-on-object",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#integer-overflow-on-object"},[e("span",null,[o("Integer Overflow on "),e("code",null,"object")])])],-1),he=e("p",null,[o("It needs to eventually provide full Python semantics, so we'll need "),e("code",null,"object"),o(" to contain a "),e("code",null,"PythonObject"),o(" in its variant. We could overflow from inline "),e("code",null,"int"),o(" to Python object on demand.")],-1),de={href:"https://github.com/modularml/mojo/issues/328#issuecomment-1579468329",target:"_blank",rel:"noopener noreferrer"},pe=s(`<h3 id="boolean-on-simd-types" tabindex="-1"><a class="header-anchor" href="#boolean-on-simd-types"><span>Boolean on SIMD types</span></a></h3><p>The way to do this is by explicitly calling the bool method later:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> MyPair</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> first</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Float32</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> second</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Float32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#0DB9D7;"> __lt__</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">self</span><span style="color:#89DDFF;">,</span><span style="color:#E0AF68;"> rhs</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> MyPair</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#A9B1D6;"> Bool</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">        return</span><span style="color:#89DDFF;"> (</span></span>
<span class="line"><span style="color:#F7768E;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">first </span><span style="color:#BB9AF7;">&lt;</span><span style="color:#A9B1D6;"> rhs</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">first</span></span>
<span class="line"><span style="color:#BB9AF7;">            or</span><span style="color:#89DDFF;"> (</span><span style="color:#F7768E;">self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">first </span><span style="color:#BB9AF7;">==</span><span style="color:#A9B1D6;"> rhs</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">first </span><span style="color:#BB9AF7;">and</span><span style="color:#F7768E;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">second </span><span style="color:#BB9AF7;">&lt;</span><span style="color:#A9B1D6;"> rhs</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">second</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        ).</span><span style="color:#0DB9D7;">__bool__</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><p>We could add <code>SIMD[DType.bool, 1]</code> as an initializer to the <code>Bool</code> type, but cannot do that currently because <code>Bool</code> is a builtin type while <code>SIMD</code> is not. We need to think about this and have a library-based solution.</p>`,4),ue={href:"https://github.com/modularml/mojo/issues/335",target:"_blank",rel:"noopener noreferrer"},me=e("h3",{id:"string-supporting-utf-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#string-supporting-utf-8"},[e("span",null,[e("code",null,"String"),o(" supporting UTF-8")])])],-1),ge=e("p",null,[o("We want to enhance the "),e("code",null,"String"),o(" type to support UTF-8 encoding before starting work on file system.")],-1),fe={href:"https://github.com/modularml/mojo/issues/306#issuecomment-1579268808",target:"_blank",rel:"noopener noreferrer"},ye=e("h3",{id:"mutable-and-explicit-types-when-iterating-over-collections",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mutable-and-explicit-types-when-iterating-over-collections"},[e("span",null,"Mutable and explicit types when iterating over collections")])],-1),be=e("code",null,"sharp edge",-1),_e={href:"https://docs.modular.com/mojo/roadmap.html",target:"_blank",rel:"noopener noreferrer"},we=e("code",null,"for var i in range(3)",-1),ve={href:"https://github.com/modularml/mojo/issues/331#issuecomment-1579122472",target:"_blank",rel:"noopener noreferrer"},ke=e("h3",{id:"local-toolchain-release",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-toolchain-release"},[e("span",null,"Local Toolchain Release")])],-1),je=e("code",null,"O(few months)",-1),De={href:"https://www.modular.com/newsletter",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://github.com/modularml/mojo/discussions/327#discussioncomment-6095594",target:"_blank",rel:"noopener noreferrer"};function xe(Be,Me){const n=a("ExternalLinkIcon"),l=a("CommentService");return c(),h("div",null,[p,e("p",null,[e("a",u,[o("Changelog Here"),t(n)])]),m,e("p",null,[o("The data types and scalar names now conform to the naming convention used by numpy. So we use Int32 instead of SI32, similarly using Float32 instead of F32. Closes Issue "),e("a",g,[o("Issue #152"),t(n)]),o(".")]),f,e("ul",null,[e("li",null,[e("a",y,[o("Issue #287"),t(n)]),o(" - computed lvalues don’t handle raising functions correctly")]),e("li",null,[e("a",b,[o("Issue #318"),t(n)]),o("- Large integers are not being printed correctly")]),e("li",null,[e("a",_,[o("Issue #326"),t(n)]),o(" - Float modulo operator is not working as expected")]),e("li",null,[e("a",w,[o("Issue #282"),t(n)]),o("- Default arguments are not working as expected")]),e("li",null,[e("a",v,[o("Issue #271"),t(n)]),o("- Confusing error message when converting between function types with different result semantics")])]),k,e("ul",null,[e("li",null,[o("New Proposal: "),e("a",j,[o("Provenance Tracking and Lifetimes in Mojo"),t(n)])]),e("li",null,[o("New Proposal: "),e("a",D,[o("Keyword Naming"),t(n)])]),e("li",null,[o("Blog Post: "),e("a",F,[o("If AI serving tech can’t solve today’s problems, how do we scale into the future?"),t(n)])]),e("li",null,[o("Blog Post: "),e("a",x,[o("Do LLMs eliminate the need for programming languages?"),t(n)])])]),B,e("ul",null,[e("li",null,[e("a",M,[o("Suvash"),t(n)]),o(" did a blog post on implementing "),e("a",A,[o("Game of Life in Mojo"),t(n)]),o(" and video "),e("a",C,[o("introduction to Mojo"),t(n)])])]),I,T,L,P,S,R,e("p",null,[e("a",W,[o("2023-06-09 Pure Functions"),t(n)])]),O,G,e("p",null,[e("a",N,[o("2023-06-09 Discord Andrew"),t(n)])]),E,e("p",null,[e("a",U,[o("2023-06-08 Discord Alex Kirchhoff"),t(n)])]),V,z,e("p",null,[e("a",H,[o("2023-06-05 GitHub Chris Lattner"),t(n)])]),q,J,K,Y,Z,e("p",null,[e("a",Q,[o("2023-06-12 Discord Chris Lattner"),t(n)])]),X,e("p",null,[e("a",$,[o("2023-06-05 Discord Chris Lattner"),t(n)])]),ee,oe,e("p",null,[e("a",te,[o("2023-06-04 Github Chris Lattner"),t(n)])]),ne,se,e("p",null,[e("a",ae,[o("2023-06-06 Discord Chris Lattner"),t(n)])]),le,re,e("p",null,[e("a",ie,[o("2023-06-04 Github Abdul Dakkak"),t(n)])]),ce,he,e("p",null,[e("a",de,[o("2023-06-04 Github Chris Lattner"),t(n)])]),pe,e("p",null,[e("a",ue,[o("2023-06-07 Github Abdul Dakkak"),t(n)])]),me,ge,e("p",null,[e("a",fe,[o("2023-06-07 Github Abdul Dakkak"),t(n)])]),ye,e("p",null,[o("This was noted as a known "),be,o(" in the "),e("a",_e,[o("roadmap & sharp edges"),t(n)]),o(" document. The behaviour here is definitely subject to change, maybe syntax like "),we,o(" but I don't have a strong opinion.")]),e("p",null,[e("a",ve,[o("2023-06-07 Github Jeff Niu"),t(n)])]),ke,e("p",null,[o("We are working on this, and expect to ship it in "),je,o("! Please "),e("a",De,[o("sign up for our newsletter"),t(n)]),o(" to track progress, thanks!")]),e("p",null,[e("a",Fe,[o("2023-06-06 Github Chris Lattner"),t(n)])]),t(l)])}const Ie=i(d,[["render",xe],["__file","2023-06-09.html.vue"]]),Te=JSON.parse('{"path":"/this-week-in-mojo/2023-06-09.html","title":"This Week in Mojo 2023-06-09","lang":"en-US","frontmatter":{"title":"This Week in Mojo 2023-06-09","date":"2023-06-09T00:00:00.000Z","author":"Mojo Dojo","author_site":"https://mojodojo.dev","author_image":"https://mojodojo.dev/hero.png","feed":true,"head":[["meta",{"name":"twitter:card","content":"summary"}],["meta",{"name":"twitter:site","content":"@mojodojodev"}],["meta",{"name":"twitter:title","content":"This Week in Mojo"}],["meta",{"name":"twitter:description","content":"This week in Mojo with language updates, community content, and everything else related to Mojo"}],["meta",{"name":"twitter:image","content":"https://mojodojo.dev/hero.png"}]]},"headers":[{"level":2,"title":"Mojo Playground Update","slug":"mojo-playground-update","link":"#mojo-playground-update","children":[{"level":3,"title":"⭐️ New","slug":"⭐️-new","link":"#⭐️-new","children":[]},{"level":3,"title":"❌ Removed","slug":"❌-removed","link":"#❌-removed","children":[]},{"level":3,"title":"🦋 Changed","slug":"🦋-changed","link":"#🦋-changed","children":[]},{"level":3,"title":"🛠️ Fixed","slug":"🛠️-fixed","link":"#🛠️-fixed","children":[]}]},{"level":2,"title":"Official Content","slug":"official-content","link":"#official-content","children":[]},{"level":2,"title":"Community Content","slug":"community-content","link":"#community-content","children":[]},{"level":2,"title":"Mojo Team Answers","slug":"mojo-team-answers","link":"#mojo-team-answers","children":[{"level":3,"title":"Pure Functions","slug":"pure-functions","link":"#pure-functions","children":[]},{"level":3,"title":"Becoming a Mojo Champion mod on Discord","slug":"becoming-a-mojo-champion-mod-on-discord","link":"#becoming-a-mojo-champion-mod-on-discord","children":[]},{"level":3,"title":"String to PythonObject","slug":"string-to-pythonobject","link":"#string-to-pythonobject","children":[]},{"level":3,"title":"Compiler Guidance","slug":"compiler-guidance","link":"#compiler-guidance","children":[]},{"level":3,"title":"Compile time metaprogramming relationship to MLIR","slug":"compile-time-metaprogramming-relationship-to-mlir","link":"#compile-time-metaprogramming-relationship-to-mlir","children":[]},{"level":3,"title":"Loose Typing","slug":"loose-typing","link":"#loose-typing","children":[]},{"level":3,"title":"Struct Memory Layout C Compatibility","slug":"struct-memory-layout-c-compatibility","link":"#struct-memory-layout-c-compatibility","children":[]},{"level":3,"title":"Int Provenance","slug":"int-provenance","link":"#int-provenance","children":[]},{"level":3,"title":"Float8","slug":"float8","link":"#float8","children":[]},{"level":3,"title":"Integer Overflow on object","slug":"integer-overflow-on-object","link":"#integer-overflow-on-object","children":[]},{"level":3,"title":"Boolean on SIMD types","slug":"boolean-on-simd-types","link":"#boolean-on-simd-types","children":[]},{"level":3,"title":"String supporting UTF-8","slug":"string-supporting-utf-8","link":"#string-supporting-utf-8","children":[]},{"level":3,"title":"Mutable and explicit types when iterating over collections","slug":"mutable-and-explicit-types-when-iterating-over-collections","link":"#mutable-and-explicit-types-when-iterating-over-collections","children":[]},{"level":3,"title":"Local Toolchain Release","slug":"local-toolchain-release","link":"#local-toolchain-release","children":[]}]}],"filePathRelative":"this-week-in-mojo/2023-06-09.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{Ie as comp,Te as data};
