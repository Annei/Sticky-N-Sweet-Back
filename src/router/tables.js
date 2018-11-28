import Tables from '../views/ui/Tables/Tables.vue'
import Table from '../views/ui/Tables/Table.vue'
import VGTable from '../views/ui/Tables/VGTable.vue'
import TableElement from '../views/ui/Tables/TableElement.vue'
import V2TablePage from '../views/ui/Tables/V2TablePage.vue'
import Productos from '../views/ui/Tables/Productos.vue'
import layouts from '../layout'
import Tamaños from '../views/ui/Tables/Tamaños.vue'
import Categorias from '../views/ui/Tables/Categorias.vue'
import Administradores from '../views/ui/Tables/Administradores.vue'
import Ventas from '../views/ui/Tables/Ventas.vue'
//import Edits from '../views/ui/Tables/Edits.vue'

export default {
	path: '/tables',
	name: 'tables',
	component: Tables,
	meta: {
		auth: true,
		layout: layouts.navLeft
	},
	children: [
		{
			path: 'simple-table',
			name: 'simple-table',
			component: Table,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				tags: ['simple']
			}
		},
		{
			path: 'vgtable',
			name: 'vgtable',
			component: VGTable,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Vue Good Table',
				tags: ['advanced']
			}
		},
		{
			path: 'table-element',
			name: 'table-element',
			component: TableElement,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Element UI Table',
				tags: ['advanced']
			}
		},
		{
			path: 'v2table',
			name: 'v2table',
			component: V2TablePage,
			meta: {
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'V2 Table',
				tags: ['advanced']
			}
		},
		{
			path: 'productos',
			name: 'productos',
			component: Productos,
			meta:{
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Productos Tabla',
				tags: ['advanced']
			}
		},
		{
			path: 'tamaños',
			name: 'tamaños',
			component: Tamaños,
			meta:{
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Tamaños Tabla',
				tags: ['advanced']

			}
		},
		{
			path: 'categorias',
			name: 'categorias',
			component: Categorias,
			meta:{
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Categorias Tabla',
				tags: ['advanced']

			}
		},
		{
			path: 'administradores',
			name: 'administradores',
			component: Administradores,
			meta:{
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Administradores Tabla',
				tags: ['advanced']

			}
		},
		{
			path: 'ventas',
			name: 'ventas',
			component: Ventas,
			meta:{
				auth: true,
				layout: layouts.navLeft,
				searchable: true,
				title: 'Ventas Tabla',
				tags: ['advanced']

			}
		}
		
	]
}

