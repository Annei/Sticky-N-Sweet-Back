<template>
	<el-menu 
		:default-active.sync="activeLink" 
		:mode="mode" 
		@select="goto" 
		:collapse="isCollapse" 
		:unique-opened="true"
		background-color="transparent"
		class="main-navigation-menu"
		:class="{'nav-collapsed':isCollapse}"
	>
		<div class="el-menu-item-group__title" style="padding-top: 4px;"><span>Aplicaciones</span></div>
		<el-menu-item index="/dashboard">
			<i class="mdi mdi-gauge"></i><span slot="title">Dashboard</span>
		</el-menu-item>
		<el-menu-item index="/calendar">
			<i class="mdi mdi-calendar"></i><span slot="title">Calendario</span>
		</el-menu-item>
		<el-menu-item index="/contacts">
			<i class="mdi mdi-account-multiple-outline"></i><span slot="title">Contactos</span>
		</el-menu-item>
		<el-menu-item index="/gallery">
			<i class="mdi mdi-image-multiple"></i><span slot="title">Galería</span>
		</el-menu-item>
		<el-menu-item index="/timeline">
			<i class="mdi mdi-source-commit-local"></i><span slot="title">Chat</span>
		</el-menu-item>

		<div class="el-menu-item-group__title"><span>Componentes</span></div>
		<el-submenu index="tables" popper-class="main-navigation-submenu">
			<template slot="title">
				<i class="mdi mdi-table"></i><span>Tablas</span>
			</template>
			<!--<el-menu-item index="/tables/v2table">
				<span slot="title">V2 Table</span>
			</el-menu-item>-->
			<el-menu-item index="/tables/productos">
				<span slot="title">Productos</span>
			</el-menu-item>
			<el-menu-item index="/tables/tamaños">
				<span slot="title">Tamaños</span>
			</el-menu-item>
			<el-menu-item index="/tables/categorias">
				<span slot="title">Categorías</span>
			</el-menu-item>
			<el-menu-item index="/tables/administradores">
				<span slot="title">Administradores</span>
			</el-menu-item>
			<el-menu-item index="/tables/ventas">
				<span slot="title">Ventas</span>
			</el-menu-item>
		</el-submenu>
		<el-submenu index="maps" popper-class="main-navigation-submenu">
			<template slot="title">
				<i class="mdi mdi-map-marker-radius"></i><span>Maps</span>
			</template>
			<el-menu-item index="/maps/gmaps">
				<span slot="title">G Maps</span>
			</el-menu-item>
			<!--<el-menu-item index="/maps/leaflet">
				<span slot="title">Leaflet</span>
			</el-menu-item>
			<el-menu-item index="/maps/mapbox">
				<span slot="title">Mapbox</span>
			</el-menu-item>-->
			<el-menu-item index="/maps/datamaps">
				<span slot="title">Datamaps</span>
			</el-menu-item>
		</el-submenu>
		<el-submenu index="editors" popper-class="main-navigation-submenu">
			<template slot="title">
				<i class="mdi mdi-pencil-box"></i><span>Editor</span>
			</template>
			<!--<el-menu-item index="/editors/quill">
				<span slot="title">Quill</span>
			</el-menu-item>
			<el-menu-item index="/editors/pell">
				<span slot="title">Pell</span>
			</el-menu-item>-->
			<el-menu-item index="/editors/markdown">
				<span slot="title">Pagina</span>
			</el-menu-item>
		</el-submenu>
		<el-submenu index="charts" popper-class="main-navigation-submenu">
			<template slot="title">
				<i class="mdi mdi-chart-areaspline"></i><span>Graficass</span>
			</template>
			<!--<el-menu-item index="/charts/vuebars">
				<span slot="title">Vue Bars</span>
			</el-menu-item>
			<el-menu-item index="/charts/vuetrend">
				<span slot="title">Vue Trend</span>
			</el-menu-item>
			<el-menu-item index="/charts/vued3network">
				<span slot="title">Vue D3 Network</span>
			</el-menu-item>-->
			<el-menu-item index="/charts/vuevis">
				<span slot="title">Vue Vis</span>
			</el-menu-item>
			<!--<el-menu-item index="/charts/vuechartist">
				<span slot="title">Vue Chartist</span>
			</el-menu-item>
			<el-menu-item index="/charts/vuechartkick">
				<span slot="title">Vue Chartkick</span>
			</el-menu-item>
			<el-menu-item index="/charts/bulmachartjs">
				<span slot="title">Bulma Chartjs</span>
			</el-menu-item>
			<el-menu-item index="/charts/peity">
				<span slot="title">Peity</span>
			</el-menu-item>
			<el-menu-item index="/charts/plotly">
				<span slot="title">Plotly</span>
			</el-menu-item>-->
			<el-menu-item index="/charts/echarts">
				<span slot="title">Echarts</span>
			</el-menu-item>
		</el-submenu>

		

		<div class="el-menu-item-group__title"><span>Paginas</span></div>
		<el-menu-item index="/profile">
			<i class="mdi mdi-account-card-details"></i><span slot="title">Perfil</span>
		</el-menu-item>
		<el-submenu index="authentication" popper-class="main-navigation-submenu">
			<template slot="title">
				<i class="mdi mdi-lock"></i><span>Autenticación</span>
			</template>
			<el-menu-item index="/logout">
				<span slot="title">Login</span>
			</el-menu-item>
			<el-menu-item index="/register">
				<span slot="title">Registrarse</span>
			</el-menu-item>
			<el-menu-item index="/forgot-password">
				<span slot="title">¿Olvidaste tu contraseña?</span>
			</el-menu-item>
		</el-submenu>
		<el-menu-item index="/invoice">
			<i class="mdi mdi-file-document"></i><span slot="title">Facturas</span>
		</el-menu-item>
		<el-menu-item index="/404">
			<i class="mdi mdi-alert-octagon"></i><span slot="title">Erro 404</span>
		</el-menu-item>

	</el-menu>	
