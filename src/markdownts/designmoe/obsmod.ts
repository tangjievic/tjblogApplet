const data = [];
data[0] = `<h1><a id="_0"></a>观察者模式</h1>
<h1><a id="_1"></a>打撒旦法</h1>
<pre><div class="hljs"><code class="lang-c++">&lt;<span class="hljs-keyword">template</span>&gt;
	&lt;code-edite&gt;
		&lt;markdown-body :htmlstirng=<span class="hljs-string">"data1"</span>&gt;&lt;/markdown-body&gt;
	&lt;/code-edite&gt;
&lt;/<span class="hljs-keyword">template</span>&gt;

&lt;script lang=<span class="hljs-string">"ts"</span>&gt;
<span class="hljs-keyword">import</span> Vue from <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> CodeEdite from <span class="hljs-string">'../../layout/CodeEdite.vue'</span>;
<span class="hljs-keyword">import</span> MarkdownBody from <span class="hljs-string">'../../components/MarkdownBody.vue'</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody
    },
	data(){
		<span class="hljs-keyword">return</span>{
			data1:<span class="hljs-string">'&lt;h1&gt;&lt;a&gt;&lt;/a&gt;观察者模式&lt;/h1&gt;'</span>
		}
	}
})
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;
</code></div></pre>`

export default data
