const data:string[] = [];
data[0] = `<h2><a id="vue_0"></a>vue组件化</h2>
<h3><a id="1__1"></a>1. 组件常用的通信方式</h3>
<ul>
<li>props、eventbus、vuex、自定义事件</li>
<li>边界情况 <code>$parent</code> 、<code>$children</code> 、<code>$root</code> 、<code>$refs</code>、</li>
<li>provide/inject</li>
<li>非prop特性<code>$attrs</code>、<code>$listeners</code></li>
</ul>
<h4><a id="11_parent_8"></a>1.1 $parent实现兄弟组件之间的参数传递</h4>
<p>首先明确一个this.$parent的意思一般是这个组件的父实例，又vue的<code> $emit</code>是触发当前实例上的事件。附加参数都会传给监听器回调。</p>
<p>恰好vue2上面有一个<code>$on</code>监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。</p>
<p>运用以上三个vue2提供的api，我们可以在子组件A这样写：</p>
<pre><code class="lang-vue">&lt;template&gt;
    &lt;div&gt;我是组件A:监听B得到的参数——{{params}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data(){
        return{
            params:''
        }
    },
    mounted(){
        this.$parent.$on('bEvent',(value)=&gt;{
            // 接受b组件带过来的值
            this.params = value
        })
    }
}
&lt;/script&gt;
</code></pre>
<p>子组件B这样写</p>
<pre><code class="lang-vue">&lt;template&gt;
    &lt;button class=&quot;btn btn-outline-success waves-effect waves-light&quot; @click=&quot;handClick&quot;&gt;我是组件B,我触发事件&lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data(){
        return {
            index:1
        }   
    },
    methods:{
        handClick(){
            this.$parent.$emit('bEvent','我是b组件带过来的值' + this.index++)
        }
    }
}
&lt;/script&gt;
</code></pre>
<p>效果如下：点击即可查看效果<br />
其实这就是一个发布订阅模式，借用父组件发布一个事件，然后子组件中去订阅父组件发布的事件，达到监听事件传值的效果</p>`;

data[1] =`<h3><a id="12_children_0"></a>1.2 $children</h3>
<p>这个api就是当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用 $children 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源。</p>
<p>这样在父组件可以调取子组件的方法，其实 也可以直接在父组件用<code>console.dir(this.$children[0])</code>去看这个子元素的可用方法和属性</p>
<h3><a id="13_attrs_5"></a>1.3 $attrs</h3>
<p>简单来说就是没有在组件内定义props但是组件上有绑定了这个属性，那么这个属性值就能用这个拿到，例如：上面的组件a没有在props里面定义testAttrs，但是用this.$attrs.testAttrs就能拿到值</p>
<pre><code class="lang-language">&lt;test-a :testAttrs=&quot;888666&quot;&gt;&lt;/test-a&gt;
</code></pre>
<h2><a id="2slot_10"></a>2.slot插槽</h2>
<p>关于插槽的基本用法，不用多赘述，主要是在插槽作用域上。这个才是重点。</p>
<p>这边是以vue2.6以上版本。</p>
<p>例如上面的B组件我们改一下：</p>
<pre><code class="lang-vue">&lt;template&gt;
    &lt;button class=&quot;btn btn-outline-success waves-effect waves-light&quot; @click=&quot;handClick&quot;&gt;
        &lt;slot name='btntitle' :text=&quot;text&quot;&gt;&lt;/slot&gt;
    &lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data(){
        return {
            index:1,
            text:'我是组件b，我触发事件'
        }   
    },
    methods:{
        handClick(){
            this.$parent.$emit('bEvent','我是b组件带过来的值' + this.index++)
        }
    }
}
&lt;/script&gt;
</code></pre>
<p>然后父组件调用</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:btntitle</span>=<span class="hljs-string">"slotProps"</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{slotProps.text}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></div></pre>
<p>可以这么简单的理解，这个插槽作用域就是，先用slot占一个位然后用v-bind去绑定一个属性值，等插入的元素到了就把这个属性值给他</p><h3><a id="_46"></a>附录</h3>
<p>基于vue2的testForm组件可点击下面链接</p>`
export default data;
