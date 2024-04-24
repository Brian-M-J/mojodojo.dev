import{_ as p,r as s,o as t,c,b as a,d as e,e as n,a as r}from"./app-P3E1jSxo.js";const i={},d={href:"https://github.com/Alex19578",target:"_blank",rel:"noopener noreferrer"},y=r(`<h1 id="unsafefixedvector" tabindex="-1"><a class="header-anchor" href="#unsafefixedvector"><span>UnsafeFixedVector</span></a></h1><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span>import</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Vector </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> UnsafeFixedVector</span></span>
<span class="line"></span></code></pre></div><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>Init</span></a></h2><p>You can reserve memory to add elements without the cost of copying everything if it grows too large.</p><p>Statically allocate 4 elements, and reserve a capacity of 8 elements</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> vec</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> UnsafeFixedVector</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">Int</span><span style="color:#9ABDF5;">](</span><span style="color:#FF9E64;">8</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="append" tabindex="-1"><a class="header-anchor" href="#append"><span>append</span></a></h2><p>To add elements to the vector, you can use the <code>append</code> method:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#A9B1D6;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">append</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">10</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">append</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">20</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">len</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>2
</code></pre><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>variables</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">capacity</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">data</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">size</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>8
10
2
</code></pre><h2 id="indexing" tabindex="-1"><a class="header-anchor" href="#indexing"><span>indexing</span></a></h2><p>You can access and assign elements using indexes</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>No bounds checking, can access garbage data</p></div><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"></span></code></pre></div><pre><code>10
</code></pre><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#A9B1D6;">vec</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 42</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"></span></code></pre></div><pre><code>42
</code></pre><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Setting elements this way won&#39;t increase the <code>len</code> so may lead to errors, you should only use <code>append</code> to add a new element, and use this to modify existing elements</p></div><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">len</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#A9B1D6;">vec</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">6</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 10</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">len</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>2
2
</code></pre><h2 id="copying" tabindex="-1"><a class="header-anchor" href="#copying"><span>copying</span></a></h2><p>This will result in a shallow copy, it&#39;ll be a pointer to the same location in memory:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> vec2</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> vec</span></span>
<span class="line"></span></code></pre></div><p>If we modify <code>vec</code> then <code>vec2</code> will also be updated:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#A9B1D6;">vec</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 99</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec2</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"></span></code></pre></div><pre><code>99
</code></pre><p>There is no deep copy for this type</p><h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear"><span>clear</span></a></h2><p>Deallocates the data in the vector</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#A9B1D6;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">clear</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">vec</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"></span></code></pre></div><pre><code>0
</code></pre>`,35);function F(D,h){const o=s("ExternalLinkIcon"),l=s("CommentService");return t(),c("div",null,[a("p",null,[e("Contributed by "),a("a",d,[e("Alex1957"),n(o)])]),y,n(l)])}const m=p(i,[["render",F],["__file","UnsafeFixedVector.html.vue"]]),A=JSON.parse('{"path":"/guides/std/Vector/UnsafeFixedVector.html","title":"UnsafeFixedVector","lang":"en-US","frontmatter":{"title":"UnsafeFixedVector","categories":"Vector","usage":"Can not be resized after initialization, but size can be runtime known"},"headers":[{"level":2,"title":"import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Init","slug":"init","link":"#init","children":[]},{"level":2,"title":"append","slug":"append","link":"#append","children":[]},{"level":2,"title":"variables","slug":"variables","link":"#variables","children":[]},{"level":2,"title":"indexing","slug":"indexing","link":"#indexing","children":[]},{"level":2,"title":"copying","slug":"copying","link":"#copying","children":[]},{"level":2,"title":"clear","slug":"clear","link":"#clear","children":[]}],"filePathRelative":"guides/std/Vector/UnsafeFixedVector.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{m as comp,A as data};
