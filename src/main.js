import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import {curry} from 'api/helpers'

const curryA= curry(2)

console.log(curryA(3))
new Vue({
    render: h => h(App)
}).$mount('#app')