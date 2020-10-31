const data:string[] = [];

data[0]=`<h2><a id="_0"></a>资源优化</h2>
<p>这里主要重点是讲图片优化</p>
<h3><a id="1_2"></a>1.图片懒加载</h3>
<h4><a id="11__3"></a>1.1 原生的图片懒加载</h4>
<p>这里我不得不说，谷歌这个公司真的强，进行了各种各样的优化,原生的图片懒加载直接使用loading属性值为lazy即可，使用方式如下:</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">"lazy"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"xxx"</span>&gt;</span>
</code></div></pre>
<h4><a id="12_react_reactlayloadimagecomponent_9"></a>1.2 react的图片懒加载方案 react-lay-load-image-component</h4>
<h4><a id="13_vue_vuelazyload_10"></a>1.3 vue图片懒加载方案 vue-lazyload</h4>
<p><a href="" target="_blank">原生js实现图片懒加载，请点击此链接</a></p>
<h4><a id="13__12"></a>1.3 渐进式图片</h4>
<p>jpg图片分：<mark>Baseline JPEG（基线）<mark>和</mark>Progressive JPEG（渐进式）</mark></p>
<ul>
<li>Baseline JPEG：这种类型的JPEG文件存储方式是按从上到下的扫描方式，把每一行顺序的保存在JPEG文件中。打开这个文件显示它的内容时，数据将按照存储时的顺序从上到下一行一行的被显示出来，直到所有的数据都被读完，就完成了整张图片的显示。如果文件较大或者网络下载速度较慢，那么就会看到图片被一行行加载的效果</li>
<li>Progressive JPEG：和Baseline JPEG一遍扫描不同，Progressive JPEG文件包含多次扫描，这些扫描顺寻的存储在JPEG文件中。打开文件过程中，会先显示整个图片的模糊轮廓，随着扫描次数的增加，图片变得越来越清晰。这种格式的主要优点是在网络较慢的情况下，可以看到图片的轮廓知道正在加载的图片大概是什么</li>
</ul>
<p>渐进式图片的优缺点：<br />
优点是：可以看到图片的轮廓知道正在加载的图片大概是什么<br />
缺点是：渐进式的图片的缺点就是吃用户的CPU和内存</p>
<h4><a id="14__21"></a>1.4 响应式图片</h4>
<p>这个主要是做屏幕适配，对于做响应式webapp很重要<br />
这里也是利用的img标签的一个属性 srcset；img 元素的 srcset 属性用于浏览器根据宽、高和像素密度来加载相应的图片资源。</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">sizes</span>=<span class="hljs-string">"(max-width: 360px) 340px, 128px"</span> 
<span class="hljs-attr">srcset</span>=<span class="hljs-string">"xxx.jpg 375w 3x,xxx1.jpg 950w 2x,xxx2.jpg 1920w 1x"</span>&gt;</span>
</code></div></pre>
<p>描述是： 达到375px 3dpi（设备像素比）的设备采用xxx.jpg; 达到950px 2dpi 采用 xxx1.jpg;达到1920px 1dpi 用xxx2.jpg<br />
这里的描述只是简单描述，实际上，他会根据图片的sizes结合dpi来选择适合的。<br />
上面代码对sizes的描述：表示当视区宽度不大于360px时候，图片的宽度限制为340px，其他情况下，使用128px</p>`;

export default data