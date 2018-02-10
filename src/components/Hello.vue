<template>
	<div>
		<div class="greeting">Hello {{ name }}{{ exclamationMarks }}</div>
		<button @click="decrement">-</button>
		<button @click="increment">+</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: ['name', 'initialEnthusiasm'],
	data() {
		return {
			enthsiasm: this.initialEnthusiasm,
		}
	},
	methods: {
		increment() {
			this.enthsiasm++;
		},
		decrement() {
			if (this.enthsiasm > 1) {
				this.enthsiasm--;
			}
		}
	},
	computed: {
		exclamationMarks(): string {
			return Array(this.enthsiasm + 1).join("!");
		}
	}
});
</script>

<style>
.greeting {
	font-size: 20px;
}
</style>
