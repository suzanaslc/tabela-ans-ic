<template>
    <div class="tabela-elem">
        <ve-table 
        :border-y=true 
        :fixed-header=true 
        :ref="tabela"
        :columns="columns" 
        :table-data="tableData" 
        :height="447"
        :sort-option="sortOption"
        />
        
    </div>
</template>

<script>

    export default {

        data() {
            return {

                sortOption: {
                    sortAlways: true,
                    sortChange: (params) => {
                        console.log("sortChange::", params);
                        this.sortChange(params);
                    },
                },

                searchValue: "",
                columns: [

                    { field: "registro", key: "a", title: "Registro ANS", align: "center",sortBy: ""},
                    { field: "cnpj", key: "b", title: "CNPJ", align: "center", filterCustom: {
                            defaultVisible: true,
                            render: ({closeFn}) => {
                                return (
                                    <div class="custom-name-filter">
                                        <input 
                                            value={this.searchValue}
                                            on-input={(e) => (this.searchValue = e.target.value)}
                                            placeholder="Buscar"
                                        />
                                        <div class="custom-name-filter-operation">
                                            <span class="name-filter-cancel"
                                                on-click={() => this.searchCancel(closeFn)}
                                            >
                                                Cancelar
                                            </span>
                                            <span class="name-filter-confirm"
                                                on-click={() => this.searchConfirm(closeFn)}
                                            >
                                                Buscar
                                            </span>
                                        </div>
                                    </div>
                                );
                            },
                            filterIcon: () => {
                                return <ve-icon name="search" />;
                            },
                            
                        },
                    },
                    { field: "razaosocial", key: "c", title: "Razão Social", align: "center" },
                    { field: "nomefantasia", key: "d", title: "Nome Fantasia", align: "center"},
                    { field: "modalidade", key: "e", title: "Modalidade", align: "center" },
                    { field: "logradouro", key: "f", title: "Logradouro", align: "center" },
                    { field: "numero", key: "g", title: "Número", align: "center" },
                    { field: "complemento", key: "h", title: "Complemento", align: "center" },
                    { field: "bairro", key: "i", title: "Bairro", align: "center" },
                    { field: "cidade", key: "j", title: "Cidade", align: "center" },
                    { field: "uf", key: "k", title: "UF", align: "center" },
                    { field: "cep", key: "l", title: "CEP", align: "center" },
                    { field: "ddd", key: "m", title: "DDD", align: "center" },
                    { field: "fone", key: "n", title: "Telefone", align: "center" },
                    { field: "fax", key: "o", title: "Fax", align: "center" },
                    { field: "email", key: "p", title: "Endereço eletrônico", align: "center" },
                    { field: "representante", key: "q", title: "Representante", align: "center" },
                    { field: "cargorep", key: "r", title: "Cargo Representante", align: "center" },
                    { field: "dataregistro", key: "s", title: "Data Registro ANS", align: "center"},
                    { field: "",
                        key: "t",
                        title: "Ações",
                        width: "",
                        center: "left",
                        
                        renderBodyCell: ({rowIndex }) => {
                            return (
                                <span>
                                    <button
                                        class="button-demo"
                                        on-click={() => this.deleteRow(rowIndex)} 
                                    >
                                        Deletar
                                    </button>
                                </span>
                            );
                        },
                    }
                ],
                
                tableData: [],

                sourceData: [
                
                    {
                        registro:"418374",
                        cnpj: "11828089000103",
                        razaosocial:" CAIXA DE ASSIST�NCIA DO SETOR DE ENERGIA -EVIDA -ASSIST�NCIA � SA�DE",
                        nomefantasia:"E-VIDA",
                        modalidade:"Autogest�o",
                        logradouro:"QUADRA 704/705",
                        numero:"BLOCO C",
                        complemento: "LOJA 48",
                        bairro:"ASA NORTE",
                        cidade:"Bras�lia",
                        uf:"DF",
                        cep:"70730630",
                        ddd:"61",
                        fone:"39668300",
                        fax:"39668302",
                        email:"governanca@evida.org.br",
                        representante:"ELI PINTO DE MELO JUNIOR",
                        cargorep: "PRESIDENTE",
                        dataregistro:"12/01/2012",
                        
                    },
                    {
                        registro:"417734",
                        cnpj: "7525246000126",
                        razaosocial:"ABBESS - ASSOCIA��O BRASILEIRA DE BENEFICIOS E SEGURIDADE SOCIAL",
                        nomefantasia:" ",
                        modalidade:"Administradora de Benef�cios",
                        logradouro:"AV RIO BRANCO",
                        numero:"120",
                        complemento: "PAVIMENTO 4 - SALA 426",
                        bairro:"CENTRO",
                        cidade:"Rio de Janeiro",
                        uf:"RJ",
                        cep:"20040001",
                        ddd:"21",
                        fone:"22704971",
                        fax:" ",
                        email:"comercial@abbess.com.br",
                        representante:"MARCELO BRAND�O ROCHA",
                        cargorep: "PRESIDENTE E TESOUREIRO",
                        dataregistro:"20/12/2010",
                        
                    },
                    {
                        registro:"314668",
                        cnpj: "17505793000101",
                        razaosocial:"ABERTTA SA�DE - ASSOCIA��O BENEFICENTE DOS EMPREGADOS DA ARCELORMITTAL NO BRASIL",
                        nomefantasia:"ABERTTA SA�DE",
                        modalidade:"Autogest�o",
                        logradouro:"AV. BERNARDO MONTEIRO",
                        numero:"831",
                        complemento: "Subsolo, 2� andar e 3� andar",
                        bairro:"SANTA EFIG�NIA",
                        cidade:"Belo Horizonte",
                        uf:"MG",
                        cep:"30150281",
                        ddd:"31",
                        fone:"32484300",
                        fax:"32484377",
                        email:"abertta.ans@arcelormittal.com.br",
                        representante:"JOS� ANT�NIO GIMENEZ",
                        cargorep: "PRESIDENTE",
                        dataregistro:"28/12/1998",
                        
                    },

                       {                    
                        registro:"419621",
                        cnpj: "17687511000126",
                        razaosocial:"ABPLUS ADMINISTRADORA DE BENEF�CIOS LTDA.",
                        nomefantasia:"DataSaude ",
                        modalidade:"Administradora de Benef�cios",
                        logradouro:"AVENIDA JOS� DA SILVA NETO",
                        numero:"120",
                        complemento: "BLOCO 4, SALA 403",
                        bairro:"BARRA DA TIJUCA",
                        cidade:"Rio de Janeiro",
                        uf:"RJ",
                        cep:"22775056",
                        ddd:" ",
                        fone:" ",
                        fax:" ",
                        email:"contato@abplus.com.br",
                        representante:"ROBERTO CARLOS MACHADO RODRIGUES",
                        cargorep: "ADMINISTRADOR",
                        dataregistro:"13/11/2014",
                        
                    },

                    {                    
                        registro:"418901",
                        cnpj: "10458298000131",
                        razaosocial:"AD SALUTE ADMINISTRADORA DE BENEF�CIOS EIRELI",
                        nomefantasia:"AD SALUTE",
                        modalidade:"Administradora de Benef�cios",
                        logradouro:"RUA BUENOS AIRES",
                        numero:"68",
                        complemento: "SALA 2901",
                        bairro:"CENTRO",
                        cidade:"Rio de Janeiro",
                        uf:"RJ",
                        cep:"20070020",
                        ddd:"21",
                        fone:"35531692",
                        fax:" ",
                        email:"LEONARDO@UNIMEDICASAUDE.COM",
                        representante:"JO�O CARMO DA SILVEIRA",
                        cargorep: "ADMINISTRADOR",
                        dataregistro:"13/06/2013",
                        
                    },
                ],

                }
            },
        
            methods: {
                
                 deleteRow(rowIndex) {
                    this.tableData.splice(rowIndex, 1);
                },

                //sort
                sortChange(params) {
                    this.tableData.sort((a, b) => {
                        (params.registro) 
                        if (params.registro === "asc") {
                            return a.registro - b.registro;
                        } else if (params.registro === "desc") {
                            return b.registro - a.registro;
                        } else {
                            return 0;
                        }
                    });
                },

                //search
                search() {
                    const searchValue = this.searchValue;
                    this.tableData = this.sourceData.filter(
                        (x) =>
                            !searchValue.length ||
                            x.cnpj.toLowerCase().includes(searchValue.toLowerCase()),
                    );
                },

                
                searchCancel(closeFn) {
                    closeFn();
                },

                
                searchConfirm(closeFn) {
                    this.search();
                    closeFn();
                },
            },
        
            created() {
                this.tableData = this.sourceData.slice(0);
            }
    }
</script>

<style>
            .button-demo{
            color: white;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            background:#4682B4;
            border: none;
            border-radius: 5px;
            padding: 10px;

            }
            
            .tabela-elem{
            width: 100%;
            text-decoration: none;
            font-size: 9px;
            font-family: 'Roboto', sans-serif;        
            text-align: center;
            }

            .custom-name-filter {
            padding: 10px;
            font-family: 'Roboto', sans-serif;
            }

            .custom-name-filter-operation {
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
                
                margin: 10px 10px 0px 0;
            }

            .name-filter-cancel {
                float: left;
                font-size: 12px;
                padding: 5px;
                border: none;
                border-radius: 5px;
                color:white;
                background:#B0C4DE;
                font-family: 'Roboto', sans-serif;
            }

            .name-filter-confirm {
                float: right;
                font-size: 12px;
                padding: 5px;
                border: none;
                border-radius: 5px;
                color:white;
                background:#4682B4;
                font-family: 'Roboto', sans-serif;
            }
</style>