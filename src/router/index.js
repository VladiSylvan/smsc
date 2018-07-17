import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/auth/Login'
import RegisterPage from '@/components/auth/Register'
import Dashboard from '@/components/admin/Dashboard'
import Reporting from '@/components/admin/Reporting'
import Product from '@/components/admin/Product'
import AddProduct from '@/components/admin/AddProduct'
import Template from '@/components/admin/Template'
import Billing from '@/components/admin/Billing'
import BillingPayment from '@/components/admin/BillingPayment'
import Resellers from '@/components/admin/Resellers'
import AddReseller from '@/components/admin/AddReseller'
import EditReseller from '@/components/admin/EditReseller'
import PaymentHistory from '@/components/admin/PaymentHistory'
import InvoiceHistory from '@/components/admin/InvoiceHistory'
import TransactionHistory from '@/components/admin/TransactionHistory'
import Users from '@/components/admin/Users'
import AddUser from '@/components/admin/AddUser'
import EditUser from '@/components/admin/EditUser'
import Companies from '@/components/admin/Companies'
import AddCompany from '@/components/admin/AddCompany'
import EditCompany from '@/components/admin/EditCompany'
import Vendors from '@/components/admin/Vendors'
import AddVendor from '@/components/admin/AddVendor'
import EditVendor from '@/components/admin/EditVendor'
import VendorsRate from '@/components/admin/VendorsRate'
import DID from '@/components/admin/DID'
import EditDID from '@/components/admin/EditDID'
import ImportDID from '@/components/admin/ImportDID'
import VerifyDID from '@/components/admin/VerifyDID'
import Filters from '@/components/admin/Filters'
import Profile from '@/components/reseller/Profile'
import ProfilePayment from '@/components/reseller/ProfilePayment'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

import CommitChart from '@/components/admin/CommitChart'
import BarChart from '@/components/admin/BarChart'

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
    },
    {
        path: '/editdid',
        name: 'EditDID',
        component: EditDID
    },
    {
        path: '/importdid',
        name: 'ImportDID',
        component: ImportDID
    },
    {
        path: '/verifydid',
        name: 'VerifyDID',
        component: VerifyDID
    },
    {
        path: '/filters',
        name: 'Filters',
        component: Filters
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/profilepayment',
        name: 'ProfilePayment',
        component: ProfilePayment
    }]
})
