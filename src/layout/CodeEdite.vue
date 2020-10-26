<template>
	<div>
		<!-- ========== Left Sidebar Start ========== -->
            <div class="vertical-menu">

                <div data-simplebar class="h-100">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu list-unstyled" id="side-menu">
                            <li class="menu-title">{{moduletitle}}</li>

                            <li v-for="(item,index) in menuarray" :key="index" :class="[item.name===selectmenu?'mm-active':'']">
                                <a href="index.html" :class="['waves-effect',item.name===selectmenu?'active':'']">
                                    <i :class="item.icon"></i>
                                    <span>{{item.title}}</span>
                                </a>
                            </li>

                            <!--<li>
                                <a href="calendar.html" class=" waves-effect">
                                    <i class="ri-calendar-2-line"></i>
                                    <span>Calendar</span>
                                </a>
                            </li>-->
                        </ul>
                    </div>
                    <!-- Sidebar -->
                </div>
            </div>
            <!-- Left Sidebar End -->
			<div class="main-content">
				<div class="page-content">
					<div class="container-fluid">
						<!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 class="mb-0">观察者模式</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item" @click="goGuidPage"><span>菜单选择页</span></li>
                                            <li class="breadcrumb-item active">设计模式</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- end page title -->
                        
                        <div class="card"><div class="card-body"><slot></slot></div></div>
					</div>
				</div>
				<footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6"></div>
                            <div class="col-sm-6">
                                <div class="text-sm-right d-none d-sm-block">
                                    践行社会主义 <i class="mdi mdi-heart text-danger"></i> 核心价值观
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
			</div>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	props:{
		moduletitle:String,
		menuarray:Array,
		selectmenu:String
	},
	methods:{
		goGuidPage(){
			this.$router.push({
				name:'home'
			})
		}
	},
	mounted(){
		const $ = window.$;
		$("#side-menu").metisMenu();
	}
})
</script>

<style lang="less" scoped>
	.breadcrumb-item{
		cursor: pointer;
		&:hover{
			color: #2bb9ad;
		}
		&.active{
			cursor: default;
			&:hover{
				color: #74788d;
			}
		}
	}
	.page-content{
		padding-top: 0;
	}
	.vertical-menu .mm-active{
		background-color: rgba(0,0,0,0.02);
	}
</style>