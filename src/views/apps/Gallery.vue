<template>
	<div class="page-gallery scrollable only-y">
		<div class="page-header header-accent card-base card-shadow--small">
			<h1>Galería</h1>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }"><i class="mdi mdi-home-outline"></i></el-breadcrumb-item>
				<el-breadcrumb-item>Aplicaciones</el-breadcrumb-item>
				<el-breadcrumb-item>Galeria</el-breadcrumb-item>
			</el-breadcrumb>
			<h4>Todas las fotos fueron tomadas <a href="https://pexels.com/" target="_blank" class="white-text">stickynsweet.com</a></h4>
		</div>

		<div class="photo-list">
			<profile-gallery></profile-gallery>
		</div>
	</div>
</template>

<script>
import ProfileGallery from '@/components/Profile/ProfileGallery'

export default {
	name: 'Gallery',
	mounted() {
		//console.log('Gallery mounted')
	},
	components: {
		ProfileGallery
	}
}
</script>

<style lang="scss" scoped>
/*.photo-list {
	//padding: 20px;
}*/
</style>

