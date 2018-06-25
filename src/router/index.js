import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/auth/Login'
import RegisterPage from '@/components/auth/Register'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    }]
})
