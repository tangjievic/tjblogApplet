const data:string[] = [];
data[0]=`<h2><a id="VUE2_0"></a>VUE2基本储备</h2>
<h3><a id="1_1"></a>1.模板语法</h3>
<ul>
<li>
<ol>
<li>插值{{}}</li>
</ol>
</li>
<li>
<ol start="2">
<li>列表渲染 v-for</li>
</ol>
</li>
<li>
<ol start="3">
<li>表单输入绑定 v-model</li>
</ol>
</li>
<li>
<ol start="4">
<li>事件处理v-bind/@</li>
</ol>
</li>
<li>
<ol start="5">
<li>class与style绑定（支持对象和数组）</li>
</ol>
</li>
<li>
<ol start="6">
<li>计算属性（cumputed）和监听器（watch）</li>
</ol>
</li>
</ul>
<p>注意点：</p>
<pre><div class="hljs"><code class="lang-javascript">watch:{
   <span class="hljs-comment">//以下这样写是为了初始化就立即执行监听</span>
   test:{
      <span class="hljs-attr">immediate</span>:<span class="hljs-literal">true</span>,
      hanlder(newval,oldval){
         <span class="hljs-built_in">console</span>.log(newval,oldval)
      }	
   }
}
</code></div></pre>
<p>这种写法不会在初始化立即执行监听</p>
<pre><div class="hljs"><code class="lang-javascript">watch：{
   test（newval,oldval）{
      <span class="hljs-built_in">console</span>.log(newval,oldval)
   }
}
</code></div></pre>
<h4><a id="11_29"></a>1.1计算属性和监听器的比较和使用场景</h4>
<p>理论上来说计算属性能做的事情，监听器都能做，监听器更通用，不过还是需要了解他们的最佳实践</p>
<ul>
<li>
<ol>
<li>监听器适合一个数据影响多个数据，计算属性适合一个数据受多个数据的影响</li>
</ol>
</li>
<li>
<ol start="2">
<li>计算属性有缓存，如果计算值没变化就不会重复执行，性能较好</li>
</ol>
</li>
<li>
<ol start="3">
<li>监听器适合执行异步操作或者较大开销的操作</li>
</ol>
</li>
</ul>`

data[1] = `<h3><a id="2_vue2_35"></a>2. vue2生命周期钩子</h3>
<p>三个阶段：<br />
初始化、更新、销毁</p>
<ul>
<li>初始化：beforeCreate、created、beforeMount、mounted</li>
<li>更新：beforeUpdate、updated</li>
<li>销毁：beforeDestroy、destroyed</li>
</ul>
<pre><div class="hljs"><code class="lang-javascript">{    
    beforeCreate(){} <span class="hljs-comment">// 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务</span>
    created(){} <span class="hljs-comment">// 组件初始化完毕，各种数据可以使用，常用于异步数据获取</span>
    beforeMounted(){} <span class="hljs-comment">// 未执行渲染、更新，dom未创建</span>
    mounted(){} <span class="hljs-comment">// 初始化结束，dom已创建，可用于获取访问数据和dom元素</span>

    beforeUpdate(){} <span class="hljs-comment">// 更新前，可用于获取更新前各种状态    </span>
    updated(){} <span class="hljs-comment">// 更新后，所有状态已是最新   </span>
    beforeDestroy(){} <span class="hljs-comment">// 销毁前，可用于一些定时器或订阅的取消    </span>
    destroyed(){} <span class="hljs-comment">// 组件已销毁，作用同上}web全栈架构师</span>
}
</code></div></pre>`

data[2] = `<h3><a id="3_57"></a>3.组件化</h3>
<h4><a id="31_58"></a>3.1组件基础</h4>
<p>组件是可服用的Vue实例，可以在一个通过Vue的根实例中，把这个组件作为自定义的元素来使用<br />
1.创建test组件模板</p>
<pre><div class="hljs"><code class="lang-javascript">&lt;template&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{$parent.$attrs.name}}我是测试组件<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;<span class="hljs-regexp">/template&gt;

&lt;script lang="ts"&gt;
import Vue from 'vue'
export default Vue.extend({})
&lt;/</span>script&gt;
</code></div></pre>
<p>2.编程式创建组件，在全局注册</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">import</span> test <span class="hljs-keyword">from</span> <span class="hljs-string">'../../components/test.vue'</span>;
<span class="hljs-comment">//编程式，创建组件</span>
Vue.component(<span class="hljs-string">'test-component'</span>, {
    render(h) {
        <span class="hljs-keyword">return</span> h(test, {
            <span class="hljs-attr">props</span>: {
                <span class="hljs-attr">name</span>: <span class="hljs-built_in">String</span>
            }
        })
    },
})

</code></div></pre>
<p>3.使用</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">test-component</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"我告诉你："</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">test-component</span>&gt;</span>
</code></div></pre>
<p>这种模式在做一些组件的很有用,组件效果如下：</p>`

