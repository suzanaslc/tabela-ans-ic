<template>
    <div class="tabela-elem">
        <ve-table border-y="true" fixed-header="true" :columns="columns" :table-data="tableData" :max-height="447"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "registro", key: "a", title: "Registro ANS", align: "center" },
                    { field: "cnpj", key: "b", title: "CNPJ", align: "center" },
                    { field: "hobby", key: "c", title: "Razão Social", align: "center" },
                    { field: "nomefantasia", key: "d", title: "Nome Fantasia", align: "center" },
                    { field: "modalidade", key: "d", title: "Modalidade", align: "center" },
                    { field: "logradouro", key: "d", title: "Logradouro", align: "center" },
                    { field: "numero", key: "d", title: "Número", align: "center" },
                    { field: "complemento", key: "d", title: "Complemento", align: "center" },
                    { field: "bairro", key: "d", title: "Bairro", align: "center" },
                    { field: "cidade", key: "d", title: "Cidade", align: "center" },
                    { field: "uf", key: "d", title: "UF", align: "center" },
                    { field: "cep", key: "d", title: "CEP", align: "center" },
                    { field: "ddd", key: "d", title: "DDD", align: "center" },
                    { field: "fone", key: "d", title: "Telefone", align: "center" },
                    { field: "fax", key: "d", title: "Fax", align: "center" },
                    { field: "email", key: "d", title: "Endereço eletrônico", align: "center" },
                    { field: "representante", key: "d", title: "Representante", align: "center" },
                    { field: "cargo-rep", key: "d", title: "Cargo Representante", align: "center" },
                    { field: "data-registro", key: "d", title: "Data Registro ANS", align: "center" },
                    
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                    
                ],
            };
        },
    };
</script>

<style scoped>
        .tabela-elem{
            width: 100%;
            text-decoration: none;
            font-size: 9px;
            font-family: 'Roboto', sans-serif;        
            text-align: center;
        }
</style>