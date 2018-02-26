import Vue from 'vue';
import App from './App.vue';
import router from './router';

let v = new Vue({
	el: "#app",
	router,
	components: { App },
	template: '<App/>'
});
