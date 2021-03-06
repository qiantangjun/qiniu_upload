import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MultiUpload from '../components/MultiUpload'
import MultiFormData from '../components/MultiFormData'
import ElUpload from '../components/El_upload'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/el_upload',
            name: 'El_upload',
            component: ElUpload
        },
        {
            path: '/',
            name: 'MultiUpload',
            component: MultiUpload
        },
        {
            path: '/multiformdata',
            name: 'MultiFormData',
            component: MultiFormData
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
