<template>
    <div>
        <h1>标题</h1>
        <div class="box">
            <li v-for="item in list">{{item}}</li>

        </div>

    </div>
</template>
<script>

    export default{
        data(){
            return{
                list:["vue","angular","react"]
            }
        }
    }
</script>
<style lang="less">
    @width:100%;
    @height:200px;
    @my_color:#ac0;
    .box{
        width:@width;
        height:@height;
        background:@my_color;
        li{
            background: red;
            text-align:left;
        }
    }
    .btn{
        width:100px;
        height:30px;
        background:#ccc;

    }
    p{
        color:red;
        .btn;
    }

</style>