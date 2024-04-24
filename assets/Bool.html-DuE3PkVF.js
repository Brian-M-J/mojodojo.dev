import{_ as p,r as s,o as r,c as t,b as a,d as n,e as o,a as c}from"./app-P3E1jSxo.js";const i={},d={href:"https://github.com/StitchyPie",target:"_blank",rel:"noopener noreferrer"},y=c(`<h1 id="bool" tabindex="-1"><a class="header-anchor" href="#bool"><span>Bool</span></a></h1><p>The primitive Bool scalar value used in Mojo.</p><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> True</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">x</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Bool </span><span style="color:#89DDFF;">=</span><span style="color:#FF9E64;"> False</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">y</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>True
False
</code></pre><h2 id="fields" tabindex="-1"><a class="header-anchor" href="#fields"><span>fields</span></a></h2><p><code>Bool</code> stores it&#39;s data in the member variable <code>value</code>:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">my_bool</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">value</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>True
</code></pre><h2 id="invert" tabindex="-1"><a class="header-anchor" href="#invert"><span>invert</span></a></h2><p>Flips from <code>True</code> to <code>False</code> or vice-versa</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#89DDFF;">.</span><span style="color:#0DB9D7;">__invert__</span><span style="color:#9ABDF5;">())</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#BB9AF7;">~</span><span style="color:#FF9E64;">False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>False
True
</code></pre><h2 id="equal" tabindex="-1"><a class="header-anchor" href="#equal"><span>equal</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#89DDFF;">.</span><span style="color:#0DB9D7;">__eq__</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#BB9AF7;"> ==</span><span style="color:#FF9E64;"> False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>True
False
</code></pre><h2 id="not-equal" tabindex="-1"><a class="header-anchor" href="#not-equal"><span>not equal</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#89DDFF;">.</span><span style="color:#0DB9D7;">__ne__</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#BB9AF7;"> !=</span><span style="color:#FF9E64;"> False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>False
True
</code></pre><h2 id="and" tabindex="-1"><a class="header-anchor" href="#and"><span>and</span></a></h2><p>True if both values are True</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#89DDFF;">.</span><span style="color:#0DB9D7;">__and__</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#BB9AF7;"> &amp;</span><span style="color:#FF9E64;"> False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>True
False
</code></pre><h2 id="or" tabindex="-1"><a class="header-anchor" href="#or"><span>or</span></a></h2><p>True if any value is True</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#89DDFF;">.</span><span style="color:#0DB9D7;">__or__</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">False</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">False</span><span style="color:#BB9AF7;"> or</span><span style="color:#FF9E64;"> False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>True
False
</code></pre><h2 id="xor" tabindex="-1"><a class="header-anchor" href="#xor"><span>xor</span></a></h2><p>Exclusive or, outputs true if exactly one of two inputs is true</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#89DDFF;">.</span><span style="color:#0DB9D7;">__xor__</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#BB9AF7;"> ^</span><span style="color:#FF9E64;"> False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">False</span><span style="color:#BB9AF7;"> ^</span><span style="color:#FF9E64;"> True</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">False</span><span style="color:#BB9AF7;"> ^</span><span style="color:#FF9E64;"> False</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>False
True
True
False
</code></pre><h2 id="ror-rand-and-rxor" tabindex="-1"><a class="header-anchor" href="#ror-rand-and-rxor"><span>ror, rand and rxor</span></a></h2><p>Think of the <code>r</code> as reversed, for example in <code>a &amp; b</code>, if <code>a</code> doesn&#39;t implement <code>__and__</code>, then <code>b.__rand__(a)</code> will run instead.</p><p>For example create a struct <code>MyNumber</code> and implement <code>__rand__</code> with a <code>Bool</code>:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> MyNumber</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> value</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> FloatLiteral</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#0DB9D7;"> __init__</span><span style="color:#9ABDF5;">(</span><span style="color:#9D7CD8;font-style:italic;">inout</span><span style="color:#E0AF68;"> self</span><span style="color:#89DDFF;">,</span><span style="color:#E0AF68;"> num</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> FloatLiteral</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#F7768E;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> num</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#0DB9D7;"> __rand__</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">self</span><span style="color:#89DDFF;">,</span><span style="color:#E0AF68;"> other</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Bool</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#A9B1D6;"> Bool</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Called MyNumber&#39;s __rand__ function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#BB9AF7;">        if</span><span style="color:#F7768E;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">value </span><span style="color:#BB9AF7;">&gt;</span><span style="color:#FF9E64;"> 0.0</span><span style="color:#BB9AF7;"> and</span><span style="color:#A9B1D6;"> other</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">            return</span><span style="color:#FF9E64;"> True</span></span>
<span class="line"><span style="color:#BB9AF7;">        return</span><span style="color:#FF9E64;"> False</span></span>
<span class="line"></span></code></pre></div><p>You normally can&#39;t compare a <code>Bool</code> with a <code>FloatLiteral</code>, but now we implemented <code>__rand__</code> we can:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> my_number</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> MyNumber</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">1.0</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">True</span><span style="color:#BB9AF7;"> &amp;</span><span style="color:#C0CAF5;"> my_number</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>Called MyNumber&#39;s __rand__ function
True
</code></pre><p><code>True.__and__(my_number)</code> has no implementation, so it reverses it and runs <code>my_number.__rand__(True)</code> instead, with the special logic we implemented.</p>`,39);function F(D,B){const l=s("ExternalLinkIcon"),e=s("CommentService");return r(),t("div",null,[a("p",null,[n("Contributed by "),a("a",d,[n("StitchyPie"),o(l)])]),y,o(e)])}const h=p(i,[["render",F],["__file","Bool.html.vue"]]),A=JSON.parse('{"path":"/guides/builtins/Bool.html","title":"Bool","lang":"en-US","frontmatter":{"title":"Bool","categories":"Builtins","usage":"The primitive Bool scalar value used in Mojo"},"headers":[{"level":2,"title":"init","slug":"init","link":"#init","children":[]},{"level":2,"title":"fields","slug":"fields","link":"#fields","children":[]},{"level":2,"title":"invert","slug":"invert","link":"#invert","children":[]},{"level":2,"title":"equal","slug":"equal","link":"#equal","children":[]},{"level":2,"title":"not equal","slug":"not-equal","link":"#not-equal","children":[]},{"level":2,"title":"and","slug":"and","link":"#and","children":[]},{"level":2,"title":"or","slug":"or","link":"#or","children":[]},{"level":2,"title":"xor","slug":"xor","link":"#xor","children":[]},{"level":2,"title":"ror, rand and rxor","slug":"ror-rand-and-rxor","link":"#ror-rand-and-rxor","children":[]}],"filePathRelative":"guides/builtins/Bool.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{h as comp,A as data};
