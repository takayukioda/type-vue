<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: 'HellowWorld',
	data() {
		return {
			msg: 'Trying a sample of Vue2.5 using TypeScript2.7',
		}
	}
});
</script>

<style scoped>
h1, h2 {
	font-weight: normal;
}
</style>
