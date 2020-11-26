const data:string[] = [];
data[0]=`<h2><a id="Contextredux_0"></a>Context和redux</h2>
<h3><a id="1_ReactContext_1"></a>1. React的Context</h3>
<p>一般来说 react的context相当于vue的provide/inject。vue的provide/inject概念好懂吧，基本差不多的</p>
<h4><a id="11_3"></a>1.1初步使用</h4>
<p>说明：mainlayout.tsx是祖先；header.tsx是子代</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">// mainylayout.tsx</span>
<span class="hljs-keyword">import</span> React, { createContext } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
......
<span class="hljs-comment">// 第一步先创建上下文并导出</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> MainLogoText = createContext(<span class="hljs-string">'TANGJIE'</span>)；
<span class="hljs-keyword">const</span> MainLayout:React.FC = <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"page_layout"</span>&gt;</span>
	    // 第二部 创建的上下文作为该上下文的提供者包裹header组件
            <span class="hljs-tag">&lt;<span class="hljs-name">MainLogoText.Provider</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"TANGJIE-BLOG"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">Header</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Header</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">MainLogoText.Provider</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    )
}
</span></code></div></pre>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">//header.tsx</span>
<span class="hljs-keyword">import</span> { MainLogoText } <span class="hljs-keyword">from</span> <span class="hljs-string">'../../layout/MainLayout'</span>;
<span class="hljs-comment">//第三步 在header.tsx里面使用content</span>
<span class="hljs-keyword">const</span> Header:React.FC = <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-keyword">const</span> mainlogotext = useContext(MainLogoText);
    <span class="hljs-keyword">return</span>(
        &lt;header className="page-topbar"&gt;
            &lt;div className="navbar-header"&gt;
                &lt;div className="d-flex"&gt;
                    &lt;div className="navbar-brand-box"&gt;
                        &lt;a href="https://tangjietop.cn" className="logo"&gt;
                            &lt;span className="logo-sm"&gt;TJ&lt;/span&gt;
                            &lt;span className="logo-lg"&gt;{mainlogotext}&lt;/span&gt;
                        &lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
             &lt;div&gt;
        &lt;/header&gt;)
}
</code></div></pre>
<p>如果在tsx中组件类型不一样怎么办？这时候就需要消费者来做</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">//使用消费者</span>
<span class="hljs-keyword">import</span> { MainLogoText } <span class="hljs-keyword">from</span> <span class="hljs-string">'../../layout/MainLayout'</span>;
<span class="hljs-keyword">const</span> Header:React.FC = <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
    <span class="hljs-keyword">return</span>(
        &lt;header className="page-topbar"&gt;
            &lt;div className="navbar-header"&gt;
                &lt;div className="d-flex"&gt;
                    &lt;div className="navbar-brand-box"&gt;
                        &lt;a href="https://tangjietop.cn" className="logo"&gt;
                            &lt;span className="logo-sm"&gt;TJ&lt;/span&gt;
                           &lt;MainLogoText.Consumer&gt;
                                {
                                    (ctx)=&gt;{
                                        console.log(ctx)
                                    return (&lt;span className="logo-lg"&gt;{ctx}&lt;/span&gt;)
                                    }
                                }
                            &lt;/MainLogoText.Consumer&gt;
                        &lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
             &lt;div&gt;
        &lt;/header&gt;)
}
</code></div></pre>`;

export default data