data[3] = `<h3><a id="4Vue2api_101"></a>4.Vue2中重要的api</h3>
<p>1.Vue.set和Vue.delete<br />
2.事件相关api：vm.<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>o</mi><mi>n</mi><mo separator="true">,</mo><mi>v</mi><mi>m</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">on,vm.</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.43056em;"></span><span class="strut bottom" style="height:0.625em;vertical-align:-0.19444em;"></span><span class="base"><span class="mord mathit">o</span><span class="mord mathit">n</span><span class="mpunct">,</span><span class="mord mathit" style="margin-right:0.03588em;">v</span><span class="mord mathit">m</span><span class="mord mathrm">.</span></span></span></span>emit,vm.<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>o</mi><mi>n</mi><mi>c</mi><mi>e</mi><mo separator="true">,</mo><mi>v</mi><mi>m</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">once,vm.</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.43056em;"></span><span class="strut bottom" style="height:0.625em;vertical-align:-0.19444em;"></span><span class="base"><span class="mord mathit">o</span><span class="mord mathit">n</span><span class="mord mathit">c</span><span class="mord mathit">e</span><span class="mpunct">,</span><span class="mord mathit" style="margin-right:0.03588em;">v</span><span class="mord mathit">m</span><span class="mord mathrm">.</span></span></span></span>off<br />
3.ref和refs<br />
注意点：ref是作为渲染结果被创建的，在初始化渲染时不能访问；$refs不是响应式的</p>
<h3><a id="5__107"></a>5 过渡和动画</h3>
<p>transition组件搭配 属性name自定义动画<br />
其中<br />
*-enter：进入过渡开始</p>
<p>*-enter-active:进入过渡生效时状态</p>
<p>*-enter-to:进入过渡的结束状态</p>
<p>*-leave:离开时过渡的开始状态</p>
<p>*-leave-active:离开过渡生效的状态</p>
<p>*-leave-to:厉害过渡的结束状态</p>
<h4><a id="51_tansition_122"></a>5.1 tansition组件的最佳实践</h4>
<ol>
<li>使用动画库 Animate.css</li>
</ol>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">enter-active-class</span>=<span class="hljs-string">"animated bounceIn"</span>
<span class="hljs-attr">leave-active-class</span>=<span class="hljs-string">"animated bounceOut"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
</code></div></pre>
<p>2.使用js动画库，比如Veiocity.js</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">transition</span> 
<span class="hljs-attr">v-on:before-enter</span>=<span class="hljs-string">"beforEnter"</span>
<span class="hljs-attr">v-on:enter</span>=<span class="hljs-string">"enter"</span>
<span class="hljs-attr">v-on:after-enter</span>=<span class="hljs-string">"afterEnter"</span>
<span class="hljs-attr">v-on:before-leave</span>=<span class="hljs-string">"beforeLeave"</span>
<span class="hljs-attr">v-on:leave</span>=<span class="hljs-string">"leave"</span>
<span class="hljs-attr">v-on:after-leave</span>=<span class="hljs-string">"afterLeave"</span>
<span class="hljs-attr">v-on:leave-cancelled</span>=<span class="hljs-string">"leaveCancealed"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
</code></div></pre>
<p>方法在methods里面定义，事件可以传参数e；</p>
<ol start="3">
<li>使用tansition-group组件可以对v-for渲染的每个元素添加过渡</li>
</ol>
<h3><a id="6_Vue_143"></a>6 Vue组件复用性</h3>
<h4><a id="61__144"></a>6.1 自定义指令</h4>
<p>以下是用自定义指令模拟权限控制组件</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> role = <span class="hljs-string">'admin'</span>
Vue.directive(<span class="hljs-string">'permission'</span>, {
    inserted(el) {
        <span class="hljs-built_in">console</span>.log(el, <span class="hljs-string">'xxxx'</span>)
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.role !== <span class="hljs-string">'admin'</span>) {
            el.parentElement.removeChild(el)
        }
    }
})
</code></div></pre>
<h4><a id="62_render_157"></a>6.2 渲染函数render</h4>
<h4><a id="63_dom_158"></a>6.3 虚拟dom</h4>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> vnode = h(
   <span class="hljs-string">'h'</span>+level,
    <span class="hljs-keyword">this</span>.$slots.default
)
</code></div></pre>
<h4><a id="64_mixins_165"></a>6.4混入 mixins</h4>
<p>这里我觉得不要使用mixins这个玩意，react都抛弃了这种模式</p>
<p>mixins，主要是来分发Vue组件当中的复用的内容，一个混入可以包含任意组件选项，当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项</p>
<h4><a id="65__169"></a>6.5 插件</h4>
<p>使用Vue.use即可引入插件</p>
<h3><a id="7_Router_172"></a>7. 路由Router</h3>
<h3><a id="8_Vuex_173"></a>8. 状态管理Vuex</h3>`

export default data