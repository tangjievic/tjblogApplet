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
                    <a class="card-body">
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
                    <a class="card-body">
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
        </div>
        <footer class="footer" style="left: 0;">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6"></div>
                    <div class="col-sm-6">
                        <div class="text-sm-right d-sm-block">
                            践行社会主义 <i class="mdi mdi-heart text-danger"></i> By <span>核心价值观</span>
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
	methods:{
		goPage(name){
			this.$router.push({
				name:name
			})
		}
	}
})
</script>

<style>
	a.card-body:active{
		background-color: #FFFFFF;
	}
	a.card-body:hover{
		background-color: rgba(0,0,0,0.02);
	}
	.guidepage{
		padding:0 15px;
	}
</style>