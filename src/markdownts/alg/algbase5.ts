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
</ul>`;
export default data;