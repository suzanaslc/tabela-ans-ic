<template>
    <div class="menu-bar">
        <LogoIc/>
    </div>
</template>

<script>

import LogoIc from '@/components/LogoIc.vue'

export default {
    components:{LogoIc}
}
</script>


<style>
    .menu-bar{
        text-align:center;
        padding-top: 9px;
        position: absolute;
        width: 100%;
        height: 64px;
        left: 0px;
        top: 0px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
</style>
