const data:string[] = [];
data[0]=`<h2><a id="_0"></a>渲染优化</h2>
<h3><a id="1url_1"></a>1.从输入url到浏览器显示页面发生了什么？回答如下：</h3>
<ul>
<li>
<ol>
<li>游览器查找域名的ip地址</li>
</ol>
<ul>
<li>a. 发起请求后，先进行域名解析，查找主机上的hosts文件，如果有匹配就拿出文件里面的ip</li>
<li>b. 本地hosts文件没有，游览器将发出一个DNS请求到本地的DNS服务器 （计算机网络的域名分布系统，具体可以看前端需要掌握的计算机网络知识,一般是接入商提供）</li>
<li>c. 查询输入的网址的DNS请求到达本地DNS服务器之后，本地DNS服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果，此过程是递归的方式进行查询。如果没有，本地DNS服务器还要向DNS根服务器进行查询</li>
<li>d. 如果根DNS服务器没有记录具体的域名和IP地址的对应关系，那么将会告诉本地DNS服务器，可以到域服务器上去继续查询，并给出域服务器的地址。</li>
<li>e. 本地DNS服务器继续向域服务器发出请求,匹配到之后告诉本地DNS服务器，域名的解析服务器的地址</li>
<li>f.最后，本地DNS服务器向域名的解析服务器发出请求，这时就能收到一个域名和IP地址对应关系，本地DNS服务器不仅要把IP地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问</li>
</ul>
</li>
<li>
<ol start="2">
<li>建立TCP链接，（三次握手：请求连接、确认信息、应答回复也就是握手结束）</li>
</ol>
</li>
<li>
<ol start="3">
<li>游览器向WEB服务器发起Http请求，然后服务器端处理信息</li>
</ol>
</li>
<li>
<ol start="4">
<li>关闭TCP链接，（四次挥手：发送关闭链接信号，回复关闭链接，回复可以关闭链接，应答关闭链接）</li>
</ol>
</li>
<li>
<ol start="5">
<li>游览器解析资源</li>
</ol>
</li>
<li>
<ol start="6">
<li>游览器布局渲染</li>
</ol>
</li>
</ul>
<h3><a id="2__15"></a>2. 浏览器渲染网页的具体基本流程</h3>
<p>从上面我们可以清楚的得到一个我们前端可以优化的一个关键点，游览器渲染优化，游览器渲染网页的流程具体如下：<br />
<img src="data:image/png;base64,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" alt="base2.png" rel="1" /><br />
简化来说游览器渲染如下：<br />
<img src="data:image/png;base64,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" alt="base1.png" rel="2" /></p>`;

data[1]=`<h4><a id="21_layoutpaint_21"></a>2.1 布局和绘制（layout&amp;paint）</h4>
<p>布局:要计算每一个节点精确位置和大小</p>
<p>绘制：像素化每一个节点</p>
<h4><a id="22_reflow_25"></a>2.2 reflow（回流）</h4>
<p>当浏览器发现布局发生了变化，这个时候就需要倒回去重新渲染，这个回退的过程</p>
<p>引起reflow的几个点：</p>
<ul>
<li>
<ol>
<li>添加删除元素</li>
</ol>
</li>
<li>
<ol start="2">
<li>display:none</li>
</ol>
</li>
<li>
<ol start="3">
<li>移动元素位置</li>
</ol>
</li>
<li>
<ol start="4">
<li>获取元素的offsetLeft、offsetTop、offsetWidth、offsetHeight、 scrollTop/Left/Width/Height、clientTop/Left/Width/Height</li>
</ol>
</li>
<li>
<ol start="5">
<li>修改游览器大小</li>
</ol>
</li>
<li>
<ol start="6">
<li>修改字体大小</li>
</ol>
</li>
<li>
<ol start="7">
<li>操作styles</li>
</ol>
</li>
</ul>
<h4><a id="23_repaint_36"></a>2.3 repaint（重绘）</h4>
<p>reflow回流必定引起repaint重绘，重绘可以单独触发。背景色、颜色、字体改变（注意：字体大小发生变化时，会触发回流）</p>
<h4><a id="24__38"></a>2.4 优化点一</h4>
<p>减少reflow、repaint触发次数，比如：</p>
<ul>
<li>
<ol>
<li>用transform做形变和位移可以减少reflow</li>
</ol>
</li>
<li>
<ol start="2">
<li>避免逐个修改节点样式，尽量一次性修改（这里还有一个标准就是读写分离，最佳项目实践是使用fastdom这个工具库把对dom属性操作用这个工具库来进行，做到读写分离）</li>
</ol>
</li>
<li>
<ol start="3">
<li>使用DocumentFragment将需要多次修改的DOM元素缓存，最后一次性append到真实DOM中渲染</li>
</ol>
</li>
<li>
<ol start="4">
<li>通过绝对位移将复杂的节点元素脱离文档流，形成新的Render Layer，降低回流成本</li>
</ol>
</li>
<li>
<ol start="5">
<li>尽量使用离线DOM，而不是真实的网页DOM，来改变元素样式。比如，操作Document Fragment对象，完成后再把这个对象加入DOM。再比如，使用cloneNode()方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。</li>
</ol>
</li>
<li>
<ol start="6">
<li>position属性为absolute或fixed的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。</li>
</ol>
</li>
</ul>
<h4><a id="25_47"></a>2.5优化点二</h4>
<p>对于高频事件处理函数，使用节流<br />
什么是节流？节流是：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。</p>
<p>在js动画效果中，fps要保持在60，所以这个时间段就是事件触发响应最小时间单元，如果用时间计算器来做，当然，更好的方式是用window.requestAnimationFrame去做<br />
演示代码如下（窗口滚动）：</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lisenSroll</span>(<span class="hljs-params"></span>): <span class="hljs-title">void</span> </span>{
    <span class="hljs-keyword">let</span> askey: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;
    <span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">'scroll'</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (askey) <span class="hljs-keyword">return</span>;
        askey = <span class="hljs-literal">true</span>
        <span class="hljs-built_in">window</span>.requestAnimationFrame(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            askey = <span class="hljs-literal">true</span>;
            <span class="hljs-comment">//这里处理事件逻辑</span>
        })
    })
}
</code></div></pre>`
export default  data