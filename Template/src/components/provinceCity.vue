<template>
    <div>
        <area-select v-model="selected"></area-select>
        <area-cascader v-model="selected2"></area-cascader>
        <div class="areainp"><area-cascader type='text' :level='1' v-model="value1" placeholder="请选择地址"></area-cascader></div>
    </div>
</template>
<script>

</script>
<style scoped>

</style>
    