</template>


<script>
import { detect } from 'detect-browser'
const browser = detect()

export default {
	name: 'Nav',
	props: ['mode', 'isCollapse'],
	data() {
		return {
			isIe: true,
			isEdge: true,
			activeLink: null
		}
	},
	methods: {
		goto(index, indexPath) {
			if(index.charAt(0) === '/') {
				this.$router.push(index)
				this.$emit('push-page', {page:index})
			}

		},
		setLink(path) {
			this.activeLink = path
		}
	},
	created() {
		if(browser.name !== 'ie') this.isIe = false
		if(browser.name !== 'edge') this.isEdge = false

		this.setLink(this.$router.currentRoute.path)
		this.$router.afterEach((to, from) => {
			this.setLink(this.$router.currentRoute.path)
			//console.log('afterEach', to, from)
		})
		//console.log('this.$router.currentRoute.path', this.$router.currentRoute.path)
	},
	mounted() {
		//console.log('nav component mounted')				
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';

.el-menu {
	border: none;
}
.el-menu::before, .el-menu::after {
	display: none;
}
.el-submenu, .el-menu-item {
	.mdi {
		vertical-align: middle;
		margin-right: 5px;
		display: inline-block;
		width: 24px;
		text-align: center;
		font-size: 18px;
	}
}
</style>

<style lang="scss">
@import '../assets/scss/_variables';

.main-navigation-menu {
	transition: width .5s;

	&:not(.el-menu--collapse) {
		.el-submenu__title, .el-menu-item {
			height: 40px;
			line-height: 40px;
			background-color: transparent !important;
		}

		&:not(.el-menu--horizontal) {
			.el-menu-item, .el-submenu {
				position: relative;
				
				&::before {
					content: '';
					display: block;
					width: 0px;
					height: 1px;
					position: absolute;
					bottom: 10px;
					left: 30px;
					background: $text-color;
					z-index: 1;
					opacity: 0;
					transition: all .7s cubic-bezier(.55,0,.1,1);
				}
				&:hover {
					&::before {
						width: 100px;
						opacity: 1;
						//left: 50px;
						transform: translate(20px, 0);
					}
				}

				&.is-active {
					&::before {
						background: $text-color-accent;
					}
				}
			}
		}

		.el-submenu.is-opened {
			//background: #edf1f6 !important;
			//background: rgba(223, 228, 234, 0.38) !important;
			position: relative;

			&::after {
				content: '';
				display: block;
				width: 2px;
				position: absolute;
				top: 40px;
				bottom: 10px;
				left: 31px;
				background: $text-color;
				z-index: 1;
			}

			&::before {
				display: none;
			}

			.el-menu-item, .el-submenu {
				&::before, &::after {
					display: none;
				}
			}
		}

		.el-menu-item-group__title {
			padding: 15px 0 0px 20px;
			color: transparentize($text-color, 0.65);
		}
	}

	.el-submenu__title, .el-menu-item:not(.is-active) {
		color: $text-color;
		
		i {		
			color: $text-color;
		}
	}

	&.el-menu--collapse {
		.el-menu-item-group__title {
			padding: 15px 0 0px 0px;
			width: 100%;
			text-align: center;
		}

		.el-submenu__title:hover, .el-menu-item:hover {
			background-color: rgba(0, 0, 0, 0.05) !important;
		}
	}

	&.el-menu--horizontal {
		white-space: nowrap;
		/*width: fit-content;
		width: max-content;*/
		overflow: hidden;
		display: table;

		& > * {
			float: inherit !important;
			display: inline-block;
		}
	}

	&.nav-collapsed {
		.el-menu-item,.el-submenu__title {
			& > span {
				display: none;
			}
		}
	}
}

.main-navigation-submenu { 
	.el-menu {
		background: #fff !important;

		.el-menu-item:not(.is-active) {
			color: $text-color;
		}
		.el-menu-item:hover {
			background-color: transparentize($background-color, 0.3) !important;
		}
	}
}
</style>
