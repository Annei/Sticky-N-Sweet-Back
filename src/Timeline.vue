<template>
	<div class="page-timeline scrollable only-y">
		<div class="page-header">
			<h1>Chat</h1>
			
		</div>
	</div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

export default {
	name: 'TimelinePage',
	mounted() {
		//console.log('Timeline mounted')
	},
	components: {
		Timeline,
		TimelineItem,
		TimelineTitle
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables';

.timeline-box {
	padding: 50px;
}
.timeline {
	max-width: 1200px;
	margin: 0px auto;
	font-family: inherit;
}
.timeline, .timeline-title {
	color: $text-color;
	line-height: 1.4;
	cursor: default;
}
.append {
    font-size: .8em;
    margin-top: 3px;
    color: transparentize($text-color, .5);
}
.icon-time {
	width: 32px;
	margin-top: 2px;
	border-radius: 50%;
}
</style>

