<template>
    <div class="me">
        <div class="tabs">
            <ul>
                <!--<router-link :to="{name: 'Default'}" tag="li" >默认内容</router-link>-->
                <router-link :to="{name:'Collection'}" tag="li" >我的收藏</router-link>
                <router-link :to="{name:'Trace'}" tag="li">我的足迹</router-link>
                <router-link :to="{name:'user',params:{id:param}}" tag="li">用户</router-link>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{

            }
        },
        props: {
            param: {
                type: Number,
                default: 222
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    .me{
        .tabs{
            & > ul, & > ul > li {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            & > ul{
                display: flex;
                border-bottom: #cccccc solid 1px;
                & > li{
                    flex: 1;
                    text-align: center;
                    padding: 10px;
                    &.router-link-active {
                        color: #D0021B;
                    }
                }
            }
        }
    }
</style> 