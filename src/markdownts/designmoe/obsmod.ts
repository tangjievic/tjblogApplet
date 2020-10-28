const data:string[] = [];
data[0] = `<h2><a id="_0"></a>观察者模式</h2>
<h3><a id="1__1"></a>1. 简单描述</h3>
<h4><a id="11__2"></a>1.1 适用场景</h4>
<p>观察者模式主要是用来实现订阅逻辑操作。适用场景是当对象一对多的交互关系时，就可以考虑观察者模式</p>
<h4><a id="12__4"></a>1.2 简单实现</h4>
<p>例如：校长和老师，校长给老师发布任务就是一对多，以此为例代码如下</p>
<pre><div class="hljs"><code class="lang-javascript">interface Teacher {
    <span class="hljs-attr">obj</span>: TeacherAttrs;
    actions: <span class="hljs-function">(<span class="hljs-params">msg</span>) =&gt;</span> <span class="hljs-keyword">void</span>
}
interface TeacherAttrs {
    <span class="hljs-attr">name</span>: string;
    teach: <span class="hljs-function">(<span class="hljs-params">msg: string</span>) =&gt;</span> <span class="hljs-keyword">void</span>
}
<span class="hljs-comment">//校长</span>
<span class="hljs-keyword">const</span> schoolMaster = {
    <span class="hljs-attr">teacher</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>() <span class="hljs-keyword">as</span> <span class="hljs-built_in">Set</span> &lt; Teacher &gt; ,
    <span class="hljs-attr">addObs</span>: <span class="hljs-function">(<span class="hljs-params">obj: TeacherAttrs, actions: (msg ? : string</span>) =&gt;</span> <span class="hljs-keyword">void</span>) =&gt; {
        schoolMaster.teacher.add({
            <span class="hljs-attr">obj</span>: obj,
            <span class="hljs-attr">actions</span>: actions
        })
    },
    <span class="hljs-attr">publish</span>: <span class="hljs-function">(<span class="hljs-params">name: string, msg: string</span>) =&gt;</span> {
        schoolMaster.teacher.forEach(<span class="hljs-function">(<span class="hljs-params">obj: Teacher</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (name === obj.obj.name) {
                obj.actions.call(obj.actions, msg)
            }
        })
    }
}
<span class="hljs-comment">//老师</span>
<span class="hljs-keyword">const</span> tacheterOne = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'黄棉通'</span>,
    <span class="hljs-attr">teach</span>: <span class="hljs-function">(<span class="hljs-params">msg: string</span>) =&gt;</span> {
        Vue.prototype.$message.success(msg)
    }
}

<span class="hljs-keyword">const</span> tacheterTwo = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'郑琴'</span>,
    <span class="hljs-attr">teach</span>: <span class="hljs-function">(<span class="hljs-params">msg: string</span>) =&gt;</span> {
        Vue.prototype.$message.success(msg)
    }
}
<span class="hljs-comment">//校长观察到小黄工作很累</span>
schoolMaster.addObs(tacheterOne, () =&gt; {
    Vue.prototype.$message.error(<span class="hljs-string">'小黄，你现在要开始摸鱼了'</span>)
})
<span class="hljs-comment">// 校长观察到琴姐在摸鱼</span>
schoolMaster.addObs(tacheterTwo, tacheterTwo.teach)

...
<span class="hljs-comment">//以下是btn调用的事件，具体实现省略</span>
giveToHang() {
    schoolMaster.publish(<span class="hljs-string">'黄棉通'</span>, <span class="hljs-string">''</span>);
}
giveZheng() {
    schoolMaster.publish(<span class="hljs-string">'郑琴'</span>, <span class="hljs-string">'琴姐，努力写代码'</span>)
}
</code></div></pre>
<p>点击下面按钮即可体验</p>`

data[1] =`<hr />
<h3><a id="2_8"></a>2.观察者模式实例</h3>
<p>其实vue2的数据驱动就是观察者模式的最好应用例子，这里我简单的实现以下vue中对观察者模式的应用</p>
<h4><a id="21_vue2_10"></a>2.1 vue2响应式的实现</h4>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">const</span> defineReactive = <span class="hljs-function">(<span class="hljs-params">obj: object, key: string | number, val: any</span>) =&gt;</span> {
    <span class="hljs-comment">//对传入的object进行访问拦截</span>
    <span class="hljs-built_in">Object</span>.defineProperty(obj, key, {
        get() {
            <span class="hljs-keyword">return</span> val
        },
        set(newval) {
            <span class="hljs-keyword">if</span> (newval !== val) {
                val = newval
            }
        }
    })
}
</code></div></pre>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">文档地址：Object.defineProperty()</a> 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">// 简单的响应更新函数</span>
<span class="hljs-keyword">const</span> update = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> {
    <span class="hljs-keyword">const</span> testDom: Element | <span class="hljs-literal">null</span> = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'.testdom_obsrect'</span>);

    <span class="hljs-keyword">if</span> (testDom) {
        testDom.innerHTML = (obj <span class="hljs-keyword">as</span> any).test;
    }
}
</code></div></pre>
<p>使用</p>
<pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">// 对test对象进行添加一个test属性</span>
defineReactive(test, <span class="hljs-string">'test'</span>, <span class="hljs-string">''</span>);
<span class="hljs-comment">// 定时对test对象进行更改</span>
setInterval(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">if</span> ((test <span class="hljs-keyword">as</span> any).test &lt;= <span class="hljs-number">10</span>) {
        (test <span class="hljs-keyword">as</span> any).test++;
    } <span class="hljs-keyword">else</span> {
        (test <span class="hljs-keyword">as</span> any).test--;
    }
}, <span class="hljs-number">2000</span>)
</code></div></pre><p>实现效果如下(test.test的值随时间进行变化)：</p>`

data[2] = `<h3><a id="3_64"></a>3.总结</h3>
<p>观察者模式通用化设计如下：</p>
<ol>
<li>给发布者一般要有这几个模块：添加观察者，存储观察者列表，发布消息。这个类可以后面补充删除观察者</li>
<li>观察者一般要有：订阅主体，更新自身状态</li>
</ol>`
export default data
