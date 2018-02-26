import Vue from 'vue';
import App from './App';
import router from './router';

let v = new Vue({
	el: "#app",
	router,
	components: { App },
	template: '<App/>'
});
