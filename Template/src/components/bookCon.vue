<template>
    <div class="content">
        <span>"{{now()}}"</span>
        <p>"{{reverseMsg()}}"</p>
    </div>
</template>
<script>
    export default{
        computed:{

        },
        data(){
            return{
                msg:"hello"
            }
        },
        methods:{
            reverseMsg:function(){
                return this.msg.split('').reverse().join('')
            },
            now:function(){
                return new Date()
            }
        }
    }
</script>
<style scoped>
    .content{
        font-size:30px;
    }
</style>
    