// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'

Vue.config.productionTip = false

/* eslint-disable*/
new Vue({
    el: '#app',
    components: { TodoList },
    template: '<TodoList/>'
})