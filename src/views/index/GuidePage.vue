<template>
<div class="guidepage">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <a href="javascript:;" class="card-body" @click="goPage('obmod')">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">ts</p>
                            <h4 class="mb-0">前端设计模式</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>

                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">8%</span>
                        <span class="text-muted ml-2">更新进度</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a href="javascript:;" class="card-body" @click="goPage('cssbase1')">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">css3</p>
                            <h4 class="mb-0">CSS3体系重建</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11"> 0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a href="javascript:;" class="card-body" @click="goPage('vue2base')">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">Vue2稳固</p>
                            <h4 class="mb-0">关于Vue2的基础点</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a href="javascript:;" class="card-body" @click="goPage('algbase1')">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">算法</p>
                            <h4 class="mb-0">前端算法基础</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">html5</p>
                            <h4 class="mb-0">HTML5体系重建</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">React/ReactNative</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">NODE.JS的使用</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">前端性能优化问题</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">前端安全问题</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">前端自动化测试</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">前端工程化体系设计</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">JS</p>
                            <h4 class="mb-0">Vue3学无止境</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <a class="card-body">
                    <div class="media">
                        <div class="media-body overflow-hidden">
                            <p class="text-truncate font-size-14 mb-2">计算机基础</p>
                            <h4 class="mb-0">前端所需的计算机网络基础</h4>
                        </div>
                        <div class="text-primary">
                            <i class="ri-terminal-box-line font-size-24"></i>
                        </div>
                    </div>
                </a>
                <div class="card-body border-top py-3">
                    <div class="text-truncate">
                        <span class="badge badge-soft-success font-size-11">0% </span>
                        <span class="text-muted ml-2">未更新</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer" style="left: 0;position:fixed">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6">
                    <div class="text-sm-right d-sm-block">
                        践行社会主义 <i class="mdi mdi-heart text-danger"></i> <span>核心价值观</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        goPage(name) {
            this.$router.push({
                name: name
            })
        }
    }
})
</script>

<style lang="less">
a.card-body:active {
    background-color: #FFFFFF;
}

a.card-body:hover {
    background-color: rgba(0, 0, 0, 0.02);
}

.guidepage {
    padding: 0 15px;

    &::after {
        content: '';
        display: block;
        height: 70px;
    }
}
</style>
