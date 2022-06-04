<template>
  <div id="app">
    
    <MenuBar/>
    
    <div class="container">
      <p id="title">Relação de Operadoras Ativas ANS</p>
      
      <div class="menu">
        <HideShow/>
        

        <div class="tabela">
          <ExampleTable/>
        </div>

      </div>
      
    </div>
    
    <router-view/>
    
  </div>
</template>

<script>

import MenuBar from '@/components/MenuBar'
import ExampleTable from '@/components/Table/ExampleTable.vue'





export default {
    components: { MenuBar, ExampleTable } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body{
    background-color: #E5E5E5;
  }
  .container{
    background-color: #FFF;
    border: 0;
    display: block;
    margin: auto;
    margin-top: 88px;
    padding: 12px;
    position: relative;
    align-items:center;
}
  #title{
    font-family: 'Roboto', sans-serif; 
    width: 600px;
    
  }
  .botoes{
    text-align: right;
    display: inline-flex;
    justify-content:right;
    position: relative;
  }
  .pesquisa{
    display: inline-flex;
    justify-content:right;
    position: relative;
    
  }
  .menu{
    margin-right: 12px;
  }

  .tabela{
    padding: 0;
    position: relative;
    margin-top: 29px;
    margin: 12px;

  }
  
</style>
