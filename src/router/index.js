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
import AddManualPayment from '@/components/admin/AddManualPayment'
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

import ResellerRegister from '@/components/reseller/Register'
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
import Recipients from '@/components/cadmin/Recipients'
import CompanyEditDIDs from '@/components/cadmin/EditDIDs'
import AddRecipient from '@/components/cadmin/AddRecipient'
import EditRecipient from '@/components/cadmin/EditRecipient'

import StaffSMSCenter from '@/components/cstaff/SMSCenter'
import StaffSMSCenterNew from '@/components/cstaff/SMSCenterNew'
import StaffSMSCenterEmpty from '@/components/cstaff/SMSCenterEmpty'

import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

import CommitChart from '@/components/admin/CommitChart'
import BarChart from '@/components/admin/BarChart'

const checkAuth = (to, from, next) => {
    var exp = new Date(localStorage.getItem('token-exp'))
    var today = new Date()

    if (localStorage.getItem('token') != '' && exp > today) {
      next()
      return
    }
    next('/login')
}

const checkAdmin = (to, from, next) => {
  if(localStorage.getItem('user-type') == 'admin'){
    next()
    return
  }
  else{
    if(localStorage.getItem('user-type') == "company_admin"){
      next('/ca/alert')
    }
    else if(localStorage.getItem('user-type') == "reseller"){
      next('/r/profile')
    }
    else{
      next('/login')
    }
  }
}

// const checkReseller = (to, from, next) => {
//   if(localStorage.getItem('user-type') == 'reseller' || localStorage.getItem('user-type') == "admin"){
//     next()
//     return
//   }
//   else{
//     if(localStorage.getItem('user-type') == "company_admin"){
//       next('/ca/alert')
//     }
//     else{
//       next('/login')
//     }
//   }
// }

