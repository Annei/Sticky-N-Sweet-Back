<template>
    <div class="page_tablas_products">
        <div class="page-table scrollable">
            <div class="page-header">
                <h1>Tabla de Productos</h1>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }"><i class="mdi mdi-home-outline"></i></el-breadcrumb-item>
                    <el-breadcrumb-item>Componentes</el-breadcrumb-item>
                    <el-breadcrumb-item>Tablas</el-breadcrumb-item>
                    <el-breadcrumb-item>Ventas</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div><!--Fin de la header-->

        <!--Inicio de mi div search-->
        <div class="page-tables scrollable">
            <div class="search-header">
                <el-row :gutter="50">
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="success" @click="dialogFormVisible = true"><i class="el-icon-circle-plus" > Añadir Venta</i></el-button>
                            <!--Form-->
                            <el-dialog title="Añadir Ventas" :visible.sync="dialogFormVisible">
                                    <el-form :model="form">
                                        <el-form-item label="N° de Orden" :label-width="formLabelWidth">
                                        <el-input v-model="form.name2" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Código de Usuario" :label-width="formLabelWidth">
                                        <el-input v-model="form.name4" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Sticker" :label-width="formLabelWidth">
                                        <el-input v-model="form.name4" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Estado" :label-width="formLabelWidth">
                                        <el-input v-model="form.name4" auto-complete="off"></el-input>
                                        </el-form-item>
                                        
                                    </el-form>
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="dialogFormVisible = false">Cancelar</el-button>
                                        <el-button type="primary" @click="dialogFormVisible = false">Confirmar</el-button>
                                    </span>
                                </el-dialog>
                                <!--Termina el form-->

                             </div>
                         </el-col>
                    <el-col :span="5">
                    </el-col>
                </el-row>
                 <el-row :gutter="20">
                        <!--eSTO ES UN ESPACIO VACIO-->
                </el-row>
            </div>
        </div>    
            
        <!--Inicia mi tabla de productos-->
        <el-table :data="tableData" stripe style="width:100%">
            <el-table-column prop="no_orden" label="# de Orden" width="100"></el-table-column>
            <el-table-column prop="code_usuario" label="Código de Usuario" width="200"></el-table-column>
            <el-table-column prop="tipo" label="Tipo de Sticker" width="200"></el-table-column>
            <el-table-column prop="fecha" label="Fecha" width="100"></el-table-column>
            <el-table-column prop="estado" label="Estado" width="200"></el-table-column>
            <el-table-column prop="accion" label="Acción" width="250">
                <template slot-scope="row">
							<div class="custom-action-row">
								    <el-button type="danger" @click="deleteRow(row,tableData)" ><i class="el-icon-delete" ></i></el-button>
                                    <el-button type="success" @click="print(row)" round><i class="el-icon-view"></i></el-button>
                                    <el-button type="primary" @click="handleEdit(row,tableData)"><i class="el-icon-edit"></i></el-button>
							</div> 
						</template>
            </el-table-column>
        </el-table><!--Termina el borde de la tabla-->
    
    </div>

</template>

<!-- Inicia script-->

<script>
export default {
    data(){
        return{
            tableData: [{
               no_orden: '#45555',
               code_usuario: '75698',
               tipo: 'Estandar',
               fecha: '07/12/18',
               estado: 'Enviado',
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form:{
                 no_orden: '',
                code_usuario: '',
                tipo: '',
                fecha: '',
                 estado: ''
                      
            },
            formLabelWidth: '120px'
        }
    },
    methods:{
        print(row){
            let message = ''
            for(let k in row){
                message += k+': <strong>'+row[k]+'</strong><br>'
            }
            this.$alert(message, row.full_name || 'Message', {
				dangerouslyUseHTMLString: true 
			});
        },
        deleteRow(index,rows){
            rows.splice(index,1);
            }
        },
        handleClick(){
            console.log('click');
        },
        downloadCSV() {
			var dataCSV = Papa.unparse(this.listFiltered, {header: true});
			const blob = new Blob([dataCSV], {type: 'text/csv;charset=utf-8'})
			FS.saveAs(blob, 'list.csv')
        },
        handleEdit(index, row){
            console.log(index, row);
        }

    
}
</script>

