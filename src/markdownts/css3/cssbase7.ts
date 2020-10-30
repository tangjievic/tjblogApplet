const data:string[] = [];
data[0]=`<h2><a id="css_0"></a>css其他忽视点</h2>
<h3><a id="_1"></a>1.元素的显示和隐藏</h3>
<p>1.使用&lt; script &gt;标签隐藏：元素不可见，不占据空间，辅助设备无法访问，同时不渲染</p>
<p>2.使用display：none隐藏：资源加载，dom可以访问，元素不可见，不占据空间，辅助设备无法访问</p>
<p>3.希望元素不可见，同时不占据空间，辅助设备无法访问，但是显隐的时候可以用transition淡入淡出的效果则可以用：visibility: hidden;position: absolute;组合</p>
<p>下面示例代码如下，点击按钮即可体验：</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">"['textbox_1',show?'fadeIn':'fadeOut']"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></div></pre>
<pre><div class="hljs"><code class="lang-less"><span class="hljs-selector-class">.textbox_1</span> {
    <span class="hljs-attribute">background-color</span>: pink;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">transition</span>: visibility <span class="hljs-number">0.5s</span> ease-in, opacity <span class="hljs-number">0.5s</span> ease-in;
}
<span class="hljs-selector-class">.fadeIn</span> {
    <span class="hljs-attribute">visibility</span>: visible;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
}
<span class="hljs-selector-class">.fadeOut</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">visibility</span>: hidden;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
}
</code></div></pre>`;

data[1] = `<p>4.直接使用visibility: hidden，元素不可见，不能点击，辅助设备无法访问，但是空间占据</p>
<p>5.希望元素不可见，不能点击，不占据空间，但是键盘可访问，则可以用clip裁剪</p>
<pre><div class="hljs"><code class="lang-less"><span class="hljs-selector-class">.clip</span>{
   <span class="hljs-attribute">position</span>:absolut;
   <span class="hljs-attribute">clip</span>:rect(<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>)
}
</code></div></pre>
<p>6.利用z-index=-1设置隐藏：不能点击，但占据空间，键盘可访问<br />
7.设置透明度隐藏 opacity：0；filter:Alpha(opacity=0)</p>
<h3><a id="2_41"></a>2.界面样式</h3>
<h4><a id="21_outline_42"></a>2.1 outline属性</h4>
<p>表示元素的轮廓，但是不可以全局设置outline：0 none；很多交互性ui控件是通过outline高亮实现的</p>
<p>outline有一个很强大的属性，就是不占据任何空间，不会影响页面布局，使用头像裁剪的镂空效果就可以用这个来做</p>
<h3><a id="3_47"></a>3.流向的改变</h3>
<h4><a id="31direction_unicodebidi_48"></a>3.1改变水平流向的direction （搭档unicode-bidi）</h4>
<p>默认值是ltr；left-to-right 从左到右<br />
可选值rtl</p>
<h4><a id="32__writingmode_51"></a>3.2 改变纵向规则 writing-mode</h4>
<p>一般用于文字的纵向排版，同时也能构建垂直居中</p>`

export default data