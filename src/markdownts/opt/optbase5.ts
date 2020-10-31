const data:string[] = [];

data[0] = `<h2><a id="_0"></a>构建优化</h2>
<p>其实使用webpack4 它里面就已经做好了很多默认的优化配置</p>
<h3><a id="1babelpolyfill_2"></a>1.@babel/polyfill优化</h3>
<p>背景：为了做游览器兼容，一般会引入这个插件，问题是我们需要兼容的东西不是很多，不需要整个polyfill做兼容，那么我们应该怎么做？</p>
<p>来到babel.config.js文件在presets下这样做</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-string">'@babek/preset-env'</span>,
{
    <span class="hljs-attr">modulse</span>: <span class="hljs-string">'false'</span>,
    <span class="hljs-string">"targets"</span>: {
        <span class="hljs-string">"browsers"</span>: [<span class="hljs-string">"&gt;0.25%"</span>]
    },
    <span class="hljs-string">"useBuiltIns"</span>: <span class="hljs-string">"usage"</span>,
    <span class="hljs-string">"bugfixes"</span>: <span class="hljs-literal">true</span>
}
</code></div></pre>
<p>targets：browser表示不兼容市场上多少百分百的游览器</p>
<h2><a id="2_webpack_18"></a>2 .webpack的依赖优化</h2>
<h3><a id="21noParse_19"></a>2.1noParse</h3>
<p>提高构建速度，直接通知webpack忽略比较大的库（被忽略的库不能用import，require，define的引入方式）<br />
使用方式如下（在webpack.config.js）：</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-built_in">module</span>:{
  <span class="hljs-attr">noParse</span>:<span class="hljs-regexp">/lodash/</span>
}
</code></div></pre>
<h3><a id="22DllPlugin_27"></a>2.2DllPlugin</h3>
<p>避免打包时对不变的库重复构建（哪些是不变的库，比如vue，vue-router这些，从项目开始到结束，这些库都不会发生改变）</p>
<h3><a id="23_SplitChunksPlugin__29"></a>2.3 SplitChunksPlugin 提取公有代码，拆分业务代码和第三方库</h3>
<h3><a id="24_webpack_30"></a>2.4 webpack对资源的持久化</h3>
<p>这部分如果是使用现在的单页面开发，其实其手脚架都已经帮忙做了；其基本原理就是生产打包的资源文件都有一个哈希值，</p>
<h3><a id="3_webpack_33"></a>3. webpack性能分析工具</h3>
<h4><a id="31_webpack_chart_34"></a>3.1 webpack chart</h4>
<h4><a id="32_sourcemapexplorer_35"></a>3.2 source-map-explorer</h4>
<h4><a id="33_speedmeasurewebpackplugin_36"></a>3.3 speed-measure-webpack-plugin</h4>
<h3><a id="4_service_workers__38"></a>4. service workers 离线应用</h3>`;
export default data