const data:string[] = [];
data[0] =`<h2><a id="_0"></a>代码优化</h2>
<h3><a id="1_const_1"></a>1. 声明对象，函数，数组使用const</h3>
<h3><a id="2__2"></a>2. 对类数组进行遍历，最好先转换成数组在进行遍历</h3>
<h3><a id="3_js_3"></a>3. 谨防数组越界（虽然js很难，而且越界也不会保错）</h3>
<p>因为在js里面，数组其实也是对象，如果在一个数组中查找出现了越界，他会沿着原型链去查找，这样会产生比较大的开销，而且越界也会在一定程度上对业务造成一定的影响</p>
<h3><a id="4__5"></a>4. 避免类型转换</h3>
<h3><a id="5_iframes_6"></a>5. 避免iframes的使用</h3>
<p>主要是是iframe这个东西会阻碍父文档的加载<br />
当然如果业务需要，需要使用iframe这个东西，可以进行延时加载，具体思路就是，等父文档加载完毕，拿到iframe这个元素然后给他添加url，请求相关资源，以避免阻塞父文档加载</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"layzIframe"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"500px"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100%"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span>
</code></div></pre>
<pre><code class="lang-typscript">//模拟首页资源加载完毕
setTimeout(() =&gt; {
    (this.$refs.layzIframe as Element).setAttribute('src', "https://tangjietop.cn")
}, 5000)
</code></pre><p>效果如下：</p>`

data[1]=`<h3><a id="6_18"></a>6.避免节点深层嵌套</h3>
<h3><a id="7csshtml_19"></a>7.css或html中默认属性不要重复写</h3>
<h3><a id="8css_20"></a>8.对于不重要的css延迟加载</h3>
<h3><a id="9GPU_21"></a>9.利用GPU进行动画加速</h3>
<h3><a id="10CSS_contain__22"></a>10.使用CSS性能优化新属性 contain 的语法</h3>
<p>这个 contain 属性的主要目的是隔离指定内容的样式、布局和渲染。开发人员可以使用这个 contain 属性来限制指定的DOM元素和它的子元素同页面上其它内容的联系；我们可以把它看做一个iframe。跟iframe很相似，它能建立起一个边界，产生一个新的根布局；保证了它和它的子元素的DOM变化不会触发父元素重新布局、渲染等。</p>
<p>none | strict | layout | style | paint | size | contain 这个contain 属性可以有7种不同的值。</p>
<ul>
<li>none 无</li>
<li>layout 开启布局限制</li>
<li>style 开启样式限制</li>
<li>paint 开启渲染限制</li>
<li>size 开启size限制</li>
<li>content 开启除了size外的所有限制</li>
<li>strict开启 layout, style 和 paint 三种限制组合</li>
</ul>
<h4><a id="101_contain__34"></a>10.1 contain 使用场景：</h4>
<p><strong>页面小饰件(widgets)</strong><br />
通常在页面上添加第三方小饰件时，我们几乎对它们没有什么太多的控制，比如分享工具，它们可能会因为具有相当耗资源的布局、样式、渲染操作等大幅度的降低整个页面的执行效率。为了将它们同我们的网站隔离开来，使用 contain: strict; 将第三方的小饰件同页面上的其它内容隔离开来。</p>
<p><strong>屏幕外的内容</strong><br />
如果你有一个导航栏或其它类似的东西并不在屏幕可现实范围内出现，浏览器同样会为这些不可见的元素进行渲染。通过使用 contain: paint; 浏览器就会忽略渲染这些屏幕外不可见的元素，从而能更快的渲染其它内容。</p>
<p><strong>计算容器尺寸</strong><br />
使用 contain: strict; 可以免去很多关于容器尺寸控制的问题。比如，子元素的内容会影响容器的大小，使用 contain 属性就可以避免这样的问题产生。</p>
`

export default data