const checkCompanyAdmin = (to, from, next) => {
  if(localStorage.getItem('user-type') == 'company_admin' || localStorage.getItem('user-type') == "admin"){
    next()
    return
  }
  else{
    if(localStorage.getItem('user-type') == "reseller"){
      next('/r/profile')
    }
    else{
      next('/login')
    }
  }
}

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
        component: Dashboard,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/reporting',
        name: 'Reporting',
        component: Reporting,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/product',
        name: 'Product',
        component: Product,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/add-product',
        name: 'AddProduct',
        component: AddProduct,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/template',
        name: 'Template',
        component: Template,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/billing',
        name: 'Billing',
        component: Billing,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/billing-payment',
        name: 'BillingPayment',
        component: BillingPayment,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/resellers',
        name: 'Resellers',
        component: Resellers,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/add-reseller',
        name: 'AddReseller',
        component: AddReseller,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/edit-reseller/:id',
        name: 'EditReseller',
        component: EditReseller,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/payment-history',
        name: 'PaymentHistory',
        component: PaymentHistory,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/invoice-history',
        name: 'InvoiceHistory',
        component: InvoiceHistory,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/transaction-history',
        name: 'TransactionHistory',
        component: TransactionHistory,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/add-manual-payment',
        name: 'AddManualPayment',
        component: AddManualPayment,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/users',
        name: 'Users',
        component: Users,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/add-user',
        name: 'AddUser',
        component: AddUser,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/edit-user/:id',
        name: 'EditUser',
        component: EditUser,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/companies',
        name: 'Companies',
        component: Companies,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/add-company',
        name: 'AddCompany',
        component: AddCompany,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/edit-company/:id',
        name: 'EditCompany',
        component: EditCompany,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/vendors',
        name: 'Vendors',
        component: Vendors,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/add-vendor',
        name: 'AddVendor',
        component: AddVendor,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/edit-vendor/:id',
        name: 'EditVendor',
        component: EditVendor,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/vendors-rate',
        name: 'VendorsRate',
        component: VendorsRate,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/did',
        name: 'DID',
        component: DID,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/edit-did/:id',
        name: 'EditDID',
        component: EditDID,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/import-did',
        name: 'ImportDID',
        component: ImportDID,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/verify-did',
        name: 'VerifyDID',
        component: VerifyDID,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/sys/filters',
        name: 'Filters',
        component: Filters,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/register',
        name: 'ResellerRegister',
        component: ResellerRegister
    },
    {
        path: '/r/profile',
        name: 'Profile',
        component: Profile,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/payment',
        name: 'ProfilePayment',
        component: ProfilePayment,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/product',
        name: 'ResellerProduct',
        component: ResellerProduct,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/add-product',
        name: 'ResellerAddProduct',
        component: ResellerAddProduct,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/edit-product',
        name: 'ResellerEditProduct',
        component: ResellerEditProduct,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/mail-register',
        name: 'MailTemplateRegister',
        component: MailTemplateRegister,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/mail-template',
        name: 'MailTemplate',
        component: MailTemplate,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/template',
        name: 'ResellerTemplate',
        component: ResellerTemplate,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/billing',
        name: 'ResellerBilling',
        component: ResellerBilling,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/billing-payment',
        name: 'ResellerBillingPayment',
        component: ResellerBillingPayment,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/users',
        name: 'ResellerUsers',
        component: ResellerUsers,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/add-user',
        name: 'ResellerAddUser',
        component: ResellerAddUser,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/edit-user',
        name: 'ResellerEditUser',
        component: ResellerEditUser,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/companies',
        name: 'ResellerCompanies',
        component: ResellerCompanies,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/add-company',
        name: 'ResellerAddCompany',
        component: ResellerAddCompany,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/edit-company',
        name: 'ResellerEditCompany',
        component: ResellerEditCompany,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/payment-history',
        name: 'ResellerPaymentHistory',
        component: ResellerPaymentHistory,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/invoice-history',
        name: 'ResellerInvoiceHistory',
        component: ResellerInvoiceHistory,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/transaction-history',
        name: 'ResellerTransactionHistory',
        component: ResellerTransactionHistory,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/sms-center',
        name: 'ResellerSMSCenter',
        component: ResellerSMSCenter,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/sms-center-new',
        name: 'ResellerSMSCenterNew',
        component: ResellerSMSCenterNew,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/sms-center-empty',
        name: 'ResellerSMSCenterEmpty',
        component: ResellerSMSCenterEmpty,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/vendors',
        name: 'ResellerVendors',
        component: ResellerVendors,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/add-vendor',
        name: 'ResellerAddVendor',
        component: ResellerAddVendor,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/edit-vendor',
        name: 'ResellerEditVendor',
        component: ResellerEditVendor,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/dids',
        name: 'ResellerDIDs',
        component: ResellerDIDs,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/filters',
        name: 'ResellerFilters',
        component: ResellerFilters,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/r/edit-dids',
        name: 'ResellerEditDIDs',
        component: ResellerEditDIDs,
        beforeEnter: checkAuth,
        beforeEnter: checkAdmin,
    },
    {
        path: '/ca/alert',
        name: 'Alert',
        component: Alert,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/weekly',
        name: 'AlertWeekly',
        component: AlertWeekly,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/template',
        name: 'CompanyTemplate',
        component: CompanyTemplate,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/billing',
        name: 'CompanyBilling',
        component: CompanyBilling,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/billing-payment',
        name: 'CompanyBillingPayment',
        component: CompanyBillingPayment,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/dids',
        name: 'CompanyDIDs',
        component: CompanyDIDs,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/sms-center',
        name: 'SMSCenter',
        component: SMSCenter,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/sms-center-new',
        name: 'SMSCenterNew',
        component: SMSCenterNew,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/sms-center-empty',
        name: 'SMSCenterEmpty',
        component: SMSCenterEmpty,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/callflows',
        name: 'Callflows',
        component: Callflows,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/suppression',
        name: 'Suppression',
        component: Suppression,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-suppression',
        name: 'AddSuppression',
        component: AddSuppression,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/sms-workflow',
        name: 'CompanySMSWorkflow',
        component: CompanySMSWorkflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/reminder-workflow',
        name: 'CompanyReminderWorkflow',
        component: CompanyReminderWorkflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/campaigns',
        name: 'CompanyCampaigns',
        component: CompanyCampaigns,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/all-campaings',
        name: 'AllCampaigns',
        component: AllCampaigns,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/keyword-manager',
        name: 'KeywordManager',
        component: KeywordManager,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-keyword',
        name: 'AddKeyword',
        component: AddKeyword,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/edit-sms-workflow',
        name: 'EditSMSWorkflow',
        component: EditSMSWorkflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/edit-reminder-workflow',
        name: 'EditReminderWorkflow',
        component: EditReminderWorkflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-sms-workflow',
        name: 'AddSMSWorkflow',
        component: AddSMSWorkflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-reminder-workflow',
        name: 'AddReminderWorkflow',
        component: AddReminderWorkflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/create-callflow',
        name: 'CreateCallflow',
        component: CreateCallflow,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-campaign',
        name: 'AddCampaign',
        component: AddCampaign,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-campaign-second',
        name: 'AddCampaignSecond',
        component: AddCampaignSecond,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/recipients',
        name: 'Recipients',
        component: Recipients,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/edit-dids',
        name: 'CompanyEditDIDs',
        component: CompanyEditDIDs,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/add-recipient',
        name: 'AddRecipient',
        component: AddRecipient,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
    },
    {
        path: '/ca/edit-recipient/:id',
        name: 'EditRecipient',
        component: EditRecipient,
        beforeEnter: checkAuth,
        beforeEnter: checkCompanyAdmin,
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
