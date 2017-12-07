// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Flash from 'vue-flash'

// global flash messaging component
Vue.component('flash', Flash)
window.events = new Vue()
window.flash = function(message, type) {
    window.events.$emit('flash', message, type)
}
console.log(Vue.options.components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
