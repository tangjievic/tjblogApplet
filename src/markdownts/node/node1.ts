const data:string[] = [];
data[0] = `<h2><a id="NODE_0"></a>NODE基础</h2>
<h3><a id="1_const_fs__requirefs_1"></a>1. 文件系统（const fs = require(‘fs’)加载文件系统模块）</h3>
<h4><a id="11_io_2"></a>1.1 同步io</h4>
<p>在node中进行文件操作一般是：(在nodetest文件夹中创建一个test的js文件，再在这个放一张test.jpg图片)</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">'fs'</span>);
<span class="hljs-keyword">const</span> data = fs.readFileSync(<span class="hljs-string">'./test.jpg'</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'data'</span>, data.toString());
<span class="hljs-keyword">let</span> a = <span class="hljs-number">2</span> + <span class="hljs-number">3</span>;
<span class="hljs-built_in">console</span>.log(a)
</code></div></pre>
<p>运行node test.js将会发现 要一直等图片加载完了之后(需要一定时间)才会打印a的值5，这就很明显的可以看出同步io会阻塞程序</p>
<h4><a id="12_io_12"></a>1.2 异步io</h4>
<pre><div class="hljs"><code class="lang-javascript">fs.readFile(<span class="hljs-string">'./test.jpg'</span>,(err,data)=&gt;{
   <span class="hljs-keyword">if</span>(error){
	<span class="hljs-keyword">throw</span> err	
   }<span class="hljs-keyword">else</span>{
	<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'data'</span>, data.toString());
   }
})
</code></div></pre>
<p>在运行这时候会发现 5就会先打印出来</p>
<h4><a id="13_promise_23"></a>1.3 将回调方法转化成promise对象</h4>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">//这里是用promisity对回调函数进行promise转化</span>
<span class="hljs-keyword">const</span> { promisify } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'util'</span>);
<span class="hljs-keyword">const</span> readFile = promisify(fs.readFile);
<span class="hljs-comment">//这样文件读取方法就变成了promise对象了，不光这个API回调函数其他类似的也可以这样去做</span>
readFile(<span class="hljs-string">'./test.jpg'</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(data)
}).catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.error(err)
})
</code></div></pre>
<h4><a id="14_Buffer_35"></a>1.4 Buffer缓冲区</h4>
如上面，读取图片，如果没对图片进行toSting()操作那么，得到的是一堆数字。也就是buffer。<br />
什么是buffer，buffer是用于在TCP流、文件系统操作、以及其他上下文中与八位字节流进行交互。八位字节组成的数组，可以有效的在js中存储二进制数据</p><h4><a id="15__39"></a>1.5 其他文件操作</h4>
<ul>
<li>
<ol>
<li>fs.open 打开文件</li>
</ol>
</li>
<li>
<ol start="2">
<li>fs.close 关闭文件</li>
</ol>
</li>
<li>
<ol start="3">
<li>fs.read 读取文件<br />
fs.read 和fs.readFile的不同之处在于可以这么理解，fs.readFile就是对fs.read的封装，要使用fs.read首先要用fs.open来打开文件</li>
</ol>
</li>
<li>
<ol start="4">
<li>fs.writeFile/fs.appendFile写入文件</li>
</ol>
</li>
</ul>`

data[1] = `<h3><a id="2Http_0"></a>2.Http服务</h3>
<p>如下就是创建一个简单的http服务器</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">// 创建http服务</span>
<span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">'http'</span>);
<span class="hljs-keyword">const</span> server = http.createServer(<span class="hljs-function">(<span class="hljs-params">request,response</span>)=&gt;</span>{
	<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'response'</span>)
	response.end(<span class="hljs-string">'this is a responses'</span>)
})

server.listen(<span class="hljs-number">4000</span>)
</code></div></pre>
<p>创建一个基本的首页</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">'http'</span>);
<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">'fs'</span>);
<span class="hljs-keyword">const</span> server = http.createServer(<span class="hljs-function">(<span class="hljs-params">request,response</span>)=&gt;</span>{
	<span class="hljs-keyword">const</span> { url,method } = request;
	<span class="hljs-keyword">if</span>(url === <span class="hljs-string">'/'</span> &amp;&amp; method === <span class="hljs-string">'GET'</span>){
		fs.readFile(<span class="hljs-string">'index.html'</span>,(err,data)=&gt;{
			<span class="hljs-keyword">if</span>(err){
				response.writeHead(<span class="hljs-number">500</span>,{
					<span class="hljs-string">'Content-Type'</span>:<span class="hljs-string">'text/plain;charset=urf-8'</span>
				});
				response.end();
				<span class="hljs-keyword">return</span>
			}
			response.statusCode = <span class="hljs-number">200</span>;
			response.setHeader(<span class="hljs-string">'Content-Type'</span>,<span class="hljs-string">'text/html'</span>);
			response.end(data)
		})
	}<span class="hljs-keyword">else</span>{
		response.statusCode = <span class="hljs-string">'404'</span>;
		response.setHeader(<span class="hljs-string">'Content-Type'</span>,<span class="hljs-string">'text/plain;charset=utf-8'</span>);
		response.end(<span class="hljs-string">'404'</span>,<span class="hljs-string">'页面丢失'</span>)
	}
})

server.listen(<span class="hljs-number">4000</span>)
</code></div></pre>
<h4><a id="21responsesetHeaderresponsewriteHead_40"></a>2.1关于response.setHeader和response.writeHead的区别：</h4>
<p>response.setHeader：只允许设置单一标题<br />
esponse.writeHead：将允许您设置几乎所有关于响应头的内容，包括状态代码、内容和多个头。</p>
<h4><a id="22_Stream__43"></a>2.2 Stream 流</h4>
<p>stream是用来与node流数据交互的接口，如果有了解gulp的同学，node的流其实和gulp的流差不多，而且这个两个的流都有pipe（管道）方法</p>`


export default data