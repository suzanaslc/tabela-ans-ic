<template>
  <div id="app">
    
    <MenuBar/>
    
    <div class="container">
      <p id="title">Relação de Operadoras Ativas ANS</p>
      
      <div class="menu">
        <div class="botoes">
        <ButtonCompo value="Excluir" :callback="() => alert('Clicado')"></ButtonCompo>
        <ButtonCompo value="Editar" :callback="() => alert('Clicado')"></ButtonCompo>
        <ButtonCompo value="Novo" :callback="() => alert('Clicado')"></ButtonCompo>
      </div>

      <div class="pesquisa">
      <InputCompo :placeHolder='Pesquisar' type="text"/>
      </div>

      <div class="tabela">
        <ExampleTable></ExampleTable>
      </div>
      </div>
      
    </div>
    
    
    <router-view/>
    
  </div>
</template>

<script>

import MenuBar from '@/components/MenuBar'
import ButtonCompo from '@/components/Buttons/ButtonCompo'
import InputCompo from '@/components/Input/InputCompo'
import ExampleTable from './components/Table/ExampleTable'



export default {
    components: { MenuBar, ButtonCompo, InputCompo, ExampleTable }
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
    margin: auto;
    margin-top: 88px;
    padding: 12px;
    position: relative;
    align-items:center;
}
  #title{
    font-family: 'Roboto', sans-serif; 
    width: 600px;
    float: left;
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
    margin: 12px 12px 12px 12px;

  }
  
</style>
