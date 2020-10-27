<style lang="less">
.page_view {
    &::before {
        content: '';
        display: block;
        height: 90px;
    }
}

.logo.logo-dark {
    color: #2bb9ad;
    font-size: 22px;
}

.navbar-header {
    max-width: 1130px;

    .collospa {
        display: none;
    }
}

.navbar-header .nav-actived::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 4px solid #2bb9ad;
}

@media screen and (max-width: 960px) {
    .navbar-header {
        max-width: auto;

        .collospa {
            display: block;
        }
    }
}

@media (max-width: 380px) {
    .navbar-brand-box {
        display: block !important;
    }
}
</style>

<template>
<div class="page_view">
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <div class="navbar-brand-box">
                    <a href="https://tangjietop.cn" class="logo logo-dark">
                        <span class="logo-sm">TJ</span>
                        <span class="logo-lg">TANGJIE-BLOG</span>
                    </a>
                </div>
                <button type="button" class="btn btn-sm px-3 font-size-24 header-item collospa" id="vertical-menu-btn">
                    <i class="ri-menu-2-line align-middle"></i>
                </button>
            </div>

            <div class="d-flex">
                <div class="dropdown d-sm-inline-block nav-actived" style="position: relative;">
                    <button type="button" class="btn header-item waves-effect">前端体系构建专辑</button>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ri-notification-3-line"></i>
                        <span class="noti-dot"></span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                        <div class="p-3">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="m-0"> 通知 </h6>
                                </div>
                                <div class="col-auto">
                                    <a href="#!" class="small"> 消息</a>
                                </div>
                            </div>
                        </div>
                        <div data-simplebar style="max-height: 230px;">
                            <a href="" class="text-reset notification-item">
                                <div class="media">
                                    <div class="avatar-xs mr-3">
                                        <span class="avatar-title bg-success rounded-circle font-size-16">
                                            <i class="ri-checkbox-circle-line"></i>
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="mt-0 mb-1">前端设计模式</h6>
                                        <div class="font-size-12 text-muted">
                                            <p class="mb-1">观察者模式更新</p>
                                            <p class="mb-0"><i class="mdi mdi-clock-outline"></i>2020/10/27</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-inline-block user-dropdown">
                    <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="d-xl-inline-block ml-1 eader-profile-user">用户名</span>
                        <i class="mdi mdi-chevron-down d-xl-inline-block"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <!-- item-->
                        <a class="dropdown-item" href="#"><i class="ri-user-line align-middle mr-1"></i> 申请vip</a>
                        <a class="dropdown-item" href="#"><i class="ri-wallet-2-line align-middle mr-1"></i> 我的积分</a>
                        <a class="dropdown-item" href="#"><i class="ri-lock-unlock-line align-middle mr-1"></i> 设置</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-danger" href="#"><i class="ri-shut-down-line align-middle mr-1 text-danger"></i> 退出登录</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div>
        <slot></slot>
    </div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
const $ = (window as any).$;

function initLeftMenuCollapse() {
    $('#vertical-menu-btn').on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('sidebar-enable');
        if ($(window).width() >= 992) {
            $('body').toggleClass('vertical-collpsed');
        } else {
            $('body').removeClass('vertical-collpsed');
        }
    });
    $('body,html').click(function (e) {
        var container = $("#vertical-menu-btn");
        if (!container.is(e.target) && container.has(e.target).length === 0 && !(e.target).closest('div.vertical-menu')) {
            $("body").removeClass("sidebar-enable");
        }
    });
}
export default Vue.extend({
    mounted() {
        initLeftMenuCollapse();
    }
})
</script>
