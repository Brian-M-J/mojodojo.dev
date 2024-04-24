import{_ as r}from"./hero-CbGtQ2Lh.js";import{_ as l,r as i,o as h,c as d,b as e,d as t,e as o,a as n}from"./app-P3E1jSxo.js";const c={},p=n('<p><img src="'+r+'" alt="Logo"></p><h1 id="this-week-in-mojo-2023-05-19" tabindex="-1"><a class="header-anchor" href="#this-week-in-mojo-2023-05-19"><span>This Week in Mojo 2023-05-19</span></a></h1><h2 id="mojo-playground-release" tabindex="-1"><a class="header-anchor" href="#mojo-playground-release"><span>Mojo Playground Release</span></a></h2><h3 id="⭐-new" tabindex="-1"><a class="header-anchor" href="#⭐-new"><span>⭐ New:</span></a></h3><ul><li>Added missing dunder methods to PythonObject, enabling the use of common arithmetic and logical operators on imported Python values.</li><li>PythonObject is now printable from Mojo, instead of requiring you to import Python’s print function.</li></ul><h3 id="🛠️-fixed" tabindex="-1"><a class="header-anchor" href="#🛠️-fixed"><span>🛠️ Fixed:</span></a></h3><ul><li>Issue #98: Incorrect error with lifetime tracking in loop.</li><li>Issue #49: Type inference issue (?) in ‘ternary assignment’ operation (FloatLiteral vs. ‘SIMD[float32, 1]’).</li><li>Issue #48: and/or don’t work with memory-only types.</li><li>Issue #11: setitem Support for PythonObject.</li></ul><h2 id="community-content" tabindex="-1"><a class="header-anchor" href="#community-content"><span>Community Content</span></a></h2>',8),u={href:"https://mzaks.medium.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mzaks.medium.com/counting-chars-with-simd-in-mojo-140ee730bd4d",target:"_blank",rel:"noopener noreferrer"},f={href:"https://substack.com/profile/14520974-abhinav-upadhyay",target:"_blank",rel:"noopener noreferrer"},g={href:"https://codeconfessions.substack.com/p/mojo-the-future-of-ai-programming",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.youtube.com/@codetothemoon",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.youtube.com/watch?v=w14vohgjnKo",target:"_blank",rel:"noopener noreferrer"},b=n('<h2 id="mojo-team-answers" tabindex="-1"><a class="header-anchor" href="#mojo-team-answers"><span>Mojo Team Answers</span></a></h2><h3 id="unsafe-code" tabindex="-1"><a class="header-anchor" href="#unsafe-code"><span>Unsafe Code</span></a></h3><blockquote><p>The standard Pointer is very unsafe and can lead catastrophic scenarios</p></blockquote><p>I agree, the Mojo Pointer type is currently &quot;too sharp and pointy&quot; 😀. In my opinion, we should rename it to <code>UnsafePointer</code> and make some other changes to make it not have to be something that people reach for immediately, just like in C++ or Rust you should use higher level collections, and not jump right to unsafe features.</p><h3 id="bounds-checking" tabindex="-1"><a class="header-anchor" href="#bounds-checking"><span>Bounds Checking</span></a></h3><p>We have to implement array bound checking for our array/slice types, we just haven&#39;t solidified them due to missing features (notably traits)</p><h3 id="community" tabindex="-1"><a class="header-anchor" href="#community"><span>Community</span></a></h3><p>On community, this dovetails with our open source plan. We&#39;re getting a bit crushed under lots of different kinds of interest right now, but I&#39;d love to open up more code, enable pull requests etc, that&#39;s mostly blocked on logistical work and that we&#39;re being crushed in various ways. We have a Mojo developer advocate role open that will help us sort that out.</p><h3 id="traits" tabindex="-1"><a class="header-anchor" href="#traits"><span>traits</span></a></h3><p><em>currently an unimplemented feature</em> We don&#39;t have a final name here, Guido recommended that <code>Protocols</code> as term of art in python already, but we&#39;ll need to loop back around and make a decision when we get there.</p><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help"><span>help</span></a></h3><p>On the implementation, we&#39;ll need some work to build out <code>help(object)</code> and <code>help(Int)</code> (where Int is a struct, not a class). I don&#39;t see us prioritizing that in the next month or so, but it is super important for us to do that over time. We have ways to do that without adding a field to Int 🙂 etc, so that should be fine. It depends on Traits/Protocols which is on our roadmap</p><h3 id="cpython-implementation-details" tabindex="-1"><a class="header-anchor" href="#cpython-implementation-details"><span>CPython Implementation Details</span></a></h3><p>You&#39;re quite right about CPython. Mojo takes a different implementation approach: ignoring C extensions for a moment, the core compilation model for mojo is to compile to native code, and use ownership optimizations, and more modern data layout approaches to avoid heap boxing all the things, and therefore reference counting them. In CPython for example, a lot of reference counting traffic is required for simple integers and short strings etc.</p><p>Mojo solves this in several ways:</p><ol><li>compilers: you get a lot of performance by not going through an interpreter, using register allocation etc.</li><li>unboxing things: our default &quot;object&quot; is still naive in many ways, but has inline storage + variant for small types like integers to avoid indirections, refcount overhead, etc.</li><li>types like Int are put in cpu registers etc, which give a massive performance uplift vs that.</li></ol><p>Now you can&#39;t ignore CPython and can&#39;t ignore c extensions. Good news, MLIR and compilers can do more than one thing 😃, and so we can talk to other ABIs and handle other layout constraints. We haven&#39;t built a proper &quot;talk to c python extensions&quot; directly from Mojo subsystem, but when we do, <strong>it</strong> will have a GIL because c extensions require it, just as you say.</p><p>Similarly, when you import a cpython module, you get the cpython interpreter in the loop, which has a gil (and its datalayout etc) implicitly.</p><p>The cool thing about mojo is that you don&#39;t pay this overhead in pure Mojo code, so if you care about performance you can incrementally move Python code -&gt; Mojo and you can adopt new features for performance ... but only if you care about performance! If you don&#39;t, hack on and do so without caring, and all is well.</p><h3 id="iot" tabindex="-1"><a class="header-anchor" href="#iot"><span>IOT</span></a></h3><p>yes, definitely, we want Mojo to go everywhere, and deploying to small devices is part of our design. One step at a time though 😀</p><h3 id="rebind" tabindex="-1"><a class="header-anchor" href="#rebind"><span>rebind</span></a></h3><blockquote><p>It will be nice to change the current rebind parameters from [dest, src] to [src, dest] since its more intuitive that the other way around. The current signature is rebind<a href="src_val">dest_type, src_type</a></p></blockquote><p>The current way works better with parameter inference, because you can call it with <code>rebind[dest_type](src_val)</code> and have src_type inferred from the argument.</p><h3 id="pytorch-on-different-hardware" tabindex="-1"><a class="header-anchor" href="#pytorch-on-different-hardware"><span>Pytorch on Different hardware</span></a></h3>',25),k={href:"https://www.modular.com/engine#performance",target:"_blank",rel:"noopener noreferrer"},v=n(`<h3 id="quantization" tabindex="-1"><a class="header-anchor" href="#quantization"><span>Quantization</span></a></h3><p>We support quantization and it will support many other HW types like edge deployments</p><h3 id="inference-engine-frameworks" tabindex="-1"><a class="header-anchor" href="#inference-engine-frameworks"><span>Inference Engine Frameworks</span></a></h3><p>It’s a unified engine that enables multi-framework support - many users aren’t just using PyTorch (TensorFlow, JAX etc)</p><p>It integrates natively with Mojo 🔥 for a completely new high performance programming model that enables many things outside of just pure model execution performance</p><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>alias</span></a></h3><p><code>comptime</code> is really obvious to Zig folk, but that&#39;s not really our audience. You&#39;re right that <code>alias</code> may not be the right word to use here either. Aligning this around &quot;parameter&quot; could be a good way to go, but I&#39;m curious if there are other suggestions.</p><p>Once nice thing about &quot;alias&quot; is that it is more obvious for the trivial cases like alias my_magic = 12312 or alias Int8 = SIMD[DType.int8, 1]. That doesn&#39;t make it the right thing, but it is a nice thing.</p><p>If we replaced the keyword &quot;alias x = 42&quot; with &quot;parameter x = 42&quot;, then we can say &quot;it&#39;s a declaration of a parameter&quot; and that &quot;parameters are all compile time expressions.&quot;</p><p>alias (regardless of what it is called) is a declaration of a thing. We need spoken vocabulary for programmers to describe these things. It isn&#39;t just about encoding things in source code for the compiler, it is allowing humans to communicate ideas as well.</p><p>Also, &quot;let&quot; values are not aliases. They&#39;ve very different. A let isn&#39;t mutable after it is initialized, which is a flow sensitive property, e.g. this is allowed:</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span>let x : Int </span></span>
<span class="line"><span>if cond:</span></span>
<span class="line"><span>    x = foo()</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    x = bar()</span></span>
<span class="line"><span>use(x)</span></span>
<span class="line"><span></span></span></code></pre></div><p>which isn&#39;t allowed for aliases.</p><h3 id="mlir-and-llvm" tabindex="-1"><a class="header-anchor" href="#mlir-and-llvm"><span>MLIR and LLVM</span></a></h3><blockquote><p>Reading the documents on MLIR related APIs, I feel that the style of these APIs seems to be quite different with Python</p></blockquote><p>Indeed, the MLIR integration hasn&#39;t been polished or designed to be pretty - we&#39;ve focused primarily on making it fully capable and unblocking our needs. The idea for it is that only MLIR experts would be using this, but then they&#39;d be wrapping user-facing Pythonic types and methods around them (e.g. like OurBool wraps i1). that said, we can definitely improve this in various ways, we just can&#39;t do so at the loss of fidelity/expressiveness.</p><blockquote><p>I wonder if it is possible to make Mojo more extensible such that it can also create new didacts?</p></blockquote><p>This is also something we&#39;re likely to look into in the far future, but isn&#39;t a priority right now. Also, as mojo opens up more, it would be great for community members to poke at this.</p><h3 id="mlir-code-with-unknown-dialects" tabindex="-1"><a class="header-anchor" href="#mlir-code-with-unknown-dialects"><span>MLIR code with unknown dialects</span></a></h3><p>The mojo compiler has a number of internal dialects, including <code>pop</code> and <code>kgen</code>, but they aren&#39;t documented yet. They are very much internal implementation details of the compiler and change all the time. I&#39;d recommend sticking with the llvm and other dialects that are more stable.</p><h3 id="i32-vs-si32" tabindex="-1"><a class="header-anchor" href="#i32-vs-si32"><span>i32 vs si32</span></a></h3><blockquote><p>Python programmers will probably be more familiar with the i32/u32 syntax.</p></blockquote><p>Yeah, for the core language types, our audience are general programmers and Python folks, not MLIR nerds 😉</p><p>We want things to be clear and unambiguous, compiler folk can deal with naming mapping. We will discuss.</p><blockquote><p>would it ever makes sense for Mojo to also support signless integers?</p></blockquote><p>I don&#39;t see a benefit to that. It would mean that we couldn&#39;t use the standard Python operators (which imply sign behavior, e.g. on divides). Signless integers are good for compilers because they want canonical forms, but users want operations that work on types. It&#39;s a bit of a different concern.</p><h3 id="optimization-via-mlir" tabindex="-1"><a class="header-anchor" href="#optimization-via-mlir"><span>Optimization via MLIR</span></a></h3><p>Mojo is a gateway to the whole MLIR ecosystem. It is entirely plausible that the matmul implementation for a particular piece of hardware just calls a few MLIR operations.</p><h3 id="accelerators" tabindex="-1"><a class="header-anchor" href="#accelerators"><span>Accelerators</span></a></h3><p>We can only say that we&#39;re working on accelerators and that is core to the mission, but can&#39;t talk about that until we&#39;re ready to talk about it 😀</p><h3 id="compile-time-optimizations" tabindex="-1"><a class="header-anchor" href="#compile-time-optimizations"><span>Compile Time Optimizations</span></a></h3><p>Mojo&#39;s compiler is not going to be magic. If you write matmul as a triply nested for loop, you will get a triply nested for loop on all hardwares (barring LLVM optimizations).</p><p>The general idea is that Mojo&#39;s compiler is not going to perform some magic to optimize the code you are generating, but the language provides all the facilities to write that magic in a portable way as just Mojo code. Today, that magic is bundled into a handful of higher-order functions, like parallelize and vectorize_unroll, and as time continues, Mojo will ship with more &quot;batteries&quot; that mean most developers won&#39;t have to worry about SIMD, unrolling, etc. You just need to slap a few decorators on your functions/loops and call a function.</p><h3 id="python-keyword-compatibility" tabindex="-1"><a class="header-anchor" href="#python-keyword-compatibility"><span>Python keyword compatibility</span></a></h3><p>For now, we need to get Mojo from 0.1 to at least 0.7 (conceptually, we have no specific versioning planned), at which point we&#39;ll understand more of what we&#39;re dealing with, and have broader developed relationships with the python community.</p><p>Also, my understanding is that Python3 generally doesn&#39;t take hard keywords for various compatibility reasons, even things like &quot;case&quot; are a soft keyword. If that is true, then we may be fine.</p>`,36);function j(I,x){const a=i("ExternalLinkIcon"),s=i("CommentService");return h(),d("div",null,[p,e("ul",null,[e("li",null,[e("a",u,[t("Maxim Zaks"),o(a)]),t(" did a blog post on "),e("a",m,[t("counting chars with SIMD in Mojo"),o(a)])]),e("li",null,[e("a",f,[t("Abhinav Upadhyay"),o(a)]),t(" did a substack post titled "),e("a",g,[t("Mojo: The Future of AI Programming 🔥"),o(a)])]),e("li",null,[e("a",y,[t("Code to the Moon"),o(a)]),t(" did a live demo and introduction to Mojo titled "),e("a",w,[t("All-in-one C++, Rust, AND Python Successor?"),o(a)])])]),b,e("p",null,[t("We outperform PyTorch across a large range of hardware (Intel, AMD, ARM etc) "),e("a",k,[t("see performance dashboard"),o(a)]),t(" and swap around the Instance Types")]),v,o(s)])}const q=l(c,[["render",j],["__file","2023-05-19.html.vue"]]),P=JSON.parse('{"path":"/this-week-in-mojo/2023-05-19.html","title":"This Week in Mojo 2023-05-19","lang":"en-US","frontmatter":{"title":"This Week in Mojo 2023-05-19","date":"2023-05-19T00:00:00.000Z","author":"Mojo Dojo","author_site":"https://mojodojo.dev","author_image":"https://mojodojo.dev/hero.png","feed":true},"headers":[{"level":2,"title":"Mojo Playground Release","slug":"mojo-playground-release","link":"#mojo-playground-release","children":[{"level":3,"title":"⭐ New:","slug":"⭐-new","link":"#⭐-new","children":[]},{"level":3,"title":"🛠️ Fixed:","slug":"🛠️-fixed","link":"#🛠️-fixed","children":[]}]},{"level":2,"title":"Community Content","slug":"community-content","link":"#community-content","children":[]},{"level":2,"title":"Mojo Team Answers","slug":"mojo-team-answers","link":"#mojo-team-answers","children":[{"level":3,"title":"Unsafe Code","slug":"unsafe-code","link":"#unsafe-code","children":[]},{"level":3,"title":"Bounds Checking","slug":"bounds-checking","link":"#bounds-checking","children":[]},{"level":3,"title":"Community","slug":"community","link":"#community","children":[]},{"level":3,"title":"traits","slug":"traits","link":"#traits","children":[]},{"level":3,"title":"help","slug":"help","link":"#help","children":[]},{"level":3,"title":"CPython Implementation Details","slug":"cpython-implementation-details","link":"#cpython-implementation-details","children":[]},{"level":3,"title":"IOT","slug":"iot","link":"#iot","children":[]},{"level":3,"title":"rebind","slug":"rebind","link":"#rebind","children":[]},{"level":3,"title":"Pytorch on Different hardware","slug":"pytorch-on-different-hardware","link":"#pytorch-on-different-hardware","children":[]},{"level":3,"title":"Quantization","slug":"quantization","link":"#quantization","children":[]},{"level":3,"title":"Inference Engine Frameworks","slug":"inference-engine-frameworks","link":"#inference-engine-frameworks","children":[]},{"level":3,"title":"alias","slug":"alias","link":"#alias","children":[]},{"level":3,"title":"MLIR and LLVM","slug":"mlir-and-llvm","link":"#mlir-and-llvm","children":[]},{"level":3,"title":"MLIR code with unknown dialects","slug":"mlir-code-with-unknown-dialects","link":"#mlir-code-with-unknown-dialects","children":[]},{"level":3,"title":"i32 vs si32","slug":"i32-vs-si32","link":"#i32-vs-si32","children":[]},{"level":3,"title":"Optimization via MLIR","slug":"optimization-via-mlir","link":"#optimization-via-mlir","children":[]},{"level":3,"title":"Accelerators","slug":"accelerators","link":"#accelerators","children":[]},{"level":3,"title":"Compile Time Optimizations","slug":"compile-time-optimizations","link":"#compile-time-optimizations","children":[]},{"level":3,"title":"Python keyword compatibility","slug":"python-keyword-compatibility","link":"#python-keyword-compatibility","children":[]}]}],"filePathRelative":"this-week-in-mojo/2023-05-19.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{q as comp,P as data};
