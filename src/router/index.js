import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/auth/Login'
import RegisterPage from '@/components/auth/Register'
import Dashboard from '@/components/auth/Dashboard'
import Reporting from '@/components/auth/Reporting'
import Product from '@/components/auth/Product'
import AddProduct from '@/components/auth/AddProduct'
import Template from '@/components/auth/Template'
import Billing from '@/components/auth/Billing'
import BillingPayment from '@/components/auth/BillingPayment'
import Resellers from '@/components/auth/Resellers'
import AddReseller from '@/components/auth/AddReseller'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

import CommitChart from '@/components/auth/CommitChart'
import BarChart from '@/components/auth/BarChart'

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
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/reporting',
        name: 'Reporting',
        component: Reporting
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/addproduct',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/template',
        name: 'Template',
        component: Template
    },
    {
        path: '/billing',
        name: 'Billing',
        component: Billing
    },
    {
        path: '/billingpayment',
        name: 'BillingPayment',
        component: BillingPayment
    },
    {
        path: '/resellers',
        name: 'Resellers',
        component: Resellers
    },
    {
        path: '/addreseller',
        name: 'AddReseller',
        component: AddReseller
    }]
})
