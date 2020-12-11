const data:string[] = [];
data[0] = `<h2><a id="js_0"></a>js数组</h2>
<p>js数组是前端算法当中很重要的组成部分。在js中其实没必要实现诸如链表，栈，队列这样的数据结构，js的数组就可以很好的扮演这些角色，本节除了介绍数组外，同时也会说一下Map和Set。</p>
<h3><a id="1js_2"></a>1.js数组基础点</h3>
<h4><a id="11__3"></a>1.1 检测数组</h4>
<p>一般来说可以这样判断</p>
<pre><div class="hljs"><code class="lang-javascript">value  <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Array</span>
</code></div></pre>
<p>弊端是如果网页有多个框架，多个全局执行上下文，就会有两个不同版本的Array构造函数。</p>
<p>es6有一个更好的检测方式：</p>
<pre><div class="hljs"><code class="lang-javascript">Arrary.isArray(value)
</code></div></pre>
<h3><a id="12__14"></a>1.2 迭代器方法</h3>
<p>首先上一个数组方法:<code>Array.from()</code>,从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例</p>
<p>在Array的原型上暴露了3个用于检验数组的的方法：keys(),values(),entries();利用Array.from()就可以把目标数组的下标转成一个数组，值转成一个数组，键值对转成一个数组</p>
<h4><a id="13__18"></a>1.3 复制和填充</h4>
<ul>
<li><code>copyWithin()</code>;</li>
<li><code>fill()</code>;</li>
</ul>
<h4><a id="14__21"></a>1.4 栈/队列方法</h4>
<ul>
<li><code>push()</code>和<code>pop()</code>;</li>
<li><code>push()</code>和<code>shfit()</code>[有一个unshift是在数组前加一个元素]</li>
</ul>
<h4><a id="15__26"></a>1.5 排序方法</h4>
<ul>
<li>reverse() 反向排序</li>
<li>sort(),这个函数使得js的数组排序变得相当容易，默认sort是升序排序，然后转字符串在决定排序因此默认排序元素成员是数字类型的数组不一定准确。【这里的一个重点是sort里面的比较函数，如果，第一个参数在第二个参数前返回负值，相等返回0，第一个参数排第二个参数后面返回正值】</li>
</ul>
<h4><a id="16__29"></a>1.6 操作方法(含头不含尾)</h4>
<ul>
<li>不影响原数组，<code>concat()</code>、<code>slice()</code></li>
<li>影响原数组<code>splice(num1,num2,...items)</code>,参数分别是，num1开始的位置,num2删除的数量，item要插入的元素</li>
</ul><h3><a id="17_jsindexOflastIndexOfincludesfindfindIndex_0"></a>1.7 js中数组搜索<code>indexOf</code>,<code>lastIndexOf</code>,<code>includes</code>,<code>find()</code>,<code>findIndex()</code></h3>
<p>主要说一下<code>find()</code>和<code>findIndex()</code></p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> test = [<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>,<span class="hljs-number">12</span>,<span class="hljs-number">38</span>,<span class="hljs-number">1</span>,<span class="hljs-number">56</span>,<span class="hljs-number">7</span>,<span class="hljs-number">1</span>,<span class="hljs-number">674</span>,<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">1</span>,<span class="hljs-number">87</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span> ];
<span class="hljs-keyword">const</span> test_a = test.find(<span class="hljs-function">(<span class="hljs-params">ele:number,index:number,arry:number[]</span>)=&gt;</span>{
   <span class="hljs-built_in">console</span>.log(ele);
   <span class="hljs-built_in">console</span>.log(index);
   <span class="hljs-built_in">console</span>.log(arry)
   <span class="hljs-keyword">return</span> ele&gt;<span class="hljs-number">4</span>
})
<span class="hljs-built_in">console</span>.log(test_a)
</code></div></pre>
<p>其中test_a = 8,<code>find()</code>的作用就是返回匹配的第一个元素，同时ele打印顺序是0,2,8，index打印顺序是0,1,2，arry打印的是test数组，其中可以发现的是，当这个方法找到了匹配项之后便不再继续搜索</p>
<h3><a id="18__13"></a>1.8 迭代方法</h3>
<ul>
<li><code>every()</code>,<code>some()</code>，注意的是这个返回的是boolean值</li>
<li><code>fileter()</code>经常搞混他返回的数组，其实可以字面意思理解——过滤出来，也就是符合的项组成数组返回出来</li>
<li><code>map()</code>,<code>forEach()</code>不赘述</li>
</ul>
<h3><a id="19_js_17"></a>1.9 js数组的并归方法</h3>
<ul>
<li><code>reduce(@a,@b,@c,@d)</code>
<ul>
<li>@a是上一个并归值</li>
<li>@b是当前项</li>
<li>@c是当前项索引</li>
<li>@d数组本身</li>
</ul>
</li>
</ul>
<p>1.实现一个数组各项之和</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> test = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];
<span class="hljs-keyword">let</span> sum = test.reduce(<span class="hljs-function">(<span class="hljs-params">pre,next</span>)=&gt;</span>{
     <span class="hljs-keyword">return</span> pre + next
})
<span class="hljs-built_in">console</span>.log(sum)<span class="hljs-comment">// 10</span>
</code></div></pre>
<ul>
<li><code>reduceRight() </code>只是和<code>reduce()</code>的方向不一样而已</li>
</ul>
<h2><a id="2MapSet_35"></a>2.Map、Set</h2><ul>
<li>Map，es6新出的数据集合类型类似于普通的Object对象，也是键值对存储机制；
<ul>
<li>1.基本方法，<code>get()</code>,<code>has()</code>,<code>set()</code>,<code>delete()</code>,<code>clear()</code>，<code>size()</code></li>
<li>2.选择Map可以节省内存占用，插入性能，提高查找速度，提高了删除速度</li>
<li>3.WeakMap，键只能是对象，WeakMap的key所引用的对象都是弱引用，只要对象的其他引用被删除，垃圾回收机制就会释放该对象占用的内存，从而避免内存泄漏。因此它没有跌代</li>
</ul>
</li>
</ul>
<p>-Set,类似于普通数组对象</p>
<ul>
<li>1.基本方法,和Map类似，只是没了<code>set()</code>，多了一个<code>add()</code>;</li>
<li>2.WeakSet和WeakMap类似</li>
</ul>
<h2><a id="3_45"></a>3.扩展操作符</h2>
<ol>
<li>使用…可以很好的完成对象浅拷贝例如：</li>
</ol>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>];
<span class="hljs-keyword">const</span> arr2 = [...arr1];
</code></div></pre>
<p>2.补充一个数组静态方法：<code>Array.of()</code> 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。</p>
<p>到此js数组的基本基础知识回顾完毕，接下来就是迎接相关算法题了</p>
<h2><a id="4_js_54"></a>4. js常见算法题列举</h2>
<h3><a id="41__leetcode11_55"></a>4.1  盛最多水的容器（leetcode第11题）</h3>
<p>给你 n 个非负整数 a1，a2，…，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。</p>
<p>说明：你不能倾斜容器。</p>
<p>来源：力扣（LeetCode）<a href="https://leetcode-cn.com/problems/container-with-most-water" target="_blank">leeCode</a>。</p>`;
export default data;