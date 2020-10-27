<template>
<code-edite moduletitle="设计模式" selectmenu="obmod" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <div class="obs_box">
        <a-button type="primary" style="margin-right:10px" @click="giveToHang">给小黄发布摸鱼任务</a-button>
        <a-button type='primary' @click="giveZheng">给琴姐发布写代码任务</a-button>
    </div>
    <markdown-body :htmlstirng="textdata[1]"></markdown-body>
    <div class="testdom_obsrect"></div>
    <markdown-body :htmlstirng="textdata[2]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/designmoe/obsmod';
import Menudata from './menudata';

interface Teacher {
    obj: TeacherAttrs;
    actions: (msg) => void
}
interface TeacherAttrs {
    name: string;
    teach: (msg: string) => void
}
const schoolMaster = {
    teacher: new Set() as Set < Teacher > ,
    addObs: (obj: TeacherAttrs, actions: (msg ? : string) => void) => {
        schoolMaster.teacher.add({
            obj: obj,
            actions: actions
        })
    },
    publish: (name: string, msg: string) => {
        schoolMaster.teacher.forEach((obj: Teacher) => {
            if (name === obj.obj.name) {
                obj.actions.call(obj.actions, msg)
            }
        })
    }
}

const tacheterOne = {
    name: '黄棉通',
    teach: (msg: string) => {
        Vue.prototype.$message.success(msg)
    }
}

const tacheterTwo = {
    name: '郑琴',
    teach: (msg: string) => {
        Vue.prototype.$message.success(msg)
    }
}

schoolMaster.addObs(tacheterOne, () => {
    Vue.prototype.$message.error('小黄，你现在要开始摸鱼了')
})

schoolMaster.addObs(tacheterTwo, tacheterTwo.teach)

export default Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody
    },
    data() {
        return {
            textdata: data,
            menudata: Menudata
        }
    },
    methods: {
        giveToHang() {
            schoolMaster.publish('黄棉通', '');
        },
        giveZheng() {
            schoolMaster.publish('郑琴', '琴姐，努力写代码')
        }
    },
    mounted() {
        //这里是模拟数据vue数据响应式
        //这里测试的时候 test是要具有test属性的
        const test = {};
        const defineReactive = (obj: object, key: string | number, val: any) => {
            //对传入的object进行访问拦截
            Object.defineProperty(obj, key, {
                get() {
                    return val
                },
                set(newval) {
                    if (newval !== val) {
                        val = newval
                    }
                    update(obj)
                }
            })
        }
        const update = obj => {
            const testDom: Element | null = document.querySelector('.testdom_obsrect');

            if (testDom) {
                testDom.innerHTML = (obj as any).test;
            }
        }

        // 对test对象进行添加一个test属性
        defineReactive(test, 'test', '');
        // 定时对test对象进行更改
        setInterval(() => {
            if ((test as any).test <= 10) {
                (test as any).test++;
            } else {
                (test as any).test--;
            }
        }, 2000)
    }
})
</script>

<style lang="less" scoped>
.testdom_obsrect {
    margin: 10px 0;
    padding: 10px;
    background-color: fade(#2bb9ad, 30%);
}

.obs_box {
    margin: 10px 0;
}
</style>
