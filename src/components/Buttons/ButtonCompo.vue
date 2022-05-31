<template>
    <div>
        <button @click="callback">{{value}}</button>
    </div>
</template>

<script>
export default {
    name:'Button-Compo',
    props:{
        value: {type:String, require},
        callback:{type:Function, default: ()=> {}},
    
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    button{
        position: relative;
        width: 65px;
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
    button.hover{
        background-color:#b8f1da;
    }
</style>