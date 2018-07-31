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
import ResellerProduct from '@/components/reseller/Product'
import ResellerAddProduct from '@/components/reseller/AddProduct'
import ResellerEditProduct from '@/components/reseller/EditProduct'
import MailTemplateRegister from '@/components/reseller/MailTemplateRegister'
import MailTemplate from '@/components/reseller/MailTemplate'
import ResellerTemplate from '@/components/reseller/Template'
import ResellerBilling from '@/components/reseller/Billing'
import ResellerBillingPayment from '@/components/reseller/BillingPayment'
import ResellerUsers from '@/components/reseller/Users'
import ResellerAddUser from '@/components/reseller/AddUser'
import ResellerEditUser from '@/components/reseller/EditUser'
import ResellerCompanies from '@/components/reseller/Companies'
import ResellerAddCompany from '@/components/reseller/AddCompany'
import ResellerEditCompany from '@/components/reseller/EditCompany'
import ResellerPaymentHistory from '@/components/reseller/PaymentHistory'
import ResellerInvoiceHistory from '@/components/reseller/InvoiceHistory'
import ResellerTransactionHistory from '@/components/reseller/TransactionHistory'
import ResellerVendors from '@/components/reseller/Vendors'
import ResellerAddVendor from '@/components/reseller/AddVendor'
import ResellerEditVendor from '@/components/reseller/EditVendor'
import ResellerDIDs from '@/components/reseller/DIDs'
import ResellerFilters from '@/components/reseller/Filters'
import ResellerEditDIDs from '@/components/reseller/EditDIDs'
import ResellerSMSCenter from '@/components/reseller/SMSCenter'
import ResellerSMSCenterNew from '@/components/reseller/SMSCenterNew'
import ResellerSMSCenterEmpty from '@/components/reseller/SMSCenterEmpty'

import Alert from '@/components/cadmin/Alert'
import AlertWeekly from '@/components/cadmin/AlertWeekly'
import CompanyTemplate from '@/components/cadmin/Template'
import CompanyBilling from '@/components/cadmin/Billing'
import CompanyBillingPayment from '@/components/cadmin/BillingPayment'
import CompanyDIDs from '@/components/cadmin/DIDs'
import SMSCenter from '@/components/cadmin/SMSCenter'
import Callflows from '@/components/cadmin/Callflows'
import Suppression from '@/components/cadmin/Suppression'
import AddSuppression from '@/components/cadmin/AddSuppression'
import CompanySMSWorkflow from '@/components/cadmin/SMSWorkflow'
import CompanyReminderWorkflow from '@/components/cadmin/ReminderWorkflow'
import CompanyCampaigns from '@/components/cadmin/Campaigns'
import AllCampaigns from '@/components/cadmin/AllCampaigns'
import KeywordManager from '@/components/cadmin/KeywordManager'
import AddKeyword from '@/components/cadmin/AddKeyword'
import EditSMSWorkflow from '@/components/cadmin/EditSMSWorkflow'
import EditReminderWorkflow from '@/components/cadmin/EditReminderWorkflow'
import AddSMSWorkflow from '@/components/cadmin/AddSMSWorkflow'
import AddReminderWorkflow from '@/components/cadmin/AddReminderWorkflow'
import CreateCallflow from '@/components/cadmin/CreateCallflow'
import AddCampaign from '@/components/cadmin/AddCampaign'
import AddCampaignSecond from '@/components/cadmin/AddCampaignSecond'
import SMSCenterNew from '@/components/cadmin/SMSCenterNew'
import SMSCenterEmpty from '@/components/cadmin/SMSCenterEmpty'

