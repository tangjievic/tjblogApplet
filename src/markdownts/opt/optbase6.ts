const data:string[] = [];
data[0]=`<h3><a id="_0"></a>最佳实践</h3>
<h3><a id="1_svg_1"></a>1. 移动端采用svg图片</h3>
<p>vue里面如何优雅的使用svg<a href="https://www.jianshu.com/p/9e2678b69836" target="_blank">请戳这里</a></p>
<h3><a id="2_flexfloat_3"></a>2. 使用flex布局（相比较float布局性能更好）</h3>
<h3><a id="3_link_relpreload_4"></a>3. link 标签使用rel=preload进行提前预加载</h3>
<h3><a id="4__5"></a>4. 大型单页面的性能瓶颈：</h3>
<p>js下载+解析+执行</p>
<p>ssr：牺牲了后台数据传输，处理时间来补救Fisrt Paint，而且实现比较复杂</p>
<p>Pre-rendering打包时提前渲染页面，没有服务端参与</p>
<h3><a id="5_Windowing_12"></a>5. 使用Windowing（窗口化）,提升列表性能</h3>
<p>其react当中React Window目前是一个非常不错的组件，vue我暂时没有找到</p>
<h3><a id="6_SkeletonPlaceholder_14"></a>6. 使用Skeleton（骨架屏）/Placeholder（占位符）</h3>

ArtwriteElment.vue?39c3:199 <h3><a id="_0"></a>最佳实践</h3>
<h3><a id="1_svg_1"></a>1. 移动端采用svg图片</h3>
<p>vue里面如何优雅的使用svg<a href="https://www.jianshu.com/p/9e2678b69836" target="_blank">请戳这里</a></p>
<h3><a id="2_flexfloat_3"></a>2. 使用flex布局（相比较float布局性能更好）</h3>
<h3><a id="3_link_relpreload_4"></a>3. link 标签使用rel=preload进行提前预加载</h3>
<h3><a id="4__5"></a>4. 大型单页面的性能瓶颈：</h3>
<p>js下载+解析+执行</p>
<p>ssr：牺牲了后台数据传输，处理时间来补救Fisrt Paint，而且实现比较复杂</p>
<p>Pre-rendering打包时提前渲染页面，没有服务端参与</p>
<h3><a id="5_Windowing_12"></a>5. 使用Windowing（窗口化）,提升列表性能</h3>
<p>其react当中React Window目前是一个非常不错的组件，vue我暂时没有找到</p>
<h3><a id="6_SkeletonPlaceholder_14"></a>6. 使用Skeleton（骨架屏）/Placeholder（占位符）</h3>
<p>什么是首屏加载，怎么优化？<br />
背景：web增量加载的特点决定了首屏性能不会很完美；过长的白屏影响用户体验和存留；</p>
<ol>
<li>有意义的绘制（0-2s/2-4）</li>
<li>最大有意义内容的绘制（0-2s/2.5-4）</li>
<li>交互时间（0-3.8/2.8-7.3）</li>
</ol>
<p>首屏问题主要是：</p>
<ol>
<li>资源体积太大<br />
资源压缩；传输压缩；代码拆分；treeshaking，http2，缓存</li>
<li>首页内容太多<br />
路由/组件/内容 lazy-loading，预渲染/ssr，inline css</li>
<li>加载顺序不合适<br />
prefetch，preload</li>
</ol>
<h3><a id="7_js_29"></a>7. js管理内存，和内存泄漏</h3>
<p>js的垃圾回收：</p>
<ol>
<li>局部变量，函数执行完，没有闭包应用，就会被标记回收</li>
<li>全局变量，直至游览器卸载页面时释放</li>
</ol>
<p>原理：</p>
<ol>
<li>引用计数（无法解决循环引用的问题）</li>
<li>标记清除（从根节点进行扫描，看所以的节点是否能被访问到，如果有一些不能访问就进行标记，然后回收掉）</li>
</ol>
<p>因此此优化点：</p>
<ol>
<li>避免全局变量的产生</li>
<li>避免反复运行引发大量的闭包</li>
<li>避免脱离的DOM元素</li>
</ol>`;
export default data