import{_ as r}from"./hero-CbGtQ2Lh.js";import{_ as i,r as t,o as p,c,b as e,d as o,e as n,w as d,a as s}from"./app-P3E1jSxo.js";const h={},u=s('<p><img src="'+r+'" alt="Logo"></p><h1 id="this-week-in-mojo-2023-07-28" tabindex="-1"><a class="header-anchor" href="#this-week-in-mojo-2023-07-28"><span>This Week in Mojo 2023-07-28</span></a></h1><h2 id="playground-release" tabindex="-1"><a class="header-anchor" href="#playground-release"><span>Playground Release</span></a></h2>',3),m={href:"https://docs.modular.com/mojo/changelog.html#july-2023",target:"_blank",rel:"noopener noreferrer"},y=s(`<h3 id="⭐️-new" tabindex="-1"><a class="header-anchor" href="#⭐️-new"><span>⭐️ New</span></a></h3><p>Types that define both <code>__getitem__</code> and <code>__setitem__</code> (i.e. where sub-scripting instances creates computed LValues) can now be indexed in parameter expressions. Unroll decorator for loops with constant bounds and steps:</p><ul><li><code>@unroll</code>: Fully unroll a loop.</li><li><code>@unroll(n)</code>: Unroll a loop by factor of n, where n is a positive integer.</li></ul><p>Unroll decorator requires loop bounds and iteration step to be compiler time constant value, otherwise unrolling will fail with compilation error. This also doesn’t make loop induction variable a parameter.</p><p>Fully unroll the loop:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">unroll</span></span>
<span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">5</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>Unroll the loop by a factor of 4 (with remainder iterations of 2):</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">unroll</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">10</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>The Mojo REPL now prints the values of variables defined in the REPL. There is full support for scalars and structs. Non-scalar SIMD vectors are not supported at this time.</p><h3 id="🛠️-fixed" tabindex="-1"><a class="header-anchor" href="#🛠️-fixed"><span>🛠️ Fixed</span></a></h3>`,10),g={href:"https://github.com/modularml/mojo/issues/437",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/modularml/mojo/issues/288",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"community-content",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-content"},[e("span",null,"Community Content")])],-1),_={href:"https://github.com/automata",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/automata/mojograd",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"mojo-team-answers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mojo-team-answers"},[e("span",null,"Mojo Team Answers")])],-1),j=e("h3",{id:"loop-unrolling",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loop-unrolling"},[e("span",null,"Loop Unrolling")])],-1),D={href:"https://en.wikipedia.org/wiki/Loop_unrolling",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>Fully unroll the loop&#39;s 10 iterations into 10 <code>do_something</code> calls and remove the for-loop:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">unroll</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">10</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#7AA2F7;">  do_something</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>Unroll every 2 iterations and loop over 5 times:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">unroll</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">2</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;"> (</span><span style="color:#FF9E64;">10</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#7AA2F7;">  do_something</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>This decorator can be attached to while statement too.</p><p>Note that currently the compiler can only unroll a loop:</p><ul><li>Its lower bound, upper bound and induction variable step every iteration are compile time constants</li><li>There is no early exits in the loop body that makes the loop trip count dynamic during runtime.</li></ul><p>Otherwise, Compilation fails if a loop is decorated with <code>@unroll</code></p>`,8),A={href:"https://docs.modular.com/mojo/changelog.html#july-2023",target:"_blank",rel:"noopener noreferrer"},B={href:"https://docs.modular.com/mojo/MojoStdlib/Functional.html#unroll",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"@unroll",-1),x=e("ul",null,[e("li",null,"Library function call requires the induction variable to be a parameter while the decorator uses the induction variable as a dynamic variable."),e("li",null,"Library function call unroll the loop so that the program the compiler starts to compile is with unrolled code. The can potentially increase the amount of code to compile depends on the amount to unroll."),e("li",null,"Decorator unrolling happens at later stage of compilation which prevents program explosion too early.")],-1),T={href:"https://github.com/modularml/mojo/discussions/482#discussioncomment-6581104",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"json-parser",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#json-parser"},[e("span",null,"JSON Parser")])],-1),L=e("p",null,"JSON is super important, but right now we are tracking more basic things, e.g. getting core data structures in place. Higher level libraries like this should likely be part of the broader package ecosystem, and we need packages before we plan that 😃",-1),M={href:"https://github.com/modularml/mojo/issues/478#issuecomment-1654623649",target:"_blank",rel:"noopener noreferrer"};function N(E,P){const a=t("ExternalLinkIcon"),l=t("RouteLink");return p(),c("div",null,[u,e("p",null,[e("a",m,[o("Full changelog here"),n(a)])]),y,e("ul",null,[e("li",null,[e("a",g,[o("Issue #437"),n(a)]),o(" - Range can now be instantiated with a PythonObject.")]),e("li",null,[e("a",f,[o("Issue #288"),n(a)]),o(" - Python strings can now be safely copied.")])]),b,e("ul",null,[e("li",null,[e("a",_,[o("Vilson Vieira"),n(a)]),o(" has been working on a "),e("a",F,[o("Mojo implementation of micrograd named mojograd"),n(a)]),o(", still a work in progress")]),e("li",null,[o("added a chatbot to the bottom of "),n(l,{to:"/mojo-team-answers.html#mojo-chatbot"},{default:d(()=>[o("Mojo Team Answers")]),_:1}),o(" while experimenting with it.")])]),w,j,e("p",null,[o("These are two loop decorators to tell the compiler to unroll a loop, see "),e("a",D,[o("wikipedia loop unrolling"),n(a)]),o(". This doesn't impact the functionality of the loops, but potentially can help for better performance since it opens possibility for further compiler optimizations.")]),k,e("p",null,[o("Here is a brief description of these two decorators in "),e("a",A,[o("Mojo changelog on 2023-07-26"),n(a)]),o(".")]),e("p",null,[e("a",B,[o("Functional.unroll"),n(a)]),o(" performs the same loop unrolling functionality as library functions. There are a few differences between using library function of unroll and decorator "),v,o(" are:")]),x,e("p",null,[o("-"),e("a",T,[o("2023-07-28 Github Weiwei Chen"),n(a)])]),C,L,e("ul",null,[e("li",null,[e("a",M,[o("2023-07-28 Github Chris Lattner"),n(a)])])])])}const U=i(h,[["render",N],["__file","2023-07-28.html.vue"]]),V=JSON.parse('{"path":"/this-week-in-mojo/2023-07-28.html","title":"This Week in Mojo 2023-07-28","lang":"en-US","frontmatter":{"date":"2023-07-28T00:00:00.000Z","author":"Mojo Dojo","author_site":"https://mojodojo.dev","author_image":"https://mojodojo.dev/hero.png","feed":true,"head":[["meta",{"name":"twitter:card","content":"summary"}],["meta",{"name":"twitter:site","content":"@mojodojodev"}],["meta",{"name":"twitter:title","content":"This Week in Mojo"}],["meta",{"name":"twitter:description","content":"This week in Mojo with language updates, community content, and everything else related to Mojo"}],["meta",{"name":"twitter:image","content":"https://mojodojo.dev/hero.png"}]]},"headers":[{"level":2,"title":"Playground Release","slug":"playground-release","link":"#playground-release","children":[{"level":3,"title":"⭐️ New","slug":"⭐️-new","link":"#⭐️-new","children":[]},{"level":3,"title":"🛠️ Fixed","slug":"🛠️-fixed","link":"#🛠️-fixed","children":[]}]},{"level":2,"title":"Community Content","slug":"community-content","link":"#community-content","children":[]},{"level":2,"title":"Mojo Team Answers","slug":"mojo-team-answers","link":"#mojo-team-answers","children":[{"level":3,"title":"Loop Unrolling","slug":"loop-unrolling","link":"#loop-unrolling","children":[]},{"level":3,"title":"JSON Parser","slug":"json-parser","link":"#json-parser","children":[]}]}],"filePathRelative":"this-week-in-mojo/2023-07-28.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{U as comp,V as data};