import StaffSMSCenter from '@/components/cstaff/SMSCenter'
import StaffSMSCenterNew from '@/components/cstaff/SMSCenterNew'
import StaffSMSCenterEmpty from '@/components/cstaff/SMSCenterEmpty'

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
        path: '/sys/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/sys/reporting',
        name: 'Reporting',
        component: Reporting
    },
    {
        path: '/sys/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/sys/add-product',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/sys/template',
        name: 'Template',
        component: Template
    },
    {
        path: '/sys/billing',
        name: 'Billing',
        component: Billing
    },
    {
        path: '/sys/billing-payment',
        name: 'BillingPayment',
        component: BillingPayment
    },
    {
        path: '/sys/resellers',
        name: 'Resellers',
        component: Resellers
    },
    {
        path: '/sys/add-reseller',
        name: 'AddReseller',
        component: AddReseller
    },
    {
        path: '/sys/edit-reseller',
        name: 'EditReseller',
        component: EditReseller
    },
    {
        path: '/sys/payment-history',
        name: 'PaymentHistory',
        component: PaymentHistory
    },
    {
        path: '/sys/invoice-history',
        name: 'InvoiceHistory',
        component: InvoiceHistory
    },
    {
        path: '/sys/transaction-history',
        name: 'TransactionHistory',
        component: TransactionHistory
    },
    {
        path: '/sys/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/sys/add-user',
        name: 'AddUser',
        component: AddUser
    },
    {
        path: '/sys/edit-user',
        name: 'EditUser',
        component: EditUser
    },
    {
        path: '/sys/companies',
        name: 'Companies',
        component: Companies
    },
    {
        path: '/sys/add-company',
        name: 'AddCompany',
        component: AddCompany
    },
    {
        path: '/sys/edit-company',
        name: 'EditCompany',
        component: EditCompany
    },
    {
        path: '/sys/vendors',
        name: 'Vendors',
        component: Vendors
    },
    {
        path: '/sys/add-vendor',
        name: 'AddVendor',
        component: AddVendor
    },
    {
        path: '/sys/edit-vendor',
        name: 'EditVendor',
        component: EditVendor
    },
    {
        path: '/sys/vendors-rate',
        name: 'VendorsRate',
        component: VendorsRate
    },
    {
        path: '/sys/did',
        name: 'DID',
        component: DID
    },
    {
        path: '/sys/edit-did',
        name: 'EditDID',
        component: EditDID
    },
    {
        path: '/sys/import-did',
        name: 'ImportDID',
        component: ImportDID
    },
    {
        path: '/sys/verify-did',
        name: 'VerifyDID',
        component: VerifyDID
    },
    {
        path: '/sys/filters',
        name: 'Filters',
        component: Filters
    },
    {
        path: '/r/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/r/payment',
        name: 'ProfilePayment',
        component: ProfilePayment
    },
    {
        path: '/r/product',
        name: 'ResellerProduct',
        component: ResellerProduct
    },
    {
        path: '/r/add-product',
        name: 'ResellerAddProduct',
        component: ResellerAddProduct
    },
    {
        path: '/r/edit-product',
        name: 'ResellerEditProduct',
        component: ResellerEditProduct
    },
    {
        path: '/r/register',
        name: 'MailTemplateRegister',
        component: MailTemplateRegister
    },
    {
        path: '/r/mail-template',
        name: 'MailTemplate',
        component: MailTemplate
    },
    {
        path: '/r/template',
        name: 'ResellerTemplate',
        component: ResellerTemplate
    },
    {
        path: '/r/billing',
        name: 'ResellerBilling',
        component: ResellerBilling
    },
    {
        path: '/r/billing-payment',
        name: 'ResellerBillingPayment',
        component: ResellerBillingPayment
    },
    {
        path: '/r/users',
        name: 'ResellerUsers',
        component: ResellerUsers
    },
    {
        path: '/r/add-user',
        name: 'ResellerAddUser',
        component: ResellerAddUser
    },
    {
        path: '/r/edit-user',
        name: 'ResellerEditUser',
        component: ResellerEditUser
    },
    {
        path: '/r/companies',
        name: 'ResellerCompanies',
        component: ResellerCompanies
    },
    {
        path: '/r/add-company',
        name: 'ResellerAddCompany',
        component: ResellerAddCompany
    },
    {
        path: '/r/edit-company',
        name: 'ResellerEditCompany',
        component: ResellerEditCompany
    },
    {
        path: '/r/payment-history',
        name: 'ResellerPaymentHistory',
        component: ResellerPaymentHistory
    },
    {
        path: '/r/invoice-history',
        name: 'ResellerInvoiceHistory',
        component: ResellerInvoiceHistory
    },
    {
        path: '/r/transaction-history',
        name: 'ResellerTransactionHistory',
        component: ResellerTransactionHistory
    },
    {
        path: '/r/sms-center',
        name: 'ResellerSMSCenter',
        component: ResellerSMSCenter
    },
    {
        path: '/r/sms-center-new',
        name: 'ResellerSMSCenterNew',
        component: ResellerSMSCenterNew
    },
    {
        path: '/r/sms-center-empty',
        name: 'ResellerSMSCenterEmpty',
        component: ResellerSMSCenterEmpty
    },
    {
        path: '/r/vendors',
        name: 'ResellerVendors',
        component: ResellerVendors
    },
    {
        path: '/r/add-vendor',
        name: 'ResellerAddVendor',
        component: ResellerAddVendor
    },
    {
        path: '/r/edit-vendor',
        name: 'ResellerEditVendor',
        component: ResellerEditVendor
    },
    {
        path: '/r/dids',
        name: 'ResellerDIDs',
        component: ResellerDIDs
    },
    {
        path: '/r/filters',
        name: 'ResellerFilters',
        component: ResellerFilters
    },
    {
        path: '/r/edit-dids',
        name: 'ResellerEditDIDs',
        component: ResellerEditDIDs
    },
    {
        path: '/ca/alert',
        name: 'Alert',
        component: Alert
    },
    {
        path: '/ca/weekly',
        name: 'AlertWeekly',
        component: AlertWeekly
    },
    {
        path: '/ca/template',
        name: 'CompanyTemplate',
        component: CompanyTemplate
    },
    {
        path: '/ca/billing',
        name: 'CompanyBilling',
        component: CompanyBilling
    },
    {
        path: '/ca/billing-payment',
        name: 'CompanyBillingPayment',
        component: CompanyBillingPayment
    },
    {
        path: '/ca/dids',
        name: 'CompanyDIDs',
        component: CompanyDIDs
    },
    {
        path: '/ca/sms-center',
        name: 'SMSCenter',
        component: SMSCenter
    },
    {
        path: '/ca/sms-center-new',
        name: 'SMSCenterNew',
        component: SMSCenterNew
    },
    {
        path: '/ca/sms-center-empty',
        name: 'SMSCenterEmpty',
        component: SMSCenterEmpty
    },
    {
        path: '/ca/callflows',
        name: 'Callflows',
        component: Callflows
    },
    {
        path: '/ca/suppression',
        name: 'Suppression',
        component: Suppression
    },
    {
        path: '/ca/add-suppression',
        name: 'AddSuppression',
        component: AddSuppression
    },
    {
        path: '/ca/sms-workflow',
        name: 'CompanySMSWorkflow',
        component: CompanySMSWorkflow
    },
    {
        path: '/ca/reminder-workflow',
        name: 'CompanyReminderWorkflow',
        component: CompanyReminderWorkflow
    },
    {
        path: '/ca/campaigns',
        name: 'CompanyCampaigns',
        component: CompanyCampaigns
    },
    {
        path: '/ca/all-campaings',
        name: 'AllCampaigns',
        component: AllCampaigns
    },
    {
        path: '/ca/keyword-manager',
        name: 'KeywordManager',
        component: KeywordManager
    },
    {
        path: '/ca/add-keyword',
        name: 'AddKeyword',
        component: AddKeyword
    },
    {
        path: '/ca/edit-sms-workflow',
        name: 'EditSMSWorkflow',
        component: EditSMSWorkflow
    },
    {
        path: '/ca/edit-reminder-workflow',
        name: 'EditReminderWorkflow',
        component: EditReminderWorkflow
    },
    {
        path: '/ca/add-sms-workflow',
        name: 'AddSMSWorkflow',
        component: AddSMSWorkflow
    },
    {
        path: '/ca/add-reminder-workflow',
        name: 'AddReminderWorkflow',
        component: AddReminderWorkflow
    },
    {
        path: '/ca/create-callflow',
        name: 'CreateCallflow',
        component: CreateCallflow
    },
    {
        path: '/ca/add-campaign',
        name: 'AddCampaign',
        component: AddCampaign
    },
    {
        path: '/ca/add-campaign-second',
        name: 'AddCampaignSecond',
        component: AddCampaignSecond
    },
    {
        path: '/cs/sms-center',
        name: 'StaffSMSCenter',
        component: StaffSMSCenter
    },
    {
        path: '/cs/sms-center-new',
        name: 'StaffSMSCenterNew',
        component: StaffSMSCenterNew
    },
    {
        path: '/cs/sms-center-empty',
        name: 'StaffSMSCenterEmpty',
        component: StaffSMSCenterEmpty
    }]
})
