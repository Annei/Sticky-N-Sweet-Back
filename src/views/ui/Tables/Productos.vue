<template>
    <div class="page_tablas_products">
        <div class="page-table scrollable">
            <div class="page-header">
                <h1>Tabla de Productos</h1>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }"><i class="mdi mdi-home-outline"></i></el-breadcrumb-item>
                    <el-breadcrumb-item>Componentes</el-breadcrumb-item>
                    <el-breadcrumb-item>Tablas</el-breadcrumb-item>
                    <el-breadcrumb-item>Productos</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div><!--Fin de la header-->
        <!--Inicio de mi div search-->
        <div class="page-tables scrollable">
            <div class="search-header">
                <el-row :gutter="50">
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="success" @click="dialogFormVisible = true"><i class="el-icon-circle-plus" > Añadir Producto</i></el-button>
                            <!--Form-->
                            <el-dialog title="Añadir Producto" :visible.sync="dialogFormVisible">
                                    <el-form :model="form">
                                        <el-form-item label="Producto" :label-width="formLabelWidth">
                                        <el-input v-model="form.name" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Código" :label-width="formLabelWidth">
                                        <el-input v-model="form.name2" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Titulo" :label-width="formLabelWidth">
                                        <el-input v-model="form.name3" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Descripción" :label-width="formLabelWidth">
                                        <el-input v-model="form.name4" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Precio" :label-width="formLabelWidth">
                                        <el-input v-model="form.name5" auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Categoría" :label-width="formLabelWidth">
                                        <el-select v-model="form.region" placeholder="Categoría">
                                            <el-option label="Estandar" value="Estandar"></el-option>
                                            <el-option label="Personalizado" value="Personalizado"></el-option>
                                        </el-select>
                                        </el-form-item>
                                    </el-form>
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                                        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
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
            <el-table-column prop="productos" label="Producto" width="100"></el-table-column>
            <el-table-column prop="codigo" label="Código" width="100"></el-table-column>
            <el-table-column prop="titulo" label="Titulo" width="100"></el-table-column>
            <el-table-column prop="descripcion" label="Descripción" width="300"></el-table-column>
            <el-table-column prop="precio" label="Precio" width="80"></el-table-column>
            <el-table-column prop="categorias" label="Categoria" width="100"></el-table-column>
            <el-table-column prop="accion" label="Acción" width="220">
                <template slot-scope="row">
							<div class="custom-action-row">
                                <template>
                                    
                                    <el-button type="danger" @click="deleteRow(row,tableData)" ><i class="el-icon-delete" ></i></el-button>
                                    <el-button type="success" @click="print(row)" round><i class="el-icon-view"></i></el-button>
                                    <el-button type="primary" @click="handleEdit(row,tableData)"><i class="el-icon-edit"></i></el-button>
                                    
                                </template>
							</div> 
                </template>     
            </el-table-column>
        </el-table><!--Termina el borde de la tabla-->
    </div>
</template>

<!-- Inicia script-->

<script>

import Papa from 'papaparse'
import * as FS from 'file-saver'


export default {
    data(){
        return{
            tableData: [{
                productos: 'Estandar',
                codigo: '4565132',
                titulo: 'Arnold',
                descripcion: 'Es arnold en sticker',
                precio: '$15.00',
                categorias: 'Cartoon'
            },
            {
                productos: 'Estandar',
                codigo: '4565132',
                titulo: 'Arnold',
                descripcion: 'Es arnold en sticker',
                precio: '$15.00',
                categorias: 'Cartoon'
            
            },
            {
                productos: 'Estandar',
                codigo: '4565132',
                titulo: 'Arnold',
                descripcion: 'Es arnold en sticker',
                precio: '$15.00',
                categorias: 'Cartoon'
            },
             {
                 productos: 'Estandar',
                codigo: '4565132',
                titulo: 'Arnold',
                descripcion: 'Es arnold en sticker',
                precio: '$15.00',
                categorias: 'Cartoon'
            
            },
            {
                 productos: 'Estandar',
                codigo: '4565132',
                titulo: 'Arnold',
                descripcion: 'Es arnold en sticker',
                precio: '$15.00',
                categorias: 'Cartoon'
            
            },
            {
                 productos: 'Estandar',
                codigo: '4565132',
                titulo: 'Arnold',
                descripcion: 'Es arnold en sticker',
                precio: '$15.00',
                categorias: 'Cartoon'
            
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form:{
                productos: '',
                codigo: '',
                titulo: '',
                descripcion: '',
                precio: '',
                categorias: '',            
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        print(row){
            let message = ''
            for(let k in row){
                message += k+': <strong>'+row[k]+'</strong><br>'
            }
            this.$alert(message, row.productos || 'Message', {
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


<style lang="scss" scoped>
@import '../../../assets/scss/_variables';
.page-table {
	&.overflow {
		overflow: auto;
	}
	
	.table-box {
		overflow: hidden;
	}
}
</style>

<style lang="scss">
@import '../../../assets/scss/_variables';
.page-table {
	.custom-action-row {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		.el-button {
			padding: 1px 5px;
		}
	}

	.toolbar-box {
		margin-top: 20px;

		.search-box {
			& > div {
				width: 20px;
				display: inline-block;
			}

			margin-bottom: 10px;

			i {
				display: inline-block;
				width: 22px;
			}

			input {
				outline: none;
				background: transparent;
				border: none;
				font-size: 15px;
				position: relative;
				padding: 0;
				margin-left: -20px;
				display: inline-block;
				padding-left: 20px;
				box-sizing: border-box;
				top: -1px;
				width: 100%;
				color: $text-color;
			}

			.icons-tot {
				margin-right: 20px;
			}
		}

		.pagination-box {
			width: 120px;
			margin: 0 15px;

			.select-box {
				width: 70px;
				display: inline-block;
			}

			.label {
				width: 50px;
				display: inline-block;
			}

			.el-input__inner {
				height: 22px;
				border: none;
				background: transparent;
				font-size: 16px;
				text-align: right;
				font-family: inherit;
				padding-right: 20px;
				color: $text-color;
			}

			.el-input__suffix {
				right: -3px;

				.el-select__caret {
					color: transparentize($text-color, 0.7);
				}
			}
		}

		a, button {
			padding: 0;
			margin: 0 15px;
			background: transparent;
			border: none;
			outline: none;
			font-family: inherit;
			font-size: inherit;
			cursor: pointer;

			border-bottom: 1px solid;
			text-decoration: none;
			color: $text-color;
			&:hover {
				opacity: .6;
			}
		}

		a {
			margin-right: 0;
		}
	}

	.sel-string {
		.sel {
			background: transparentize($text-color, 0.8);
			border-radius: 5px;
			text-transform: uppercase;
		}
	}
}

@media (max-width: 768px) {
	.page-table {
		.toolbar-box {
			display: block;
			overflow: hidden;
			font-size: 80%;
		
			& > * {
				display: inline-block;
				min-width: 120px;
				height: 22px;
				background: rgba(0, 0, 0, 0.04);
				padding: 4px;
				margin: 3px !important;
			}
		}
	}
}
</style>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

        