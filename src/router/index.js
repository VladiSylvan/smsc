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
import EditReseller from '@/components/auth/EditReseller'
import PaymentHistory from '@/components/auth/PaymentHistory'
import InvoiceHistory from '@/components/auth/InvoiceHistory'
import TransactionHistory from '@/components/auth/TransactionHistory'
import Users from '@/components/auth/Users'
import AddUser from '@/components/auth/AddUser'
import EditUser from '@/components/auth/EditUser'
import Companies from '@/components/auth/Companies'
import AddCompany from '@/components/auth/AddCompany'
import EditCompany from '@/components/auth/EditCompany'
import Vendors from '@/components/auth/Vendors'
import AddVendor from '@/components/auth/AddVendor'
import EditVendor from '@/components/auth/EditVendor'
import VendorsRate from '@/components/auth/VendorsRate'
import DID from '@/components/auth/DID'
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
    },
    {
        path: '/editreseller',
        name: 'EditReseller',
        component: EditReseller
    },
    {
        path: '/paymenthistory',
        name: 'PaymentHistory',
        component: PaymentHistory
    },
    {
        path: '/invoicehistory',
        name: 'InvoiceHistory',
        component: InvoiceHistory
    },
    {
        path: '/transactionhistory',
        name: 'TransactionHistory',
        component: TransactionHistory
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/adduser',
        name: 'AddUser',
        component: AddUser
    },
    {
        path: '/edituser',
        name: 'EditUser',
        component: EditUser
    },
    {
        path: '/companies',
        name: 'Companies',
        component: Companies
    },
    {
        path: '/addcompany',
        name: 'AddCompany',
        component: AddCompany
    },
    {
        path: '/editcompany',
        name: 'EditCompany',
        component: EditCompany
    },
    {
        path: '/vendors',
        name: 'Vendors',
        component: Vendors
    },
    {
        path: '/addvendor',
        name: 'AddVendor',
        component: AddVendor
    },
    {
        path: '/editvendor',
        name: 'EditVendor',
        component: EditVendor
    },
    {
        path: '/vendorsrate',
        name: 'VendorsRate',
        component: VendorsRate
    },
    {
        path: '/did',
        name: 'DID',
        component: DID
    }]
})
