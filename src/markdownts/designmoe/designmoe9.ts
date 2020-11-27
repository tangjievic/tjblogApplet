const data:string[] = [];
data[0] = `<h2><a id="_0"></a>迭代器模式</h2>
<p>第一个明确一个点迭代器模式是干什么的？</p>
<p>就我的理解是:迭代器模式是为了统一遍历方式出现的。这个模式的出现能够使得不管什么样的数据结构的集合都能顺序访问遍历整个数据集合的成员。</p>
<p>例如：<br />
js中数组的数据和js对象是不一样的；因此他们遍历的时候也是有不同的方法去遍历自身；在js中array已经有了这么一个（<code>Symbol.iterator</code>）属性</p>
<p>所以为js中的obj添加一个<code>Symbol.iterator</code>，那么就能实现for…of去遍历，这样就统一了遍历方法。</p>
<h3><a id="1_9"></a>1.模式的应用场景</h3>
<p>前面介绍了关于迭代器模式的结构与特点，下面介绍其应用场景，迭代器模式通常在以下几种情况使用。</p>
<ul>
<li>当需要为聚合对象提供多种遍历方式时。</li>
<li>当需要为遍历不同的聚合结构提供一个统一的接口时。</li>
<li>当访问一个聚合对象的内容而无须暴露其内部细节的表示时。</li>
</ul>
<h3><a id="2_es6Iterable_14"></a>2. es6的Iterable</h3>
<p>因为是前端所以还是贴近前端去讲；<br />
为什么es要实现迭代器模式呢？最主要的就es6+中有序的数据集合类型比较多——<code>Array</code>，<code>String</code>,<code>Map</code>,<code>Set</code>,<code>WeakMap</code>,<code>WeakSet</code>,<code>argument</code>,<code>Nodelist</code>等等，这样拥有一个统一的遍历方式就显得非常重要了。</p>
<ul>
<li>这些数据集合都有一个<code>Symbol.iterator</code>属性</li>
<li>执行这个函数就会返回一个迭代器</li>
<li>有一个next方法顺序迭代子元素</li>
</ul>
`
export default data;