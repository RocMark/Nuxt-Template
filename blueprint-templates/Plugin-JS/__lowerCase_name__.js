import Vue from 'vue'
import {{lowerCase name}} from '{{lowerCase name}}'

// 將套件掛載到 Vue 的 原型鍊上
Vue.prototype.${{lowerCase name}} = {{lowerCase name}}

// 安裝 plugin ( nuxt.config.js ) 加上下列
// plugins: [ {src:'~/plugins/{{lowerCase name}}.js', mode:'client'} ]
