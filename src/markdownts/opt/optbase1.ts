const data:string[] = [];
data[0]=`<h2><a id="_0"></a>基本优化点</h2>
<h3><a id="1__1"></a>1. 资源压缩</h3>
<ul>
<li>1.1 html压缩</li>
<li>1.2 css压缩</li>
<li>1.3 js压缩</li>
<li>1.4 图片压缩<br />
图片一般是png（支持透明度），jpeg（有损压缩，压缩率好），webp（兼容性低），svg（代码内嵌，可以做很多动画效果），gif（色域低，可以做动态图，不能表现大图，时候做小图标）</li>
<li>1.5 css雪碧图（将图标整在一张图上，以减少http请求）</li>
</ul>
<h3><a id="2__10"></a>2. 文件合并</h3>
<p>通过文件合并可以减少http请求数从而达到优化，但是文件合并优化并不是万能的,其问题点主要是， 比如js业务代码和commont公共工具库代码进行了合并，因js业务代码是经常变动了，合并了之后不能很好的利用游览器的keep-alive的缓存机制，每次业务更新都需要重新请求；第二点就是延长了首屏加载</p>
<p>1.和2.的优化，在现代前端开发中，一般都是配置相关工程（webpack或者gulp）或是直接使用vue-cli，create-react-app等相关库的手脚架自动配置解决了，了解即可。</p>
<h3><a id="3RAIL_15"></a>3.基本优化标准RAIL</h3>
<p>R:响应，处理事件响应尽量在50ms内完成<br />
A:动画，应保持在60pfs以上<br />
I: 空闲，尽量让游览器主进程保持空闲<br />
L:加载， 5s内完成加载并可交互</p>
<h4><a id="31__21"></a>3.1 基本测试工具</h4>
<ul>
<li>
<ol>
<li>devtools</li>
</ol>
</li>
<li>
<ol start="2">
<li>Lighthouse</li>
</ol>
</li>
<li>
<ol start="3">
<li>webPageTest<br />
主要关注点是：waterfall chart（瀑布图）、first view（首次访问）、repeat view（第二次访问）</li>
</ol>
</li>
</ul>
`
data[1] =`<h4><a id="32_api_0"></a>3.2 基本性能测试api</h4>
<ul>
<li>
<ol>
<li>关键时间节点（可交互时间）</li>
</ol>
</li>
<li>
<ol start="2">
<li>网络状态</li>
</ol>
</li>
<li>
<ol start="3">
<li>客户端服务端协商&amp;网页显示状态</li>
</ol>
</li>
</ul>
<p>第一个：观察长任务</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-keyword">const</span> observer = <span class="hljs-keyword">new</span> PerformanceObserver(<span class="hljs-function">(<span class="hljs-params">list</span>) =&gt;</span> {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> entry of list.getEntries()) {
        <span class="hljs-built_in">console</span>.log(entry)
    }
})
observer.observe({entryTypes: [<span class="hljs-string">'longtask'</span>]})
</code></div></pre>
<p>第二个：见面可见性的状态监听，类似小程序的onshow，onhide生命周期</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-keyword">let</span> vEvent = <span class="hljs-string">'visibilitychange'</span>;
<span class="hljs-keyword">if</span> ((<span class="hljs-built_in">document</span> <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).webkitHidden != <span class="hljs-literal">undefined</span>) {
    vEvent = <span class="hljs-string">'webkitvisibilitychange'</span>;
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">visibilityChanged</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">document</span>.hidden || (<span class="hljs-built_in">document</span> <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).webkitHidden) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Web page is hidden."</span>)
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Web page is visible."</span>)
    }
}
<span class="hljs-built_in">document</span>.addEventListener(vEvent, visibilityChanged, <span class="hljs-literal">false</span>);
</code></div></pre>
<p>第三个：网络状态监听</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-keyword">let</span> connection = (navigator <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).connection || (navigator <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).mozConnection || (navigator <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).webkitConnection;
<span class="hljs-keyword">let</span> <span class="hljs-keyword">type</span> = connection.effectiveType;
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">type</span>)
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">updateConnectionStatus</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Connection type changed from "</span> + <span class="hljs-keyword">type</span> + <span class="hljs-string">" to "</span> + connection.effectiveType);
    <span class="hljs-keyword">type</span> = connection.effectiveType;
}
connection.addEventListener(<span class="hljs-string">'change'</span>, updateConnectionStatus);
</code></div></pre>`
export default data