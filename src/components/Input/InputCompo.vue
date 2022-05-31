<template>
    <input>
</template>

<script>
export default {
    name:'Input-Compo',
    props:{
        // icon:{type: , require},
        placeHolder:{ type: String, require},
        type:{type: String, require}
    }
}
</script>

<style scoped>
    input{
        width: 220px;
        height: 25px;
        border-radius: 10px;
        box-shadow: 2px 1px 3px #d5dbd9;
        background-color:#F5F5F5;
        padding: auto;
        border: none;
        color:black;
        text-decoration: none;
        font-size: 12px;
        font-family: 'Poppins', sans-serif;        
        text-align: center;
        cursor: pointer;
        margin: 12px 12px;
    }
</style>