const data:string[] = [];
data[0] = `<h2><a id="_0"></a>分治算法</h2>
<h3><a id="1_1"></a>1.背景</h3>
<p>适用于处理数据相当多，求解过程比较复杂，直接求解耗时的问题</p>
<h4><a id="11_3"></a>1.1算法建立基本步骤</h4>
<ul>
<li>
<ol>
<li>分解，把问题分解成若干个规模较小的同类问题</li>
</ol>
</li>
<li>
<ol start="2">
<li>求解，当子问题划分的足够小，用比较简单的方式解决</li>
</ol>
</li>
<li>
<ol start="3">
<li>合并，按原问题的要求，将子问题的解逐层合并构成原问题的解</li>
</ol>
</li>
</ul>
<h3><a id="2_8"></a>2.实例</h3>
<h4><a id="21_LeetCodehttpsleetcodecncomproblemsmedianoftwosortedarrays_9"></a>2.1 问题一、寻找两个正序数组的中位数<a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/" target="_blank">来源LeetCode</a></h4>
<p>给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数<br />
文字描述求解过程：</p>
<ol>
<li>首先进行数组合并排序</li>
<li>然后判断数组长度基偶性</li>
<li>求解，额 这个我其实没用到分治算法，但是我找题的标签显示的是分治，后面再找找吧！！！</li>
</ol>
<p>代码实现：</p>
<pre><div class="hljs"><code class="lang-typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">findMedianSortedArrays</span>(<span class="hljs-params">nums1: <span class="hljs-built_in">number</span>[], nums2: <span class="hljs-built_in">number</span>[]</span>): <span class="hljs-title">number</span> </span>{
    <span class="hljs-keyword">let</span> result: <span class="hljs-built_in">number</span>;
    <span class="hljs-keyword">let</span> num12 = nums1.concat(nums2).sort(<span class="hljs-function">(<span class="hljs-params">n1, n2</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> n1 - n2
    });
    <span class="hljs-keyword">if</span> (num12.length === <span class="hljs-number">0</span>) {
        result = <span class="hljs-number">0</span>;
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (num12.length % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>) {
        result = (num12[(num12.length / <span class="hljs-number">2</span>) - <span class="hljs-number">1</span>] + num12[(num12.length / <span class="hljs-number">2</span>)]) / <span class="hljs-number">2</span>
    } <span class="hljs-keyword">else</span> {
        result = num12[(num12.length + <span class="hljs-number">1</span>) / <span class="hljs-number">2</span> - <span class="hljs-number">1</span>];
    }
    <span class="hljs-keyword">return</span> result
}
</code></div></pre>;`
export default data