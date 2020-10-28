const data = [];
data[0] = `<h2><a id="_0"></a>常用的算法思想</h2>
<h3><a id="1__1"></a>1. 枚举算法</h3>
<p>将问题所有的答案全部列举，然后根据条件此答案是否符合，保留合适的，丢弃不合适的<br />
基本步骤：</p>
<ul>
<li>
<ol>
<li>确定枚举对象，枚举范围，判断条件</li>
</ol>
</li>
<li>
<ol start="2">
<li>判断是否是真正解</li>
</ol>
</li>
<li>
<ol start="3">
<li>将可能的范围降低到最小，提高问题解决</li>
</ol>
</li>
</ul>
<p>题目：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。(题库第一题，具体可以点击链接查看)<br/>
<a href="https://leetcode-cn.com/problems/two-sum" target="_blank">来源：力扣（LeetCode）</a>;</p>
<p>这道题就可以完全使用枚举算法，实现如下：</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">enumeration</span>(<span class="hljs-params">nums: <span class="hljs-built_in">number</span>[], target: <span class="hljs-built_in">number</span></span>) </span>{
    <span class="hljs-keyword">const</span> saveIndex: <span class="hljs-built_in">number</span>[] = [];
    <span class="hljs-comment">//首先遍历第一层</span>
    nums.forEach(<span class="hljs-function">(<span class="hljs-params">item: <span class="hljs-built_in">number</span>, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> {
	<span class="hljs-comment">//遍历第一层的同时，对数组后移一位进行遍历相加</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = index + <span class="hljs-number">1</span>; i &lt; nums.length; i++) {
            <span class="hljs-keyword">if</span> (item + nums[i] === target) {
                saveIndex.push(index, i)
            }
        }
    })
    <span class="hljs-keyword">return</span> saveIndex
}
</code></div></pre>
<h3><a id="2__27"></a>2. 递推算法</h3>
<ul>
<li>
<ol>
<li>顺推，从已知条件，逐步推算要解决问题的方法</li>
</ol>
</li>
<li>
<ol start="2">
<li>逆推，从结构出发，推出问题开始的条件</li>
</ol>
</li>
</ul>
<p>这个大部分是解决数列的问题，这个其实和实际编程没多大关系（等我刷leetcode找案例）</p>
<h3><a id="3_33"></a>3.递归算法</h3>
<p>基本步骤：</p>
<ul>
<li>
<ol>
<li>解决问题的时候设计一定要考虑到自己调用自己</li>
</ol>
</li>
<li>
<ol start="2">
<li>必须有一个明确的递归结束条件</li>
</ol>
</li>
<li>
<ol start="3">
<li>注意存储空间，防止栈溢出</li>
</ol>
</li>
<li></li>
</ul>
<p>问题描述：实现一个数的阶乘<br />
比如4的阶层为 4 * 3 * 2 * 1；<br />
所以可以描述为n*（n-1）的一个小过程，可以先实现这个过程，同时明确递归结束条件是n&lt;=1;<br />
代码如下：</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recursion</span>(<span class="hljs-params">num:<span class="hljs-built_in">number</span></span>)</span>{
    <span class="hljs-keyword">if</span>(num&lt;=<span class="hljs-number">1</span>){
        <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>
    }<span class="hljs-keyword">else</span>{
        <span class="hljs-keyword">return</span> num*recursion(num<span class="hljs-number">-1</span>)
    }
}
</code></div></pre>`;
export default data